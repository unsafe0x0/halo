"use client";
import React, { useState, useRef, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import ModelDropdown from "../common/ModelDropdown";
import Button from "../common/Button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { LuSendHorizontal } from "react-icons/lu";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const models = [
  { label: "GPT-OSS", value: "openai/gpt-oss-120b" },
  { label: "Llama 3.1", value: "llama-3.1-8b-instant" },
  { label: "Qwen 3", value: "qwen/qwen3-32b" },
];

const HaloAi = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [selectedModel, setSelectedModel] = useState("openai/gpt-oss-120b");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [allowBlur, setAllowBlur] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("halo-chat-messages");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setMessages(
          parsed.map((msg: Message) => ({
            ...msg,
            timestamp: new Date(msg.timestamp),
          })),
        );
      } catch (err) {
        console.error("Failed to load messages", err);
      }
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("halo-chat-messages", JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        textareaRef.current &&
        !textareaRef.current.contains(e.target as Node)
      ) {
        setAllowBlur(true);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (!allowBlur && textareaRef.current) {
      textareaRef.current.focus();
    }
  });

  const sendMessage = useMutation({
    mutationFn: async (prompt: string) => {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: selectedModel,
          promptType: "chat",
          messages: [{ role: "user", content: prompt }],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      return response.json();
    },
    onSuccess: (data) => {
      const assistantMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: data.output,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setAllowBlur(false);
    },
    onError: () => {
      const errorMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: "Sorry, something went wrong. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      setAllowBlur(false);
    },
  });

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    sendMessage.mutate(input);
    setInput("");

    setAllowBlur(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleNewChat = () => {
    localStorage.removeItem("halo-chat-messages");
    setMessages([]);
    setInput("");
    setAllowBlur(false);
  };

  const exportChat = (messages: Message[]) => {
    const text = messages
      .map((m) => {
        const time = m.timestamp.toISOString();
        return `[${m.role}] ${time}\n${m.content}`;
      })
      .join("\n\n");

    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "chat.txt";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative w-full h-screen flex flex-col bg-background">
      <div className="absolute top-4 left-4 z-10 flex gap-2 items-center">
        <Button
          variant="primary"
          size="medium"
          onClick={handleNewChat}
          className="flex items-center gap-2 border border-border"
        >
          New Chat
        </Button>
        <Button
          variant="ghost"
          size="medium"
          onClick={() => exportChat(messages)}
          className="flex items-center gap-2 border border-border"
        >
          Export
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-4 mb-32 pt-16">
        {messages.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                Welcome to Halo AI
              </h2>
              <p className="text-foreground-1">
                Select a model and start asking questions
              </p>
            </div>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`${
                  message.role === "user"
                    ? "bg-accent text-accent-foreground rounded-br-none"
                    : "bg-card border border-border text-foreground rounded-bl-none"
                } px-4 py-3 rounded-lg`}
                style={{ maxWidth: "90%" }}
              >
                <p className="text-sm md:text-base whitespace-pre-wrap wrap-break-word">
                  {message.content}
                </p>
              </div>
            </div>
          ))
        )}
        {sendMessage.isPending && (
          <div className="flex justify-start">
            <div className="bg-card border border-border text-foreground px-4 py-3 rounded-lg rounded-bl-none flex items-center gap-2">
              <AiOutlineLoading3Quarters className="w-4 h-4 animate-spin" />
              <span className="text-sm">Thinking...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="fixed bottom-0 left-0 lg:left-64 right-0 p-4 md:p-6 border-t border-border bg-card">
        <div className="relative">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            onBlur={() => {
              if (!allowBlur) {
                textareaRef.current?.focus();
              }
            }}
            onFocus={() => setAllowBlur(false)}
            placeholder="Type your message... (Shift + Enter for new line)"
            className="w-full px-4 py-3 pr-32 rounded-md bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-accent resize-none"
            rows={3}
          />

          <div className="absolute bottom-3 right-3 flex gap-2 items-center">
            <div className="relative">
              <ModelDropdown
                items={models}
                placeholder="Select model..."
                onSelect={setSelectedModel}
              />
            </div>

            <Button
              variant="primary"
              size="medium"
              onClick={handleSendMessage}
              disabled={sendMessage.isPending || !input.trim()}
              className="flex items-center justify-center gap-2"
            >
              {sendMessage.isPending ? (
                <AiOutlineLoading3Quarters className="w-4 h-4 animate-spin" />
              ) : (
                <LuSendHorizontal className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HaloAi;

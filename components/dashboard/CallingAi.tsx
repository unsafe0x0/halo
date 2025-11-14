"use client";
import React, { useState, useRef, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import Button from "../common/Button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdCallEnd } from "react-icons/md";
import { IoMic, IoMicOff } from "react-icons/io5";
import { InterviewDetails } from "./NewInterview";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface CallingAiProps {
  isActive: boolean;
  interviewDetails: InterviewDetails | null;
  onCallEnd: (messages: Message[]) => void;
}

const CallingAi: React.FC<CallingAiProps> = ({
  isActive,
  interviewDetails,
  onCallEnd,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const synthRef = useRef<SpeechSynthesisUtterance | null>(null);
  const recognitionRef = useRef<any>(null);
  const pendingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingInputRef = useRef<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        (window as any).SpeechRecognition ||
        (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;

        recognitionRef.current.onstart = () => {
          setListening(true);
          setTranscript("");
        };

        recognitionRef.current.onresult = (event: any) => {
          let interim = "";
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcriptSegment = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              handleSendMessage(transcriptSegment);
            } else {
              interim += transcriptSegment;
            }
          }
          setTranscript(interim);
        };

        recognitionRef.current.onerror = (event: any) => {
          console.error("Speech recognition error:", event.error);
          setListening(false);
        };

        recognitionRef.current.onend = () => {
          setListening(false);
          setTranscript("");
        };
      }
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const [hasSentIntro, setHasSentIntro] = useState(false);

  const buildInterviewPrompt = (prompt: string) =>
    `${interviewDetails?.role} interview. Candidate: ${interviewDetails?.name} with ${interviewDetails?.experience} experience. ${prompt}`;

  const sendMessage = useMutation({
    mutationFn: async (prompt: string) => {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: interviewDetails?.model,
          promptType: "interview",
          messages: [
            {
              role: "user",
              content: buildInterviewPrompt(`User message: ${prompt}`),
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      return response.json();
    },
    onSuccess: (data) => {
      const assistantMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: data.output,
      };
      setMessages((prev) => [...prev, assistantMessage]);

      if (interviewDetails?.voice) {
        speakText(data.output);
      }
    },
    onError: () => {
      const errorMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: "Sorry, something went wrong. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    },
  });

  const speakText = (text: string) => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();

      if (recognitionRef.current && listening) {
        recognitionRef.current.stop();
      }

      const utterance = new SpeechSynthesisUtterance(text);
      const voices = window.speechSynthesis.getVoices();
      const selectedVoice = voices.find(
        (v) => v.name === interviewDetails?.voice,
      );

      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => {
        setIsSpeaking(false);
        setTimeout(() => {
          if (recognitionRef.current) {
            recognitionRef.current.start();
          }
        }, 500);
      };
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
      synthRef.current = utterance;
    }
  };

  const handleSendMessage = (userInput: string) => {
    if (!userInput.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: userInput,
    };

    setMessages((prev) => [...prev, userMessage]);
    setTranscript("");
    pendingInputRef.current = userInput;
    if (pendingTimeoutRef.current) {
      clearTimeout(pendingTimeoutRef.current);
    }
    pendingTimeoutRef.current = setTimeout(() => {
      if (pendingInputRef.current) {
        sendMessage.mutate(pendingInputRef.current);
        pendingInputRef.current = null;
      }
      pendingTimeoutRef.current = null;
    }, 3000);

    if (recognitionRef.current && listening) {
      recognitionRef.current.stop();
      setTimeout(() => {
        recognitionRef.current?.start();
      }, 100);
    }
  };

  const sendIntroPrompt = () => {
    if (!interviewDetails || hasSentIntro) return;

    const introContent = buildInterviewPrompt(
      "Please ask the first interview question, referencing the candidate details above.",
    );

    const introMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: introContent,
    };

    setMessages((prev) => [...prev, introMessage]);
    sendMessage.mutate("Please ask the first question.");
    setHasSentIntro(true);
  };

  const toggleListening = () => {
    if (isSpeaking || !recognitionRef.current) return;

    if (listening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
  };

  useEffect(() => {
    if (isActive && interviewDetails && !hasSentIntro) {
      sendIntroPrompt();
    }
    if (!isActive) {
      setHasSentIntro(false);
    }
  }, [isActive, interviewDetails, hasSentIntro]);

  const handleEndCall = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (pendingTimeoutRef.current) {
      clearTimeout(pendingTimeoutRef.current);
      pendingTimeoutRef.current = null;
    }
    pendingInputRef.current = null;
    onCallEnd(messages);
  };

  useEffect(() => {
    return () => {
      if (pendingTimeoutRef.current) {
        clearTimeout(pendingTimeoutRef.current);
      }
    };
  }, []);

  if (!isActive || !interviewDetails) return null;

  return (
    <div className="fixed inset-0 bg-background z-9999 flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-4">
        {messages.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-center">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Interview Starting...
              </h3>
              <p className="text-foreground-1">
                Click the microphone to start speaking
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
                <p className="text-sm md:text-base wrap-break-word">
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

        {isSpeaking && (
          <div className="flex justify-start">
            <div className="bg-card border border-border text-foreground px-4 py-3 rounded-lg rounded-bl-none flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-accent rounded-full animate-pulse"></div>
                <div className="w-1 h-4 bg-accent rounded-full animate-pulse delay-100"></div>
                <div className="w-1 h-4 bg-accent rounded-full animate-pulse delay-200"></div>
              </div>
              <span className="text-sm">Speaking...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {transcript && (
        <div className="border-t border-border bg-card p-3 md:p-4">
          <p className="text-xs text-foreground-1 mb-1">Live Transcript:</p>
          <p className="text-sm text-foreground">{transcript}</p>
        </div>
      )}

      <div className="border-t border-border bg-card p-6 md:p-8">
        <div className="flex flex-row items-center justify-center gap-4">
          <Button
            variant={listening ? "destructive" : "primary"}
            size="medium"
            onClick={toggleListening}
            disabled={isSpeaking}
            className=""
          >
            {listening ? <IoMic size={20} /> : <IoMicOff size={20} />}
            {listening ? "Listening..." : "Tap to speak"}
          </Button>

          <Button
            variant="destructive"
            size="medium"
            onClick={handleEndCall}
            className=""
          >
            <MdCallEnd size={20} />
            End Call
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallingAi;

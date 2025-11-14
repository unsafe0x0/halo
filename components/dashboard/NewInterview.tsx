"use client";
import React, { useState, useEffect } from "react";
import Dropdown from "../common/Dropdown";
import Button from "../common/Button";
import Input from "../common/Input";
import { IoClose } from "react-icons/io5";

interface NewInterviewDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onStart: (details: InterviewDetails) => void;
}

export interface InterviewDetails {
  model: string;
  role: string;
  name: string;
  experience: string;
  voice: string;
}

const models = [
  { label: "GPT-OSS", value: "openai/gpt-oss-120b" },
  { label: "Llama 3.1", value: "llama-3.1-8b-instant" },
  { label: "Qwen 3", value: "qwen/qwen3-32b" },
];

const NewInterview: React.FC<NewInterviewDialogProps> = ({
  isOpen,
  onClose,
  onStart,
}) => {
  const [selectedModel, setSelectedModel] = useState("openai/gpt-oss-20b");
  const [selectedVoice, setSelectedVoice] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");
  const [voices, setVoices] = useState<{ label: string; value: string }[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      const getVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        const voiceList = availableVoices.map((voice) => ({
          label: `${voice.name} (${voice.lang})`,
          value: voice.name,
        }));
        setVoices(voiceList);
        if (voiceList.length > 0 && !selectedVoice) {
          setSelectedVoice(voiceList[0].value);
        }
      };

      getVoices();

      window.speechSynthesis.onvoiceschanged = getVoices;
    }
  }, []);

  const handleStart = () => {
    if (!role.trim() || !name.trim() || !experience.trim() || !selectedVoice) {
      alert("Please fill in all fields");
      return;
    }

    onStart({
      model: selectedModel,
      role,
      name,
      experience,
      voice: selectedVoice,
    });

    setRole("");
    setName("");
    setExperience("");
  };

  const handleClose = () => {
    setRole("");
    setName("");
    setExperience("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-card border border-border rounded-lg p-6 md:p-8 w-full max-w-md mx-4 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            Start Interview
          </h2>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-background rounded-md transition-colors"
            aria-label="Close"
          >
            <IoClose className="w-6 h-6 text-foreground" />
          </button>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Select Model
            </label>
            <Dropdown
              items={models}
              placeholder="Select model..."
              onSelect={setSelectedModel}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Voice Pack
            </label>
            <Dropdown
              items={voices}
              placeholder="Select voice..."
              onSelect={setSelectedVoice}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Your Name
            </label>
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Role
            </label>
            <Input
              type="text"
              placeholder="e.g., Software Engineer, Product Manager"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Years of Experience
            </label>
            <Input
              type="text"
              placeholder="e.g., 5 years"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-3">
          <Button variant="primary" onClick={handleStart} className="w-full">
            Start Interview
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewInterview;

"use client";
import { useState } from "react";
import Image from "next/image";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

interface UserDetails {
  name?: string;
  email?: string;
  profileImage?: string;
  password?: string;
  githubUsername?: string;
}

interface SettingsTabProps {
  userDetails?: UserDetails;
}

const SettingsTab = ({ userDetails }: SettingsTabProps) => {
  if (!userDetails) {
    return <div>No user details available</div>;
  }

  const [formData, setFormData] = useState({
    name: userDetails.name,
    password: userDetails.password || "",
    githubUsername: userDetails.githubUsername || "",
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await fetch("/api/user/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to update user data");
      }
      return response.json();
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync(formData);
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Error updating profile");
    }
  };

  const getInitials = (name?: string): string => {
    if (!name) return "?";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 flex-1 overflow-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-foreground-1 text-base">
          Update your profile and account information
        </p>
      </div>

      <div className="mb-8 flex items-center gap-4">
        {userDetails.profileImage ? (
          <Image
            src={userDetails.profileImage}
            alt={userDetails.name || "Profile"}
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center">
            <span className="text-xl font-bold text-foreground">
              {getInitials(userDetails.name)}
            </span>
          </div>
        )}
        <div>
          <p className="text-sm text-foreground-1 mb-1">Email</p>
          <p className="text-base font-medium text-foreground">
            {userDetails.email || "-"}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6  max-w-md">
        <Input
          label="Name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Enter your name"
        />

        <Input
          label="Password"
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          placeholder="Enter new password (leave blank to keep current)"
        />

        <Input
          label="GitHub Username"
          type="text"
          value={formData.githubUsername}
          onChange={(e) =>
            setFormData({ ...formData, githubUsername: e.target.value })
          }
          placeholder="Enter your GitHub username"
        />

        <div className="pt-4">
          <Button
            type="submit"
            disabled={isPending}
            className="w-full md:w-auto"
          >
            {isPending ? "Saving..." : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SettingsTab;

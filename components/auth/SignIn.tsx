"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Button from "../common/Button";
import Input from "../common/Input";
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    await signIn("google", { callbackUrl: "/" });
    setLoading(false);
  };

  const handleCredentialsSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary p-4">
      <div className="w-full max-w-md bg-card border border-border rounded-lg p-8 shadow-xl">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Sign In to Halo
        </h1>

        <Button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full mb-4 flex items-center justify-center gap-2"
          variant="secondary"
        >
          <FaGoogle className="w-5 h-5" />
          Sign in with Google
        </Button>

        <div className="flex items-center mb-4">
          <div className="flex-1 border-t border-border"></div>
          <span className="px-2 text-muted text-sm">or</span>
          <div className="flex-1 border-t border-border"></div>
        </div>

        <form onSubmit={handleCredentialsSignIn} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={setEmail}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={setPassword}
            required
          />
          <Button
            type="submit"
            disabled={loading}
            className="w-full"
            variant="primary"
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

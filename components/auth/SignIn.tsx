"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCredentialsSignIn = async () => {
    setError(null);

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    setLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      setLoading(false);

      if (res?.ok) {
        const redirectUrl = res?.url || "/dashboard";
        window.location.href = redirectUrl;
        return;
      }

      if (res?.error) {
        if (res.error === "CredentialsSignin") {
          setError("Invalid email or password");
        } else {
          setError(res.error);
        }
      } else {
        setError("Sign in failed. Please try again.");
      }
    } catch (err) {
      setLoading(false);
      setError("An error occurred. Please try again.");
      console.error("Sign in error:", err);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    setLoading(true);
    await signIn("google", { callbackUrl: "/dashboard" });
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center py-20 px-2">
      <div className="max-w-md mx-auto w-full p-6 rounded-lg bg-card border border-border">
        <h2 className="text-3xl font-bold mb-2">Sign in to Halo</h2>
        <p className="text-sm text-foreground-1 mb-6">
          Access personalized AI interview practice and feedback.
        </p>

        <div className="flex flex-col gap-3 mb-4">
          <Button
            size="medium"
            variant="ghost"
            className="w-full flex items-center justify-center gap-3 bg-background border border-border hover:ring-2 hover:ring-accent transition-all"
            onClick={handleGoogleSignIn}
          >
            <FaGoogle size={18} className="text-accent" />
            <span>Continue with Google</span>
          </Button>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-border" />
          <div className="text-sm text-foreground-1">or</div>
          <div className="flex-1 h-px bg-border" />
        </div>

        <form className="flex flex-col gap-4">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="yourgmail@gmail.com"
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />

          {error && <div className="text-sm text-destructive">{error}</div>}

          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <Link
                href="/forgot-password"
                className="text-sm text-foreground-1 hover:text-accent"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              size="large"
              variant="primary"
              className="w-full"
              disabled={loading}
              onClick={handleCredentialsSignIn}
            >
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

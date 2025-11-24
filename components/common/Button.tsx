import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "ghost" | "destructive" | "outline";
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  onClick,
  disabled,
  className,
  size,
  variant,
  type = "button",
}: ButtonProps) => {
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm rounded",
    medium: "px-4 py-2 text-base rounded-md",
    large: "px-5 py-2.5 text-lg rounded-lg",
  };

  const variantClasses = {
    primary: "bg-accent text-accent-foreground hover:accent-hover",
    ghost: "bg-neutral-100 text-neutral-800 hover:bg-neutral-200",
    outline:
      "bg-transparent border border-border text-foreground hover:bg-card",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  };

  return (
    <button
      type={type}
      className={`font-medium cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 ${
        sizeClasses[size || "medium"]
      } ${variantClasses[variant || "primary"]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

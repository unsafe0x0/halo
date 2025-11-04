import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "ghost" | "destructive";
}

const Button = ({
  children,
  onClick,
  disabled,
  className,
  size,
  variant,
}: ButtonProps) => {
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm rounded",
    medium: "px-4 py-2 text-base rounded-md",
    large: "px-5 py-2.5 text-lg rounded-lg",
  };

  const variantClasses = {
    primary: "bg-accent text-accent-foreground hover:accent-hover",
    ghost: "bg-transparent text-foreground hover:bg-card",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive-hover",
  };

  return (
    <button
      className={`font-medium  cursor-pointer disabled:opacity-50 ${
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

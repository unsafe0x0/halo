import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  className,
  type = "button",
  variant = "primary",
  size = "medium",
}) => {
  const variantClasses = {
    primary: "bg-accent text-white hover:bg-accent-hover border-accent",
    secondary:
      "bg-card text-accent hover:bg-accent-hover hover:text-white border-accent",
    tertiary:
      "bg-destructive text-white hover:bg-destructive-hover border-destructive",
  };

  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-md",
    large: "px-6 py-2.5 text-base",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${variantClasses[variant]} ${sizeClasses[size]} border rounded-md outline-none cursor-pointer transition duration-200 ease-in-out hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;

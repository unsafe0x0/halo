import React from "react";

interface InputProps {
  type?: "text" | "email" | "password" | "number";
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className,
  disabled,
  required,
  name,
  id,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={`${className} outline-none text-sm font-normal bg-card border border-border rounded-md focus:border-accent p-2.5 w-full transition-colors duration-200`}
      disabled={disabled}
      required={required}
      name={name}
      id={id}
    />
  );
};

export default Input;

import React from "react";

interface InputProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  className?: string;
}

const Input = ({
  label,
  value,
  onChange,
  placeholder,
  type,
  disabled,
  className,
}: InputProps) => {
  return (
    <div
      className={`flex flex-col justify-start items-start w-full ${className}`}
    >
      {label && <label className="mb-1 text-lg font-medium">{label}</label>}
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        className="border border-border rounded-md text-md font-normal px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50 transition-all bg-card text-foreground"
      />
    </div>
  );
};

export default Input;

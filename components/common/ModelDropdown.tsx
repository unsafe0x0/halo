"use client";
import React, { useState, useEffect, useRef } from "react";

interface ModelItem {
  label: string;
  value: string;
}

interface ModelDropdownProps {
  items: ModelItem[];
  onSelect?: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

const ModelDropdown = ({
  items,
  onSelect,
  placeholder = "Select model...",
  className = "",
  disabled = false,
}: ModelDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<ModelItem | null>(items[0] || null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (item: ModelItem) => {
    setSelected(item);
    if (onSelect) onSelect(item.value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`relative inline-block text-left min-w-36 max-w-40 ${className}`}
    >
      <button
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`flex items-center gap-2 justify-center w-full px-4 py-2 text-sm font-medium text-foreground bg-card border border-border focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${
          isOpen
            ? "rounded-b-md rounded-t-none border-t-0"
            : "rounded-md hover:ring-1 hover:ring-accent"
        }`}
      >
        <span className="truncate">
          {selected ? selected.label : placeholder}
        </span>
      </button>

      {isOpen && (
        <div className="absolute bottom-full left-0 z-50 w-full bg-card border border-border border-b-0 rounded-t-md overflow-hidden">
          <ul className="py-1 max-h-60 overflow-y-auto">
            {items.length === 0 ? (
              <li className="px-4 py-2 text-sm text-foreground">No models</li>
            ) : (
              items.map((item) => (
                <li
                  key={item.value}
                  onClick={() => handleSelect(item)}
                  className={`flex items-center px-4 py-2 text-sm cursor-pointer transition-colors duration-200 truncate ${
                    selected?.value === item.value
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-card-1"
                  }`}
                >
                  <span className="truncate">{item.label}</span>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ModelDropdown;

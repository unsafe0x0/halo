"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";

interface DropdownItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface DropdownProps {
  items: DropdownItem[];
  onSelect?: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

const Dropdown = ({
  items,
  onSelect,
  placeholder = "Select...",
  className = "",
  disabled = false,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<DropdownItem | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  function handleSelect(item: DropdownItem) {
    setSelected(item);
    setOpen(false);
    if (onSelect) onSelect(item.value);
  }

  return (
    <div ref={dropdownRef} className={`relative w-full ${className}`}>
      <button
        type="button"
        className={`flex items-center justify-between w-full px-4 py-2 border border-border rounded-md bg-card text-foreground text-sm font-normal focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => !disabled && setOpen((o) => !o)}
        disabled={disabled}
      >
        <span className="flex items-center gap-2">
          {selected?.icon}
          {selected ? selected.label : placeholder}
        </span>
        <FaAngleDown
          width={16}
          height={16}
          className={`ml-2 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-full bg-card border border-border rounded-md shadow-lg z-10 max-h-64 overflow-y-auto">
          {items.length === 0 ? (
            <div className="px-4 py-2 text-foreground text-sm">No items</div>
          ) : (
            items.map((item) => (
              <button
                key={item.value}
                type="button"
                className={`flex items-center w-full px-4 py-2 text-left text-foreground text-sm font-normal hover:bg-card-1 transition-colors ${
                  selected?.value === item.value
                    ? "bg-accent text-accent-foreground"
                    : ""
                }`}
                onClick={() => handleSelect(item)}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.label}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

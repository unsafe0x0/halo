"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { IoClose, IoMenu, IoLogOut } from "react-icons/io5";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { data: session } = useSession();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setProfileMenuOpen(false);
      }
    }
    if (profileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileMenuOpen]);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "#features" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 border-b border-border bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 w-full">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold cursor-pointer hover:text-accent transition-opacity">
              Halo
            </div>
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-foreground hover:text-accent transition-colors font-medium p-1.5 hover:bg-card rounded-md"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-card transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <BsSun size={18} /> : <BsMoon size={18} />}
            </button>

            {session?.user ? (
              <div ref={profileMenuRef} className="relative">
                <button
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  className="flex items-center gap-2 p-1 rounded-lg hover:bg-card transition-colors"
                  aria-label="Profile menu"
                >
                  {session.user.image && (
                    <Image
                      src={session.user.image}
                      alt={session.user.name || "User"}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  )}
                  {!session.user.image && (
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                      {session.user.name?.charAt(0).toUpperCase() || "U"}
                    </div>
                  )}
                </button>

                {profileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg z-50">
                    <div className="px-4 py-3 border-b border-border">
                      <p className="text-sm font-semibold text-foreground">
                        {session.user.name}
                      </p>
                      <p className="text-xs text-foreground-1">
                        {session.user.email}
                      </p>
                    </div>
                    <div className="py-2">
                      <Link href="/dashboard" className="w-full">
                        <button
                          onClick={() => setProfileMenuOpen(false)}
                          className="flex items-center w-full px-4 py-2 text-sm text-foreground hover:bg-card-1 transition-colors"
                        >
                          Dashboard
                        </button>
                      </Link>
                      <button
                        onClick={() => {
                          setProfileMenuOpen(false);
                          signOut();
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-foreground hover:bg-card-1 transition-colors"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/sign-in" className="hidden md:inline-flex">
                <button className="px-4 py-2 bg-accent text-accent-foreground rounded-md cursor-pointer hover:opacity-90 transition-opacity">
                  Sign in
                </button>
              </Link>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-card transition-colors"
              aria-label="Toggle mobile menu"
            >
              <IoMenu size={24} />
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="block md:hidden border-t border-border bg-background">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base text-foreground hover:text-accent p-1.5 transition-colors font-medium hover:bg-card rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {session?.user ? (
              <>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-foreground px-1.5 py-2">
                    {session.user.name}
                  </p>
                  <Link href="/dashboard" className="w-full block">
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full px-4 py-2 text-sm text-foreground hover:bg-card rounded-md transition-colors text-left"
                    >
                      Dashboard
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      signOut();
                    }}
                    className="flex items-center w-full px-4 py-2 text-sm text-foreground hover:bg-card rounded-md transition-colors mt-2"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <Link href="/sign-in" className="w-full mt-4 block">
                <button className="w-full px-4 py-2 bg-accent text-accent-foreground rounded-md cursor-pointer hover:opacity-90 transition-opacity">
                  Sign in
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

"use client";
import React, { useState } from "react";
import Button from "./Button";
import Toggle from "./Toggle";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { CiSettings } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const { data: session, status } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="flex justify-center items-center border-b border-border w-full fixed top-0 z-50 backdrop-blur-xs px-2">
      <div className="flex justify-between items-center w-full max-w-7xl border-x border-border px-2 py-2">
        <div className="flex items-center gap-1">
          <Image
            src="/halo.svg"
            alt=""
            width={40}
            height={40}
            className="dark:invert"
            draggable="false"
          />
          <h2 className="text-2xl font-semibold text-secondary">Halo</h2>
        </div>
        <div className="flex items-center gap-2">
          <Toggle />
          {status === "loading" ? (
            <div className="h-8 w-8 bg-border rounded-full animate-pulse"></div>
          ) : session?.user ? (
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="h-8 w-8 rounded-full overflow-hidden hover:opacity-80 transition-opacity"
              >
                <Image
                  src={session.user.profileImage || "/default-avatar.png"}
                  alt={session.user.name || "User"}
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                  unoptimized={true}
                />
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg pt-1 z-50">
                  <div className="px-4 py-2 border-b border-border">
                    <p className="text-sm font-medium text-secondary">
                      {session.user.name}
                    </p>
                    <p className="text-xs text-muted">{session.user.email}</p>
                  </div>
                  <div className="pt-1">
                    <button className="w-full text-left px-4 py-2 text-sm text-secondary hover:bg-accent hover:text-white transition-colors rounded-md flex items-center">
                      <CiSettings className="inline mr-1" size={18} />
                      Settings
                    </button>
                    <button
                      onClick={() => signOut()}
                      className="w-full text-left px-4 py-2 text-sm text-secondary hover:bg-accent hover:text-white transition-colors rounded-md flex items-center"
                    >
                      <FiLogOut className="inline mr-1" size={18} />
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Button>
              <Link href="/signin">Sign In</Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

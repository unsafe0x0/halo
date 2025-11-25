"use client";
import React, { useState, useEffect } from "react";
import { MdDashboard } from "react-icons/md";
import { FaChalkboard } from "react-icons/fa";
import { RiBarChartFill, RiMenuFill } from "react-icons/ri";
import { LuLaptopMinimal } from "react-icons/lu";
import { HiOutlineCog8Tooth, HiXMark } from "react-icons/hi2";
import { MdOutlineLogout } from "react-icons/md";
import { TbMessageChatbot } from "react-icons/tb";
import {
  BsLayoutSidebarInsetReverse,
  BsLayoutSidebarInset,
} from "react-icons/bs";
import Button from "../common/Button";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import ThemeToggler from "./ThemeToggler";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  activeItem?: string;
  setActiveItem?: (item: string) => void;
}

const sidebarItems = [
  { label: "Dashboard", icon: MdDashboard },
  { label: "Interviews", icon: LuLaptopMinimal },
  { label: "Analytics", icon: RiBarChartFill },
  { label: "Halo AI", icon: TbMessageChatbot },
  { label: "Whiteboard", icon: FaChalkboard },
  { label: "Settings", icon: HiOutlineCog8Tooth },
];

const RenderSidebarItem = ({
  label,
  icon: Icon,
  isActive,
  onClick,
  isCollapsed,
}: {
  label: string;
  icon: React.ComponentType<{ size?: string | number }>;
  isActive: boolean;
  onClick: () => void;
  isCollapsed: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg font-medium transition-colors ${
        isActive
          ? "bg-accent text-accent-foreground"
          : "text-foreground hover:bg-card"
      } ${isCollapsed ? "justify-center" : ""}`}
      title={isCollapsed ? label : ""}
    >
      <span className="shrink-0">
        <Icon size={20} />
      </span>
      {!isCollapsed && (
        <motion.span
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "auto" }}
          exit={{ opacity: 0, width: 0 }}
          className="truncate text-sm"
        >
          {label}
        </motion.span>
      )}
    </button>
  );
};

const RenderLogoutButton = ({
  onClick,
  isCollapsed,
}: {
  onClick: () => void;
  isCollapsed: boolean;
}) => {
  return (
    <Button
      variant="destructive"
      size="medium"
      className={`w-full flex items-center gap-3 ${
        isCollapsed ? "justify-center" : "justify-start"
      }`}
      onClick={onClick}
    >
      <span className="shrink-0">
        <MdOutlineLogout size={20} />
      </span>
      {!isCollapsed && (
        <motion.span
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "auto" }}
          exit={{ opacity: 0, width: 0 }}
          className="truncate text-sm"
        >
          Logout
        </motion.span>
      )}
    </Button>
  );
};

const RenderUserCard = ({ isCollapsed }: { isCollapsed: boolean }) => {
  const { data: session } = useSession();
  const [userData, setUserData] = useState<{
    name?: string | null;
    email?: string | null;
    image?: string | null;
  } | null>(null);

  useEffect(() => {
    const cached = localStorage.getItem("halo-user-data");
    if (cached) {
      try {
        setUserData(JSON.parse(cached));
      } catch (e) {
        console.error("Failed to parse cached user data", e);
      }
    }
  }, []);

  useEffect(() => {
    if (session?.user) {
      const data = {
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
      };
      setUserData(data);
      localStorage.setItem("halo-user-data", JSON.stringify(data));
    }
  }, [session]);

  const user = session?.user || userData;

  if (isCollapsed) {
    return (
      <div className="flex justify-center">
        {user?.image ? (
          <Image
            src={user.image}
            alt={user.name || "User"}
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="px-4 py-3">
      <div className="flex items-center gap-3">
        {user?.image ? (
          <Image
            src={user.image}
            alt={user.name || "User"}
            width={40}
            height={40}
            className="rounded-full shrink-0"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm shrink-0">
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "auto" }}
          exit={{ opacity: 0, width: 0 }}
          className="flex-1 min-w-0"
        >
          <p className="text-sm font-semibold text-foreground truncate">
            {user?.name || "User"}
          </p>
          <p className="text-xs text-foreground-1 truncate">{user?.email}</p>
        </motion.div>
      </div>
    </div>
  );
};

const Sidebar = ({ activeItem = "Dashboard", setActiveItem }: SidebarProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    signOut();
  };

  return (
    <>
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-background border-b border-border z-20 flex items-center justify-between px-4 py-2">
        <h2 className="text-2xl font-semibold text-foreground">Halo</h2>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-lg hover:bg-card text-foreground"
          aria-label="Toggle menu"
        >
          {isSidebarOpen ? <HiXMark size={24} /> : <RiMenuFill size={24} />}
        </button>
      </div>

      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30 top-20"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <motion.aside
        layout
        className={`fixed lg:static top-0 left-0 h-screen lg:h-screen bg-background border-r border-border z-50 flex flex-col ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } ${isCollapsed ? "lg:w-20" : "lg:w-64"} max-w-64 transition-all duration-300 ease-in-out`}
      >
        <div className="hidden lg:flex items-center justify-between px-4 py-2 border-b border-border h-fit">
          <AnimatePresence>
            {!isCollapsed && (
              <motion.h2
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="text-lg font-bold text-foreground overflow-hidden whitespace-nowrap"
              >
                Halo
              </motion.h2>
            )}
          </AnimatePresence>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-card text-foreground"
            aria-label="Toggle sidebar"
          >
            {isCollapsed ? (
              <BsLayoutSidebarInset size={20} />
            ) : (
              <BsLayoutSidebarInsetReverse size={20} />
            )}
          </button>
        </div>

        <div className="mt-3">
          <RenderUserCard isCollapsed={isCollapsed} />
        </div>

        <nav className="overflow-y-auto px-2 py-4 space-y-2 min-h-0 flex-1">
          {sidebarItems.map((item) => (
            <RenderSidebarItem
              key={item.label}
              label={item.label}
              icon={item.icon}
              isActive={activeItem === item.label}
              onClick={() => {
                setActiveItem?.(item.label);
                setIsSidebarOpen(false);
              }}
              isCollapsed={isCollapsed}
            />
          ))}
        </nav>

        <div className="border-t border-border px-2 py-2">
          <ThemeToggler isCollapsed={isCollapsed} />
        </div>

        <div className="lg:border-t lg:border-border p-2">
          <RenderLogoutButton
            onClick={handleLogout}
            isCollapsed={isCollapsed}
          />
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;

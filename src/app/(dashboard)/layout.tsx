"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Map, Sun, BookOpen, User, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { href: "/journey", label: "My Journey", icon: Map },
  { href: "/journey/today", label: "Today's Touchpoints", icon: Sun },
  { href: "/library", label: "My Library", icon: BookOpen },
  { href: "/profile", label: "Profile", icon: User },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Mobile top bar */}
      <div className="md:hidden sticky top-0 z-50 bg-warm-white/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-4 h-14">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-touch rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="font-bold text-text">Rooted in Good</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 text-text"
            aria-label="Toggle navigation"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile tab bar */}
        <div className="flex border-t border-border">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive =
              pathname === link.href ||
              (link.href !== "/journey/today" &&
                link.href !== "/journey" &&
                pathname.startsWith(link.href)) ||
              (link.href === "/journey" &&
                pathname === "/journey") ||
              (link.href === "/journey/today" &&
                pathname === "/journey/today");

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex-1 flex flex-col items-center gap-1 py-2 text-xs font-medium transition-colors",
                  isActive
                    ? "text-touch-dark bg-touch-light/30"
                    : "text-text-muted hover:text-text"
                )}
              >
                <Icon size={20} />
                <span className="truncate max-w-[80px]">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex">
        {/* Desktop sidebar */}
        <aside className="hidden md:flex flex-col w-64 min-h-screen border-r border-border bg-warm-white sticky top-0">
          <div className="p-6 border-b border-border">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-touch rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="font-bold text-text text-lg">Rooted in Good</span>
            </Link>
          </div>

          <nav className="flex-1 p-4 space-y-1">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              const isActive =
                pathname === link.href ||
                (link.href !== "/journey/today" &&
                  link.href !== "/journey" &&
                  pathname.startsWith(link.href)) ||
                (link.href === "/journey" &&
                  pathname === "/journey") ||
                (link.href === "/journey/today" &&
                  pathname === "/journey/today");

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                    isActive
                      ? "bg-touch-light/40 text-touch-dark"
                      : "text-text-muted hover:bg-soft-gray hover:text-text"
                  )}
                >
                  <Icon size={20} />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-border">
            <Link
              href="/"
              className="text-xs text-text-muted hover:text-text transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-h-screen">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calendar,
  PenSquare,
  Share2,
  Target,
  Users,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/calendar", label: "Content Calendar", icon: Calendar },
  { href: "/admin/content", label: "Create Post", icon: PenSquare },
  { href: "/admin/shareable", label: "Shareable Content", icon: Share2 },
  { href: "/admin/campaigns", label: "Campaigns", icon: Target },
  { href: "/admin/users", label: "Users", icon: Users },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "w-64 bg-text text-white flex-shrink-0 fixed inset-y-0 left-0 z-50 transition-transform duration-200",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <Link
              href="/admin"
              className="flex items-center gap-3"
              onClick={() => setMobileOpen(false)}
            >
              <div className="w-8 h-8 bg-touch rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="font-bold text-white text-lg">
                Rooted Admin
              </span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="md:hidden text-white/60 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-4 px-3 space-y-1">
            {sidebarLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/admin" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-white/15 text-white"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  )}
                >
                  <link.icon size={20} />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-white/10">
            <Link
              href="/"
              className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
            >
              <span>&larr;</span>
              <span>Back to Site</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-warm-white/80 backdrop-blur-md border-b border-border h-16 flex items-center px-4 sm:px-6">
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden mr-3 text-text hover:text-touch transition-colors"
          >
            <Menu size={24} />
          </button>
          <h1 className="text-lg font-semibold text-text">Admin Dashboard</h1>
        </header>

        {/* Page Content */}
        <main className="p-4 sm:p-6 bg-soft-gray min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </div>
    </div>
  );
}

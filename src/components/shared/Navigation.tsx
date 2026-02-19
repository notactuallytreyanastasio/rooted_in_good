"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-warm-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-touch rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="font-bold text-text text-lg hidden sm:inline">
              Rooted in Good
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/about" className="text-text-muted hover:text-text transition-colors text-sm font-medium">
              The Method
            </Link>
            <Link href="/quiz" className="text-touch-dark hover:text-touch transition-colors text-sm font-medium">
              Take the Quiz
            </Link>
            <Link href="/shop" className="text-text-muted hover:text-text transition-colors text-sm font-medium">
              Shop
            </Link>
            <Link href="/community" className="text-text-muted hover:text-text transition-colors text-sm font-medium">
              Community
            </Link>
            <Link href="/login" className="text-text-muted hover:text-text transition-colors text-sm font-medium">
              Sign In
            </Link>
            <Link
              href="/shop"
              className="bg-touch text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-touch-dark transition-colors"
            >
              Get the Book
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-text"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/about" className="block px-3 py-2 rounded-lg text-text-muted hover:bg-soft-gray transition-colors" onClick={() => setMenuOpen(false)}>
              The Method
            </Link>
            <Link href="/quiz" className="block px-3 py-2 rounded-lg text-touch-dark font-medium hover:bg-touch-light/30 transition-colors" onClick={() => setMenuOpen(false)}>
              Take the Quiz
            </Link>
            <Link href="/shop" className="block px-3 py-2 rounded-lg text-text-muted hover:bg-soft-gray transition-colors" onClick={() => setMenuOpen(false)}>
              Shop
            </Link>
            <Link href="/community" className="block px-3 py-2 rounded-lg text-text-muted hover:bg-soft-gray transition-colors" onClick={() => setMenuOpen(false)}>
              Community
            </Link>
            <Link href="/login" className="block px-3 py-2 rounded-lg text-text-muted hover:bg-soft-gray transition-colors" onClick={() => setMenuOpen(false)}>
              Sign In
            </Link>
            <Link
              href="/shop"
              className="block px-3 py-2 bg-touch text-white rounded-lg text-center font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Get the Book
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

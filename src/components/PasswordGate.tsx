"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

const DEMO_PASSWORD = process.env.NEXT_PUBLIC_DEMO_PASSWORD || "";
const STORAGE_KEY = "rig-demo-auth";

export default function PasswordGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authorized, setAuthorized] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!DEMO_PASSWORD) {
      setAuthorized(true);
      return;
    }
    if (sessionStorage.getItem(STORAGE_KEY) === "true") {
      setAuthorized(true);
    }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input === DEMO_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setAuthorized(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  // Don't flash the gate on initial load
  if (!mounted) {
    return null;
  }

  if (authorized) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-touch-light/40 via-listen-light/30 to-quality-light/20 px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8 animate-fade-in">
          <div className="w-16 h-16 bg-touch rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="text-white" size={28} />
          </div>
          <h1 className="text-2xl font-bold text-text">
            The Rooted in Good Method
          </h1>
          <p className="text-text-muted mt-2 text-sm">
            This is a private demo. Enter the password to continue.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm border border-border p-6 space-y-4 animate-fade-in-up"
        >
          <div>
            <label
              htmlFor="demo-password"
              className="block text-sm font-medium text-text mb-1"
            >
              Password
            </label>
            <input
              id="demo-password"
              type="password"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setError(false);
              }}
              className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white focus:outline-none focus:ring-2 focus:ring-touch transition-colors"
              placeholder="Enter demo password"
              autoFocus
            />
            {error && (
              <p className="text-quality-dark text-sm mt-2">
                Incorrect password. Try again.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-touch text-white font-semibold rounded-lg hover:bg-touch-dark transition-colors"
          >
            Enter Demo
          </button>
        </form>
      </div>
    </div>
  );
}

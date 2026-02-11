"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignUpPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError(null);

    if (process.env.NEXT_PUBLIC_STATIC_EXPORT === "true") {
      setError("Account creation is not available in demo mode.");
      setLoading(false);
      return;
    }

    try {
      const { register } = await import("@/actions/auth");
      const result = await register(formData);
      if (result?.error) {
        setError(result.error);
        setLoading(false);
      }
    } catch {
      setError("Account creation is not available in demo mode.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-warm-white px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-text">Start Your Journey</h1>
          <p className="text-text-muted mt-2">
            Create your account and begin transforming your family
          </p>
        </div>

        <form action={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-border p-8 space-y-5">
          {error && (
            <div className="bg-quality-light text-quality-dark px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text mb-1">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white focus:outline-none focus:ring-2 focus:ring-touch transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white focus:outline-none focus:ring-2 focus:ring-touch transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-text mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={8}
              className="w-full px-4 py-3 rounded-lg border border-border bg-warm-white focus:outline-none focus:ring-2 focus:ring-touch transition-colors"
              placeholder="At least 8 characters"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-touch text-white font-semibold rounded-lg hover:bg-touch-dark transition-colors disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>

          <p className="text-center text-sm text-text-muted">
            Already have an account?{" "}
            <Link href="/login" className="text-touch-dark font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

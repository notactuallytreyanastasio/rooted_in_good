import Link from "next/link";
import { User, Calendar, Flame, ShoppingBag, ArrowRight, Settings } from "lucide-react";

export default function ProfilePage() {
  // Placeholder data (will be replaced with real session/DB data)
  const user = {
    name: "Parent",
    email: "parent@example.com",
    journeyStarted: "Not started yet",
    currentStreak: 0,
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text">Profile</h1>
        <p className="mt-2 text-text-muted">
          Your account and journey progress.
        </p>
      </div>

      {/* Profile card */}
      <div className="bg-white rounded-2xl border border-border p-6 sm:p-8 mb-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-touch-light rounded-full flex items-center justify-center">
            <User size={32} className="text-touch-dark" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-text">{user.name}</h2>
            <p className="text-text-muted">{user.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl bg-soft-gray p-4">
            <div className="flex items-center gap-2 mb-1">
              <Calendar size={16} className="text-text-muted" />
              <span className="text-sm font-medium text-text-muted">
                Journey Started
              </span>
            </div>
            <p className="text-lg font-semibold text-text">
              {user.journeyStarted}
            </p>
          </div>

          <div className="rounded-xl bg-soft-gray p-4">
            <div className="flex items-center gap-2 mb-1">
              <Flame size={16} className="text-accent-dark" />
              <span className="text-sm font-medium text-text-muted">
                Current Streak
              </span>
            </div>
            <p className="text-lg font-semibold text-text">
              {user.currentStreak} {user.currentStreak === 1 ? "day" : "days"}
            </p>
          </div>
        </div>
      </div>

      {/* Quick links */}
      <div className="space-y-3">
        <Link
          href="/journey"
          className="flex items-center justify-between bg-white rounded-2xl border border-border p-5 hover:border-touch-light hover:shadow-sm transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-touch-light rounded-xl flex items-center justify-center">
              <Calendar size={20} className="text-touch-dark" />
            </div>
            <div>
              <p className="font-medium text-text">My Journey</p>
              <p className="text-sm text-text-muted">View your 8-week progress</p>
            </div>
          </div>
          <ArrowRight size={18} className="text-text-muted" />
        </Link>

        <Link
          href="/shop"
          className="flex items-center justify-between bg-white rounded-2xl border border-border p-5 hover:border-listen-light hover:shadow-sm transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-listen-light rounded-xl flex items-center justify-center">
              <ShoppingBag size={20} className="text-listen-dark" />
            </div>
            <div>
              <p className="font-medium text-text">Shop</p>
              <p className="text-sm text-text-muted">
                Browse books, workbooks, and courses
              </p>
            </div>
          </div>
          <ArrowRight size={18} className="text-text-muted" />
        </Link>

        <div className="flex items-center justify-between bg-white rounded-2xl border border-border p-5 opacity-50 cursor-not-allowed">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-soft-gray rounded-xl flex items-center justify-center">
              <Settings size={20} className="text-text-muted" />
            </div>
            <div>
              <p className="font-medium text-text">Account Settings</p>
              <p className="text-sm text-text-muted">Coming soon</p>
            </div>
          </div>
          <ArrowRight size={18} className="text-text-muted" />
        </div>
      </div>
    </div>
  );
}

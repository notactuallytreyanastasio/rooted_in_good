import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-soft-gray border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-touch rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="font-bold text-text">Rooted in Good</span>
            </div>
            <p className="text-text-muted text-sm">
              Transform your relationship with your child through 3 simple daily touchpoints.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-text mb-3 text-sm">The Method</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><Link href="/about" className="hover:text-text transition-colors">About the Method</Link></li>
              <li><Link href="/quiz" className="hover:text-text transition-colors">Connection Assessment</Link></li>
              <li><Link href="/shop" className="hover:text-text transition-colors">Get the Book</Link></li>
              <li><Link href="/shop" className="hover:text-text transition-colors">Workbooks & Materials</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text mb-3 text-sm">Community</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><Link href="/community" className="hover:text-text transition-colors">Join the Community</Link></li>
              <li><Link href="/community" className="hover:text-text transition-colors">Weekly Meetings</Link></li>
              <li><Link href="/community/share" className="hover:text-text transition-colors">Shareable Content</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text mb-3 text-sm">Account</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><Link href="/login" className="hover:text-text transition-colors">Sign In</Link></li>
              <li><Link href="/signup" className="hover:text-text transition-colors">Create Account</Link></li>
              <li><Link href="/journey" className="hover:text-text transition-colors">My Journey</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} The Rooted in Good Method. All rights reserved.
          </p>
          <p className="text-sm text-text-muted flex items-center gap-1">
            Made with <Heart size={14} className="text-quality" fill="currentColor" /> for families
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { BookOpen, ShoppingBag, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LibraryPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text">My Library</h1>
        <p className="mt-2 text-text-muted">
          Your purchased books, workbooks, and courses.
        </p>
      </div>

      {/* Empty state */}
      <div className="bg-white rounded-2xl border border-border p-12 text-center">
        <div className="w-16 h-16 bg-listen-light rounded-2xl flex items-center justify-center mx-auto mb-6">
          <BookOpen size={32} className="text-listen-dark" />
        </div>
        <h2 className="text-xl font-semibold text-text mb-2">
          Your purchased content will appear here
        </h2>
        <p className="text-text-muted max-w-md mx-auto mb-8">
          Browse workbooks, courses, and companion materials to deepen your
          Rooted in Good practice.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 bg-listen text-white px-6 py-3 rounded-full font-semibold hover:bg-listen-dark transition-colors"
        >
          <ShoppingBag size={18} />
          Browse the Shop
        </Link>
      </div>

      {/* Placeholder grid */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-text mb-4">
          Recommended for You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "The Rooted in Good Method",
              type: "Book",
              color: "touch",
            },
            {
              title: "8-Week Companion Workbook",
              type: "Workbook",
              color: "listen",
            },
            {
              title: "Connection Repair Course",
              type: "Course",
              color: "quality",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href="/shop"
              className="rounded-2xl border border-border bg-white p-6 hover:shadow-md transition-all group"
            >
              <div
                className={cn(
                  "w-full aspect-[4/3] rounded-xl mb-4 flex items-center justify-center",
                  item.color === "touch"
                    ? "bg-touch-light/40"
                    : item.color === "listen"
                    ? "bg-listen-light/40"
                    : "bg-quality-light/40"
                )}
              >
                <BookOpen
                  size={32}
                  className={
                    item.color === "touch"
                      ? "text-touch-dark"
                      : item.color === "listen"
                      ? "text-listen-dark"
                      : "text-quality-dark"
                  }
                />
              </div>
              <span className="text-xs font-medium text-text-muted uppercase tracking-wide">
                {item.type}
              </span>
              <h3 className="text-sm font-semibold text-text mt-1 group-hover:text-touch-dark transition-colors">
                {item.title}
              </h3>
              <div className="mt-3 flex items-center gap-1 text-xs text-text-muted group-hover:text-touch-dark transition-colors">
                View in shop <ArrowRight size={12} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

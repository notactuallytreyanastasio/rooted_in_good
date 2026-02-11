import Link from "next/link";
import { Lock, CheckCircle, ChevronRight } from "lucide-react";
import { staticWeeks } from "@/lib/static-data";
import { TOTAL_WEEKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const isStatic = process.env.STATIC_EXPORT === "true";

export default async function JourneyPage() {
  let weeks;

  if (isStatic) {
    weeks = staticWeeks;
  } else {
    const { prisma } = await import("@/lib/db");
    const dbWeeks = await prisma.journeyWeek.findMany({
      orderBy: { weekNumber: "asc" },
      include: { days: true },
    });
    weeks = dbWeeks;
  }

  // Current week is always week 1 for now (hardcoded)
  const currentWeek = 1;

  // Build the full 8 weeks, using data if available, otherwise placeholders
  const allWeeks = Array.from({ length: TOTAL_WEEKS }, (_, i) => {
    const weekNumber = i + 1;
    const dataWeek = weeks.find((w) => w.weekNumber === weekNumber);
    return {
      weekNumber,
      title: dataWeek?.title ?? `Week ${weekNumber}`,
      theme: dataWeek?.theme ?? "Coming soon",
      description: dataWeek?.description ?? "",
      isUnlocked: weekNumber <= currentWeek,
      isCurrent: weekNumber === currentWeek,
      progress: 0, // Hardcoded 0% for now
    };
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text">My Journey</h1>
        <p className="mt-2 text-text-muted">
          8 weeks to transform your connection with your child. One touchpoint at
          a time.
        </p>
      </div>

      {/* Visual timeline */}
      <div className="relative">
        {/* Timeline connector line */}
        <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-border hidden sm:block" />

        <div className="space-y-4">
          {allWeeks.map((week) => (
            <div key={week.weekNumber} className="relative">
              {/* Timeline dot (desktop) */}
              <div
                className={cn(
                  "absolute left-4 top-6 w-5 h-5 rounded-full border-2 hidden sm:flex items-center justify-center z-10",
                  week.isCurrent
                    ? "bg-touch border-touch-dark"
                    : week.isUnlocked
                    ? "bg-touch-light border-touch"
                    : "bg-soft-gray border-border"
                )}
              >
                {week.isUnlocked && !week.isCurrent && (
                  <CheckCircle size={12} className="text-touch-dark" />
                )}
              </div>

              {/* Week card */}
              <div className={cn("sm:ml-14")}>
                {week.isUnlocked ? (
                  <Link
                    href={`/journey/week/${week.weekNumber}`}
                    className={cn(
                      "block rounded-2xl border p-6 transition-all hover:shadow-md",
                      week.isCurrent
                        ? "border-touch bg-white shadow-sm"
                        : "border-touch-light bg-white hover:border-touch"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span
                            className={cn(
                              "text-xs font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full",
                              week.isCurrent
                                ? "bg-touch text-white"
                                : "bg-touch-light text-touch-dark"
                            )}
                          >
                            Week {week.weekNumber}
                          </span>
                          {week.isCurrent && (
                            <span className="text-xs font-medium text-touch-dark">
                              Current Week
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-text mt-2">
                          {week.title}
                        </h3>
                        <p className="text-sm text-text-muted mt-1">
                          {week.theme}
                        </p>

                        {/* Progress bar */}
                        <div className="mt-4">
                          <div className="flex items-center justify-between text-xs text-text-muted mb-1">
                            <span>Progress</span>
                            <span>{week.progress}%</span>
                          </div>
                          <div className="h-2 bg-soft-gray rounded-full overflow-hidden">
                            <div
                              className="h-full bg-touch rounded-full transition-all"
                              style={{ width: `${week.progress}%` }}
                            />
                          </div>
                        </div>
                      </div>
                      <ChevronRight
                        size={20}
                        className="text-text-muted ml-4 flex-shrink-0"
                      />
                    </div>
                  </Link>
                ) : (
                  <div
                    className={cn(
                      "rounded-2xl border border-border bg-white p-6 opacity-50"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xs font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full bg-soft-gray text-text-muted">
                            Week {week.weekNumber}
                          </span>
                          <Lock size={14} className="text-text-muted" />
                        </div>
                        <h3 className="text-lg font-semibold text-text mt-2">
                          {week.title}
                        </h3>
                        <p className="text-sm text-text-muted mt-1">
                          {week.theme}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

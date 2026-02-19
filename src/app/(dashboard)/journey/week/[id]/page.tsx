import Link from "next/link";
import { ArrowLeft, Heart, Ear, Users, Sparkles, ArrowRight } from "lucide-react";
import { staticWeeks } from "@/lib/static-data";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";

const isStatic = process.env.STATIC_EXPORT === "true";

export async function generateStaticParams() {
  return staticWeeks.map((w) => ({ id: String(w.weekNumber) }));
}

interface WeekPageProps {
  params: Promise<{ id: string }>;
}

export default async function WeekPage({ params }: WeekPageProps) {
  const { id } = await params;
  const weekNumber = parseInt(id, 10);

  if (isNaN(weekNumber)) {
    notFound();
  }

  let week;

  if (isStatic) {
    const staticWeek = staticWeeks.find((w) => w.weekNumber === weekNumber);
    if (staticWeek) {
      // For static export, create a minimal week object with placeholder days
      week = {
        ...staticWeek,
        days: Array.from({ length: 7 }, (_, i) => ({
          id: `${weekNumber}-${i + 1}`,
          dayNumber: i + 1,
          touchPrompt: "Touch prompt — available in the full app experience.",
          listenPrompt: "Listen prompt — available in the full app experience.",
          qualityTimePrompt: "Quality time prompt — available in the full app experience.",
          tip: "Daily tips are available when you start your journey.",
        })),
      };
    }
  } else {
    const { prisma } = await import("@/lib/db");
    week = await prisma.journeyWeek.findUnique({
      where: { weekNumber },
      include: { days: { orderBy: { dayNumber: "asc" } } },
    });
  }

  if (!week) {
    notFound();
  }

  return (
    <div>
      {/* Back link */}
      <Link
        href="/journey"
        className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors mb-6"
      >
        <ArrowLeft size={16} />
        Back to Journey
      </Link>

      {/* Week header / theme */}
      <div className="bg-white rounded-2xl border border-border p-6 sm:p-8 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full bg-touch text-white">
            Week {week.weekNumber}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-text mb-2">
          {week.title}
        </h1>
        <p className="text-text-muted mb-6">{week.description}</p>

        {/* Focus areas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl bg-touch-light/30 border border-touch-light p-4">
            <div className="flex items-center gap-2 mb-2">
              <Heart size={16} className="text-touch-dark" />
              <span className="text-sm font-semibold text-touch-dark">
                Touch Focus
              </span>
            </div>
            <p className="text-sm text-text-muted">{week.touchFocus}</p>
          </div>
          <div className="rounded-xl bg-listen-light/30 border border-listen-light p-4">
            <div className="flex items-center gap-2 mb-2">
              <Ear size={16} className="text-listen-dark" />
              <span className="text-sm font-semibold text-listen-dark">
                Listen Focus
              </span>
            </div>
            <p className="text-sm text-text-muted">{week.listenFocus}</p>
          </div>
          <div className="rounded-xl bg-quality-light/30 border border-quality-light p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users size={16} className="text-quality-dark" />
              <span className="text-sm font-semibold text-quality-dark">
                Quality Time Focus
              </span>
            </div>
            <p className="text-sm text-text-muted">{week.qualityTimeFocus}</p>
          </div>
        </div>
      </div>

      {/* Day cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {week.days.map((day: { id: string; dayNumber: number; touchPrompt: string; listenPrompt: string; qualityTimePrompt: string; tip: string }) => {
          const isReflectionDay = day.dayNumber === 7;

          return (
            <div
              key={day.id}
              className={cn(
                "rounded-2xl border bg-white p-6 transition-all",
                isReflectionDay
                  ? "border-accent sm:col-span-2 bg-gradient-to-br from-accent-light/20 to-warm-white"
                  : "border-border hover:border-touch-light"
              )}
            >
              {/* Day number */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={cn(
                    "text-xs font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full",
                    isReflectionDay
                      ? "bg-accent text-text"
                      : "bg-soft-gray text-text-muted"
                  )}
                >
                  Day {day.dayNumber}
                  {isReflectionDay && " - Reflection Day"}
                </span>
                {isReflectionDay && (
                  <Sparkles size={18} className="text-accent-dark" />
                )}
              </div>

              {/* Touchpoint prompts */}
              <div className="space-y-3">
                {/* Touch */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-touch-light/20 border border-touch-light/50">
                  <Heart
                    size={16}
                    className="text-touch-dark mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p className="text-xs font-semibold text-touch-dark mb-0.5">
                      Touch
                    </p>
                    <p className="text-sm text-text-muted">{day.touchPrompt}</p>
                  </div>
                </div>

                {/* Listen */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-listen-light/20 border border-listen-light/50">
                  <Ear
                    size={16}
                    className="text-listen-dark mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p className="text-xs font-semibold text-listen-dark mb-0.5">
                      Listen
                    </p>
                    <p className="text-sm text-text-muted">
                      {day.listenPrompt}
                    </p>
                  </div>
                </div>

                {/* Quality Time */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-quality-light/20 border border-quality-light/50">
                  <Users
                    size={16}
                    className="text-quality-dark mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p className="text-xs font-semibold text-quality-dark mb-0.5">
                      Quality Time
                    </p>
                    <p className="text-sm text-text-muted">
                      {day.qualityTimePrompt}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tip */}
              {day.tip && (
                <div className="mt-4 p-3 rounded-lg bg-soft-gray">
                  <p className="text-xs font-semibold text-text mb-0.5">
                    Tip
                  </p>
                  <p className="text-sm text-text-muted">{day.tip}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Start Practice CTA */}
      <div className="mt-8 text-center">
        <Link
          href="/journey/today"
          className="inline-flex items-center gap-2 bg-touch text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-touch-dark transition-colors"
        >
          Start Today&apos;s Practice <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Users, Calendar, Share2, ExternalLink } from "lucide-react";
import { staticMeetings } from "@/lib/static-data";
import { dayName, formatTime12h } from "@/core/shared/dates";
import type { Meeting } from "@/types";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join our community of parents committed to connection. Weekly support meetings, Facebook group, and shareable resources.",
};

const isStatic = process.env.STATIC_EXPORT === "true";

async function getMeetings(): Promise<Meeting[]> {
  if (isStatic) {
    return staticMeetings as unknown as Meeting[];
  }
  try {
    const { prisma } = await import("@/lib/db");
    const meetings = await prisma.meeting.findMany({
      where: { isRecurring: true },
      orderBy: { dayOfWeek: "asc" },
    });
    return meetings as unknown as Meeting[];
  } catch {
    return [];
  }
}

export default async function CommunityPage() {
  const meetings = await getMeetings();

  return (
    <div className="bg-warm-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-listen-light to-quality-light" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Users size={18} className="text-listen-dark" />
              <span className="text-sm font-medium text-text">
                A Community of Parents Just Like You
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text leading-tight">
              You&apos;re Not{" "}
              <span className="text-listen-dark">Alone</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
              Parenting is hard. Connection takes courage. But you don&apos;t
              have to figure it out by yourself. Join a community of parents who
              are walking the same road.
            </p>
          </div>
        </div>
      </section>

      {/* Facebook Group CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <div className="w-14 h-14 bg-listen-light rounded-xl flex items-center justify-center mb-6">
                <Users className="text-listen-dark" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-text mb-4">
                Join Our Facebook Family
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Our private Facebook group is where the daily magic happens.
                Share your wins, ask for advice on hard days, and celebrate
                the small moments that matter most.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Daily prompts and encouragement",
                  "Share your touchpoint wins",
                  "Ask questions in a judgment-free zone",
                  "Connect with parents in your area",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1.5 w-5 h-5 bg-listen-light rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-listen-dark rounded-full" />
                    </div>
                    <span className="text-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://facebook.com/groups/rootedingood"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-listen text-white px-8 py-4 rounded-full font-semibold hover:bg-listen-dark transition-colors w-fit"
              >
                Join Our Facebook Family <ExternalLink size={18} />
              </a>
            </div>
            <div className="bg-gradient-to-br from-listen-light/50 to-quality-light/50 p-12 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl font-bold text-listen-dark mb-2">500+</p>
                <p className="text-text-muted text-lg">Parents and Growing</p>
                <div className="mt-6 flex -space-x-3 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full bg-white border-2 border-listen-light flex items-center justify-center"
                    >
                      <Users size={18} className="text-listen" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Format */}
      <section className="bg-gradient-to-b from-soft-gray to-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-quality-light/50 rounded-full px-4 py-2 mb-6">
            <Calendar size={18} className="text-quality-dark" />
            <span className="text-sm font-medium text-text">
              Weekly Support Circles
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-6">
            Like AA, But for Parenting
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed mb-4">
            Weekly support circles where parents share, listen, and grow
            together. No judgment. Just connection.
          </p>
          <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
            Each meeting follows a simple format: we check in, share one win
            from the week, talk honestly about one struggle, and leave with
            one intention for the week ahead. It takes about an hour, and
            it&apos;s the most honest hour of your week.
          </p>
        </div>
      </section>

      {/* Meeting Schedule */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            Meeting Schedule
          </h2>
          <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">
            Find a meeting time that works for you. All meetings are virtual
            and open to any parent on the journey.
          </p>
        </div>

        {meetings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meetings.map((meeting) => (
              <div
                key={meeting.id}
                className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:border-quality transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-quality-light rounded-xl flex items-center justify-center">
                    <Calendar className="text-quality-dark" size={24} />
                  </div>
                  {meeting.isRecurring && (
                    <span className="text-xs font-medium bg-touch-light text-touch-dark px-2 py-1 rounded-full">
                      Weekly
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-text mb-2">
                  {meeting.title}
                </h3>
                <p className="text-text-muted text-sm mb-4 leading-relaxed">
                  {meeting.description}
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar size={14} className="text-text-muted" />
                    <span className="text-text font-medium">
                      {dayName(meeting.dayOfWeek)}s
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-text-muted ml-5">
                      {formatTime12h(meeting.time)} {meeting.timezone}
                    </span>
                  </div>
                </div>
                <a
                  href={meeting.meetingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-quality text-white px-6 py-3 rounded-lg font-semibold hover:bg-quality-dark transition-colors"
                >
                  Join This Week&apos;s Meeting
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center bg-white rounded-2xl p-12 border border-border shadow-sm">
            <Calendar className="mx-auto text-text-muted mb-4" size={48} />
            <h3 className="text-xl font-bold text-text mb-2">
              Meetings Coming Soon
            </h3>
            <p className="text-text-muted max-w-md mx-auto">
              We&apos;re setting up our weekly support circles. Join the
              Facebook group to be the first to know when meetings launch.
            </p>
          </div>
        )}
      </section>

      {/* Shareable Content Preview */}
      <section className="bg-soft-gray py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-touch-light/50 rounded-full px-4 py-2 mb-6">
              <Share2 size={18} className="text-touch-dark" />
              <span className="text-sm font-medium text-text">
                Spread the Word
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              Share the Good
            </h2>
            <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">
              Beautiful, shareable content to inspire other parents and spread
              the Rooted in Good message.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "The 20-Second Rule",
                gradient: "from-touch-light to-touch",
              },
              {
                title: "Listen Without Fixing",
                gradient: "from-listen-light to-listen",
              },
              {
                title: "Presence Over Perfection",
                gradient: "from-quality-light to-quality",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden"
              >
                <div
                  className={`bg-gradient-to-br ${item.gradient} h-40 flex items-center justify-center`}
                >
                  <p className="text-white font-bold text-lg px-6 text-center drop-shadow-sm">
                    {item.title}
                  </p>
                </div>
                <div className="p-4">
                  <p className="text-sm text-text-muted">
                    Shareable quote card
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/community/share"
              className="inline-flex items-center gap-2 bg-touch text-white px-8 py-4 rounded-full font-semibold hover:bg-touch-dark transition-colors"
            >
              <Share2 size={20} /> Browse All Shareable Content
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="bg-gradient-to-br from-listen-light/50 to-quality-light/50 rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Ready to Join?
          </h2>
          <p className="text-lg text-text-muted max-w-xl mx-auto mb-8">
            Whether you&apos;re just starting or deep into the journey, there&apos;s
            a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://facebook.com/groups/rootedingood"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-listen text-white px-8 py-4 rounded-full font-semibold hover:bg-listen-dark transition-colors flex items-center justify-center gap-2"
            >
              <Users size={20} /> Join Facebook Group
            </a>
            <Link
              href="/shop"
              className="bg-white text-text px-8 py-4 rounded-full font-semibold border border-border hover:border-touch transition-colors"
            >
              Get the Book
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Ear,
  Users,
  BookOpen,
  ArrowRight,
  Brain,
  Clock,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About the Method",
  description:
    "The science behind the 3 touchpoints: Focused Support (2min), Intentional Listening (5min), and Physical Connection (2min). Just 9 intentional minutes a day to transform your parenting.",
};

export default function AboutPage() {
  return (
    <div className="bg-warm-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-touch-light/40 via-listen-light/30 to-quality-light/20" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-touch-dark font-medium mb-4 text-sm tracking-wide uppercase">
              The Rooted in Good Method
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text leading-tight">
              9 Intentional Minutes to{" "}
              <span className="text-touch-dark">Transform</span> Your Family
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
              A simple, science-backed method built on three daily touchpoints
              that strengthen the bond between you and your child.
            </p>
          </div>
        </div>
      </section>

      {/* The 3 Touchpoints - Full Detail */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            The Three Touchpoints
          </h2>
          <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">
            Each touchpoint targets a different dimension of connection.
            Together, they create a complete daily practice of presence.
          </p>
        </div>

        {/* Touchpoint 1: Focused Support */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-14 h-14 bg-touch-light rounded-xl flex items-center justify-center mb-6">
                <Heart className="text-touch-dark" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-text mb-2">
                Touchpoint 1: Focused Support
              </h3>
              <p className="text-3xl font-bold text-touch-dark mb-4">
                2 minutes
              </p>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Gently step in to help before your child becomes overwhelmed
                  — showing them you&apos;ve got their back. This is proactive
                  support, not rescuing. It&apos;s offered before overwhelm, not
                  after.
                </p>
                <p>
                  In real life, this looks like laying out socks before the
                  morning scramble, packing lunch so your child can breathe
                  instead of panic, or placing the backpack and water bottle by
                  the door the night before.
                </p>
                <p>
                  Independence isn&apos;t the absence of support — it&apos;s
                  the result of it. Children who feel emotionally safe are more
                  likely to take risks, try new things, and persist through
                  challenges.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-touch-light to-touch/30 rounded-2xl p-12 flex items-center justify-center aspect-square max-w-sm mx-auto">
              <div className="text-center">
                <Heart className="mx-auto text-touch-dark mb-4" size={64} />
                <p className="text-5xl font-bold text-touch-dark">2m</p>
                <p className="text-text-muted mt-2">of focused support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Touchpoint 2: Intentional Listening */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-listen-light to-listen/30 rounded-2xl p-12 flex items-center justify-center aspect-square max-w-sm mx-auto">
              <div className="text-center">
                <Ear className="mx-auto text-listen-dark mb-4" size={64} />
                <p className="text-5xl font-bold text-listen-dark">5m</p>
                <p className="text-text-muted mt-2">of intentional listening</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-14 h-14 bg-listen-light rounded-xl flex items-center justify-center mb-6">
                <Ear className="text-listen-dark" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-text mb-2">
                Touchpoint 2: Intentional Listening
              </h3>
              <p className="text-3xl font-bold text-listen-dark mb-4">
                5 minutes
              </p>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Put distractions aside and let your child feel fully heard
                  — without trying to fix or teach. No phone, no multitasking.
                  Child-led conversation where they choose the topic.
                </p>
                <p>
                  Connection doesn&apos;t always happen face-to-face. Sometimes
                  it happens side-by-side — driving together, washing dishes,
                  or sitting on the floor while they tell you about their day.
                </p>
                <p>
                  When your child is silent, that&apos;s still part of the
                  rhythm. They need to feel you before they can talk to you.
                  Your presence is the message.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Touchpoint 3: Physical Connection */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-14 h-14 bg-quality-light rounded-xl flex items-center justify-center mb-6">
                <Users className="text-quality-dark" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-text mb-2">
                Touchpoint 3: Physical Connection
              </h3>
              <p className="text-3xl font-bold text-quality-dark mb-4">
                2 minutes
              </p>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Offer closeness, comfort, or calm to remind your child they
                  are safe and loved. A 20-second hug releases oxytocin — the
                  bonding hormone — which lowers cortisol and promotes calm.
                </p>
                <p>
                  This doesn&apos;t have to be a hug. It can be a gentle hand on
                  their back during a hard moment, a secret handshake, tracing a
                  small heart on their palm, or sitting close on the couch with
                  a blanket tucked just right.
                </p>
                <p>
                  When a child is dysregulated, their nervous system is in
                  survival mode. Physical presence is often the most effective
                  first step, not the last resort. You are your child&apos;s
                  anchor.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-quality-light to-quality/30 rounded-2xl p-12 flex items-center justify-center aspect-square max-w-sm mx-auto">
              <div className="text-center">
                <Users className="mx-auto text-quality-dark mb-4" size={64} />
                <p className="text-5xl font-bold text-quality-dark">2m</p>
                <p className="text-text-muted mt-2">of physical connection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Science */}
      <section className="bg-gradient-to-b from-soft-gray to-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-listen-light/50 rounded-full px-4 py-2 mb-6">
              <Brain size={18} className="text-listen-dark" />
              <span className="text-sm font-medium text-text">
                Evidence-Based Approach
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              The Science Behind the Method
            </h2>
            <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">
              The Rooted in Good Method isn&apos;t just feel-good advice.
              It&apos;s grounded in decades of research on child development,
              attachment theory, and neuroscience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Oxytocin & The 20-Second Hug",
                description:
                  "A 20-second hug releases oxytocin — the bonding hormone — which lowers cortisol, stabilizes heart rate, and promotes calm (Light et al., 2005). Physical affection strengthens emotional bonding across all ages, from toddlers to teens (Feldman, 2007).",
                color: "touch",
              },
              {
                title: "Attunement & The Still Face Experiment",
                description:
                  "The Still Face Experiment (Tronick, 1975) showed that infants become highly distressed when a caregiver stops responding emotionally — attunement isn't just nice, it's neurologically necessary. Open, warm communication predicts reduced behavioral problems and stronger coping (Wang & Kenny, 2014).",
                color: "listen",
              },
              {
                title: "Polyvagal Theory & Co-Regulation",
                description:
                  "Polyvagal Theory (Porges, 2011) explains how voice tone, eye contact, and touch activate the body's social safety system, shifting the nervous system from protection into connection. Your calm presence literally changes your child's brain chemistry.",
                color: "quality",
              },
              {
                title: "Zone of Proximal Development",
                description:
                  "Vygotsky's research shows children thrive in the space between what they can do alone and what they can do with support. Antecedent strategies — adjusting the environment before behavior escalates — reduce challenging behavior (Blair & Raver, 2015).",
                color: "touch",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`bg-white rounded-2xl p-8 border border-${item.color}-light shadow-sm`}
              >
                <div
                  className={`w-10 h-10 bg-${item.color}-light rounded-lg flex items-center justify-center mb-4`}
                >
                  <Brain className={`text-${item.color}-dark`} size={20} />
                </div>
                <h3 className="text-lg font-bold text-text mb-3">
                  {item.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8-Week Journey */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-quality-light/50 rounded-full px-4 py-2 mb-6">
            <Clock size={18} className="text-quality-dark" />
            <span className="text-sm font-medium text-text">
              Guided Program
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            The 8-Week Journey
          </h2>
          <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">
            Each week builds on the last, gradually deepening your connection
            practice from simple beginnings to lasting transformation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              week: 1,
              title: "Foundation",
              description:
                "Learn the three touchpoints and commit to showing up. This week is about starting small and getting the rhythm right.",
              color: "touch",
            },
            {
              week: 2,
              title: "Noticing",
              description:
                "Begin observing your child's bids for connection. Learn to recognize the moments they need you most.",
              color: "listen",
            },
            {
              week: 3,
              title: "Listening Deeper",
              description:
                "Move beyond surface conversation. Practice asking open-ended questions and sitting in silence.",
              color: "listen",
            },
            {
              week: 4,
              title: "Repair & Resilience",
              description:
                "Learn how to reconnect after conflict. Rupture and repair is normal — what matters is coming back.",
              color: "quality",
            },
            {
              week: 5,
              title: "Following Their Lead",
              description:
                "Deepen quality time by letting go of your agenda. Practice child-led activities and unstructured play.",
              color: "quality",
            },
            {
              week: 6,
              title: "Hard Days",
              description:
                "Build a toolkit for the days when connection feels impossible. Learn self-compassion alongside connection.",
              color: "touch",
            },
            {
              week: 7,
              title: "The Bigger Picture",
              description:
                "Reflect on how daily connection ripples outward — into their friendships, school life, and self-image.",
              color: "listen",
            },
            {
              week: 8,
              title: "Legacy",
              description:
                "Define the legacy you want to leave. Create a sustainable, lifelong practice of intentional connection.",
              color: "quality",
            },
          ].map((week) => (
            <div
              key={week.week}
              className={`bg-white rounded-2xl p-6 border border-${week.color}-light shadow-sm flex gap-6 items-start`}
            >
              <div
                className={`w-12 h-12 bg-${week.color}-light rounded-xl flex items-center justify-center flex-shrink-0`}
              >
                <span className={`text-${week.color}-dark font-bold`}>
                  {week.week}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-text mb-1">
                  Week {week.week}: {week.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {week.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-soft-gray py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Is this method only for young children?",
                answer:
                  "Not at all. The three touchpoints work for children of all ages, from toddlers to teenagers. The specific expressions change — a teen might prefer a fist bump to a hug, or quality time might be driving together instead of playing on the floor — but the principles are universal. Many parents report the biggest breakthroughs with their older kids.",
              },
              {
                question: "What if I miss a day?",
                answer:
                  "You will miss days. That's not failure — that's life. The method is designed for real parents with real lives. When you miss a day, you simply start again the next day. There's no catching up or making up. Each day is a fresh start. Consistency over time matters more than perfection on any single day.",
              },
              {
                question:
                  "I'm a single parent with multiple kids. How do I fit this in?",
                answer:
                  "The beauty of the method is its simplicity — it's only 9 minutes a day. You don't need to do all three touchpoints with every child at the same time. Focused support can happen the night before. Listening can happen at the dinner table. A hug can happen at the door. Start with one child, one touchpoint, and build from there.",
              },
              {
                question: "What if my child resists physical touch?",
                answer:
                  "Respect their boundaries always. Physical touch looks different for every child and every age. For some, it's a pat on the back or sitting close together. For others, it might be a playful elbow bump. The key is consent and consistency. Over time, many children who initially resist touch begin to seek it out once they feel safe.",
              },
              {
                question: "Is this a replacement for therapy?",
                answer:
                  "No. The RootedInGood Method is a daily connection practice, not a clinical intervention. If your child or family is dealing with serious behavioral, emotional, or mental health challenges, please seek professional support. This method works beautifully alongside therapy and can amplify its benefits. As the book says: asking for support reflects strength, not weakness.",
              },
              {
                question: "Do I need to buy the book to start?",
                answer:
                  "The core method — Focused Support, Intentional Listening, Physical Connection — is simple enough to start today. The book provides the 8-week guided journey, daily prompts, the science behind each touchpoint, and stories from other parents that make the practice richer and more sustainable. Most parents find the structure helps them stick with it.",
              },
            ].map((faq) => (
              <details
                key={faq.question}
                className="bg-white rounded-2xl border border-border shadow-sm group"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-semibold text-text pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className="text-text-muted flex-shrink-0 group-open:rotate-180 transition-transform"
                  />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-touch-light via-accent-light to-quality-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
          <BookOpen className="mx-auto text-text mb-6" size={48} />
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Start Your 8-Week Journey
          </h2>
          <p className="text-lg text-text-muted mb-10 max-w-xl mx-auto">
            Everything you need to build a lasting connection practice with
            your child. Daily prompts, weekly themes, and the science that
            makes it work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 bg-text text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-text/90 transition-colors"
            >
              Get the Book <ArrowRight size={20} />
            </Link>
            <Link
              href="/community"
              className="inline-flex items-center justify-center gap-2 bg-white text-text px-10 py-4 rounded-full text-lg font-semibold border border-border hover:border-listen transition-colors"
            >
              Join the Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

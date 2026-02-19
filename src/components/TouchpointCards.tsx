"use client";

import { useState } from "react";
import { Heart, Ear, Users, ChevronDown, X, BookOpen } from "lucide-react";
import Link from "next/link";

const touchpoints = [
  {
    key: "touch",
    icon: Heart,
    title: "Focused Support",
    time: "2 minutes",
    tagline:
      "Gently step in to help before your child becomes overwhelmed — showing them you've got their back.",
    borderColor: "border-touch-light hover:border-touch",
    bgColor: "bg-touch-light",
    textColor: "text-touch-dark",
    expandBg: "bg-gradient-to-b from-touch-light/30 to-warm-white",
    whatItIs: [
      "Proactive — offered before overwhelm, not after",
      "Brief — just two minutes of intentional, calm presence",
      "Grounded — you step in from a place of steadiness, not urgency",
    ],
    whatItIsNot: [
      "Rescuing or doing everything for your child",
      "Fixing problems before they can try",
      "Avoiding frustration entirely",
    ],
    realLife: [
      "Laying out socks before the morning scramble",
      "Brushing hair or zipping a jacket — even if they technically know how",
      "Packing lunch so your child can breathe instead of panic",
      "Placing backpack and water bottle by the door the night before",
    ],
    keyInsight:
      "Independence isn't the absence of support. It's the result of it. Children who feel emotionally safe are more likely to take risks, try new things, and persist through challenges.",
    science:
      "Vygotsky's Zone of Proximal Development shows that children thrive in the space between what they can do alone and what they can do with support. Adjusting the environment before behavior escalates — what behavior science calls antecedent strategies — reduces the likelihood of challenging behavior (Blair & Raver, 2015).",
    mantra: "Two minutes of Focused Support can shift the emotional tone of everything that follows.",
  },
  {
    key: "listen",
    icon: Ear,
    title: "Intentional Listening",
    time: "5 minutes",
    tagline:
      "Put distractions aside and let your child feel fully heard — without trying to fix or teach.",
    borderColor: "border-listen-light hover:border-listen",
    bgColor: "bg-listen-light",
    textColor: "text-listen-dark",
    expandBg: "bg-gradient-to-b from-listen-light/30 to-warm-white",
    whatItIs: [
      "Undivided presence — no phone, no multitasking",
      "Child-led conversation — they choose the topic",
      "Calm, curious attention — no agenda, no teaching moments",
    ],
    whatItIsNot: [
      "Teaching or lecturing",
      "Fixing or problem-solving",
      "Correcting or redirecting",
      "Turning the moment into a lesson",
    ],
    realLife: [
      "Sitting on the floor while they tell you about their day",
      "Driving together in quiet — no pressure, just available",
      "Washing dishes side-by-side while they start to open up",
      "Being nearby during homework — not helping, just present",
    ],
    keyInsight:
      "Connection doesn't always happen face-to-face. Sometimes it happens side-by-side. When your child is silent, that's still part of the rhythm. They need to feel you before they can talk to you.",
    science:
      "The Still Face Experiment (Tronick, 1975) showed that infants become highly distressed when a caregiver stops responding emotionally — attunement isn't just nice, it's neurologically necessary. Open, warm communication predicts reduced behavioral problems, stronger coping, and better school performance over time (Wang & Kenny, 2014).",
    mantra: "Your presence is the message. Five minutes of undivided attention can shift your entire relationship.",
    connectionSpectrum: [
      { level: "Silent Presence", color: "bg-red-100 text-red-700", desc: "Your child avoids engagement. Being nearby without pressure signals safety." },
      { level: "Surface Exchanges", color: "bg-orange-100 text-orange-700", desc: "Conversation is mostly logistical. Gentle curiosity softens the tone." },
      { level: "Small Glimpses", color: "bg-yellow-100 text-yellow-700", desc: "Your child shares briefly but stays guarded. Empathy keeps the door open." },
      { level: "Casual Openness", color: "bg-green-100 text-green-700", desc: "Light, spontaneous conversation. Let it stay light — no need to steer." },
      { level: "Deep Sharing", color: "bg-blue-100 text-blue-700", desc: "Your child trusts you with thoughts and feelings. Protect this with judgment-free listening." },
    ],
  },
  {
    key: "quality",
    icon: Users,
    title: "Physical Connection",
    time: "2 minutes",
    tagline:
      "Offer closeness, comfort, or calm to remind your child they are safe and loved.",
    borderColor: "border-quality-light hover:border-quality",
    bgColor: "bg-quality-light",
    textColor: "text-quality-dark",
    expandBg: "bg-gradient-to-b from-quality-light/30 to-warm-white",
    whatItIs: [
      "Warmth, safety, and attunement — just two minutes",
      "Physical presence that says what words sometimes can't",
      "Offered gently — never forced or demanded",
    ],
    whatItIsNot: [
      "Required to be a hug — can be any form of closeness",
      "Forced when your child needs space",
      "Only for little kids — teens need it too",
    ],
    realLife: [
      "A gentle hand on their back during a hard moment",
      "A secret handshake or playful shoulder bump",
      "Tracing a small heart on their palm — a tiny bridge to calm",
      "The 20-second hug — count together, start small, build up",
      "Sitting close on the couch, a blanket tucked just right",
    ],
    keyInsight:
      "When a child is dysregulated, their nervous system is in survival mode — fight, flight, freeze, or fawn. In those moments, the brain can't process language. Physical presence is often the most effective first step, not the last resort.",
    science:
      "A 20-second hug releases oxytocin — the bonding hormone — which lowers cortisol, stabilizes heart rate, and promotes calm (Light et al., 2005). Polyvagal Theory (Porges, 2011) shows that voice tone, eye contact, and touch activate the body's social safety system, shifting the nervous system from protection into connection.",
    mantra: "You are your child's anchor. Your presence reminds them: you are safe, you are loved, I am here.",
    hugProtocol: {
      title: "The 20-Second Hug",
      steps: [
        "Start wherever your child is comfortable — even 3 seconds counts",
        "Count aloud together — make it a game, not a demand",
        "Build up gradually over days and weeks",
        "Let your child lead — some days will be longer than others",
        "The goal isn't the number. It's the connection.",
      ],
    },
  },
];

export default function TouchpointCards() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-text">
          Three Touchpoints. Every Day.
        </h2>
        <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">
          Connection doesn&apos;t require hours. It requires intention. Just 9
          intentional minutes a day.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-stagger">
        {touchpoints.map((tp) => {
          const Icon = tp.icon;
          const isExpanded = expanded === tp.key;

          return (
            <div key={tp.key} className="flex flex-col">
              <button
                onClick={() => setExpanded(isExpanded ? null : tp.key)}
                className={`bg-white rounded-2xl p-8 border ${tp.borderColor} transition-colors shadow-sm hover-lift text-left w-full ${isExpanded ? "rounded-b-none border-b-0" : ""}`}
              >
                <div className="flex items-start justify-between">
                  <div className={`w-14 h-14 ${tp.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className={tp.textColor} size={28} />
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-text-muted transition-transform duration-300 mt-2 ${isExpanded ? "rotate-180" : ""}`}
                  />
                </div>
                <h3 className="text-xl font-bold text-text mb-2">{tp.title}</h3>
                <p className={`text-3xl font-bold ${tp.textColor} mb-3`}>
                  {tp.time}
                </p>
                <p className="text-text-muted leading-relaxed">{tp.tagline}</p>
              </button>

              {isExpanded && (
                <div className={`${tp.expandBg} rounded-b-2xl border border-t-0 ${tp.borderColor.split(" ")[0]} p-6 sm:p-8 space-y-6 animate-fade-in`}>
                  {/* Close button */}
                  <div className="flex justify-end">
                    <button
                      onClick={() => setExpanded(null)}
                      className="text-text-muted hover:text-text transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  {/* What it is */}
                  <div>
                    <h4 className="font-semibold text-text mb-3">{tp.title} is:</h4>
                    <ul className="space-y-2">
                      {tp.whatItIs.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                          <span className={`mt-1.5 w-2 h-2 ${tp.bgColor} rounded-full flex-shrink-0`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What it is NOT */}
                  <div>
                    <h4 className="font-semibold text-text mb-3">{tp.title} is not:</h4>
                    <ul className="space-y-2">
                      {tp.whatItIsNot.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                          <span className="mt-1.5 w-2 h-2 bg-gray-300 rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Real life examples */}
                  <div>
                    <h4 className="font-semibold text-text mb-3">In real life, this looks like:</h4>
                    <ul className="space-y-2">
                      {tp.realLife.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                          <span className="mt-1 text-text-muted">&#8226;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Connection Spectrum (Listen only) */}
                  {"connectionSpectrum" in tp && tp.connectionSpectrum && (
                    <div>
                      <h4 className="font-semibold text-text mb-3">The Connection Spectrum</h4>
                      <p className="text-sm text-text-muted mb-3">
                        This isn&apos;t a ladder to climb — it&apos;s a relationship to nurture.
                      </p>
                      <div className="space-y-2">
                        {tp.connectionSpectrum.map((level) => (
                          <div key={level.level} className={`${level.color} rounded-lg px-3 py-2 text-sm`}>
                            <span className="font-medium">{level.level}:</span>{" "}
                            {level.desc}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 20-Second Hug Protocol (Physical only) */}
                  {"hugProtocol" in tp && tp.hugProtocol && (
                    <div className={`${tp.bgColor}/50 rounded-xl p-4`}>
                      <h4 className="font-semibold text-text mb-3">{tp.hugProtocol.title}</h4>
                      <ol className="space-y-2">
                        {tp.hugProtocol.steps.map((step, i) => (
                          <li key={step} className="flex items-start gap-2 text-sm text-text-muted">
                            <span className={`${tp.textColor} font-bold flex-shrink-0`}>{i + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {/* Key insight */}
                  <div className="border-l-4 border-current pl-4" style={{ borderColor: "var(--color-text)" }}>
                    <p className="text-sm text-text italic leading-relaxed">
                      {tp.keyInsight}
                    </p>
                  </div>

                  {/* Science */}
                  <div className="bg-white/60 rounded-xl p-4">
                    <h4 className="font-semibold text-text mb-2 text-sm flex items-center gap-2">
                      <BookOpen size={14} /> The Science
                    </h4>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {tp.science}
                    </p>
                  </div>

                  {/* Mantra */}
                  <div className="text-center pt-2">
                    <p className={`font-semibold ${tp.textColor} text-sm`}>
                      &ldquo;{tp.mantra}&rdquo;
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="text-center pt-2">
                    <Link
                      href="/shop/the-book"
                      className={`inline-flex items-center gap-2 text-sm ${tp.textColor} font-medium hover:underline`}
                    >
                      Read more in the book <BookOpen size={14} />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

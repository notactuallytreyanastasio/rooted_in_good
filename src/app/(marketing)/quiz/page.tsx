import type { Metadata } from "next";
import ConnectionQuiz from "@/components/ConnectionQuiz";

export const metadata: Metadata = {
  title: "Connection Assessment | Where Are You on the Spectrum?",
  description:
    "Take this free 2-minute assessment to discover your natural connection style and get personalized recommendations from the RootedInGood Method.",
};

export default function QuizPage() {
  return (
    <div className="bg-warm-white min-h-screen">
      <ConnectionQuiz />
    </div>
  );
}

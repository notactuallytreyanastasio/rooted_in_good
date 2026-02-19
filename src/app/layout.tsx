import type { Metadata } from "next";
import PasswordGate from "@/components/PasswordGate";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Rooted in Good Method",
    template: "%s | Rooted in Good",
  },
  description:
    "Transform your relationship with your child through 3 simple daily touchpoints: Focused Support (2min), Intentional Listening (5min), and Physical Connection (2min). Just 9 intentional minutes a day.",
  keywords: [
    "parenting",
    "connection",
    "touchpoints",
    "rooted in good",
    "parent child relationship",
    "intentional listening",
    "co-regulation",
    "parenting book",
  ],
  authors: [{ name: "The Rooted in Good Method" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Rooted in Good Method",
    title: "The Rooted in Good Method",
    description:
      "9 intentional minutes can change everything. Transform your relationship with your child through 3 simple daily touchpoints.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Rooted in Good Method",
    description:
      "9 intentional minutes can change everything. Transform your relationship with your child through 3 simple daily touchpoints.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PasswordGate>{children}</PasswordGate>
      </body>
    </html>
  );
}

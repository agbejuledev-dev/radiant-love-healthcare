import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Our Healthcare Recruitment Team",
  description: "Contact Radiant-love Healthcare Ltd. in Romford, Essex, about healthcare recruitment, staffing support, vacancies or job opportunities.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

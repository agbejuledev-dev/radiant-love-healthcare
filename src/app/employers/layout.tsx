import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Staffing for Employers",
  description: "Register a healthcare vacancy with Radiant-love Healthcare. Get in touch about contract, flexible and permanent recruitment or remote staffing across the UK.",
  alternates: { canonical: "/employers" },
};

export default function EmployersLayout({ children }: { children: React.ReactNode }) {
  return children;
}

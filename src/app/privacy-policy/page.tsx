import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the privacy information for Radiant-love Healthcare Ltd.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <section className="pageHero">
      <span className="eyebrow">Radiant-love Healthcare</span>
      <h1>Privacy Policy</h1>
      <p>Your privacy matters to us. This page will contain Radiant-love Healthcare Ltd.'s privacy information and how we handle personal data.</p>
    </section>
  );
}

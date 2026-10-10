import type { Metadata } from "next";
import Link from "next/link";
import { recruitmentServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Healthcare Recruitment Services",
  description: "Explore contract recruitment, flexible recruitment, permanent recruitment and remote staffing services for healthcare organisations across the UK.",
  alternates: { canonical: "/services" },
};

export default function Services() { return <>
  <section className="pageHero"><span className="eyebrow">What we do</span><h1>Recruitment support built around real workforce needs.</h1><p>Simple, responsive healthcare recruitment for organisations and professionals across the UK.</p></section>
  <section className="serviceGrid">{recruitmentServices.map(s => <article key={s.title}><h2>{s.title}</h2><p>{s.text}</p><Link href="/contact">LEARN MORE →</Link></article>)}</section>
  <section className="darkBand"><h2>Need healthcare staff?</h2><p>Tell us what you need and our team can help you get started.</p><Link href="/employers">REGISTER A VACANCY</Link></section>
</>; }

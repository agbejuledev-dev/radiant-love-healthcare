import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Recruitment Insights",
  description: "News, guidance and updates from Radiant-love Healthcare on healthcare recruitment and staffing in the UK.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  return (
    <section className="pageHero">
      <span className="eyebrow">Radiant-love Healthcare</span>
      <h1>Healthcare recruitment insights.</h1>
      <p>Our latest news, recruitment guidance and updates will appear here.</p>
    </section>
  );
}

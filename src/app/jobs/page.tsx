import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Healthcare Jobs Across the UK",
  description: "Explore healthcare job opportunities with Radiant-love Healthcare. Contact our recruitment team about nursing, care and support roles across the UK.",
  alternates: { canonical: "/jobs" },
};

const EMAIL = "cngwendson@radiant-lovehealthcare.co.uk";

export default function Jobs() {
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${encodeURIComponent("Job Enquiry - Radiant-love Healthcare")}`;

  return (
    <>
      <section className="pageHero compactHero">
        <span className="eyebrow">Job opportunities</span>
        <h1>Looking for your next healthcare role?</h1>
        <p>
          We connect healthcare professionals with opportunities across the UK.
          For our latest vacancies, get in touch with our recruitment team.
        </p>
      </section>

      <section className="jobsEmailSection" aria-labelledby="jobs-email-title">
        <div className="jobsEmailCard">
          <div className="jobsEmailIcon" aria-hidden="true">
            <Mail size={25} strokeWidth={1.6} />
          </div>

          <span className="eyebrow">Current vacancies</span>
          <h2 id="jobs-email-title">Email us for jobs.</h2>
          <p>
            We regularly hear from healthcare organisations with new roles.
            Send us an email with the type of role you are looking for, your
            location and a little about your experience, and our team will
            let you know about suitable opportunities.
          </p>

          <a
            className="jobsEmailLink"
            href={gmailUrl}
            target="_blank"
            rel="noreferrer"
          >
            SEND US AN EMAIL
            <ArrowRight size={16} />
          </a>

          <div className="jobsEmailActions">
            <Link href="/apply">SUBMIT YOUR CV <ArrowRight size={15} /></Link>
            <Link href="/contact">CONTACT US <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}

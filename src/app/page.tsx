import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { jobs } from "@/lib/site";
import JobCard from "@/components/JobCard";
import HomeHero from "@/components/HomeHero";

const images = [
  "https://images.unsplash.com/photo-1773227055624-07b515ba87c5?auto=format&fit=crop&w=1400&q=88",
  "https://images.unsplash.com/photo-1773227060422-ee506b865417?auto=format&fit=crop&w=1400&q=88",
  "https://images.unsplash.com/photo-1773227054058-afd18b554e8f?auto=format&fit=crop&w=1400&q=88",
];

export default function Home() {
  return (
    <>
      <HomeHero />

      <div className="heroActions">
        <Link href="/apply">SUBMIT YOUR CV <ArrowRight size={15} /></Link>
        <Link href="/employers">REGISTER YOUR JOB VACANCY <ArrowRight size={15} /></Link>
      </div>

      <section className="intro">
        <span className="eyebrow">Radiant-love Healthcare</span>
        <h2>Healthcare recruitment, made simple.</h2>
        <p>We connect qualified healthcare professionals with trusted organisations across the UK. Our role is simple: understand what people need, make the right connections and support the recruitment journey.</p>
      </section>

      <section className="serviceStrip">
        <div className="serviceStripInner">
          <LinkService title="Contract Recruitment" text="Experienced professionals for defined workforce requirements." />
          <LinkService title="Flexible Recruitment" text="Responsive staffing support when schedules and demand change." />
          <LinkService title="Permanent Recruitment" text="Long-term placements focused on the right fit for both sides." />
          <LinkService title="Remote Staffing" text="Suitable professionals for remote and digitally supported roles." />
        </div>
      </section>

      <section className="storyRows">
        <Story image="https://images.unsplash.com/photo-1765896387387-0538bc9f997e?auto=format&fit=crop&w=1400&q=90" title="Supplying Healthcare Professionals to Clients" text="We help healthcare organisations access nurses, healthcare assistants, support workers and other professionals for contract, flexible and permanent staffing needs." />
        <Story reverse image="https://images.unsplash.com/photo-1765896387377-e293914d1e69?auto=format&fit=crop&w=1400&q=90" title="Nurse and Care Jobs Available" text="We are always looking to hear from qualified and experienced healthcare professionals. Browse current vacancies and take the next step towards your next opportunity." />
        <Story image="https://images.unsplash.com/photo-1773227059522-acc3ae46abdc?auto=format&fit=crop&w=1400&q=88" title="Recruitment That Works For You" text="From contract recruitment and flexible staffing to permanent recruitment and remote staffing, we keep the process clear and focused on the right fit." />
      </section>

      <section className="jobsHome">
        <div className="sectionTop">
          <div><span className="eyebrow">Current vacancies</span><h2>Find your next opportunity.</h2></div>
          <Link href="/jobs">VIEW ALL JOBS <ArrowRight size={15} /></Link>
        </div>
        <div className="jobGrid">
          {jobs.slice(0, 3).map((job) => <JobCard key={job.slug} job={job} compact />)}
        </div>
      </section>

      <section className="dbs">
        <strong>DBS Disclosure Service</strong>
        <p>There is no registration fee or hidden charges. Simply pay for what you need, when you need it.</p>
      </section>

      <section className="finalCta">
        <div><span className="eyebrow">Start a conversation</span><h2>Looking for work or looking for staff?</h2></div>
        <div><Link href="/jobs">FIND A JOB</Link><Link href="/employers">FIND STAFF</Link></div>
      </section>
    </>
  );
}

function LinkService({ title, text }: { title: string; text: string }) {
  return (
    <article className="serviceMini">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function Story({ image, title, text, reverse = false }: { image: string; title: string; text: string; reverse?: boolean }) {
  return (
    <div className={reverse ? "story reverse" : "story"}>
      <div className="storyPhoto">
        <Image src={image} alt={title} fill sizes="(max-width: 800px) 100vw, 45vw" />
      </div>
      <div className="storyCopy">
        <span className="eyebrow">Radiant-love Healthcare</span>
        <h2>{title}</h2>
        <p>{text}</p>
        <Link href="/contact">LEARN MORE <ArrowRight size={15} /></Link>
      </div>
    </div>
  );
}

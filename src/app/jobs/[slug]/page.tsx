import type { Metadata } from 'next'; import {notFound} from 'next/navigation'; import Link from 'next/link'; import {ArrowLeft} from 'lucide-react'; import {jobs} from '@/lib/site'; import ApplicationForm from '@/components/ApplicationForm';
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((item) => item.slug === slug);
  if (!job) return { title: "Job Not Found", robots: { index: false, follow: false } };

  return {
    title: `${job.title} Job Opportunity`,
    description: `${job.description} View requirements and submit your CV to Radiant-love Healthcare.`,
    alternates: { canonical: `/jobs/${job.slug}` },
  };
}

export default async function Job({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const job=jobs.find(x=>x.slug===slug);if(!job)return notFound();return <><section className="pageHero"><span className="eyebrow">{job.category}</span><h1>{job.title}</h1><p>{job.location} · {job.type}</p></section><section className="jobDetail"><div><p className="lead">{job.description}</p><h2>Requirements</h2><ul>{job.requirements.map(r=><li key={r}>{r}</li>)}</ul><Link href="/jobs" className="backLink"><ArrowLeft size={15}/> Back to jobs</Link></div><div><div className="applyBox"><span className="eyebrow">Interested?</span><h3>Apply for this role.</h3><p>Send your CV and our team will review your application.</p><Link href={`/apply?job=${job.slug}`}>SUBMIT YOUR CV</Link></div></div></section></>}
export function generateStaticParams(){return jobs.map(j=>({slug:j.slug}))}

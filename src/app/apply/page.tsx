import type { Metadata } from 'next';
import ApplicationForm from '@/components/ApplicationForm';

export const metadata: Metadata = {
  title: 'Submit Your CV | Healthcare Jobs UK',
  description: 'Register your interest in healthcare jobs across the UK. Submit your CV to Radiant-love Healthcare for consideration for suitable opportunities.',
  alternates: { canonical: '/apply' },
};
export default function Apply(){return <><section className="pageHero"><span className="eyebrow">For candidates</span><h1>Submit your CV.</h1><p>Tell us about your experience and the opportunities you are looking for.</p></section><section className="applySection"><div><span className="eyebrow">Candidate registration</span><h2>Let’s find your next opportunity.</h2><p>Upload your CV and our recruitment team can consider you for suitable vacancies.</p><ul><li>Contract, flexible and permanent recruitment opportunities</li><li>Healthcare and care roles</li><li>Support throughout the recruitment process</li></ul></div><ApplicationForm/></section></>}

import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Our Healthcare Recruitment Agency',
  description: 'Learn about Radiant-love Healthcare Ltd., a UK healthcare recruitment partner connecting professionals with trusted organisations.',
  alternates: { canonical: '/about' },
};
export default function About(){return <><section className="pageHero"><span className="eyebrow">Who we are</span><h1>A recruitment partner built around people.</h1><p>Radiant-love Healthcare connects healthcare professionals with trusted organisations across the UK.</p></section><section className="splitSection"><div className="largeImage"><Image src="https://images.unsplash.com/photo-1773227060422-ee506b865417?auto=format&fit=crop&w=1400&q=88" alt="Caregiver and older person sharing a warm moment" fill sizes="50vw"/></div><div className="copy"><span className="eyebrow">About Radiant-love</span><h2>Simple, responsive healthcare recruitment.</h2><p>We help qualified healthcare professionals discover opportunities and help organisations find people who can make a real difference.</p><p>Our approach is straightforward: understand what people need, communicate clearly and support candidates and clients throughout the recruitment journey.</p></div></section><section className="statement"><span className="eyebrow">Our approach</span><h2>Professional recruitment. Human connection.</h2></section></>}

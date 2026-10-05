'use client';

import {useState} from 'react';

const FORM_ENDPOINT = 'https://formsubmit.co/cngwendson@radiant-lovehealthcare.co.uk';

export default function Employers(){
  const [sent,setSent]=useState(false);
  if(sent) return <><section className="pageHero"><span className="eyebrow">For employers</span><h1>Tell us who you need. We’ll help you find them.</h1></section><section className="employerSection"><div className="successBox"><h3>Thank you.</h3><p>Your vacancy enquiry has been submitted. Our team will be in touch.</p></div></section></>;

  return <><section className="pageHero"><span className="eyebrow">For employers</span><h1>Tell us who you need. We’ll help you find them.</h1><p>Register your vacancy and let Radiant-love support your healthcare staffing requirements.</p></section><section className="employerSection"><div><span className="eyebrow">Register a job vacancy</span><h2>Give us the details.</h2><p>Share the role, location and staffing requirements. We’ll use the information to understand how we can help.</p></div><form className="form" action={FORM_ENDPOINT} method="POST" onSubmit={()=>setSent(true)}><input type="hidden" name="_subject" value="New Job Vacancy - Radiant-love Healthcare" /><input type="hidden" name="_template" value="table" /><div className="formGrid"><label>Company Name<input name="company" required placeholder="Organisation name"/></label><label>Contact Name<input name="contact_name" required placeholder="Your name"/></label><label>Email<input name="email" required type="email" placeholder="you@company.com"/></label><label>Phone<input name="phone" required placeholder="Phone number"/></label><label>Job Title<input name="job_title" required placeholder="e.g. Registered Nurse"/></label><label>Location<input name="location" required placeholder="e.g. London"/></label></div><label>Job Type<select name="job_type"><option>Contract Recruitment</option><option>Flexible Recruitment</option><option>Permanent Recruitment</option><option>Remote Staffing</option></select></label><label>Requirements<textarea name="requirements" rows={6} placeholder="Tell us about the role and requirements..."/></label><button className="blackButton">REGISTER VACANCY</button></form></section></>
}

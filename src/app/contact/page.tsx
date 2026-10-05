'use client';

import {useState} from 'react';

const FORM_ENDPOINT = 'https://formsubmit.co/cngwendson@radiant-lovehealthcare.co.uk';

export default function Contact(){
  const [sent,setSent]=useState(false);
  if(sent) return <><section className="pageHero"><span className="eyebrow">Contact us</span><h1>Let’s talk about your next opportunity.</h1></section><section className="contactSection"><div className="successBox"><h3>Message sent.</h3><p>Thank you. We’ll get back to you shortly.</p></div></section></>;

  return <><section className="pageHero"><span className="eyebrow">Contact us</span><h1>Let’s talk about your next opportunity.</h1><p>Whether you are looking for work or healthcare staff, we’d be happy to hear from you.</p></section><section className="contactSection"><div><h2>Radiant-love Healthcare Ltd.</h2><p>Office 10330 High Road, Romford, England, RM6 6AX</p></div><form className="form" action={FORM_ENDPOINT} method="POST" onSubmit={()=>setSent(true)}><input type="hidden" name="_subject" value="New Contact Enquiry - Radiant-love Healthcare" /><input type="hidden" name="_template" value="table" /><label>Name<input name="name" required placeholder="Your name"/></label><label>Email<input name="email" required type="email" placeholder="you@example.com"/></label><label>Subject<input name="subject" required placeholder="How can we help?"/></label><label>Message<textarea name="message" required rows={7} placeholder="Your message..."/></label><button className="blackButton">SEND MESSAGE</button></form></section></>
}

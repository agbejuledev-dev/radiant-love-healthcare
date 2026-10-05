'use client';

import {useState} from 'react';

const FORM_ENDPOINT = 'https://formsubmit.co/cngwendson@radiant-lovehealthcare.co.uk';

export default function ApplicationForm({jobTitle=''}:{jobTitle?:string}){
  const [status,setStatus]=useState('');

  const submit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const form=e.currentTarget;
    const file=form.elements.namedItem('cv') as HTMLInputElement | null;
    if(file?.files?.[0] && file.files[0].size > 10 * 1024 * 1024){
      setStatus('Please upload a CV smaller than 10MB.');
      return;
    }
    setStatus('Sending…');
    try{
      const data=new FormData(form);
      const r=await fetch(FORM_ENDPOINT,{method:'POST',body:data,headers:{Accept:'application/json'}});
      if(r.ok){
        form.reset();
        setStatus('Application received. We will be in touch.');
      }else{
        setStatus('Please check your details and try again.');
      }
    }catch{
      setStatus('Something went wrong. Please try again.');
    }
  };

  return <form className="form" onSubmit={submit} encType="multipart/form-data">
    <input type="hidden" name="_subject" value="New Job Application - Radiant-love Healthcare" />
    <input type="hidden" name="_template" value="table" />
    <div className="formGrid">
      <label>Full Name<input name="name" required placeholder="Your full name"/></label>
      <label>Email Address<input name="email" type="email" required placeholder="you@example.com"/></label>
      <label>Phone Number<input name="phone" required placeholder="+44..."/></label>
      <label>Job Applying For<input name="job" defaultValue={jobTitle} placeholder="Job title"/></label>
    </div>
    <label>CV / Resume<input name="cv" type="file" accept=".pdf,.doc,.docx" required/></label>
    <label>Message / Cover Note<textarea name="message" rows={6} placeholder="Tell us a little about yourself..."/></label>
    <button className="blackButton" type="submit">SUBMIT APPLICATION</button>
    {status&&<p className="formStatus">{status}</p>}
  </form>
}

"use client";

import Link from "next/link";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

const links = [
  ["Home", "/"],
  ["Jobs", "/jobs"],
  ["Who We Are", "/about"],
  ["What We Do", "/services"],
  ["For Employers", "/employers"],
  ["Contact Us", "/contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="topbarInner">
          <a href={`tel:${site.phone.replace(/\s/g, "")}`}>
            <Phone size={12} />
            <span>{site.phone}</span>
          </a>
          <a href={`mailto:${site.email}`}>
            <Mail size={12} />
            <span>{site.email}</span>
          </a>
          <span>
            <MapPin size={12} />
            <span>{site.address}</span>
          </span>
        </div>
      </div>

      <header className="header">
        <div className="nav">
          <Link
            href="/"
            className="logoLink"
            onClick={() => setOpen(false)}
          >
            <Logo className="headerLogo" />
          </Link>

          <nav
            className={open ? "navlinks open" : "navlinks"}
            aria-label="Main navigation"
          >
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              className="navApply"
              href="/apply"
              onClick={() => setOpen(false)}
            >
              Submit Your CV
            </Link>
          </nav>

          <button
            className="menub"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
    </>
  );
}

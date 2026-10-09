import Link from "next/link";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerSimple">
        <div className="footerBrand">
          <Logo variant="reversed" className="footerLogo" />
        </div>

        <div className="footerAddress">
          <span>{site.address}</span>
          <span>UK</span>
        </div>

        <nav className="footerLinks" aria-label="Footer navigation">
          <Link href="/">Home</Link>
          <Link href="/about">Who We Are</Link>
          <Link href="/services">What We Do</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </nav>

        <div className="footerMeta">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>Company Reg # {site.companyReg}</span>
        </div>
      </div>

      <div className="footerCopyright">
        © {new Date().getFullYear()} Radiant-love Healthcare Ltd.
      </div>

      <div className="footerDeveloperCredit">
        Website developed by{" "}
        <a
          href="https://portfolio-rebuild-red.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Oluwatobiloba Agbejule's portfolio (opens in a new tab)"
        >
          Oluwatobiloba Agbejule
        </a>
      </div>
    </footer>
  );
}

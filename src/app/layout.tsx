import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const siteUrl = "https://www.radiant-lovehealthcare.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Healthcare Recruitment & Staffing Across the UK | Radiant-love Healthcare",
    template: "%s | Radiant-love Healthcare",
  },
  description:
    "Radiant-love Healthcare connects healthcare professionals with UK organisations through contract, flexible and permanent recruitment, plus remote staffing support.",
  applicationName: site.name,
  keywords: [
    "healthcare recruitment UK",
    "healthcare staffing agency UK",
    "nurse recruitment UK",
    "healthcare assistant jobs UK",
    "care worker recruitment",
    "contract healthcare recruitment",
    "permanent healthcare recruitment",
    "flexible healthcare staffing",
    "remote healthcare staffing",
    "healthcare recruitment Romford",
    "healthcare recruitment Essex",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: site.name,
    title: "Healthcare Recruitment & Staffing Across the UK | Radiant-love Healthcare",
    description:
      "Connecting healthcare professionals with trusted UK organisations through contract, flexible and permanent recruitment and remote staffing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Radiant-love Healthcare | UK Healthcare Recruitment",
    description:
      "Healthcare recruitment and staffing connecting professionals with trusted organisations across the UK.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  "@id": `${siteUrl}/#organization`,
  name: site.name,
  url: siteUrl,
  description: site.description,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office 10330 High Road",
    addressLocality: "Romford",
    addressRegion: "England",
    postalCode: "RM6 6AX",
    addressCountry: "GB",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={montserrat.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

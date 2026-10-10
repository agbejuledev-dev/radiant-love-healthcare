import type { MetadataRoute } from "next";
import { jobs } from "@/lib/site";

const siteUrl = "https://www.radiant-lovehealthcare.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = [
    { route: "", priority: 1.0, changeFrequency: "weekly" as const },
    { route: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { route: "/jobs", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/employers", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/apply", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/blog", priority: 0.5, changeFrequency: "monthly" as const },
    { route: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" as const },
  ];

  return [
    ...staticRoutes.map(({ route, priority, changeFrequency }) => ({
      url: `${siteUrl}${route}`,
      lastModified,
      changeFrequency,
      priority,
    })),
    ...jobs.map((job) => ({
      url: `${siteUrl}/jobs/${job.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}

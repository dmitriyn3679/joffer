"use client";

import Script from "next/script";

export const OrganizationJsonLd = () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Joffer",
    url: siteUrl,
    logo: `${siteUrl}/favicon-512x512.png`,
    sameAs: [
      "https://t.me/+1Ph25Y-d5m1mNmQ6",
    ],
    description: "Платформа для стажування, підтримки та старту карʼєри в IT",
    // aggregateRating: {
    //   "@type": "AggregateRating",
    //   ratingValue: "4.7",
    //   reviewCount: "28",
    // },
  };
  
  return (
    <Script id="jsonld-organization" type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </Script>
  );
};

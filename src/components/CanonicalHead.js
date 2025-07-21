'use client';

import { usePathname } from "next/navigation";
import Head from "next/head";

export function CanonicalHead() {
  const pathname = usePathname();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const canonical = `${baseUrl}${pathname}`;
  
  return (
    <Head>
      <link rel="canonical" href={canonical} />
    </Head>
  );
}

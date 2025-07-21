'use client';

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export const useScrollToSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const pendingIdRef = useRef(null);
  
  useEffect(() => {
    if (pathname === "/" && pendingIdRef.current) {
      const id = pendingIdRef.current;
      pendingIdRef.current = null;
      
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          const headerHeight = document.querySelector("header")?.clientHeight || 0;
          const offset = el.getBoundingClientRect().top + window.scrollY - headerHeight;
          window.scrollTo({ top: offset, behavior: "smooth" });
        }
      });
    }
  }, [pathname]);
  
  const scrollToSection = (id) => {
    if (typeof window === "undefined") return;
    
    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        const offset = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    } else {
      pendingIdRef.current = id;
      router.push("/");
    }
  };
  
  return scrollToSection;
};

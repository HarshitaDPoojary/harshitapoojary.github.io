// src/app/ClientRouteChangeTracker.jsx
'use client';

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";


export default function ClientRouteChangeTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    // Send a page_view when the route changes in the SPA
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "G-WZBBLBD79R", { page_path: url });
    }
  }, [pathname, searchParams]);

  return null;
}

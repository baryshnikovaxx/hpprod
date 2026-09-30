"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function MetrikaNavigation() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const previousUrl = useRef<string | null>(null);

  useEffect(() => {
    const url = window.location.href;
    // The inline init records the first view. Only send subsequent navigation.
    if (previousUrl.current && previousUrl.current !== url) {
      const analyticsWindow = window as typeof window & {
        ym?: (id: number, method: string, url: string, options: { referer: string }) => void;
      };
      analyticsWindow.ym?.(113227786, "hit", url, { referer: previousUrl.current });
    }
    previousUrl.current = url;
  }, [pathname, searchParams]);

  return null;
}

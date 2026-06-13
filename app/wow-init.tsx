"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function WowInit() {
  const pathname = usePathname();
  const wowRef = useRef<any>(null);

  useEffect(() => {
    let timeout: number;

    const initWow = async () => {
      try {
        const mod = await import("wowjs");
        const WOW = mod.default?.WOW || mod.WOW || mod.default;

        if (!WOW) return;

        const instance = new WOW({
          live: false,
          animateClass: "animated",
          boxClass: "wow",
        });

        wowRef.current = instance;

        timeout = window.setTimeout(() => {
          instance.init();
        }, 80);
      } catch (err) {
        console.error("WOW init error:", err);
      }
    };

    initWow();

    return () => {
      if (timeout) clearTimeout(timeout);
      if (wowRef.current?.sync) {
        wowRef.current.sync();
      }
    };
  }, [pathname]);

  return null;
};
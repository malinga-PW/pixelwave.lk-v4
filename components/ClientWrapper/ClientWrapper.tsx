"use client";

import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Lenis from "lenis";

import "react-toastify/dist/ReactToastify.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import WowInit from "@/app/wow-init";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  // Lenis
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    let rafId: number;

    const raf = (t: number) => {
      lenis.raf(t);
      rafId = requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => cancelAnimationFrame(rafId);
  }, []);

  // GSAP SplitText
  useEffect(() => {
    const apply = () => {
      const els = document.querySelectorAll<HTMLElement>(".xb-text-reveal");

      els.forEach((el) => {
        if (el.dataset.splitApplied === "true") return;
        el.dataset.splitApplied = "true";

        const split = new SplitText(el, { type: "words" });

        gsap.fromTo(
          split.words,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
            onComplete: () => {
              split.revert(); // 🔑 restores original DOM
            },
          }
        );
      });
    };

    const timer = setTimeout(apply, 200);

    const observer = new MutationObserver(() => {
      requestAnimationFrame(apply);
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);


  return (
    <>
      <WowInit />
      {children}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

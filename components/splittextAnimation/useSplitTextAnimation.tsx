"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let SplitText: any = null;
try {
  const mod = require("gsap/SplitText");
  SplitText = mod.SplitText;
} catch (e) {
  SplitText = null;
}

gsap.registerPlugin(ScrollTrigger);

const useSplitTextAnimation = (): void => {
  useEffect(() => {
    const splitTextLines = gsap.utils.toArray<HTMLElement>(".splittext-line");

    const splitInstances: any[] = [];

    splitTextLines.forEach((splitTextLine) => {
      if (SplitText) {
        const splitInstance = new SplitText(splitTextLine, { type: "lines" });
        splitInstances.push(splitInstance);

        gsap.set(splitTextLine, { perspective: 400 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: splitTextLine,
            start: "top 90%",
            end: "bottom 60%",
            scrub: false,
            markers: false,
            toggleActions: "play none none none",
          },
        });

        tl.from(splitInstance.lines, {
          duration: 1,
          delay: 0.5,
          opacity: 0,
          rotationX: -80,
          force3D: true,
          transformOrigin: "top center -50",
          stagger: 0.1,
        });
      }

      // 🚀 Fallback if SplitText plugin is NOT available
      else {
        const words = splitTextLine.innerText.split(" ");
        splitTextLine.innerHTML = words
          .map((word) => `<span>${word}</span>`)
          .join(" ");
        const spans = splitTextLine.querySelectorAll("span");

        gsap.set(splitTextLine, { perspective: 400 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: splitTextLine,
            start: "top 90%",
            end: "bottom 60%",
            scrub: false,
            markers: false,
            toggleActions: "play none none none",
          },
        });

        tl.from(spans, {
          duration: 1,
          delay: 0.5,
          opacity: 0,
          rotationX: -80,
          force3D: true,
          transformOrigin: "top center -50",
          stagger: 0.1,
        });
      }
    });

    // 🧹 Cleanup
    return () => {
      if (SplitText) {
        splitInstances.forEach((instance) => {
          if (instance?.revert) instance.revert();
        });
      } else {
        splitTextLines.forEach((line) => {
          line.innerHTML = line.textContent || "";
        });
      }
    };
  }, []);
};

export default useSplitTextAnimation;

"use client";

import { useEffect, useRef } from "react";

export default function useScrollAnimation() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('appeared')) {
            entry.target.classList.add('animate-slide-in');
            const timeout = setTimeout(() => {
              entry.target.classList.add('appeared');
            }, 800); 

            return () => clearTimeout(timeout);
          }
        });
      },
      {
        root: null, 
        rootMargin: "0px",
        threshold: 0.15,
      }
    );
    const elementsToAnimate = document.querySelectorAll('[data-animate]');

    elementsToAnimate.forEach((element) => {
      if (observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return null;
}

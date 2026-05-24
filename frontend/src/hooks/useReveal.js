// frontend/src/hooks/useReveal.js
import { useEffect, useRef } from "react";

export function useReveal() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.06, rootMargin: "0px 0px -20px 0px" }
    );
    revealRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const r = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return r;
}
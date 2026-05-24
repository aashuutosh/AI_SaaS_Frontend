// frontend/src/pages/LandingPage.jsx
import React, { useState, useEffect } from "react";
import { useReveal } from "../hooks/useReveal";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Credits from "../components/Credits";
import PricingAndTestimonials from "../components/PricingAndTestimonials";
import FaqAndFooter from "../components/FaqAndFooter";
import "../styles/globals.css";

export default function AIFlowLanding() {
  const [scrolled, setScrolled] = useState(false);
  const r = useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} />
      <Hero r={r} />
      <Features r={r} />
      <Credits r={r} />
      <PricingAndTestimonials r={r} />
      <FaqAndFooter r={r} />
    </>
  );
}
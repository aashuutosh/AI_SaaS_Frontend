// frontend/src/components/Navbar.jsx
import React from "react";

export default function Navbar({ scrolled }) {
  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <a className="nav-logo" href="#">
        <div className="nav-logo-mark">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="nav-logo-text">AI<span>Flow</span></span>
      </a>
      <ul className="nav-links">
        {[["#features", "Features"], ["#pricing", "Pricing"], ["#faq", "FAQ"]].map(([h, l]) => (
          <li key={h}><a href={h}>{l}</a></li>
        ))}
      </ul>
      <div className="nav-actions">
        <a href="#" className="btn btn-ghost">Sign in</a>
        <a href="#" className="btn btn-primary">
          Start free
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
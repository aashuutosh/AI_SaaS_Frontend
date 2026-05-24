// frontend/src/components/FaqAndFooter.jsx
import React, { useState } from "react";
import { FAQS } from "../utils/constants";

export default function FaqAndFooter({ r }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <div className="section-full" id="faq">
        <div className="section-full-inner">
          <div className="section-center">
            <div className="section-badge reveal" ref={r}><div className="section-badge-dot" />FAQ</div>
            <h2 className="section-title reveal" ref={r}>Questions?<br />We've got answers.</h2>
          </div>
          <div className="faq-list reveal" ref={r}>
            {FAQS.map(({ q, a }, i) => (
              <div className={`faq-item${openFaq === i ? " open" : ""}`} key={i}>
                <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {q}
                  <div className="faq-icon">+</div>
                </div>
                <div className="faq-a">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-section reveal" ref={r}>
        <div className="cta-glow-1" /><div className="cta-glow-2" />
        <div className="cta-badge">No credit card · Free forever plan</div>
        <h2 className="cta-title">
          Ready to work smarter?<br />
          <span className="grad">Start in 60 seconds.</span>
        </h2>
        <p className="cta-sub">
          Join 2,400+ teams using AIFlow to save hours every week.
          Your first 500 credits are on us.
        </p>
        <div className="cta-actions">
          <a href="#" className="btn-cta-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Get started free with Google
          </a>
          <a href="#pricing" className="btn-cta-outline-white">View pricing →</a>
        </div>
      </div>

      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div className="footer-logo-row">
                <div className="footer-logo-mark">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="footer-logo-text">AI<span>Flow</span></span>
              </div>
              <p className="footer-tagline">
                The AI platform built for everyone — powerful enough for teams,
                simple enough for anyone.
              </p>
              <div className="footer-socials">
                {[["𝕏", "x"], ["gh", "github"], ["in", "linkedin"]].map(([l, k]) => (
                  <a key={k} href="#" className="footer-social">{l}</a>
                ))}
              </div>
            </div>
            {[
              { head: "Product", links: ["Features", "Pricing", "Changelog", "Status", "Roadmap"] },
              { head: "Resources", links: ["Documentation", "API Reference", "Blog", "GitHub", "Support"] },
              { head: "Company", links: ["About", "Careers", "Privacy", "Terms", "Contact"] },
            ].map(({ head, links }) => (
              <div key={head}>
                <div className="footer-col-head">{head}</div>
                <ul className="footer-links">
                  {links.map(l => <li key={l}><a href="#">{l}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer-bottom">
            <span className="footer-copy">© 2025 AIFlow. All rights reserved.</span>
            <span className="footer-stack">
              Powered by <span>Gemini</span> · Hosted on <span>Vercel</span> · DB by <span>Supabase</span>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
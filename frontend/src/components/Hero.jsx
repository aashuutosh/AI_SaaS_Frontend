// frontend/src/components/Hero.jsx
import React from "react";
import { CoinIcon, SendIcon } from "./Icons";

export default function Hero({ r }) {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-pill">NEW</span>
          Gemini-powered · Now in public beta
        </div>
        <h1 className="hero-title">
          Your AI assistant<br />
          <span className="grad">that actually works</span><br />
          for your business
        </h1>
        <p className="hero-sub">
          Chat, create content, and automate tasks — no technical skills needed.
          Start free in under 60 seconds with your Google account.
        </p>
        <div className="hero-actions">
          <a href="#" className="btn btn-primary btn-xl">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google — it's free
          </a>
          <a href="#features" className="btn btn-ghost btn-large">See how it works</a>
        </div>
        <div className="hero-trust">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="#2d9e65"/></svg>
          No credit card required
          <div className="hero-trust-dot" />
          500 free credits every month
          <div className="hero-trust-dot" />
          Cancel anytime
        </div>
      </div>
      <div className="hero-demo">
        <div className="demo-card">
          <div className="demo-header">
            <div className="demo-dots">
              <div className="demo-dot" /><div className="demo-dot" /><div className="demo-dot" />
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--green-600)', flex: 1, textAlign: 'center', fontFamily: 'var(--font-display)' }}>
              AIFlow — AI Chat
            </span>
            <div className="demo-tab">Pro</div>
          </div>
          <div className="demo-body">
            <div className="demo-credits-bar">
              <div className="dcb-left">
                <div className="dcb-icon">
                  <CoinIcon />
                </div>
                <div>
                  <div className="dcb-label">Credits remaining</div>
                  <div className="dcb-sub">Resets 1 Jul</div>
                </div>
              </div>
              <div className="dcb-val">11,843</div>
            </div>
            <div className="demo-messages">
              <div className="msg">
                <div className="msg-avatar msg-avatar-ai" style={{ fontSize: 13 }}>AI</div>
                <div className="msg-bubble msg-bubble-ai">
                  Hello! I'm ready to help. What would you like to work on today?
                </div>
              </div>
              <div className="msg msg-user">
                <div className="msg-avatar msg-avatar-user">You</div>
                <div className="msg-bubble msg-bubble-user">
                  Summarise our Q3 report in 3 bullet points for the board.
                </div>
              </div>
              <div className="msg">
                <div className="msg-avatar msg-avatar-ai" style={{ fontSize: 13 }}>AI</div>
                <div className="msg-bubble msg-bubble-ai">
                  <strong style={{ color: 'var(--green-700)' }}>Q3 Board Summary</strong><br />
                  • Revenue up 22% YoY, led by Enterprise<br />
                  • APAC overtook EMEA for the first time<br />
                  • Churn fell to 3.1% after onboarding changes
                </div>
              </div>
              <div className="msg-cost">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--green-400)" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 8v1m0 6v1" /></svg>
                1 credit used · 11,842 remaining
              </div>
              <div className="msg">
                <div className="msg-avatar msg-avatar-ai" style={{ fontSize: 13 }}>AI</div>
                <div className="msg-bubble msg-bubble-ai" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span className="typing-dot" /><span className="typing-dot" /><span className="typing-dot" />
                </div>
              </div>
            </div>
            <div className="demo-input-row">
              <span className="demo-input-text">Ask anything…</span>
              <div className="demo-send"><SendIcon /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
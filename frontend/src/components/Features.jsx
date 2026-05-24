// frontend/src/components/Features.jsx
import React from "react";
import { FEATURES, LOGOS } from "../utils/constants";

export default function Features({ r }) {
  const logoDup = [...LOGOS, ...LOGOS];

  return (
    <>
      <div className="logos-strip">
        <p className="logos-label">Trusted by 2,400+ teams worldwide</p>
        <div className="logos-track-wrap">
          <div className="logos-track">
            {logoDup.map((n, i) => (
              <div className="logo-chip" key={i}>
                <div className="logo-chip-dot" />
                {n}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section" id="features">
        <div className="section-center">
          <div className="section-badge reveal" ref={r}><div className="section-badge-dot" />What's included</div>
          <h2 className="section-title reveal" ref={r}>Everything you need,<br />nothing you don't</h2>
          <p className="section-sub reveal" ref={r}>
            AIFlow is built for people who want results, not complexity.
            Every feature is designed to be picked up in minutes.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map(({ icon, cls, title, desc }, i) => (
            <div className={`feature-card reveal reveal-delay-${(i % 3) + 1}`} ref={r} key={title}>
              <div className={`feature-icon-wrap ${cls}`}>{icon}</div>
              <div className="feature-title">{title}</div>
              <div className="feature-desc">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-full">
        <div className="section-full-inner">
          <div className="section-center">
            <div className="section-badge reveal" ref={r}><div className="section-badge-dot" />Getting started</div>
            <h2 className="section-title reveal" ref={r}>Up and running<br />in 3 easy steps</h2>
            <p className="section-sub reveal" ref={r}>
              No installation. No passwords. No tutorial needed.
              If you can tap a button, you can use AIFlow.
            </p>
          </div>

          <div className="steps-row">
            {[
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 28, height: 28 }}><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
                title: "Sign in with Google",
                desc: "One click — no form to fill out, no password to create. Your account and 500 free credits are ready instantly."
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 28, height: 28 }}><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>,
                title: "Ask your first question",
                desc: "Type anything — summarise a document, write an email, answer a question. Get a response in seconds."
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 28, height: 28 }}><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
                title: "Grow when you're ready",
                desc: "Buy more credits or invite your team when you outgrow the free plan. Upgrade takes 10 seconds."
              },
            ].map(({ icon, title, desc }, i) => (
              <div className={`step reveal reveal-delay-${i + 1}`} ref={r} key={title}>
                <div className="step-num-wrap">{icon}</div>
                <div className="step-title">{title}</div>
                <div className="step-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
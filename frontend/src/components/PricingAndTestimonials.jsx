// frontend/src/components/PricingAndTestimonials.jsx
import React from "react";
import { PLANS, TESTIMONIALS } from "../utils/constants";
import { CheckIcon, CoinIcon } from "./Icons";

export default function PricingAndTestimonials({ r }) {
  return (
    <>
      <div className="section-full">
        <div className="section-full-inner">
          <div className="section-center">
            <div className="section-badge reveal" ref={r}><div className="section-badge-dot" />Real people, real results</div>
            <h2 className="section-title reveal" ref={r}>Loved by teams<br />who get things done</h2>
            <p className="section-sub reveal" ref={r}>
              From solo freelancers to 50-person teams — see what they're saying.
            </p>
          </div>
          <div className="testi-grid">
            {TESTIMONIALS.map(({ quote, name, role, emoji }, i) => (
              <div className={`testi-card reveal reveal-delay-${i + 1}`} ref={r} key={name}>
                <div className="testi-stars">{"★★★★★".split("").map((s, j) => <span key={j} className="star">{s}</span>)}</div>
                <p className="testi-quote">{quote}</p>
                <div className="testi-author">
                  <div className="testi-avatar">{emoji}</div>
                  <div>
                    <div className="testi-name">{name}</div>
                    <div className="testi-role">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section" id="pricing">
        <div className="section-center">
          <div className="section-badge reveal" ref={r}><div className="section-badge-dot" />Pricing</div>
          <h2 className="section-title reveal" ref={r}>Start free.<br />Scale when you're ready.</h2>
          <p className="section-sub reveal" ref={r}>
            No complicated tiers. No hidden fees. Pick the plan that fits today — change it any time.
          </p>
        </div>
        <div className="pricing-grid reveal" ref={r}>
          {PLANS.map(({ tier, price, period, credits, features, cta, ctaCls, featured }) => (
            <div className={`plan${featured ? " featured" : ""}`} key={tier}>
              {featured && <div className="plan-popular">Most popular</div>}
              <div className="plan-tier">{tier}</div>
              {price !== null
                ? <div className="plan-price"><sup>$</sup>{price}</div>
                : <div className="plan-price" style={{ fontSize: 36, letterSpacing: '-0.02em' }}>Custom</div>
              }
              <div className="plan-period">{period}</div>
              <div className="plan-credits"><CoinIcon />{credits}</div>
              <div className="plan-sep" />
              <ul className="plan-features">
                {features.map(f => <li key={f}><CheckIcon />{f}</li>)}
              </ul>
              <a href="#" className={`plan-cta ${ctaCls}`}>{cta}</a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
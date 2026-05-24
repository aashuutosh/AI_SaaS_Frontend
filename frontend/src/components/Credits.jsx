// frontend/src/components/Credits.jsx
import React from "react";

export default function Credits({ r }) {
  return (
    <section className="section">
      <div className="credit-grid">
        <div className="credit-left">
          <div className="section-badge reveal" ref={r}><div className="section-badge-dot" />How credits work</div>
          <h2 className="credit-title reveal" ref={r}>Simple pricing<br />you can <span style={{ background: 'linear-gradient(135deg,var(--green-500),var(--teal))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>actually understand</span></h2>
          <p className="credit-desc reveal" ref={r}>
            Credits are simple tokens — spend them when you use a tool, earn them back through referrals,
            and check your balance any time from your dashboard.
          </p>
          <div className="credit-items reveal" ref={r}>
            {[
              { bg: "#d1f4e6", col: "#166534", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 17, height: 17 }}><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Monthly free allocation", desc: "500 credits land in your account on the 1st of every month, automatically." },
              { bg: "#cffafe", col: "#155e75", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 17, height: 17 }}><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>, title: "Buy more, any time", desc: "Top up with credit packs from your billing page — no subscription required." },
              { bg: "#fef9c3", col: "#854d0e", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 17, height: 17 }}><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>, title: "Earn by referring friends", desc: "Share your link and earn 100 bonus credits for every friend who joins." },
            ].map(({ bg, col, icon, title, desc }) => (
              <div className="credit-item" key={title}>
                <div className="ci-icon" style={{ background: bg, color: col }}>{icon}</div>
                <div className="ci-body">
                  <div className="ci-title">{title}</div>
                  <div className="ci-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="credit-right reveal" ref={r}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gray-400)', marginBottom: 20 }}>Tool credit costs</p>
          <table className="tool-table">
            <thead>
              <tr><th>Tool</th><th>Cost</th><th style={{ textAlign: 'right' }}>Speed</th></tr>
            </thead>
            <tbody>
              {[
                { emoji: "💬", name: "AI Chat", credits: "1 cr", badge: "FAST", cls: "badge-fast" },
                { emoji: "✍️", name: "Short content", credits: "5 cr", badge: "MID", cls: "badge-mid" },
                { emoji: "🖼️", name: "Image generation", credits: "5 cr", badge: "MID", cls: "badge-mid" },
                { emoji: "📄", name: "Long-form content", credits: "10 cr", badge: "HEAVY", cls: "badge-heavy" },
              ].map(({ emoji, name, credits, badge, cls }) => (
                <tr className="tool-row" key={name}>
                  <td>
                    <div className="td-tool">
                      <div className="td-tool-icon" style={{ background: 'var(--gray-100)' }}>{emoji}</div>
                      <span className="td-tool-name">{name}</span>
                    </div>
                  </td>
                  <td><span className="td-credits">{credits}</span></td>
                  <td><span className={`td-badge ${cls}`}>{badge}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: 20, padding: '14px 16px', background: 'var(--pale-green)', borderRadius: 'var(--r-md)', border: '1px solid var(--border-g)' }}>
            <p style={{ fontSize: 13, color: 'var(--green-700)', fontWeight: 500, lineHeight: 1.6 }}>
              💡 Your balance is shown before every request. You'll never be charged without knowing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
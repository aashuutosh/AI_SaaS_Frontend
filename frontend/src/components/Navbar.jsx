import React, { useState, useEffect } from "react";
import { userAPI } from "../utils/apiClient"; // Imports your new API hub

export default function Navbar({ scrolled }) {
  const [user, setUser] = useState(null);

  // Automatically check if the user is logged in when the Navbar loads
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const profileData = await userAPI.getProfile();
        setUser(profileData);
      } catch (error) {
        // Silently fail if they aren't logged in, they will just see the default buttons
        console.log("User is not logged in.");
      }
    };
    fetchUserData();
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      {/* 1. LOGO - Unchanged */}
      <a className="nav-logo" href="#">
        <div className="nav-logo-mark">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="nav-logo-text">AI<span>Flow</span></span>
      </a>

      {/* 2. LINKS - Unchanged */}
      <ul className="nav-links">
        {[["#features", "Features"], ["#pricing", "Pricing"], ["#faq", "FAQ"]].map(([h, l]) => (
          <li key={h}><a href={h}>{l}</a></li>
        ))}
      </ul>

      {/* 3. ACTIONS - Dynamically updated for your Backend API */}
      <div className="nav-actions">
        {user ? (
          // IF LOGGED IN: Show their credits and name using your friend's CSS styles
          <>
            <span className="btn btn-ghost" style={{ cursor: "default" }}>
              Credits: {user.credits}
            </span>
            <a href="#dashboard" className="btn btn-primary">
              {user.name || "Dashboard"}
            </a>
          </>
        ) : (
          // IF NOT LOGGED IN: Show your friend's exact original buttons
          <>
            <a href="#" className="btn btn-ghost">Sign in</a>
            <a href="#" className="btn btn-primary">
              Start free
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </>
        )}
      </div>
    </nav>
  );
}
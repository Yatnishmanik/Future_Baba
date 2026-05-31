import React from "react";
import Header from "./Header";

export default function About() {
  return (
    <>
      <Header />
      <div className="page-content">
        <h1>About FutureBaba</h1>
        <p>
          Welcome to <strong>FutureBaba</strong> — your AI-powered gateway to
          cosmic self-discovery. We blend ancient astrology with modern data science
          to deliver personalized, insightful predictions for just ₹1.
        </p>
        <h2>Our Mission</h2>
        <p>
          To make profound astrological guidance accessible, affordable, and relevant
          for everyone — whether you're exploring your personality, making a big decision,
          or simply curious about what the stars have to say.
        </p>
        <h2>Privacy First</h2>
        <p>
          Your palm photo is analyzed <strong>entirely in your browser</strong>. It is
          never uploaded, stored, or transmitted to any server. We respect your privacy
          absolutely.
        </p>
        <p style={{ fontStyle: "italic", color: "var(--gold)" }}>
          "Your future, simplified. Your guidance, redefined." 🌌✨
        </p>
        <a href="/" className="back-btn">← Back to Destiny</a>
      </div>
    </>
  );
}

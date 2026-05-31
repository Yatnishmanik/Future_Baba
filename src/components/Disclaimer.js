import React from "react";
import Header from "./Header";

export default function Disclaimer() {
  return (
    <>
      <Header />
      <div className="page-content">
        <h1>🔮 FutureBaba Insight Disclaimer</h1>
        
        <p>
          FutureBaba provides AI-generated astrology, palmistry, personality, and destiny-based 
          insights created using symbolic patterns, behavioral psychology, birth details, and 
          prediction models.
        </p>

        <p style={{ fontStyle: "italic", color: "var(--gold)", margin: "16px 0", fontSize: "15px" }}>
          ✨ The future is not fixed. Your choices, actions, and growth shape your destiny 
          more than any prediction ever can.
        </p>

        <h2>Entertainment & Self-Reflection Only</h2>
        <p>
          These predictions are designed for entertainment, self-reflection, curiosity, and 
          emotional exploration purposes only. We do not claim that every prediction or analysis 
          shown on this platform is 100% scientifically accurate or permanently true.
        </p>

        <h2>Dynamic Nature of Life</h2>
        <p>
          Human emotions, relationships, career paths, financial situations, and life circumstances 
          continuously evolve with:
        </p>
        <ul>
          <li><strong>Time:</strong> Life circumstances shift as you grow and experience new milestones.</li>
          <li><strong>Personal Decisions:</strong> The choices you make everyday directly rewrite your life path.</li>
          <li><strong>Mindset & Actions:</strong> Your thoughts, attitude, and persistent actions are the true builders of your future.</li>
          <li><strong>Environment:</strong> The people, culture, and surroundings you interact with shape your experiences.</li>
        </ul>
        <p>
          Because of this, the results shown may partially, fully, or differently relate to your 
          real-life situation over time.
        </p>

        <h2>No Professional Advice</h2>
        <p>
          FutureBaba insights should not be treated as:
        </p>
        <ul>
          <li>Guaranteed future outcomes</li>
          <li>Legal or Financial advice</li>
          <li>Medical or Health guidance</li>
          <li>Relationship certainty</li>
          <li>Professional or expert consultation</li>
        </ul>
        <p>
          Our AI attempts to generate highly relevant and emotionally personalized experiences 
          based on the information you provide, but real life is dynamic and always changing.
        </p>

        <h2>User Acknowledgment</h2>
        <p>
          By using FutureBaba, you acknowledge and agree that:
        </p>
        <ul>
          <li>Predictions are probabilistic, not absolute or deterministic truths.</li>
          <li>Interpretations may vary from person to person depending on perspective and life stage.</li>
          <li>Results are meant to inspire reflection, curiosity, and positive entertainment.</li>
          <li>Final life decisions should always be made using your own judgment, critical thinking, and responsibility.</li>
        </ul>

        <a href="/" className="back-btn">← Back to Destiny</a>
      </div>
    </>
  );
}

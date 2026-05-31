import React from "react";

const LandingSection = ({ onStartPrediction }) => {
  return (
    <div className="landing-wrap">
      {/* Hero Content */}
      <div className="landing-content">
        {/* Meditating Guru Avatar */}
        <div className="guru-avatar-container">
          <img 
            src={`${process.env.PUBLIC_URL}/baba.png`} 
            alt="Meditating Guru" 
            className="guru-avatar-image"
          />
        </div>

        <div className="landing-tag">✦ AI-Powered Crypto Astrology</div>

        <h1 className="landing-h1">
          Apka Future<br />
          Kesa Hoga 2026?
        </h1>

        <p className="landing-subtitle">
          AI ke saath apni personality, career aur future possibilities ke baare mein jaanein.
For Prediction click below button.
        </p>

        <div className="landing-features">
  <span className="landing-feature-pill">🔮 Rashifal Analysis</span>
  <span className="landing-feature-pill">💍 Shaadi Kab?</span>
  <span className="landing-feature-pill">💼 Sarkari/Private Job Kab?</span>
  <span className="landing-feature-pill">❤️ Life Partner Kaisa Hoga?</span>
  <span className="landing-feature-pill">💰 Paisa Aur Growth</span>
  <span className="landing-feature-pill">🧠 Mindset Analysis</span>
  <span className="landing-feature-pill">👶 Kitne Bacche?</span>
  <span className="landing-feature-pill">👶 Future Opportunity?</span>
  <span className="landing-feature-pill">⚡ Instant Results</span>
</div>

        <button
          id="start-prediction-btn"
          className="btn-cta"
          onClick={onStartPrediction}
        >
          ✨ Future Dekho
          <span className="btn-cta-price">₹5</span>
        </button>

        <p className="landing-trust">
          <span>🔒 Privacy-safe</span> &nbsp;·&nbsp; Hand images never leave your device &nbsp;·&nbsp; Instant delivery
        </p>
      </div>
    </div>
  );
};

export default LandingSection;

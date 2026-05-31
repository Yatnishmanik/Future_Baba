import React, { useState, useEffect } from "react";
import { ZODIAC_WHEEL_SIGNS } from "../utils/zodiac";

const MESSAGES = [
  "Reading the stars...",
  "Mapping your birth chart...",
  "Analyzing palm lines...",
  "Computing planetary alignments...",
  "Decoding your cosmic signature...",
  "Consulting the zodiac...",
  "Almost ready...",
];

const AnalysisLoader = ({ zodiacSign }) => {
  const [msgIdx, setMsgIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Cycle through messages every 1.5s
    const msgTimer = setInterval(() => {
      setMsgIdx((prev) => (prev + 1) % MESSAGES.length);
    }, 1500);

    // Progress bar grows over ~5s
    const progTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        return prev + Math.random() * 8;
      });
    }, 400);

    return () => {
      clearInterval(msgTimer);
      clearInterval(progTimer);
    };
  }, []);

  return (
    <div className="loader-wrap">
      <div className="loader-card">
        {/* Triple rotating ring cosmic loader */}
        <div className="loader-zodiac-wheel" aria-hidden="true">
          <div className="loader-ring-outer" />
          <div className="loader-ring-mid" />
          <div className="loader-ring-inner" />
          <div className="loader-center">
            {zodiacSign?.symbol || "🌌"}
          </div>
        </div>

        {/* Labels */}
        <h2 className="loader-title">✨ Analyzing Your Destiny</h2>
        <p className="loader-message">{MESSAGES[msgIdx]}</p>

        {/* Progress bar */}
        <div className="loader-progress-bar">
          <div
            className="loader-progress-fill"
            style={{ width: `${Math.min(progress, 98)}%` }}
          />
        </div>

        {/* Floating zodiac signs */}
        <div className="loader-signs-row" aria-hidden="true">
          {ZODIAC_WHEEL_SIGNS.map((sign, i) => (
            <span
              key={sign.name}
              className={`loader-sign-item ${
                zodiacSign && sign.name === zodiacSign.name ? "active" : ""
              }`}
              style={{ animationDelay: `${i * 0.25}s` }}
              title={sign.name}
            >
              {sign.symbol}
            </span>
          ))}
        </div>

        <p style={{ marginTop: 24, fontSize: 13, color: "var(--text-dim)" }}>
          🔒 Privacy-safe · Your palm photo is never uploaded
        </p>
      </div>
    </div>
  );
};

export default AnalysisLoader;

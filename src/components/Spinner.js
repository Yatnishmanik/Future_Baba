// Spinner is no longer used directly.
// The AnalysisLoader component handles all cinematic loading UI.
// This file is kept to avoid breaking any potential imports.
import React from "react";

const Spinner = () => (
  <div className="loader-wrap" style={{ minHeight: "50vh" }}>
    <div className="loader-zodiac-wheel" aria-hidden="true" style={{ width: 120, height: 120 }}>
      <div className="loader-ring-outer" />
      <div className="loader-ring-mid" />
      <div className="loader-center">✨</div>
    </div>
  </div>
);

export default Spinner;

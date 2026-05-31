import React from "react";
import Header from "./Header";

export default function Privacy() {
  return (
    <>
      <Header />
      <div className="page-content">
        <h1>Business Policy</h1>
        <p>
          Welcome to FutureBaba.in. This document outlines the terms and policies
          governing our prediction service.
        </p>

        <h2>Scope of Service</h2>
        <ul>
          <li>FutureBaba provides astrological predictions based on your birth date, time, and optional palm analysis.</li>
          <li>Predictions are derived from a combination of AI, numerology, and Vedic astrology data.</li>
        </ul>

        <h2>Service Charges</h2>
        <ul>
          <li>Each prediction is charged at a flat rate of <strong>₹1 per prediction</strong>.</li>
          <li>Payments must be completed before predictions are delivered.</li>
        </ul>

        <h2>Payment Policy</h2>
        <ul>
          <li>Payments are processed via Razorpay through secure, encrypted channels.</li>
          <li>No payment data is stored by FutureBaba.</li>
        </ul>

        <h2>Privacy Policy</h2>
        <ul>
          <li>Your palm photo is processed entirely in your browser and is <strong>never sent to any server</strong>.</li>
          <li>We do not store personally identifiable information beyond what is required for your prediction session.</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          For questions: <a href="mailto:support@futurebaba.in">support@futurebaba.in</a>
          <br />
          Website: <a href="https://www.futurebaba.in">www.futurebaba.in</a>
        </p>

        <a href="/" className="back-btn">← Back to Destiny</a>
      </div>
    </>
  );
}

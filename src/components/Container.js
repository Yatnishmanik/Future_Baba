import React, { useState, useEffect, useCallback } from "react";
import Header from "./Header";
import Footer from "./Footer";
import LandingSection from "./LandingSection";
import PredictionForm from "./PredictionForm";
import AnalysisLoader from "./AnalysisLoader";
import ResultsPage from "./ResultsPage";
import PaymentModal from "./PaymentModal";
import { getZodiacSign } from "../utils/zodiac";

// Steps: 'landing' | 'form' | 'loading' | 'results'
const Container = () => {
  const [step, setStep] = useState(() => {
    return localStorage.getItem("payment_done") === "true" ? "form" : "landing";
  });
  const [formData, setFormData] = useState(null);
  const [apiData, setApiData] = useState(null);
  const [zodiac, setZodiac] = useState(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  // Scroll to top on every step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  // ── Step 1 → 2: Payment then Form ──────────────────
  const handleStartPrediction = useCallback(() => {
    if (localStorage.getItem("payment_done") === "true") {
      setStep("form");
    } else {
      setIsPaymentModalOpen(true);
    }
  }, []);

  // ── Step 2 → 3: Form submitted → Analysis ──────────
  const handleFormSubmit = useCallback(async (data) => {
    localStorage.removeItem("payment_done"); // Clear payment status on submit
    setFormData(data);
    const detectedZodiac = getZodiacSign(data.dob);
    setZodiac(detectedZodiac);
    setStep("loading");

    try {
      const response = await fetch("https://futurebaba.onrender.com/predictions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dob: data.dob }),
      });
      const result = await response.json();

      if (response.ok && result && result[0]) {
        // Wait at least 5s so the loader animation plays in full
        setTimeout(() => {
          setApiData(result[0]);
          setStep("results");
        }, 5000);
      } else {
        // Even if no API data, show results from zodiac client-side data
        setTimeout(() => {
          setApiData(null);
          setStep("results");
        }, 5000);
      }
    } catch (err) {
      console.error("Prediction fetch error:", err);
      // Fallback to client-side zodiac data only
      setTimeout(() => {
        setApiData(null);
        setStep("results");
      }, 5000);
    }
  }, []);

  // ── Reset / Start Again ─────────────────────────────
  const handleRestart = useCallback(() => {
    setStep(localStorage.getItem("payment_done") === "true" ? "form" : "landing");
    setFormData(null);
    setApiData(null);
    setZodiac(null);
  }, []);

  // ── Render ──────────────────────────────────────────
  const showFooter = step === "landing" || step === "results";

  return (
    <>
      <Header />

      {step === "landing" && (
        <LandingSection onStartPrediction={handleStartPrediction} />
      )}

      {step === "form" && (
        <PredictionForm onSubmit={handleFormSubmit} />
      )}

      {step === "loading" && (
        <AnalysisLoader zodiacSign={zodiac} />
      )}

      {step === "results" && (
        <ResultsPage
          zodiac={zodiac}
          apiData={apiData}
          formData={formData}
          onRestart={handleRestart}
        />
      )}

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        onSuccess={() => {
          setIsPaymentModalOpen(false);
          setStep("form");
        }}
      />

      {showFooter && <Footer />}
    </>
  );
};

export default Container;

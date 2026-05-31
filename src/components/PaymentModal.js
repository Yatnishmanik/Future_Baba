import React, { useState } from "react";

const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const PaymentModal = ({ isOpen, onClose, onSuccess }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handlePayClick = async () => {
    setIsProcessing(true);
    const res = await loadRazorpay();
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      setIsProcessing(false);
      return;
    }

    const options = {
      key: "rzp_live_SvSE8Pl2T4a1zP", // Provided user API key
      amount: "100", // ₹1 in paise
      currency: "INR",
      name: "FutureBaba",
      description: "Cosmic Destiny Prediction",
      handler: function (response) {
        // Payment success callback!
        localStorage.setItem("payment_done", "true");
        setIsProcessing(false);
        onSuccess();
      },
      prefill: {
        name: "Cosmic User",
      },
      theme: {
        color: "#8B5CF6",
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
        }
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="payment-modal-overlay">
      <div className="payment-modal-card">
        <button className="payment-modal-close" onClick={onClose}>&times;</button>
        
        <div className="payment-modal-header">
          <div className="payment-modal-icon">🔮</div>
          <h2 className="payment-modal-title">Complete Secure Payment</h2>
          <p className="payment-modal-subtitle">Real prediction requires a symbolic offering of ₹1</p>
        </div>

        <div className="payment-modal-body">
          <div className="payment-steps-box" style={{ textAlign: "center", padding: "16px" }}>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "16px", lineHeight: "1.6" }}>
              Click below to pay via <strong>PhonePe / GPay / Paytm</strong> directly. <br/><br/>
              Once the ₹1 transaction is successful, your form will open automatically!
            </p>
          </div>

          <div className="payment-modal-actions">
            <button 
              className="btn-modal-pay glow" 
              onClick={handlePayClick}
              disabled={isProcessing}
              style={{ width: "100%" }}
            >
              {isProcessing ? "Opening Secure Payment..." : "💳 Pay ₹1 with UPI / Cards"}
            </button>
          </div>
        </div>

        <div className="payment-modal-footer">
          🔒 Secured by Razorpay &middot; 100% encrypted &middot; support@futurebaba.in
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;

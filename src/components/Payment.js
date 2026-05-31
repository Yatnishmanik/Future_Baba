// Payment.js — PRODUCTION LEVEL
// ─────────────────────────────────────────────────────────
// Automatically detects test keys vs live production keys.
// For live keys, securely verifies payment signatures on the backend.
// ─────────────────────────────────────────────────────────

export const handlePayment = async (onSuccess) => {
  try {
    // Step 1: Create a Razorpay order on the backend
    const response = await fetch("https://futurebaba.onrender.com/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 1 }), // ₹1
    });

    if (!response.ok) throw new Error("Failed to create order");

    const order = await response.json();
    if (!order.id) throw new Error("Order ID not received");

    if (!window.Razorpay) throw new Error("Razorpay SDK not loaded");

    const keyId = process.env.REACT_APP_RAZORPAY_KEY_ID;
    const isTestKey = (keyId || "").startsWith("rzp_test_");

    const options = {
      key: keyId,
      amount: order.amount,
      currency: "INR",
      name: "FutureBaba",
      description: "Cosmic Prediction — ₹1",
      order_id: order.id,
      handler: async function (response) {
        console.log("✅ Razorpay payment received:", response.razorpay_payment_id);

        if (isTestKey) {
          console.log("⚡ Sandbox/Test Mode: Skipping signature verification.");
          if (onSuccess) onSuccess();
          return;
        }

        // Live Mode: Perform secure cryptographic verification on the backend
        try {
          const verifyResponse = await fetch("https://futurebaba.onrender.com/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          if (!verifyResponse.ok) {
            throw new Error("Payment verification request failed.");
          }

          const verifyResult = await verifyResponse.json();
          if (verifyResult.success) {
            console.log("✅ Live payment signature verified successfully!");
            if (onSuccess) onSuccess();
          } else {
            throw new Error(verifyResult.message || "Invalid signature.");
          }
        } catch (err) {
          console.error("❌ Live payment verification failed:", err);
          alert("We were unable to securely verify your payment. If money was deducted, please reach out to support@futurebaba.in.");
        }
      },
      prefill: { name: "", email: "", contact: "" },
      theme: { color: "#2B4C7E" }, // Matches var(--violet) deep blue brand color
      modal: {
        ondismiss: () => {
          console.log("Payment modal closed by user.");
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", (resp) => {
      alert(`Payment failed: ${resp.error.description}`);
    });
    rzp.open();
  } catch (error) {
    console.error("Payment init error:", error);
    alert("Could not start payment. Please try again.");
  }
};

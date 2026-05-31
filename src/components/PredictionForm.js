import React, { useState, useRef, useEffect } from "react";
import { getAge } from "../utils/zodiac";

const PredictionForm = ({ onSubmit }) => {
  const [fields, setFields] = useState({
    name: "",
    dob: "",
    time: "",
  });
  const [handImagePreview, setHandImagePreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  
  // Camera-specific states and refs
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraStream, setCameraStream] = useState(null);
  
  const fileRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Clean up camera stream on unmount
  useEffect(() => {
    return () => {
      if (cameraStream) {
        cameraStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [cameraStream]);

  // ─── Validators ───
  const validate = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Full name is required.";
        if (!/^[a-zA-Z\s'.-]{2,}$/.test(value.trim()))
          return "Please enter a valid name (letters only, min 2 characters).";
        return "";
      case "dob":
        if (!value) return "Date of birth is required.";
        const age = getAge(value);
        if (age < 1) return "You must be at least 1 year old.";
        if (age > 95) return "Age must be 95 years or less.";
        return "";
      case "time":
        if (!value) return "Time of birth is required.";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  // ─── Hand Image — FILE UPLOAD ───
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setErrors((prev) => ({ ...prev, image: "Please upload a valid image file." }));
      return;
    }
    setErrors((prev) => ({ ...prev, image: "" }));
    const reader = new FileReader();
    reader.onloadend = () => {
      // Image stored ONLY as data URL in React state
      setHandImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // ─── Hand Image — CAMERA CAPTURE ───
  const startCamera = async () => {
    try {
      setIsCameraActive(true);
      setErrors((prev) => ({ ...prev, image: "" }));

      // Access device camera. environment facingMode prefers the rear camera on mobile phones
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment", width: { ideal: 640 }, height: { ideal: 480 } },
        audio: false
      });

      setCameraStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Camera access error:", err);
      setIsCameraActive(false);
      setErrors((prev) => ({ 
        ...prev, 
        image: "Camera permission denied or not found. Please upload a file instead." 
      }));
    }
  };

  const stopCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach((track) => track.stop());
      setCameraStream(null);
    }
    setIsCameraActive(false);
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      // Adapt canvas size to native video stream size
      canvas.width = video.videoWidth || 640;
      canvas.height = video.videoHeight || 480;

      // Draw active video frame on hidden canvas
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert captured frame to Base64 image
      const dataUrl = canvas.toDataURL("image/jpeg");
      setHandImagePreview(dataUrl);

      // Release the camera
      stopCamera();
    }
  };

  // ─── Submit ───
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Stop camera if still running
    stopCamera();

    // Touch all fields
    const allTouched = { name: true, dob: true, time: true };
    setTouched(allTouched);

    const allErrors = {
      name: validate("name", fields.name),
      dob: validate("dob", fields.dob),
      time: validate("time", fields.time),
      image: !handImagePreview ? "Please provide a photo of your palm." : "",
    };
    setErrors(allErrors);

    const hasErrors = Object.values(allErrors).some(Boolean);
    if (hasErrors) return;

    setSubmitting(true);
    // Pass form data (image stays local only)
    onSubmit({
      name: fields.name.trim(),
      dob: fields.dob,
      time: fields.time,
      handImageLocal: handImagePreview,
    });
  };

  const getInputClass = (name) => {
    if (!touched[name]) return "form-input";
    if (errors[name]) return "form-input error";
    return "form-input success";
  };

  return (
    <div className="form-overlay">
      <div className="form-card">
        <div className="form-header">
          <p className="text-muted" style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
            ✦ Step 2 of 3
          </p>
          <h2 className="form-title">Your Birth Details</h2>
          <p className="form-subtitle">
            
          </p>
          <div className="form-step-indicator">
            <div className="form-step-dot active" />
            <div className="form-step-dot active" />
            <div className="form-step-dot" />
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* Full Name */}
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Full Name <span>*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={getInputClass("name")}
              placeholder="e.g. Arjun Sharma"
              value={fields.name}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="name"
            />
            {touched.name && errors.name && (
              <div className="form-error">⚠ {errors.name}</div>
            )}
            {touched.name && !errors.name && fields.name && (
              <div className="form-hint" style={{ color: "var(--green)" }}>✓ Looks good!</div>
            )}
          </div>

          {/* Date of Birth */}
          <div className="form-group">
            <label className="form-label" htmlFor="dob">
              Date of Birth <span>*</span>
            </label>
            <input
              id="dob"
              name="dob"
              type="date"
              className={getInputClass("dob")}
              value={fields.dob}
              onChange={handleChange}
              onBlur={handleBlur}
              max={new Date(new Date().setFullYear(new Date().getFullYear() - 1))
                .toISOString()
                .split("T")[0]}
              min={new Date(new Date().setFullYear(new Date().getFullYear() - 95))
                .toISOString()
                .split("T")[0]}
            />
            {touched.dob && errors.dob && (
              <div className="form-error">⚠ {errors.dob}</div>
            )}
            {touched.dob && !errors.dob && fields.dob && (
              <div className="form-hint" style={{ color: "var(--text-dim)" }}>
                Age: {getAge(fields.dob)} years
              </div>
            )}
          </div>

          {/* Time of Birth */}
          <div className="form-group">
            <label className="form-label" htmlFor="time">
              Time of Birth <span>*</span>
            </label>
            <input
              id="time"
              name="time"
              type="time"
              className={getInputClass("time")}
              value={fields.time}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.time && errors.time && (
              <div className="form-error">⚠ {errors.time}</div>
            )}
            <div className="form-hint">If unsure, enter an approximate time.</div>
          </div>

          {/* Hand Image Capture & Upload — LOCAL ONLY */}
          <div className="form-group">
            <label className="form-label">
              Palm Photo <span>*</span>
            </label>
            
            {isCameraActive ? (
              /* Live Camera Interface */
              <div className="camera-container">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="camera-video"
                />
                <div className="camera-overlay">
                  <div className="camera-hand-guide">🤚</div>
                </div>
                <div className="camera-controls">
                  <button type="button" className="btn-camera-capture" onClick={capturePhoto}>
                    📸 Capture Now
                  </button>
                  <button type="button" className="btn-camera-cancel" onClick={stopCamera}>
                    ✕ Cancel
                  </button>
                </div>
                {/* Hidden canvas for drawing frame */}
                <canvas ref={canvasRef} style={{ display: "none" }} />
              </div>
            ) : (
              /* Static Upload / Preview Card */
              <>
                <div
                  className={`hand-upload-area ${handImagePreview ? "has-image" : ""}`}
                  onClick={() => !handImagePreview && fileRef.current && fileRef.current.click()}
                  style={{ cursor: handImagePreview ? "default" : "pointer" }}
                >
                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    className="hand-upload-input"
                    onChange={handleImageChange}
                    id="hand-image-input"
                    style={{ position: 'absolute', opacity: 0, inset: 0, cursor: handImagePreview ? 'default' : 'pointer', zIndex: handImagePreview ? -1 : 2 }}
                  />
                  {!handImagePreview ? (
                    <>
                      <div className="hand-upload-icon">🤚</div>
                      <div className="hand-upload-text">Upload or Capture Palm Photo</div>
                      <div className="hand-upload-subtext">Choose an option below to align your destiny lines</div>
                    </>
                  ) : (
                    <>
                      <img src={handImagePreview} alt="Palm preview" className="hand-upload-preview" />
                      <div className="hand-upload-subtext" style={{ marginTop: 8 }}>Your palm photo is loaded locally!</div>
                    </>
                  )}
                </div>

                {/* Hand Action Choices */}
                <div className="hand-action-choice">
                  <button
                    type="button"
                    className="btn-action-trigger"
                    onClick={startCamera}
                  >
                    📸 {handImagePreview ? "Re-take via Camera" : "Take Photo (Camera)"}
                  </button>
                </div>
              </>
            )}

            {errors.image && (
              <div className="form-error">⚠ {errors.image}</div>
            )}
            
            <div style={{ textAlign: "center", marginTop: 10 }}>
              <span className="privacy-badge">
                🔒 Your image stays private — it is processed locally in your browser and is never sent to any server.
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="btn-submit"
            disabled={submitting}
            id="submit-prediction-btn"
          >
            {submitting ? "Analysing..." : "✨ REVEAL MY DESTINY"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PredictionForm;

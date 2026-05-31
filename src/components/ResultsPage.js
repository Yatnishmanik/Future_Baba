import React, { useState, useEffect, useRef, useCallback } from "react";
import { getAuraScore, getLifePathNumber } from "../utils/zodiac";
import { 
  getLoveMarriagePercent,
  getRichMindsetScore,
  getMoneyMagnetPercent,
  getGovJobEnergy,
  getSoulmateTiming,
  getLifespan,
  getChildrenCount,
  DESTINY_DATA
} from "../utils/destinyModules";

// ─── SVG Radar Chart (Hexagonal, 6 axes) ───
const RADAR_LABELS = [
  "Confidence", "Creativity", "Logic", "Empathy", "Ambition", "Social"
];

const RadarChart = ({ values, color }) => {
  const size = 200;
  const cx = size / 2, cy = size / 2;
  const r = 80;
  const n = 6;
  const angle = (2 * Math.PI) / n;

  const getPoint = (i, val) => {
    const a = i * angle - Math.PI / 2;
    const d = (val / 100) * r;
    return { x: cx + d * Math.cos(a), y: cy + d * Math.sin(a) };
  };

  const getLabelPoint = (i) => {
    const a = i * angle - Math.PI / 2;
    const d = r + 20;
    return { x: cx + d * Math.cos(a), y: cy + d * Math.sin(a) };
  };

  const gridPolygons = [0.25, 0.5, 0.75, 1].map((scale) => {
    return Array.from({ length: n }, (_, i) => {
      const a = i * angle - Math.PI / 2;
      const d = r * scale;
      return `${cx + d * Math.cos(a)},${cy + d * Math.sin(a)}`;
    }).join(" ");
  });

  const dataPoints = Array.from({ length: n }, (_, i) => {
    const key = RADAR_LABELS[i].toLowerCase();
    const val = values?.[key] ?? 70;
    const pt = getPoint(i, val);
    return `${pt.x},${pt.y}`;
  }).join(" ");

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100%" height="100%">
      {Array.from({ length: n }, (_, i) => {
        const a = i * angle - Math.PI / 2;
        return (
          <line
            key={i}
            x1={cx} y1={cy}
            x2={cx + r * Math.cos(a)}
            y2={cy + r * Math.sin(a)}
            stroke="rgba(255,255,255,0.08)" strokeWidth="1"
          />
        );
      })}
      {gridPolygons.map((pts, i) => (
        <polygon
          key={i} points={pts}
          fill="none"
          stroke="rgba(255,255,255,0.05)" strokeWidth="1"
        />
      ))}
      <polygon
        points={dataPoints}
        fill={`${color}25`}
        stroke={color}
        strokeWidth="2"
      />
      {Array.from({ length: n }, (_, i) => {
        const key = RADAR_LABELS[i].toLowerCase();
        const val = values?.[key] ?? 70;
        const pt = getPoint(i, val);
        return (
          <circle
            key={i}
            cx={pt.x} cy={pt.y}
            r="4" fill={color}
            stroke="#FFFFFF" strokeWidth="2"
          />
        );
      })}
      {Array.from({ length: n }, (_, i) => {
        const lp = getLabelPoint(i);
        return (
          <text
            key={i}
            x={lp.x} y={lp.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="10"
            fill="rgba(255,255,255,0.8)"
            fontFamily="Inter, sans-serif"
          >
            {RADAR_LABELS[i]}
          </text>
        );
      })}
    </svg>
  );
};

// ─── Animated Semicircular Meter ───
const AuraMeter = ({ score, color, label }) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  useEffect(() => {
    let frame;
    const duration = 1500;
    const start = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedScore(Math.round(eased * score));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [score]);

  const radius = 80;
  const circumference = Math.PI * radius;
  const dashOffset = circumference - (animatedScore / 100) * circumference;

  return (
    <div className="aura-meter-wrap">
      <svg viewBox="0 0 200 120" className="aura-meter-svg">
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="12" strokeLinecap="round"
          className="aura-meter-track"
        />
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none" stroke={color} strokeWidth="12" strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          style={{ transition: 'stroke-dashoffset 0.1s ease' }}
        />
      </svg>
      <div className="aura-meter-score" style={{ color }}>{animatedScore}</div>
      <div className="aura-meter-label">{label}</div>
    </div>
  );
};

// ─── Scroll Animation Hook ───
const useScrollReveal = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, isVisible];
};

// ─── Section Wrapper (scroll-triggered animation) ───
const Section = ({ children, className = "", delay = 0 }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`results-section ${className} ${isVisible ? 'section-visible' : 'section-hidden'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// ─── Section Header ───
const SectionHead = ({ title, emoji }) => (
  <div className="section-head">
    <span className="section-head-emoji">{emoji}</span>
    <span className="section-head-title">{title}</span>
    <div className="section-head-line" />
  </div>
);

const ResultsPage = ({ zodiac: zodiacInput, apiData, formData, onRestart }) => {
  const zodiac = zodiacInput;
  const color = zodiac?.color || "#F97316";
  const radar = zodiac?.radar || {};
  const name = formData?.name || "User";
  const dob = formData?.dob || "2000-01-01";

  // Destiny Modules computations
  const loveMarriage = getLoveMarriagePercent(dob, name);
  const richMindset = getRichMindsetScore(dob, name);
  const moneyMagnet = getMoneyMagnetPercent(dob, name);
  const jobEnergy = getGovJobEnergy(dob);
  const soulmateTiming = getSoulmateTiming(dob);
  const lifespan = getLifespan(dob);
  const childrenCount = getChildrenCount(name, dob);
  const auraScore = formData ? getAuraScore(formData.dob, formData.name) : 72;
  const lifePathNum = formData ? getLifePathNumber(formData.dob) : 5;

  const signDestiny = DESTINY_DATA[zodiac?.name] || DESTINY_DATA.Aries;

  const handleShare = useCallback(() => {
    const text = `🔮 My FutureBaba AI Reading:\n\n${zodiac?.symbol} ${zodiac?.name}\n💫 Aura Score: ${auraScore}/100\n🔢 Life Path: ${lifePathNum}\n\nDiscover your destiny → FutureBaba.in ✨`;
    if (navigator.share) {
      navigator.share({ title: "My FutureBaba Destiny", text });
    } else {
      navigator.clipboard.writeText(text);
      alert("Copied to clipboard! Share your destiny 🌟");
    }
  }, [zodiac, auraScore, lifePathNum]);

  return (
    <div className="results-wrap theme-dark">
      <div className="results-inner">
        
        {/* 1. HOROSCOPE / ZODIAC OVERVIEW */}
        <Section className="hero-section" delay={0}>
          <div className="results-name-bar">
            <div className="results-name-label">Your Cosmic Destiny Profile</div>
            <div className="results-name-value">{name}</div>
          </div>
          <div className="zodiac-hero-card" style={{ '--sign-color': color, '--sign-gradient': zodiac?.bgGradient }}>
            <div className="zodiac-hero-bg" />
            <div className="zodiac-hero-content">
              <div className="zodiac-hero-name">{zodiac?.name}</div>
              <div className="zodiac-hero-dates">{zodiac?.dates}</div>
              <div className="zodiac-meta-pills">
                <span className="zodiac-meta-pill">🔥 {zodiac?.element}</span>
                <span className="zodiac-meta-pill">🪐 {zodiac?.planet}</span>
                <span className="zodiac-meta-pill">🔢 Life Path {lifePathNum}</span>
              </div>
              <div className="zodiac-hero-tagline">"{zodiac?.tagline}"</div>
            </div>
          </div>
        </Section>

        {/* 2. MARRIAGE TIMING */}
        <Section delay={100}>
          <SectionHead title="Marriage & Love Timing" emoji="💍" />
          <div className="chart-section">
             <div className="info-card" style={{ borderLeftColor: color }}>
                <div className="info-card-title">When Will You Get Married?</div>
                <div className="info-card-text">
                  Your strongest cosmic window for marriage is between <strong>{soulmateTiming.en}</strong>.
                </div>
             </div>
             <div className="probability-grid" style={{ marginTop: 24 }}>
                <div className="probability-card">
                   <div className="prob-label">Love Marriage</div>
                   <div className="prob-value" style={{ color: color }}>{loveMarriage.love}%</div>
                </div>
                <div className="probability-card">
                   <div className="prob-label">Arranged Marriage</div>
                   <div className="prob-value" style={{ color: "rgba(255,255,255,0.5)" }}>{loveMarriage.arranged}%</div>
                </div>
             </div>
          </div>
        </Section>

        {/* 3. CAREER PATH */}
        <Section delay={200}>
          <SectionHead title="Career & Job Destiny" emoji="💼" />
          <div className="chart-section">
             <div className="info-card" style={{ borderLeftColor: color }}>
                <div className="info-card-title">Government vs Private/Business</div>
                <div className="info-card-text">
                  You have a <strong>{jobEnergy.gov}%</strong> chance of settling in a Government or high-authority traditional job, and a <strong>{jobEnergy.startup}%</strong> chance of thriving in the Private Sector or Business/Startup space.
                </div>
             </div>
             <div className="info-card" style={{ borderLeftColor: "#38BDF8", marginTop: 16 }}>
                <div className="info-card-title">Ideal Career Fields</div>
                <div className="info-card-text">{signDestiny.career.respectFieldEn}</div>
             </div>
             <div className="info-card" style={{ borderLeftColor: "#FFD700", marginTop: 16 }}>
                <div className="info-card-title">Your Unique Talent</div>
                <div className="info-card-text">{signDestiny.career.talentEn}</div>
             </div>
          </div>
        </Section>

        {/* 4. LIFESPAN PREDICTION */}
        <Section delay={300}>
          <SectionHead title="Lifespan & Health" emoji="⏳" />
          <div className="chart-section">
             <div className="info-card" style={{ borderLeftColor: "#10B981" }}>
                <div className="info-card-title">Predicted Lifespan</div>
                <div className="info-card-text">
                  Based on your planetary alignments, you are projected to live a long life up to <strong>{lifespan} years</strong> of age. Maintain your health and spiritual balance to maximize your vitality!
                </div>
             </div>
          </div>
        </Section>

        {/* 5. LIFE PARTNER CHARACTERISTICS */}
        <Section delay={400}>
          <SectionHead title="Life Partner Characteristics" emoji="❤️" />
          <div className="chart-section">
             <div className="info-card" style={{ borderLeftColor: "#EF4444" }}>
                <div className="info-card-title">Who Are You Attracted To?</div>
                <div className="info-card-text">{signDestiny.love.partnerAttractedEn}</div>
             </div>
             <div className="info-card" style={{ borderLeftColor: color, marginTop: 16 }}>
                <div className="info-card-title">Your Partner's Vibe</div>
                <div className="info-card-text">{signDestiny.love.partnerVibeEn}</div>
             </div>
          </div>
        </Section>

        {/* 6. WEALTH & FINANCIAL FUTURE */}
        <Section delay={500}>
          <SectionHead title="Wealth & Financial Future" emoji="💰" />
          <div className="chart-section">
             <div className="info-card" style={{ borderLeftColor: "#F59E0B" }}>
                <div className="info-card-title">Will Money Stay With You?</div>
                <div className="info-card-text">{signDestiny.money.paisaTikegaEn}</div>
             </div>
             <div className="probability-grid" style={{ marginTop: 24 }}>
                <div className="probability-card">
                   <div className="prob-label">Money Magnet Score</div>
                   <div className="prob-value" style={{ color: "#F59E0B" }}>{moneyMagnet}%</div>
                </div>
                <div className="probability-card">
                   <div className="prob-label">Rich Mindset Score</div>
                   <div className="prob-value" style={{ color: "#10B981" }}>{richMindset}%</div>
                </div>
             </div>
          </div>
        </Section>

        {/* 7. MINDSET & PSYCHOLOGICAL TRAITS */}
        <Section delay={600}>
          <SectionHead title="Mindset & Psychology" emoji="🧠" />
          <div className="chart-section">
             <div className="chart-layout">
                <div className="chart-svg-wrap">
                   <RadarChart values={radar} color={color} />
                </div>
                <div className="chart-stats">
                   <AuraMeter score={auraScore} color={color} label="Aura Power" />
                </div>
             </div>
             <div className="info-card" style={{ borderLeftColor: "#8B5CF6", marginTop: 24 }}>
                <div className="info-card-title">Your Dark Side</div>
                <div className="info-card-text">{signDestiny.darkPsych.darkSideEn}</div>
             </div>
          </div>
        </Section>

        {/* 8. NUMBER OF CHILDREN */}
        <Section delay={700}>
          <SectionHead title="Family & Children" emoji="👶" />
          <div className="chart-section">
             <div className="info-card" style={{ borderLeftColor: "#EC4899" }}>
                <div className="info-card-title">Predicted Number of Children</div>
                <div className="info-card-text">
                  Your cosmic chart suggests you will likely have <strong>{childrenCount}</strong>.
                </div>
             </div>
          </div>
        </Section>

        {/* ── FOOTER ACTIONS ── */}
        <Section delay={800} className="text-center" style={{ marginTop: 40, marginBottom: 40 }}>
          <button className="btn-submit" onClick={handleShare} style={{ marginBottom: 16 }}>
             📤 SHARE MY DESTINY
          </button>
          <button className="btn-restart" onClick={onRestart}>
             ↺ Check Another Destiny
          </button>
        </Section>

      </div>
    </div>
  );
};

export default ResultsPage;

import React from 'react';

const MARQUEE_ITEMS = [
  'DEVCATION DELHI 2026', '✦', 'PRIZE POOL ₹3 LAKH+', '✦',
  'SUBMIT BY 4TH APRIL', '✦', 'POWERED BY TIGERGRAPH', '✦',
  'IIT DELHI', '✦', 'IGDTUW × IITD', '✦',
  'HACK & SOLVE', '✦', 'DESIGN & SOLVE', '✦',
  // duplicate for seamless loop
  'DEVCATION DELHI 2026', '✦', 'PRIZE POOL ₹3 LAKH+', '✦',
  'SUBMIT BY 4TH APRIL', '✦', 'POWERED BY TIGERGRAPH', '✦',
  'IIT DELHI', '✦', 'IGDTUW × IITD', '✦',
  'HACK & SOLVE', '✦', 'DESIGN & SOLVE', '✦',
];

const Hero: React.FC = () => {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero" id="hero">
        <div className="hero-glow" aria-hidden="true" />

        <div className="hero-badge">
          <div className="hero-badge-dot" />
          GDG on Campus · IGDTUW × IIT Delhi
        </div>

        <h1 className="hero-title">
          DEVCATION
          <span className="hero-title-delhi">DELHI 2026</span>
        </h1>

        <p className="hero-tagline">
          Where <em>Speed</em>, <em>Skill</em>, and <em>Code</em> Converge.
        </p>

        <div className="hero-meta">
          <div className="hero-pill">
            <span>📅</span>
            <span>April 12–13, 2026</span>
          </div>
          <div className="hero-pill">
            <span>📍</span>
            <span><strong>IIT Delhi</strong>, New Delhi</span>
          </div>
          <div className="hero-pill">
            <span>⏱️</span>
            <span>24 Hour Hackathon</span>
          </div>
          <div className="hero-pill">
            <span>👥</span>
            <span>Teams of 2–4</span>
          </div>
        </div>

        <div className="hero-actions">
          <a
            href="https://unstop.com/hackathons/devcation-hack-n-solve-iit-delhi-1659241"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Register on Unstop 🦌
          </a>
          <a href="#about" className="btn-secondary">Learn More</a>
        </div>

        {/* Delhi skyline silhouette */}
        <svg
          className="hero-skyline"
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMax meet"
          aria-hidden="true"
        >
          {/* India Gate */}
          <rect x="680" y="80" width="80" height="120" fill="rgba(147,51,234,0.5)" />
          <polygon points="680,80 720,30 760,80" fill="rgba(147,51,234,0.6)" />
          <rect x="700" y="60" width="40" height="20" fill="rgba(147,51,234,0.5)" />
          <rect x="710" y="45" width="20" height="15" fill="rgba(147,51,234,0.5)" />
          {/* Qutub Minar */}
          <rect x="200" y="50" width="30" height="150" fill="rgba(107,33,232,0.5)" />
          <rect x="210" y="40" width="10" height="20" fill="rgba(107,33,232,0.6)" />
          <polygon points="200,50 215,10 230,50" fill="rgba(107,33,232,0.6)" />
          {/* Red Fort */}
          <rect x="1050" y="60" width="200" height="140" fill="rgba(107,33,232,0.35)" />
          <rect x="1040" y="50" width="30" height="100" fill="rgba(107,33,232,0.5)" />
          <rect x="1220" y="50" width="30" height="100" fill="rgba(107,33,232,0.5)" />
          <rect x="1070" y="40" width="20" height="20" fill="rgba(147,51,234,0.5)" />
          <rect x="1110" y="35" width="20" height="25" fill="rgba(147,51,234,0.6)" />
          <rect x="1150" y="35" width="20" height="25" fill="rgba(147,51,234,0.6)" />
          <rect x="1190" y="40" width="20" height="20" fill="rgba(147,51,234,0.5)" />
          {/* Lotus Temple */}
          <ellipse cx="400" cy="130" rx="60" ry="70" fill="rgba(107,33,232,0.25)" />
          <ellipse cx="430" cy="140" rx="50" ry="60" fill="rgba(107,33,232,0.2)" />
          <ellipse cx="370" cy="140" rx="50" ry="60" fill="rgba(107,33,232,0.2)" />
          <rect x="380" y="130" width="40" height="70" fill="rgba(107,33,232,0.3)" />
          {/* BG Buildings left */}
          <rect x="0" y="110" width="180" height="90" fill="rgba(70,20,120,0.35)" />
          <rect x="20" y="90" width="30" height="110" fill="rgba(70,20,120,0.45)" />
          <rect x="60" y="100" width="40" height="100" fill="rgba(70,20,120,0.4)" />
          <rect x="110" y="80" width="25" height="120" fill="rgba(70,20,120,0.5)" />
          {/* BG Buildings mid */}
          <rect x="840" y="100" width="180" height="100" fill="rgba(70,20,120,0.3)" />
          <rect x="860" y="80" width="40" height="120" fill="rgba(70,20,120,0.4)" />
          <rect x="920" y="90" width="30" height="110" fill="rgba(70,20,120,0.45)" />
          <rect x="970" y="70" width="25" height="130" fill="rgba(70,20,120,0.5)" />
          {/* BG Buildings right */}
          <rect x="1280" y="90" width="160" height="110" fill="rgba(70,20,120,0.35)" />
          <rect x="1300" y="70" width="30" height="130" fill="rgba(70,20,120,0.4)" />
          <rect x="1350" y="80" width="40" height="120" fill="rgba(70,20,120,0.45)" />
          <rect x="1410" y="60" width="30" height="140" fill="rgba(70,20,120,0.5)" />
          {/* Ground line */}
          <rect x="0" y="195" width="1440" height="5" fill="rgba(107,33,232,0.3)" />
        </svg>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className={item === '✦' ? 'dot' : ''}>{item}</span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
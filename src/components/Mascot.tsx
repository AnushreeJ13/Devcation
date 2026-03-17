import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Mascot: React.FC = () => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  React.useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const svgVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  const antlerAnimation = {
    rotate: [0, 2, -2, 0],
    transition: { repeat: Infinity, duration: 4 }
  };

  return (
    <motion.div
      ref={ref}
      className="mascot"
      variants={svgVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="mascot-visual">
        <div className="mascot-glow" aria-hidden="true" />
        <svg
          width="320"
          height="390"
          viewBox="0 0 340 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Dev the Deer — Devcation mascot"
          role="img"
        >
          {/* Body (static) */}
          <polygon points="130,280 210,280 240,350 100,350" fill="#c2440a" opacity="0.9" />
          <polygon points="130,280 170,220 210,280" fill="#e85d1a" opacity="0.95" />
          <polygon points="110,220 170,180 230,220 210,280 130,280" fill="#f59e0b" opacity="0.85" />
          <polygon points="150,180 170,150 190,180 170,195" fill="#e85d1a" opacity="0.9" />
          <polygon points="145,150 170,115 195,150 185,175 155,175" fill="#f59e0b" opacity="0.95" />
          <polygon points="155,165 170,175 185,165 175,185 165,185" fill="#c2440a" opacity="0.9" />

          {/* Eyes with blink animation */}
          <circle cx="160" cy="145" r="5" fill="#1e0a30" opacity="0.9" />
          <motion.circle
            cx="161"
            cy="144"
            r="1.5"
            fill="white"
            opacity="0.8"
            animate={{ scaleY: [1, 0.1, 1] }}
            transition={{ repeat: Infinity, repeatDelay: 5, duration: 0.2 }}
          />

          {/* Left antler (animated) */}
          <motion.g animate={antlerAnimation}>
            <line x1="155" y1="120" x2="120" y2="70" stroke="#f59e0b" strokeWidth="4" opacity="0.9" />
            <line x1="120" y1="70" x2="90" y2="45" stroke="#f59e0b" strokeWidth="3" opacity="0.85" />
            <line x1="120" y1="70" x2="100" y2="55" stroke="#f59e0b" strokeWidth="3" opacity="0.8" />
            <line x1="120" y1="70" x2="115" y2="45" stroke="#fcd34d" strokeWidth="2.5" opacity="0.75" />
            <line x1="90" y1="45" x2="80" y2="25" stroke="#fcd34d" strokeWidth="2" opacity="0.7" />
            <line x1="90" y1="45" x2="68" y2="38" stroke="#fcd34d" strokeWidth="2" opacity="0.7" />
          </motion.g>

          {/* Right antler (animated) */}
          <motion.g animate={antlerAnimation} transition={{ delay: 0.3 }}>
            <line x1="185" y1="120" x2="220" y2="70" stroke="#f59e0b" strokeWidth="4" opacity="0.9" />
            <line x1="220" y1="70" x2="250" y2="45" stroke="#f59e0b" strokeWidth="3" opacity="0.85" />
            <line x1="220" y1="70" x2="240" y2="55" stroke="#f59e0b" strokeWidth="3" opacity="0.8" />
            <line x1="220" y1="70" x2="225" y2="45" stroke="#fcd34d" strokeWidth="2.5" opacity="0.75" />
            <line x1="250" y1="45" x2="260" y2="25" stroke="#fcd34d" strokeWidth="2" opacity="0.7" />
            <line x1="250" y1="45" x2="272" y2="38" stroke="#fcd34d" strokeWidth="2" opacity="0.7" />
          </motion.g>

          {/* Ears (animated) */}
          <motion.polygon
            points="145,150 170,115 195,150 185,175 155,175"
            fill="#f59e0b"
            opacity="0.95"
            animate={{ rotate: [0, 3, -3, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          />

          {/* Legs */}
          <polygon points="140,350 155,350 158,390 135,390" fill="#c2440a" opacity="0.9" />
          <polygon points="185,350 200,350 205,390 182,390" fill="#c2440a" opacity="0.9" />

          {/* Circuit lines (static) */}
          <polyline points="130,260 110,240 120,220" stroke="#fcd34d" strokeWidth="1" opacity="0.35" fill="none" />
          <polyline points="210,260 230,240 220,220" stroke="#fcd34d" strokeWidth="1" opacity="0.35" fill="none" />

          {/* Delhi collar tag with glow */}
          <rect x="158" y="185" width="24" height="18" rx="4" fill="#6b21e8" opacity="0.9" />
          <motion.text
            x="170"
            y="197"
            textAnchor="middle"
            fontSize="7"
            fill="white"
            fontFamily="monospace"
            fontWeight="bold"
            animate={{ filter: ['drop-shadow(0 0 2px #f59e0b)', 'drop-shadow(0 0 6px #f59e0b)'] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            DEL
          </motion.text>

          {/* Glow dots */}
          <circle cx="110" cy="220" r="4" fill="#f59e0b" opacity="0.5" />
          <circle cx="230" cy="220" r="4" fill="#f59e0b" opacity="0.5" />
          <circle cx="170" cy="115" r="3" fill="#fcd34d" opacity="0.45" />
        </svg>
      </div>

      <div className="mascot-info">
        <div className="section-label">Our Mascot</div>
        <h2 className="section-title">
          Meet <span style={{ color: 'var(--gold)' }}>Dev</span>, the Delhi Deer
        </h2>
        <p>
          The <strong>deer</strong> is Delhi's silent resident — found in the iconic Deer Park
          of Hauz Khas, the Ridge forests, and even the grounds of IIT Delhi itself.
        </p>
        <p>
          Dev embodies <strong>grace, speed, and watchfulness</strong> — the same qualities
          you need to ship a working product in 24 hours. Notice the{' '}
          <strong>purple Delhi map collar tag</strong> and{' '}
          <strong>antlers shaped like circuit branches</strong>: Dev is wired in and ready to hack.
        </p>
        <p>
          The geometric, polygonal form mirrors the <strong>cutting-edge, faceted thinking</strong>{' '}
          of every developer who walks through the gates of IIT Delhi for Devcation.
        </p>
        <div className="mascot-hashtag">
          🦌 #DevTheDeer &nbsp;·&nbsp; #DevcationDelhi2026
        </div>
      </div>
    </motion.div>
  );
};

export default Mascot;
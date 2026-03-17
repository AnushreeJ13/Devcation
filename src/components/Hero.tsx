import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <section ref={containerRef} id="hero" className="hero">
        {/* Particle canvas (simple implementation) */}
        <canvas id="hero-particles" className="hero-particles" />

        <div className="hero-glow" aria-hidden="true" />
       

        <motion.div style={{ y, opacity }} className="hero-content">
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
            {[
              ['📅', 'April 12–13, 2026'],
              ['📍', <><strong>IIT Delhi</strong>, New Delhi</>],
             
              ['👥', 'Teams of 2–4'],
            ].map(([icon, text], i) => (
              <motion.div
                key={i}
                className="hero-pill"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <span>{icon}</span>
                <span>{text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="https://unstop.com/hackathons/devcation-hack-n-solve-iit-delhi-1659241"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Register on Unstop 🦌
            </a>
            <a href="#about" className="btn-secondary">Learn More</a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span>▼</span>
        </motion.div>
      </section>

      <div className="marquee-wrap" aria-hidden="true">
        {/* marquee unchanged but could be animated with framer‑motion */}
      </div>
    </>
  );
};

export default Hero;
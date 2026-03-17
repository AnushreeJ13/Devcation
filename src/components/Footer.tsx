import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      {/* ── CTA BANNER ── */}
      <div className="cta-banner">
        <div className="section-label centered">Registrations Close April 4th</div>
        <h2 className="cta-title">
          Ready to <span>Hack Delhi?</span>
        </h2>
        <p className="cta-sub">
          24 hours. One campus. Infinite possibilities.<br />
          The capital is calling — bring your ideas.
        </p>
        <a
          href="https://unstop.com/hackathons/devcation-hack-n-solve-iit-delhi-1659241"
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
          style={{ fontSize: '1.1rem', padding: '1.1rem 3rem' }}
        >
          Register Now — It's Free 🦌
        </a>
      </div>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-brand">🦌 DEVCATION <span>DELHI</span> 2026</div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#tracks">Tracks</a>
          <a href="#prizes">Prizes</a>
          <a href="#timeline">Timeline</a>
          <a href="#faq">FAQ</a>
          <a
            href="https://unstop.com/hackathons/devcation-hack-n-solve-iit-delhi-1659241"
            target="_blank"
            rel="noreferrer"
          >
            Unstop ↗
          </a>
        </div>

        <div className="footer-copy">
          Organized by IGDTUW · Hosted at IIT Delhi
        </div>
      </footer>
    </>
  );
};

export default Footer;
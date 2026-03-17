import React, { useEffect, useRef } from 'react';

const stats = [
  { number: '₹3L+', label: 'Prize Pool' },
  
  { number: '2–4', label: 'Team Size' },

];

const About: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={ref}>
      <div className="section-label">About the Event</div>
      <h2 className="section-title">Where Delhi Meets Innovation</h2>

      <div className="about-grid reveal">
        <div className="about-text">
          <p>
            <strong>Devcation</strong> is an annual hackathon organized by{' '}
            <strong>Google Developer Groups on Campus — IGDTUW</strong>, bringing together
            the brightest student minds from across India to build, break, and create.
          </p>
          <p>
            The 2026 edition is co-hosted at the prestigious <strong>IIT Delhi</strong> campus —
            a landmark collaboration between two of Delhi's finest institutions. The theme
            celebrates Delhi's spirit: fast, vibrant, and unstoppable.
          </p>
          <p>
            <strong>Devcation 2026</strong> is completely <strong>free to participate</strong> —
            because great ideas should never be gated by entry fees. Open to UG/PG students
            from any college across India.
          </p>
          <a
            href="https://unstop.com/hackathons/devcation-hack-n-solve-iit-delhi-1659241"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ marginTop: '1.5rem', fontSize: '0.9rem', padding: '0.8rem 2rem' }}
          >
            View on Unstop →
          </a>
        </div>

        <div className="about-stats">
          {stats.map((s, i) => (
            <div key={i} className={`stat-card reveal reveal-d${(i % 3) + 1}`}>
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
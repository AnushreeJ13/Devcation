import React, { useState, useRef, useCallback } from 'react';

interface Track {
  icon: string;
  name: string;
  desc: string;
  tag: string;
  accent: string;
  accentRgb: string;
  gradFrom: string;
  gradTo: string;
  number: string;
}

const tracks: Track[] = [
  {
    icon: '💻',
    name: 'Hack & Solve',
    desc: 'Build a fully working prototype that tackles a real-world challenge. From AI to graph databases, data pipelines to security — engineer something that makes an impact in 24 hours.',
    tag: 'Build a Prototype',
    accent: '#c084fc',
    accentRgb: '192,132,252',
    gradFrom: '#6b21e8',
    gradTo: '#a855f7',
    number: '01',
  },
  {
    icon: '🎨',
    name: 'Design & Solve',
    desc: 'Craft pixel-perfect, user-centered designs that solve real problems. Wireframes, design systems, interactive prototypes — show how thoughtful UX can change everything.',
    tag: 'Design a Solution',
    accent: '#fcd34d',
    accentRgb: '252,211,77',
    gradFrom: '#d97706',
    gradTo: '#f59e0b',
    number: '02',
  },
  {
    icon: '🌐',
    name: 'Tech for Good',
    desc: 'Build inclusive, sustainable technology that reduces inequalities and makes Delhi — and the world — a better place. Social impact is the north star.',
    tag: 'Social Impact',
    accent: '#2dd4bf',
    accentRgb: '45,212,191',
    gradFrom: '#0d9488',
    gradTo: '#14b8a6',
    number: '03',
  },
  {
    icon: '🔷',
    name: 'TigerGraph Challenge',
    desc: 'Powered by TigerGraph — explore graph databases to uncover connections in data. Build connected intelligence for fraud detection, supply chain, healthcare, or beyond.',
    tag: 'Sponsor Track',
    accent: '#f472b6',
    accentRgb: '244,114,182',
    gradFrom: '#be185d',
    gradTo: '#ec4899',
    number: '04',
  },
];

function TrackCard({ track, wide }: { track: Track; wide?: boolean }) {
  const [tilt, setTilt]       = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse]     = useState({ x: 50, y: 50 });
  const cardRef               = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current; if (!el) return;
    const r  = el.getBoundingClientRect();
    const x  = e.clientX - r.left;
    const y  = e.clientY - r.top;
    setTilt({ x: ((y / r.height) - .5) * -12, y: ((x / r.width) - .5) * 12 });
    setMouse({ x: (x / r.width) * 100, y: (y / r.height) * 100 });
  }, []);

  const onLeave = useCallback(() => { setTilt({ x: 0, y: 0 }); setHovered(false); }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      style={{
        position: 'relative',
        borderRadius: 20,
        padding: 2,
        /* wide card spans full row on desktop */
        gridColumn: wide ? '1 / -1' : undefined,
        background: hovered
          ? `linear-gradient(135deg, ${track.gradFrom}, ${track.gradTo})`
          : 'rgba(147,51,234,.18)',
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)${hovered ? ' translateY(-8px)' : ''}`,
        transition: hovered
          ? 'box-shadow .3s, background .3s'
          : 'transform .45s cubic-bezier(.34,1.56,.64,1), box-shadow .3s, background .3s',
        boxShadow: hovered
          ? `0 28px 60px rgba(${track.accentRgb},.28), 0 0 0 1px rgba(${track.accentRgb},.18)`
          : '0 4px 24px rgba(0,0,0,.35)',
        willChange: 'transform',
      }}
    >
      {/* ── Inner ── */}
      <div style={{
        borderRadius: 18,
        padding: wide ? '1.8rem 2.4rem' : '2rem',
        background: '#0a0118',
        position: 'relative',
        overflow: 'hidden',
        /* wide: horizontal layout */
        display: wide ? 'flex' : 'block',
        alignItems: wide ? 'flex-start' : undefined,
        gap: wide ? '2rem' : undefined,
      }}>

        {/* spotlight */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', borderRadius: 18,
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(${track.accentRgb},${hovered ? .1 : 0}) 0%, transparent 60%)`,
        }} />

        {/* top bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg, transparent, ${track.gradFrom} 30%, ${track.gradTo} 70%, transparent)`,
          opacity: hovered ? 1 : .35, transition: 'opacity .3s',
        }} />

        {/* ghost number */}
        <div style={{
          position: 'absolute', top: '1.1rem', right: '1.4rem',
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: wide ? '5rem' : '3.5rem',
          lineHeight: 1, letterSpacing: 2,
          color: `rgba(${track.accentRgb}, ${hovered ? .12 : .05})`,
          userSelect: 'none', transition: 'color .3s',
        }}>
          {track.number}
        </div>

        {/* icon */}
        <div style={{
          flexShrink: 0,
          width: 60, height: 60, borderRadius: 14,
          background: `rgba(${track.accentRgb},.1)`,
          border: `1px solid rgba(${track.accentRgb},.25)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.9rem',
          marginBottom: wide ? 0 : '1.3rem',
          transition: 'all .3s',
          boxShadow: hovered ? `0 0 22px rgba(${track.accentRgb},.28)` : 'none',
          transform: hovered ? 'scale(1.1) rotate(-5deg)' : 'scale(1)',
        }}>
          {track.icon}
        </div>

        {/* text block */}
        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: wide ? '2rem' : '1.7rem',
            letterSpacing: '1.5px',
            marginBottom: '0.5rem',
            background: hovered
              ? `linear-gradient(90deg, ${track.accent}, #fff 80%)`
              : '#f8f4ff',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            transition: 'all .3s',
          }}>
            {track.name}
          </div>

          <div style={{
            height: 1, width: hovered ? '100%' : 36,
            marginBottom: '0.9rem',
            background: `linear-gradient(90deg, ${track.gradFrom}, transparent)`,
            transition: 'width .4s ease',
          }} />

          <p style={{
            color: hovered ? '#c4b5fd' : '#9d8bb5',
            fontSize: '0.86rem', lineHeight: 1.75,
            marginBottom: '1.2rem',
            maxWidth: wide ? 640 : undefined,
            transition: 'color .3s',
          }}>
            {track.desc}
          </p>

          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            padding: '0.26rem 0.85rem', borderRadius: 20,
            fontSize: '0.66rem', fontWeight: 700,
            letterSpacing: '2px', textTransform: 'uppercase',
            background: `rgba(${track.accentRgb},.1)`,
            border: `1px solid rgba(${track.accentRgb},.32)`,
            color: track.accent,
            boxShadow: hovered ? `0 0 10px rgba(${track.accentRgb},.22)` : 'none',
            transition: 'box-shadow .3s',
          }}>
            <span style={{
              width: 5, height: 5, borderRadius: '50%',
              background: track.accent, display: 'inline-block',
              boxShadow: `0 0 6px ${track.accent}`,
            }} />
            {track.tag}
          </span>
        </div>
      </div>
    </div>
  );
}

const Tracks: React.FC = () => (
  <section id="tracks" className="tracks">
    <div className="section-label">Competition Tracks</div>
    <h2 className="section-title">
      Pick Your{' '}
      <span style={{
        background: 'linear-gradient(90deg,#f59e0b,#fcd34d)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
      }}>Path</span>
    </h2>
    <p style={{ color: '#9d8bb5', fontSize: '0.9rem', maxWidth: 480, lineHeight: 1.7, marginBottom: '3rem' }}>
      Four tracks. One goal. Build something that matters in 24 hours.
    </p>

    {/* 3-col grid — first 3 cards fill one row, 4th spans all 3 cols */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1.4rem',
    }}>
      {tracks.map((t, i) => (
        <TrackCard key={i} track={t} wide={i === 3} />
      ))}
    </div>

    {/* CTA strip */}
    <div style={{
      marginTop: '2.5rem', padding: '1.3rem 1.8rem', borderRadius: 14,
      background: 'rgba(107,33,232,.07)', border: '1px solid rgba(147,51,234,.18)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '1rem',
    }}>
      <div>
        <p style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 2 }}>
          Can't decide? Submit to multiple tracks.
        </p>
        <p style={{ color: '#9d8bb5', fontSize: '0.78rem' }}>
          The TigerGraph challenge can be combined with any main track.
        </p>
      </div>
      <a
        href="https://unstop.com/hackathons/devcation-hack-n-solve-iit-delhi-1659241"
        target="_blank" rel="noreferrer"
        className="btn-primary"
        style={{ fontSize: '0.86rem', padding: '0.72rem 1.9rem', whiteSpace: 'nowrap' }}
      >
        Register Now 🦌
      </a>
    </div>

    {/* Mobile override */}
    <style>{`
      @media (max-width: 768px) {
        #tracks .tracks-inner { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);

export default Tracks;
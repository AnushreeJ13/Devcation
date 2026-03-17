import React, { useState, useEffect } from 'react';

interface Milestone {
  month: string;
  dates: string;
  title: string;
  desc?: string;
  link?: string;
  barColor: string;
  textColor: string;
  status: 'live' | 'upcoming' | 'done';
}

const milestones: Milestone[] = [
  {
    month: 'MAR',
    dates: '15 – 30',
    title: 'Registrations Open',
    desc: 'Talks, workshops, networking, team formation',
    link: 'https://forms.gle/nNuA4GM5tf2JSUW89',
    barColor: '#5eead4',      // teal
    textColor: '#0f172a',
    status: 'live',
  },
  {
    month: 'APR',
    dates: '1 – 4',
    title: "Hack 'N' Solve Submission",
    desc: 'Building period · Selection for mentorship round',
    barColor: '#818cf8',      // indigo
    textColor: '#0f172a',
    status: 'upcoming',
  },
  {
    month: 'APR',
    dates: '5 – 7',
    title: 'Mentorship & Feedback',
    desc: 'Elimination round · Refine your project with experts',
    barColor: '#a78bfa',      // violet
    textColor: '#0f172a',
    status: 'upcoming',
  },
  {
    month: 'APR',
    dates: '09',
    title: 'Finalists Announced',
    desc: 'Top teams notified via email',
    barColor: '#c4b5fd',      // light purple
    textColor: '#1e1b4b',
    status: 'upcoming',
  },
  {
    month: 'APR',
    dates: '12',
    title: '🏁 Grand Finale at IIT Delhi',
    desc: 'Pitch live · Impress the judges · Win big 🚀',
    barColor: '#e9d5ff',      // lavender
    textColor: '#1e1b4b',
    status: 'upcoming',
  },
];

const NEXT_DEADLINE = new Date('2026-04-03T00:00:00+05:30');
const DEADLINE_LABEL = "Hack 'N' Solve Submission Opens";

function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0, over: true };
    return {
      days:  Math.floor(diff / 86_400_000),
      hours: Math.floor((diff % 86_400_000) / 3_600_000),
      mins:  Math.floor((diff % 3_600_000)  /    60_000),
      secs:  Math.floor((diff %    60_000)  /     1_000),
      over: false,
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

// Delhi skyline SVG
function Skyline() {
  return (
    <svg
      viewBox="0 0 1200 160"
      preserveAspectRatio="xMidYMax meet"
      style={{ width: '100%', display: 'block', marginTop: 0 }}
      aria-hidden="true"
    >
      <g fill="rgba(255,255,255,0.12)">
        {/* India Gate */}
        <rect x="555" y="60" width="90" height="100" />
        <polygon points="555,60 600,20 645,60" />
        <rect x="575" y="42" width="50" height="18" />
        <rect x="586" y="30" width="28" height="14" />
        {/* Qutub */}
        <rect x="140" y="40" width="34" height="120" />
        <rect x="148" y="30" width="18" height="14" />
        <polygon points="140,40 157,5 174,40" />
        {/* Red Fort */}
        <rect x="900" y="50" width="180" height="110" />
        <rect x="888" y="42" width="32" height="90" />
        <rect x="1060" y="42" width="32" height="90" />
        <rect x="928" y="35" width="22" height="22" />
        <rect x="965" y="30" width="22" height="28" />
        <rect x="1002" y="30" width="22" height="28" />
        <rect x="1040" y="35" width="22" height="22" />
        {/* Lotus Temple */}
        <ellipse cx="340" cy="115" rx="55" ry="65" />
        <ellipse cx="368" cy="122" rx="46" ry="56" />
        <ellipse cx="312" cy="122" rx="46" ry="56" />
        <rect x="322" y="112" width="36" height="48" />
        {/* BG buildings left */}
        <rect x="0"   y="90" width="120" height="70" />
        <rect x="18"  y="70" width="28" height="90" />
        <rect x="58"  y="80" width="36" height="80" />
        {/* BG buildings right */}
        <rect x="1100" y="85" width="100" height="75" />
        <rect x="1110" y="62" width="28" height="98" />
        <rect x="1148" y="72" width="36" height="88" />
        {/* Mid extras */}
        <rect x="740" y="80" width="26" height="80" />
        <rect x="776" y="88" width="40" height="72" />
        <rect x="820" y="72" width="28" height="88" />
        {/* Ground */}
        <rect x="0" y="158" width="1200" height="4" />
      </g>
    </svg>
  );
}

export default function Roadmap() {
  const cd = useCountdown(NEXT_DEADLINE);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="timeline"
      style={{
        background: 'linear-gradient(160deg, #1e0d3e 0%, #0e0518 55%, #180a30 100%)',
        padding: '80px 0 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* ── Heading ── */}
      <div style={{ textAlign: 'center', marginBottom: 12, padding: '0 20px' }}>
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '.68rem', letterSpacing: '5px',
          color: '#a78bfa', textTransform: 'uppercase', marginBottom: 8,
        }}>
          Schedule
        </p>
      </div>

      {/* Giant TIMELINE text */}
      <div style={{
        textAlign: 'center',
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(4.5rem, 16vw, 10rem)',
        letterSpacing: '8px',
        lineHeight: 1,
        marginBottom: '48px',
        padding: '0 20px',
        background: 'linear-gradient(135deg, #fff 0%, #c4b5fd 60%, #a78bfa 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        filter: 'drop-shadow(0 0 40px rgba(167,139,250,.35))',
      }}>
        TIMELINE
      </div>

      {/* ── Countdown ── */}
      <div style={{
        maxWidth: 520,
        margin: '0 auto 52px',
        padding: '18px 24px',
        background: 'rgba(91,31,200,.1)',
        border: '1px solid rgba(139,92,246,.25)',
        borderRadius: 12,
        textAlign: 'center',
        marginLeft: 'auto', marginRight: 'auto',
        width: 'calc(100% - 40px)',
      }}>
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '.7rem', letterSpacing: '2px',
          color: '#a78bfa', textTransform: 'uppercase',
          marginBottom: cd.over ? 0 : 14,
        }}>
          {cd.over ? '🎯 Submissions are open now!' : `⏳ ${DEADLINE_LABEL} in`}
        </p>
        {!cd.over && (
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
            {([['Days', cd.days], ['Hrs', cd.hours], ['Min', cd.mins], ['Sec', cd.secs]] as [string, number][]).map(
              ([label, val]) => (
                <div key={label} style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  background: 'rgba(255,255,255,.04)',
                  border: '1px solid rgba(245,158,11,.22)',
                  borderRadius: 10, padding: '10px 14px', minWidth: 64,
                }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '1.7rem', fontWeight: 700,
                    color: '#f59e0b', lineHeight: 1,
                  }}>
                    {String(val).padStart(2, '0')}
                  </span>
                  <span style={{
                    fontSize: '.58rem', color: '#7c6b9e',
                    letterSpacing: '2px', textTransform: 'uppercase', marginTop: 4,
                  }}>
                    {label}
                  </span>
                </div>
              )
            )}
          </div>
        )}
      </div>

      {/* ── Horizontal bar rows ── */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 20px' }}>
        {milestones.map((m, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              display: 'flex',
              alignItems: 'stretch',
              marginBottom: 10,
              borderRadius: 10,
              overflow: 'hidden',
              transition: 'transform .25s cubic-bezier(.34,1.56,.64,1), box-shadow .25s',
              transform: hovered === i ? 'translateX(6px) scale(1.012)' : 'none',
              boxShadow: hovered === i ? `0 8px 32px rgba(0,0,0,.35)` : 'none',
              cursor: 'default',
            }}
          >
            {/* Date label */}
            <div style={{
              background: 'rgba(255,255,255,.07)',
              borderRight: '1px solid rgba(255,255,255,.08)',
              padding: '16px 18px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 96,
              flexShrink: 0,
            }}>
              <span style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '.95rem',
                letterSpacing: '3px',
                color: 'rgba(255,255,255,.5)',
                lineHeight: 1,
              }}>
                {m.month}
              </span>
              <span style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
                lineHeight: 1.05,
                background: `linear-gradient(135deg, ${m.barColor}, white)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '1px',
              }}>
                {m.dates}
              </span>
            </div>

            {/* Colored bar */}
            <div style={{
              flex: 1,
              background: m.barColor,
              padding: '14px 22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
              flexWrap: 'wrap',
            }}>
              <div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(.88rem, 2vw, 1.05rem)',
                  color: m.textColor,
                  marginBottom: m.desc ? 3 : 0,
                }}>
                  {m.title}
                </div>
                {m.desc && (
                  <div style={{
                    fontSize: '.78rem',
                    color: m.textColor,
                    opacity: .72,
                    lineHeight: 1.5,
                  }}>
                    {m.desc}
                  </div>
                )}
                {m.link && (
                  <a
                    href={m.link}
                    target="_blank" rel="noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{
                      fontSize: '.7rem',
                      color: '#1d4ed8',
                      textDecoration: 'underline',
                      display: 'block',
                      marginTop: 3,
                    }}
                  >
                    Register here ↗
                  </a>
                )}
              </div>

              {/* Status badge */}
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                flexShrink: 0,
                borderRadius: 20, padding: '3px 12px',
                fontSize: '.66rem', fontWeight: 700, letterSpacing: '.5px',
                background: m.status === 'live'
                  ? 'rgba(239,68,68,.15)' : 'rgba(0,0,0,.1)',
                border: `1px solid ${m.status === 'live' ? 'rgba(239,68,68,.4)' : 'rgba(0,0,0,.15)'}`,
                color: m.status === 'live' ? '#dc2626' : m.textColor,
              }}>
                {m.status === 'live' && (
                  <span style={{
                    width: 6, height: 6,
                    borderRadius: '50%',
                    background: '#ef4444',
                    display: 'inline-block',
                    boxShadow: '0 0 6px #ef4444',
                  }} />
                )}
                {m.status === 'live' ? 'Live Now' : 'Upcoming'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Delhi skyline at the bottom ── */}
      <div style={{ marginTop: 40, opacity: 1 }}>
        <Skyline />
      </div>

      {/* Glow beneath skyline */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
        background: 'linear-gradient(to top, rgba(91,31,200,.18), transparent)',
        pointerEvents: 'none',
      }} />
    </section>
  );
}
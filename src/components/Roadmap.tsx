import React, { useState, useEffect } from 'react';

interface Milestone {
  day: string;
  month: string;
  range: string;
  title: string;
  desc: string;
  link?: string;
  platform?: string;
  status: 'live' | 'upcoming' | 'done';
}

const milestones: Milestone[] = [
  {
    day: '15', month: 'Mar',
    range: '15 Mar 26, 12:00 AM IST → 01 Apr 26, 11:59 PM IST',
    title: 'Mandatory Registration Task',
    desc: "Lock in your spot by completing the mandatory registration form and officially begin your journey at Devcation Delhi 2026. Don't miss your chance to be part of the innovation, collaboration, and chaos that makes Devcation unforgettable!",
    link: 'https://forms.gle/nNuA4GM5tf2JSUW89',
    platform: 'On Unstop',
    status: 'live',
  },
  {
    day: '3', month: 'Apr',
    range: '03 Apr 26, 12:00 AM IST → 04 Apr 26, 11:59 PM IST',
    title: "Hack 'N' Solve Submission Round",
    desc: 'Teams must submit their project via the Google Form, including a PPT, GitHub repository, and deployed demo link. All fields are mandatory and will be used to shortlist teams for the next round of Devcation Delhi 2026!',
    platform: 'On Unstop',
    status: 'upcoming',
  },
  {
    day: '5', month: 'Apr',
    range: '05 Apr 26, 12:00 PM IST → 07 Apr 26, 11:59 AM IST',
    title: 'Mentorship Round',
    desc: 'Shortlisted teams will receive mentorship from experts to refine their projects. This is an eliminatory round — teams will be evaluated based on their progress and implementation to advance to the Grand Finale.',
    platform: 'On Unstop',
    status: 'upcoming',
  },
  {
    day: '12', month: 'Apr',
    range: '12 Apr 26, 11:00 AM IST → 12 Apr 26, 06:00 PM IST',
    title: '🏁 Grand Finale at IIT Delhi',
    desc: 'The best teams make it to IIT Delhi to pitch their solutions live. Present your project, impress the judges, and battle it out for the top prizes at the Devcation Delhi 2026 Grand Finale. 🚀',
    platform: 'IIT Delhi',
    status: 'upcoming',
  },
];

// Next key deadline: Hack 'N' Solve opens Apr 3 IST
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

export default function Roadmap() {
  const cd = useCountdown(NEXT_DEADLINE);

  return (
    <section id="timeline" style={css.section}>

      {/* Header */}
      <p style={css.eyebrow}>SCHEDULE</p>
      <h2 style={css.heading}>
        Roadmap to <span style={{ color: '#f59e0b' }}>Devcation</span>
      </h2>

      {/* ── Countdown ── */}
      <div style={css.cdCard}>
        <p style={css.cdLabel}>
          {cd.over
            ? '🎯 Submissions are open now!'
            : `⏳ ${DEADLINE_LABEL} in`}
        </p>
        {!cd.over && (
          <div style={css.cdRow}>
            {([['Days', cd.days], ['Hours', cd.hours], ['Mins', cd.mins], ['Secs', cd.secs]] as [string, number][]).map(
              ([label, val]) => (
                <div key={label} style={css.cdUnit}>
                  <span style={css.cdNum}>{String(val).padStart(2, '0')}</span>
                  <span style={css.cdUnitLabel}>{label}</span>
                </div>
              )
            )}
          </div>
        )}
      </div>

      {/* ── Timeline ── */}
      <div style={css.timeline}>
        {milestones.map((m, i) => (
          <div key={i} style={css.row}>

            {/* Left: bubble + dashed line */}
            <div style={css.leftCol}>
              <div style={{
                ...css.bubble,
                background: m.status === 'live'
                  ? '#1d4ed8'
                  : m.status === 'done'
                  ? '#374151'
                  : '#1e3a5f',
                boxShadow: m.status === 'live'
                  ? '0 0 0 4px rgba(59,130,246,.3)'
                  : 'none',
              }}>
                <span style={css.bubbleDay}>{m.day}</span>
                <span style={css.bubbleMon}>{m.month}</span>
              </div>

              {i < milestones.length - 1 && (
                <div style={css.dottedLine} />
              )}
            </div>

            {/* Right: white card */}
            <div style={css.card}>
              {/* Top row: range + platform */}
              <div style={css.cardMeta}>
                <span style={css.rangeStr}>{m.range}</span>
                {m.platform && (
                  <span style={css.platformBadge}>
                    {m.platform === 'On Unstop' ? (
                      <>
                        <span style={css.unstopDot} />
                        On <strong style={{ fontWeight: 700 }}>unstop</strong>
                      </>
                    ) : (
                      <>📍 {m.platform}</>
                    )}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 style={css.cardTitle}>{m.title}</h3>

              {/* Body */}
              <p style={css.cardBody}>{m.desc}</p>

              {/* Optional link */}
              {m.link && (
                <a href={m.link} target="_blank" rel="noreferrer" style={css.cardLink}>
                  {m.link}
                </a>
              )}

              {/* Status pill */}
              <div style={{ marginTop: 10 }}>
                <span style={{
                  ...css.statusPill,
                  ...(m.status === 'live'     ? css.pillLive     : {}),
                  ...(m.status === 'upcoming' ? css.pillUpcoming : {}),
                  ...(m.status === 'done'     ? css.pillDone     : {}),
                }}>
                  {m.status === 'live' && (
                    <span style={css.livePulse} />
                  )}
                  {m.status === 'live'     ? 'Live'
                   : m.status === 'done'   ? 'Completed'
                                           : 'Upcoming'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Style object ── */
const css: Record<string, React.CSSProperties> = {
  section: {
    padding: '80px 20px',
    background: '#07020e',
    color: '#f8f4ff',
    fontFamily: "'DM Sans', sans-serif",
  },
  eyebrow: {
    textAlign: 'center',
    fontSize: '.68rem',
    letterSpacing: '5px',
    color: '#8b5cf6',
    marginBottom: '8px',
    fontFamily: "'JetBrains Mono', monospace",
    textTransform: 'uppercase',
  },
  heading: {
    textAlign: 'center',
    fontFamily: "'Yatra One', sans-serif",
    fontSize: 'clamp(1.9rem, 5vw, 3rem)',
    fontWeight: 400,
    marginBottom: '36px',
    lineHeight: 1.1,
  },

  /* Countdown */
  cdCard: {
    maxWidth: 500,
    margin: '0 auto 56px',
    textAlign: 'center',
    background: 'rgba(91,31,200,.08)',
    border: '1px solid rgba(139,92,246,.22)',
    borderRadius: '10px',
    padding: '20px 24px',
  },
  cdLabel: {
    fontSize: '.72rem',
    color: '#a78bfa',
    letterSpacing: '1.5px',
    marginBottom: '14px',
    fontFamily: "'JetBrains Mono', monospace",
    textTransform: 'uppercase',
  },
  cdRow: {
    display: 'flex',
    gap: '8px',
    justifyContent: 'center',
  },
  cdUnit: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'rgba(255,255,255,.04)',
    border: '1px solid rgba(245,158,11,.2)',
    borderRadius: '8px',
    padding: '10px 16px',
    minWidth: '68px',
  },
  cdNum: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '1.75rem',
    fontWeight: 700,
    color: '#f59e0b',
    lineHeight: 1,
  },
  cdUnitLabel: {
    fontSize: '.6rem',
    color: '#7c6b9e',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginTop: '4px',
  },

  /* Timeline */
  timeline: {
    maxWidth: 800,
    margin: '0 auto',
  },
  row: {
    display: 'flex',
    gap: '18px',
    alignItems: 'flex-start',
  },

  /* Left column */
  leftCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexShrink: 0,
    width: 56,
  },
  bubble: {
    width: 50,
    height: 50,
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bubbleDay: {
    fontSize: '1.18rem',
    fontWeight: 700,
    color: '#fff',
    lineHeight: 1,
  },
  bubbleMon: {
    fontSize: '.58rem',
    color: 'rgba(255,255,255,.72)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginTop: '2px',
  },
  dottedLine: {
    width: 0,
    borderLeft: '2px dashed rgba(99,102,241,.22)',
    flex: 1,
    minHeight: 32,
    margin: '5px 0',
  },

  /* Card */
  card: {
    flex: 1,
    background: '#ffffff',
    borderRadius: '12px',
    padding: '16px 18px',
    marginBottom: '18px',
    boxShadow: '0 2px 20px rgba(0,0,0,.22)',
  },
  cardMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '8px',
    marginBottom: '8px',
    flexWrap: 'wrap',
  },
  rangeStr: {
    fontSize: '.68rem',
    color: '#6b7280',
    fontFamily: "'JetBrains Mono', monospace",
  },
  platformBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    background: '#f3f4f6',
    border: '1px solid #e5e7eb',
    borderRadius: '20px',
    padding: '2px 10px',
    fontSize: '.7rem',
    color: '#374151',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
  unstopDot: {
    width: 7,
    height: 7,
    borderRadius: '50%',
    background: '#1d4ed8',
    display: 'inline-block',
    flexShrink: 0,
  },
  cardTitle: {
    fontSize: '.98rem',
    fontWeight: 700,
    color: '#111827',
    marginBottom: '7px',
    fontFamily: "'DM Sans', sans-serif",
    lineHeight: 1.35,
  },
  cardBody: {
    fontSize: '.8rem',
    color: '#4b5563',
    lineHeight: 1.62,
    marginBottom: '8px',
  },
  cardLink: {
    display: 'block',
    fontSize: '.74rem',
    color: '#2563eb',
    textDecoration: 'none',
    marginBottom: '4px',
    wordBreak: 'break-all',
  },

  /* Status pills */
  statusPill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    borderRadius: '20px',
    padding: '3px 11px',
    fontSize: '.68rem',
    fontWeight: 600,
    letterSpacing: '.3px',
  },
  pillLive: {
    background: 'rgba(239,68,68,.1)',
    border: '1px solid rgba(239,68,68,.3)',
    color: '#dc2626',
  },
  pillUpcoming: {
    background: 'rgba(59,130,246,.08)',
    border: '1px solid rgba(59,130,246,.22)',
    color: '#3b82f6',
  },
  pillDone: {
    background: 'rgba(100,116,139,.1)',
    border: '1px solid rgba(100,116,139,.2)',
    color: '#94a3b8',
  },
  livePulse: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: '#ef4444',
    display: 'inline-block',
    animation: 'pulseDot 1.4s ease-in-out infinite',
  },
};
import React from 'react';
import type { Track } from '../types';

const tracks: Track[] = [
  {
    icon: '💻',
    name: 'Hack & Solve',
    desc: 'Build a fully working prototype that tackles a real-world challenge. From AI to graph databases, data pipelines to security — engineer something that makes an impact in 24 hours.',
    tag: 'Build a Prototype',
    color: 'rgba(147,51,234,0.15)',
  },
  {
    icon: '🎨',
    name: 'Design & Solve',
    desc: 'Craft pixel-perfect, user-centered designs that solve real problems. Wireframes, design systems, interactive prototypes — show how thoughtful UX can change everything.',
    tag: 'Design a Solution',
    color: 'rgba(245,158,11,0.15)',
  },
  {
    icon: '🌐',
    name: 'Tech for Good',
    desc: 'Build inclusive, sustainable, or accessible technology that reduces inequalities and makes Delhi — and the world — a better place. Social impact is the north star.',
    tag: 'Social Impact',
    color: 'rgba(45,212,191,0.1)',
  },
  {
    icon: '🔷',
    name: 'TigerGraph Challenge',
    desc: 'Powered by TigerGraph — explore graph databases to uncover connections in data. Build connected intelligence for fraud detection, supply chain, healthcare, or beyond.',
    tag: 'Sponsor Track',
    color: 'rgba(244,114,182,0.1)',
  },
];

const tagColors: Record<string, React.CSSProperties> = {
  'Build a Prototype': { background: 'rgba(147,51,234,0.15)', border: '1px solid rgba(147,51,234,0.35)', color: '#c084fc' },
  'Design a Solution': { background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.35)', color: '#fcd34d' },
  'Social Impact':     { background: 'rgba(45,212,191,0.1)',  border: '1px solid rgba(45,212,191,0.35)', color: '#2dd4bf' },
  'Sponsor Track':     { background: 'rgba(244,114,182,0.1)', border: '1px solid rgba(244,114,182,0.35)', color: '#f472b6' },
};

const topBarColors = [
  'linear-gradient(90deg,#6b21e8,#c084fc)',
  'linear-gradient(90deg,#f59e0b,#fcd34d)',
  'linear-gradient(90deg,#2dd4bf,#a7f3d0)',
  'linear-gradient(90deg,#f472b6,#fda4af)',
];

const Tracks: React.FC = () => {
  return (
    <section id="tracks" className="tracks">
      <div className="section-label">Competition Tracks</div>
      <h2 className="section-title">Pick Your Path</h2>

      <div className="tracks-grid">
        {tracks.map((track, i) => (
          <div className="track-card" key={i}>
            {/* Coloured top bar */}
            <span
              aria-hidden="true"
              style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: '3px',
                background: topBarColors[i],
              }}
            />
            <span className="track-icon">{track.icon}</span>
            <div className="track-name">{track.name}</div>
            <p className="track-desc">{track.desc}</p>
            <span className="track-tag" style={tagColors[track.tag]}>
              {track.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tracks;
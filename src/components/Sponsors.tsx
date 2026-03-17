import React from 'react';
import type { Sponsor } from '../types';

const sponsors: Sponsor[] = [
  { logo: '🔷', tier: 'Title Sponsor', name: 'TigerGraph', title: true },
  { logo: '🔴', tier: 'Platform Partner', name: 'Unstop' },
  { logo: '🌐', tier: 'Community Partner', name: 'GDG on Campus' },
  { logo: '🏛️', tier: 'Host Institute', name: 'IIT Delhi' },
  { logo: '👩‍💻', tier: 'Organizer', name: 'IGDTUW' },
];

const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="sponsors">
      <div className="section-label">Our Partners</div>
      <h2 className="section-title">Powered by the Best</h2>

      <div className="sponsors-grid">
        {sponsors.map((s) => (
          <div key={s.name} className={`sponsor-card ${s.title ? 'title-sponsor' : ''}`}>
            <span className="sponsor-logo">{s.logo}</span>
            <div>
              <div className={`sponsor-tier ${s.title ? 'gold-tier' : ''}`}>{s.tier}</div>
              <div>{s.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
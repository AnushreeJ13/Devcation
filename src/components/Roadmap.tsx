import React from 'react';
import type { Milestone } from '../types';

const milestones: Milestone[] = [
  { date: 'NOW OPEN', event: 'Registrations Open 🚀', loc: 'unstop.com', active: true },
  { date: 'April 4, 2026', event: 'Idea Submission Deadline', loc: 'Online Portal' },
  { date: 'April 7–8, 2026', event: 'Shortlisted Teams Notified', loc: 'Email' },
  { date: 'April 12, 2026 · 10:00 AM', event: '🔔 Hackathon Begins!', loc: 'IIT Delhi Campus' },
  { date: 'April 12, 2026 · Evening', event: 'Mentorship Sessions & Workshops', loc: 'IIT Delhi Campus' },
  { date: 'April 13, 2026 · 10:00 AM', event: 'Final Submissions & Judging', loc: 'IIT Delhi Campus' },
  { date: 'April 13, 2026 · 4:00 PM', event: '🏆 Valedictory & Prize Distribution', loc: 'IIT Delhi Campus' },
];

const Roadmap: React.FC = () => {
  return (
    <section id="timeline" className="roadmap">
      <div className="section-label">Schedule</div>
      <h2 className="section-title">Roadmap to Devcation</h2>

      <div className="timeline">
        {milestones.map((m, i) => (
          <div key={i} className={`timeline-item ${m.active ? 'active' : ''}`}>
            <div className="timeline-date">{m.date}</div>
            <div className="timeline-event">{m.event}</div>
            <div className="timeline-loc">📍 {m.loc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
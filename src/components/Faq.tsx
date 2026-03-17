import React from 'react';
import type { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    q: 'Is Devcation free to participate?',
    a: 'Absolutely! Devcation 2026 is completely free of cost for all registered participants. No registration fees, no entry fees.',
  },
  {
    q: 'Who can participate?',
    a: 'Any UG or PG student enrolled in any Indian college or university. Students from all disciplines are welcome — you don\'t have to be a CS student!',
  },
  {
    q: 'What is the team size?',
    a: 'Teams of 2 to 4 members. You can also participate solo, but we encourage forming teams for the best experience.',
  },
  {
    q: 'Where do I register?',
    a: 'Register on Unstop at the official Devcation Delhi 2026 listing. Submit your idea before April 4, 2026 to be considered.',
  },
  {
    q: 'Will there be mentors and workshops?',
    a: 'Yes! Experienced mentors from industry and academia will be available throughout the hackathon. Workshops on TigerGraph and other sponsor tools will be conducted on-site.',
  },
  {
    q: 'What is the hackathon venue?',
    a: 'The hackathon will be held on the IIT Delhi campus, New Delhi. Travel and accommodation details will be shared with shortlisted teams.',
  },
  {
    q: 'Can I submit to multiple tracks?',
    a: 'Yes! Your project can be submitted to multiple tracks if it qualifies. The TigerGraph challenge can be combined with any of the main tracks.',
  },
  {
    q: 'Are cross-college teams allowed?',
    a: 'Absolutely — cross-college teams are fully allowed and encouraged! Diverse teams often build the most innovative solutions.',
  },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="faq">
      <div className="section-label">FAQs</div>
      <h2 className="section-title">Got Questions?</h2>

      <div className="faq-grid">
        {faqs.map((item, i) => (
          <div key={i} className="faq-item">
            <div className="faq-q">
              <span className="faq-q-badge">Q</span>
              {item.q}
            </div>
            <div className="faq-a">{item.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
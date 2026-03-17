import React from 'react';

const mainPrizes = [
  { medal: '🥈', rank: '2nd Place', value: '₹1L', desc: 'Cash + sponsor goodies + swag', variant: 'silver' as const },
  { medal: '🥇', rank: '1st Place — Grand Winner', value: '₹1.5L', desc: 'Cash + trophies + special sponsor perks', variant: 'gold' as const },
  { medal: '🥉', rank: '3rd Place', value: '₹50K', desc: 'Cash + sponsor goodies + swag', variant: 'bronze' as const },
];

const specialPrizes = [
  { icon: '🔷', name: 'TigerGraph Best Use', value: 'Special Prize' },
  { icon: '🎨', name: 'Best Design Track', value: 'Vouchers + Goodies' },
  { icon: '🌍', name: 'Best Social Impact', value: 'Vouchers + Goodies' },
  { icon: '⭐', name: 'All Participants', value: 'Sponsor Perks' },
];

const Prizes: React.FC = () => {
  return (
    <section id="prizes" className="prizes">
      <div className="section-label">Rewards</div>
      <h2 className="section-title">Prize Pool</h2>

      <div className="prize-pool-banner">
        <div className="prize-pool-total">₹3 LAKH+</div>
        <div className="prize-pool-label">Total Prize Pool — Cash + Goodies + Sponsor Perks</div>
      </div>

      <div className="prizes-grid">
        {mainPrizes.map((p) => (
          <div key={p.rank} className={`prize-card ${p.variant}`}>
            <span className="prize-medal">{p.medal}</span>
            <div className="prize-rank">{p.rank}</div>
            <div className="prize-value">{p.value}</div>
            <div className="prize-desc">{p.desc}</div>
          </div>
        ))}
      </div>

      <div className="special-prizes">
        {specialPrizes.map((s) => (
          <div key={s.name} className="special-prize">
            <span className="special-prize-icon">{s.icon}</span>
            <div>
              <div className="special-prize-name">{s.name}</div>
              <div className="special-prize-val">{s.value}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prizes;
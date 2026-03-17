import React from 'react';
import type { Landmark } from '../types';
const landmarks: Landmark[] = [
  { emoji: '🏛️', name: 'India Gate', desc: 'eternal flame of code' },
  { emoji: '🕌', name: 'Qutub Minar', desc: 'towering solutions' },
  { emoji: '🏰', name: 'Red Fort', desc: 'strength in legacy' },
  { emoji: '🕍', name: 'Lotus Temple', desc: 'open to all ideas' },
  { emoji: '🌳', name: 'Deer Park', desc: 'where mascots roam' },
  { emoji: '🚇', name: 'Metro', desc: 'connect fast' },
];

const ThemeDelhi: React.FC = () => {
  return (
    <section id="theme">
      <h2 className="section-title section-center">✨ Delhi through the lens ✨</h2>
      <div className="grid-3">
        {landmarks.map((item, i) => (
          <div className="card" key={i}>
            <div className="card-emoji">{item.emoji}</div>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThemeDelhi;
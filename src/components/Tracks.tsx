import React, { useState, useRef, useCallback } from "react";

interface Track {
  icon: string;
  name: string;
  desc: string;
  tag: string;
  accent: string;
  accentRgb: string;
  number: string;
}

const tracks: Track[] = [
  {
    icon: "💻",
    name: "Hack & Solve",
    desc: "Build a real-world solution using tech like AI, data, or security.",
    tag: "Prototype",
    accent: "#c084fc",
    accentRgb: "192,132,252",
    number: "01",
  },
  {
    icon: "🎨",
    name: "Design & Solve",
    desc: "Craft intuitive UI/UX with wireframes and interactive prototypes.",
    tag: "Design",
    accent: "#fcd34d",
    accentRgb: "252,211,77",
    number: "02",
  },
  {
    icon: "🌐",
    name: "Tech for Good",
    desc: "Build impactful solutions for real social challenges.",
    tag: "Impact",
    accent: "#2dd4bf",
    accentRgb: "45,212,191",
    number: "03",
  },
  {
    icon: "🔷",
    name: "TigerGraph Challenge",
    desc: "Use graph databases to build intelligent connected systems.",
    tag: "Sponsor",
    accent: "#f472b6",
    accentRgb: "244,114,182",
    number: "04",
  },
];

function TrackCard({ track }: { track: Track }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    setTilt({
      x: ((y / r.height) - 0.5) * -8,
      y: ((x / r.width) - 0.5) * 8,
    });
  }, []);

  const onLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="track-card"
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      <div className="track-inner">
        <div className="track-number">{track.number}</div>

        <div
          className="track-icon"
          style={{
            borderColor: `rgba(${track.accentRgb},0.4)`,
          }}
        >
          {track.icon}
        </div>

        <h3
          className="track-title"
          style={{ color: track.accent }}
        >
          {track.name}
        </h3>

        <p className="track-desc">{track.desc}</p>

        <span
          className="track-tag"
          style={{
            color: track.accent,
            borderColor: `rgba(${track.accentRgb},0.5)`,
          }}
        >
          {track.tag}
        </span>
      </div>
    </div>
  );
}

const Tracks: React.FC = () => {
  return (
    <section id="tracks" className="tracks">
      
      <style>{`
        .tracks {
          padding: 100px 20px;
          color: white;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
          max-width: 1100px;
          margin: auto;
        }

        .track-card {
          border-radius: 16px;
          padding: 2px;
          background: rgba(147,51,234,0.15);
          transition: transform 0.3s ease;
        }

        .track-inner {
          background: #0a0118;
          border-radius: 14px;
          padding: 1.5rem;
          position: relative;
        }

        .track-number {
          position: absolute;
          top: 10px;
          right: 15px;
          font-size: 2.5rem;
          opacity: 0.05;
        }

        .track-icon {
          width: 48px;
          height: 48px;
          border: 1px solid;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          margin-bottom: 1rem;
        }

        .track-title {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }

        .track-desc {
          font-size: 0.85rem;
          opacity: 0.8;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .track-tag {
          font-size: 0.7rem;
          padding: 4px 10px;
          border-radius: 20px;
          border: 1px solid;
        }

        /* 📱 MOBILE */
        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>

      <h2 className="section-title">Tracks</h2>

      <div className="grid">
        {tracks.map((track, index) => (
          <TrackCard key={index} track={track} />
        ))}
      </div>
    </section>
  );
};

export default Tracks;
import React, { useEffect } from "react";
import bgVideo from "../assets/video.mp4";
import "../styles/App.css"; // make sure this exists

interface Props {
  onFinish: () => void;
}

const IntroVideo: React.FC<Props> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 9000); // fallback if video doesn't trigger end

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="hero">
      <video
        autoPlay
        muted
        playsInline
        className="hero-video"
        onEnded={onFinish} // 🔥 best UX (auto switch when video ends)
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="overlay"></div>
    </div>
  );
};

export default IntroVideo;
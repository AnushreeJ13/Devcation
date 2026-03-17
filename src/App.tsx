import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Mascot from "./components/Mascot";
import Tracks from "./components/Tracks";
import Prizes from "./components/Prizes";
import Roadmap from "./components/Roadmap";
import Sponsors from "./components/Sponsors";
import FAQ from "./components/Faq";
import Footer from "./components/Footer";
import IntroVideo from "./components/IntroVideo";
import "./styles/App.css";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  // 🚫 Lock / unlock scroll
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showIntro]);

  // 🔁 Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.target.classList.toggle("visible", e.isIntersecting)
        ),
      { threshold: 0.08 }
    );

    document.querySelectorAll(".reveal").forEach((el) =>
      observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {showIntro ? (
        <IntroVideo onFinish={() => setShowIntro(false)} />
      ) : (
        <>
          <div className="circuit-bg" aria-hidden="true" />
          <div className="app">
            <Navbar />
            <Hero />
            <About />
            <Mascot />
            <Tracks />
            <Prizes />
            <Roadmap />
            <Sponsors />
            <FAQ />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default App;
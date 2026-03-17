import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Mascot from './components/Mascot';
import Tracks from './components/Tracks';
import Prizes from './components/Prizes';
import Roadmap from './components/Roadmap';
import Sponsors from './components/Sponsors.tsx';
import FAQ from './components/Faq.tsx';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  // Global scroll-reveal for all .reveal elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
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
  );
}

export default App;
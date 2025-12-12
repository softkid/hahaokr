import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import './App.css';

const LOGO_URL = "https://assets.softr-files.com/applications/2d9c2041-e607-4a3e-b316-d2b114351bb1/assets/4e90a858-1b94-4b90-a185-4e7c43238f1c.png?rnd=1699294960741";

const Section = ({ children, id, className = "" }) => (
  <section id={id} className={`section ${className}`}>
    <div className="container">
      {children}
    </div>
  </section>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo-container" onClick={() => scrollTo('home')}>
          <img src={LOGO_URL} alt="HAHAO Logo" className="logo-img" />
          <span className="logo-text">HAHAO</span>
        </div>

        <div className="nav-links">
          <button onClick={() => scrollTo('projects')} className="nav-link">Projects</button>
          <button onClick={() => scrollTo('team')} className="nav-link">Team</button>
          <button onClick={() => scrollTo('philosophy')} className="nav-link">Philosophy</button>
        </div>

        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu"
          >
            <button onClick={() => scrollTo('projects')} className="nav-link">Projects</button>
            <button onClick={() => scrollTo('team')} className="nav-link">Team</button>
            <button onClick={() => scrollTo('philosophy')} className="nav-link">Philosophy</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <Section id="home" className="hero-section">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="hero-title">
        Global Cultural <br />
        <span className="hero-subtitle">Content Enterprise</span>
      </h1>
      <p className="hero-desc">
        Connecting the world through art, culture, and innovation.
      </p>
    </motion.div>
  </Section>
);

const Projects = () => {
  const projects = [
    { title: "HAHAO Story", url: "https://hahaostory.com", desc: "Crafting narratives that resonate." },
    { title: "HAHAO Place", url: "https://hahaoplace.com", desc: "Spaces designed for inspiration." }
  ];

  return (
    <Section id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="projects-grid"
      >
        {projects.map((p, i) => (
          <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="project-card group">
            <div className="project-content">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <span className="visit-link">
                Visit Site <ArrowRight size={16} />
              </span>
            </div>
          </a>
        ))}
      </motion.div>
    </Section>
  );
};

// Placeholder content if exact text is unavailable
const AboutText = "At HAHAO, we believe in the power of storytelling and spatial design to bridge cultures. Our team is a diverse collective of artists, engineers, and visionaries dedicated to creating experiences that matter.";
const CredoText = "Creativity is our currency. Integrity is our compass. We strive for excellence in every pixel, every brick, and every word. We are not just building brands; we are building legacies.";

const Team = () => (
  <Section id="team">
    <div className="team-grid">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="about-title">About <span className="hero-subtitle">Us</span></h2>
        <p className="about-text">
          {AboutText}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="team-image-placeholder"
      >
        Visualizing the Future
      </motion.div>
    </div>
  </Section>
);

const Philosophy = () => (
  <Section id="philosophy" className="philosophy-section">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="credo-container"
    >
      <h2 className="credo-title">Our <span className="hero-subtitle">Credo</span></h2>
      <div style={{ position: 'relative' }}>
        <span className="quote-mark quote-left">“</span>
        <p className="credo-text">
          {CredoText}
        </p>
        <span className="quote-mark quote-right">“</span>
      </div>
    </motion.div>
  </Section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <img src={LOGO_URL} alt="HAHAO" className="footer-logo" />
      <p>&copy; {new Date().getFullYear()} HAHAO. All rights reserved.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="app-root">
      <NavBar />
      <Hero />
      <Projects />
      <Team />
      <Philosophy />
      <Footer />
    </div>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import hahaoplaceLogo from './assets/hahaoplace.svg';
import hahaostoryLogo from './assets/hahaostory.svg';
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
    { title: "HAHAO Story", url: "https://hahaostory.com", desc: "Crafting narratives that resonate", logo: hahaostoryLogo },
    { title: "HAHAO Place", url: "https://hahaoplace.com", desc: "Spaces designed for inspiration", logo: hahaoplaceLogo }
  ];

  return (
    <Section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: '4rem', marginTop: '2rem', textAlign: 'center' }}
      >
        <h2 className="about-title">Our <span className="hero-subtitle">Projects</span></h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="projects-grid"
      >
        {projects.map((p, i) => (
          <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className={`project-card group ${p.title === "HAHAO Place" ? "project-card-place" : ""}`}>
            <div className="project-content">
              {p.logo && (
                <img src={p.logo} alt={`${p.title} Logo`} className="project-logo" />
              )}
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
const CredoText = `We believe that our first responsibility is for craft makers, craft sellers, craft exhibitors, craft educationers, and anyone who uses our craft platform services. We must constantly strive to provide value, provide various crafts, and maintain reasonable prices. Customers' orders must be processed quickly and accurately. Our business partners should have the opportunity to make a fair profit.

We take responsibility for the employees we work with all over the world. We must provide an inclusive working environment in which each person should be considered an individual. We must respect their diversity and dignity and acknowledge their merits. They should have a sense of security, a sense of accomplishment, and a sense of purpose in their jobs. Compensation must be fair and appropriate, and working conditions must be clean, orderly and safe. We need to support the health and well-being of our employees and help them complete their family and other personal responsibilities. Employees should be free to make suggestions and complaints. Qualified people should have equal opportunities for employment, development and promotion. We must provide competent leaders and their actions must be just and ethical.

We are responsible for the communities in which we live and work, as well as the world community. We need to help people become healthier by exhibiting and supporting them in more places around the world for better access and purchasing crafts. We should be good citizens. We need to support good work and philanthropy, support better health and education, and pay fair taxes. We must keep the properties we have the privileges to use in good condition while protecting the environment and natural resources.

Our ultimate responsibility lies with our shareholders. Businesses need to make healthy profits. We have to experiment with new ideas. Continue research, develop innovative programs, invest for the future, and pay for mistakes. Buy new equipment, provide new facilities, and launch new products. Reserve funds should be prepared for adverse situations. When operating on these principles, shareholders must realize their fair returns.`;

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

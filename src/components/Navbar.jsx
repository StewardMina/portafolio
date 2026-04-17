import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="navbar-logo">STEWARD</a>
      <ul className="navbar-links">
        <li><a href="#about"><span className="nav-number">01.</span>Sobre mí</a></li>
        <li><a href="#skills"><span className="nav-number">02.</span>Skills</a></li>
        <li><a href="#projects"><span className="nav-number">03.</span>Proyectos</a></li>
        <li><a href="#contact"><span className="nav-number">04.</span>Contacto</a></li>
        <li><a href="/cv.pdf" target="_blank" rel="noreferrer" className="navbar-cv">CV</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

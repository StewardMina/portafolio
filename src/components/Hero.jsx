import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <p className="hero-greeting">Hola, mi nombre es</p>
        <h1 className="hero-name">Steward Mina Cosme.</h1>
        <h2 className="hero-title">Desarrollo web.</h2>
        <p className="hero-description">
          Soy un desarrollador fullstack apasionado por crear aplicaciones web
          modernas y funcionales. Me especializo en React, Vue y Node.js.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">Ver proyectos</a>
          <a href="#contact" className="btn-primary">Contáctame</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import foto from '../assets/images/foto.jpg.png';
import '../styles/About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">
          <span>01.</span> Sobre mí
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hola, soy <strong>Steward Mina Cosme</strong>, un desarrollador web fullstack
              con pasión por construir productos digitales que vivan en internet.
              Me interesa crear experiencias accesibles y con buen rendimiento.
            </p>
            <p>
              Trabajo con tecnologías como React, Vue y Node.js en el día a día.
              Siempre estoy aprendiendo algo nuevo y buscando mejorar mis habilidades.
            </p>
          
          </div>
          <div className="about-image-wrapper">
            <img src={foto} alt="Steward Mina Cosme" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

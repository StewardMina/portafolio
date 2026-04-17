import skills from '../data/skills';
import '../styles/Skills.css';

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">
          <span>02.</span> Skills
        </h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

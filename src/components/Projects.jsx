import projects from '../data/projects';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">
          <span>03.</span> Proyectos
        </h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

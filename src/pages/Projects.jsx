import React from "react";
import { Link } from "react-router-dom";
import projects from "../projects";

const Projects = () => {
  return (
    <div>
      <h1>Our Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="project-card"
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import { projects } from "../data/projects.js";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>Our Latest Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`}>View Project</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

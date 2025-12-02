import React from "react";
import { projects } from "../data/projects.js";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="projects-page">
      <h1>All Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

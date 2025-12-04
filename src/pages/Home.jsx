import React from "react";
import projects from "../projects";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Pantelides Bros</h1>

      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.slice(0, 3).map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

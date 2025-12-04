import React from "react";
import * as ProjectsModule from "../data/projects.js";
import { Link } from "react-router-dom";

const projects = ProjectsModule.default ?? ProjectsModule.projects ?? [];

export default function Projects() {
  return (
    <section className="projects-page max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Projects</h1>

      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article key={project.id} className="project-card bg-white rounded shadow overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <Link to={`/projects/${project.id}`} className="text-amber-600 mt-3 inline-block">View Details →</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects.js";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => String(p.id) === String(id));

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold">Project not found.</h2>
      </div>
    );
  }

  return (
    <div className="project-detail max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded" />
      <p className="text-gray-700 mt-4">{project.description}</p>
    </div>
  );
}

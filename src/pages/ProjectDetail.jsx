import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects.js";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <h2>Project not found.</h2>;
  }

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
    </div>
  );
}

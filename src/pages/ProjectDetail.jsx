import React from "react";
import { useParams } from "react-router-dom";
import projects from "../projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) return <h2>Project not found</h2>;

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetail;

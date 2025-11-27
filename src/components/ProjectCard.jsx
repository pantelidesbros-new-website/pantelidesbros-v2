import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <article className="rounded-lg overflow-hidden shadow hover:shadow-lg bg-white">
      <img src={project.image} alt={project.title} className="w-full h-44 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
        <div className="text-sm text-gray-500 mb-2">{project.location} • {project.category}</div>
        <p className="text-gray-700 mb-3">{project.summary}</p>
        <Link to={`/projects/${project.id}`} className="text-amber-600 font-medium">View project →</Link>
      </div>
    </article>
  )
}


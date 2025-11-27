import React from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetail(){
  const { id } = useParams()
  const project = projects.find(p => p.id === id)
  if(!project) return <div className="max-w-6xl mx-auto px-4 py-12">Project not found</div>

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded" />
      <h1 className="text-3xl font-bold mt-6">{project.title}</h1>
      <div className="text-gray-500 mb-4">{project.location} • {project.category}</div>
      <p className="text-gray-700">{project.description}</p>
    </section>
  )
}


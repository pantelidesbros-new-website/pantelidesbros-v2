import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects(){
  const [filter, setFilter] = useState('All')
  const cats = ['All', ...Array.from(new Set(projects.map(p => p.category)))]
  const list = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="space-x-2">
          {cats.map(c => (
            <button key={c} onClick={() => setFilter(c)} className={`px-3 py-2 rounded ${filter===c ? 'bg-amber-500 text-black' : 'bg-gray-100'}`}>
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}


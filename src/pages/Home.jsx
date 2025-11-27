import React from 'react'
import Hero from '../components/Hero'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Home(){
  const featured = projects.slice(0,3)
  return (
    <div>
      <Hero />
      <section className="max-w-6xl mx-auto px-4 py-12 -mt-20 bg-white">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Years of Experience</h3>
              <p className="text-gray-600">Decades of delivery across Cyprus.</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Quality Projects</h3>
              <p className="text-gray-600">Residential, commercial & infrastructure.</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Sustainable Approach</h3>
              <p className="text-gray-600">Built for long term value and minimal environmental impact.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


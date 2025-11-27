import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-900">Pantelides Bros</Link>

        <nav className="space-x-6 text-gray-700 hidden md:flex">
          <Link to="/projects" className="hover:text-amber-600">Projects</Link>
          <Link to="/about" className="hover:text-amber-600">About</Link>
          <Link to="/contact" className="hover:text-amber-600">Contact</Link>
        </nav>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

function MobileMenu() {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        aria-label="Open menu"
        className="p-2 rounded-md border"
      >
        ☰
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow z-20">
          <Link to="/projects" className="block px-4 py-2 hover:bg-gray-50" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-gray-50" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-gray-50" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  )
}


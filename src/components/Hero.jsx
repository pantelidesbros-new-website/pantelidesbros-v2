import React from 'react'

export default function Hero({ title, subtitle, ctaText }) {
  return (
    <section className="relative h-[60vh] md:h-[75vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{title || 'Shaping Cyprus — Building Tomorrow'}</h1>
        <p className="text-lg md:text-xl mb-6">{subtitle || 'Modern construction, trusted delivery and sustainable developments.'}</p>
        <div className="flex justify-center gap-4">
          <a href="/projects" className="inline-block bg-amber-500 text-black px-6 py-3 rounded-lg font-medium">{ctaText || 'View Projects'}</a>
          <a href="/contact" className="inline-block border border-white text-white px-6 py-3 rounded-lg">Contact Us</a>
        </div>
      </div>
    </section>
  )
}


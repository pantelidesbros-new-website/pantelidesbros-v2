import React from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact(){
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-gray-700 mb-6">Send us a message and we'll get back to you.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Get in touch</h3>
          <p className="text-gray-700 mb-4">info@pantelides.com • +357 22 000000</p>
          <div className="text-gray-700">Office: Strovolos, Nicosia</div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}


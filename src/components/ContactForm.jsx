import React, { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    // For now this demo form does not send real emails.
    setStatus('Message sent (demo). We will connect a real form later.')
    setTimeout(() => setStatus(null), 5000)
  }

  return (
    <form className="space-y-4 max-w-xl" onSubmit={handleSubmit}>
      <input className="w-full border px-3 py-2 rounded" placeholder="Your name" name="name" required />
      <input type="email" className="w-full border px-3 py-2 rounded" placeholder="Your email" name="email" required />
      <input className="w-full border px-3 py-2 rounded" placeholder="Subject" name="subject" />
      <textarea className="w-full border px-3 py-2 rounded" rows="6" placeholder="Message" name="message" required></textarea>
      <div>
        <button className="bg-amber-500 text-black px-6 py-2 rounded">Send Message</button>
      </div>
      {status && <div className="text-sm text-green-600 mt-2">{status}</div>}
    </form>
  )
}


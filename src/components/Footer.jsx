import React from 'react'
export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">© {new Date().getFullYear()} Pantelides Bros</div>
        <div>info@pantelides.com • +357 22 000000</div>
      </div>
    </footer>
  )
}



import React from 'react'
import coach from "../assets/coach.jpg"

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center text-center py-20 bg-blue-50">
      <img 
        src={coach} 
        alt="Coach Avatar" 
        className="w-82 h-82 rounded-full mb-6" 
      />
      <h1 className="text-4xl font-bold text-blue-600 mb-2">Smith Wiggles</h1>
      <p className="text-lg text-gray-600 mb-6">
        Helping busy professionals unlock their potential.
      </p>
      <a 
        href="#booking" 
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition duration-300"
      >
        Book a Session
      </a>
    </section>
  );
}

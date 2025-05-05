
import React from 'react'


export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
     
        <div className="text-2xl font-bold">
          <a href="/" className="text-white">PeakMentor</a>
        </div>
       
        <a href="#booking" className="bg-blue-800 px-6 py-3 rounded-xl hover:bg-blue-900">
          Book a Session
        </a>
      </div>
    </header>
  );
}

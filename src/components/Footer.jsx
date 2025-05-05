

import React from 'react'


export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="/" className="text-white">PeakMentor</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-200">Facebook</a>
          <a href="#" className="hover:text-blue-200">Twitter</a>
          <a href="#" className="hover:text-blue-200">Instagram</a>
        </div>

        <div className="text-sm">
          &copy; 2025 PeakMentor. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


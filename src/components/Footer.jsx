

import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
      
        <div className="text-xl font-bold">
          <a href="/" className="text-white">PeakMentor</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-200" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-blue-200" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-blue-200" aria-label="Instagram">
            <Instagram size={20} />
          </a>
        </div>

       
        <div className="text-sm text-center md:text-right">
          &copy; 2025 PeakMentor. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

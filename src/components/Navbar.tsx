"use client";

import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="w-full justify-between grid place-items-center py-10 px-8 bg-white dark:bg-gray-900 shadow-md fixed right-0 left-0 z-10">      {/* Menu navigasi di tengah untuk layar sedang/besar */}
      <ul className="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
        <li><a href="#hero" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Home</a></li>
        <li><a href="#about" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">About</a></li>
        <li><a href="#experiences" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Experience</a></li>
        <li><a href="#stack" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Stack</a></li>
        <li><a href="#projects" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Projects</a></li>
        <li><a href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Contact</a></li>
      </ul>
      
      {/* Toggle tema di kanan */}
      <div className="flex items-center gap-4">
        {/* Menu toggle untuk layar kecil */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-800 dark:text-gray-200">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        
        {/* <ThemeToggle /> */}
      </div>
        {/* Menu mobile - muncul saat diklik pada layar kecil */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-md py-4">
          <ul className="flex flex-col items-center gap-4">
            <li><a href="#hero" onClick={() => setIsMenuOpen(false)} className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">About</a></li>
            <li><a href="#experiences" onClick={() => setIsMenuOpen(false)} className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Experience</a></li>
            <li><a href="#stack" onClick={() => setIsMenuOpen(false)} className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Stack</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

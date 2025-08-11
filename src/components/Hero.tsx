import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-900 to-gray-900 pt-24" id="hero">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Hi, I am <span className="text-blue-400">Andika Ryan Nurshodiq</span></h1>
      <p className="text-lg md:text-2xl text-gray-300 mb-8">Web Developer</p>
      <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">Lihat Proyek</a>
    </section>
  );
}


import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 to-white dark:from-blue-900 dark:to-gray-900 pt-24" id="hero">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">Hi, I am <span className="text-blue-600 dark:text-blue-400">Andika Ryan Nurshodiq</span></h1>
      <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-8">Web Developer</p>
      <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition dark:bg-blue-700 dark:hover:bg-blue-600">Lihat Proyek</a>
    </section>
  );
}

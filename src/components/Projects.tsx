import React from 'react';

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800" id="projects">
      <h2 className="text-3xl font-bold mb-8 text-blue-600 dark:text-blue-400">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Example projects, replace with your real data */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Project 1</h3>
          <p className="text-gray-700 dark:text-gray-400 mb-2">A short description of project 1.</p>
          <a href="#projects" className="text-blue-500 dark:text-blue-400 hover:underline">View Details</a>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Project 2</h3>
          <p className="text-gray-700 dark:text-gray-400 mb-2">A short description of project 2.</p>
          <a href="#projects" className="text-blue-500 dark:text-blue-400 hover:underline">View Details</a>
        </div>
      </div>
    </section>
  );
}

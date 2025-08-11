"use client";

import React from 'react';

interface TechStackItem {
  name: string;
  icon: React.ReactNode;
  description: string;
}

export default function Stack() {
  // SVG Icons for tech stack
  const techStacks: TechStackItem[] = [
    {
      name: "Frontend Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      description: "Saya mengembangkan aplikasi web yang responsif dan menarik dengan menggunakan React.js, Next.js, dan Tailwind CSS."
    },
    {
      name: "Backend Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126a3.375 3.375 0 012.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
        </svg>
      ),
      description: "Menguasai pembuatan API, manajemen database, dan pengembangan server menggunakan Node.js, Express, dan database seperti MongoDB atau PostgreSQL."
    },
    {
      name: "UI/UX Design",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-purple-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
      description: "Membuat prototype dan desain yang berpusat pada pengguna menggunakan Figma, memastikan pengalaman pengguna yang baik dan antarmuka yang intuitif."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-800" id="stack">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Tech Stack</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStacks.map((stack) => (
            <div 
              key={`stack-${stack.name}`}
              className="bg-gray-900 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-6">{stack.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{stack.name}</h3>
              <p className="text-gray-300">{stack.description}</p>
            </div>
          ))}
        </div>
        
        {/* Technologies List */}
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-6 text-center text-gray-200">Technologies I Work With</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "PHP", "Laravel", "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", 
              "Express", "MongoDB", "PostgreSQL", "Git",
              "REST API", "Figma", "Responsive Design"
            ].map(tech => (
              <span 
                key={tech}
                className="px-4 py-2 bg-gray-900 text-gray-200 rounded-md shadow-sm border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


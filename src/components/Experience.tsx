"use client";

import React from 'react';

interface ExperienceItem {
  period: string;
  position: string;
  company: string;
  companyLink?: string;
  type: string;
  description: string;
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: "Agu - Des 2023",
    position: "Software Engineer",
    company: "Pt. Revolusi Citra Edukasi",
    companyLink: "https://www.revou.co/id",
    type: "Studi Independen",
    description: `
    - Working on a shipping website
    - Working on analyzing and increasing global sales at game publishers`,
    skills: ["Express.js","Pythhon", "Resfull API"]
  },
  {
    period: "Feb - Jun 2024",
    position: "Full-Stack Developer",
    company: "Indi Technology",
    companyLink: "https://web.indi.tech/",
    type: "Internship",
    description: `
    - Working on API using express & mongoDB
    - Working on using laravel, especially the filament and tenancy libraries
    - Creating end to end testing using phpunit.`,
    skills: ["Laravel", "PHP", "Unit Testing", "Restful API", "MongoDB", "Express.js"]
  },
];

export default function Experience() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto" id="experiences">
      <h2 className="text-3xl font-bold mb-10 text-center text-blue-600 dark:text-blue-400">Experience</h2>
      
      <div className="flex flex-col space-y-12">        {experiences.map((exp, idx) => (
          <div key={`${exp.period}-${exp.company}`} className="relative pl-8 md:pl-0">
            {/* Timeline connector (visible on md and larger) */}
            {idx < experiences.length - 1 && (
              <div className="hidden md:block absolute left-[7.5rem] top-8 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            )}
            
            <div className="md:grid md:grid-cols-[150px_1fr] gap-8">
              {/* Period */}
              <div className="font-medium text-gray-500 dark:text-gray-400 mb-2 md:mb-0 md:text-right">
                {exp.period}
              </div>
              
              {/* Content */}
              <div className="relative">
                {/* Timeline dot (visible on md and larger) */}
                {/* <div className="hidden md:block absolute -left-[2.5rem] top-2 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400 border-4 border-white dark:border-gray-900"></div> */}
                
                {/* Mobile timeline (visible on smaller screens) */}
                <div className="md:hidden absolute -left-8 top-2 w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                
                {/* Position and Company */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {exp.position} - {' '}
                  {exp.companyLink ? (
                    <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </h3>
                
                {/* Job Type */}
                <div className="inline-block px-3 py-1 mt-1 mb-3 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full">
                  {exp.type}
                </div>
                
                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-line">
                  {exp.description}
                </p>
                  {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span 
                      key={`${exp.company}-${skill}`}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

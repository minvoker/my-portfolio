import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

/*
 Experience Component
 - Renders a section displaying professional experiences and certifications.
 - Each experience is displayed with title, company, period, and description.
 */

const Experience = ({ theme, experiences }) => {
  return (
    // Experience section container
    <section className="mb-16 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: theme.heading }}>Experience</h2>
      
      {/* List of experience items */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            style={{ backgroundColor: theme.secondaryBg }} 
            className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-opacity-10"
          >
            {/* Header with title, company, and date */}
            <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
              <div className="flex items-center mb-2 sm:mb-0">
                <Briefcase className="mr-3 flex-shrink-0" size={24} style={{ color: theme.accent }} />
                <div>
                  <h3 className="text-xl font-bold" style={{ color: theme.heading }}>{exp.title}</h3>
                  <p className="text-lg" style={{ color: theme.accent }}>{exp.company}</p>
                </div>
              </div>
              <div className="flex items-center text-sm pl-9 sm:pl-0" style={{ color: theme.text }}>
                <Calendar className="mr-2 flex-shrink-0" size={16} style={{ color: theme.accent }} />
                <span>{exp.period}</span>
              </div>
            </div>
            
            {/* Responsibilities List */}
            <ul className="space-y-2 ml-9" style={{ color: theme.text }}>
              {exp.description.map((point, pointIndex) => (
                <li key={pointIndex} className="flex items-start pb-1.5">
                  <span className="mr-2 text-lg leading-[1.2] inline-block" style={{ color: theme.heading }}>•</span>
                  <span className="flex-1">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
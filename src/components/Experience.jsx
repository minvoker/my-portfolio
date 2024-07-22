import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = ({ theme, experiences }) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: theme.heading }}>Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} style={{ backgroundColor: theme.secondaryBg }} className="p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-2">
              <Briefcase className="mr-2" style={{ color: theme.accent }} />
              <h3 className="text-xl font-bold" style={{ color: theme.heading }}>{exp.title}</h3>
            </div>
            <p style={{ color: theme.link }} className="mb-2">{exp.company} | {exp.period}</p>
            <p style={{ color: theme.text }}>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
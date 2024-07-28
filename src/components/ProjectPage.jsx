import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Github, Calendar } from 'lucide-react';

const ProjectPage = ({ projects, theme }) => {
  const { title } = useParams();
  const project = projects.find(p => p.title === decodeURIComponent(title));

  if (!project) {
    return <div><h1>Project not found</h1></div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link 
        to="/projects"
        className="mb-8 inline-flex items-center transition-colors duration-300 hover:underline"
        style={{ color: theme.accent }}
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Projects
      </Link>

      <article className="prose prose-lg mx-auto" style={{ color: theme.text }}>
        <h1 className="text-4xl font-bold mb-4" style={{ color: theme.heading }}>{project.title}</h1>
        
        <div className="flex items-center mb-6" style={{ color: theme.accent }}>
          <Calendar className="mr-2" size={16} />
          <span>{project.year}</span>
        </div>

        <p className="text-xl mb-8" style={{ color: theme.text }}>{project.description}</p>

        {project.image && (
          <div className="mb-8">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 text-s rounded-full" style={{ backgroundColor: theme.buttonBg, color: theme.text }}>
              {tech}
            </span>
          ))}
        </div>

        {project.githubLink && (
          <a 
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center transition-colors duration-300 hover:underline mb-8"
            style={{ color: theme.link }}
          >
            <Github className="mr-2" size={20} />
            View Code
          </a>
        )}

        {project.customText && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: theme.accent }}>Project Details</h2>
            <p style={{ color: theme.text }}>{project.customText}</p>
          </div>
        )}
      </article>
    </div>
  );
};

export default ProjectPage;
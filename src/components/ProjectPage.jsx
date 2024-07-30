import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Github, Calendar, FileText } from 'lucide-react';

/*
 ProjectPage Component
 - Renders a detailed view of a single project.
 - Uses URL parameters to determine which project to display.
 - Shows project title, description, technologies used, links, and additional details.
 */

const ProjectPage = ({ projects, theme }) => {
  const { title } = useParams();
  const project = projects.find(p => p.title === decodeURIComponent(title));

  // If no matching project is found, display an error message
  if (!project) {
    return <div><h1>Project not found</h1></div>;
  }

  return (
    <div className="max-w-4xl mx-auto mb-8">
      {/* Back button */}
      <Link 
        to="/projects"
        className="inline-flex items-center transition-colors duration-300 hover:underline py-4"
        style={{ color: theme.heading }}
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Projects
      </Link>

      {/* Project */}
      <article className="bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg overflow-hidden" style={{ backgroundColor: theme.secondaryBg }}>
        <div className="relative p-6 bg-opacity-30" style={{ backgroundColor: theme.bg }}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-green-400 to-blue-500"></div>
          
          <div className="flex items-center">
            <h1 className="text-3xl font-bold" style={{ color: theme.accent }}>{project.title}</h1>
          </div>
          
          <div className="flex items-center mt-2" style={{ color: theme.text }}>
            <Calendar className="mr-2" size={16} style={{color: theme.accent}} />
            <span>{project.year}</span>
          </div>
          
          <p className="text-xl mt-8 leading-relaxed" style={{ color: theme.text }}>{project.description}</p>
        </div>

        <div className="p-6">
          {project.image && (
            <div className="mb-8">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 text-sm rounded-md font-medium" style={{ backgroundColor: theme.bg, color: theme.text }}>
                {tech}
              </span>
            ))}
          </div>

          {/* Project links */}
          <div className="flex flex-wrap gap-4 mb-8">
            {project.githubLink && (
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-md transition-colors duration-300 hover:opacity-80 border"
                style={{ backgroundColor: theme.buttonBg, color: theme.text, borderColor: theme.accent }}
              >
                <Github className="mr-2" size={20} />
                View Code
              </a>
            )}
            {project.reportLink && (
              <a 
                href={project.reportLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-md transition-colors duration-300 hover:opacity-80 border"
                style={{ backgroundColor: theme.buttonBg, color: theme.text, borderColor: theme.accent }}
              >
                <FileText className="mr-2" size={20} />
                View Full Report
              </a>
            )}
          </div>

          {/* Project details */}
          {project.customText && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: theme.heading }}>Project Details</h2>
              <div className="space-y-4 p-4 rounded-lg" style={{ backgroundColor: theme.bg, color: theme.text }}>
                {Array.isArray(project.customText) ? (
                  project.customText.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed pb-2">{paragraph}</p>
                  ))
                ) : (
                  <p className="leading-relaxed">{project.customText}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default ProjectPage;
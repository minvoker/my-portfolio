import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = ({ theme, gitLink, linkedinLink, emailLink }) => {

  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex items-center justify-center pb-16" style={{ backgroundColor: theme.bg }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-2/3 mb-12 lg:mb-0 space-y-10">
            <h1 className="text-6xl font-bold" style={{ color: theme.heading }}>Max Harrison</h1>
            <p className="text-2xl" style={{ color: theme.accent }}>Software Developer</p>
            <p className="text-xl" style={{ color: theme.text }}>
              Welcome to my portfolio. I'm Max, a developer passionate about creating things and learning new technologies.
            </p>
            <p className="text-lg" style={{ color: theme.text }}>
              I'm a current Computer Science undergrad at Swinburne double majoring in Software Development and AI.
            </p>
            <p className="text-lg font-semibold" style={{ color: theme.comment }}>
              // When I'm not working, I like to read books, draw, and learn languages.
            </p>
            <div className="flex space-x-4 pt-4">
              <button 
                onClick={() => navigate("/projects")}
                className="px-6 py-3 rounded-md text-lg transition-colors duration-300"
                style={{ backgroundColor: theme.buttonBg, color: theme.text }}
                onMouseEnter={(e) => e.target.style.backgroundColor = theme.buttonHoverBg}
                onMouseLeave={(e) => e.target.style.backgroundColor = theme.buttonBg}
              >
                View Projects
              </button>
              <button 
                onClick={() => console.log('Download Resume')} 
                className="px-6 py-3 rounded-md text-lg transition-colors duration-300"
                style={{ backgroundColor: theme.buttonBg, color: theme.text }}
                onMouseEnter={(e) => e.target.style.backgroundColor = theme.buttonHoverBg}
                onMouseLeave={(e) => e.target.style.backgroundColor = theme.buttonBg}
              >
                Download Resume
              </button>
            </div>
          </div>
          <div className="lg:w-1/3 flex flex-col items-center">
            <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-12">
              <span className="text-9xl" role="img" aria-label="Laptop">💻</span>
            </div>
            <div className="flex space-x-8">
              <a href={gitLink} target="_blank" rel="noopener noreferrer" style={{ color: theme.link }}>
                <Github size={36} />
              </a>
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer" style={{ color: theme.link }}>
                <Linkedin size={36} />
              </a>
              <a href={emailLink} style={{ color: theme.link }}>
                <Mail size={36} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} color={theme.text} />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>
    </section>
  );
};

export default Hero;
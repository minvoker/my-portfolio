import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

/*
 Hero Component
 - Renders the main landing section of the portfolio website.
 - Displays personal information, introduction, and navigation buttons.
 - Includes social media links and a decorative image.
 */

const Hero = ({ theme, gitLink, linkedinLink, emailLink }) => {
  const navigate = useNavigate();

  const buttonStyle = {
    backgroundColor: theme.buttonBg,
    color: theme.text
  };

  return (
    <section className="min-h-screen flex flex-col justify-between relative w-full" style={{ backgroundColor: theme.bg }}>
      {/* Main content area */}
      <div className="flex-grow flex items-center justify-center relative z-10 w-full max-h-[90vh]">
      <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left side: Info */}
            <div className="lg:w-2/3 space-y-10">
              <h1 className="text-4xl md:text-6xl font-bold" style={{ color: theme.heading }}>Max Harrison</h1>
              <p className="text-xl md:text-2xl" style={{ color: theme.accent }}>Software Developer</p>
              <p className="text-lg md:text-xl" style={{ color: theme.text }}>
                Welcome to my portfolio. I'm Max, a developer passionate about creating things and learning new technologies.
              </p>
              <p className="text-base md:text-lg" style={{ color: theme.text }}>
                I'm a current Computer Science undergrad at Swinburne double majoring in Software Development and AI.
              </p>
              <p className="text-base md:text-lg font-semibold" style={{ color: theme.comment }}>
                // When I'm not working, I like to read books, draw, and learn languages.
              </p>
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <button 
                  onClick={() => navigate("/projects")}
                  className="px-8 py-3 rounded-md text-lg transition-colors duration-300"
                  style={buttonStyle}
                  onMouseEnter={(e) => e.target.style.backgroundColor = theme.buttonHoverBg}
                  onMouseLeave={(e) => e.target.style.backgroundColor = theme.buttonBg}
                >
                  View Projects
                </button>
              </div>
            </div>
            {/* Right side: Image and social links */}
            <div className="lg:w-1/3 flex flex-col items-center mt-10 lg:mt-0">
              {/* Hide image on small screens */}
              <div className="hidden lg:flex w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-blue-500 to-green-500 rounded-full items-center justify-center mb-12">
                <span className="text-7xl md:text-9xl" role="img" aria-label="Laptop">💻</span>
              </div>
              {/* Social media links */}
              <div className="flex space-x-8 mt-8 lg:mt-0">
                <a href={gitLink} target="_blank" rel="noopener noreferrer" style={{ color: theme.heading }}>
                  <Github size={32} />
                </a>
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer" style={{ color: theme.heading }}>
                  <Linkedin size={32} />
                </a>
                <a href={emailLink} style={{ color: theme.heading }}>
                  <Mail size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator TO-DO: adjust pos*/}
      <div className="flex justify-center pb-10 relative z-20">
        <ChevronDown size={32} color={theme.text} className="animate-bounce" />
      </div>
      {/* Gradient */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1/4 w-full" 
        style={{
          background: 'linear-gradient(to bottom, rgba(30,30,30,0) 0%, rgba(24,24,24,1) 100%)',
        }}
      ></div>
    </section>
  );
};

export default Hero;
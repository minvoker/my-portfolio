import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Sun, Moon, Mail, Linkedin, Calendar } from 'lucide-react';
import Hero from './components/Hero';
import Projects, { projects } from './components/Projects';
import Experience from './components/Experience';
import ProjectPage from './components/ProjectPage';

import { PythonIcon, JavaScriptIcon, ReactIcon, AWSIcon, GitIcon, GithubIcon, CppIcon, NodejsIcon, SQLIcon, TailwindIcon, AgileIcon, 
  HTMLIcon, CSSIcon } from './assets/icons';

// TODO: Clean up code and add comments for future, XL screen view
// To be re-added when I decide light theme colours
const ThemeToggle = ({ isDark, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="p-2 rounded-md transition-colors duration-200"
    style={{ backgroundColor: isDark ? '#2d2d30' : '#ffffff' }}
  >
    {isDark ? <Sun size={20} color="#d4d4d4" /> : <Moon size={20} color="#000000" />}
  </button>
);

const SkillIcon = ({ name, icon, theme }) => (
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 flex items-center justify-center mb-2">
      <img src={icon} alt={name} className="max-w-full max-h-full object-contain" />
    </div>
    <span className="text-sm text-center" style={{ color: theme.text }}>{name}</span>
  </div>
);

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const gitLink = "https://github.com/minvoker";
  const linkedinLink = "https://linkedin.com/in/harrison-max";
  const emailLink = "mailto:maxharro20@gmail.com";

  const theme = {
    bg: isDarkMode ? '#1e1e1e' : '#ffffff',
    secondaryBg: isDarkMode ? '#252526' : '#f3f3f3',
    text: isDarkMode ? '#d4d4d4' : '#000000',
    heading: isDarkMode ? '#569cd6' : '#0000ff',
    link: isDarkMode ? '#9cdcfe' : '#0000ff',
    accent: isDarkMode ? '#4ec9b0' : '#267f99',
    comment: isDarkMode ? '#608b4e' : '#008000',
    buttonBg: isDarkMode ? '#2d2d30' : '#e1e1e1',
    buttonHoverBg: isDarkMode ? '#3e3e42' : '#d1d1d1',
  };

  const experiences = [
    {
      title: "Cloud/Network Engineer",
      company: "Bishopsgate Capital",
      period: "Jun 2024 - Current",
      description: [
        "Led the migration of on-premises infrastructure to AWS, optimizing cloud services and enhancing security protocols.",
        "Implemented firewalls and VPNs for secure remote access.",
        "Transitioned from Azure DB to AWS with a focus on security and redundancy.",
        "Network Administration and Troubleshooting.",
        "Developed business continuity plans.",
        "Conducted regular security audits",
        "Documented all processes to ensure operational consistency and knowledge transfer."
      ]
    },
    {
      title: "Teaching Assistant",
      company: "Code Camp",
      period: "Sep 2023 - Jun 2024",
      description: [
        "Delivered beginner-level lessons on Scratch, Python, and JavaScript for primary-aged students.",
        "Conducted problem-solving exercises and collaborative projects."
      ]
    },
    {
      title: "AWS Certified",
      company: "Amazon Web Services",
      period: "Jan 2024",
      description: [
        "Certified Cloud Practitioner."
      ]
    },
  ];

  const skills = [
    { name: "Python", icon: PythonIcon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "React", icon: ReactIcon },
    { name: "AWS", icon: AWSIcon },
    { name: "Git", icon: GitIcon },
    { name: "GitHub", icon: GithubIcon },
    { name: "C++", icon: CppIcon },
    { name: "Node.js", icon: NodejsIcon },
    { name: "SQL", icon: SQLIcon },
    { name: "Tailwind", icon: TailwindIcon },
    { name: "HTML", icon: HTMLIcon },
    { name: "CSS", icon: CSSIcon },
    { name: "Agile", icon: AgileIcon },
  ];

  const featuredProjects = projects.slice(0, 4); // Get first 4 projects

  return (
    <Router>
      <div style={{ backgroundColor: theme.bg, color: theme.text }} className="min-h-screen font-sans">
        {/* Navigation */}
        <nav style={{ backgroundColor: theme.secondaryBg }} className="p-4 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold" style={{ color: theme.heading }}></div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/" style={{ color: theme.heading }} className="hover:underline transition duration-300">HOME</Link>
              <Link to="/projects" style={{ color: theme.heading }} className="hover:underline transition duration-300">PROJECTS</Link>
              <a href="/#contact" style={{ color: theme.heading }} className="hover:underline transition duration-300">CONTACT</a>
              {/* Remove for now
              <ThemeToggle isDark={isDarkMode} toggleTheme={toggleTheme} />
              */}

            </div>
          </div>
        </nav>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={
            <>
              <Hero 
                theme={theme} 
                gitLink={gitLink} 
                linkedinLink={linkedinLink} 
                emailLink={emailLink}
              />

              <main className="max-w-6xl mx-auto px-4 py-16">
                {/* Skills Section */}
                <section style={{ backgroundColor: theme.secondaryBg }} className="py-16 mb-16 rounded-lg">
                  <h2 className="text-4xl font-bold mb-8 text-center pb-2" style={{ color: theme.heading }}>Skills & Technologies</h2>
                  <div className="flex justify-center">
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-14 gap-y-8 max-w-5xl">
                      {skills.map((skill, index) => (
                        <SkillIcon key={index} name={skill.name} icon={skill.icon} theme={theme} />
                      ))}
                    </div>
                  </div>
                </section>

                {/* Experience Section */}
                <Experience theme={theme} experiences={experiences} />

                {/* Featured Projects Section */}
                <section style={{ backgroundColor: theme.secondaryBg }} className="py-16 mb-16 rounded-lg">
                  <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: theme.heading }}>Featured Projects</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                    {featuredProjects.map((project, index) => (
                      <Link to={`/project/${encodeURIComponent(project.title)}`} key={index} className="block h-full">
                        <div 
                          style={{ backgroundColor: theme.buttonBg }} 
                          className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between transform hover:-translate-y-1"
                        >
                          <div>
                            <h3 className="text-2xl font-bold mb-3" style={{ color: theme.accent }}>{project.title}</h3>
                            <p style={{ color: theme.text }} className="mb-4 text-s">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.map((tech, techIndex) => (
                                <span 
                                  key={techIndex} 
                                  className="px-2 py-1 text-sm rounded" 
                                  style={{ backgroundColor: theme.secondaryBg, color: theme.text }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Calendar size={16} style={{ color: theme.accent, marginRight: '8px' }} />
                            <p className="text-sm" style={{ color: theme.text }}>{project.year}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: theme.heading }}>Contact Me</h2>
                  <p className="text-center mb-6 text-lg" style={{ color: theme.text }}>I'm always open to new opportunities. Just reach out</p>
                  <div className="flex justify-center space-x-4">
                    <a 
                      href={emailLink} 
                      className="px-6 py-3 rounded-md text-lg transition-colors duration-300 flex items-center hover:shadow-lg"
                      style={{ 
                        backgroundColor: theme.buttonBg, 
                        color: theme.text,
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.buttonHoverBg}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.buttonBg}
                    >
                      <Mail className="mr-2" /> Email Me
                    </a>
                    <a 
                      href={linkedinLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-6 py-3 rounded-md text-lg transition-colors duration-300 flex items-center hover:shadow-lg"
                      style={{ 
                        backgroundColor: theme.buttonBg, 
                        color: theme.text,
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.buttonHoverBg}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.buttonBg}
                    >
                      <Linkedin className="mr-2" /> LinkedIn
                    </a>
                  </div>
                </section>
              </main>
            </>
          } />
          {/* Routing */}
          <Route path="/projects" element={<Projects projects={projects} theme={theme} />} />
          <Route path="/project/:title" element={<ProjectPage projects={projects} theme={theme} />} />
        </Routes>

        {/* Footer */}
        <footer style={{ backgroundColor: theme.secondaryBg }} className="py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-2xl font-bold mb-4 md:mb-0" style={{ color: theme.heading }}>Max Harrison</div>
              <div className="flex space-x-6">
                <Link to="/" style={{ color: theme.heading }} className="hover:underline transition duration-300">Home</Link>
                <Link to="/#projects" style={{ color: theme.heading }} className="hover:underline transition duration-300">Projects</Link>
                <Link to="/#contact" style={{ color: theme.heading }} className="hover:underline transition duration-300">Contact</Link>
              </div>
            </div>
            <div className="mt-8 text-center text-sm" style={{ color: theme.text }}>
              <p>© {new Date().getFullYear()} Max Harrison. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Github,Linkedin, Mail, Briefcase, Sun, Moon, Terminal, Folder, ExternalLink } from 'lucide-react';

{/*Import SVG Icons */}
import { PythonIcon, JavaScriptIcon, ReactIcon, AWSIcon, GitIcon, GithubIcon, CppIcon, NodejsIcon, SQLIcon, TailwindIcon, AgileIcon, 
  HTMLIcon, CSSIcon } from './assets/icons';


const ThemeToggle = ({ isDark, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="p-2 rounded-md transition-colors duration-200"
    style={{ backgroundColor: isDark ? '#2d2d30' : '#ffffff' }}
  >
    {isDark ? <Sun size={20} color="#d4d4d4" /> : <Moon size={20} color="#000000" />}
  </button>
);


const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

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
    date: isDarkMode ? '#ce9178' : '#a31515',
    comment: isDarkMode ? '#608b4e' : '#008000',
    buttonBg: isDarkMode ? '#2d2d30' : '#e1e1e1',
    buttonHoverBg: isDarkMode ? '#3e3e42' : '#d1d1d1',
  };

  const projects = [
    { title: "Portfolio", description: "You are looking at it. Built using React JS and Tailwind CSS.", year: 2024 },
    { title: "AI Navigation", description: "Implementation of BFS, DFS, A* Iterative Deepening A*, and other pathfinding algorithms for agent navigation.", year: 2024 },
    { title: "Serverless Cloud Architecture", description: "Leveraged various AWS services to create a robust serverless architecture for a photo album application.", year: 2023 },
    { title: "Digital Stopwatch Circuit", description: "Built a custom simulated stopwatch using binary counters in Logisim.", year: 2023 },
  ];

  const experiences = [
    {
      title: "Cloud/Network Engineer",
      company: "Bishopsgate Capital",
      period: "Jun 2024 - Current",
      description: "I led the migration of on-premises infrastructure to AWS, optimizing cloud services and enhancing security protocols. This included implementing firewalls, VPNs for secure remote access, and transitioning from Azure DB to AWS with a focus on security and redundancy. I maintained system health through regular checks, developed business continuity plans, and documented all processes to ensure operational consistency and knowledge transfer."
    },
    {
      title: "AWS Certified",
      company: "Amazon Web Services",
      period: "Jan 2024",
      description: "Certified Cloud Practitioner"
    },
    {
      title: "Teaching Assistant",
      company: "Code Camp",
      period: "Sep 2023 - Jun 2024",
      description: "Delivered beginner-level lessons on Scratch, Python, and JavaScript for primary-aged students. Clearly presented instructions and facilitated student progress through problem-solving exercises and collaborative projects."
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
  
  const SkillIcon = ({ name, icon }) => (
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 flex items-center justify-center mb-2">
        <img src={icon} alt={name} className="max-w-full max-h-full object-contain" />
      </div>
      <span className="text-sm text-center" style={{ color: theme.text }}>{name}</span>
    </div>
  );

  return (
    <div style={{ backgroundColor: theme.bg, color: theme.text }} className="min-h-screen font-sans">
      {/* Navigation */}
      <nav style={{ backgroundColor: theme.secondaryBg }} className="p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold" style={{ color: theme.heading }}></div>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" style={{ color: theme.link }} className="hover:underline transition duration-300">HOME</a>
            <a href="#" style={{ color: theme.link }} className="hover:underline transition duration-300">PROJECTS</a>
            <a href="#" style={{ color: theme.link }} className="hover:underline transition duration-300">CONTACT</a>
            <ThemeToggle isDark={isDarkMode} toggleTheme={toggleTheme} />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
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
                    onClick={() => setActiveTab('projects')} 
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
          {/* Show more*/} 
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} color={theme.text} />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>
        </section>

          {/* Skills Section */}
        <section style={{ backgroundColor: theme.secondaryBg }} className="py-16 mb-16 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: theme.heading }}>Skills & Technologies</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-12 gap-y-8 max-w-5xl">
              {skills.map((skill, index) => (
                <SkillIcon key={index} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
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

        {/* Projects Section */}
        <section style={{ backgroundColor: theme.secondaryBg }} className="py-16 mb-16 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: theme.heading }}>Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} style={{ backgroundColor: theme.buttonBg }} className="p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2" style={{ color: theme.accent }}>{project.title}</h3>
                <p style={{ color: theme.text }} className="mb-2">{project.description}</p>
                <p className="text-sm" style={{ color: theme.date }}>{project.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: theme.heading }}>Get in Touch</h2>
          <p className="text-center mb-6" style={{ color: theme.text }}>I'm always open to new opportunities. Just reach out</p>
          <div className="flex justify-center space-x-4">
            <a href={emailLink} style={{ backgroundColor: theme.buttonBg, color: theme.text }} className="px-6 py-2 rounded-md transition duration-300 flex items-center hover:bg-opacity-80">
              <Mail className="mr-2" /> Email Me
            </a>
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: theme.buttonBg, color: theme.text }} className="px-6 py-2 rounded-md transition duration-300 flex items-center hover:bg-opacity-80">
              <Linkedin className="mr-2" /> LinkedIn
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: theme.secondaryBg }} className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0" style={{ color: theme.heading }}>Max Harrison</div>
            <div className="flex space-x-6">
              <a href="#" style={{ color: theme.link }} className="hover:underline transition duration-300">Home</a>
              <a href="#" style={{ color: theme.link }} className="hover:underline transition duration-300">Projects</a>
              <a href="#" style={{ color: theme.link }} className="hover:underline transition duration-300">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm" style={{ color: theme.text }}>
            <p>© {new Date().getFullYear()} Max Harrison. All rights reserved.</p>
            <p className="mt-2">Built with React and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
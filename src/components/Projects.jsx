import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

export const projects = [
  {
    title: "Portfolio",
    description: "You are looking at it. Built using React JS and Tailwind CSS.",
    year: 2024,
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    githubLink: "https://github.com/minvoker/my-portfolio",
    customText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac felis ut sapien finibus dapibus. Nam eget ipsum sed nunc facilisis volutpat. Vivamus eleifend consequat sem, ut sollicitudin arcu dapibus vel. Nam ut dolor quis ipsum molestie aliquet. Fusce nec mi rutrum, bibendum nisl at, finibus sem. Aenean sed magna eu turpis gravida ultrices. Cras quis arcu sodales, lacinia nunc et, lacinia odio."
  },
  {
    title: "AI Navigation",
    description: "Implementation of BFS, DFS, A* Iterative Deepening A*, and other pathfinding algorithms for agent navigation.",
    year: 2024,
    technologies: ["Python", "Pygame"],
    githubLink: "https://github.com/minvoker/ai-navigation",
    customText: "This project was a deep dive into AI pathfinding algorithms. I implemented various search algorithms including Breadth-First Search (BFS), Depth-First Search (DFS), A*, and Iterative Deepening A*. The project helped me understand the trade-offs between different search strategies and their applications in real-world scenarios like GPS navigation or game AI.",
    image: "/images/ai-navigation.jpg"
  },
  {
    title: "Serverless Cloud Architecture",
    description: "Leveraged various AWS services to create a robust serverless architecture for a photo album application.",
    year: 2023,
    technologies: ["AWS Lambda", "Amazon S3", "Amazon DynamoDB", "API Gateway"],
    githubLink: "https://github.com/minvoker/serverless-photo-album",
    customText: "This project was an exploration of serverless architecture using AWS services. I built a scalable photo album application that utilizes AWS Lambda for processing, S3 for storage, DynamoDB for metadata, and API Gateway for RESTful endpoints. It was a great learning experience in cloud architecture and microservices design."
  },
  {
    title: "Digital Stopwatch Circuit",
    description: "Built a custom simulated stopwatch using binary counters in Logisim.",
    year: 2023,
    technologies: ["Logisim", "Digital Logic Design"],
    githubLink: "https://github.com/minvoker/digital-stopwatch",
    customText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac felis ut sapien finibus dapibus. Nam eget ipsum sed nunc facilisis volutpat. Vivamus eleifend consequat sem, ut sollicitudin arcu dapibus vel. Nam ut dolor quis ipsum molestie aliquet. Fusce nec mi rutrum, bibendum nisl at, finibus sem. Aenean sed magna eu turpis gravida ultrices. Cras quis arcu sodales, lacinia nunc et, lacinia odio."
  }
];



const Projects = ({ theme }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: theme.heading }}>All Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Link to={`/project/${encodeURIComponent(project.title)}`} key={index} className="block h-full">
            <div style={{ backgroundColor: theme.buttonBg }} className="p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: theme.accent }}>{project.title}</h3>
                <p style={{ color: theme.text }} className="mb-2">{project.description}</p>
              </div>
              <div>
                <p className="text-sm" style={{ color: theme.date }}>{project.year}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 text-sm rounded" style={{ backgroundColor: theme.secondaryBg, color: theme.text }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
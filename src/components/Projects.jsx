import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

/*
 Projects Component and Data
 - Exports an array of project data containing detailed information about each project.
 - Defines and exports a Projects component that renders a grid of all projects.
 */

export const projects = [
  {
    title: "Portfolio",
    description: "You are looking at it. Built using React JS and Tailwind CSS.",
    year: 2024,
    technologies: ["JavaScript", "React", "Tailwind CSS"],
    githubLink: "https://github.com/minvoker/my-portfolio",
    customText: [
      "This portfolio site is built with React and uses React Router for navigation. It's my first time working with React Router, which let me set up the site as a single-page application. The routing system keeps the different sections separate but easy to navigate.",
    
      "For the design, I went with Tailwind CSS. It made creating a responsive layout pretty straightforward. The utility-first approach was new to me, so it took some getting used to. But once I got the hang of it, putting together the UI went faster than I expected. The colours chosen were inspired by the vscode dark theme.",
    
      "I also brought in some external libraries, like Lucide for the icons. To keep the site running smoothly, I looked into performance optimization stuff like lazy loading and code splitting. While I decided to keep it simple, this still was interesting to research and I will implement more in the future.",

      "Hosted on Azure."
    ],
    image: "/images/portfolio.jpg"
  },
  {
    title: "AI Navigation",
    description: "Implementation of BFS, DFS, A* Iterative Deepening A*, and other pathfinding algorithms for agent navigation.",
    year: 2024,
    technologies: ["Python", "Pygame"],
    githubLink: "https://github.com/minvoker/ai-navigation",
    customText: [
      "This project focuses on implementing and comparing different AI pathfinding algorithms. I created a Python application that reads map data from text files and applies various search algorithms to find paths through the map.",
    
      "The main algorithms I implemented are Breadth-First Search (BFS), Depth-First Search (DFS), A*, and Iterative Deepening A* (IDA*). The program outputs the results to the console or GUI, showing the path found and the number of nodes expanded for each algorithm.",
    
      "I primarily used the Manhattan distance heuristic, which estimates the distance between any point and the goal. This heuristic helps A* make informed decisions about which paths to explore first.",
    
      "The project gave me insights into how these algorithms perform in different scenarios. For instance, BFS always finds the optimal path but might explore more nodes, while A* is often more efficient thanks to its heuristic guidance.",
    
      "Working on this helped me understand the trade-offs between different search strategies and their potential applications in real-world problems like GPS navigation or game AI pathfinding.",

      "Further details and instructions for running the projectcan be found on my GitHub."
    ],
    image: "/images/ai-navigation.jpg"
  },
  {
    title: "Serverless Cloud Architecture",
    description: "Leveraged various AWS services to create a scalable serverless architecture for a photo album application.",
    year: 2023,
    technologies: ["AWS", "Lambda", "S3", "SQS", "SNS", "API Gateway", "Route 53"],
    reportLink: "https://docs.google.com/document/d/1MMnbzP5eyvi372i7dDlXa-xkWv92Ev31e0qWWWl0QMc/edit?usp=sharing",
    customText: [
      "For this project, I designed a serverless architecture for a photo album application using AWS services. The goal was to create a scalable, cost-effective solution that could handle high traffic and process media efficiently. My main contributions to the design was the lambda functions and authentication and content delivery. I also wrote most of the report.",
    
      "The architecture incorporates several key AWS services: Lambda for serverless computing, S3 for storage, DynamoDB for metadata, and API Gateway for RESTful endpoints. Other services integrated include CloudFront for content delivery, Cognito for user authentication, and Rekognition for image analysis. I also used SNS and SQS for efficient media processing pipelines",
    
      "One of the main challenges was ensuring the design could handle surging demand while keeping costs manageable. The serverless approach, particularly using Lambda, helped address this by allowing the system to scale automatically.",
    
      "This project was a great opportunity to dive deep into cloud architecture and microservices design. It gave me hands-on experience with designing systems that are not only scalable and efficient but also cost-effective in a cloud environment."
    ],
    image: "/images/serverless-architecture.jpg"
  },
  {
    title: "Digital Stopwatch Circuit",
    description: "Built a custom simulated stopwatch using binary counters in Logisim.",
    year: 2023,
    technologies: ["Logisim", "Digital Logic Design"],
    githubLink: "https://github.com/minvoker/Digital-Stopwatch-Circuit",
    customText: [
      "In this solo project, I designed and implemented a digital stopwatch circuit using Logisim. The circuit features start/stop functionality, reset capability, and a split time function that can store up to five split times.",
    
      "The circuit incorporates several key components: JK flip-flops for the main counting mechanism, D flip-flops as buffers to avoid illegal states, and a barrel shift register for storing multiple split times. The design includes 4-bit and 3-bit counters for seconds and minutes, allowing the stopwatch to count from 00:00 to 99:59.",
    
      "One of the main challenges was implementing the split time functionality, particularly the storage and cycling of multiple split times. I solved this by designing a barrel shift register that could store up to five split times and cycle through them when the stopwatch was in the Stop state. This required careful consideration of the logic to switch between shift and barrel-shift modes based on the stopwatch's state.",
    
      "This project was an excellent opportunity to apply digital logic design principles in a practical context. It gave me hands-on experience with designing complex circuits, implementing state machines, and solving real-world timing and synchronization issues. The most rewarding aspect was successfully implementing the barrel shift register for split times, which required creative problem-solving and a deep understanding of digital logic concepts."
    ],
    image: "/images/stopwatch.jpg"
  }
];


const Projects = ({ theme }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: theme.heading }}>All Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Link to={`/project/${encodeURIComponent(project.title)}`} key={index} className="block h-full">
            <div 
              style={{ backgroundColor: theme.buttonBg }} 
              className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between transform hover:-translate-y-1"
            >
              <div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: theme.accent }}>{project.title}</h3>
                <p style={{ color: theme.text }} className="mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs rounded"
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
    </div>
  );
};

export default Projects;
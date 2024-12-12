import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Bus Tracker",
    description: "A collaborative project focused on developing a mobile application.",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/Ajaybalajiprasad/BusTracker",
  },
  {
    title: "Prepex",
    description: "An open-source contribution project focusing on web development.",
    tags: ["Python", "AI","Next.js","Supabase"],
    github: "https://prepex.vercel.app/",
  },
  {
    title: "Chat Bot",
    description: "A research-based project aimed at exploring AI technologies.",
    tags: ["Python", "Flask", "SQL", "NLP"],
    github: "https://github.com/KRISHNASAKTHIESWAR/Interactive-Chatbot",
  },
  {
    title: "Force++",
    description: "An automated script which notifies of upcoming contests.",
    tags: ["JavaScript", "API","Python","Next.js"],
    github: "https://github.com/adithyagenie/forceplusplus",
  },
  {
    title: "Skillrack Captcha Solver",
    description: "Automatic CAPTCHA solver extension for Skillrack using Tesseract.",
    tags: ["Python", "Tesseract", "OCR"],
    github: "https://github.com/adithyagenie/skillrack-captcha-solver",
  },
  {
    title: "Emotion Detector",
    description: "A Convolutional Neural Network (CNN) for emotion detection.",
    tags: ["Python", "AI","Computer Vision"],
    github: "https://github.com/Chorko/Emotion-recognition-using-efficientnet",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 backdrop-blur-0">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Projects</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A showcase of our technical projects, demonstrating our work in various technologies and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800/50 rounded-lg p-6 shadow-lg transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-accent transition-colors"
              >
                <FaGithub /> Code
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

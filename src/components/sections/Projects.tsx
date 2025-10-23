import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      name: 'Role-Playing Game',
      context: 'DSA II Group Project, 2025',
      description: 'Designed game logic and data structures from scratch in a team using advanced algorithms.',
      repo: 'https://github.com/Ivan-Torres-Ros/EDA-II.git',
      tech: ['Java', 'DSA', 'Algorithms', 'Teamwork']
    },
    {
      name: 'Class Mobile App Project',
      context: 'Software Engineering Project, 2025',
      description: 'Collaborated in a team to deliver a web app using Agile and iterative development.',
      repo: 'https://github.com/Ivan-Torres-Ros/Hyperfit.git',
      tech: ['Agile', 'Web App', 'Software Engineering', 'Teamwork']
    },
    {
      name: 'StudySpark',
      context: 'AI Hackathon Project, 2025',
      description: 'Built an AI-powered study assistant that summarizes notes, creates adaptive quizzes, and generates video lessons.',
      repo: 'https://github.com/Ivan-Torres-Ros/study-spark.git',
      tech: ['AI', 'Machine Learning', 'JavaScript', 'Hackathon']
    },
    {
      name: 'Personal Portfolio & CV Website',
      context: '2025',
      description: 'Developed a responsive personal website using React, TypeScript, and TailwindCSS. Focused on clean UI/UX design, smooth transitions, and optimized performance.',
      repo: 'https://github.com/Ivan-Torres-Ros/mi-cv-web.git',
      tech: ['React', 'TypeScript', 'TailwindCSS', 'UI/UX', 'Performance']
    }
  ]

  return (
    <section id="projects" className="bg-slate-900/60 shadow-none rounded-xl p-6 lg:p-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-indigo-400 text-2xl md:text-3xl font-extrabold tracking-wider mb-10">
          PROJECTS & ACADEMIC ACTIVITY
        </h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.name} 
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              {/* Primary Link - Project Title */}
              <motion.a 
                href={project.repo} 
                target="_blank" 
                rel="noreferrer"
                className="block mb-3 group"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-white text-xl font-bold group-hover:text-indigo-400 transition-colors duration-200">
                  {project.name}
                </h3>
              </motion.a>

              {/* Context/Date */}
              <p className="text-gray-400 text-sm mb-3">{project.context}</p>

              {/* Description */}
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

              {/* Technology Badges */}
              <motion.div 
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                {project.tech.map((tech, techIndex) => (
                  <motion.span 
                    key={tech} 
                    className="px-2 py-1 rounded-full bg-gray-700/50 text-gray-300 text-xs font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Secondary Link - GitHub Icon */}
              <motion.a 
                href={project.repo} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-lg" />
                <span className="text-sm font-medium">Source Code</span>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}



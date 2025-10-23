import { motion } from 'framer-motion'

export default function TechnicalSkills() {
  const programmingTools = [
    'Java', 'C++', 'Python', 'C', 'JavaScript', 'HTML/CSS', 'SQL', 'Git', 'Matlab'
  ]

  const knowledgeAreas = [
    'Cybersecurity', 'Artificial Intelligence', 'Cloud Environments', 
    'Algorithms & Data Structures', 'Systems Programming', 'Software Engineering'
  ]

  const methodologies = ['Agile', 'Scrum']
  const strengths = ['Problem-solving', 'Analytical thinking', 'Teamwork', 'Adaptability']

  return (
    <section id="technical-skills" className="bg-slate-900/60 shadow-none rounded-xl p-6 lg:p-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-indigo-400 text-2xl md:text-3xl font-extrabold tracking-wider mb-10">
          TECHNICAL SKILLS
        </h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Programming & Tools Card */}
          <motion.div 
            className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          >
            <h3 className="text-white text-lg font-semibold mb-4 text-center">Programming & Tools</h3>
            <ul className="space-y-2">
              {programmingTools.map((tool) => (
                <li key={tool} className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  {tool}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Knowledge Areas Card */}
          <motion.div 
            className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          >
            <h3 className="text-white text-lg font-semibold mb-4 text-center">Knowledge Areas</h3>
            <ul className="space-y-2">
              {knowledgeAreas.map((area) => (
                <li key={area} className="flex items-center text-gray-300">
                  <span className={`w-2 h-2 rounded-full mr-3 ${
                    area === 'Cybersecurity' || area === 'Artificial Intelligence' 
                      ? 'bg-indigo-400' 
                      : 'bg-gray-500'
                  }`}></span>
                  {area}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Methodologies & Strengths Card */}
          <motion.div 
            className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          >
            <h3 className="text-white text-lg font-semibold mb-4 text-center">Methodologies & Strengths</h3>
            
            <div className="mb-4">
              <h4 className="text-indigo-400 font-semibold mb-2">Methodologies:</h4>
              <ul className="space-y-1">
                {methodologies.map((method) => (
                  <li key={method} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                    {method}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-indigo-400 font-semibold mb-2">Strengths:</h4>
              <ul className="space-y-1">
                {strengths.map((strength) => (
                  <li key={strength} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}



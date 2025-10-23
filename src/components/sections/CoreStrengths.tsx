import { FaShieldAlt, FaCogs, FaServer } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function CoreStrengths() {
  return (
    <section id="core-strengths" className="bg-slate-900/60 shadow-none rounded-xl p-6 lg:p-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-indigo-400 text-2xl md:text-3xl font-extrabold tracking-wider mb-10">
          CORE STRENGTHS
        </h2>

        {/* Row: 3 Visual Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Card 1: Cybersecurity & AI */}
          <motion.div 
            className="bg-gray-800 rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="flex items-start gap-4">
              {/* Usa uno: FaLock o FaShieldAlt */}
              <FaShieldAlt className="text-3xl text-indigo-400 shrink-0" />
              <div>
                <h3 className="text-white font-semibold text-lg">Cybersecurity & AI Focus</h3>
                <p className="text-gray-300 mt-2 leading-relaxed">
                  My primary specialization goal is Cybersecurity and Artificial Intelligence, combining academic rigor (UPF) with practical skills in digital defense.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Technical Fundamentals */}
          <motion.div 
            className="bg-gray-800 rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="flex items-start gap-4">
              {/* Usa uno: FaCogs o FaCode */}
              <FaCogs className="text-3xl text-indigo-400 shrink-0" />
              <div>
                <h3 className="text-white font-semibold text-lg">Technical Fundamentals</h3>
                <p className="text-gray-300 mt-2 leading-relaxed">
                  Solid foundation in Algorithms & Data Structures, Operating Systems, and core Programming (Java, C++, Python, JavaScript) for robust solution development.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Systems & Cloud */}
          <motion.div 
            className="bg-gray-800 rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="flex items-start gap-4">
              {/* Usa uno: FaServer o FaCloud */}
              <FaServer className="text-3xl text-indigo-400 shrink-0" />
              <div>
                <h3 className="text-white font-semibold text-lg">Systems & Cloud</h3>
                <p className="text-gray-300 mt-2 leading-relaxed">
                  Expertise in Systems Programming, Cloud Environments, and efficient Software Engineering following Agile/Scrum methodologies.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Badges: Technical (Group 1) */}
        <div className="flex justify-center flex-wrap gap-3 mt-10">
          {[
            'Java','C++','Python','C','JavaScript','HTML/CSS','SQL','Git','Matlab',
          ].map((item) => (
            <span key={item} className="px-3 py-1 rounded-full bg-gray-700/50 border border-gray-600 text-gray-200 text-sm">
              {item}
            </span>
          ))}
        </div>

        {/* Badges: Strengths & Methodologies (Group 2) */}
        <div className="flex justify-center flex-wrap gap-3 mt-6">
          {[
            'Problem-solving','Analytical thinking','Teamwork','Adaptability','Responsible','Proactive','Agile','Scrum',
          ].map((item) => (
            <span key={item} className="px-3 py-1 rounded-full bg-indigo-900/50 text-indigo-300 text-sm font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}



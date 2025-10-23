import { motion } from 'framer-motion'

export default function Education() {
  const courses = [
    'DSA I & II',
    'Algorithm Design', 
    'Object-Oriented Programming (Java)',
    'Operating Systems',
    'Software Engineering',
    'Databases',
    'Parallel & Distributed Programming',
    'Machine Learning / AI'
  ]

  return (
    <section id="education" className="bg-slate-900/60 shadow-none rounded-xl p-6 lg:p-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-indigo-400 text-2xl md:text-3xl font-extrabold tracking-wider mb-10">
          EDUCATION
        </h2>

        {/* Main Education Card */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700"
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          >
            {/* University & Location */}
            <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
              Pompeu Fabra University | Barcelona, Spain
            </h3>
            
            {/* Degree */}
            <h4 className="text-white text-lg md:text-xl font-semibold mb-3">
              Bachelor's Degree in Computer Science and Engineering
            </h4>
            
            {/* Date */}
            <p className="text-gray-400 text-base mb-8">
              Expected June 2027
            </p>

            {/* Relevant Courses Badges */}
            <motion.div 
              className="flex justify-center flex-wrap gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {courses.map((course, index) => (
                <motion.span 
                  key={course} 
                  className="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {course}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}



import { motion } from 'framer-motion'

export default function Languages() {
  const languages = [
    { name: 'Spanish', level: 'Native', bgColor: 'bg-gray-800' },
    { name: 'Catalan', level: 'Native', bgColor: 'bg-gray-800' },
    { name: 'English', level: 'B2/First', bgColor: 'bg-gray-700' },
    { name: 'French', level: 'Basic', bgColor: 'bg-gray-600' }
  ]

  return (
    <section id="languages" className="bg-slate-900/60 shadow-none rounded-xl p-6 lg:p-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-indigo-400 text-2xl md:text-3xl font-extrabold tracking-wider mb-10">
          LANGUAGES
        </h2>

        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {languages.map((language, index) => (
              <motion.div 
                key={language.name} 
                className={`${language.bgColor} rounded-xl p-4 shadow-lg border border-gray-700`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold text-lg">{language.name}</span>
                  <span className="text-gray-300 text-sm font-medium">{language.level}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

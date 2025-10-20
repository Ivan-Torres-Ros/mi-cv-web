import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-slate-900/60 flex items-center justify-center py-24 md:py-32 overflow-hidden">
      {/* Capa de fondo: grid/matriz animada */}
      <div className="pointer-events-none absolute inset-0 bg-grid-lines animate-grid-slow opacity-10" />
      {/* Overlay para contraste y legibilidad */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-gray-950/40 to-black/50" />
      {/* Degradado de transición hacia las secciones */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-900/60 via-slate-900/40 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-4 text-center">
        {/* Foto de Perfil */}
        <motion.div 
          className="mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img
            src="/foto_ivan.jpg"
            alt="Iván Torres Ros - Profile Picture"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-indigo-400 shadow-xl mx-auto object-cover"
            onError={(e) => {
              // Fallback si no hay imagen
              e.currentTarget.style.display = 'none'
            }}
          />
        </motion.div>

        {/* Título Principal */}
        <motion.h1 
          className="text-6xl md:text-8xl font-extrabold text-indigo-400 mb-4 tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Iván Torres Ros
        </motion.h1>

        {/* Descripción */}
        <motion.p 
          className="text-lg md:text-xl text-gray-300 mt-4 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
        Future Cybersecurity Specialist with a solid foundation in Software Development and a passion for Digital Defense. Building reliable systems and actively seeking to apply technical skills to Security Analysis.
        </motion.p>

        {/* Enlaces a Redes Sociales (debajo de la descripción) */}
        <motion.div 
          className="flex justify-center gap-8 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.a
            href="https://github.com/Ivan-Torres-Ros"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 text-3xl transition-colors duration-300"
            aria-label="GitHub"
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ivantorresingeniero/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 text-3xl transition-colors duration-300"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:torresrosivan@gmail.com"
            className="text-gray-400 hover:text-indigo-400 text-3xl transition-colors duration-300"
            aria-label="Email"
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/ivaanntoorress?igsh=dXI4emZheGIyNWx5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 text-3xl transition-colors duration-300"
            aria-label="Instagram"
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaInstagram />
          </motion.a>
        </motion.div>

        {/* Enlaces de Navegación a Secciones (parte inferior del Hero) */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <motion.a
            href="#core-strengths"
            className="px-6 py-3 rounded-full border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-300 text-sm font-semibold"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector('#core-strengths')
              if (element) {
                const offset = 80
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                window.scrollTo({
                  top: elementPosition - offset,
                  behavior: 'smooth'
                })
              }
            }}
          >
            Core Strengths
          </motion.a>
          <motion.a
            href="#transferable-experience"
            className="px-6 py-3 rounded-full border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-300 text-sm font-semibold"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector('#transferable-experience')
              if (element) {
                const offset = 80
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                window.scrollTo({
                  top: elementPosition - offset,
                  behavior: 'smooth'
                })
              }
            }}
          >
            Experience
          </motion.a>
          <motion.a
            href="#education"
            className="px-6 py-3 rounded-full border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-300 text-sm font-semibold"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector('#education')
              if (element) {
                const offset = 80
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                window.scrollTo({
                  top: elementPosition - offset,
                  behavior: 'smooth'
                })
              }
            }}
          >
            Education
          </motion.a>
          <motion.a
            href="#technical-skills"
            className="px-6 py-3 rounded-full border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-300 text-sm font-semibold"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector('#technical-skills')
              if (element) {
                const offset = 80
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                window.scrollTo({
                  top: elementPosition - offset,
                  behavior: 'smooth'
                })
              }
            }}
          >
            Skills
          </motion.a>
          <motion.a
            href="#languages"
            className="px-6 py-3 rounded-full border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-300 text-sm font-semibold"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector('#languages')
              if (element) {
                const offset = 80
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                window.scrollTo({
                  top: elementPosition - offset,
                  behavior: 'smooth'
                })
              }
            }}
          >
            Languages
          </motion.a>
          <motion.a
            href="#projects"
            className="px-6 py-3 rounded-full border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-300 text-sm font-semibold"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector('#projects')
              if (element) {
                const offset = 80
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                window.scrollTo({
                  top: elementPosition - offset,
                  behavior: 'smooth'
                })
              }
            }}
          >
            Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

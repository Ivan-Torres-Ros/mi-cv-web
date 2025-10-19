import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Foto de Perfil */}
        <div className="mb-6">
          <img
            src="/foto_ivan.jpg"
            alt="Iván Torres Ros - Profile Picture"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full ring-4 ring-offset-2 ring-indigo-500 ring-offset-gray-900 mx-auto object-cover"
            onError={(e) => {
              // Fallback si no hay imagen
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>

        {/* Título Principal */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-indigo-400 mb-4">
          Iván Torres Ros
        </h1>

        {/* Descripción */}
        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
        Future Cybersecurity Analyst with a robust foundation in programming, algorithms, and computer systems from Pompeu Fabra University. Proactive and adaptable, I am passionate about applying my skills to security analysis, threat modeling, and defense strategies. Committed to combining strong teamwork with practical experience to protect digital assets.
        </p>

        {/* Enlaces a Redes Sociales */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/Ivan-Torres-Ros"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 text-2xl transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ivantorresingeniero/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 text-2xl transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:torresrosivan@gmail.com"
            className="text-gray-400 hover:text-indigo-400 text-2xl transition-colors duration-300"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/ivaanntoorress?igsh=dXI4emZheGIyNWx5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 text-2xl transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Enlaces de Navegación a Secciones */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="#experience"
            className="text-gray-400 hover:text-white px-4 py-2 transition-colors duration-300 border border-gray-700 rounded-full text-sm font-semibold hover:border-indigo-400"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="text-gray-400 hover:text-white px-4 py-2 transition-colors duration-300 border border-gray-700 rounded-full text-sm font-semibold hover:border-indigo-400"
          >
            Skills
          </a>
          <a
            href="#education"
            className="text-gray-400 hover:text-white px-4 py-2 transition-colors duration-300 border border-gray-700 rounded-full text-sm font-semibold hover:border-indigo-400"
          >
            Education
          </a>
          <a
            href="#projects"
            className="text-gray-400 hover:text-white px-4 py-2 transition-colors duration-300 border border-gray-700 rounded-full text-sm font-semibold hover:border-indigo-400"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:text-white px-4 py-2 transition-colors duration-300 border border-gray-700 rounded-full text-sm font-semibold hover:border-indigo-400"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}

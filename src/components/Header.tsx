import { MdEmail } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Header() {
  return (
    <section id="home" className="bg-white shadow-lg rounded-xl p-6 lg:p-8">
      <div className="flex flex-col items-center text-center gap-5">
        <h1 className="font-bold text-4xl lg:text-5xl text-gray-900">Your Name</h1>
        <p className="text-gray-600 max-w-2xl leading-relaxed">
          Results-driven Software Engineer focused on building reliable, performant, and delightful user experiences.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="mailto:you@email.com" className="inline-flex items-center gap-2 hover:underline transition-all duration-300">
            <MdEmail className="text-xl text-indigo-600" /> <span className="text-indigo-600">Email</span>
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline transition-all duration-300">
            <FaGithub className="text-xl text-indigo-600" /> <span className="text-indigo-600">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline transition-all duration-300">
            <FaLinkedin className="text-xl text-indigo-600" /> <span className="text-indigo-600">LinkedIn</span>
          </a>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">React</span>
          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">TypeScript</span>
          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Node.js</span>
        </div>
      </div>
    </section>
  )
}



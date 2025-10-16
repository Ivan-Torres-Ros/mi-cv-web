import { MdEmail } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Header() {
  return (
    <section id="home" className="bg-transparent shadow-none rounded-xl p-6 lg:p-8">
      <div className="flex flex-col items-center text-center gap-5">
        {/* Avatar opcional: pon una imagen en public/avatar.jpg si quieres mostrarla */}
        <img
          src="/avatar.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full ring-2 ring-indigo-200 object-cover hidden [src*='avatar']:block"
        />
        <h1 className="font-extrabold tracking-tight text-5xl lg:text-6xl hover:animate-pulse" style={{ color: '#ff6a00' }}>Iván Torres Ros</h1>
        <p className="text-white/90 max-w-2xl leading-relaxed text-lg">
          Results-driven Software Engineer focused on building reliable, performant, and delightful user experiences.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="mailto:you@email.com" className="inline-flex items-center gap-2 hover:underline transition-all duration-300">
            <MdEmail className="text-xl text-brandOrange-500" /> <span className="text-brandOrange-600">Email</span>
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline transition-all duration-300">
            <FaGithub className="text-xl text-brandCyan-500" /> <span className="text-brandCyan-600">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline transition-all duration-300">
            <FaLinkedin className="text-xl text-brandCyan-500" /> <span className="text-brandCyan-600">LinkedIn</span>
          </a>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="bg-white/10 text-white px-2 py-1 rounded-full">React</span>
          <span className="bg-white/10 text-white px-2 py-1 rounded-full">TypeScript</span>
          <span className="bg-white/10 text-white px-2 py-1 rounded-full">Node.js</span>
        </div>
      </div>
    </section>
  )
}



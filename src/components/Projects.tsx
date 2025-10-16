import { FaGithub } from 'react-icons/fa'
import { useInView } from '../hooks/useInView'

export default function Projects() {
  const anim = useInView<HTMLElement>()
  const projects = [
    {
      name: 'Project Alpha',
      desc: 'A dashboard to monitor performance metrics in real-time.',
      repo: 'https://github.com/yourusername/project-alpha',
      tech: ['React', 'TailwindCSS', 'Vite'],
    },
    {
      name: 'Project Beta',
      desc: 'An API that aggregates data from multiple sources.',
      repo: 'https://github.com/yourusername/project-beta',
      tech: ['Node.js', 'Express', 'PostgreSQL'],
    },
  ]

  return (
    <section
      id="projects"
      ref={anim.ref}
      className={`bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8 transition-all duration-500 ease-in-out ${anim.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <h2 className="font-semibold tracking-tight text-2xl mb-4" style={{ color: '#ff6a00' }}>Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.name} className="p-5 rounded-xl border border-gray-100 transition-all duration-300 ease-smooth hover:shadow-2xl hover:scale-105 hover:-translate-y-1 hover:brightness-105">
            <header className="mb-2">
              <h3 className="font-semibold text-lg text-gray-900">{p.name}</h3>
            </header>
            <p className="text-white/90">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full inline-block text-sm">{t}</span>
              ))}
            </div>
            <a href={p.repo} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-brandOrange-600 hover:underline">
              <FaGithub /> Repository
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}



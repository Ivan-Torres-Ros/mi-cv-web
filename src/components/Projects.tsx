import { FaGithub } from 'react-icons/fa'

export default function Projects() {
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
    <section id="projects" className="bg-white shadow-lg rounded-xl p-6 lg:p-8 transition-all duration-500 ease-in-out">
      <h2 className="font-semibold text-2xl mb-4 text-gray-900">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.name} className="p-5 rounded-xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <header className="mb-2">
              <h3 className="font-semibold text-lg text-gray-900">{p.name}</h3>
            </header>
            <p className="text-gray-700">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full inline-block text-sm">{t}</span>
              ))}
            </div>
            <a href={p.repo} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-indigo-600 hover:underline">
              <FaGithub /> Repository
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}



export default function Skills() {
  const skillGroups = [
    { title: 'Frontend', items: ['React', 'TypeScript', 'TailwindCSS', 'Vite'] },
    { title: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL'] },
    { title: 'DevOps', items: ['Docker', 'GitHub Actions'] },
  ]

  return (
    <section id="skills" className="bg-white shadow-lg rounded-xl p-6 lg:p-8 transition-all duration-500 ease-in-out">
      <h2 className="font-semibold text-2xl mb-4 text-gray-900">Technical Skills</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {skillGroups.map((g) => (
          <div key={g.title} className="p-5 rounded-xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full inline-block text-sm">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}



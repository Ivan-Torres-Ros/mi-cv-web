import { FaBriefcase } from 'react-icons/fa'

export default function Experience() {
  const jobs = [
    {
      role: 'Senior Software Engineer',
      company: 'Company One',
      period: 'Jan 2022 — Present',
      points: [
        'Led feature X increasing conversion by 18%.',
        'Reduced build times by 35% via CI/CD improvements.',
        'Mentored 3 engineers and improved code review practices.',
      ],
      tech: ['React', 'TypeScript', 'Node.js'],
    },
    {
      role: 'Frontend Engineer',
      company: 'Company Two',
      period: 'Aug 2020 — Dec 2021',
      points: [
        'Shipped design system components used across 5 products.',
        'Implemented data fetching layer with SWR.',
        'Collaborated with design for accessible UI patterns.',
      ],
      tech: ['React', 'SWR', 'Jest'],
    },
  ]

  return (
    <section id="experience" className="bg-white shadow-lg rounded-xl p-6 lg:p-8 transition-all duration-500 ease-in-out">
      <div className="flex items-center gap-3 mb-4">
        <FaBriefcase className="text-indigo-600" />
        <h2 className="font-semibold text-2xl text-gray-900">Work Experience</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {jobs.map((job) => (
          <article key={job.company} className="p-5 rounded-xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <header className="mb-2">
              <h3 className="font-semibold text-lg text-gray-900">{job.role} — {job.company}</h3>
              <p className="text-gray-600">{job.period}</p>
            </header>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {job.tech.map((t) => (
                <span key={t} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full inline-block text-sm">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}



import { FaBriefcase } from 'react-icons/fa'
import { useInView } from '../hooks/useInView'

export default function Experience() {
  const anim = useInView<HTMLElement>()
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
    <section
      id="experience"
      ref={anim.ref}
      className={`bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8 transition-all duration-500 ease-in-out ${anim.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <FaBriefcase className="text-brandOrange-500" />
        <h2 className="font-semibold tracking-tight text-2xl" style={{ color: '#ff6a00' }}>Work Experience</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {jobs.map((job) => (
          <article key={job.company} className="p-5 rounded-xl border border-gray-100 transition-all duration-300 ease-smooth hover:shadow-2xl hover:scale-105 hover:-translate-y-1 hover:brightness-105">
            <header className="mb-2">
              <h3 className="font-semibold text-lg text-white">{job.role} — {job.company}</h3>
              <p className="text-white/80">{job.period}</p>
            </header>
            <ul className="list-disc pl-5 text-white/90 space-y-1">
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {job.tech.map((t) => (
                <span key={t} className="bg-brandCyan-50 text-brandCyan-700 px-2 py-1 rounded-full inline-block text-sm">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}



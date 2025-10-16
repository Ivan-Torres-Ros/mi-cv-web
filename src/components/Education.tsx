import { FaGraduationCap } from 'react-icons/fa'
import { useInView } from '../hooks/useInView'

export default function Education() {
  const anim = useInView<HTMLElement>()
  const schools = [
    {
      degree: 'B.Sc. in Computer Science',
      school: 'Tech University',
      period: '2016 — 2020',
      notes: ['GPA: 3.8/4.0', 'Relevant courses: Algorithms, Databases, Web Dev'],
    },
  ]

  return (
    <section
      id="education"
      ref={anim.ref}
      className={`bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8 transition-all duration-500 ease-in-out ${anim.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <FaGraduationCap className="text-brandOrange-500" />
        <h2 className="font-semibold tracking-tight text-2xl" style={{ color: '#ff6a00' }}>Education</h2>
      </div>
      <div className="grid gap-4">
        {schools.map((s) => (
          <article key={s.school} className="p-5 rounded-xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <header className="mb-2">
              <h3 className="font-semibold text-lg text-white">{s.degree} — {s.school}</h3>
              <p className="text-white/80">{s.period}</p>
            </header>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {s.notes.map((n) => (
                <li key={n} className="marker:text-brandOrange-500">{n}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}



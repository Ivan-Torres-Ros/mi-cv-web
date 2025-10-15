import { FaGraduationCap } from 'react-icons/fa'

export default function Education() {
  const schools = [
    {
      degree: 'B.Sc. in Computer Science',
      school: 'Tech University',
      period: '2016 — 2020',
      notes: ['GPA: 3.8/4.0', 'Relevant courses: Algorithms, Databases, Web Dev'],
    },
  ]

  return (
    <section id="education" className="bg-white shadow-lg rounded-xl p-6 lg:p-8 transition-all duration-500 ease-in-out">
      <div className="flex items-center gap-3 mb-4">
        <FaGraduationCap className="text-indigo-600" />
        <h2 className="font-semibold text-2xl text-gray-900">Education</h2>
      </div>
      <div className="grid gap-4">
        {schools.map((s) => (
          <article key={s.school} className="p-5 rounded-xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <header className="mb-2">
              <h3 className="font-semibold text-lg text-gray-900">{s.degree} — {s.school}</h3>
              <p className="text-gray-600">{s.period}</p>
            </header>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {s.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}



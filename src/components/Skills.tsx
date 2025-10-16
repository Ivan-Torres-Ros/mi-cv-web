import { useInView } from '../hooks/useInView'

export default function Skills() {
  const anim = useInView<HTMLElement>()
  const skills = [
    { name: 'React', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'TailwindCSS', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'PostgreSQL', level: 65 },
  ]

  return (
    <section
      id="skills"
      ref={anim.ref}
      className={`bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8 transition-all duration-500 ease-in-out ${anim.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <h2 className="font-semibold tracking-tight text-2xl mb-4" style={{ color: '#ff6a00' }}>Technical Skills</h2>
      <div className="space-y-4">
        {skills.map((s, i) => (
          <div key={s.name} className="group">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-white">{s.name}</span>
              <span className="text-xs text-white/80">{s.level}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/20 overflow-hidden">
              <div
                className="h-full rounded-full bg-brandOrange-500 transition-all duration-700 ease-smooth"
                style={{ width: anim.isInView ? `${s.level}%` : '0%', transitionDelay: `${i * 80}ms` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}



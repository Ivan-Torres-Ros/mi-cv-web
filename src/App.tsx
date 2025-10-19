import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { useInView } from './hooks/useInView'
import { useEffect, useState } from 'react'
import ParticleBackground from './components/ParticleBackground'

function App() {
  const summary = useInView<HTMLElement>()
  const [isClient, setIsClient] = useState(false)
  useEffect(() => { setIsClient(true) }, [])
  return (
    <>
      <Nav />
      {isClient && <ParticleBackground />}
      <Hero />
      <main className="container mx-auto px-4 py-8 md:py-12 space-y-6 md:space-y-8 dark:text-gray-100">

        <section
          id="summary"
          ref={summary.ref}
          className={`bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8 transition-all duration-500 ease-in-out ${summary.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="font-semibold text-2xl mb-2" style={{ color: '#ff6a00' }}>Professional Summary</h2>
          <p className="text-white/90 leading-relaxed">
          Results-driven Software Engineer with experience building and maintaining scalable web applications. Strong in React and TypeScript, delivering measurable impact through performance and UX improvements.
        </p>
      </section>

      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Footer />
      </main>
    </>
  )
}

export default App

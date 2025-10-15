import Nav from './components/Nav'
import Header from './components/Header'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <main className="container mx-auto px-4 py-8 md:py-12 space-y-6 md:space-y-8">
      <Header />

        <section id="summary" className="bg-white shadow-lg rounded-xl p-6 lg:p-8">
          <h2 className="font-semibold text-2xl mb-2 text-gray-900">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">
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

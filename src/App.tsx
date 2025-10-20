import Nav from './components/Nav'
import Hero from './components/Hero'
import CoreStrengths from './components/CoreStrengths'
import TransferableExperience from './components/TransferableExperience'
import Education from './components/Education'
import TechnicalSkills from './components/Skills'
import Languages from './components/Languages'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import ParticleBackground from './components/ParticleBackground'

function App() {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => { setIsClient(true) }, [])
  return (
    <>
      <Nav />
      {isClient && <ParticleBackground />}
      <Hero />
      <CoreStrengths />
      <TransferableExperience />
      <Education />
      <TechnicalSkills />
      <Languages />
      <Projects />
      <Footer />
    </>
  )
}

export default App

import Nav from './components/layout/Nav'
import Hero from './components/sections/Hero'
import CoreStrengths from './components/sections/CoreStrengths'
import TransferableExperience from './components/sections/TransferableExperience'
import Education from './components/sections/Education'
import TechnicalSkills from './components/sections/Skills'
import Languages from './components/sections/Languages'
import Projects from './components/sections/Projects'
import Footer from './components/layout/Footer'
import { useEffect, useState } from 'react'
import ParticleBackground from './components/background/ParticleBackground'

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

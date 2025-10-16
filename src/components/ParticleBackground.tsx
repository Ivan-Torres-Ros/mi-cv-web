import { useMemo } from 'react'
import { loadSlim } from '@tsparticles/slim'
import Particles from '@tsparticles/react'

export default function ParticleBackground() {

  const options = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: 'transparent' },
    fpsLimit: 30,
    particles: {
      number: { value: 35, density: { enable: true, area: 900 } },
      color: { value: '#818cf8' },
      links: { enable: true, color: '#a5b4fc', opacity: 0.25, distance: 140 },
      move: { enable: true, speed: 0.4, direction: 'none', outModes: { default: 'out' } },
      opacity: { value: 0.22 },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), [])

  const init = async (engine: any) => {
    await loadSlim(engine)
  }

  const handleLoaded = (_container?: any) => {}

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Particles id="tsparticles" init={init} loaded={handleLoaded} options={options} />
    </div>
  )
}



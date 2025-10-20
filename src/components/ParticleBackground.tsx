import { useMemo } from 'react'
import { loadSlim } from '@tsparticles/slim'
import Particles from '@tsparticles/react'

export default function ParticleBackground() {

  const options = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: 'transparent' },
    fpsLimit: 30,
    particles: {
      number: { value: 50, density: { enable: true, area: 1200 } },
      color: { value: '#818cf8' },
      links: { enable: true, color: '#a5b4fc', opacity: 0.3, distance: 160 },
      move: { enable: true, speed: 0.6, direction: 'none' as any, outModes: { default: 'out' as any } },
      opacity: { value: 0.4 },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  }), [])

  const init = async (engine: any) => {
    await loadSlim(engine)
  }

  const handleLoaded = (_container?: any) => {}

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Particles {...({ id: "tsparticles", init, loaded: handleLoaded, options } as any)} />
    </div>
  )
}



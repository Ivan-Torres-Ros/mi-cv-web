export default function Nav() {
  const links = [
    { href: '#core-strengths', label: 'Core Strengths' },
    { href: '#transferable-experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#technical-skills', label: 'Skills' },
    { href: '#languages', label: 'Languages' },
    { href: '#projects', label: 'Projects' },
  ]

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-slate-900/90 border-b border-indigo-400/30 text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a 
          href="#hero" 
          className="flex items-center hover:opacity-80 transition-opacity duration-300 cursor-pointer"
        >
          <img 
            src="/logo.png" 
            alt="TR Logo" 
            className="h-8 w-auto"
          />
        </a>
        <ul className="flex gap-4 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a 
                href={l.href} 
                className="text-indigo-400 relative after:absolute after:left-0 after:bottom-[-2px] after:h-px after:w-0 after:bg-indigo-400 after:transition-all after:duration-300 hover:text-indigo-300 hover:after:w-full"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector(l.href)
                  if (element) {
                    const offset = 80 // Offset para la barra de navegación
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                    window.scrollTo({
                      top: elementPosition - offset,
                      behavior: 'smooth'
                    })
                  }
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}



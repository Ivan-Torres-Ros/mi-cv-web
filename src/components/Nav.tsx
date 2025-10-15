export default function Nav() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#summary', label: 'Summary' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
  ]

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-200 text-gray-700">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <span className="font-semibold">Your Name</span>
        <ul className="flex gap-4 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-gray-600 hover:text-indigo-600 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}



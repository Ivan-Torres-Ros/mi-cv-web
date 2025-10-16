import { useEffect, useState } from 'react'

export default function Nav() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [dark])
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#summary', label: 'Summary' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
  ]

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-brandNavy-900/80 border-b border-brandOrange-600 text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <span className="font-semibold text-brandOrange-500">Iván Torres Ros</span>
        <ul className="flex gap-4 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-brandOrange-500 relative after:absolute after:left-0 after:bottom-[-2px] after:h-px after:w-0 after:bg-brandOrange-500 after:transition-all after:duration-300 hover:text-brandOrange-600 hover:after:w-full">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          aria-label="Toggle dark mode"
          className="ml-4 rounded-md border px-3 py-1 text-sm text-gray-600 transition-all duration-300 ease-smooth hover:bg-brandOrange-50 hover:text-brandOrange-700 hover:border-brandOrange-200 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
          onClick={() => setDark((v) => !v)}
        >
          {dark ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  )
}



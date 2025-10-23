import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-slate-900/60 shadow-none rounded-xl p-6 lg:p-8">
      <div className="flex flex-col items-center gap-2">
        <p>
          © {new Date().getFullYear()} Iván Torres Ros —
          <a className="text-indigo-600 hover:underline ml-1" href="mailto:torresrosivan@gmail.com">Contact</a>
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Ivan-Torres-Ros" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-indigo-600 hover:underline">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/ivantorresingeniero/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-indigo-600 hover:underline">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}



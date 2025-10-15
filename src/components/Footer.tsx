export default function Footer() {
  return (
    <footer className="text-center text-gray-600 py-6">
      <p>
        © {new Date().getFullYear()} Your Name —
        <a className="text-indigo-600 hover:underline ml-1" href="mailto:you@email.com">Contact</a>
      </p>
    </footer>
  )
}



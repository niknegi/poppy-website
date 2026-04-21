import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.svg'

export default function Nav() {
  const location = useLocation()
  const isDocs = location.pathname === '/docs'

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-ghost bg-surface/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-8 h-14">
        <Link to="/" className="flex items-center gap-3 text-bone no-underline">
          <img src={logo} alt="Poppy" className="h-6 w-auto" />
          <span className="font-display text-lg font-bold tracking-tight">Poppy</span>
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${isDocs ? 'text-muted hover:text-bone' : 'text-bone'}`}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/docs"
              className={`text-sm font-medium transition-colors ${isDocs ? 'text-bone' : 'text-muted hover:text-bone'}`}
            >
              Docs
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/nikhilnegi/poppy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted transition-colors hover:text-bone"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-primary px-4 py-2 text-xs font-medium tracking-wide text-bone transition-colors hover:bg-primary-hover"
            >
              Get Extension
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

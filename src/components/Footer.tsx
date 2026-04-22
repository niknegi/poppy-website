import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="border-t border-ghost">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-8 py-12">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="h-[18px] w-auto opacity-60" />
          <span className="text-xs text-muted">
            Poppy — Browser automation that just works.
          </span>
        </div>
        <ul className="flex gap-6">
          <li>
            <Link
              to="/"
              className="text-xs text-muted transition-colors hover:text-bone"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/docs"
              className="text-xs text-muted transition-colors hover:text-bone"
            >
              Docs
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/niknegi/poppy-website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted transition-colors hover:text-bone"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

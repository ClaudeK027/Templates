import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/content';

export default function Navbar({ variant = 'v1' }) {
  const [open, setOpen] = useState(false);

  const styles = {
    v1: {
      bg: 'bg-v1-black/95 backdrop-blur-md',
      text: 'text-white',
      logo: 'text-v1-orange',
      accent: 'bg-v1-orange hover:bg-v1-orange-light text-white',
      link: 'text-gray-300 hover:text-v1-orange',
      mobileMenu: 'bg-v1-black',
    },
    v2: {
      bg: 'bg-white/95 backdrop-blur-md border-b border-v2-gray-200',
      text: 'text-v2-gray-900',
      logo: 'text-v2-navy',
      accent: 'bg-v2-navy hover:bg-v2-navy-light text-white',
      link: 'text-v2-gray-600 hover:text-v2-navy',
      mobileMenu: 'bg-white',
    },
    v3: {
      bg: 'bg-v3-dark/95 backdrop-blur-md',
      text: 'text-white',
      logo: 'text-v3-emerald-light',
      accent: 'bg-v3-emerald hover:bg-v3-emerald-light text-white',
      link: 'text-gray-300 hover:text-v3-emerald-light',
      mobileMenu: 'bg-v3-dark',
    },
  };

  const s = styles[variant];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${s.bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to={`/${variant}`} className="flex items-center gap-2">
            <span className={`text-2xl lg:text-3xl font-bold font-poppins tracking-tight ${s.logo}`}>
              INFLUKA
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${s.link}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button className={`text-sm font-medium transition-colors duration-200 ${s.link}`}>
              Connexion
            </button>
            <button className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${s.accent}`}>
              S'inscrire
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden ${s.text}`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={`lg:hidden ${s.mobileMenu} border-t border-white/10 px-4 pb-6 pt-4`}>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-base font-medium ${s.link}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <hr className="border-white/10" />
            <button className={`text-base font-medium ${s.link}`}>Connexion</button>
            <button className={`px-5 py-3 rounded-full text-base font-semibold ${s.accent}`}>
              S'inscrire
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

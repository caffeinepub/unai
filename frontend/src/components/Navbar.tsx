import { useState, useEffect } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'Events', path: '/events' },
  { label: 'Careers', path: '/careers' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  const isDark = theme === 'dark';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span
            className="font-serif text-2xl font-bold tracking-[0.2em] text-navy dark:text-unai-bg transition-colors duration-300"
            style={{ letterSpacing: '0.25em' }}
          >
            UNAI
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                currentPath === link.path
                  ? 'text-royal dark:text-highlight'
                  : 'text-navy/70 dark:text-unai-bg/70 hover:text-navy dark:hover:text-unai-bg'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-highlight transition-all duration-300 ${
                  currentPath === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="w-9 h-9 rounded-full glass flex items-center justify-center text-navy dark:text-unai-bg hover:scale-110 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden lg:flex items-center px-5 py-2.5 rounded-full bg-navy dark:bg-highlight text-unai-bg dark:text-navy text-sm font-medium tracking-wide hover:bg-royal dark:hover:bg-soft-blue transition-all duration-300 shadow-soft"
          >
            Talk to Us
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-9 h-9 rounded-full glass flex items-center justify-center text-navy dark:text-unai-bg"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-400 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-navy mt-2 mx-4 rounded-2xl p-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium tracking-wide transition-colors duration-300 ${
                  currentPath === link.path
                    ? 'text-highlight'
                    : 'text-unai-bg/80 hover:text-unai-bg'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 text-center px-5 py-3 rounded-full bg-highlight text-navy text-sm font-medium"
            >
              Talk to Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

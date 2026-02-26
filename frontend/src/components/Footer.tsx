import { Link } from '@tanstack/react-router';
import { SiLinkedin, SiX, SiInstagram, SiGithub } from 'react-icons/si';
import { Heart } from 'lucide-react';

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

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'unai-corporate');

  return (
    <footer className="bg-navy text-unai-bg">
      {/* Main Footer */}
      <div className="section-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div
              className="font-serif text-4xl font-bold tracking-[0.25em] text-unai-bg mb-4"
            >
              UNAI
            </div>
            <p className="text-soft-blue text-sm leading-relaxed max-w-xs mb-6">
              Technology with Purpose. We build enterprise-grade solutions that transform industries and empower organizations to lead in the digital era.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: SiLinkedin, label: 'LinkedIn' },
                { Icon: SiX, label: 'X' },
                { Icon: SiInstagram, label: 'Instagram' },
                { Icon: SiGithub, label: 'GitHub' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-soft-blue/30 flex items-center justify-center text-soft-blue hover:text-unai-bg hover:border-highlight transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-6">
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-soft-blue mb-6">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-unai-bg/70 hover:text-unai-bg transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-soft-blue mb-6">
              Company
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.slice(4).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-unai-bg/70 hover:text-unai-bg transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-soft-blue/10" />

      {/* Bottom Bar */}
      <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-soft-blue/60">
          © {year} UNAI. All rights reserved.
        </p>
        <p className="text-xs text-soft-blue/60 flex items-center gap-1.5">
          Built with <Heart size={12} className="text-highlight fill-highlight" /> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-highlight hover:text-unai-bg transition-colors duration-300"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}

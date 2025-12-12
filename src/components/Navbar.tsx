import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { AboutModal } from './AboutModal';

const RESUME_URL = 'https://drive.google.com/file/d/1wx59B3pra-Jxu4qF7Tcl9LMZP41DESpJ/view?usp=sharing';
const LINKEDIN_URL = 'https://www.linkedin.com/in/advait-gajewar/';
const GITHUB_URL = 'https://github.com/the0epicguy/';

const navItems = [
  { label: 'Home', href: '/#hero' },
  { label: 'About', href: '#about', isAbout: true },
  { label: 'Projects', href: '/#projects' },
  { label: 'Achievements', href: '/#achievements' },
  { label: 'Tech', href: '/#tech' },
  { label: 'Contact', href: '/contact' },
  { label: 'LinkedIn', href: LINKEDIN_URL, external: true },
  { label: 'GitHub', href: GITHUB_URL, external: true },
];

export function Navbar() {
  const location = useLocation();
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-40 rounded-full glass px-2 py-2"
    >
      <AboutModal open={aboutOpen} onOpenChange={setAboutOpen} />
      <div className="flex items-center gap-1">
        {navItems.map((item) => {
          const isActive = item.href === '/' 
            ? location.pathname === '/' 
            : location.pathname === item.href || location.hash === item.href.replace('/', '');
          
          if (item.isAbout) {
            return (
              <button
                key={item.label}
                onClick={() => setAboutOpen(true)}
                className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full"
              >
                {item.label}
              </button>
            );
          }

          if (item.external) {
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full"
              >
                {item.label}
              </a>
            );
          }

          if (item.href.startsWith('/#')) {
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 text-sm transition-colors rounded-full ${
                  isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-primary/20 rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          }

          return (
            <Link
              key={item.label}
              to={item.href}
              className={`relative px-4 py-2 text-sm transition-colors rounded-full ${
                isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="navbar-active"
                  className="absolute inset-0 bg-primary/20 rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </Link>
          );
        })}
        
        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="ml-1 px-4 py-2 rounded-full gradient-primary text-foreground text-sm font-semibold transition-shadow hover:shadow-lg"
          >
            Resume
          </motion.button>
        </a>
      </div>
    </motion.nav>
  );
}

import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const RESUME_URL = '/resume.pdf';
const LINKEDIN_URL = 'https://www.linkedin.com/in/advait-gajewar/';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Achievements', href: '/#achievements' },
  { label: 'Tech', href: '/#tech' },
  { label: 'Contact', href: '/contact' },
  { label: 'LinkedIn', href: LINKEDIN_URL, external: true },
];

export function Navbar() {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-40 rounded-full glass px-2 py-2"
    >
      <div className="flex items-center gap-1">
        {navItems.map((item) => {
          const isActive = item.href === '/' 
            ? location.pathname === '/' 
            : location.pathname === item.href || location.hash === item.href.replace('/', '');
          
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
        
        <a href={RESUME_URL} download>
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

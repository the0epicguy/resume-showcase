import { motion } from 'framer-motion';
import { useMagnetic } from '@/hooks/useMagnetic';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const RESUME_URL = '/resume.pdf';
const LINKEDIN_URL = 'https://linkedin.com/in/yourprofile';

export function Navbar() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  useMagnetic(buttonRef);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-5xl rounded-2xl glass py-3 px-5 flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <Link to="/" className="w-10 h-10 flex items-center justify-center rounded-xl gradient-primary shadow-lg font-display font-bold text-sm">
          AG
        </Link>
      </div>

      <div className="hidden md:flex gap-6 items-center">
        <a href="/#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Projects
        </a>
        <a href="/#achievements" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Achievements
        </a>
        <a href="/#tech" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Tech
        </a>
        <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Contact
        </Link>
        <a 
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          LinkedIn
        </a>
        <a href={RESUME_URL} download>
          <motion.button
            ref={buttonRef}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="ml-2 px-4 py-2 rounded-lg gradient-primary shadow-lg hover:shadow-2xl text-foreground text-sm font-semibold transition-shadow"
          >
            Download Resume
          </motion.button>
        </a>
      </div>
    </motion.nav>
  );
}
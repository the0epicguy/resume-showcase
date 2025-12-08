import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const RESUME_URL = '/resume.pdf';

export function Footer() {
  return (
    <footer className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl p-8 rounded-3xl glass-strong text-center"
        >
          <h3 className="text-2xl font-display font-semibold">Like what you see?</h3>
          <p className="text-muted-foreground mt-3">
            Download the resume or reach out for collaborations.
          </p>

          <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
            <a href={RESUME_URL} download>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-lg gradient-primary text-foreground font-semibold shadow-lg hover:shadow-2xl transition-shadow"
              >
                Download Resume
              </motion.button>
            </a>
            <a
              href="mailto:advait@example.com"
              className="px-6 py-3 rounded-lg glass text-sm font-medium hover:bg-muted/20 transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            {[
              { icon: Github, href: '#' },
              { icon: Linkedin, href: '#' },
              { icon: Twitter, href: '#' },
            ].map(({ icon: Icon, href }) => (
              <motion.a
                key={Icon.displayName}
                href={href}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-muted/30 transition-colors"
              >
                <Icon className="w-5 h-5 text-muted-foreground" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Advait Gajewar — Built with motion-first design.
        </div>
      </div>

      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'linear-gradient(90deg, hsl(239 84% 67%), hsl(330 81% 60%))' }}
      />
    </footer>
  );
}

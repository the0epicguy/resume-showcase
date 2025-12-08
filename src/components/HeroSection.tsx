import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const RESUME_URL = '/resume.pdf';

export function HeroSection() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('mousemove', move);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('scroll', onScroll);
    };
  }, [cursorX, cursorY]);

  const smoothX = useSpring(cursorX, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(cursorY, { stiffness: 100, damping: 30 });

  const titleX = useTransform(smoothX, [0, typeof window !== 'undefined' ? window.innerWidth : 1400], [-8, 8]);
  const titleY = useTransform(smoothY, [0, typeof window !== 'undefined' ? window.innerHeight : 800], [-10, 10]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-24 md:py-40 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.h1
              variants={itemVariants}
              style={{ x: titleX, y: titleY }}
              className="text-4xl md:text-6xl font-display font-extrabold leading-tight tracking-tight max-w-xl"
            >
              I build{' '}
              <span className="gradient-text">fluid, motion-driven</span>{' '}
              interfaces
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-6 text-muted-foreground max-w-xl text-lg">
              A one-page hyperfluid resume with projects, achievements, tech stack and a downloadable CV — designed for speed, motion and delight.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-8 flex gap-4 items-center flex-wrap">
              <a href="#projects">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-lg glass text-sm font-medium hover:bg-muted/20 transition-colors"
                >
                  View Projects
                </motion.button>
              </a>
              <a href={RESUME_URL} download>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-lg gradient-primary text-foreground text-sm font-semibold shadow-lg hover:shadow-2xl transition-shadow"
                >
                  Download CV
                </motion.button>
              </a>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative flex justify-center items-center">
            <motion.div
              className="w-[300px] md:w-[380px] h-[380px] rounded-3xl glass-strong shadow-2xl flex items-center justify-center"
              style={{ y: scrollY * -0.03 }}
              whileHover={{ rotateY: 6, rotateX: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className="p-8 text-center">
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Latest Projects</div>
                <div className="mt-4 font-display font-semibold text-xl">Smart Waste Management</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Linked lists + BSTs to model and prioritize city dustbins. Lightweight demo and charts.
                </p>
                <div className="mt-6 flex gap-4 justify-center">
                  <a href="#projects" className="text-xs text-primary hover:underline">
                    Explore
                  </a>
                  <a href="#tech" className="text-xs text-primary hover:underline">
                    Tech stack
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Glowing accent */}
            <div
              className="absolute -bottom-8 right-6 w-32 h-32 rounded-full opacity-50 blur-3xl animate-pulse-glow"
              style={{ background: 'linear-gradient(90deg, hsl(270 84% 60%), hsl(330 81% 60%))' }}
            />
            <div
              className="absolute -top-4 -left-4 w-20 h-20 rounded-full opacity-40 blur-2xl animate-float"
              style={{ background: 'hsl(191 91% 50% / 0.5)' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

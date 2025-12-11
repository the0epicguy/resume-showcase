import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
const RESUME_URL = '/resume.pdf';
export function HeroSection() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
    };
  }, [cursorX, cursorY]);
  const smoothX = useSpring(cursorX, {
    stiffness: 100,
    damping: 30
  });
  const smoothY = useSpring(cursorY, {
    stiffness: 100,
    damping: 30
  });
  const titleX = useTransform(smoothX, [0, typeof window !== 'undefined' ? window.innerWidth : 1400], [-8, 8]);
  const titleY = useTransform(smoothY, [0, typeof window !== 'undefined' ? window.innerHeight : 800], [-10, 10]);
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const
      }
    }
  };
  return <section id="hero" className="min-h-screen flex items-center justify-center py-24 md:py-40 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col md:flex-row gap-12 items-center justify-center">
          {/* Photo */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div whileHover={{
            scale: 1.02,
            rotateY: 5
          }} transition={{
            type: 'spring',
            stiffness: 200
          }} className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden glass-strong shadow-2xl ring-4 ring-primary/30">
              <img alt="Advait Gajewar" src="/lovable-uploads/21fb14eb-010b-477b-a74f-59b3fc83ec00.png" className="w-full h-full object-cover border-0 rounded-none" />
            </motion.div>
            {/* Glow effect behind photo */}
            <div className="absolute -inset-4 rounded-full opacity-40 blur-2xl -z-10" style={{
            background: 'linear-gradient(135deg, hsl(174 72% 46% / 0.5), hsl(168 80% 42% / 0.3))'
          }} />
          </motion.div>

          {/* Name and Intro */}
          <div className="text-center md:text-left">
            <motion.h1 variants={itemVariants} style={{
            x: titleX,
            y: titleY
          }} className="text-4xl md:text-6xl font-display font-extrabold leading-tight tracking-tight">
              Advait Gajewar
            </motion.h1>
            <motion.div variants={itemVariants} className="mt-8 flex gap-4 items-center justify-center md:justify-start flex-wrap">
              <a href="#projects">
                <motion.button whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} className="px-6 py-3 rounded-lg glass text-sm font-medium hover:bg-muted/20 transition-colors">
                  View Projects
                </motion.button>
              </a>
              <a href={RESUME_URL} download>
                <motion.button whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} className="px-6 py-3 rounded-lg gradient-primary text-foreground text-sm font-semibold shadow-lg hover:shadow-2xl transition-shadow">
                  Download Resume 
                </motion.button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Glowing accents */}
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full opacity-50 blur-3xl animate-pulse-glow" style={{
      background: 'linear-gradient(90deg, hsl(174 72% 46%), hsl(168 80% 42%))'
    }} />
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-40 blur-2xl animate-float" style={{
      background: 'hsl(186 76% 35% / 0.5)'
    }} />
    </section>;
}
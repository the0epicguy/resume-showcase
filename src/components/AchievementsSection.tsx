import { motion, AnimatePresence } from 'framer-motion';
import { Award, Trophy, Star, GraduationCap, Music, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';

const achievements = [
  {
    icon: Trophy,
    title: 'Hackathon Finalist',
    description: 'Cleared internal round for SIH using our idea for a smart ERP Based Integrated Management system.',
    year: '2025',
  },
  {
    icon: Star,
    title: 'Generative AI Explained',
    description: 'Certification by Nvidia.',
    year: '2025',
  },
  {
    icon: GraduationCap,
    title: 'An Even Easier Introduction to CUDA',
    description: 'Certification by Nvidia.',
    year: '2025',
  },
  {
    icon: Award,
    title: 'An Introduction to Social Work Basics',
    description: 'Certification by Alison.',
    year: '2025',
  },
  {
    icon: Music,
    title: 'Prarambhik - Madhyama Purna [Tabla]',
    description: 'Certification by Akhil Bharatiya Gandharva Mahavidyalaya Mandal.',
    year: '2016 - 2023',
  },
];

export function AchievementsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const currentAchievement = achievements[currentIndex];

  return (
    <section
      id="achievements"
      className="min-h-screen flex items-center justify-center py-24 md:py-40 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, hsl(222 70% 4%) 0%, hsl(222 80% 3%) 100%)',
      }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold">Achievements</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl text-lg">
            Awards, hackathon placements, certifications and highlights.
          </p>
        </motion.div>

        <div className="mt-12 relative flex items-center justify-center">
          {/* Previous Button */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-0 z-10 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-muted/30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-muted-foreground" />
          </motion.button>

          {/* Carousel Container */}
          <div className="w-full max-w-md mx-16 h-[280px] relative flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className="absolute w-full p-8 rounded-2xl glass group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <currentAchievement.icon className="w-10 h-10 text-primary" />
                  <span className="text-sm text-muted-foreground font-medium">{currentAchievement.year}</span>
                </div>
                <div className="mt-5 font-display font-semibold text-xl">{currentAchievement.title}</div>
                <div className="mt-3 text-muted-foreground leading-relaxed">
                  {currentAchievement.description}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-0 z-10 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-muted/30 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-muted-foreground" />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="mt-8 flex justify-center gap-2">
          {achievements.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-primary w-6' : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

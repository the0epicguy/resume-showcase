import { motion } from 'framer-motion';
import { Award, Trophy, Star } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Hackathon Finalist',
    description: 'Top 10 at National Tech Summit 2024 with innovative waste management solution.',
    year: '2024',
  },
  {
    icon: Award,
    title: 'Best UI Award',
    description: 'Recognized for exceptional interface design and smooth micro-interactions.',
    year: '2023',
  },
  {
    icon: Star,
    title: 'Top 10 Project',
    description: 'Featured in university showcase for creative use of data structures.',
    year: '2023',
  },
];

export function AchievementsSection() {
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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-6 rounded-2xl glass group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <achievement.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-xs text-muted-foreground">{achievement.year}</span>
              </div>
              <div className="mt-4 font-display font-semibold text-lg">{achievement.title}</div>
              <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {achievement.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

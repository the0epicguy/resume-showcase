import { motion } from 'framer-motion';

const techStack = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
  'Node.js',
  'Express',
  'MongoDB',
  'Three.js',
  'WebGL',
  'Figma',
  'Git',
  'Docker',
];

export function TechSection() {
  return (
    <section
      id="tech"
      className="min-h-screen flex items-center justify-center py-24 md:py-40 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, hsl(222 80% 3%) 0%, hsl(222 84% 4%) 100%)',
      }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold">Tech Stack</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl text-lg">
            Languages, frameworks, tools and dev practices I use daily.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {techStack.map((tech, idx) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="px-4 py-2 rounded-full glass text-sm font-medium cursor-default hover:bg-muted/30 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-xl font-display font-semibold">Continuous Learning</h3>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Currently exploring WebGPU, advanced animation techniques with GSAP, and building accessible design systems that prioritize motion and micro-interactions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

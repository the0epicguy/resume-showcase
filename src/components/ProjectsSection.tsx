import { motion } from 'framer-motion';
const projects = [{
  title: 'Smart Waste Management',
  description: 'Linked lists + BSTs to model city dustbins. Real-time priority system with visualizations.',
  tags: ['C', 'GTK', 'MSYS'],
  repo: 'https://github.com/the0epicguy/Smart-Waste-Management-System',
  live: null
}, {
  title: 'Interactive Portfolio',
  description: 'WebGL-powered 3D portfolio with smooth scroll and kinetic typography effects.',
  tags: ['Three.js', 'GSAP', 'Framer Motion'],
  repo: null,
  live: null
}];
export function ProjectsSection() {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const
      }
    }
  };
  return <section id="projects" className="min-h-screen flex items-center justify-center py-24 md:py-40 relative overflow-hidden" style={{
    background: 'linear-gradient(180deg, hsl(222 60% 5%) 0%, hsl(222 70% 4%) 100%)'
  }}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Projects</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl text-lg">An interactive showcase of recent work - click any card to expand details and see live demos or repo links.</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: '-100px'
      }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => <motion.article key={project.title} variants={itemVariants} whileHover={{
          scale: 1.02,
          y: -4
        }} className="relative rounded-2xl p-6 glass shadow-xl overflow-hidden cursor-pointer group">
              <div className="absolute -right-12 -top-12 w-44 h-44 rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition-opacity" style={{
            background: i % 2 === 0 ? 'linear-gradient(90deg, hsl(191 91% 50%), hsl(270 84% 60%))' : 'linear-gradient(90deg, hsl(330 81% 60%), hsl(45 93% 58%))'
          }} />
              <h3 className="font-display font-semibold text-lg relative z-10">{project.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground relative z-10">{project.description}</p>
              <div className="mt-4 flex gap-2 flex-wrap relative z-10">
                {project.tags.map(tag => <span key={tag} className="px-2 py-1 rounded-full bg-muted/50 text-xs text-muted-foreground">
                    {tag}
                  </span>)}
              </div>
              <div className="mt-4 flex gap-4 items-center relative z-10">
                {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline cursor-pointer">Live</a>}
                {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline cursor-pointer">Repo</a>}
              </div>
            </motion.article>)}
        </motion.div>
      </div>
    </section>;
}
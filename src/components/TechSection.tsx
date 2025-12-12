import { motion } from 'framer-motion';
const techStack = [{
  name: 'C',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
}, {
  name: 'React',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
}, {
  name: 'TypeScript',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
}, {
  name: 'JavaScript',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
}, {
  name: 'Tailwind CSS',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
}, {
  name: 'Node.js',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
}, {
  name: 'Express',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
}, {
  name: 'MongoDB',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
}, {
  name: 'Python',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
}, {
  name: 'Git',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
}, {
  name: 'Docker',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
}, {
  name: 'HTML5',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
}, {
  name: 'CSS3',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
}, {
  name: 'Three.js',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg'
}];
export function TechSection() {
  return <section id="tech" className="min-h-screen flex items-center justify-center py-24 md:py-40 relative overflow-hidden" style={{
    background: 'linear-gradient(180deg, hsl(185 80% 3%) 0%, hsl(185 84% 4%) 100%)'
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
      }}>
          <h2 className="text-3xl md:text-4xl font-display font-bold">Tech Stack</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl text-lg">
            Languages, frameworks, tools and dev practices I use.
          </p>
        </motion.div>

        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {techStack.map((tech, idx) => <motion.div key={tech.name} initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.3,
          delay: idx * 0.05
        }} whileHover={{
          scale: 1.08,
          y: -4
        }} className="flex flex-col items-center gap-3 p-4 rounded-xl glass hover:bg-muted/30 transition-colors cursor-default">
              <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" style={{
            filter: tech.name === 'Express' || tech.name === 'Three.js' ? 'invert(1)' : 'none'
          }} />
              <span className="text-sm font-medium text-center">{tech.name}</span>
            </motion.div>)}
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="mt-16">
          <h3 className="text-xl font-display font-semibold">Continuous Learning</h3>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Currently exploring WebGPU, advanced animation techniques with GSAP, and building accessible design systems that prioritize motion and micro-interactions.
          </p>
        </motion.div>
      </div>
    </section>;
}
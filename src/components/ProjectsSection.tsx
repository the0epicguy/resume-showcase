import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type ProjectStatus = 'completed' | 'in-progress';

interface Project {
  title: string;
  description: string;
  tags: string[];
  repo: string | null;
  live: string | null;
  status: ProjectStatus;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: 'EchoPath',
    description: 'Microsoft Imagine Cup 2026 submission by COEP Tech. An infrastructure-free, voice-guided indoor navigation assistant for visually impaired users. Combines Android sensor fusion with Microsoft Azure AI for real-time navigation without GPS or beacons.',
    tags: ['Android', 'Azure AI', 'Sensor Fusion', 'Accessibility'],
    repo: 'https://github.com/anushb-codes/EchoPath',
    live: null,
    status: 'completed',
    featured: true,
  },
  {
    title: 'Smart Waste Management',
    description: 'Linked lists + BSTs to model city dustbins. Real-time priority system with visualizations.',
    tags: ['C', 'GTK', 'MSYS'],
    repo: 'https://github.com/the0epicguy/Smart-Waste-Management-System',
    live: null,
    status: 'completed',
    featured: true,
  },
  {
    title: 'Code a Block',
    description: 'A progressive coding platform teaching Scratch fundamentals, advanced Python and project-based app/game development. This proposed website design showcases the platform\'s offerings with responsive UI components.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive UI'],
    repo: 'https://github.com/the0epicguy/Codeablock',
    live: 'https://codeablock.com',
    status: 'completed',
    featured: true,
  },
  {
    title: 'Interactive Portfolio',
    description: 'WebGL-powered 3D portfolio with smooth scroll and kinetic typography effects.',
    tags: ['Three.js', 'GSAP', 'Framer Motion'],
    repo: null,
    live: null,
    status: 'completed',
    featured: true,
  },
  {
    title: 'Attendance Tracker',
    description: 'A clean, ready-to-run Python Attendance Tracker application. This project runs locally on any machine and works seamlessly in IDEs like PyCharm. A system to track and manage attendance records efficiently.',
    tags: ['Python', 'Automation'],
    repo: 'https://github.com/the0epicguy/Attendance_Tracker',
    live: null,
    status: 'in-progress',
    featured: true,
  },
  {
    title: 'Polymarket Bot',
    description: 'Automated trading bot for Polymarket prediction markets that implements Phase 3 of a backtesting workflow on 1-minute BTC price data, detects “violating candles” where price expands ≥1×ATR from the 15-minute open, and flags failures when price reverts and crosses back through the open within the same window.',
    tags: ['Python', 'Trading', 'Automation'],
    repo: 'https://github.com/the0epicguy/Polymarket_bot_phase3',
    live: null,
    status: 'in-progress',
    featured: true,
  },
];

const FEATURED_COUNT = 4;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="relative rounded-2xl p-6 glass shadow-xl overflow-hidden cursor-pointer group"
    >
      <div
        className="absolute -right-12 -top-12 w-44 h-44 rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition-opacity"
        style={{
          background: index % 2 === 0
            ? 'linear-gradient(90deg, hsl(191 91% 50%), hsl(270 84% 60%))'
            : 'linear-gradient(90deg, hsl(330 81% 60%), hsl(45 93% 58%))',
        }}
      />
      <h3 className="font-display font-semibold text-lg relative z-10">{project.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground relative z-10">{project.description}</p>
      <div className="mt-4 flex gap-2 flex-wrap relative z-10">
        {project.tags.map((tag) => (
          <span key={tag} className="px-2 py-1 rounded-full bg-muted/50 text-xs text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-4 items-center relative z-10">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Live Demo
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline cursor-pointer"
          >
            Repo
          </a>
        )}
      </div>
    </motion.article>
  );
}

function ProjectGrid({ projects, isExpanded }: { projects: Project[]; isExpanded: boolean }) {
  const displayedProjects = isExpanded ? projects : projects.slice(0, FEATURED_COUNT);

  return (
    <motion.div
      layout
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <AnimatePresence mode="popLayout">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const completedProjects = projects.filter((p) => p.status === 'completed');
  const inProgressProjects = projects.filter((p) => p.status === 'in-progress');

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-24 md:py-40 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, hsl(222 60% 5%) 0%, hsl(222 70% 4%) 100%)',
      }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold">Projects</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl text-lg">
            An interactive showcase of recent work - click any card to expand details and see live demos or repo links.
          </p>
        </motion.div>

        <Tabs defaultValue="completed" className="w-full">
          <TabsList className="mb-8 bg-muted/30 backdrop-blur-sm border border-border/50">
            <TabsTrigger
              value="completed"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6"
            >
              Completed ({completedProjects.length})
            </TabsTrigger>
            <TabsTrigger
              value="in-progress"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6"
            >
              In Progress ({inProgressProjects.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="completed" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectGrid projects={completedProjects} isExpanded={isExpanded} />
              {completedProjects.length > FEATURED_COUNT && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-8 flex justify-center"
                >
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-muted/30 transition-colors text-muted-foreground hover:text-foreground"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        View All ({completedProjects.length})
                      </>
                    )}
                  </button>
                </motion.div>
              )}
            </motion.div>
          </TabsContent>

          <TabsContent value="in-progress" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectGrid projects={inProgressProjects} isExpanded={isExpanded} />
              {inProgressProjects.length > FEATURED_COUNT && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-8 flex justify-center"
                >
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-muted/30 transition-colors text-muted-foreground hover:text-foreground"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        View All ({inProgressProjects.length})
                      </>
                    )}
                  </button>
                </motion.div>
              )}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

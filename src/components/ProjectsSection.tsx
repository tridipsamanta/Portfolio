import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';

import projectSwachhSetu from '@/assets/project-swachh-setu.jpg';
import projectPrism from '@/assets/project-prism.jpg';
import projectMargAI from '@/assets/project-margai.jpg';
import projectGurukul from '@/assets/project-gurukul.jpg';
import projectSamantaAI from '@/assets/project-samanta-ai.jpg';

const projects = [
  {
    title: 'Swachh Setu',
    description: 'A hackathon project focused on cleanliness and sustainability solutions. Built with modern web technologies.',
    url: 'https://swachh-setu-five.vercel.app/',
    tags: ['React', 'Hackathon', 'Social Impact'],
    type: 'hackathon',
    image: projectSwachhSetu,
  },
  {
    title: 'Prism Web',
    description: 'An innovative web application developed during hackathon with cutting-edge features and clean design.',
    url: 'https://prism-web-three.vercel.app/',
    tags: ['React', 'Hackathon', 'Innovation'],
    type: 'hackathon',
    image: projectPrism,
  },
  {
    title: 'MargAI Web',
    description: 'AI-powered navigation and guidance platform. Combines machine learning with user-friendly interface.',
    url: 'https://marg-ai-web.vercel.app/',
    tags: ['AI', 'React', 'Hackathon'],
    type: 'hackathon',
    image: projectMargAI,
  },
  {
    title: 'CS Gurukul',
    description: 'An educational platform for computer science learning. Comprehensive courses and interactive learning experience.',
    url: 'https://cs-gurukul.vercel.app/',
    tags: ['Education', 'React', 'Full Stack'],
    type: 'education',
    image: projectGurukul,
  },
  {
    title: 'Samanta AI',
    description: 'Your smartest chat partner. An AI-powered chatbot application with intuitive interface and smart responses.',
    url: '#',
    tags: ['AI', 'Chatbot', 'React'],
    type: 'ai',
    featured: true,
    image: projectSamantaAI,
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            A showcase of hackathon projects, educational platforms, and AI applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`glass-card rounded-2xl overflow-hidden hover-glow group ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                {project.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-primary/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Sparkles size={14} className="text-primary" />
                    <span className="text-xs text-primary font-medium">Featured</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <motion.button
                type="button"
                className="px-8 py-3 rounded-full border border-primary/40 text-primary font-semibold hover:bg-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View More Projects
              </motion.button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>New projects are coming soon</DialogTitle>
                <DialogDescription>
                  I'm working on several exciting projects — they will be showcased here soon. Sign up or check back later to see the latest work.
                </DialogDescription>
              </DialogHeader>

              <div className="py-4 flex items-center justify-center">
                <svg width="140" height="140" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="1" y="3" width="22" height="14" rx="2" fill="#0EA5A4" opacity="0.08" />
                  <path d="M3 7h18M7 11h10M7 15h4" stroke="#0EA5A4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <button className="px-4 py-2 rounded-md bg-primary text-background font-medium">OK</button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Gamepad2, Lightbulb, Rocket, BarChart2, Layout, Image, Server } from 'lucide-react';
import avatarImage from '../assets/avatar.jpg';
import resumeImage from '../assets/resume.jpg';

const highlights = [
  {
    icon: Code,
    title: 'Developer',
    description: 'Building innovative solutions with modern technologies',
  },
  {
    icon: Gamepad2,
    title: 'Game Enthusiast',
    description: 'Creating interactive games that make a difference',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Strong logical thinking and analytical skills',
  },
  {
    icon: Rocket,
    title: 'Fast Learner',
    description: 'Always keen to learn new technologies',
  },
  {
    icon: BarChart2,
    title: 'Data Scientist',
    description: 'Applying statistical models and ML to extract insights',
  },
  {
    icon: Layout,
    title: 'UI/UX Designer',
    description: 'Designing intuitive interfaces and user flows',
  },
  {
    icon: Image,
    title: 'Graphics Designer',
    description: 'Creating visual assets and branding materials',
  },
  {
    icon: Server,
    title: 'Full Stack Developer',
    description: 'Building end-to-end web applications (frontend + backend)',
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.36 } },
  };

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="avatar-ring p-1.5 rounded-full flex-shrink-0">
                <div className="avatar-inner w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden">
                  <img src={avatarImage} alt="Tridip Samanta" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-white text-xl md:text-2xl font-semibold leading-snug tracking-tight">
                  Hi, I'm <span className="gradient-text">Tridip Samanta</span>. I am an aspiring Data Scientist,
                  App &amp; Web Designer driven by a goal to build impactful digital experiences. Currently pursuing
                  my <span className="text-primary font-medium">BCA</span>, I blend analytical rigor with creative
                  design principles.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  I possess a diverse skillset ranging from core programming in <strong>C++</strong> and <strong>Python </strong>
                  to crafting engaging user interfaces with <strong>Figma</strong> and <strong>Photoshop</strong>. My experience
                  includes internships at <strong>Eduzen</strong> and contributing as a UI/UX Designer and Full Stack Developer
                  for Smart India Hackathon projects.
                </p>

                {/* <div className="flex flex-wrap gap-2 items-center pt-2">
                  {['C++', 'Python', 'Machine Learning', 'Figma', 'Photoshop', 'React'].map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                      {skill}
                    </span>
                  ))}
                </div> */}

                <p className="text-white font-medium leading-relaxed pt-3">
                  Open to internships and entry-level roles where I can contribute, learn quickly, and make
                  measurable impact. Let's build something great together.
                </p>

                <div className="pt-3 flex gap-3">
                  <motion.a
                    href="#contact"
                    className="px-6 py-3 rounded-full border border-primary/40 text-primary font-semibold hover:bg-primary/10 transition-all duration-300"
                    aria-label="Go to contact section"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Contact Me
                  </motion.a>

                  <motion.a
                    href={resumeImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full border border-primary/40 text-primary font-semibold hover:bg-primary/10 transition-all duration-300"
                    aria-label="View résumé image"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    View Resume
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights moved into a left-aligned horizontal row below the text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            className="mt-8 relative z-10"
          >
            {/* Marquee: duplicate highlights to create an infinite loop */}
            <div className="marquee overflow-x-auto">
              <motion.div className="marquee__inner flex gap-4" aria-hidden="false">
                {highlights.concat(highlights).map((item, idx) => (
                  <div
                    key={`${item.title}-${idx}`}
                    className="glass-card flex-shrink-0 p-4 rounded-2xl hover-glow min-w-[160px] sm:min-w-[220px] max-w-[260px]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-300 mt-1">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar,Briefcase ,MapPin } from 'lucide-react';

const education = [
  {
    degree: 'BCA Honours (Pursuing)',
    institution: 'Midnapore College',
    year: '2025',
    status: 'current',
    description: 'Currently pursuing Bachelor of Computer Applications with focus on programming and software development.',
  },
  {
    degree: '12th (Science)',
    institution: 'Gurepole High School (H.S)',
    year: '2024',
    status: 'completed',
    description: 'Higher Secondary education with Science stream under WBCHSE board.',
    board: 'WBCHSE',
  },
  {
    degree: '10th',
    institution: 'Secondary Education',
    year: '2022',
    status: 'completed',
    description: 'Completed secondary education under WBBSE board.',
    board: 'WBBSE',
  },
];
// data
const experience = [
  {
    role: "Full Stack Developer",
    company: "InnovateX Labs",
    period: "2022 – 2024",
    description: "Built scalable microservices and rich UI dashboards...",
    tech: ["ReactJS", "NodeJS", "MongoDB", "TailwindCSS"],
  },
  {
    role: "UI/UX Designer",
    company: "InnovateX Labs",
    period: "2022 – 2024",
    description: "Built scalable microservices and rich UI dashboards...",
    tech: ["ReactJS", "NodeJS", "MongoDB", "TailwindCSS"],
  },
  
];




export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="section-padding relative bg-muted/20" ref={ref}>
     <div className="container mx-auto px-4 lg:px-10">
  {/* Top headings row */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
    className="mb-16 grid gap-10 text-center lg:grid-cols-2"
  >
    {/* Experience title */}
    <div>
      <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
        <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
          Experience
        </span>
      </h2>
      <div className="relative mx-auto h-1 w-32 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500">
        <div className="absolute inset-0 blur-md bg-gradient-to-r from-cyan-400/60 via-sky-400/60 to-violet-500/60" />
      </div>
    </div>

    {/* Education title */}
    <div>
      <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
        <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
          Education
        </span>
      </h2>
      <div className="relative mx-auto h-1 w-32 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500">
        <div className="absolute inset-0 blur-md bg-gradient-to-r from-cyan-400/60 via-sky-400/60 to-violet-500/60" />
      </div>
    </div>
  </motion.div>

  <div className="grid gap-16 lg:grid-cols-2">
    {/* ============ EXPERIENCE COLUMN (center line + alternate cards) ============ */}
    <div className="relative max-w-xl mx-auto">
      {/* center vertical line */}
      <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2
                      bg-gradient-to-b from-violet-500 via-fuchsia-500/40 to-violet-500/15" />

      {experience.map((item, index) => (
        <motion.div
          key={item.role}
          initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className={`relative mb-16 flex items-center ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* glowing node on the line */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.2 + 0.25 }}
            className="absolute left-1/2 -translate-x-1/2 z-20 flex h-10 w-10 items-center justify-center"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-950">
              <div className="absolute inset-0 rounded-full border border-fuchsia-400/50
                              bg-gradient-to-tr from-violet-500/30 via-fuchsia-500/20 to-cyan-400/20
                              shadow-[0_0_28px_rgba(192,132,252,0.9)]" />
              <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-fuchsia-300">
                <Briefcase className="h-3 w-3" />
              </div>
            </div>
          </motion.div>

          {/* card wrapper – alternates left/right of line */}
          <div
            className={`mt-10 md:mt-0 md:w-[calc(50%-2.5rem)] ${
              index % 2 === 0 ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="relative overflow-hidden rounded-2xl border border-fuchsia-400/40
                         bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-950
                         shadow-[0_0_35px_rgba(192,132,252,0.45)]
                         transition-all duration-300
                         hover:shadow-[0_0_45px_rgba(129,140,248,0.85)]
                         p-6 md:p-7"
            >
              <div className="pointer-events-none absolute -top-24 right-0 h-40 w-40 rounded-full bg-fuchsia-400/15 blur-3xl" />

              <p className="text-xs text-slate-400 mb-1">{item.period}</p>

              <h3 className="font-heading text-lg md:text-xl font-semibold text-slate-50 mb-1">
                {item.role}
              </h3>
              <p className="text-fuchsia-300 font-medium mb-2">{item.company}</p>

              <p className="text-sm text-slate-300/90 mb-4">{item.description}</p>

              {item.tech && (
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-900/80 border border-fuchsia-500/40 px-3 py-0.5 text-xs text-fuchsia-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* ============ EDUCATION COLUMN (center line + alternate cards) ============ */}
    <div className="relative max-w-xl mx-auto">
      {/* center vertical line */}
      <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2
                      bg-gradient-to-b from-cyan-400 via-sky-400/40 to-cyan-400/15" />

      {education.map((edu, index) => (
        <motion.div
          key={edu.degree}
          initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className={`relative mb-16 flex items-center ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* glowing node */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.2 + 0.25 }}
            className="absolute left-1/2 -translate-x-1/2 z-20 flex h-10 w-10 items-center justify-center"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-950">
              <div className="absolute inset-0 rounded-full border border-cyan-400/60
                              bg-gradient-to-tr from-cyan-400/30 via-sky-400/20 to-violet-500/20
                              shadow-[0_0_28px_rgba(56,189,248,0.9)]" />
              <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-cyan-300">
                <GraduationCap className="h-3 w-3" />
              </div>
            </div>
          </motion.div>

          {/* card wrapper – alternates left/right */}
          <div
            className={`mt-10 md:mt-0 md:w-[calc(50%-2.5rem)] ${
              index % 2 === 0 ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="relative overflow-hidden rounded-2xl border border-cyan-400/40
                         bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-950
                         shadow-[0_0_35px_rgba(56,189,248,0.45)]
                         transition-all duration-300
                         hover:shadow-[0_0_45px_rgba(56,189,248,0.85)]
                         p-6 md:p-7"
            >
              <div className="pointer-events-none absolute -top-24 left-0 h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl" />

              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="w-5 h-5 text-cyan-300" />
                {edu.status === 'current' && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-emerald-400/15 text-emerald-300">
                    Current
                  </span>
                )}
              </div>

              <h3 className="font-heading text-lg md:text-xl font-semibold text-slate-50 mb-1">
                {edu.degree}
              </h3>
              <p className="text-cyan-300 font-medium mb-2">{edu.institution}</p>

              <div className="mb-3 flex flex-wrap items-center gap-3 text-xs md:text-sm text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {edu.year}
                </span>
                {edu.board && (
                  <span className="rounded-full border border-slate-600/60 bg-slate-900/70 px-2 py-0.5">
                    {edu.board}
                  </span>
                )}
              </div>

              <p className="text-sm text-slate-300/90">{edu.description}</p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</div>

    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Phone, MapPin } from 'lucide-react';
import { Scene3D } from './Scene3D';
import avatarImage from '../assets/avatar.jpg';
import heroBg from '../assets/hero_bg.jpeg';
export function HeroSection() {
  const bgStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(8,10,20,0.3), rgba(8,10,20,0.1)), url(${heroBg})`,
    backgroundPosition: 'center right',
    backgroundSize: 'cover',
  } as React.CSSProperties;

  // Typing animation state for role title
  const roles = ['Web Developer', 'Full Stack Developer', 'UI/UX Designer', 'Data Scientist Aspiring'];
  const TYPING_SPEED = 120; // ms per char
  const DELETING_SPEED = 70; // ms per char (slightly faster)
  const PAUSE_AFTER_COMPLETE = 1500; // ms pause before deleting

  const [loopIndex, setLoopIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentIndex = loopIndex % roles.length;
    const fullText = roles[currentIndex];

    if (displayText.length < fullText.length) {
      // type next character
      timeout = setTimeout(() => setDisplayText(fullText.slice(0, displayText.length + 1)), TYPING_SPEED);
    } else if (displayText.length === fullText.length) {
      // finished typing; pause, then clear instantly and move to next
      timeout = setTimeout(() => {
        setDisplayText('');
        setLoopIndex((prev) => prev + 1);
      }, PAUSE_AFTER_COMPLETE);
    }

    return () => clearTimeout(timeout);
  }, [displayText, loopIndex]);

  return <section id="home" style={bgStyle} className="hero-bg relative min-h-screen flex items-center overflow-hidden">
      <Scene3D />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/6 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Left - Text Column */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="space-y-4">
              <p className="text-sm md:text-base text-primary font-semibold uppercase tracking-widest">WELCOME TO MY WORLD</p>

              <h1 className="font-display font-bold tracking-tight leading-tight">
                <span className="block text-4xl md:text-6xl lg:text-7xl">Hi, I'm <span className="gradient-text glow-text">Tridip</span></span>
                <span className="block text-3xl md:text-5xl lg:text-[72px] mt-2">
                  <span className="typing-text font-display" aria-live="polite">{displayText}<span className="typing-cursor" aria-hidden="true">|</span></span>
                </span>
              </h1>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="max-w-2xl text-muted-foreground leading-relaxed text-sm md:text-base">
                Passionate and aspiring Data Scienctist and Full Stack developer currently pursuing BCA at Midnapore College. Strong in problem solving and logical thinking. Eager to build innovative mobile apps and interactive games.
              </motion.p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-3 mt-6 md:mt-8 text-sm">
              <div className="flex flex-row items-center gap-3">
                <a href="mailto:samantatridip87@gmail.com" className="contact-button" aria-label="Email Tridip">
                  <Mail size={20} className="contact-icon" />
                </a>

                <a href="tel:+918001326921" className="contact-button" aria-label="Call Tridip">
                  <Phone size={20} className="contact-icon" />
                </a>

                <a href="https://www.google.com/maps/search/?api=1&query=Amarpur%2C+Shyampur%2C+Howrah" target="_blank" rel="noopener noreferrer" className="contact-button" aria-label="Open location in maps">
                  <MapPin size={20} className="contact-icon" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10 w-full"
            >
              <motion.a
                href="#projects"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold hover-glow glow-border transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
              </motion.a>

              <motion.a
                href="#contact"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-full border border-primary/40 text-primary font-semibold hover:bg-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </div>

          {/* Right - Avatar Column */}
          <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end">
            <motion.div initial={{ scale: 0.8, rotate: -10 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 90, delay: 0.2 }} className="relative">
              <div className="avatar-ring p-2 rounded-full"> 
                <div className="avatar-inner w-36 h-36 md:w-72 md:h-72 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden">
                  <img src={avatarImage} alt="Tridip Samanta" className="w-full h-full object-cover" />
                </div>
              </div>
              <motion.div className="absolute -inset-4 rounded-full animate-rotate-slow" style={{ border: '3px solid rgba(255,255,255,0.03)' }} />
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <motion.a href="#about" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>;
}
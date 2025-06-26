
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ParticlesBackground from '@/components/ParticlesBackground';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ParticlesBackground />
      <Navigation />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </motion.div>
    </div>
  );
};

export default Index;

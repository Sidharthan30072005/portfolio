
import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import FloatingCube from '@/components/FloatingCube';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 z-10"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-blue-400 text-lg font-semibold">Hello, I'm</span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent"
          >
            John Doe
          </motion.h1>
          
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-300 mb-8"
          >
            Full Stack Developer & UI/UX Designer
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed"
          >
            Passionate about creating beautiful, functional, and user-centered digital experiences. 
            I specialize in modern web technologies and bring ideas to life with code.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                borderColor: "rgb(59, 130, 246)",
                color: "rgb(59, 130, 246)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* 3D Element */}
        <div className="hidden lg:block w-1/2 h-96">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
              <FloatingCube />
            </Float>
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;

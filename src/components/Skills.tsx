
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'React/Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'Python', level: 80, color: 'from-yellow-500 to-orange-500' },
    { name: 'UI/UX Design', level: 88, color: 'from-purple-500 to-pink-500' },
    { name: 'Three.js', level: 75, color: 'from-indigo-500 to-purple-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="group"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {skill.name}
                  </span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            <div className="text-center p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                🚀
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Frontend</h3>
              <p className="text-gray-400">Modern UI/UX with React, Next.js, and cutting-edge CSS</p>
            </div>

            <div className="text-center p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                ⚡
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Backend</h3>
              <p className="text-gray-400">Scalable APIs with Node.js, Python, and cloud services</p>
            </div>

            <div className="text-center p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-green-500/20 hover:border-green-400/40 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                🎨
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Design</h3>
              <p className="text-gray-400">User-centered design with Figma and creative tools</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;


import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience 
                creating digital solutions that bridge the gap between design and technology. 
                My journey began with a curiosity for problem-solving and has evolved into 
                a love for crafting exceptional user experiences.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community. I believe in continuous learning and staying 
                ahead of the curve in this ever-evolving field.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-900/50 rounded-lg backdrop-blur-sm border border-blue-500/20">
                  <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gray-900/50 rounded-lg backdrop-blur-sm border border-purple-500/20">
                  <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse opacity-20" />
                <div className="absolute inset-4 bg-gray-900 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold">
                      JD
                    </div>
                    <h3 className="text-xl font-semibold text-white">John Doe</h3>
                    <p className="text-blue-400">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

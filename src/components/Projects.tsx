
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Dashboard",
      description: "Modern analytics dashboard with AI-powered insights and real-time data",
      tech: ["Next.js", "Python", "TensorFlow", "Chart.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Social Media App",
      description: "Real-time social platform with messaging, posts, and live notifications",
      tech: ["React Native", "Firebase", "Socket.io", "Redux"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "3D Portfolio Site",
      description: "Interactive 3D portfolio website with Three.js and smooth animations",
      tech: ["Three.js", "React", "Framer Motion", "GSAP"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop",
      color: "from-orange-500 to-red-500"
    }
  ];

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
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/10 to-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 group-hover:border-blue-500/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      View Project
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                    >
                      Code
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300"
            >
              View All Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

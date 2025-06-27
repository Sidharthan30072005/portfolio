import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      name: 'Java Programming',
      issuer: 'Infosys Springboard',
      date: '2025',
      link: '/certificates/java-cert.pdf',
      icon: '📄',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Spring Boot Framework',
      issuer: 'Spring',
      date: '2025',
      link: '/certificates/spring-cert.pdf',
      icon: '🌱',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'SQL Database Management',
      issuer: 'HackerRank',
      date: '2025',
      link: '/certificates/sql-cert.pdf',
      icon: '🗄️',
      color: 'from-blue-500 to-cyan-500'
    }
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
    <section id="certifications" className="py-20 relative bg-gray-50 dark:bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-blue-50/10 to-white dark:from-black dark:via-purple-950/10 dark:to-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-500 bg-clip-text text-transparent">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6" />
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional certifications and achievements that validate my skills and expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                    rotateY: 5
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 backdrop-blur-sm hover:shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      {cert.icon}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {cert.date}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {cert.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    Issued by <span className="font-medium">{cert.issuer}</span>
                  </p>
                  
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-all duration-300 group-hover:underline"
                  >
                    {cert.link.includes('.pdf') ? 'Download PDF' : 'View Certificate'}
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications; 
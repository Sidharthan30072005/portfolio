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
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-transparent relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-500 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8" />
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
          Hi, I'm Sidharthan T, a passionate developer with a strong foundation in Java, SQL, and Spring Boot. I enjoy building backend systems that are clean, efficient, and reliable.<br /><br />
          I'm continuously exploring new technologies and improving my problem-solving skills through hands-on coding and real-world projects. I believe in writing clean code, learning by doing, and growing step by step as a developer.
        </p>
      </div>
    </section>
  );
};

export default About;

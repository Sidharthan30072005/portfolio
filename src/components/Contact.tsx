
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

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
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6" />
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let's work together to bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    📧
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-400">john.doe@example.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    📱
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    📍
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Location</h3>
                    <p className="text-gray-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', emoji: '🐙', color: 'from-gray-600 to-gray-800' },
                  { name: 'LinkedIn', emoji: '💼', color: 'from-blue-600 to-blue-800' },
                  { name: 'Twitter', emoji: '🐦', color: 'from-sky-500 to-sky-700' },
                  { name: 'Instagram', emoji: '📸', color: 'from-pink-500 to-purple-600' }
                ].map((social) => (
                  <motion.button
                    key={social.name}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center text-xl hover:shadow-lg transition-all duration-300`}
                  >
                    {social.emoji}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : submitStatus === 'success'
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : submitStatus === 'success' ? (
                    'Message Sent! ✓'
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

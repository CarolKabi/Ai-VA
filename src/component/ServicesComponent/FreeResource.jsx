import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaCalendarAlt } from 'react-icons/fa';
import Navbar from '../Navbar';
import Footer from '../Footer';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 180,
      damping: 15,
      duration: 0.4,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 4px 12px rgba(200, 40, 126, 0.3)', // Inspired by WhyChooseUs
    transition: { duration: 0.2 },
  },
};

const ScalablePipelineAudit = () => {
  const benefits = [
    {
      icon: <FaCheckCircle className="text-2xl" style={{ color: '#8E24AA' }} />,
      title: 'The Time Leak',
      description: 'Pinpointing the exact administrative workflows costing you 10+ hours every week (Step 1).',
    },
    {
      icon: <FaCheckCircle className="text-2xl" style={{ color: '#8E24AA' }} />,
      title: 'The Growth Bottleneck',
      description: 'Identifying the missing core system that prevents you from handling $600K in new business (Step 2).',
    },
    {
      icon: <FaCheckCircle className="text-2xl" style={{ color: '#8E24AA' }} />,
      title: 'Your Next Steps',
      description: 'A clear, 3-point action plan to launch your Authority & Pipeline Engine (Step 3).',
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col bg-gradient-to-b from-white to-[#C8287E]/5"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar />
      <section className="w-full max-w-[100vw] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Main Content Card */}
        <motion.div
          className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
        >
          {/* Header & Branding */}
          <motion.div className="text-center mb-8" variants={containerVariants}>
            <motion.h1
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#C8287E' }}
              variants={itemVariants}
            >
              The Scalable Pipeline Blueprint
            </motion.h1>
            <motion.h2
              className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
              variants={itemVariants}
            >
              Stop Losing 10+ Hours/Week to <span className="italic text-[#C8287E]">Admin Chaos</span>
              <span className="block w-32 h-1 mx-auto mt-3 bg-gradient-to-r from-[#C8287E] to-[#a62066] rounded-full"></span>
            </motion.h2>
          </motion.div>

          {/* Value Proposition Section */}
          <motion.div className="space-y-6 text-center" variants={containerVariants}>
            <motion.p
              className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto"
              variants={itemVariants}
            >
              You're a <span className="font-semibold text-[#C8287E]">B2B Service Provider</span>, not a Chief Administrative Officer. Your current processes are stealing time and capping your revenue potential.
            </motion.p>

            {/* Results Callout */}
            <motion.div
              className="bg-gradient-to-r from-[#C8287E]/10 to-white rounded-lg shadow-md p-6"
              variants={itemVariants}
              whileHover={{ backgroundColor: '#fdf2f8' }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                The Solution? Build an <span className="italic text-[#C8287E]">Automated Acquisition Engine</span>.
              </h3>
              <p className="text-xs sm:text-sm text-[#8E24AA] mt-2 font-semibold">
                I help clients achieve results like <span className="font-bold">$600K+</span> in qualified sales pipeline.
              </p>
            </motion.div>
          </motion.div>

          <motion.hr className="my-10 border-gray-200" variants={itemVariants} />

          {/* The Offer Section */}
          <motion.div className="text-center" variants={containerVariants}>
            <motion.h3
              className="text-lg sm:text-xl font-semibold text-gray-900 mb-4"
              variants={itemVariants}
            >
              Get Your <span className="text-[#C8287E]">FREE</span> Profit-First Audit
              <span className="block w-24 h-1 mx-auto mt-3 bg-gradient-to-r from-[#C8287E] to-[#a62066] rounded-full"></span>
            </motion.h3>
            <motion.p
              className="text-xs sm:text-sm text-gray-600 mb-8 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              In this 15-minute audit, we use The Scalable Pipeline Blueprint to identify:
            </motion.p>

            {/* Benefits Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10"
              variants={containerVariants}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h4 className="text-sm font-semibold text-[#C8287E] mb-3">{benefit.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div className="flex flex-col items-center" variants={itemVariants}>
              <motion.a
                href="https://your-scheduling-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-3 text-sm font-semibold rounded-full bg-[#C8287E] text-white shadow-lg"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: '#a62066',
                  boxShadow: '0 4px 12px rgba(200, 40, 126, 0.3)',
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Book your free Scalable Pipeline Audit"
              >
                <FaCalendarAlt className="mr-2 text-sm" aria-hidden="true" />
                Book Your FREE Audit Now
              </motion.a>
              <motion.p
                className="mt-4 text-xs text-gray-500"
                variants={itemVariants}
              >
                Only 5 spots available this week for the free audit.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Strategist Footer */}
          <motion.div
            className="mt-12 pt-6 border-t border-gray-100 text-center"
            variants={containerVariants}
          >
            <motion.p
              className="text-xs text-gray-500"
              variants={itemVariants}
            >
              Presented by: <span className="font-semibold text-gray-700">Your Name</span>, Growth Operations Strategist
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default ScalablePipelineAudit;
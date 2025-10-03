import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

// Animation variants for container and child elements
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
    color: '#a62066', // Darker pink for hover
    transition: { duration: 0.2 },
  },
};

const HiddenPage = () => {
  return (
    <div
      className="min-h-screen flex items-center flex-col justify-center p-4"
      style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#f7fafc' }}
    >
        <Navbar />
      {/* Main Content Card */}
      <motion.div
        className=" w-full bg-white shadow-2xl rounded-xl mt-10 p-8 md:p-12 border border-gray-100"
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
            style={{ color: '#C8287E' }} // Primary vibrant pink
            variants={itemVariants}
          >
            The Scalable Pipeline Blueprint
          </motion.h1>
          <motion.h2
            className="mt-2 text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight"
            variants={itemVariants}
          >
            Stop Losing 10+ Hours/Week to Admin Chaos
          </motion.h2>
        </motion.div>

        {/* Value Proposition Section */}
        <motion.div className="space-y-6 text-center" variants={containerVariants}>
          <motion.p
            className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed"
            variants={itemVariants}
          >
            You're a B2B Service Provider, not a Chief Administrative Officer.
            Your current processes are stealing time and capping your revenue potential.
          </motion.p>

          {/* Results Callout */}
          <motion.div
            className="bg-gray-50 p-6 rounded-lg border-l-4"
            style={{ borderColor: '#C8287E' }} // Primary vibrant pink
            variants={itemVariants}
            whileHover={{ backgroundColor: '#fdf2f8' }} // Light pink hover
          >
            <p className="text-2xl font-bold text-gray-800">
              The Solution? Build an Automated Acquisition Engine.
            </p>
            <p
              className="text-lg mt-2 font-semibold"
              style={{ color: '#8E24AA' }} // Secondary purple
            >
              I help clients do this, leading to results like $600K+ in qualified sales pipeline.
            </p>
          </motion.div>
        </motion.div>

        <motion.hr
          className="my-10 border-gray-200"
          variants={itemVariants}
        />

        {/* The Offer Section */}
        <motion.div className="text-center" variants={containerVariants}>
          <motion.h3
            className="text-2xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            Get Your FREE Profit-First Audit
          </motion.h3>
          <motion.p
            className="text-lg text-gray-600 mb-8"
            variants={itemVariants}
          >
            In this 15-minute audit, we use The Scalable Pipeline Blueprint to identify:
          </motion.p>

          {/* Key Takeaways/Benefits */}
          <motion.ul
            className="text-left max-w-xl mx-auto space-y-3 mb-10"
            variants={containerVariants}
          >
            {[
              {
                title: 'The Time Leak:',
                description: 'Pinpointing the exact administrative workflows costing you 10+ hours every week (Step 1).',
              },
              {
                title: 'The Growth Bottleneck:',
                description: 'Identifying the missing core system that prevents you from handling $600K in new business (Step 2).',
              },
              {
                title: 'Your Next Steps:',
                description: 'A clear, 3-point action plan to launch your Authority & Pipeline Engine (Step 3).',
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start text-gray-700"
                variants={itemVariants}
                whileHover="hover"
              >
                <FaCheckCircle
                  className="h-6 w-6 mr-3 mt-1 flex-shrink-0"
                  style={{ color: '#8E24AA' }} // Secondary purple
                />
                <span>
                  <span className="font-semibold">{item.title}</span> {item.description}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Call to Action Button */}
          <motion.a
            href="https://your-scheduling-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 text-xl font-bold text-white rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-opacity-50"
            style={{
              backgroundColor: '#C8287E', // Primary vibrant pink
              focusRingColor: '#C8287E', // Matching focus ring
            }}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              backgroundColor: '#a62066', // Darker pink for hover
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your FREE Scalable Pipeline Audit Now
          </motion.a>
          <motion.p
            className="mt-4 text-sm text-gray-500"
            variants={itemVariants}
          >
            Only 5 spots available this week for the free audit.
          </motion.p>
        </motion.div>

        {/* Footer / Strategist Title */}
        <motion.div
          className="mt-12 pt-6 border-t border-gray-100 text-center"
          variants={containerVariants}
        >
          <motion.p
            className="text-sm text-gray-500"
            variants={itemVariants}
          >
            Presented by: <span className="font-semibold text-gray-700">Your Name</span>, Growth Operations Strategist
          </motion.p>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default HiddenPage;
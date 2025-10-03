import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaChartLine, FaRocket } from 'react-icons/fa';

// Animation variants for container and items
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
    boxShadow: '0 4px 12px rgba(200, 40, 126, 0.3)', // Matches #C8287E
    transition: { duration: 0.2 },
  },
};

const HiddenPageHero = () => {
  const benefits = [
    {
      icon: <FaClock className="text-2xl text-[#C8287E]" aria-hidden="true" />,
      title: 'The Time Leak',
      description:
        'Pinpoint the exact administrative workflows costing you 10+ hours every week (Step 1).',
    },
    {
      icon: <FaChartLine className="text-2xl text-[#C8287E]" aria-hidden="true" />,
      title: 'The Growth Bottleneck',
      description:
        'Identify the missing core system preventing you from handling $600K in new business (Step 2).',
    },
    {
      icon: <FaRocket className="text-2xl text-[#C8287E]" aria-hidden="true" />,
      title: 'Your Next Steps',
      description:
        'Get a clear, 3-point action plan to launch your Authority & Pipeline Engine (Step 3).',
    },
  ];

  return (
    <section
      id="scalable-pipeline-hero"
      className="w-full max-w-[100vw] min-h-[60vh] mt-10 h-fit py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#C8287E]/5 mt-20 relative overflow-hidden"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Headline */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C8287E] mb-4 leading-tight"
          variants={itemVariants}
        >
          The Scalable Pipeline Blueprint
          <span className="block sm:inline italic text-gray-900">
            {' '}
            Stop Losing 10+ Hours/Week to Admin Chaos
          </span>
          <span className="block w-32 h-1 mx-auto mt-3 bg-gradient-to-r from-[#C8287E] to-[#a62066] rounded-full"></span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-xs sm:text-sm text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto"
          variants={itemVariants}
        >
          You're a B2B Service Provider, not a Chief Administrative Officer. Our{' '}
          <span className="font-semibold text-[#C8287E]">
            Scalable Pipeline Blueprint
          </span>{' '}
          helps you reclaim time and unlock revenue potential with an automated
          acquisition engine.
        </motion.p>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
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
              <h3 className="text-sm sm:text-base font-semibold text-[#C8287E] mb-3">
                {benefit.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HiddenPageHero;
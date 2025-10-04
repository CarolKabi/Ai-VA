import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaCalendarAlt } from 'react-icons/fa';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 4px 12px rgba(200, 40, 126, 0.3)', // From WhyChooseUs
    transition: { duration: 0.2 },
  },
};

const ScalablePipelineAudit = () => {
  const benefits = [
    {
      icon: <FaCheckCircle className="text-3xl" style={{ color: '#8E24AA' }} />,
      title: 'The Time Leak',
      description: 'Pinpoint the workflows costing you over $5,000/month in lost founder time (10+ hours wasted).',
    },
    {
      icon: <FaCheckCircle className="text-3xl" style={{ color: '#8E24AA' }} />,
      title: 'Your $600K Opportunity',
      description: 'Identify the missing system needed to confidently handle $600K in new business without breaking your team.',
    },
    {
      icon: <FaCheckCircle className="text-3xl" style={{ color: '#8E24AA' }} />,
      title: 'Immediate Action Plan',
      description: 'Walk away with a clear, 3-point action plan to launch your Authority & Pipeline Engine.',
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col bg-gradient-to-b from-white to-pinkbg-pink-600/5"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar />
      <section className="w-full max-w-[100vw] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-pinkbg-pink-600/5 to-transparent opacity-20 z-0"></div>

        {/* Main Content Card */}
        <motion.div
          className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-12 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header & Branding */}
          <motion.div className="text-center mb-10" variants={containerVariants}>
            <motion.h1
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: '#C8287E' }}
              variants={itemVariants}
            >
              The Scalable Pipeline Blueprint
            </motion.h1>
            <motion.h2
              className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
              variants={itemVariants}
            >
              Stop Losing 10+ Hours/Week to <span className="italic text-pink-600">Admin Chaos</span>
              <span className="block w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-pinkbg-pink-600 to-[#a62066] rounded-full"></span>
            </motion.h2>
             <motion.p
              className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto"
              variants={itemVariants}
            >
              You're a <span className="font-semibold text-pink-600">B2B Service Provider</span>,You need a systematic growth strategy, not another contractor who just adds items to a checklist.
            </motion.p>

          </motion.div>

          {/* Testimonial Section */}
          <motion.div
            className="bg-gradient-to-br from-white to-purple-200 rounded-md shadow-md p-6 md:p-8 mb-8 border-l-1 border-pink-600"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center">
              <blockquote className="text-xs sm:text-sm italic text-gray-700 leading-relaxed mb-4">
                "Working with the team has been an absolute game changer. They stepped in with professionalism and initiative—they didn't just follow instructions, they helped me build and implement an entire <span className="font-bold text-pink-600">customer acquisition engine</span> that is now the backbone of our growth. My operations are smoother, and I have the confidence to scale."
              </blockquote>
              <cite className="text-xs font-semibold text-gray-600 not-italic">
                — Tekiah Tunstall, Founder & CEO, Preferred Solutions Transport
              </cite>
            </div>
          </motion.div>

          {/* Value Proposition Section */}
          <motion.div className="space-y-8 text-center" variants={containerVariants}>
      
            {/* Results Callout */}
            <motion.div
              className="bg-gradient-to-br from-white to-pink-300 rounded-xl shadow-md p-8"
              variants={itemVariants}
              whileHover={{ backgroundColor: '#fdf2f8', scale: 1.02 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                The Solution is <span className="italic text-pink-600">The Scalable Pipeline Blueprint.</span>
              </h3>
              <p className="text-sm text-[#8E24AA] mt-3 font-medium">
                We turn administrative time wasting into a <span className="font-bold">predictable, automated acquisition engine.</span>
              </p>
            </motion.div>
          </motion.div>

          <motion.hr className="my-12 border-gray-200" variants={itemVariants} />

          {/* The Offer Section */}
          <motion.div className="text-center" variants={containerVariants}>
            <motion.h3
              className="text-lg sm:text-xl font-semibold text-gray-900 mb-6"
              variants={itemVariants}
            >
              Get Your <span className=" text-white p-2 rounded-md bg-pink-600">FREE</span> Profit-First Audit
              <span className="block w-20 h-1 mx-auto mt-3 bg-gradient-to-r from-pinkbg-pink-600 to-[#a62066] rounded-full"></span>
            </motion.h3>
            <motion.p
              className="text-sm text-gray-600 mb-10 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              In this focused, 15-minute audit, we use your data to find your biggest revenue leaks and give you a roadmap.
            </motion.p>

            {/* Benefits Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
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
                  <h4 className="text-base font-semibold text-pinkbg-pink-600 mb-3">{benefit.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="bg-gradient-to-r from-pinkbg-pink-600 to-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto mb-10"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-base font-semibold text-gray-900 mb-4">
                Ready to <span className="text-pinkbg-pink-600">Unlock Your Growth</span>?
              </h4>
              <motion.a
                href="https://zcal.co/carolinekabi/discovery-call-30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-full bg-pink-600 text-white shadow-lg"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: '#a62066',
                  boxShadow: '0 4px 12px rgba(200, 40, 126, 0.3)',
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Book your free Scalable Pipeline Audit with Caroline Kabi"
              >
                <FaCalendarAlt className="mr-2 text-sm" aria-hidden="true" />
                Secure Your FREE Scalable Pipeline Audit Now
              </motion.a>
              <p className="mt-4 text-xs text-gray-500">
                <span className='font-bold text-red-500'>URGENT:</span> Only 3 spots available this week. Schedule your audit now before they're gone.
              </p>
            </motion.div>
          </motion.div>

          {/* Strategist Footer */}
          <motion.div
            className="mt-12 pt-6 border-t border-gray-200 text-center"
            variants={containerVariants}
          >
            <motion.p
              className="text-xs text-gray-500"
              variants={itemVariants}
            >
              Presented by: <span className="font-semibold text-gray-700">Caroline Kabi</span>, Growth Operations Strategist
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default ScalablePipelineAudit;
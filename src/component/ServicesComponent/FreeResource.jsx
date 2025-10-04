import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'; // npm install @emailjs/browser
import { FaFilePdf, FaTimes } from 'react-icons/fa';
import { assets } from '../../assets/assets';

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
    boxShadow: '0 8px 16px rgba(200, 40, 126, 0.3)', // #C8287E shadow
    transition: { duration: 0.2 },
  },
};

const FreeResource = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [formStatus, setFormStatus] = useState(null);

  // EmailJS Configuration (Replace with your actual values)
  const EMAILJS_SERVICE_ID = 'service_087cowb'; // From EmailJS dashboard
  const EMAILJS_TEMPLATE_ID = 'template_uzv29ap'; // From EmailJS templates
  const EMAILJS_PUBLIC_KEY = 'eM__3zwSLlZ1O-FZM'; // From EmailJS account settings

  // Sample PDF resources (replace with actual data)
  const resources = [
    {
      id: 1,
      title: 'The Founder’s Guide to Delegation in the AI Era',
      previewImage: assets.heroabout,
      pdfUrl: assets.pdf1,
    },
  ];

  // Initialize EmailJS (do this once, e.g., in useEffect or here)
  React.useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleDownloadClick = (resource) => {
    setSelectedResource(resource);
    setIsPopupOpen(true);
    setFormStatus(null); // Reset form status when opening popup
  };

  const handlePopupSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Processing...');

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      setFormStatus(null);
      return;
    }

    // Prepare parameters for EmailJS template
    const templateParams = {
      to_email: email,
      resource_title: selectedResource.title,
      // Add more params as needed for your template (e.g., from_name, message)
    };

    try {
      // Send email via EmailJS
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

      setFormStatus('Downloading...');

      // Trigger download
      const link = document.createElement('a');
      link.href = selectedResource.pdfUrl;
      link.download = selectedResource.title.toLowerCase().replace(/\s+/g, '-') + '.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Reset and close popup after a brief delay to show download state
      setTimeout(() => {
        setEmail('');
        setEmailError('');
        setIsPopupOpen(false);
        setSelectedResource(null);
        setFormStatus(null);
      }, 1000); // 1-second delay for user to see "Downloading..."
    } catch (error) {
      console.error('EmailJS send error:', error);
      setFormStatus({
        type: 'error',
        message: 'Failed to send confirmation. Please try again or contact us at caroline@empoweredaiva.com.',
      });
    }
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    setEmail('');
    setEmailError('');
    setSelectedResource(null);
    setFormStatus(null);
  };

  return (
    <section
      id="free-resources"
      className="w-full max-w-[100vw] min-h-[80vh] h-fit py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#C8287E]/5 relative overflow-hidden"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Headline */}
        <motion.h1
          className="text-3xl sm:text-4xl  font-bold text-color mb-2 text-center leading-tight"
          variants={itemVariants}
        >
          Free Resources
          <span className="block w-48 h-1 mx-auto mt-4 bg-gradient-to-r from-[#C8287E] to-[#a62066] rounded-full"></span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-sm sm:text-base  text-gray-600 mb-12 text-center leading-relaxed max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Unlock valuable insights with our free, downloadable PDFs. Enter your email to access these
          expertly crafted resources designed to help you{' '}
          <span className="font-semibold text-color">delegate, grow, and thrive</span>.
        </motion.p>

        {/* Resource Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
        >
          {resources.map((resource) => (
            <motion.div
              key={resource.id}
              className="bg-white rounded-2xl shadow-lg p-4 w-full flex flex-col items-center relative"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="absolute top-4 right-4">
                <FaFilePdf className="text-color text-xl" aria-hidden="true" />
              </div>
              <img
                src={resource.previewImage}
                alt={`Preview of ${resource.title} PDF`}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-base sm:text-lg font-bold text-color mb-2 text-center">
                {resource.title}
              </h3>
              <motion.button
                onClick={() => handleDownloadClick(resource)}
                className="inline-flex items-center px-6 py-3 text-base font-semibold rounded-full bg-color text-white shadow-md hover:bg-[#a62066] transition-colors duration-300"
                variants={itemVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                aria-label={`Download ${resource.title} PDF`}
              >
                Download PDF
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Popup Form */}
      {isPopupOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 max-w-md w-full relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <button
              onClick={handlePopupClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-[#C8287E]"
              aria-label="Close popup"
            >
              <FaTimes className="text-xl" aria-hidden="true" />
            </button>
            <h2 className="text-xl sm:text-2xl font-semibold text-color mb-4 text-center">
              Get Your Free {selectedResource?.title}
            </h2>
            <p className="text-sm text-gray-600 mb-6 text-center">
              Enter your email to download this resource instantly.
            </p>
            {formStatus && (
              <div
                className={`mb-4 p-4 rounded-lg text-center ${
                  formStatus === 'Downloading...' || formStatus === 'Processing...'
                    ? 'bg-blue-100 text-blue-800'
                    : formStatus.type === 'error'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-green-100 text-green-800'
                }`}
              >
                {typeof formStatus === 'object' ? formStatus.message : formStatus}
              </div>
            )}
            
            <form onSubmit={handlePopupSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError('');
                  }}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8287E] text-gray-700 bg-gray-50"
                  aria-label="Your email address for downloading the PDF"
                />
                {emailError && (
                  <p className="text-sm text-red-500 mt-1">{emailError}</p>
                )}
              </div>
              <motion.button
                type="submit"
                disabled={formStatus === 'Processing...' || formStatus === 'Downloading...'}
                className={`w-full inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-full text-white shadow-md transition-colors duration-300 ${
                  formStatus === 'Processing...' || formStatus === 'Downloading...'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-color hover:bg-[#a62066]'
                }`}
                variants={itemVariants}
                whileHover={formStatus ? {} : 'hover'}
                whileTap={formStatus ? {} : { scale: 0.95 }}
                aria-label="Submit email to download the PDF"
              >
                {formStatus === 'Processing...' ? 'Processing...' : formStatus === 'Downloading...' ? 'Downloading...' : 'Download Now'}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default FreeResource;
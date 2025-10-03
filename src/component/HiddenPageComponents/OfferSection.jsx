
// components/OfferSection.jsx
import React from 'react';

const OfferSection = () => {
  const benefits = [
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
  ];

  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Get Your FREE Profit-First Audit
      </h3>
      <p className="text-lg text-gray-600 mb-8">
        In this 15-minute audit, we use The Scalable Pipeline Blueprint to
        identify:
      </p>
      <ul className="text-left max-w-xl mx-auto space-y-3 mb-10">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start text-gray-700">
            <CheckIcon />
            <span>
              <span className="font-semibold">{benefit.title}</span>{' '}
              {benefit.description}
            </span>
          </li>
        ))}
      </ul>
      <a
        href="https://your-scheduling-link.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-12 py-4 text-xl font-bold text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
      >
        Book Your FREE Scalable Pipeline Audit Now
      </a>
      <p className="mt-4 text-sm text-gray-500">
        Only 5 spots available this week for the free audit.
      </p>
    </div>
  );
};

export default OfferSection;

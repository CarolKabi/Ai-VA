import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import HiddenPage from './pages/HiddenPage';
import ScalablePipelineAudit from './pages/ScalableAudit';

const App = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  // Page-specific SEO metadata and structured data
  const pageSEO = {
    '/': {
      title: 'AI Empowered Virtual Assistants - Home',
      description:
        'AI Empowered Virtual Assistants provides AI-enhanced administrative support, project management, and strategic business solutions for founders and businesses.',
      keywords: 'virtual assistants, AI-powered support, administrative services, project management, business solutions',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Home',
        url: 'https://www.empoweredaiva.com',
        description:
          'AI Empowered Virtual Assistants provides AI-enhanced administrative support, project management, and strategic business solutions for founders and businesses.',
        publisher: {
          '@type': 'Organization',
          name: 'AI Empowered Virtual Assistants',
          url: 'https://www.empoweredaiva.com',
          logo: 'https://www.empoweredaiva.com/Logo.svg',
        },
      },
    },
    '/about': {
      title: 'About Us - AI Empowered Virtual Assistants',
      description:
        'Learn about AI Empowered Virtual Assistants, our mission to empower businesses with AI-enhanced virtual assistant services, and our expert team.',
      keywords: 'about AI Empowered VAs, virtual assistant agency, AI business solutions',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'About Us',
        url: 'https://www.empoweredaiva.com/about',
        description:
          'Learn about AI Empowered Virtual Assistants, our mission to empower businesses with AI-enhanced virtual assistant services, and our expert team.',
        publisher: {
          '@type': 'Organization',
          name: 'AI Empowered Virtual Assistants',
          url: 'https://www.empoweredaiva.com',
          logo: 'https://www.empoweredaiva.com/Logo.svg',
        },
      },
    },
    '/services': {
      title: 'Services - AI Empowered Virtual Assistants',
      description:
        'Explore our AI-enhanced virtual assistant services, including administrative support, project management, customer service, and strategic business solutions.',
      keywords: 'virtual assistant services, AI-enhanced services, business support, project management',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Services',
        url: 'https://www.empoweredaiva.com/services',
        description:
          'Explore our AI-enhanced virtual assistant services, including administrative support, project management, customer service, and strategic business solutions.',
        publisher: {
          '@type': 'Organization',
          name: 'AI Empowered Virtual Assistants',
          url: 'https://www.empoweredaiva.com',
          logo: 'https://www.empoweredaiva.com/Logo.svg',
        },
      },
    },
    '/pricing': {
      title: 'Pricing - AI Empowered Virtual Assistants',
      description:
        'Discover flexible pricing plans for AI Empowered Virtual Assistants’ AI-enhanced services tailored to your business needs.',
      keywords: 'virtual assistant pricing, AI business solutions pricing, service packages',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Pricing',
        url: 'https://www.empoweredaiva.com/pricing',
        description:
          'Discover flexible pricing plans for AI Empowered Virtual Assistants’ AI-enhanced services tailored to your business needs.',
        publisher: {
          '@type': 'Organization',
          name: 'AI Empowered Virtual Assistants',
          url: 'https://www.empoweredaiva.com',
          logo: 'https://www.empoweredaiva.com/Logo.svg',
        },
      },
    },
    '/contact': {
      title: 'Contact Us - AI Empowered Virtual Assistants',
      description:
        'Get in touch with AI Empowered Virtual Assistants to discuss your business needs or book a free discovery call.',
      keywords: 'contact AI Empowered VAs, virtual assistant support, discovery call',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Contact Us',
        url: 'https://www.empoweredaiva.com/contact',
        description:
          'Get in touch with AI Empowered Virtual Assistants to discuss your business needs or book a free discovery call.',
        publisher: {
          '@type': 'Organization',
          name: 'AI Empowered Virtual Assistants',
          url: 'https://www.empoweredaiva.com',
          logo: 'https://www.empoweredaiva.com/Logo.svg',
        },
      },
    },
    '/terms-and-conditions': {
      title: 'Terms and Conditions - AI Empowered Virtual Assistants',
      description:
        'Review the Terms and Conditions for using the AI Empowered Virtual Assistants website and services.',
      keywords: 'terms and conditions, AI Empowered VAs terms, website usage terms',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Terms and Conditions',
        url: 'https://www.empoweredaiva.com/terms-and-conditions',
        description:
          'Review the Terms and Conditions for using the AI Empowered Virtual Assistants website and services.',
        publisher: {
          '@type': 'Organization',
          name: 'AI Empowered Virtual Assistants',
          url: 'https://www.empoweredaiva.com',
          logo: 'https://www.empoweredaiva.com/Logo.svg',
        },
      },
    },
    '/hidden-page':{
      title: 'Hidden Page - AI Empowered Virtual Assistants',
      description:
        'This is a hidden page not indexed by search engines.',
      keywords: 'hidden page, noindex',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Hidden Page',
        url: 'https://www.empoweredaiva.com/hidden-page',
        description:

          'This is a hidden page not indexed by search engines.',
        publisher: {
          '@type': 'Organization',
          name: 'AI Empowered Virtual Assistants',
          url: 'https://www.empoweredaiva.com',
          logo: 'https://www.empoweredaiva.com/Logo.svg',
        },
      },
      noIndex: true,

    },
    "hidden-page2": {
      title: 'Hidden Page 2 - AI Empowered Virtual Assistants',
      description: "This is another hidden page not indexed by search engines.",
      keywords: 'hidden page 2, noindex',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Hidden Page 2',
        url: 'https://www.empoweredaiva.com/hidden-page-2',
        description: 'This is another hidden page not indexed by search engines.',
        publisher: {
          '@type': 'Organization',
          name: 'AI Empowered Virtual Assistants',
          url: 'https://www.empoweredaiva.com',
          logo: 'https://www.empoweredaiva.com/Logo.svg',
        },
      },
      noIndex: true,
    },  
    '/privacy-policy': {
      title: 'Privacy Policy - AI Empowered Virtual Assistants',
      description:
        'Read the Privacy Policy for AI Empowered Virtual Assistants to understand how we collect, use, and protect your personal information.',
      keywords: 'privacy policy, AI Empowered VAs privacy, data protection',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Privacy Policy',
        url: 'https://www.empoweredaiva.com/privacy-policy',
        description:
          'Read the Privacy Policy for AI Empowered Virtual Assistants to understand how we collect, use, and protect your personal information.',
        publisher: {
          '@type': 'Organization',
          name: 'AI Empowered Virtual Assistants',
          url: 'https://www.empoweredaiva.com',
          logo: 'https://www.empoweredaiva.com/Logo.svg',
        },
      },
    },
  };

  // Get current page SEO data, default to home if route not found
  const currentSEO = pageSEO[location.pathname] || pageSEO['/'];

  return (
    <HelmetProvider>
      <Helmet>
        <title>{currentSEO.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={currentSEO.structuredData.url} />
        {/* Open Graph Tags */}
        <meta property="og:title" content={currentSEO.title} />
        <meta property="og:description" content={currentSEO.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentSEO.structuredData.url} />
        <meta property="og:image" content="https://www.empoweredaiva.com/og-image.jpg" />
        <meta property="og:image:alt" content="AI Empowered Virtual Assistants Logo" />
        <meta property="og:site_name" content="AI Empowered Virtual Assistants" />
        <meta property="og:locale" content="en_US" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentSEO.title} />
        <meta name="twitter:description" content={currentSEO.description} />
        <meta name="twitter:image" content="https://www.empoweredaiva.com/og-image.jpg" />
        <meta name="twitter:image:alt" content="AI Empowered Virtual Assistants Logo" />
        <meta name="twitter:site" content="@AIEmpoweredVAs" />
        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(currentSEO.structuredData)}</script>
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/terms-and-conditions" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Home />} />
        <Route path="/hidden-page" element={<HiddenPage />} />
        <Route path="/hidden-page-2" element={<ScalablePipelineAudit />} />
      </Routes>
    </HelmetProvider>
  );
};

export default App;
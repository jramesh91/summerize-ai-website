import React, { useState, useEffect, useRef } from 'react';
import landingPagePhoto from '../assets/videos/summer-gif.gif';
import HowItWorksSection from '../sections/HowItWorksSection';
import PricingSection from '../sections/PricingSection';
import { ReviewSection } from '../sections/ReviewSection';
import { Typography } from "@material-tailwind/react";
import { TeamSection } from '../sections/TeamSection';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const reviewSection = useRef(null);
  const pricingSection = useRef(null);
  const teamSection = useRef(null);

  // For dynamic content animation
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const contentTypes = [
    "webpages", 
    "articles", 
    "blogs", 
    "PDFs", 
    "white papers", 
    "research journals", 
    "news stories", 
    "e-books", 
    "reports", 
    "brand websites", 
    "product descriptions", 
    "reviews", 
    "case studies", 
    "interview transcripts", 
    "forums & discussions"
  ];
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % contentTypes.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Handle Get it on Chrome Store button click
  const handleGetItOnChromeClick = () => {
    fetch("https://bit.ly/sum69mer", { method: 'GET', mode: 'no-cors' })
      .then(() => {})
      .catch((error) => {});
    window.open("https://chrome.google.com/webstore/detail/quick-easy-summaries/oaoiejebnjkkkeoonoogjggkijjcagco?hl=en&authuser=0", '_blank');
  };

  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <section className="container mx-auto p-4 py-10 md:py-20 md:px-4 flex flex-col-reverse md:flex-row">
          <div className="flex items-center mb-8 md:mb-0 w-full md:w-2/5">
            <img src={landingPagePhoto} alt="Healthcare Image" className="rounded-lg shadow-xl mx-auto md:mx-0 w-full" />
          </div>
          <div className="flex flex-col justify-center items-center text-center w-full md:w-3/5 md:pl-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-2 leading-snug">
              Summerize any
            </h1>
            <div
              className="text-4xl md:text-6xl font-extrabold text-purple-500 mb-4 leading-snug"
              style={{ animation: 'fadeInOut 2s infinite' }}
            >
              {contentTypes[currentTextIndex]}
            </div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg text-center">
              Generate concise summaries or keywords with a single click. Stay informed with less reading.
            </p>
            <button 
              className="hidden md:flex items-center bg-purple-400 text-white px-8 py-3 rounded-lg hover:bg-purple-500 transition duration-300 transform hover:scale-105"
              onClick={handleGetItOnChromeClick}
            >
              Get it on Chrome Store
            </button>
          </div>
        </section>

        <section className="container mx-auto my-5 md:my-10 px-4">
          <HowItWorksSection />
        </section>

        <section id="pricing-section" ref={pricingSection} className="container mx-auto my-10 px-4">
          <Typography variant="h1">Pricing</Typography>
          <PricingSection />
        </section>

        <section id="team-section" ref={teamSection} className="container mx-auto my-10 px-4">
          <Typography variant="h1">Team</Typography>
          <TeamSection />
        </section>

        <Footer />
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Typography variant="h5">© 2023 by summerize.ai</Typography>
        </div>
        <div className="flex space-x-4">
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default LandingPage;

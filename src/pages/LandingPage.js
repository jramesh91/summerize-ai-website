import React from 'react'; // Import React for JSX support
import landingPagePhoto from '../assets/videos/summer-gif.gif';
import HowItWorksSection from '../sections/HowItWorksSection';
import PricingSection from '../sections/PricingSection';
import { ReviewSection } from '../sections/ReviewSection';

import {
  Typography
} from "@material-tailwind/react";
import { TeamSection } from '../sections/TeamSection';

// Footer component
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Typography variant="h5">© 2023 by summerize.ai</Typography>
        </div>
        <div className="flex space-x-4">
        </div>
      </div>
    </footer>
  );
}


const LandingPage = () => {

  // Handle Get it on Chrome Store button click
  const handleGetItOnChromeClick = () => {
    // Fetch analytics URL
    fetch("https://bit.ly/sum69mer", { method: 'GET', mode: 'no-cors' })
      .then(() => {
        // You can log analytics success here if needed
      })
      .catch((error) => {
        // You can log analytics failure here if needed
      });

    // Redirect to the Chrome Extension page
    window.open("https://chrome.google.com/webstore/detail/quick-easy-summaries/oaoiejebnjkkkeoonoogjggkijjcagco?hl=en&authuser=0", '_blank');
  };
  return (
    <>
      <div className="min-h-screen overflow-x-hidden">

        {/* Hero Section */}
        <section className="container mx-auto p-4 py-10 md:py-20 md:px-4 flex flex-col-reverse md:flex-row">

          {/* Image */}
          <div className="flex items-center mb-8 md:mb-0 w-full md:w-2/5">
            <img src={landingPagePhoto} alt="Healthcare Image" className="rounded-lg shadow-xl mx-auto md:mx-0 w-full" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center items-center text-center w-full md:w-3/5 md:pl-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4 leading-snug">The Chrome plugin you didn't know you needed</h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg text-center">
              Generate concise summaries or keyword highlights for web articles with a single click. Stay informed without reading the whole page.</p>

            {/* CTA Button with an icon */}
            <button className="hidden md:flex items-center bg-purple-400 text-white px-8 py-3 rounded-lg hover:bg-purple-500 transition duration-300 transform hover:scale-105"
              onClick={handleGetItOnChromeClick}
            >
              <span>Get it on Chrome Store</span>
              {/* <i className="material-icons ml-2">arrow_forward</i> */}
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto my-5 md:my-10 px-4">
          {/* ... Feature components ... */}
          <HowItWorksSection />
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto my-10 px-4">
          <Typography variant="h1">Pricing</Typography>
          <PricingSection />
        </section>

        {/* Team Section */}
        <section className="container mx-auto my-10 px-4">
          <Typography variant="h1">Team</Typography>
          <TeamSection />
        </section>
        {/* Footer */}
        <Footer />

      </div>

    </>
  );
}

export default LandingPage;
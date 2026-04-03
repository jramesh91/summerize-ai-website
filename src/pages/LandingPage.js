import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { PainPointSection } from '../sections/PainPointSection';
import { PersonaSection } from '../sections/PersonaSection';
import HowItWorksSection from '../sections/HowItWorksSection';
import PricingSection from '../sections/PricingSection';
import { ReviewSection } from '../sections/ReviewSection';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-[#0a0a0f] min-h-screen overflow-x-hidden">
      <HeroSection />
      <PainPointSection />

      <section className="bg-[#0a0a0f] py-24 px-4">
        <PersonaSection />
      </section>

      <section id="how-it-works" className="bg-[#0a0a0f] py-16 px-4">
        <HowItWorksSection />
      </section>

      <section id="pricing-section" className="bg-[#0a0a0f] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-purple-400 uppercase tracking-widest font-medium mb-3 text-center">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10">Simple, honest pricing</h2>
          <PricingSection />
        </div>
      </section>

      <section id="reviews-section" className="bg-[#0a0a0f] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-purple-400 uppercase tracking-widest font-medium mb-3 text-center">What users say</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10">Real people. Real time saved.</h2>
          <ReviewSection />
        </div>
      </section>

      <Footer />
    </div>
  );
};

function Footer() {
  return (
    <footer className="bg-[#0d0d17] border-t border-white/5 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <span className="text-white font-bold text-lg">
            summerize<span className="text-purple-400">.ai</span>
          </span>
          <p className="text-slate-500 text-xs mt-1">© 2024 summerize.ai — Stop regretting clicks.</p>
        </div>
        <div className="flex gap-6 text-sm text-slate-500">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default LandingPage;

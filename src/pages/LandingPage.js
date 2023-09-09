import landingPagePhoto from '../assets/videos/summer-gif.gif'
import HowItWorksSection from '../sections/HowItWorksSection';
import PricingSection from '../sections/PricingSection';
import { ReviewSection } from '../sections/ReviewSection';

import {
  Typography
} from "@material-tailwind/react";
import { TeamSection } from '../sections/TeamSection';

const LandingPage = () => {
    return ( 
    <>
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto py-20 px-4 flex">
    {/* Image on the left */}
    <div className="w-2/5 flex items-center">
        <img src={landingPagePhoto} alt="Healthcare Image" className="rounded-lg shadow-xl" />
    </div>

    {/* Content on the right */}
    <div className="w-3/5 pl-16 flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4 leading-snug">Get 1% better everyday with less reading</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg text-center">
        Generate concise summaries or keyword highlights for web articles with a single click. Stay informed without reading the whole page.</p>
        
        {/* CTA Button with an icon */}
        <button className="flex items-center bg-purple-400 text-white px-8 py-3 rounded-lg hover:bg-purple-400 transition duration-300 transform hover:scale-105">
            <span>Get it on Chrome Store</span>
            {/* <i className="material-icons ml-2">arrow_forward</i> This assumes you have Material Icons integrated */}
        </button>
    </div>
    </section>
     

      {/* Features Section */}
      <section className="container mx-auto my-10">
        {/* ... Feature components ... */}
        <HowItWorksSection/>
      </section>

      {/* Testimonials Section */}
    

      {/* Pricing Section */}
      <section className="container mx-auto my-10">
        {/* ... Pricing components ... */}
        <Typography variant="h1">Pricing</Typography>
        <PricingSection/>
      </section>

      {/* Team Section */}
      <section className="container mx-auto my-10">
      {/* ... Pricing components ... */}
      <Typography variant="h1">Team</Typography>
      <TeamSection/>
      </section>

    
    </div>
    </> 
    );
}
 
export default LandingPage;
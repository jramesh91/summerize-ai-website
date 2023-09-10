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
    <div className="min-h-screen overflow-x-hidden">

{/* Hero Section */}
<section className="container mx-auto p-4 py-10 md:py-20 md:px-4 flex flex-col-reverse md:flex-row">
    
    {/* Image */}
    <div className="flex items-center mb-8 md:mb-0 w-full md:w-2/5">
        <img src={landingPagePhoto} alt="Healthcare Image" className="rounded-lg shadow-xl mx-auto md:mx-0 w-full" />
    </div>

    {/* Content */}
    <div className="flex flex-col justify-center items-center text-center w-full md:w-3/5 md:pl-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4 leading-snug">Get 1% better everyday with less reading</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg text-center">
        Generate concise summaries or keyword highlights for web articles with a single click. Stay informed without reading the whole page.</p>
        
        {/* CTA Button with an icon */}
        <button className="hidden md:flex items-center bg-purple-400 text-white px-8 py-3 rounded-lg hover:bg-purple-500 transition duration-300 transform hover:scale-105">
          <span>Get it on Chrome Store</span>
            {/* <i className="material-icons ml-2">arrow_forward</i> */}
          </button>
    </div>
</section>

{/* Features Section */}
<section className="container mx-auto my-5 md:my-10 px-4">
  {/* ... Feature components ... */}
  <HowItWorksSection/>
</section>

{/* Pricing Section */}
<section className="container mx-auto my-10 px-4">
  <Typography variant="h1">Pricing</Typography>
  <PricingSection/>
</section>

{/* Team Section */}
<section className="container mx-auto my-10 px-4">
  <Typography variant="h1">Team</Typography>
  <TeamSection/>
</section>

</div>

    </> 
    );
}
 
export default LandingPage;
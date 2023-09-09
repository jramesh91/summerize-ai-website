import keywords from '../assets/images/keywords.png'
import { Chip } from "@material-tailwind/react";
import summary from '../assets/images/summary.png'
const HowItWorksSection = () => {
    return ( 
    <>
    <div className="">
    
    {/* Summary Section */}
    <section className="container mx-auto py-20 px-4 flex">
        {/* Content on the left */}
        <div className="w-3/5 pr-16 flex flex-col justify-center items-center text-center">
            <h1 className="text-6xl font-extrabold text-gray-800 mb-4 leading-snug">Generate Concise Summaries with a click</h1>
            {/* Chips below h1 */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg text-center">
            Elevate your leisure reading with AI-powered highlights. Delve into blogs, memoirs, and narratives, and grasp the essence in moments with smart summaries.</p>
            <div className="flex space-x-4 mt-4">
                <Chip color="indigo" value="Blogs" />
                <Chip color="purple" value="News" />
                <Chip color="teal" value="Guides" />
                <Chip color="cyan" value="Magazines" />
            </div>
        </div>
        {/* Image on the right */}
        <div className="w-2/5 flex items-center">
            <img src={summary} alt="Healthcare Image" className="rounded-lg shadow-xl" />
        </div>
    </section>

    <section className="container mx-auto py-20 px-4 flex">
        {/* Image on the left */}
    <div className="w-2/5 flex items-center">
        <img src={keywords} alt="Healthcare Image" className="rounded-lg shadow-xl" />
    </div>

    {/* Content on the right */}
    <div className="w-3/5 pl-16 flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4 leading-snug"> ... even keywords and highlights</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg text-center">
        Unlock academic mastery with AI-driven summaries and keywords. Transform complex research, journals, and theses into digestible insights for optimal learning.</p>
        <div className="flex space-x-4 mt-4">
                <Chip color="indigo" value="Journals" />
                <Chip color="purple" value="Reports" />
                <Chip color="teal" value="Essays" />
                <Chip color="cyan" value="Op-Eds" />
        </div>
    </div>
    </section>

      
    </div>
    </> 
    );
}
 
export default HowItWorksSection;
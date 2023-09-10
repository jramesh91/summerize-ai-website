import keywords from "../assets/images/keywords.png";
import { Chip } from "@material-tailwind/react";
import summary from "../assets/images/summary.png";
const HowItWorksSection = () => {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        {/* Summary Section */}
        <section className="container mx-auto py-10 md:py-20 px-4 flex flex-col md:flex-row">
          {/* Content on the left */}
          <div className="w-full md:w-3/5 md:pr-0 flex flex-col justify-center items-center text-center mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4 leading-snug">
              Generate Concise Summaries with a click
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg text-center">
              Elevate your leisure reading with AI-powered highlights...
            </p>
            <div className="flex space-x-4 mt-4">
              <Chip color="indigo" value="Blogs" />
              <Chip color="purple" value="News" />
              <Chip color="teal" value="Guides" />
              <Chip color="cyan" value="Magazines" />
            </div>
          </div>
          {/* Image on the right */}
          <div className="w-full md:w-2/5 flex justify-center items-center md:ml-16">
            <img
              src={summary}
              alt="Summary Image"
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </section>

        <section className="container mx-auto py-10 md:py-20 px-4 flex flex-col-reverse md:flex-row">
          {/* Image on the left */}
          <div className="w-full md:w-2/5 flex justify-center items-center mb-10 md:mb-0">
            <img
              src={keywords}
              alt="Keywords Image"
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>

          {/* Content on the right */}
          <div className="w-full md:w-3/5 md:pl-16 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4 leading-snug"> {" "} ... even keywords and highlights</h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg text-center">
              Unlock academic mastery with AI-driven summaries...
            </p>
            <div className="flex space-x-4 mt-4 mb-8 md:mb-0">
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
};

export default HowItWorksSection;

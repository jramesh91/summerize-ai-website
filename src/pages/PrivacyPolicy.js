// PrivacyPolicy.js

import React from 'react';
import { Link } from 'react-router-dom';
import {
    Typography
  } from "@material-tailwind/react";


const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <section className="container mx-auto p-4 py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
        <div className="text-lg text-gray-600 leading-relaxed mb-4 text-left">
    <h1 className="text-2xl font-bold mb-4">Privacy Policy of Summerize AI Chrome Extension</h1>
    <p><strong>Effective date:</strong> October 9, 2023</p>

    <h2 className="text-xl font-semibold my-4">1. Introduction</h2>
    <p>
        At Summerize AI, we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes:
    </p>
    <ul className="list-disc pl-6">
        <li>The types of information we may collect or that you may provide when you install and use the Summerize AI Chrome Extension.</li>
        <li>Our practices for collecting, using, maintaining, protecting, and disclosing that information.</li>
    </ul>

    <h2 className="text-xl font-semibold my-4">2. Information We Collect</h2>
    <p>We collect several types of information, including:</p>
    <ul className="list-disc pl-6">
        <li>Information about your interactions with our extension.</li>
        <li>Details of the web pages you visit while our extension is active.</li>
    </ul>

    <h2 className="text-xl font-semibold my-4">3. How We Use Your Information</h2>
    <p>We use information that we collect about you or that you provide to us:</p>
    <ul className="list-disc pl-6">
        <li>To provide you with our extension and its contents.</li>
        <li>To improve our extension's functionality.</li>
    </ul>

    <h2 className="text-xl font-semibold my-4">4. Disclosure of Your Information</h2>
    <p>We do not share, sell, or otherwise disclose your personal information for purposes other than those outlined in this Privacy Policy.</p>

    <h2 className="text-xl font-semibold my-4">5. Changes to Our Privacy Policy</h2>
    <p>We will post any changes to our Privacy Policy on this page. The date the privacy policy was last revised is identified at the top of the page.</p>

    <h2 className="text-xl font-semibold my-4">6. Contact Information</h2>
    <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at: team@mangos.ai</p>
    <p><strong>Website:</strong> summerize.ai</p>
</div>

      </section>
      <Footer />
    </div>
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
            {/* Add more links if necessary */}
          </div>
        </div>
      </footer>
    );
  }

export default PrivacyPolicy;

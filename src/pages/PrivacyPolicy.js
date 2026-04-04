// PrivacyPolicy.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from "@material-tailwind/react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <section className="container mx-auto p-4 py-10 max-w-4xl">
        <div className="text-white leading-relaxed text-left">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-400 mb-8"><strong>Effective date:</strong> October 9, 2023 &nbsp;|&nbsp; <strong>Last updated:</strong> April 4, 2026</p>

          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p className="mb-6">
            This Privacy Policy describes how Summerize AI ("we", "us", or "our") collects, uses, stores, and shares
            information when you use the Easy Summaries Chrome Extension and our website at summerize.ai.
            By using our extension or website, you agree to the practices described in this policy.
          </p>

          <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
          <p className="mb-2">We collect the following categories of data:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Web page content:</strong> When you activate the extension on a page, the visible text content of that page is collected and sent for summarization. This may include article text, product descriptions, or other on-page content.</li>
            <li><strong>Usage data:</strong> Information about how you interact with the extension, including which features you use and how often.</li>
            <li><strong>Feedback and email (optional):</strong> If you submit feedback through our uninstall or feedback form, we collect the message you write and, if provided, your email address.</li>
            <li><strong>Website analytics:</strong> When you visit summerize.ai, we collect anonymized usage data such as page views and browser type via Vercel Analytics.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>To generate AI-powered summaries of web page content you request.</li>
            <li>To store your preferences and summary history within the extension.</li>
            <li>To improve the extension's performance and feature set.</li>
            <li>To respond to feedback or support requests you submit.</li>
            <li>To understand aggregate usage trends on our website.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3">4. Third Parties We Share Data With</h2>
          <p className="mb-2">We share data with the following third-party services to operate the extension and website. We do not sell your data to any third party.</p>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Anthropic (Claude AI)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>What is shared:</strong> The text content of web pages you choose to summarize.</li>
              <li><strong>Purpose:</strong> To generate AI summaries using Anthropic's Claude language model.</li>
              <li><strong>Privacy policy:</strong> <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">anthropic.com/privacy</a></li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Supabase</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>What is shared:</strong> User account data, preferences, and summary history.</li>
              <li><strong>Purpose:</strong> Secure cloud storage and database services.</li>
              <li><strong>Privacy policy:</strong> <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">supabase.com/privacy</a></li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Airtable</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>What is shared:</strong> Feedback messages and email addresses you voluntarily submit.</li>
              <li><strong>Purpose:</strong> To store and manage user feedback submissions.</li>
              <li><strong>Privacy policy:</strong> <a href="https://www.airtable.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">airtable.com/privacy</a></li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Vercel Analytics</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>What is shared:</strong> Anonymized website usage data (page views, browser info).</li>
              <li><strong>Purpose:</strong> To understand how visitors use our website.</li>
              <li><strong>Privacy policy:</strong> <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">vercel.com/legal/privacy-policy</a></li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mb-3">5. Data Storage and Retention</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>User data is stored in Supabase, hosted on servers in the United States.</li>
            <li>Web page content sent to Anthropic for summarization is processed in real time and is not stored by us after the summary is returned.</li>
            <li>Summary history is stored until you delete it or request account deletion.</li>
            <li>Feedback submissions are retained for up to 2 years and then deleted.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3">6. Data Security</h2>
          <p className="mb-6">
            We implement industry-standard security measures including encrypted data transmission (HTTPS/TLS) and
            access-controlled storage via Supabase. No method of transmission over the internet is 100% secure,
            and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold mb-3">7. Your Rights and Choices</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Access:</strong> You may request a copy of the data we hold about you.</li>
            <li><strong>Deletion:</strong> You may request deletion of your account and associated data at any time.</li>
            <li><strong>Opt-out:</strong> You can uninstall the extension at any time to stop all data collection by the extension.</li>
            <li>To exercise any of these rights, contact us at <strong>team@mangos.ai</strong>.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-3">8. Children's Privacy</h2>
          <p className="mb-6">
            Our extension is not directed to children under the age of 13. We do not knowingly collect personal
            information from children under 13.
          </p>

          <h2 className="text-2xl font-semibold mb-3">9. Changes to This Policy</h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page
            reflects the most recent revision. Continued use of the extension after changes constitutes acceptance
            of the updated policy.
          </p>

          <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
          <p className="mb-2">For privacy questions or requests, contact us at:</p>
          <ul className="list-none pl-0 mb-6 space-y-1">
            <li><strong>Email:</strong> team@mangos.ai</li>
            <li><strong>Website:</strong> summerize.ai</li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Typography variant="h5">© 2026 by summerize.ai</Typography>
        </div>
        <div className="flex space-x-4">
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default PrivacyPolicy;

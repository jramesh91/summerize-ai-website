// PrivacyPolicy.js

import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0a0f]">
      <section className="container mx-auto p-6 py-14 max-w-4xl">
        <div className="text-slate-100 leading-relaxed text-left">

          <h1 className="text-4xl font-bold mb-2 text-white">Privacy Policy</h1>
          <p className="text-slate-400 mb-10">
            <strong className="text-slate-100">Effective date:</strong> October 9, 2023 &nbsp;|&nbsp;{' '}
            <strong className="text-slate-100">Last updated:</strong> April 7, 2026
          </p>

          {/* ── 1. Introduction ────────────────────────────────────────── */}
          <h2 className="text-2xl font-semibold mb-3 text-white">1. Introduction</h2>
          <p className="mb-6">
            This Privacy Policy describes how Summerize AI ("we", "us", or "our") collects, uses,
            stores, and shares information when you use the <strong>Easy Summaries Chrome Extension</strong>{' '}
            ("Extension") and our website at <strong>summerize.ai</strong> ("Website"). By using the
            Extension or Website, you agree to the practices described in this policy.
          </p>

          {/* ── 2. Data We Collect ─────────────────────────────────────── */}
          <h2 className="text-2xl font-semibold mb-3 text-white">2. Data We Collect</h2>
          <p className="mb-4">
            We collect the following categories of data, as disclosed to the Chrome Web Store:
          </p>

          <div className="mb-3">
            <h3 className="text-lg font-semibold text-purple-400 mb-1">Personally Identifiable Information (PII)</h3>
            <p className="mb-2">
              We collect your <strong>email address</strong> if you create an account or voluntarily
              submit it through our feedback form. We do not collect your name, physical address, or
              government ID.
            </p>
          </div>

          <div className="mb-3">
            <h3 className="text-lg font-semibold text-purple-400 mb-1">Authentication Information</h3>
            <p className="mb-2">
              When you sign in to the Extension or Website, authentication credentials (email,
              hashed password, or OAuth tokens) are handled by <strong>Supabase Auth</strong>. We do
              not store raw passwords. Session tokens are stored locally in your browser and are used
              solely to authenticate your requests.
            </p>
          </div>

          <div className="mb-3">
            <h3 className="text-lg font-semibold text-purple-400 mb-1">Financial and Payment Information</h3>
            <p className="mb-2">
              If you subscribe to a paid plan, payment is processed by <strong>Stripe</strong>. We
              never see, store, or transmit your full card number, CVV, or bank details. Stripe
              provides us only with non-sensitive billing metadata (subscription status, plan type,
              last-4 digits of card for display). See Stripe's privacy policy for details on how
              they handle payment data.
            </p>
          </div>

          <div className="mb-3">
            <h3 className="text-lg font-semibold text-purple-400 mb-1">Personal Communications</h3>
            <p className="mb-2">
              If you activate the Extension on a page that contains emails, messages, or chat
              transcripts, that text is treated the same as any other web page content — it is sent
              to Anthropic for summarization and is not stored by us after the summary is returned.
              Feedback messages you submit via our uninstall form are stored in Airtable.
            </p>
          </div>

          <div className="mb-3">
            <h3 className="text-lg font-semibold text-purple-400 mb-1">Location Data</h3>
            <p className="mb-2">
              We collect <strong>approximate location data</strong> in the form of your IP address,
              which is processed by Vercel Analytics to determine country/region for aggregate
              traffic reporting. We do not collect GPS coordinates or precise location. IP addresses
              are anonymized before storage.
            </p>
          </div>

          <div className="mb-3">
            <h3 className="text-lg font-semibold text-purple-400 mb-1">Web History</h3>
            <p className="mb-2">
              The Extension reads the URL and title of the active tab when you invoke the summarize
              action, solely to display context within the Extension UI. We do not log, transmit, or
              store your browsing history. URLs are not sent to our servers or to Anthropic.
            </p>
          </div>

          <div className="mb-3">
            <h3 className="text-lg font-semibold text-purple-400 mb-1">User Activity</h3>
            <p className="mb-2">
              We collect anonymized usage events (e.g., feature interactions, summary requests,
              plan upgrades) to understand how the Extension is used and to improve its features.
              This data does not include the content of any page you visit and cannot be linked back
              to you individually.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-purple-400 mb-1">Website Content</h3>
            <p className="mb-2">
              When you activate the Extension on a page, the <strong>visible text content</strong>{' '}
              of that page is collected and transmitted to Anthropic's API for summarization. This
              may include article text, product descriptions, research papers, or other on-page
              text. This content is processed in real time and is <strong>not stored by us</strong>{' '}
              after the summary is returned to you.
            </p>
          </div>

          {/* ── 3. How We Use Your Data ────────────────────────────────── */}
          <h2 className="text-2xl font-semibold mb-3 text-white">3. How We Use Your Data</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>To generate AI-powered summaries of web page content you request.</li>
            <li>To authenticate you and maintain your session across devices.</li>
            <li>To store your preferences and summary history in your account.</li>
            <li>To process subscription payments and manage your plan.</li>
            <li>To respond to feedback or support requests you submit.</li>
            <li>To analyze aggregate, anonymized usage trends to improve the Extension.</li>
            <li>To comply with legal obligations.</li>
          </ul>

          {/* ── 4. Third Parties We Share Data With ───────────────────── */}
          <h2 className="text-2xl font-semibold mb-3 text-white">4. Third Parties We Share Data With</h2>
          <p className="mb-4">
            We do <strong>not sell</strong> your data to any third party. We share data only with the
            following service providers, each acting solely on our behalf for the stated purpose:
          </p>

          <div className="space-y-5 mb-6">

            <div className="border border-white/10 rounded-lg p-4 bg-white/5">
              <h3 className="text-lg font-semibold text-white mb-2">Anthropic (Claude AI)</h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-100">
                <li><strong className="text-white">Data shared:</strong> Visible text content of web pages you choose to summarize.</li>
                <li><strong className="text-white">Purpose:</strong> To generate AI summaries using Claude.</li>
                <li><strong className="text-white">Stored by them:</strong> Subject to Anthropic's data retention policies.</li>
                <li>
                  <strong className="text-white">Privacy policy:</strong>{' '}
                  <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">
                    anthropic.com/privacy
                  </a>
                </li>
              </ul>
            </div>

            <div className="border border-white/10 rounded-lg p-4 bg-white/5">
              <h3 className="text-lg font-semibold text-white mb-2">Supabase</h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-100">
                <li><strong className="text-white">Data shared:</strong> User account data, authentication credentials, preferences, and summary history.</li>
                <li><strong className="text-white">Purpose:</strong> Secure cloud database and authentication services.</li>
                <li><strong className="text-white">Stored by them:</strong> US-based servers. Data retained until you delete your account.</li>
                <li>
                  <strong className="text-white">Privacy policy:</strong>{' '}
                  <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">
                    supabase.com/privacy
                  </a>
                </li>
              </ul>
            </div>

            <div className="border border-white/10 rounded-lg p-4 bg-white/5">
              <h3 className="text-lg font-semibold text-white mb-2">Stripe</h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-100">
                <li><strong className="text-white">Data shared:</strong> Email address, billing metadata. Card and bank details are entered directly into Stripe's secure form and never pass through our servers.</li>
                <li><strong className="text-white">Purpose:</strong> Payment processing and subscription management.</li>
                <li><strong className="text-white">Stored by them:</strong> Stripe retains transaction records per their legal obligations.</li>
                <li>
                  <strong className="text-white">Privacy policy:</strong>{' '}
                  <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">
                    stripe.com/privacy
                  </a>
                </li>
              </ul>
            </div>

            <div className="border border-white/10 rounded-lg p-4 bg-white/5">
              <h3 className="text-lg font-semibold text-white mb-2">Airtable</h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-100">
                <li><strong className="text-white">Data shared:</strong> Feedback messages and email addresses voluntarily submitted via our uninstall/feedback form.</li>
                <li><strong className="text-white">Purpose:</strong> To store and manage user feedback submissions.</li>
                <li><strong className="text-white">Stored by them:</strong> Retained for up to 2 years, then deleted.</li>
                <li>
                  <strong className="text-white">Privacy policy:</strong>{' '}
                  <a href="https://www.airtable.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">
                    airtable.com/privacy
                  </a>
                </li>
              </ul>
            </div>

            <div className="border border-white/10 rounded-lg p-4 bg-white/5">
              <h3 className="text-lg font-semibold text-white mb-2">Vercel Analytics</h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-100">
                <li><strong className="text-white">Data shared:</strong> Anonymized website usage data including page views, browser type, and approximate location derived from IP address.</li>
                <li><strong className="text-white">Purpose:</strong> To understand how visitors use our Website.</li>
                <li><strong className="text-white">Stored by them:</strong> Aggregated, anonymized data only.</li>
                <li>
                  <strong className="text-white">Privacy policy:</strong>{' '}
                  <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">
                    vercel.com/legal/privacy-policy
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* ── 5. Data Storage and Retention ─────────────────────────── */}
          <h2 className="text-2xl font-semibold mb-3 text-white">5. Data Storage and Retention</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Account data and summary history are stored in Supabase on servers in the United States.</li>
            <li>Web page content sent to Anthropic is processed in real time and is <strong>not retained by us</strong> after the summary is returned.</li>
            <li>Summary history is stored until you delete it or request account deletion.</li>
            <li>Feedback submissions (Airtable) are retained for up to 2 years, then permanently deleted.</li>
            <li>Payment records are retained by Stripe for the duration required by applicable law.</li>
            <li>We retain anonymized analytics data in aggregate form indefinitely.</li>
          </ul>

          {/* ── 6. Data Security ──────────────────────────────────────── */}
          <h2 className="text-2xl font-semibold mb-3 text-white">6. Data Security</h2>
          <p className="mb-6">
            We implement industry-standard security measures including encrypted data transmission
            (HTTPS/TLS) and access-controlled storage via Supabase. Payment data is handled
            exclusively by Stripe's PCI-DSS-compliant infrastructure — we never process or store
            card numbers on our servers. No method of internet transmission is 100% secure, and we
            cannot guarantee absolute security.
          </p>

          {/* ── 7. Your Rights ────────────────────────────────────────── */}
          <h2 className="text-2xl font-semibold mb-3 text-white">7. Your Rights and Choices</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong className="text-white">Access:</strong> You may request a copy of the data we hold about you.</li>
            <li><strong className="text-white">Deletion:</strong> You may request deletion of your account and all associated data at any time.</li>
            <li><strong className="text-white">Correction:</strong> You may request correction of inaccurate data.</li>
            <li><strong className="text-white">Portability:</strong> You may request an export of your summary history.</li>
            <li><strong className="text-white">Opt-out:</strong> Uninstalling the Extension stops all data collection by the Extension immediately.</li>
            <li>To exercise any of these rights, contact us at <strong className="text-white">team@mangos.ai</strong>.</li>
          </ul>

          {/* ── 8. Children's Privacy ─────────────────────────────────── */}
          <h2 className="text-2xl font-semibold mb-3 text-white">8. Children's Privacy</h2>
          <p className="mb-6">
            Our Extension and Website are not directed to children under the age of 13. We do not
            knowingly collect personal information from children under 13. If you believe a child
            has provided us data, contact us immediately at <strong className="text-white">team@mangos.ai</strong>.
          </p>

          {/* ── 9. Changes ────────────────────────────────────────────── */}
          <h2 className="text-2xl font-semibold mb-3 text-white">9. Changes to This Policy</h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. The "Last updated" date at the top
            of this page reflects the most recent revision. Continued use of the Extension or Website
            after changes constitutes acceptance of the updated policy. Material changes will be
            communicated via a notice in the Extension or by email if you have an account.
          </p>

          {/* ── 10. Contact ───────────────────────────────────────────── */}
          <h2 className="text-2xl font-semibold mb-3 text-white">10. Contact Us</h2>
          <p className="mb-2">For privacy questions, data requests, or concerns, contact us at:</p>
          <ul className="list-none pl-0 mb-6 space-y-1">
            <li><strong className="text-white">Email:</strong> team@mangos.ai</li>
            <li><strong className="text-white">Website:</strong> summerize.ai</li>
          </ul>

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
          <p className="text-slate-500 text-xs mt-1">© 2026 summerize.ai — Stop regretting clicks.</p>
        </div>
        <div className="flex gap-6 text-sm text-slate-500">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default PrivacyPolicy;

import React from "react";

const CHROME_STORE_URL =
  "https://chrome.google.com/webstore/detail/quick-easy-summaries/oaoiejebnjkkkeoonoogjggkijjcagco?hl=en&authuser=0";

function handleDownloadClick() {
  fetch("https://bit.ly/sum69mer", { method: "GET", mode: "no-cors" })
    .then(() => {})
    .catch(() => {});
  window.open(CHROME_STORE_URL, "_blank");
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-violet-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-3xl" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium px-3 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
          AI-powered reading intelligence
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          The title lied.{" "}
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
            We'll tell you first.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto mb-4 leading-relaxed">
          Captivating headline. Disappointing content. 8 minutes wasted.
          <strong className="text-white"> Summerize.ai</strong> gives you the real story in 10 seconds —
          so you decide if it's worth your time <em>before</em> you commit.
        </p>

        <p className="text-sm text-white mb-10">
          Not a "read it later" tool. A{" "}
          <span className="text-purple-400 font-medium">"should I read it at all"</span> tool.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center mb-12">
          <button
            onClick={handleDownloadClick}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-purple-900/40 text-base"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
            </svg>
            Add to Chrome — Free
          </button>
        </div>

        {/* Social proof */}
        <p className="text-xs text-white uppercase tracking-widest">
          Used by researchers, sales teams &amp; students who value their time
        </p>

        {/* Browser frame mockup */}
        <div className="mt-14 max-w-2xl mx-auto">
          <div className="bg-[#13131a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
            {/* Browser chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-[#0d0d17]">
              <span className="w-3 h-3 rounded-full bg-red-500/60"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/60"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/60"></span>
              <div className="flex-1 mx-4 bg-white/5 rounded-full px-3 py-1 text-xs text-white text-left">
                medium.com/the-article-that-wasted-your-afternoon
              </div>
            </div>
            {/* Mock content */}
            <div className="p-6 text-left relative">
              <div className="text-xs text-white mb-2 uppercase tracking-wide">Article</div>
              <div className="text-white font-bold text-lg mb-3 leading-snug">
                "10 Revolutionary Strategies That Will Transform Your Productivity Forever"
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-white/5 rounded w-full"></div>
                <div className="h-3 bg-white/5 rounded w-5/6"></div>
                <div className="h-3 bg-white/5 rounded w-4/6"></div>
              </div>

              {/* Extension popup */}
              <div className="absolute top-4 right-4 w-56 bg-[#1a1a2e] border border-purple-500/30 rounded-xl p-4 shadow-2xl shadow-purple-900/30">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-purple-400 font-bold text-sm">summerize.ai</span>
                  <span className="ml-auto w-2 h-2 bg-green-400 rounded-full"></span>
                </div>
                <p className="text-white text-xs leading-relaxed mb-3">
                  <strong>TL;DR:</strong> Repackaged advice from 2015. The "revolutionary" tip #7 is just "wake up earlier." Skip it.
                </p>
                <div className="flex gap-1 flex-wrap">
                  <span className="text-xs bg-purple-500/15 text-purple-300 px-2 py-0.5 rounded-full">clickbait</span>
                  <span className="text-xs bg-white/5 text-white px-2 py-0.5 rounded-full">low value</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

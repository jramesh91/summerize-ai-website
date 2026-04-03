import React from "react";

const painPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
    ),
    stat: "8 min",
    label: "average time wasted",
    text: "The title promised everything. The article delivered one paragraph worth reading — buried at the bottom.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 3L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
      </svg>
    ),
    stat: "47 tabs",
    label: "you'll never get to",
    text: "You saved it to read later. Later never comes. Your browser is a graveyard of good intentions.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stat: "~2 hrs",
    label: "lost to clickbait daily",
    text: "Across email newsletters, LinkedIn posts, and Google results — the hook gets you every time. Until now.",
  },
];

export function PainPointSection() {
  return (
    <section className="bg-[#0a0a0f] py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs text-purple-400 uppercase tracking-widest font-medium mb-3">The Problem</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            You're not a bad reader.{" "}
            <span className="text-white">The internet just isn't honest.</span>
          </h2>
          <p className="text-white max-w-xl mx-auto text-base">
            Titles are engineered to get clicks. Content is built to hold attention. Your time is the cost.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="group bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.07] hover:border-purple-500/30 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg">
                  {point.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{point.stat}</div>
                  <div className="text-xs text-white">{point.label}</div>
                </div>
              </div>
              <p className="text-white text-sm leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>

        {/* Transition */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 text-white text-lg font-medium">
            <span className="block w-12 h-px bg-gradient-to-r from-transparent to-purple-500/60"></span>
            There's a better way to decide.
            <span className="block w-12 h-px bg-gradient-to-l from-transparent to-purple-500/60"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

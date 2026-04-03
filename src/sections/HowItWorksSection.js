const steps = [
  {
    number: "01",
    title: "Open any article, paper, or page",
    description:
      "Works on blog posts, research papers, news articles, PDFs — anywhere you browse. No copy-paste required.",
  },
  {
    number: "02",
    title: "Summerize scans it in ~3 seconds",
    description:
      "The extension reads the full content and extracts what actually matters — the argument, the verdict, the signal.",
  },
  {
    number: "03",
    title: "You decide — read it or skip it",
    description:
      "No regret either way. If it's worth your time, you'll know why. If not, you saved 8 minutes. That adds up.",
  },
];

const CHROME_STORE_URL =
  "https://chrome.google.com/webstore/detail/quick-easy-summaries/oaoiejebnjkkkeoonoogjggkijjcagco?hl=en&authuser=0";

const HowItWorksSection = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-xs text-purple-400 uppercase tracking-widest font-medium mb-3">
          How It Works
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Three seconds to a{" "}
          <span className="bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
            better decision
          </span>
        </h2>
        <p className="text-white max-w-xl mx-auto text-base">
          Summerize works before you read — not after. That's what makes it different.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {steps.map((step, i) => (
          <div
            key={i}
            className="group relative bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.07] hover:border-purple-500/30 rounded-2xl p-8 transition-all duration-300"
          >
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-12 -right-3 w-6 h-px bg-gradient-to-r from-purple-500/40 to-transparent z-10" />
            )}
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-400 text-sm font-bold mb-5">
              {step.number}
            </div>
            <h3 className="text-white font-semibold text-lg mb-3 leading-snug">
              {step.title}
            </h3>
            <p className="text-white text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          href={CHROME_STORE_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-7 py-3.5 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-purple-900/40 text-base"
        >
          See it in action — Add to Chrome
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HowItWorksSection;

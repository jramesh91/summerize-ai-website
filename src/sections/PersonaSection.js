const CHROME_STORE_URL =
  "https://chrome.google.com/webstore/detail/quick-easy-summaries/oaoiejebnjkkkeoonoogjggkijjcagco?hl=en&authuser=0";

const personas = [
  {
    id: "for-researchers",
    eyebrow: "For Researchers",
    headline: "Triage 30 papers in the time it took to read one.",
    pain: "You can't afford to read everything. Abstracts lie. Titles mislead. You need to know if this paper is relevant before investing an hour.",
    bullets: [
      "Instant relevance score",
      "Key argument extracted",
      "Methodology at a glance",
      "Decision: Read or skip",
    ],
    cta: "Try it on your next paper →",
    accentBorder: "border-purple-500/20",
    accentText: "text-purple-400",
    accentBadgeBg: "bg-purple-500/10",
    accentBadgeBorder: "border-purple-500/20",
    mockupLabel: "Research Paper",
    mockupTitle: '"Attention Is All You Need" — Vaswani et al.',
    mockupVerdict: "RELEVANT",
    mockupVerdictColor: "text-green-400",
    mockupSummary:
      "Introduces the Transformer architecture. Key to your lit review on attention mechanisms.",
    mockupTags: ["transformers", "NLP", "read it"],
    reverse: false,
  },
  {
    id: "for-sales",
    eyebrow: "For Sales",
    headline: "Walk into every call knowing more than they expect.",
    pain: "You have 10 minutes to prep, 5 tabs open, and a call in 3 minutes. You need the signal, not the noise.",
    bullets: [
      "Key talking points in seconds",
      "Company news summarized",
      "Pain points surfaced",
      "Sound like you read it all",
    ],
    cta: "Try it before your next call →",
    accentBorder: "border-green-500/20",
    accentText: "text-green-400",
    accentBadgeBg: "bg-green-500/10",
    accentBadgeBorder: "border-green-500/20",
    mockupLabel: "Company Blog",
    mockupTitle: '"Acme Corp Launches AI-Powered CRM in Q4"',
    mockupVerdict: "USE THIS",
    mockupVerdictColor: "text-purple-400",
    mockupSummary:
      "They're investing in automation. Lead with ROI. Mention integration story.",
    mockupTags: ["talking point", "opportunity", "prep it"],
    reverse: true,
  },
  {
    id: "for-students",
    eyebrow: "For Students",
    headline: "Read smarter. Not more.",
    pain: "Your syllabus is 40 articles long. You have 2 days. You need to know which ones actually matter before you open any of them.",
    bullets: [
      "Instantly see what each article argues",
      "Spot the ones you can skim",
      "Focus your time on what's graded",
      "Never start an assignment cold",
    ],
    cta: "Try it on your reading list →",
    accentBorder: "border-indigo-500/20",
    accentText: "text-indigo-400",
    accentBadgeBg: "bg-indigo-500/10",
    accentBadgeBorder: "border-indigo-500/20",
    mockupLabel: "Syllabus Article",
    mockupTitle: '"The Social Construction of Reality" — Week 4',
    mockupVerdict: "SKIM IT",
    mockupVerdictColor: "text-yellow-400",
    mockupSummary:
      "Core argument covered in lecture. Read intro + conclusion. Focus on Berger's framing.",
    mockupTags: ["low priority", "skim", "10 min"],
    reverse: false,
  },
];

export function PersonaSection() {
  return (
    <div className="max-w-6xl mx-auto space-y-28">
      {personas.map((persona) => (
        <div
          key={persona.id}
          id={persona.id}
          className={`flex flex-col ${
            persona.reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-12 md:gap-16`}
        >
          {/* Content column */}
          <div className="w-full md:w-1/2 flex flex-col">
            <p className={`text-xs uppercase tracking-widest font-medium mb-3 ${persona.accentText}`}>
              {persona.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-snug">
              {persona.headline}
            </h2>
            <p className="text-white text-base leading-relaxed mb-8">
              {persona.pain}
            </p>

            <ul className="space-y-3 mb-8">
              {persona.bullets.map((bullet, bi) => (
                <li key={bi} className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${persona.accentBadgeBg} border ${persona.accentBadgeBorder}`}
                  >
                    <svg
                      className={`w-3 h-3 ${persona.accentText}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-white text-sm leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="self-start inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-7 py-3.5 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-purple-900/40 text-sm"
            >
              {persona.cta}
            </a>
          </div>

          {/* Mockup column */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div
              className={`w-full max-w-sm bg-[#13131a] border ${persona.accentBorder} rounded-2xl overflow-hidden shadow-2xl shadow-black/50`}
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-[#0d0d17]">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/50"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/50"></span>
                <span className={`ml-2 text-xs font-medium ${persona.accentText}`}>
                  summerize.ai
                </span>
              </div>

              {/* Mockup body */}
              <div className="p-5">
                <div className="text-xs text-white uppercase tracking-wide mb-2">
                  {persona.mockupLabel}
                </div>
                <div className="text-white font-medium text-sm leading-snug mb-4">
                  {persona.mockupTitle}
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-bold uppercase tracking-widest ${persona.mockupVerdictColor}`}>
                    {persona.mockupVerdict}
                  </span>
                  <span className="flex-1 h-px bg-white/5"></span>
                </div>

                <p className="text-white text-xs leading-relaxed mb-4">
                  {persona.mockupSummary}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {persona.mockupTags.map((tag, ti) => (
                    <span
                      key={ti}
                      className={`text-xs px-2 py-0.5 rounded-full ${persona.accentBadgeBg} border ${persona.accentBadgeBorder} ${persona.accentText}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

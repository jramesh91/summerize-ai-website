const reviews = [
  {
    name: "Neha S.",
    role: "Product Marketing Manager @ Zoominfo",
    avatar: "NS",
    quote:
      "I used to open 12 tabs and read nothing. Now I just know within seconds whether something's worth my time.",
  },
  {
    name: "Marcus T.",
    role: "PhD Candidate",
    avatar: "MT",
    quote:
      "I triage 30+ papers a week. Summerize cut my screening time in half — I only read what actually matters.",
  },
  {
    name: "Jamie L.",
    role: "SDR @ Outreach",
    avatar: "JL",
    quote:
      "Before calls I'd skim articles hoping something sticks. Now I get the key points first and sound way more prepared.",
  },
];

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-yellow-400"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ReviewSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {reviews.map((review, i) => (
        <div
          key={i}
          className="group bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.07] hover:border-purple-500/30 rounded-2xl p-6 transition-all duration-300 flex flex-col"
        >
          <div className="flex items-center gap-0.5 mb-4">
            {Array.from({ length: 5 }).map((_, s) => (
              <StarIcon key={s} />
            ))}
          </div>

          <p className="text-white text-sm leading-relaxed mb-6 flex-1">
            &ldquo;{review.quote}&rdquo;
          </p>

          <div className="flex items-center gap-3 mt-auto">
            <div className="w-10 h-10 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 text-xs font-bold flex-shrink-0">
              {review.avatar}
            </div>
            <div>
              <div className="text-white text-sm font-semibold">{review.name}</div>
              <div className="text-white text-xs">{review.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

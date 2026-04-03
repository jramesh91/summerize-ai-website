const profiles = [
  {
    initials: "CL",
    name: "Claude",
    role: "Product Strategy",
    avatarBg: "bg-orange-500/20",
    avatarBorder: "border-orange-500/30",
    avatarText: "text-orange-300",
    link: "https://claude.ai",
    linkLabel: "claude.ai",
  },
  {
    initials: "GP",
    name: "GPT-4",
    role: "Engineering",
    avatarBg: "bg-green-500/20",
    avatarBorder: "border-green-500/30",
    avatarText: "text-green-300",
    link: "https://openai.com",
    linkLabel: "openai.com",
  },
  {
    initials: "GM",
    name: "Gemini",
    role: "Design & UX",
    avatarBg: "bg-blue-500/20",
    avatarBorder: "border-blue-500/30",
    avatarText: "text-blue-300",
    link: "https://gemini.google.com",
    linkLabel: "gemini.google.com",
  },
];

export function TeamSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {profiles.map((profile, index) => (
        <div
          key={index}
          className="group bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.07] hover:border-purple-500/30 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300"
        >
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center border-2 ${profile.avatarBg} ${profile.avatarBorder} mb-5 flex-shrink-0`}
          >
            <span className={`text-xl font-bold ${profile.avatarText}`}>
              {profile.initials}
            </span>
          </div>

          <h3 className="text-white font-semibold text-lg mb-1">{profile.name}</h3>
          <p className="text-white text-sm mb-5">{profile.role}</p>

          <a
            href={profile.link}
            target="_blank"
            rel="noreferrer"
            className="mt-auto text-xs text-white hover:text-purple-400 transition-colors"
          >
            {profile.linkLabel}
          </a>
        </div>
      ))}
    </div>
  );
}

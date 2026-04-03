import React from "react";

export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const handleDownloadClick = () => {
    fetch("https://bit.ly/sum69mer", { method: "GET", mode: "no-cors" })
      .then(() => {})
      .catch(() => {});
    window.open(
      "https://chrome.google.com/webstore/detail/quick-easy-summaries/oaoiejebnjkkkeoonoogjggkijjcagco?hl=en&authuser=0",
      "_blank"
    );
  };

  React.useEffect(() => {
    const handler = () => window.innerWidth >= 960 && setIsNavOpen(false);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-white tracking-tight">
          summerize<span className="text-purple-400">.ai</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#for-researchers" className="text-sm text-white hover:text-white transition-colors">
            For Researchers
          </a>
          <a href="#for-sales" className="text-sm text-white hover:text-white transition-colors">
            For Sales
          </a>
          <a href="#for-students" className="text-sm text-white hover:text-white transition-colors">
            For Students
          </a>
          <a href="#pricing-section" className="text-sm text-white hover:text-white transition-colors">
            Pricing
          </a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleDownloadClick}
            className="hidden sm:flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
          >
            Add to Chrome — Free
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="lg:hidden p-2 text-white hover:text-white"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-0.5 bg-current mb-1"></div>
            <div className="w-5 h-0.5 bg-current mb-1"></div>
            <div className="w-5 h-0.5 bg-current"></div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isNavOpen && (
        <div className="lg:hidden bg-[#0d0d17] border-t border-white/5 px-4 py-4 flex flex-col gap-4">
          <a href="#for-researchers" onClick={() => setIsNavOpen(false)} className="text-sm text-white hover:text-white">For Researchers</a>
          <a href="#for-sales" onClick={() => setIsNavOpen(false)} className="text-sm text-white hover:text-white">For Sales</a>
          <a href="#for-students" onClick={() => setIsNavOpen(false)} className="text-sm text-white hover:text-white">For Students</a>
          <a href="#pricing-section" onClick={() => setIsNavOpen(false)} className="text-sm text-white hover:text-white">Pricing</a>
          <button
            onClick={() => { setIsNavOpen(false); handleDownloadClick(); }}
            className="bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium px-4 py-2 rounded-full w-full transition-colors"
          >
            Add to Chrome — Free
          </button>
        </div>
      )}
    </nav>
  );
}

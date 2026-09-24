import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-900 bg-black py-12 text-zinc-500 text-xs">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Note */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-mono text-white font-medium">devsec / roadmap</span>
          <span className="hidden sm:inline text-zinc-700">•</span>
          <span>Berdasarkan silabus <code>cybersecurity_devops_roadmap.md</code></span>
        </div>

        {/* Links & Scroll to top */}
        <div className="flex items-center gap-6">
          <a href="#methodology" className="hover:text-zinc-300 transition-colors">
            Metodologi
          </a>
          <a href="#curriculum" className="hover:text-zinc-300 transition-colors">
            Silabus
          </a>
          <button
            type="button"
            className="hover:text-zinc-300 transition-colors font-mono"
            onClick={scrollToTop}
          >
            ↑ Atas
          </button>
        </div>

      </div>
    </footer>
  );
};

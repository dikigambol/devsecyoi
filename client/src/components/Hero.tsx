import React from 'react';
import type { UserProfile } from './GoogleAuthModal';
import { GoogleIcon } from './GoogleIcon';
import { ArrowRight, LayoutDashboard } from 'lucide-react';

interface HeroProps {
  user: UserProfile | null;
  onOpenLogin: () => void;
  onNavigate: (view: 'landing' | 'dashboard') => void;
}

export const Hero: React.FC<HeroProps> = ({ user, onOpenLogin, onNavigate }) => {
  return (
    <section className="py-20 md:py-28 border-b border-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Top Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400">
            Roadmap Master Blueprint
          </span>
          <span className="text-xs text-zinc-600 font-mono">
            Full-Stack to Security Engineering
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white max-w-3xl leading-[1.15]">
          Cybersecurity &amp; DevOps Engineering.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Kurikulum terstruktur untuk memahami arsitektur software secara menyeluruh: 
          membuat aplikasi, menjalankan infrastruktur, mengamankan pipeline, hingga melakukan pengujian penetrasi, investigasi log, dan remediasi kode.
        </p>

        {/* Loop Progression in Monospace */}
        <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
          <span className="text-zinc-200">Build</span>
          <span className="text-zinc-600">→</span>
          <span className="text-zinc-200">Run</span>
          <span className="text-zinc-600">→</span>
          <span className="text-zinc-200">Secure</span>
          <span className="text-zinc-600">→</span>
          <span className="text-zinc-200">Pentest</span>
          <span className="text-zinc-600">→</span>
          <span className="text-zinc-200">Detect</span>
          <span className="text-zinc-600">→</span>
          <span className="text-zinc-200">Investigate</span>
          <span className="text-zinc-600">→</span>
          <span className="text-zinc-200">Remediate</span>
          <span className="text-zinc-600">→</span>
          <span className="text-zinc-200">Automate</span>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          {user ? (
            <button
              type="button"
              className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-white hover:bg-zinc-200 text-black text-xs font-semibold transition-colors"
              onClick={() => onNavigate('dashboard')}
            >
              <LayoutDashboard size={14} />
              <span>Buka Dashboard Belajar</span>
              <ArrowRight size={14} />
            </button>
          ) : (
            <button
              type="button"
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-md bg-white hover:bg-zinc-200 text-black text-xs font-semibold transition-colors shadow-sm"
              onClick={onOpenLogin}
            >
              <GoogleIcon size={16} />
              <span>Masuk dengan Google untuk Mulai</span>
            </button>
          )}

          <a
            href="#curriculum"
            className="px-4 py-2.5 rounded-md border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 text-zinc-300 hover:text-white text-xs font-medium transition-colors"
          >
            Lihat 26 Tingkatan Modul
          </a>
        </div>

        {/* Minimalist Key Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-zinc-900 text-left">
          <div>
            <div className="font-mono text-2xl font-semibold text-white">26 Level</div>
            <div className="text-xs text-zinc-500 mt-1">Foundation, DevOps, AppSec, DevSecOps, &amp; Blue Team</div>
          </div>
          <div>
            <div className="font-mono text-2xl font-semibold text-white">07 Tahap</div>
            <div className="text-xs text-zinc-500 mt-1">Theory → Lab → Challenge → Tools → Build → Test → Report</div>
          </div>
          <div>
            <div className="font-mono text-2xl font-semibold text-white">100% Konsep</div>
            <div className="text-xs text-zinc-500 mt-1">Tanpa dogma tool-first, fokus pada kode &amp; sistem operasi</div>
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import type { UserProfile } from './GoogleAuthModal';
import { GoogleIcon } from './GoogleIcon';
import { LogOut, LayoutDashboard } from 'lucide-react';

interface NavbarProps {
  user: UserProfile | null;
  onOpenLogin: () => void;
  onLogout: () => void;
  currentView: 'landing' | 'dashboard';
  onNavigate: (view: 'landing' | 'dashboard') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  user,
  onOpenLogin,
  onLogout,
  currentView,
  onNavigate,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-900 bg-black/90 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-6">
          <button 
            type="button" 
            className="flex items-center gap-1.5 font-mono text-sm tracking-tight text-white hover:opacity-80 transition-opacity"
            onClick={() => onNavigate('landing')}
          >
            <span className="font-semibold text-white">devsec</span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-400">roadmap</span>
          </button>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-5 text-xs text-zinc-400">
            <button
              type="button"
              className={`hover:text-white transition-colors ${currentView === 'landing' ? 'text-white' : ''}`}
              onClick={() => onNavigate('landing')}
            >
              Overview
            </button>
            <a href="#methodology" className="hover:text-white transition-colors" onClick={() => onNavigate('landing')}>
              Metodologi
            </a>
            <a href="#curriculum" className="hover:text-white transition-colors" onClick={() => onNavigate('landing')}>
              Silabus 26 Level
            </a>
          </nav>
        </div>

        {/* Auth / Actions */}
        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <button
                type="button"
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  currentView === 'dashboard'
                    ? 'bg-white text-black'
                    : 'bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
                onClick={() => onNavigate(currentView === 'dashboard' ? 'landing' : 'dashboard')}
              >
                <LayoutDashboard size={13} />
                <span>{currentView === 'dashboard' ? 'Ke Beranda' : 'Dashboard'}</span>
              </button>

              <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-zinc-800 text-xs text-zinc-400">
                <span className="text-zinc-200 font-medium">{user.name}</span>
              </div>

              <button
                type="button"
                className="text-zinc-500 hover:text-zinc-300 p-1.5 rounded transition-colors"
                onClick={onLogout}
                title="Keluar"
              >
                <LogOut size={14} />
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white hover:bg-zinc-200 text-black text-xs font-medium transition-colors shadow-sm"
              onClick={onOpenLogin}
            >
              <GoogleIcon size={14} />
              <span>Masuk dengan Google</span>
            </button>
          )}
        </div>

      </div>
    </header>
  );
};

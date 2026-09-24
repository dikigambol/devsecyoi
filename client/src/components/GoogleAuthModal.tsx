import React, { useState } from 'react';
import { GoogleIcon } from './GoogleIcon';
import { X } from 'lucide-react';

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  completedLevels: number;
}

interface GoogleAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: UserProfile) => void;
}

export const GoogleAuthModal: React.FC<GoogleAuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleGoogleSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      onLoginSuccess({
        name: 'Diki Gambol',
        email: 'dikigambol@gmail.com',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
        completedLevels: 4,
      });
      setLoading(false);
      onClose();
    }, 600);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-sm rounded-xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-zinc-900">
          <span className="text-sm font-semibold text-zinc-200">Masuk ke Platform</span>
          <button 
            type="button" 
            className="text-zinc-500 hover:text-white transition-colors p-1 rounded-md"
            onClick={onClose}
          >
            <X size={16} />
          </button>
        </div>

        <div className="pt-5 space-y-4">
          <p className="text-xs text-zinc-400 leading-relaxed">
            Hubungkan akun Google Anda untuk menyimpan progres silabus, riwayat lab Docker, dan konfigurasi environment.
          </p>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-lg bg-white hover:bg-zinc-200 text-black text-sm font-medium transition-colors shadow-sm disabled:opacity-50"
            onClick={handleGoogleSignIn}
            disabled={loading}
          >
            <GoogleIcon size={18} />
            <span>{loading ? 'Menghubungkan...' : 'Lanjutkan dengan Google'}</span>
          </button>

          <div className="pt-2 text-[11px] text-zinc-600 text-center leading-normal">
            Akses pembelajaran mematuhi prinsip etika dan pengujian lab terisolasi.
          </div>
        </div>
      </div>
    </div>
  );
};

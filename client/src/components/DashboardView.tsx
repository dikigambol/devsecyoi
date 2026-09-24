import React, { useState } from 'react';
import type { UserProfile } from './GoogleAuthModal';
import { 
  CheckCircle2, 
  Circle, 
  ArrowLeft
} from 'lucide-react';

interface DashboardViewProps {
  user: UserProfile;
  onBackToLanding: () => void;
}

interface UserModuleProgress {
  id: string;
  level: string;
  title: string;
  category: string;
  status: 'completed' | 'in_progress' | 'not_started';
}

export const DashboardView: React.FC<DashboardViewProps> = ({ user, onBackToLanding }) => {
  const [moduleList, setModuleList] = useState<UserModuleProgress[]>([
    { id: 'lvl-01', level: '01', title: 'Computer Fundamentals', category: 'Foundation', status: 'completed' },
    { id: 'lvl-02', level: '02', title: 'Networking & Protocols (Wireshark)', category: 'Foundation', status: 'in_progress' },
    { id: 'lvl-03', level: '03', title: 'Linux Fundamentals & CLI', category: 'Foundation', status: 'completed' },
    { id: 'lvl-04', level: '04', title: 'Windows Fundamentals & Registry', category: 'Foundation', status: 'completed' },
    { id: 'lvl-05', level: '05', title: 'Programming for Security (Python/SQL)', category: 'Foundation', status: 'completed' },
    { id: 'lvl-06', level: '06', title: 'Git & Source Collaboration', category: 'Foundation', status: 'not_started' },
    { id: 'lvl-07', level: '07', title: 'Database Architecture & Attacks', category: 'Foundation', status: 'not_started' },
    { id: 'lvl-08', level: '08', title: 'Web Fundamentals & Auth Lifecycle', category: 'Foundation', status: 'not_started' },
    { id: 'lvl-09', level: '09', title: 'Security Fundamentals & Cryptography', category: 'Foundation', status: 'not_started' },
    { id: 'lvl-10', level: '10', title: 'Linux Server Administration & Hardening', category: 'DevOps', status: 'not_started' },
    { id: 'lvl-13', level: '13', title: 'Docker & Containerization', category: 'DevOps', status: 'not_started' },
    { id: 'lvl-14', level: '14', title: 'CI/CD Pipelines (GitHub Actions)', category: 'DevOps', status: 'not_started' },
    { id: 'lvl-sec-01', level: 'Sec-01', title: 'Web Security: OWASP Top 10 (SQLi, IDOR)', category: 'AppSec', status: 'not_started' },
    { id: 'lvl-dso-01', level: 'DSO-01', title: 'DevSecOps: SAST, SCA & Container Scan', category: 'DevSecOps', status: 'not_started' },
    { id: 'lvl-bt-01', level: 'BT-01', title: 'SOC & SIEM Operations (Wazuh)', category: 'Blue Team', status: 'not_started' },
  ]);

  const completedCount = moduleList.filter((m) => m.status === 'completed').length;
  const progressPercent = Math.round((completedCount / moduleList.length) * 100);

  const toggleStatus = (id: string) => {
    setModuleList((prev) =>
      prev.map((m) => {
        if (m.id === id) {
          const nextStatus =
            m.status === 'not_started'
              ? 'in_progress'
              : m.status === 'in_progress'
              ? 'completed'
              : 'not_started';
          return { ...m, status: nextStatus };
        }
        return m;
      })
    );
  };

  return (
    <div className="py-12 bg-black min-h-[calc(100vh-64px)]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Navigation back */}
        <div className="flex items-center justify-between mb-8">
          <button
            type="button"
            className="flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-white transition-colors"
            onClick={onBackToLanding}
          >
            <ArrowLeft size={14} />
            <span>Kembali ke Halaman Utama</span>
          </button>

          <span className="font-mono text-[11px] text-zinc-500 border border-zinc-800 px-2.5 py-0.5 rounded-full bg-zinc-950">
            Terhubung: {user.email}
          </span>
        </div>

        {/* Welcome Header */}
        <div className="border border-zinc-900 bg-zinc-950 rounded-xl p-6 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase">Dashboard Peserta</span>
              <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-1">
                {user.name}
              </h1>
              <p className="text-xs text-zinc-400 mt-1">
                Melacak perkembangan belajar, lab kontainer, dan tugas mitigasi keamanan.
              </p>
            </div>

            {/* Progress summary stats */}
            <div className="text-left sm:text-right">
              <div className="font-mono text-2xl font-semibold text-white">
                {completedCount} <span className="text-zinc-600 text-sm">/ {moduleList.length} Modul</span>
              </div>
              <div className="text-xs font-mono text-zinc-500 mt-0.5">
                Progres Kurikulum ({progressPercent}%)
              </div>
            </div>
          </div>

          {/* Minimal Progress Bar */}
          <div className="w-full bg-zinc-900 h-1.5 rounded-full mt-6 overflow-hidden">
            <div
              className="bg-white h-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Active Lab Card */}
        <div className="border border-zinc-800 bg-zinc-950 rounded-xl p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-900">
            <div>
              <span className="font-mono text-[11px] text-zinc-500 uppercase">Lab Aktif Saat Ini</span>
              <h3 className="text-base font-semibold text-white mt-1">
                Level 02: Networking &amp; Protocols (Traffic Capture)
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="font-mono text-xs text-zinc-300">Container Ready (Port 8080)</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <div className="font-mono text-zinc-400 bg-black px-3.5 py-2 rounded-lg border border-zinc-900">
              $ docker compose -f labs/lvl-02/docker-compose.yml up -d
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#curriculum"
                className="px-3 py-1.5 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
                onClick={onBackToLanding}
              >
                Silabus Modul
              </a>
              <button
                type="button"
                className="px-3.5 py-1.5 rounded bg-white hover:bg-zinc-200 text-black font-semibold transition-colors"
                onClick={() => alert("Menghubungkan ke sesi terminal Docker lab lokal...")}
              >
                Mulai Sesi Lab
              </button>
            </div>
          </div>
        </div>

        {/* Modules Checklist Table */}
        <div className="border border-zinc-900 bg-zinc-950 rounded-xl overflow-hidden">
          <div className="p-5 border-b border-zinc-900 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white">Daftar Modul &amp; Status Kelulusan</h3>
            <span className="text-xs text-zinc-500 font-mono">Klik baris untuk mengubah status</span>
          </div>

          <div className="divide-y divide-zinc-900">
            {moduleList.map((mod) => {
              const isDone = mod.status === 'completed';
              const isInProgress = mod.status === 'in_progress';

              return (
                <div
                  key={mod.id}
                  onClick={() => toggleStatus(mod.id)}
                  className="p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-900/40 transition-colors"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <button
                      type="button"
                      className="text-zinc-500 hover:text-white transition-colors flex-shrink-0"
                    >
                      {isDone ? (
                        <CheckCircle2 size={16} className="text-white" />
                      ) : isInProgress ? (
                        <div className="w-4 h-4 rounded-full border-2 border-zinc-400 border-t-white animate-spin"></div>
                      ) : (
                        <Circle size={16} className="text-zinc-700" />
                      )}
                    </button>

                    <div className="min-w-0">
                      <div className={`text-xs font-medium truncate ${isDone ? 'text-zinc-400 line-through' : 'text-white'}`}>
                        <span className="font-mono text-zinc-500 mr-2">{mod.level}</span>
                        {mod.title}
                      </div>
                      <div className="text-[11px] text-zinc-500 mt-0.5">
                        {mod.category}
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0 font-mono text-[11px]">
                    {isDone ? (
                      <span className="text-zinc-400 px-2 py-0.5 rounded border border-zinc-800 bg-black">
                        Lulus
                      </span>
                    ) : isInProgress ? (
                      <span className="text-white px-2 py-0.5 rounded border border-zinc-700 bg-zinc-900">
                        Sedang Berjalan
                      </span>
                    ) : (
                      <span className="text-zinc-600 px-2 py-0.5 rounded">
                        Belum Mulai
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

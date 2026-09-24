import React, { useState } from 'react';

interface MethodStep {
  num: string;
  name: string;
  concept: string;
  sqliExample: string;
  dockerExample: string;
}

export const MethodologySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [exampleMode, setExampleMode] = useState<'sqli' | 'docker'>('sqli');

  const steps: MethodStep[] = [
    {
      num: '01',
      name: 'Theory',
      concept: 'Mempelajari cara kerja protokol, memory, atau parser di balik layar. Memahami akar masalah teknis mengapa sebuah bug bisa terjadi tanpa menghafal tools.',
      sqliExample: 'Memahami bagaimana parser SQL memisahkan code vs data, query execution plan, serta bahaya konkatenasi input mentah.',
      dockerExample: 'Memahami Linux cgroups, namespaces, capabilities, dan attack surface kernel saat container dijalankan.'
    },
    {
      num: '02',
      name: 'Lab',
      concept: 'Menyalakan laboratorium praktik lokal yang terisolasi dengan container Docker. Menghindari risiko merusak sistem host dan mudah di-reset.',
      sqliExample: 'Menjalankan vulnerable web app terhubung ke PostgreSQL container dalam isolated bridge network.',
      dockerExample: 'Menjalankan misconfigured Docker daemon dengan volume mount /var/run/docker.sock yang berbahaya.'
    },
    {
      num: '03',
      name: 'Challenge',
      concept: 'Berperan sebagai attacker (Offensive Mindset). Merancang payload spesifik, menganalisis respons error, dan melakukan bypass autentikasi.',
      sqliExample: 'Mencoba payload autentikasi bypass ("\' OR 1=1--"), UNION-based data extraction, hingga blind time-based injection.',
      dockerExample: 'Mengeksploitasi container breakout melalui socket exposure untuk mendapatkan host root shell.'
    },
    {
      num: '04',
      name: 'Tools',
      concept: 'Menggunakan tools otomatisasi BUKAN di awal, melainkan setelah memahami cara kerjanya secara manual untuk mempercepat verifikasi.',
      sqliExample: 'Menggunakan sqlmap atau script Python untuk memverifikasi varian payload dan database fingerprinting.',
      dockerExample: 'Menggunakan Trivy dan Grype untuk memindai CVE pada image layer dan dependencies.'
    },
    {
      num: '05',
      name: 'Build Project',
      concept: 'Sebagai software developer, bangun sendiri fitur atau arsitektur yang aman. Terapkan pattern modern dan clean code untuk mematikan celah di akar.',
      sqliExample: 'Menulis ulang repository layer menggunakan Parameterized Queries / ORM dengan prepared statements ketat.',
      dockerExample: 'Membuat production Dockerfile multi-stage build, minimal Alpine/Distroless image, dan non-root USER directive.'
    },
    {
      num: '06',
      name: 'Security Test',
      concept: 'Memasukkan security ke dalam CI/CD pipeline (Shift-Left). Menguji kode dan artefak container secara otomatis sebelum di-deploy ke production.',
      sqliExample: 'Integrasi Semgrep (SAST) dan DAST (OWASP ZAP) ke GitHub Actions untuk memblokir pull request yang vulnerable.',
      dockerExample: 'Pipeline check Trivy severity threshold: jika terdapat CRITICAL CVE, gagalkan build container otomatis.'
    },
    {
      num: '07',
      name: 'Report & IR',
      concept: 'Menganalisis telemetry dari sisi Blue Team: memeriksa access log, alert SIEM Wazuh, dan menyusun mitigasi serta laporan insiden.',
      sqliExample: 'Menganalisis SIEM Wazuh rule 31103, merekam IOC (Indicator of Compromise), dan menyusun Security Advisory.',
      dockerExample: 'Menulis Post-Mortem container escape dan memperketat AppArmor / seccomp profile.'
    }
  ];

  const current = steps[activeStep];

  return (
    <section id="methodology" className="py-20 border-b border-zinc-900 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">
            Struktur Pembelajaran
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-2">
            Metodologi 7 Langkah Terpadu.
          </h2>
          <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
            Setiap modul dirancang dari akar teori, lab praktis, pembangunan kode yang benar, hingga verifikasi otomatis di pipeline.
          </p>
        </div>

        {/* Step Selector List */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 mb-8">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.num}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded-lg border text-left transition-all ${
                  isActive
                    ? 'border-zinc-300 bg-zinc-900 text-white'
                    : 'border-zinc-900 bg-zinc-950/60 text-zinc-400 hover:border-zinc-800 hover:text-zinc-200'
                }`}
              >
                <div className="font-mono text-[10px] text-zinc-500">{step.num}</div>
                <div className="text-xs font-semibold mt-1">{step.name}</div>
              </button>
            );
          })}
        </div>

        {/* Step Detail Block */}
        <div className="border border-zinc-900 bg-zinc-950 rounded-xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-900">
            <div>
              <span className="font-mono text-xs text-zinc-500">Tahap {current.num} dari 07</span>
              <h3 className="text-xl font-semibold text-white mt-0.5">{current.name}</h3>
            </div>

            {/* Toggle case study */}
            <div className="flex items-center gap-1 p-1 rounded-md border border-zinc-800 bg-black text-xs">
              <button
                type="button"
                className={`px-3 py-1 rounded transition-colors ${
                  exampleMode === 'sqli' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
                onClick={() => setExampleMode('sqli')}
              >
                Kasus: SQL Injection
              </button>
              <button
                type="button"
                className={`px-3 py-1 rounded transition-colors ${
                  exampleMode === 'docker' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
                onClick={() => setExampleMode('docker')}
              >
                Kasus: Docker Security
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div>
              <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                Fokus Kompetensi
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {current.concept}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                Contoh Eksekusi ({exampleMode === 'sqli' ? 'AppSec' : 'DevOps'})
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed font-mono bg-black p-4 rounded-lg border border-zinc-900">
                {exampleMode === 'sqli' ? current.sqliExample : current.dockerExample}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

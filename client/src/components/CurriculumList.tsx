import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, Terminal } from 'lucide-react';

interface ModuleItem {
  id: string;
  level: string;
  phase: string;
  category: 'foundation' | 'devops' | 'security' | 'devsecops' | 'blueteam';
  title: string;
  subtitle: string;
  concepts: string[];
  tools: string[];
  labTask: string;
}

export const CurriculumList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [search, setSearch] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const modules: ModuleItem[] = [
    // 01 - 09 Foundation
    {
      id: 'lvl-01',
      level: '01',
      phase: 'Phase 1: Foundation',
      category: 'foundation',
      title: 'Computer Fundamentals',
      subtitle: 'Hardware, Kernel Space & OS Architecture',
      concepts: ['CPU & Memory Hierarchy', 'Kernel vs User Space', 'System Calls (strace)', 'Process & Thread Model'],
      tools: ['strace', 'lsof', 'htop'],
      labTask: 'Melacak system call aplikasi web saat membaca file dan bind port jaringan lokal.'
    },
    {
      id: 'lvl-02',
      level: '02',
      phase: 'Phase 1: Foundation',
      category: 'foundation',
      title: 'Networking & Protocols',
      subtitle: 'TCP/IP, Routing & Traffic Analysis',
      concepts: ['OSI & TCP/IP Model', 'Subnetting & CIDR', 'DNS, DHCP, ARP', 'TCP 3-Way Handshake & TLS'],
      tools: ['Wireshark', 'tcpdump', 'netcat', 'dig'],
      labTask: 'Merekam packet capture client HTTPS dan menganalisis stream handshake TLS.'
    },
    {
      id: 'lvl-03',
      level: '03',
      phase: 'Phase 1: Foundation',
      category: 'foundation',
      title: 'Linux Fundamentals',
      subtitle: 'Filesystem, Process & CLI Mastery',
      concepts: ['Linux Filesystem Hierarchy', 'Chmod, Chown & Permissions', 'systemd Unit Services', 'SSH Authentication'],
      tools: ['Bash', 'ss', 'grep', 'systemctl', 'journalctl'],
      labTask: 'Troubleshooting server Linux dan mengidentifikasi process mencurigakan yang mengonsumsi CPU.'
    },
    {
      id: 'lvl-04',
      level: '04',
      phase: 'Phase 1: Foundation',
      category: 'foundation',
      title: 'Windows Fundamentals',
      subtitle: 'Architecture, Registry & PowerShell',
      concepts: ['Windows Architecture', 'Registry Keys', 'PowerShell Scripting', 'Event Viewer Auditing (4624/4625)'],
      tools: ['PowerShell', 'Sysinternals', 'Event Viewer'],
      labTask: 'Menganalisis Event Viewer ID 4625 untuk mendeteksi brute-force login pada Windows.'
    },
    {
      id: 'lvl-05',
      level: '05',
      phase: 'Phase 1: Foundation',
      category: 'foundation',
      title: 'Programming for Security',
      subtitle: 'Python, JavaScript & SQL Scripting',
      concepts: ['Python Network Sockets', 'HTTP Requests & JSON Parsing', 'DOM Security Model & CORS', 'Complex SQL Queries'],
      tools: ['Python 3', 'Node.js', 'PostgreSQL'],
      labTask: 'Membuat script otomatisasi Python untuk port scan multi-threaded dan banner grabbing.'
    },
    {
      id: 'lvl-06',
      level: '06',
      phase: 'Phase 1: Foundation',
      category: 'foundation',
      title: 'Git & Source Collaboration',
      subtitle: 'Version Control & Secret Leaks Prevention',
      concepts: ['Git Branching Models', 'Commit History Internals', 'Pull Request Review', 'Secret Leaks in Git History'],
      tools: ['git', 'gitleaks', 'Trufflehog'],
      labTask: 'Mendeteksi dan membersihkan secret API Key yang bocor di commit history lama.'
    },
    {
      id: 'lvl-07',
      level: '07',
      phase: 'Phase 1: Foundation',
      category: 'foundation',
      title: 'Database Architecture',
      subtitle: 'Relational & NoSQL Attack Surface',
      concepts: ['RDBMS Schema & Foreign Keys', 'User Privileges & Grants', 'SQL Execution Plans', 'NoSQL Key-Value'],
      tools: ['PostgreSQL', 'MySQL', 'Redis'],
      labTask: 'Membatasi hak akses DB user aplikasi sehingga tidak bisa membaca katalog metadata sistem.'
    },
    {
      id: 'lvl-08',
      level: '08',
      phase: 'Phase 1: Foundation',
      category: 'foundation',
      title: 'Web Fundamentals',
      subtitle: 'HTTP Lifecycle, Cookies, Sessions & Auth',
      concepts: ['HTTP Methods & Headers', 'Session vs Stateless JWT', 'Cookies (HttpOnly, Secure, SameSite)', 'AuthN vs AuthZ'],
      tools: ['DevTools', 'curl', 'Postman'],
      labTask: 'Menganalisis perbedaan penanganan token stateless JWT dan session cookie.'
    },
    {
      id: 'lvl-09',
      level: '09',
      phase: 'Phase 1: Foundation',
      category: 'foundation',
      title: 'Security Fundamentals',
      subtitle: 'CIA Triad, Threat Modeling & Cryptography',
      concepts: ['CIA Triad & Threat Profiles', 'Hashing (bcrypt, SHA-256)', 'Symmetric & Asymmetric Crypto', 'PKI & TLS Certificates'],
      tools: ['OpenSSL', 'CyberChef', 'GPG'],
      labTask: 'Membuat internal CA kustom dan menandatangani certificate TLS lokal.'
    },

    // 10 - 17 DevOps Track
    {
      id: 'lvl-10',
      level: '10',
      phase: 'Phase 2: DevOps',
      category: 'devops',
      title: 'Linux Server Administration',
      subtitle: 'Server Hardening, Firewalls & Monitoring',
      concepts: ['UFW & iptables Filtering', 'SSH Hardening', 'Fail2ban Brute-Force Defense', 'auditd Log Accounting'],
      tools: ['ufw', 'fail2ban', 'auditd'],
      labTask: 'Melakukan hardening server Linux dari baseline mentah hingga lulus audit CIS Benchmark.'
    },
    {
      id: 'lvl-11',
      level: '11',
      phase: 'Phase 2: DevOps',
      category: 'devops',
      title: 'Shell & Automation',
      subtitle: 'Bash Scripting & Cron Timers',
      concepts: ['Bash Scripting Best Practices', 'Python DevOps Automation', 'Cron Jobs & systemd Timers', 'Env Secrets'],
      tools: ['Bash', 'Python', 'cron'],
      labTask: 'Membuat automated watcher daemon untuk mendeteksi perubahan konfigurasi /etc/passwd.'
    },
    {
      id: 'lvl-12',
      level: '12',
      phase: 'Phase 2: DevOps',
      category: 'devops',
      title: 'Web Server Architecture',
      subtitle: 'Nginx, Reverse Proxy & TLS Hardening',
      concepts: ['Reverse Proxy Upstream', 'TLS Ciphers Configuration', 'Security Headers (HSTS, CSP)', 'Rate Limiting'],
      tools: ['Nginx', 'Certbot', 'OpenSSL'],
      labTask: 'Mengonfigurasi Nginx reverse proxy dengan TLS grade A+ dan rate limiting 10 req/s.'
    },
    {
      id: 'lvl-13',
      level: '13',
      phase: 'Phase 2: DevOps',
      category: 'devops',
      title: 'Docker & Containerization',
      subtitle: 'Container Lifecycles & Multi-Stage Builds',
      concepts: ['Namespaces & cgroups Isolation', 'Multi-Stage Dockerfile', 'Docker Compose Networks', 'Non-Root Execution'],
      tools: ['Docker', 'Docker Compose', 'Hadolint'],
      labTask: 'Membangun cluster multi-container (Nginx + API + Database) dalam isolated network.'
    },
    {
      id: 'lvl-14',
      level: '14',
      phase: 'Phase 2: DevOps',
      category: 'devops',
      title: 'CI/CD Pipelines',
      subtitle: 'Automated Test, Build & Release',
      concepts: ['GitHub Actions Workflows', 'CI Runners & Matrix', 'Secret Management in CI', 'Automated Gates'],
      tools: ['GitHub Actions', 'GitLab CI'],
      labTask: 'Membuat GitHub Actions pipeline yang menguji kode dan me-reject PR jika test gagal.'
    },
    {
      id: 'lvl-15',
      level: '15',
      phase: 'Phase 2: DevOps',
      category: 'devops',
      title: 'Infrastructure as Code (IaC)',
      subtitle: 'Terraform & Declarative Management',
      concepts: ['Declarative Infrastructure', 'Terraform State Management', 'Providers & Modules', 'Ansible Playbooks'],
      tools: ['Terraform', 'Ansible', 'tfsec'],
      labTask: 'Provisioning VPC lengkap dengan private & public subnet serta bastion host via Terraform.'
    },
    {
      id: 'lvl-16',
      level: '16',
      phase: 'Phase 2: DevOps',
      category: 'devops',
      title: 'Cloud Platforms',
      subtitle: 'AWS / Azure / GCP Fundamentals',
      concepts: ['Cloud Shared Responsibility', 'IAM Least Privilege Policies', 'VPC & Route Tables', 'Storage Access Controls'],
      tools: ['AWS CLI', 'CloudWatch', 'Terraform'],
      labTask: 'Mengaudit IAM user yang memiliki policy AdministratorAccess berlebih.'
    },
    {
      id: 'lvl-17',
      level: '17',
      phase: 'Phase 2: DevOps',
      category: 'devops',
      title: 'Kubernetes Orchestration',
      subtitle: 'Pods, RBAC & Pod Security Standards',
      concepts: ['Control Plane vs Workers', 'Pods & ReplicaSets', 'RBAC (Roles & ClusterRoles)', 'Network Policies'],
      tools: ['kubectl', 'Minikube', 'Helm'],
      labTask: 'Menerapkan Kubernetes NetworkPolicy untuk memblokir akses database pod dari public pod.'
    },

    // Web Security & Pentesting
    {
      id: 'lvl-sec-01',
      level: 'Sec-01',
      phase: 'Phase 3: Security',
      category: 'security',
      title: 'Web Application Security',
      subtitle: 'OWASP Top 10, Auth & Injection',
      concepts: ['SQL & Command Injection', 'IDOR & Broken Access Control', 'XSS & CSP Bypass', 'SSRF (Cloud Metadata)'],
      tools: ['Burp Suite', 'OWASP ZAP', 'curl'],
      labTask: 'Mengeksploitasi celah IDOR di endpoint API transaksi dan mitigasi via access control check.'
    },
    {
      id: 'lvl-sec-02',
      level: 'Sec-02',
      phase: 'Phase 3: Security',
      category: 'security',
      title: 'Penetration Testing Methodology',
      subtitle: 'Recon, Enumeration & Vulnerability Analysis',
      concepts: ['OSINT & Target Reconnaissance', 'Port & Service Enumeration', 'Web Content Fuzzing', 'Pentest Reporting'],
      tools: ['Nmap', 'ffuf', 'Nikto', 'Metasploit'],
      labTask: 'Melakukan penetration test terisolasi pada vulnerable host dan menyusun executive summary.'
    },
    {
      id: 'lvl-sec-03',
      level: 'Sec-03',
      phase: 'Phase 3: Security',
      category: 'security',
      title: 'Network & Protocol Security',
      subtitle: 'Scanning, IDS/IPS & Network Segmentation',
      concepts: ['Packet Crafting & Scanning', 'IDS/IPS Rule Signatures', 'Man-In-The-Middle (MITM)', 'Network Segmentation'],
      tools: ['Wireshark', 'Suricata', 'Nmap NSE'],
      labTask: 'Menulis signature Suricata kustom untuk mendeteksi SYN scan dan serangan brute-force.'
    },
    {
      id: 'lvl-sec-04',
      level: 'Sec-04',
      phase: 'Phase 3: Security',
      category: 'security',
      title: 'Windows & Active Directory Security',
      subtitle: 'Domain Controllers, Kerberos & Lateral Movement',
      concepts: ['Active Directory Architecture', 'Kerberos (TGT, TGS, Kerberoasting)', 'NTLM Relay', 'Group Policy (GPO)'],
      tools: ['BloodHound', 'Impacket', 'Sysinternals'],
      labTask: 'Memetakan jalur privilege escalation dari standard user ke Domain Admin via BloodHound.'
    },

    // DevSecOps & Cloud Security
    {
      id: 'lvl-dso-01',
      level: 'DSO-01',
      phase: 'Phase 4: DevSecOps',
      category: 'devsecops',
      title: 'Shift-Left DevSecOps Pipeline',
      subtitle: 'SAST, SCA, Secret & Container Scanning',
      concepts: ['Static Code Analysis (SAST)', 'Dependency Scanning (SCA)', 'Secret Scanning Pre-commit', 'Container Scanning'],
      tools: ['Semgrep', 'Trivy', 'Gitleaks', 'OWASP ZAP'],
      labTask: 'Membangun pipeline GitHub Actions dengan quality gate: blokir merge jika terdapat CVE Critical.'
    },
    {
      id: 'lvl-dso-02',
      level: 'DSO-02',
      phase: 'Phase 4: DevSecOps',
      category: 'devsecops',
      title: 'Cloud Security & Posture (CSPM)',
      subtitle: 'IAM Governance & Misconfiguration Prevention',
      concepts: ['Cloud Posture Auditing', 'S3 Bucket Policy Hardening', 'Kubernetes CIS Benchmark', 'Audit Logs (CloudTrail)'],
      tools: ['Prowler', 'ScoutSuite', 'Checkov'],
      labTask: 'Audit otomatis cloud environment AWS menggunakan Prowler dan memperbaiki temuan High Risk.'
    },
    {
      id: 'lvl-dso-03',
      level: 'DSO-03',
      phase: 'Phase 4: DevSecOps',
      category: 'devsecops',
      title: 'Security Engineering & Architecture',
      subtitle: 'Threat Modeling, Zero Trust & Automation',
      concepts: ['STRIDE Threat Modeling', 'Zero Trust Architecture', 'Defense in Depth', 'KMS & Secrets Vaulting'],
      tools: ['Threat Dragon', 'HashiCorp Vault', 'Python Boto3'],
      labTask: 'Melakukan threat modeling pada arsitektur microservice dan mengintegrasikan Vault untuk secrets.'
    },

    // Blue Team & Investigation
    {
      id: 'lvl-bt-01',
      level: 'BT-01',
      phase: 'Phase 5: Blue Team',
      category: 'blueteam',
      title: 'SOC & SIEM Operations',
      subtitle: 'Centralized Logging & Detection Rules',
      concepts: ['Centralized Log Pipelines', 'SIEM Correlation Rules', 'Sysmon Telemetry', 'Alert Triage & Investigation'],
      tools: ['Wazuh SIEM', 'Elasticsearch', 'Sysmon'],
      labTask: 'Mendeteksi serangan SQL injection dan brute-force SSH secara real-time di dashboard Wazuh.'
    },
    {
      id: 'lvl-bt-02',
      level: 'BT-02',
      phase: 'Phase 5: Blue Team',
      category: 'blueteam',
      title: 'Incident Response & Forensics',
      subtitle: 'Memory Analysis & Timeline Reconstruction',
      concepts: ['Incident Response Stages (PICERL)', 'Evidence Preservation', 'Memory Forensics', 'Disk Artifacts Analysis'],
      tools: ['Volatility 3', 'Autopsy', 'FTK Imager'],
      labTask: 'Menganalisis memory dump server terinfeksi untuk menemukan process injector dan IP C2 server.'
    },
    {
      id: 'lvl-bt-03',
      level: 'BT-03',
      phase: 'Phase 5: Blue Team',
      category: 'blueteam',
      title: 'Malware Analysis & Governance (GRC)',
      subtitle: 'Reverse Engineering & Compliance Frameworks',
      concepts: ['Static/Dynamic Malware Analysis', 'Assembly & PE Files', 'Risk Assessment', 'ISO 27001 & NIST Standards'],
      tools: ['Ghidra', 'x64dbg', 'ISO 27001'],
      labTask: 'Mendekomplikasi binary mencurigakan di Ghidra untuk menemukan string command & control.'
    }
  ];

  const filtered = useMemo(() => {
    return modules.filter((m) => {
      const matchCat = activeCategory === 'all' || m.category === activeCategory;
      const q = search.toLowerCase().trim();
      const matchSearch =
        !q ||
        m.title.toLowerCase().includes(q) ||
        m.subtitle.toLowerCase().includes(q) ||
        m.concepts.some((c) => c.toLowerCase().includes(q)) ||
        m.tools.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="curriculum" className="py-20 border-b border-zinc-900 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">
              Kurikulum Lengkap
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-2">
              Daftar 26 Tingkatan Modul.
            </h2>
            <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
              Disusun berurutan dari fondasi hingga security engineering. Klik setiap baris untuk melihat detail silabus dan lab praktiknya.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Cari topik atau tool..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-900 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors font-mono"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 pb-4 border-b border-zinc-900 mb-6 text-xs">
          <button
            type="button"
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeCategory === 'all'
                ? 'bg-white text-black font-semibold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
            onClick={() => setActiveCategory('all')}
          >
            Semua ({modules.length})
          </button>
          <button
            type="button"
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeCategory === 'foundation'
                ? 'bg-white text-black font-semibold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
            onClick={() => setActiveCategory('foundation')}
          >
            01. Foundation (01-09)
          </button>
          <button
            type="button"
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeCategory === 'devops'
                ? 'bg-white text-black font-semibold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
            onClick={() => setActiveCategory('devops')}
          >
            02. DevOps Track (10-17)
          </button>
          <button
            type="button"
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeCategory === 'security'
                ? 'bg-white text-black font-semibold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
            onClick={() => setActiveCategory('security')}
          >
            03. AppSec &amp; Pentest
          </button>
          <button
            type="button"
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeCategory === 'devsecops'
                ? 'bg-white text-black font-semibold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
            onClick={() => setActiveCategory('devsecops')}
          >
            04. DevSecOps &amp; Cloud
          </button>
          <button
            type="button"
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeCategory === 'blueteam'
                ? 'bg-white text-black font-semibold'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
            onClick={() => setActiveCategory('blueteam')}
          >
            05. Blue Team &amp; Forensik
          </button>
        </div>

        {/* Modules Structured List */}
        <div className="border border-zinc-900 rounded-xl divide-y divide-zinc-900 overflow-hidden bg-zinc-950">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-xs text-zinc-500 font-mono">
              Tidak ada modul yang cocok dengan kata kunci "{search}".
            </div>
          ) : (
            filtered.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <div key={item.id} className="transition-colors hover:bg-zinc-900/40">
                  <div
                    className="p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
                    onClick={() => toggleExpand(item.id)}
                  >
                    <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                      <span className="font-mono text-xs font-semibold text-zinc-500 w-8 flex-shrink-0">
                        {item.level}
                      </span>
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-white truncate">
                          {item.title}
                        </div>
                        <div className="text-xs text-zinc-500 truncate mt-0.5">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 flex-shrink-0">
                      <span className="hidden sm:inline-block font-mono text-[11px] text-zinc-400 px-2 py-0.5 rounded border border-zinc-800 bg-black">
                        {item.tools.slice(0, 2).join(', ')}
                      </span>
                      <button
                        type="button"
                        className="text-zinc-500 hover:text-white transition-colors"
                        aria-label="Toggle details"
                      >
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Detail Accordion */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-2 bg-black/60 border-t border-zinc-900 text-xs text-zinc-400 space-y-4">
                      <div>
                        <span className="font-mono text-[11px] text-zinc-500 uppercase block mb-1.5">
                          Pokok Bahasan Utama
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.concepts.map((concept, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900 text-zinc-300 text-[11px]"
                            >
                              {concept}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        <div>
                          <span className="font-mono text-[11px] text-zinc-500 uppercase block mb-1">
                            Alat / Ekosistem
                          </span>
                          <span className="font-mono text-zinc-300 text-[11px]">
                            {item.tools.join(', ')}
                          </span>
                        </div>

                        <div>
                          <span className="font-mono text-[11px] text-zinc-500 uppercase block mb-1">
                            Skenario Praktik Lab
                          </span>
                          <span className="text-zinc-300 leading-relaxed block">
                            {item.labTask}
                          </span>
                          <div className="mt-2 font-mono text-[11px] text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded border border-zinc-800 flex items-center gap-2">
                            <Terminal size={12} className="text-zinc-500" />
                            <span>docker compose run --rm lab-{item.id}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};

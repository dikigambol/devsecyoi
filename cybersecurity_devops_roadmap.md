# Cybersecurity + DevOps Roadmap
## Roadmap Lengkap untuk Full-Stack Developer

> **Tujuan utama:** membangun pemahaman end-to-end tentang software, infrastructure, cybersecurity, DevOps, DevSecOps, dan security engineering.
>
> Alur akhirnya: **membuat aplikasi → menjalankan infrastructure → mengamankan → melakukan pentest → mendeteksi serangan → melakukan investigasi → memperbaiki sistem → mengotomatisasi security.**

---

# 1. Gambaran Besar

Cybersecurity memiliki banyak cabang. Agar tidak belajar semuanya secara acak, gunakan foundation terlebih dahulu, kemudian jalankan jalur **DevOps** dan **Cybersecurity** secara paralel.

```text
                    IT / COMPUTER FOUNDATION
                             │
                ┌────────────┼────────────┐
                ▼            ▼            ▼
           Networking      Linux      Programming
                │            │            │
                └────────────┼────────────┘
                             ▼
                    WEB FUNDAMENTALS
                             │
                 ┌───────────┴───────────┐
                 ▼                       ▼
              DevOps                 Security
                 │                       │
        ┌────────┼────────┐       ┌──────┼──────┐
        ▼        ▼        ▼       ▼      ▼      ▼
       Git     Docker    CI/CD   AppSec  Pentest Blue Team
        │        │        │       │      │      │
        └────────┼────────┘       └──────┼──────┘
                 │                       │
                 ▼                       ▼
              Cloud              Network / AD
                 │                       │
                 └───────────┬───────────┘
                             ▼
                         DevSecOps
                             │
                  ┌──────────┼──────────┐
                  ▼          ▼          ▼
              Cloud Sec   Security   Advanced
                         Engineering   Security
```

---

# 2. Urutan Roadmap Utama

```text
01  Computer Fundamentals
02  Networking
03  Linux
04  Windows Fundamentals
05  Programming
06  Git
07  Database
08  Web Fundamentals
09  Security Fundamentals
        │
        ├─────────────────────┐
        │                     │
        ▼                     ▼
     DEVOPS                SECURITY
        │                     │
10  Linux Admin          10  Web Security
11  Bash/Python          11  Pentesting
12  Web Server           12  Network Security
13  Docker               13  Windows/AD
14  CI/CD
15  IaC
16  Cloud
17  Kubernetes
        │                     │
        └──────────┬──────────┘
                   ▼
              DEVSECOPS
                   │
                   ▼
            Cloud Security
                   │
                   ▼
          Security Engineering
                   │
       ┌───────────┼───────────┐
       ▼           ▼           ▼
    Blue Team   Forensics   Malware/RE
                   │
                   ▼
                  GRC
```

**Catatan:** ini bukan berarti harus menyelesaikan semua level dulu baru praktik. Praktik dimulai sejak foundation dan terus berjalan sepanjang roadmap.

---

# 3. LEVEL 01 — Computer Fundamentals

## Materi

### Hardware & OS

- CPU
- RAM
- Storage
- GPU
- Motherboard
- Process
- Thread
- File system
- OS architecture
- BIOS/UEFI
- Virtualization

### Konsep sistem

- Client
- Server
- Service
- Process
- Application
- Kernel
- User space
- System calls
- Virtual machine
- Container

### Networking dasar

- IP address
- Port
- DNS
- HTTP/HTTPS
- TCP/UDP
- Router
- Switch
- Firewall

## Target

Kamu memahami apa yang terjadi di komputer dan jaringan tanpa menganggap komputer sebagai "black box".

---

# 4. LEVEL 02 — Networking

Networking adalah salah satu fondasi paling penting dalam cybersecurity dan DevOps.

## 4.1 OSI & TCP/IP

Pelajari:

- Physical
- Data Link
- Network
- Transport
- Application

Tidak perlu sekadar menghafal OSI. Pahami bagaimana data benar-benar bergerak.

## 4.2 IP

- IPv4
- IPv6
- Subnet
- CIDR
- Private IP
- Public IP
- NAT
- Gateway
- Routing

## 4.3 Protocol

Minimal:

- ARP
- ICMP
- TCP
- UDP
- DNS
- DHCP
- HTTP
- HTTPS
- FTP
- SSH
- SMTP
- SMB

## 4.4 Network Infrastructure

- Router
- Switch
- Firewall
- Proxy
- VPN
- Load balancer
- Reverse proxy

## 4.5 Traffic Analysis

Tools:

- Wireshark
- tcpdump
- netcat

## Target

Mampu melihat packet capture dan menjelaskan:

```text
Client
  ↓
DNS Resolution
  ↓
TCP Connection
  ↓
TLS
  ↓
HTTP Request
  ↓
Server
  ↓
HTTP Response
```

---

# 5. LEVEL 03 — Linux

Linux sangat penting untuk DevOps maupun cybersecurity.

## 5.1 Linux Fundamentals

Pelajari:

- Filesystem
- CLI
- Bash
- Users
- Groups
- Permissions
- Processes
- Services
- systemd
- Logs
- SSH
- Cron
- Package management

## 5.2 Filesystem

Pahami:

```text
/
├── /etc
├── /var
├── /home
├── /tmp
├── /usr
├── /opt
└── /proc
```

## 5.3 Command penting

```bash
ls
cd
cat
less
grep
find
awk
sed
chmod
chown
ps
top
kill
ss
ip
curl
wget
ssh
scp
tar
```

## 5.4 Linux Networking

- Interface
- Routing table
- Ports
- Services
- Firewall
- DNS
- SSH

## Target

Mampu menjalankan, mengkonfigurasi, troubleshooting, dan mengamankan Linux server.

---

# 6. LEVEL 04 — Windows Fundamentals

Karena banyak environment enterprise menggunakan Windows, pemahaman Windows penting sebelum masuk Active Directory.

## Materi

- Windows architecture
- Users
- Groups
- Processes
- Services
- Filesystem
- Registry
- PowerShell
- Event Viewer
- Windows networking
- Firewall

## Menuju Active Directory

Pelajari konsep:

- Domain
- Domain Controller
- LDAP
- Kerberos
- NTLM
- SMB
- Group Policy
- Organizational Unit

---

# 7. LEVEL 05 — Programming

Untuk security, tidak harus menjadi programmer expert, tetapi harus mampu membaca, memahami, dan membuat script.

## 7.1 Python

Pelajari:

```text
Variables
Condition
Loop
Function
Class
File I/O
Exception
Modules
HTTP Request
JSON
Socket
Regex
```

Kemudian:

- API interaction
- Automation
- Parsing
- Network scripting
- Security tooling

## 7.2 JavaScript

Sangat penting untuk Web Security.

Pelajari:

- DOM
- Event
- Fetch
- AJAX
- JSON
- Cookies
- localStorage
- sessionStorage
- CORS
- JavaScript execution
- Browser security model

## 7.3 SQL

Pelajari:

```sql
SELECT
INSERT
UPDATE
DELETE
JOIN
WHERE
GROUP BY
UNION
SUBQUERY
```

Kemudian:

- Index
- Transaction
- Privilege
- Schema
- Relationship

---

# 8. LEVEL 06 — Git & Collaboration

Git menjadi fondasi DevOps dan software security.

## Materi

- Git
- GitHub/GitLab
- Repository
- Commit
- Branch
- Merge
- Rebase
- Pull Request
- Code Review
- Tag
- Release
- Git workflow

## Target

Memahami bagaimana source code bergerak dari developer sampai deployment.

---

# 9. LEVEL 07 — Database

## Relational Database

Pelajari:

- Database
- Schema
- Table
- Row
- Column
- Primary key
- Foreign key
- Relationship
- Index
- Transaction
- User/privilege

## NoSQL

Pahami konsep:

- Document database
- Key-value
- Query model
- Authorization

Tujuannya bukan menjadi database administrator, tetapi memahami attack surface dan infrastructure aplikasi.

---

# 10. LEVEL 08 — Web Fundamentals

Ini merupakan fondasi utama untuk jalur Web Security.

## 10.1 Cara Kerja Web

```text
Browser
   ↓
DNS
   ↓
TCP
   ↓
TLS
   ↓
HTTP
   ↓
Web Server
   ↓
Application
   ↓
Database
```

## 10.2 HTTP

Pelajari:

- Request
- Response
- Method
- Header
- Body
- Status code
- Cookie
- Session
- Content-Type
- Cache
- Redirect

Contoh:

```http
POST /login HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "username": "admin",
  "password": "..."
}
```

Pahami setiap bagian request dan response.

## 10.3 Authentication

- Login
- Session
- Cookie
- JWT
- OAuth
- MFA
- Password reset
- Account recovery

## 10.4 Authorization

Bedakan:

```text
Authentication
= Siapa kamu?

Authorization
= Kamu boleh melakukan apa?
```

Ini sangat penting untuk memahami privilege escalation dan broken access control.

---

# 11. LEVEL 09 — Security Fundamentals

## 11.1 CIA Triad

```text
Confidentiality
Integrity
Availability
```

## 11.2 Security Concepts

- Threat
- Vulnerability
- Risk
- Attack
- Exploit
- Payload
- Mitigation
- Security control
- Attack surface
- Exposure

## 11.3 Cryptography

Pelajari konsep:

- Encoding
- Hashing
- Encryption
- Symmetric encryption
- Asymmetric encryption
- Digital signature
- Certificate
- PKI
- TLS

Tidak perlu langsung mendalami matematika kriptografi.

---

# 12. JALUR DEVOPS

Setelah foundation, jalur DevOps dipelajari secara bertahap.

---

# 12.1 Linux Administration

Lebih dalam dari Linux fundamentals.

Pelajari:

- User/group management
- Permissions
- Services
- systemd
- SSH
- Firewall
- Logs
- Process management
- Storage
- Networking
- Server hardening

---

# 12.2 Shell & Automation

Pelajari:

- Bash
- Python automation
- Cron
- Scripting
- Environment variables
- Automation workflow
- CLI tooling

Target:

> Mengurangi pekerjaan manual dengan script dan automation.

---

# 12.3 Web Server

Pelajari:

- Nginx
- Apache
- Reverse proxy
- Virtual host
- TLS
- Load balancing
- Process management

Contoh:

```text
Internet
   ↓
Nginx
   ↓
Application Server
   ↓
Database
```

---

# 12.4 Docker

Docker sangat berguna untuk proyek cybersecurity lab.

Pelajari:

- Image
- Container
- Dockerfile
- Volume
- Network
- Registry
- Docker Compose
- Environment variables
- Container lifecycle

Contoh lab:

```text
Docker
├── Vulnerable Web App
├── Database
├── Attacker Environment
└── Monitoring
```

Dengan ini kamu dapat membuat lab yang terisolasi dan mudah di-reset.

---

# 12.5 CI/CD

Pelajari:

- GitHub Actions
- GitLab CI
- Pipeline
- Test
- Build
- Artifact
- Secrets
- Deployment
- Rollback

Contoh:

```text
Git Push
   ↓
CI
   ↓
Test
   ↓
Build
   ↓
Security Scan
   ↓
Docker Image
   ↓
Deploy
```

---

# 12.6 Infrastructure as Code

Pelajari:

- Terraform
- Ansible

Konsep:

```text
Infrastructure
      ↓
Code
      ↓
Version Control
      ↓
Automated Deployment
```

Tujuannya membuat infrastructure reproducible dan mudah dikelola.

---

# 12.7 Cloud

Pilih minimal satu cloud terlebih dahulu:

- AWS
- Azure
- GCP

Pelajari:

- Compute
- Storage
- Networking
- IAM
- Security Group
- Load Balancer
- DNS
- Monitoring
- Secrets

Tidak perlu langsung menguasai tiga cloud sekaligus.

---

# 12.8 Kubernetes

Belajar setelah Docker sudah kuat.

Pelajari:

- Pod
- Deployment
- Service
- ConfigMap
- Secret
- Ingress
- Namespace
- RBAC

Kemudian:

- Container security
- Kubernetes networking
- Kubernetes security
- Resource management

---

# 13. JALUR CYBERSECURITY

---

# 13.1 Web Security / AppSec

Ini merupakan jalur utama jika fokusmu adalah Web Security.

## Authentication Vulnerabilities

- Weak authentication
- Session attacks
- Session fixation
- Credential attacks
- Password reset flaws
- MFA weaknesses

## Authorization

- IDOR
- Broken Access Control
- Privilege escalation
- BOLA

## Injection

Pelajari:

- SQL Injection
- NoSQL Injection
- Command Injection
- LDAP Injection
- Template Injection

## XSS

Urutan:

```text
Reflected XSS
      ↓
Stored XSS
      ↓
DOM XSS
```

Pelajari:

- Context
- Escaping
- Sanitization
- CSP

## CSRF

Pelajari:

- Same-Origin Policy
- Cookies
- SameSite
- CSRF Token

## SSRF

Konsep:

```text
Attacker
   ↓
Server
   ↓
Internal Service
```

Pelajari konsep:

- localhost
- Internal network
- Cloud metadata

## File Vulnerabilities

- File Upload
- Path Traversal
- LFI
- RFI
- XXE

## Server-Side Vulnerabilities

- SSTI
- Deserialization
- Prototype Pollution
- Request Smuggling
- Host Header Attacks

## API Security

Pelajari:

- REST
- GraphQL
- JWT
- OAuth
- API authorization
- Rate limiting
- Mass assignment
- BOLA
- Excessive data exposure

## Business Logic

Jangan hanya fokus vulnerability teknis. Pelajari juga:

- Workflow abuse
- Price manipulation
- Race conditions
- Privilege abuse
- Improper state transition

---

# 13.2 Penetration Testing

Setelah memahami vulnerability, belajar metodologi pentesting.

Urutan:

```text
Reconnaissance
      ↓
Enumeration
      ↓
Scanning
      ↓
Vulnerability Analysis
      ↓
Exploitation
      ↓
Privilege Escalation
      ↓
Post-Exploitation
      ↓
Reporting
```

Tools yang dapat dipelajari:

- Nmap
- Burp Suite
- ffuf
- Gobuster
- Nikto
- Netcat
- Metasploit

Prinsip:

> Jangan belajar tool terlebih dahulu. Belajar konsep serangannya terlebih dahulu.

Contoh:

```text
Bukan:
"Bagaimana menggunakan sqlmap?"

Tetapi:
"Mengapa SQL Injection terjadi?"

Kemudian:
"Bagaimana sqlmap membantu menguji kondisi tersebut?"
```

Semua praktik pentesting dilakukan pada sistem yang memang kamu miliki atau secara eksplisit diizinkan untuk diuji.

---

# 13.3 Network Security

Pelajari:

- Port scanning
- Service enumeration
- Firewall
- IDS/IPS
- VPN
- Network segmentation
- MITM concepts
- ARP security
- DNS security
- SMB
- FTP
- SSH
- SNMP

---

# 13.4 Windows & Active Directory Security

Setelah Windows fundamentals cukup kuat.

Pelajari:

- Windows internals
- Active Directory
- Domain
- LDAP
- Kerberos
- NTLM
- SMB
- Group Policy
- Users/Groups

Kemudian konsep attack path:

```text
Initial Access
      ↓
Enumeration
      ↓
Privilege Escalation
      ↓
Credential Access
      ↓
Lateral Movement
      ↓
Domain-Level Access
```

---

# 14. BLUE TEAM

Setelah mengetahui bagaimana attacker bekerja, pelajari bagaimana defender mendeteksi dan merespons.

---

# 14.1 SOC

Pelajari:

- Logging
- Monitoring
- SIEM
- IDS/IPS
- EDR
- Alert
- Investigation
- Threat Hunting

Contoh data:

```text
Windows Event Log
Linux Logs
Sysmon
Network Logs
Application Logs
```

Kemudian tools/platform:

- Wazuh
- ELK
- Splunk concepts

---

# 14.2 Incident Response

Alur:

```text
Detect
  ↓
Analyze
  ↓
Contain
  ↓
Eradicate
  ↓
Recover
  ↓
Lessons Learned
```

Pelajari:

- Incident classification
- Evidence preservation
- Containment
- Eradication
- Recovery
- Post-incident analysis

---

# 14.3 Digital Forensics

Pelajari:

- Disk forensics
- Memory forensics
- File analysis
- Timeline analysis
- Windows artifacts
- Browser artifacts
- Log analysis
- Network forensics

Tools:

- Autopsy
- Volatility
- Wireshark

---

# 15. CLOUD SECURITY

Cloud Security dipelajari setelah memahami Cloud + Networking + Security.

Pelajari:

- IAM
- Cloud misconfiguration
- Storage exposure
- Security groups
- Secrets
- Cloud logging
- Container security
- Kubernetes security
- Cloud attack paths

Konsep utama:

```text
Cloud
+
DevOps
+
Networking
+
Security
=
Cloud Security
```

---

# 16. DEVSECOPS

Ini merupakan titik pertemuan DevOps dan Cybersecurity.

Tujuannya bukan membuat security sebagai tahap terakhir, tetapi memasukkan security ke seluruh software lifecycle.

Contoh:

```text
Developer
    ↓
Git
    ↓
CI
    │
    ├── SAST
    ├── SCA
    ├── Secret Scanning
    ├── Container Scanning
    │
    ↓
Build
    ↓
Deploy
    ↓
DAST
    ↓
Monitoring
```

## Materi

### SAST

Static Application Security Testing.

Menganalisis source code.

### SCA

Software Composition Analysis.

Menganalisis dependency/library.

### Secret Scanning

Mendeteksi:

- API key
- Token
- Password
- Credentials

### Container Scanning

Mencari vulnerability pada image/container.

### DAST

Dynamic Application Security Testing.

Menguji aplikasi yang sedang berjalan.

Tools/concepts:

- Semgrep
- SonarQube
- Trivy
- OWASP ZAP
- Dependabot
- GitHub security features

---

# 17. SECURITY ENGINEERING

Setelah memahami development, operations, dan security.

## Secure Architecture

Pelajari:

- Threat modeling
- Secure architecture
- Zero Trust
- Defense in Depth
- Security boundaries
- Trust boundaries
- Secure design

## Security Automation

Gunakan:

- Python
- Bash
- APIs
- SIEM automation
- Vulnerability scanning
- Incident automation

Tujuannya:

> Security bukan hanya dilakukan manual, tetapi dapat diotomatisasi dan diintegrasikan ke infrastructure.

---

# 18. MALWARE / REVERSE ENGINEERING

Ini sebaiknya dipelajari setelah foundation sangat kuat.

Prerequisite:

```text
Programming
+
Operating System
+
Networking
+
Security
```

Pelajari:

- Assembly
- x86/x64
- PE format
- Process
- Memory
- DLL
- Windows API
- Static analysis
- Dynamic analysis
- Debugging

Tools:

- Ghidra
- x64dbg
- IDA
- ILSpy/dnSpy

---

# 19. GRC — GOVERNANCE, RISK & COMPLIANCE

GRC tidak harus menunggu benar-benar terakhir, tetapi untuk jalur teknis dapat diprioritaskan setelah foundation dan security cukup kuat.

## Risk Management

- Asset
- Threat
- Vulnerability
- Impact
- Likelihood
- Risk treatment

## Governance

- Security policy
- Security procedures
- Roles & responsibilities
- Asset management

## Compliance & Audit

Pelajari konsep:

- ISO 27001
- NIST
- CIS Controls
- OWASP

---

# 20. Hubungan DevOps dan Cybersecurity

DevOps dan Cybersecurity bukan dua dunia terpisah.

```text
Developer
    ↓
Git
    ↓
Build
    ↓
CI/CD
    ↓
Docker
    ↓
Cloud
    ↓
Infrastructure
    ↓
Monitoring
```

Security masuk ke setiap tahap:

```text
Developer
    ↓
Secure Coding
    ↓
Git
    ↓
Secret Scanning
    ↓
CI
    ↓
SAST / SCA
    ↓
Build
    ↓
Container Scanning
    ↓
Deploy
    ↓
DAST
    ↓
Cloud Security
    ↓
Monitoring
    ↓
Incident Response
```

Inilah konsep **DevSecOps**.

---

# 21. Jalur Khusus untuk Full-Stack Developer

Karena sudah memiliki background development, roadmap tidak harus dimulai seperti orang yang benar-benar belum pernah coding.

Modal yang sudah relevan:

```text
Programming
Web Development
Frontend
Backend
Database
Git
```

Fokus penguatan:

```text
Networking
    ↓
Linux
    ↓
Windows
    ↓
DevOps
    ↓
Security Fundamentals
    ↓
Web Security
    ↓
Pentesting
    ↓
Active Directory
    ↓
Cloud
    ↓
DevSecOps
    ↓
Security Engineering
```

---

# 22. Cybersecurity Lab yang Akan Dibangun

Untuk website belajar cybersecurity yang ingin dibuat, materi jangan hanya berbentuk artikel.

Setiap topik sebaiknya mempunyai struktur:

```text
📚 THEORY
    ↓
🧪 LAB
    ↓
⚔️ CHALLENGE
    ↓
🛠️ TOOLS
    ↓
🏗️ BUILD PROJECT
    ↓
🔐 SECURITY TEST
    ↓
📝 REPORT
```

## Contoh SQL Injection

```text
Theory
  ↓
Mengapa SQL Injection terjadi?
  ↓
Vulnerable Application
  ↓
Lab
  ↓
Challenge
  ↓
Detection
  ↓
Remediation
  ↓
Secure Coding
```

## Contoh Docker Security

```text
Theory
  ↓
Docker Fundamentals
  ↓
Build Container
  ↓
Run Vulnerable Container
  ↓
Scan Image
  ↓
Fix Vulnerability
  ↓
Rebuild
  ↓
Verify
```

## Contoh CI/CD Security

```text
Build Application
       ↓
Git Push
       ↓
CI Pipeline
       ↓
SAST
       ↓
Dependency Scan
       ↓
Secret Scan
       ↓
Container Scan
       ↓
Deploy
       ↓
DAST
       ↓
Monitoring
```

---

# 23. Target Kompetensi Akhir

Jika seluruh roadmap dipelajari dengan praktik, target akhirnya bukan sekadar hafal vulnerability.

Kamu diharapkan mampu:

### Development

- Membuat aplikasi
- Memahami backend/frontend
- Memahami database
- Membaca source code

### Infrastructure

- Mengelola Linux
- Mengelola Windows
- Memahami networking
- Menjalankan web server
- Menggunakan Docker
- Membuat CI/CD
- Mengelola cloud

### Offensive Security

- Melakukan reconnaissance
- Enumeration
- Vulnerability analysis
- Web pentesting
- Network pentesting
- Active Directory security testing

### Defensive Security

- Membaca log
- Menganalisis alert
- Monitoring
- Incident response
- Digital forensics

### DevSecOps

- SAST
- SCA
- Secret scanning
- Container scanning
- DAST
- Security pipeline

### Security Engineering

- Threat modeling
- Secure architecture
- Security automation
- Defense in depth
- Zero Trust concepts

---

# 24. Prinsip Belajar

## 1. Jangan Tool-First

Jangan:

```text
Belajar Nmap
Belajar Burp
Belajar Metasploit
```

tanpa memahami konsep.

Lebih baik:

```text
Networking
   ↓
Port
   ↓
Service
   ↓
Enumeration
   ↓
Nmap
```

---

## 2. Jangan Hanya Offensive

Belajar:

```text
Attack
  ↓
Detection
  ↓
Investigation
  ↓
Remediation
```

Dengan begitu kamu memahami alasan sebuah vulnerability berbahaya dan bagaimana sistem dapat diperbaiki.

---

## 3. Selalu Bangun Sesuatu

Misalnya setelah belajar Docker:

> Bangun lab vulnerable application menggunakan Docker.

Setelah belajar CI/CD:

> Buat pipeline untuk aplikasi tersebut.

Setelah belajar security:

> Tambahkan security scanning.

Setelah belajar pentesting:

> Uji aplikasi tersebut.

Setelah belajar Blue Team:

> Tambahkan logging dan monitoring.

---

# 25. Final Roadmap

```text
01  Computer Fundamentals
        ↓
02  Networking
        ↓
03  Linux
        ↓
04  Windows
        ↓
05  Programming
        ↓
06  Git
        ↓
07  Database
        ↓
08  Web Fundamentals
        ↓
09  Security Fundamentals
        │
        ├───────────────────────────┐
        ▼                           ▼
     DEVOPS                    CYBERSECURITY
        │                           │
10  Linux Admin               10  Web Security
11  Bash/Python               11  Pentesting
12  Web Server                12  Network Security
13  Docker                    13  Windows/AD
14  CI/CD
15  Terraform/Ansible
16  Cloud
17  Kubernetes
        │                           │
        └─────────────┬─────────────┘
                      ▼
                 DEVSECOPS
                      ↓
                CLOUD SECURITY
                      ↓
             SECURITY ENGINEERING
                      │
          ┌───────────┼───────────┐
          ▼           ▼           ▼
       BLUE TEAM   FORENSICS   MALWARE/RE
          │
          ▼
         GRC
```

---

# 26. Filosofi Roadmap

Tujuan akhirnya bukan menjadi orang yang hanya bisa:

> "menemukan vulnerability."

Tetapi menjadi orang yang memahami:

```text
Bagaimana aplikasi dibuat
          ↓
Bagaimana aplikasi dijalankan
          ↓
Bagaimana infrastructure dibangun
          ↓
Bagaimana sistem diserang
          ↓
Bagaimana serangan terdeteksi
          ↓
Bagaimana bukti dianalisis
          ↓
Bagaimana vulnerability diperbaiki
          ↓
Bagaimana security diotomatisasi
          ↓
Bagaimana sistem dirancang agar lebih aman
```

**Developer → DevOps → Security → DevSecOps → Security Engineering**

Itulah arah besar roadmap ini.

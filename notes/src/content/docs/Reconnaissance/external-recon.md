---
title: External Pentesting - Reconnaissance
---


## Passive Reconnaissance Tools 

### WHOIS Lookup & Domain Info
- **Purpose**: Gather domain ownership details, registrar, and DNS records.
- **Tools**:
  - **CLI**: `whois target.com`
  - **Amass**: `amass intel -d target.com`
  - **SecurityTrails**: [https://securitytrails.com/domain/target.com](https://securitytrails.com/domain/target.com)

### ASN (Autonomous System Number) Enumeration
- **Purpose**: Identify IP ranges owned by the target organization.
- **Tools**:
  - **Hurricane Electric BGP**: [https://bgp.he.net/](https://bgp.he.net/)
  - **ASN Lookup (IPinfo.io)**: `curl -s https://ipinfo.io/AS[ASN]`
  - **Amass ASN**: `amass intel -asn [ASN]`

### Subdomain Enumeration
- **Purpose**: Discover subdomains that may expose hidden services.
- **Tools**:
  - **Subfinder**: `subfinder -d target.com`
  - **Amass**: `amass enum -d target.com`
  - **CRT.sh**: `curl -s "https://crt.sh/?q=%.target.com&output=json" | jq`
  - **Findomain**: `findomain -t target.com`
  - **Chaos (by ProjectDiscovery)**: `chaos -d target.com`

### DNS Reconnaissance
- **Purpose**: Identify DNS records (A, CNAME, MX, TXT) for potential attack vectors.
- **Tools**:
  - **Dig**: `dig ANY target.com`
  - **DNSRecon**: `dnsrecon -d target.com`
  - **MassDNS**: `massdns -r resolvers.txt -t A -o S -w results.txt subdomains.txt`
  - **DNSTwist (Typosquatting)**: `dnstwist -d target.com`

### Public Data Sources (OSINT)
- **Purpose**: Gather information from public sources.
- **Tools**:
  - **Shodan**: `shodan search "target.com"`
  - **Censys**: `censys search target.com`
  - **FOFA**: `fofa search "domain=target.com"`
  - **Hunter.io**: Find employee emails [https://hunter.io](https://hunter.io)
  - **TheHarvester**: `theHarvester -d target.com -b all`
  - **Google Dorks**: `site:target.com filetype:pdf`
  - **Waybackurls**: `echo target.com | waybackurls`
  - **GAU (Get All URLs)**: `echo target.com | gau`

---

## Active Reconnaissance Tools

### Port Scanning & Service Detection
- **Purpose**: Identify open ports and running services.
- **Tools**:
  - **Nmap**: `nmap -sV -sC -oN nmap_scan.txt target.com`
  - **Masscan**: `masscan -p1-65535 --rate=10000 target.com`
  - **RustScan**: `rustscan -a target.com`

### Banner Grabbing & Service Fingerprinting
- **Purpose**: Identify running services and versions.
- **Tools**:
  - **Netcat**: `nc -v target.com 80`
  - **WhatWeb**: `whatweb target.com`
  - **cURL**: `curl -I target.com`
  - **httprobe**: `cat domains.txt | httprobe`

### Web Enumeration
- **Purpose**: Discover directories, subdomains, and hidden endpoints.
- **Tools**:
  - **Gobuster**: `gobuster dir -u https://target.com -w wordlist.txt`
  - **Dirsearch**: `dirsearch -u https://target.com -e php,html,asp -w wordlist.txt`
  - **Arjun**: `python3 arjun.py -u https://target.com` (Find hidden parameters)
  - **Dirb**: `dirb https://target.com /usr/share/wordlists/dirb/common.txt`
  - **katana (Web crawler)**: `katana -u https://target.com`

### Virtual Hosts & Subdomain Bruteforce
- **Purpose**: Discover hidden subdomains and virtual hosts.
- **Tools**:
  - **Gobuster vhost**: `gobuster vhost -u target.com -w subdomains.txt`
  - **Ffuf**: `ffuf -u https://target.com -w subdomains.txt -H "Host: FUZZ.target.com"`
  - **Amass Brute**: `amass enum -brute -d target.com`

### JS & Secrets Discovery
- **Purpose**: Extract sensitive information from JavaScript files and repositories.
- **Tools**:
  - **LinkFinder**: `python3 linkfinder.py -i https://target.com -o cli`
  - **SecretFinder**: `python3 SecretFinder.py -i https://target.com/js/app.js -o cli`
  - **GitDorker**: `python3 GitDorker.py -q "target.com" -d dorks.txt`
  - **TruffleHog**: `trufflehog --regex --entropy=False target.git`
  - **Gitleaks**: `gitleaks detect -s target.git`
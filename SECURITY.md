# Security Policy

## Supported Versions

| Version | Supported |
|---|---|
| Latest (`main`) | Yes |
| Older branches | No — please update to `main` |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

If you discover a security vulnerability in this project, report it privately so it can be assessed and patched before public disclosure.

### How to Report

1. **Email** — Send details to the maintainers via the contact listed on the repository. Use the subject line: `[SECURITY] <brief description>`.
2. **GitHub Private Vulnerability Reporting** — Use the [Security Advisories](../../security/advisories/new) feature on this repository if available.

### What to Include

- A clear description of the vulnerability and its potential impact.
- Steps to reproduce or a proof-of-concept (PoC).
- Affected file(s), route(s), or component(s) if known.
- Your suggested fix, if you have one.

### Response Timeline

| Stage | Target |
|---|---|
| Acknowledgement | Within 48 hours |
| Initial assessment | Within 5 business days |
| Patch or mitigation | Within 30 days (critical: 7 days) |
| Public disclosure | After patch is released |

We will credit reporters in the release notes unless you prefer to remain anonymous.

## Scope

The following are **in scope**:

- Cross-site scripting (XSS)
- Cross-site request forgery (CSRF)
- Authentication or authorisation bypass
- Sensitive data exposure (API keys, PII)
- Injection vulnerabilities (SQL, command, etc.)
- Insecure dependencies with known CVEs
- Misconfigured security headers

The following are **out of scope**:

- Vulnerabilities in third-party services (Stripe, PayPal, Vercel)
- Rate limiting or DDoS on the demo/development server
- Issues that require physical access to a device
- Social engineering attacks

## Security Best Practices for Implementors

If you deploy this platform for a live charity:

- **Environment variables** — Never commit `.env.local` or API keys. Use `vercel env` or your host's secret management.
- **Dependencies** — Run `npm audit` regularly and keep packages up to date.
- **Content Security Policy** — Configure a strict CSP header via `next.config.ts`.
- **HTTPS** — Always serve over HTTPS in production.
- **Donation data** — Never log or store raw payment card data. Use tokenised payment providers only (Stripe, PayPal).
- **Access control** — Restrict admin routes with proper authentication middleware.

## Disclosure Policy

We follow responsible disclosure. We ask that reporters give us a reasonable window to patch before publishing details publicly. In return, we commit to acting promptly and transparently.

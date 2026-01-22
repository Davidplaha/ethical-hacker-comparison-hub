export interface Platform {
  id: string;
  name: string;
  tagline: string;
  logo: string;
  rating: number;
  description: string;
  features: string[];
  pros: string[];
  cons: string[];
  ctaUrl: string;
  ctaText: string;
  bestFor: string;
  serviceType: string;
}

export const platforms: Platform[] = [
  {
    id: "spywizards",
    name: "SpyWizards",
    tagline: "Best for Monitoring & Consent-Based Tools",
    logo: "/platforms/spywizards.svg",
    rating: 4.8,
    description: "SpyWizards is positioned as a monitoring and cybersecurity solutions platform rather than a freelance marketplace. It focuses on software-based tools and managed services designed for ethical use. SpyWizards emphasizes consent-based monitoring, which means the device owner or legal guardian must authorize usage. Instead of hiring an individual hacker, users get structured software solutions backed by customer support and documentation.",
    features: [
      "Monitoring solutions for authorized devices",
      "Parental control tools",
      "Corporate device oversight",
      "Digital activity tracking",
      "24/7 customer support"
    ],
    pros: [
      "User-friendly software solutions",
      "No technical expertise required",
      "Comprehensive customer support",
      "Clear consent-based policies",
      "Suitable for families and businesses"
    ],
    cons: [
      "Limited to monitoring tools",
      "Not for penetration testing"
    ],
    ctaUrl: "https://spywizards.com",
    ctaText: "Visit SpyWizards",
    bestFor: "Parents, employers, and individuals who prefer tools over freelancers",
    serviceType: "Software-based"
  },
  {
    id: "cyberlords",
    name: "Cyberlords",
    tagline: "Best for Technical Security & Penetration Testing",
    logo: "/platforms/cyberlords.svg",
    rating: 4.9,
    description: "Cyberlords presents itself as a professional ethical hacking collective. The platform focuses on technical cybersecurity services rather than monitoring software. Cyberlords requires verification and authorization before any engagement begins, ensuring all work is conducted within legal frameworks. They appeal to users who already understand cybersecurity terminology and want hands-on expert intervention.",
    features: [
      "Penetration testing",
      "Vulnerability scanning",
      "Security audits",
      "Digital forensics",
      "Account recovery with proof of ownership"
    ],
    pros: [
      "Expert-led technical services",
      "Comprehensive security audits",
      "Professional verification process",
      "Wide range of cybersecurity services",
      "Trusted by businesses worldwide"
    ],
    cons: [
      "Requires technical understanding",
      "Higher price point for enterprise services"
    ],
    ctaUrl: "https://cyberlords.io",
    ctaText: "Visit Cyberlords",
    bestFor: "Website owners, app developers, tech startups, and businesses with security concerns",
    serviceType: "Expert-led"
  },
  {
    id: "hire-a-hackerservice",
    name: "Hire-A-HackerService",
    tagline: "Best for Guided Cybersecurity Help",
    logo: "/platforms/hire-a-hackerservice.svg",
    rating: 4.6,
    description: "Hire-A-HackerService.com is built specifically around ethical positioning for cybersecurity needs. Instead of acting as a marketplace, it presents itself as a managed cybersecurity service provider. The platform focuses on education and guidance, making it accessible to people who don't speak 'tech language'.",
    features: [
      "Ethical investigations",
      "Cybersecurity consulting",
      "Security problem assessment",
      "Guided ethical hacking services",
      "Educational resources"
    ],
    pros: [
      "Beginner-friendly approach",
      "Clear explanations of services",
      "Managed service model",
      "Focus on education",
      "Accessible to non-technical users"
    ],
    cons: [
      "Limited advanced technical services",
      "May not suit enterprise needs"
    ],
    ctaUrl: "https://hire-a-hackerservice.com",
    ctaText: "Visit Hire-A-HackerService",
    bestFor: "Users unsure where to start, individuals needing explanations, small businesses",
    serviceType: "Managed services"
  },
  {
    id: "fiverr",
    name: "Fiverr",
    tagline: "Best for Budget-Friendly Security Tasks",
    logo: "/platforms/fiverr.svg",
    rating: 4.4,
    description: "Fiverr is a global freelance marketplace that includes thousands of cybersecurity professionals offering ethical hacking-related services. Fiverr strictly bans illegal hacking services, and any listing that claims unauthorized access is removed. Because Fiverr is open, users must check reviews carefully, verify credentials, and avoid unrealistic promises.",
    features: [
      "Website penetration testing",
      "Malware analysis",
      "Security audits",
      "Consulting sessions",
      "Cybersecurity setup"
    ],
    pros: [
      "Budget-friendly options",
      "Wide variety of freelancers",
      "Review and rating system",
      "Money-back guarantee",
      "Quick turnaround times"
    ],
    cons: [
      "Quality varies by freelancer",
      "Need to verify credentials manually",
      "Limited enterprise support"
    ],
    ctaUrl: "https://www.fiverr.com",
    ctaText: "Visit Fiverr",
    bestFor: "Individuals on a budget, short-term projects, startups, one-time security checks",
    serviceType: "Freelancers"
  },
  {
    id: "upwork",
    name: "Upwork",
    tagline: "Best for Enterprise & Long-Term Projects",
    logo: "/platforms/upwork.svg",
    rating: 4.5,
    description: "Upwork is a professional freelance platform focused on long-term and enterprise-level work. Upwork is often chosen when security work must be documented and auditable. The platform offers structured contracts, escrow payments, identity verification, and enterprise tools that make it suitable for large organizations.",
    features: [
      "Network security audits",
      "Penetration testing",
      "Compliance consulting",
      "SOC setup",
      "Cybersecurity strategy"
    ],
    pros: [
      "Structured contracts",
      "Escrow payments",
      "Identity verification",
      "Enterprise tools",
      "Long-term engagement options"
    ],
    cons: [
      "Higher fees for enterprises",
      "Longer hiring process"
    ],
    ctaUrl: "https://www.upwork.com",
    ctaText: "Visit Upwork",
    bestFor: "Companies, agencies, enterprises, long-term cybersecurity projects",
    serviceType: "Contracts"
  }
];

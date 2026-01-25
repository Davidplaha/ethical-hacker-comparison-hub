import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { faqs } from "@/data/faqs";
import { platforms } from "@/data/platforms";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Focus Keyword: "hire a hacker"
// SEO-optimized meta tags targeting the primary keyword

export const metadata: Metadata = {
  title: "Hire a Hacker | #1 Ethical Hacker Services 2026 - Compare Top Platforms",
  description: "Looking to hire a hacker? Compare the best ethical hacker services for penetration testing, security audits & monitoring. Trusted platforms like SpyWizards, Cyberlords & more. 100% legal.",
  keywords: [
    "hire a hacker",
    "hire a hacker service",
    "ethical hacker for hire",
    "hire ethical hacker",
    "professional hacker services",
    "penetration testing services",
    "cybersecurity services",
    "security audit services",
    "white hat hacker",
    "certified ethical hacker",
    "hire hacker online",
    "legal hacker services"
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.svg",
  },
  authors: [{ name: "EthicalHackerHub" }],
  creator: "EthicalHackerHub",
  publisher: "EthicalHackerHub",
  metadataBase: new URL("https://www.ethicalhackers.us.com"),
  alternates: {
    canonical: "https://www.ethicalhackers.us.com",
  },
  openGraph: {
    title: "Hire a Hacker | Best Ethical Hacker Services 2026",
    description: "Compare the top ethical hacker services. Find trusted professionals for penetration testing, security audits, and cybersecurity solutions. 100% legal & verified platforms.",
    type: "website",
    locale: "en_US",
    url: "https://www.ethicalhackers.us.com",
    siteName: "EthicalHackerHub",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hire a Hacker - Ethical Cybersecurity Services Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire a Hacker | Best Ethical Hacker Services 2026",
    description: "Compare the top ethical hacker services. Find trusted professionals for penetration testing, security audits, and cybersecurity solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

// FAQ Schema for JSON-LD (SEO-optimized)
function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

// Website Schema with SearchAction for sitelinks searchbox
function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "EthicalHackerHub",
    "alternateName": "Ethical Hacker Hub",
    "description": "Compare the best ethical hacker services. Find trusted professionals to hire a hacker for penetration testing, security audits, and cybersecurity solutions.",
    "url": "https://www.ethicalhackers.us.com",
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.ethicalhackers.us.com/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
}

// Organization Schema for brand recognition
function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EthicalHackerHub",
    "alternateName": "Ethical Hacker Hub",
    "url": "https://www.ethicalhackers.us.com",
    "logo": "https://www.ethicalhackers.us.com/logo.png",
    "description": "Your trusted resource to hire a hacker for ethical cybersecurity services. Compare verified platforms for penetration testing, security audits, and monitoring solutions.",
    "foundingDate": "2024",
    "sameAs": [
      // Add your social media profiles here
      // "https://twitter.com/ethicalhackerhub",
      // "https://linkedin.com/company/ethicalhackerhub"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@ethicalhackers.us.com",
      "contactType": "customer service",
      "availableLanguage": "English"
    }
  };
}

// WebPage Schema for the main page
function generateWebPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Hire a Hacker | Best Ethical Hacker Services 2026",
    "description": "Compare the best ethical hacker services. Find trusted professionals to hire a hacker for penetration testing, security audits, and cybersecurity solutions.",
    "url": "https://www.ethicalhackers.us.com",
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "EthicalHackerHub",
      "url": "https://www.ethicalhackers.us.com"
    },
    "about": {
      "@type": "Thing",
      "name": "Ethical Hacking Services"
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Top Ethical Hacker Platforms",
      "description": "Comparison of the best platforms to hire a hacker for ethical cybersecurity services",
      "numberOfItems": platforms.length,
      "itemListElement": platforms.map((platform, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": platform.name,
        "description": platform.tagline,
        "url": platform.ctaUrl
      }))
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".hero-description"]
    },
    "dateModified": new Date().toISOString().split('T')[0],
    "datePublished": "2024-01-01"
  };
}

// Service Schema for the comparison service
function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hire a Hacker Service Comparison",
    "description": "Free comparison service to help you hire a hacker from verified ethical cybersecurity platforms. Compare features, ratings, and services.",
    "provider": {
      "@type": "Organization",
      "name": "EthicalHackerHub"
    },
    "serviceType": "Cybersecurity Service Comparison",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Ethical Hacker Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Penetration Testing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Security Audits"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vulnerability Assessment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Forensics"
          }
        }
      ]
    }
  };
}

// BreadcrumbList Schema
function generateBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.ethicalhackers.us.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Hire a Hacker",
        "item": "https://www.ethicalhackers.us.com/#compare"
      }
    ]
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema()),
          }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteSchema()),
          }}
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebPageSchema()),
          }}
        />
        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateServiceSchema()),
          }}
        />
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBreadcrumbSchema()),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`} suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

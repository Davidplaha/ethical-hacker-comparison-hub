import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { faqs } from "@/data/faqs";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hire a Hacker Service - Ethical & Legal Cybersecurity Solutions | EthicalHackerHub",
  description: "Find legitimate cybersecurity professionals for penetration testing, security audits, and monitoring solutions. Compare top ethical hacker services including SpyWizards, Cyberlords, and more.",
  keywords: ["hire a hacker", "ethical hacker", "penetration testing", "cybersecurity services", "security audit", "white hat hacker"],
  authors: [{ name: "EthicalHackerHub" }],
  openGraph: {
    title: "Hire a Hacker Service - Ethical & Legal Cybersecurity Solutions",
    description: "Find legitimate cybersecurity professionals for penetration testing, security audits, and monitoring solutions.",
    type: "website",
    locale: "en_US",
    siteName: "EthicalHackerHub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire a Hacker Service - Ethical & Legal Cybersecurity Solutions",
    description: "Find legitimate cybersecurity professionals for penetration testing, security audits, and monitoring solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// FAQ Schema for JSON-LD
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

// Website Schema
function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "EthicalHackerHub",
    "description": "Your trusted resource for finding ethical cybersecurity services and professionals.",
    "url": "https://ethicalhackerhub.com",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteSchema()),
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

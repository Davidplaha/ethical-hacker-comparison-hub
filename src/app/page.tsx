import Hero from "@/components/Hero";
import AnchorNav from "@/components/AnchorNav";
import ComparisonGrid from "@/components/ComparisonGrid";
import HowItWorks from "@/components/HowItWorks";
import PlatformSection from "@/components/PlatformSection";
import FAQAccordion from "@/components/FAQAccordion";
import { platforms } from "@/data/platforms";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Sticky Anchor Navigation */}
      <AnchorNav />

      {/* Comparison Grid */}
      <ComparisonGrid />

      {/* How It Works */}
      <HowItWorks />

      {/* Platform Detail Sections */}
      <section id="platforms" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Platform Details
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed reviews of each ethical hacker service platform, including
              features, pros, cons, and who they&apos;re best suited for.
            </p>
          </div>

          {/* Platform Sections */}
          {platforms.map((platform) => (
            <PlatformSection key={platform.id} platform={platform} />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQAccordion />

      {/* Final CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Secure Your Digital Assets?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Choose from our verified ethical hacker services and protect your systems today.
          </p>
          <a
            href="#compare"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-200 shadow-lg"
          >
            Compare Services Now
          </a>
        </div>
      </section>
    </>
  );
}

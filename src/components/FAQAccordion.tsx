'use client';

import { useState } from 'react';
import { faqs } from '@/data/faqs';

export default function FAQAccordion() {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggleFaq = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section id="faqs" className="py-16 lg:py-24 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600">
                        Common questions about hiring ethical hacker services
                    </p>
                </div>

                {/* Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFaq(faq.id)}
                                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                                aria-expanded={openId === faq.id}
                            >
                                <span className="font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </span>
                                <svg
                                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${openId === faq.id ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-200 ${openId === faq.id ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Help */}
                <div className="mt-12 text-center bg-white rounded-xl border border-gray-200 p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Still have questions?
                    </h3>
                    <p className="text-gray-600 mb-4">
                        We&apos;re here to help you find the right ethical hacker service.
                    </p>
                    <a
                        href="mailto:contact@ethicalhackers.us.com"
                        className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}

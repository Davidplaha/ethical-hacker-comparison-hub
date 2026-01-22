import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-white">EthicalHackerHub</span>
                        </Link>
                        <p className="text-sm text-gray-400">
                            Your trusted resource for finding ethical cybersecurity services and professionals.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#overview" className="text-gray-400 hover:text-white transition-colors">
                                    Overview
                                </a>
                            </li>
                            <li>
                                <a href="#compare" className="text-gray-400 hover:text-white transition-colors">
                                    Compare Services
                                </a>
                            </li>
                            <li>
                                <a href="#platforms" className="text-gray-400 hover:text-white transition-colors">
                                    Platforms
                                </a>
                            </li>
                            <li>
                                <a href="#faqs" className="text-gray-400 hover:text-white transition-colors">
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <p className="text-sm text-gray-400 mb-2">
                            Have questions about ethical hacking services?
                        </p>
                        <a
                            href="mailto:contact@ethicalhackerhub.com"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            contact@ethicalhackerhub.com
                        </a>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <p className="text-xs text-gray-500 mb-4">
                        <strong>Legal Disclaimer:</strong> All services and platforms listed on this website focus on ethical, consent-based cybersecurity work. We do not endorse, promote, or facilitate any illegal hacking activities. Users are responsible for ensuring they have proper authorization before engaging any service. Always verify that you own or have written permission to access any systems, accounts, or devices before requesting cybersecurity services.
                    </p>
                    <p className="text-sm text-gray-400 text-center">
                        © {currentYear} EthicalHackerHub. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

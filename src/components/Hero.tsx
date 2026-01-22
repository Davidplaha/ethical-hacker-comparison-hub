import Button from './Button';

export default function Hero() {
    return (
        <section id="overview" className="relative bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Hire a Hacker Service
                            <span className="block text-blue-600">Ethical & Legal</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Find legitimate cybersecurity professionals for penetration testing, security audits,
                            monitoring solutions, and more. All platforms listed operate within legal frameworks
                            with proper authorization requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button href="#compare" size="lg">
                                Compare Services
                            </Button>
                            <Button href="#how-it-works" variant="secondary" size="lg">
                                How It Works
                            </Button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-10 flex items-center gap-8 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>100% Legal Services</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Verified Platforms</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Expert Reviews</span>
                            </div>
                        </div>
                    </div>

                    {/* Illustration */}
                    <div className="relative hidden lg:block">
                        <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
                        <svg className="relative w-full h-auto" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Shield */}
                            <path d="M250 50L150 100V200C150 280 200 340 250 360C300 340 350 280 350 200V100L250 50Z" fill="#2563EB" fillOpacity="0.1" stroke="#2563EB" strokeWidth="3" />
                            <path d="M220 200L240 220L280 180" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

                            {/* Lock */}
                            <rect x="380" y="120" width="60" height="50" rx="8" fill="#1E40AF" fillOpacity="0.2" stroke="#1E40AF" strokeWidth="2" />
                            <path d="M395 120V105C395 90 405 80 420 80C435 80 445 90 445 105V120" stroke="#1E40AF" strokeWidth="2" fill="none" />
                            <circle cx="420" cy="145" r="8" fill="#1E40AF" />

                            {/* Code brackets */}
                            <path d="M80 180L60 200L80 220" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
                            <path d="M120 180L140 200L120 220" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />

                            {/* Binary */}
                            <text x="70" y="280" fill="#94A3B8" fontSize="12" fontFamily="monospace">01001</text>
                            <text x="380" y="220" fill="#94A3B8" fontSize="12" fontFamily="monospace">10110</text>

                            {/* Connection lines */}
                            <circle cx="100" cy="320" r="30" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="2" />
                            <circle cx="400" cy="320" r="30" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="2" />
                            <line x1="130" y1="320" x2="370" y2="320" stroke="#BFDBFE" strokeWidth="2" strokeDasharray="5,5" />

                            {/* Terminal icon */}
                            <rect x="85" y="305" width="30" height="25" rx="3" fill="none" stroke="#3B82F6" strokeWidth="2" />
                            <path d="M92 315L98 320L92 325" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
                            <line x1="100" y1="325" x2="108" y2="325" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />

                            {/* Search icon */}
                            <circle cx="395" cy="315" r="10" fill="none" stroke="#3B82F6" strokeWidth="2" />
                            <line x1="402" y1="322" x2="410" y2="330" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}

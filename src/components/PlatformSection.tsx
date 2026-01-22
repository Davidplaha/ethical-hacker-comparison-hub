import Image from 'next/image';
import Button from './Button';
import type { Platform } from '@/data/platforms';

interface PlatformSectionProps {
    platform: Platform;
}

// Check if logo exists (has actual file extension)
function hasActualLogo(logo: string): boolean {
    return logo.endsWith('.png') || logo.endsWith('.jpg') || logo.endsWith('.jpeg') || logo.endsWith('.webp');
}

export default function PlatformSection({ platform }: PlatformSectionProps) {
    const showImage = hasActualLogo(platform.logo);

    return (
        <article id={platform.id} className="py-12 border-b border-gray-100 last:border-b-0">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                        {showImage ? (
                            <Image
                                src={platform.logo}
                                alt={`${platform.name} logo`}
                                width={64}
                                height={64}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        )}
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">{platform.name}</h3>
                        <p className="text-blue-600 font-medium">{platform.tagline}</p>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-8">
                    {platform.description}
                </p>

                {/* Best For */}
                <div className="bg-blue-50 rounded-lg p-4 mb-8">
                    <p className="text-sm">
                        <span className="font-semibold text-gray-900">Best For: </span>
                        <span className="text-gray-700">{platform.bestFor}</span>
                    </p>
                </div>

                {/* Pros and Cons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Pros */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Pros
                        </h4>
                        <ul className="space-y-2">
                            {platform.pros.map((pro, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-600">
                                    <svg className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>{pro}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Cons */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            Cons
                        </h4>
                        <ul className="space-y-2">
                            {platform.cons.map((con, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-600">
                                    <svg className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    <span>{con}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <Button href={platform.ctaUrl} size="lg">
                        {platform.ctaText}
                    </Button>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Verified ethical service</span>
                    </div>
                </div>
            </div>
        </article>
    );
}

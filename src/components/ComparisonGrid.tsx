import PlatformCard from './PlatformCard';
import { platforms } from '@/data/platforms';

export default function ComparisonGrid() {
    return (
        <section id="compare" className="py-16 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Compare Ethical Hacker Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We&apos;ve reviewed the most trusted platforms for hiring ethical hackers.
                        Each platform offers unique features for different cybersecurity needs.
                    </p>
                </div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {platforms.map((platform) => (
                        <PlatformCard key={platform.id} platform={platform} />
                    ))}
                </div>

                {/* Comparison Table */}
                <div className="mt-16 overflow-x-auto">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        Quick Comparison
                    </h3>
                    <table className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Platform</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Best Use Case</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Service Style</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {platforms.map((platform, index) => (
                                <tr
                                    key={platform.id}
                                    className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                                >
                                    <td className="px-6 py-4">
                                        <span className="font-semibold text-gray-900">{platform.name}</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{platform.bestFor.split(',')[0]}</td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                                            {platform.serviceType}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1">
                                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span className="text-sm font-medium text-gray-900">{platform.rating}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

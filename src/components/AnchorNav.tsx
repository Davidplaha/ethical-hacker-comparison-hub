'use client';

import { useEffect, useState } from 'react';

interface NavItem {
    id: string;
    label: string;
}

const navItems: NavItem[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'compare', label: 'Compare Services' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'platforms', label: 'Platforms' },
    { id: 'faqs', label: 'FAQs' },
];

export default function AnchorNav() {
    const [activeSection, setActiveSection] = useState('overview');

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => ({
                id: item.id,
                element: document.getElementById(item.id),
            }));

            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section.element) {
                    const top = section.element.offsetTop;
                    if (scrollPosition >= top) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <nav className="hidden lg:block sticky top-16 z-40 bg-white border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center space-x-8 h-12">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => handleClick(e, item.id)}
                            className={`text-sm font-medium transition-colors duration-200 relative py-3 ${activeSection === item.id
                                    ? 'text-blue-600'
                                    : 'text-gray-600 hover:text-blue-600'
                                }`}
                        >
                            {item.label}
                            {activeSection === item.id && (
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

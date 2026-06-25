'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();

  const tabs = [
    { id: 'prebuilt', label: 'Prebuilt', href: '/prebuilt' },
    { id: 'customized', label: 'Customized', href: '/customized' },
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about-us', label: 'About', href: '/about-us' },
    { id: 'contact-us', label: 'Contact', href: '/contact-us' },
  ];

  // Determine active tab based on pathname
  const getActiveTab = () => {
    if (pathname === '/') return 'home';
    return pathname.slice(1).replace('-', '-'); // Remove leading slash
  };

  const activeTab = getActiveTab();

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="flex items-center gap-1 rounded-full border border-[var(--pill-border)] bg-[var(--bg-primary)]/30 px-2.5 py-1.5 shadow-md backdrop-blur-md transition-colors duration-300">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <Link
              key={tab.id}
              href={tab.href}
              className={`relative px-4 py-1.5 text-[14px] font-semibold tracking-wide transition-colors duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-color)] ${isActive
                ? 'text-[var(--text-title)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              style={{
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 border border-[var(--pill-border)] bg-[var(--pill-active-bg)] rounded-full"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
              <span className="relative z-10 flex items-center">
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;

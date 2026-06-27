'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  const tabs = [
    { id: 'prebuilt', label: 'Prebuilt', href: '/prebuilt' },
    { id: 'customized', label: 'Customized', href: '/customized' },
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about-us', label: 'About Us', href: '/about-us' },
    { id: 'contact-us', label: 'Contact Us', href: '/contact-us' },
  ];

  // Determine active tab based on pathname
  const getActiveTab = () => {
    if (pathname === '/') return 'home';
    return pathname.slice(1); // Remove leading slash
  };

  const activeTab = getActiveTab();

  return (
    <nav className="fixed top-6  left-0 right-0 z-50 flex justify-center px-4">
      {/* Desktop view */}
      <div className="hidden md:flex items-center gap-1 rounded-full border border-[var(--pill-border)] bg-[var(--bg-primary)]/30 px-2.5 py-1.5 shadow-md backdrop-blur-md transition-colors duration-300">
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

      {/* Mobile view */}
      <div ref={menuRef} className="flex md:hidden flex-col w-full max-w-sm relative">
        <div className="flex items-center justify-between w-full rounded-full border border-[var(--pill-border)] bg-[var(--bg-primary)]/30 px-5 py-3 shadow-md backdrop-blur-md transition-colors duration-300">
          <Link 
            href="/" 
            className="font-display font-black text-lg text-[var(--text-title)] tracking-tight focus:outline-none" 
            onClick={() => setIsOpen(false)}
          >
            3xdevs
          </Link>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[var(--text-primary)] hover:text-[var(--text-title)] focus:outline-none p-1 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              // X close icon
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Dropdown list */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute top-16 left-0 right-0 mt-2 flex flex-col items-center gap-3 rounded-[24px] border border-[var(--pill-border)] bg-[var(--bg-primary)]/90 px-6 py-5 shadow-xl backdrop-blur-lg z-50"
            >
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <Link
                    key={tab.id}
                    href={tab.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-semibold tracking-wide py-2 w-full text-center rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-[var(--text-title)] bg-[var(--pill-active-bg)] border border-[var(--pill-border)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--pill-bg)]'
                    }`}
                  >
                    {tab.label}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Header;

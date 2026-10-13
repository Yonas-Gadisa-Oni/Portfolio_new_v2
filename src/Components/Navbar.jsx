import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Track active section
      const sections = ['contact', 'about', 'skills', 'work', 'home'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-white group-hover:bg-blue-600 transition-colors duration-300">
              <span className="text-lg font-black">Y</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-gray-900">
              Yonas<span> G.</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <div className="w-px h-6 bg-gray-200 mx-3" />
            <a
              className="px-6 py-2.5 text-sm font-bold rounded-xl text-white bg-gray-900 hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              href="#contact"
            >
              Let's Talk
            </a>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900 p-2 -mr-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-lg font-bold text-gray-900 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-gray-100 my-3" />
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-6 py-4 text-base font-bold rounded-xl text-white bg-gray-900 hover:bg-blue-600 transition-colors"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;

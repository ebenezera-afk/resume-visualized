import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Briefcase } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 font-bold text-xl text-slate-900 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <span className={isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}>{resumeData.personal_information.name}</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-medium transition-colors hover:text-blue-600 ${isScrolled ? 'text-slate-600' : 'text-slate-100'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-slate-900 bg-slate-100' : 'text-white bg-white/10'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[-1]"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl z-50 flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-bold text-xl">Navigation</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-slate-100 rounded-full">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className="text-slate-600 hover:text-blue-600 font-semibold text-lg py-4 border-b border-slate-50 flex justify-between items-center group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                    <Briefcase className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
              <div className="mt-auto">
                <a 
                  href="#contact" 
                  className="w-full bg-blue-600 text-white px-5 py-4 rounded-2xl font-bold text-center block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
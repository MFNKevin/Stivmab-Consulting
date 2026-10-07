import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, LayoutDashboard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { base44 } from '@/api/base44Client';

const translations = {
  fr: { home: 'Accueil', about: 'À propos', services: 'Services', contact: 'Contact' },
  en: { home: 'Home', about: 'About', services: 'Services', contact: 'Contact' },
  de: { home: 'Startseite', about: 'Über uns', services: 'Dienstleistungen', contact: 'Kontakt' }
};

export default function Navbar({ lang, setLang, currentPageName }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();
  const t = translations[lang];
  const isHomePage = currentPageName === 'Home';

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const isAuth = await base44.auth.isAuthenticated();
        if (isAuth) {
          const user = await base44.auth.me();
          if (user?.role === 'admin') {
            setIsAdmin(true);
          }
        }
      } catch (e) {}
    };
    checkAdmin();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, path: '/Home' },
    { name: t.about, path: '/About' },
    { name: t.services, path: '/Services' },
    { name: t.contact, path: '/Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isHomePage 
        ? (scrolled ? 'bg-[#0A1628] shadow-xl' : 'bg-[#0A1628]/30')
        : 'bg-[#0A1628] shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/Home" className="flex items-center gap-3">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_697c887bb26a4cfccb07f537/dd25a7fb4_logo_light.jpg" 
              alt="StivMab Consulting" 
              className="h-12 w-12 object-contain rounded-full border-2 border-[#D4A84B] p-1 bg-white"
            />
            <span className="text-white font-bold text-xl hidden sm:block">
              StivMab <span className="text-[#D4A84B]">Consulting</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  isActive(link.path) ? 'text-[#D4A84B]' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D4A84B]"
                  />
                )}
              </Link>
            ))}

            {/* Admin Link */}
            {isAdmin && (
              <Link
                to="/AdminMessages"
                className="flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-[#D4A84B] transition-colors"
                title="Messages reçus"
              >
                <LayoutDashboard className="w-4 h-4" />
                Admin
              </Link>
            )}

            {/* Language Selector */}
            <div className="flex items-center gap-3 ml-4 border-l border-white/20 pl-4">
              <Globe className="w-4 h-4 text-[#D4A84B]" />
              <div className="flex items-center gap-2">
                {['fr', 'en', 'de'].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`text-sm font-bold transition-colors ${lang === l ? 'text-[#D4A84B]' : 'text-white/60 hover:text-white'}`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A1628]/98 backdrop-blur-lg border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 rounded-lg text-lg font-medium transition-all ${
                    isActive(link.path)
                      ? 'bg-[#D4A84B]/20 text-[#D4A84B]'
                      : 'text-white/80 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <Globe className="w-5 h-5 text-[#D4A84B]" />
                <div className="flex gap-2 w-full">
                  {['fr', 'en', 'de'].map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setIsOpen(false); }}
                      className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
                        lang === l
                          ? 'bg-[#D4A84B] text-[#0A1628]'
                          : 'bg-white/10 text-white/70 hover:bg-white/20'
                      }`}
                    >
                      {l === 'fr' ? 'FR 🇫🇷' : l === 'en' ? 'EN 🇬🇧' : 'DE 🇩🇪'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
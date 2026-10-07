import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Globe, Instagram, ArrowUpRight } from 'lucide-react';
import { base44 } from '@/api/base44Client';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
);

const translations = {
  fr: {
    tagline: "Votre partenaire pour réussir en Allemagne",
    navigation: "Navigation",
    home: "Accueil",
    about: "À propos",
    services: "Services",
    contact: "Contact",
    contactTitle: "Contact",
    followUs: "Suivez-nous",
    rights: "Tous droits réservés",
    legal: "Mentions légales",
    privacy: "Politique de confidentialité"
  },
  en: {
    tagline: "Your partner for success in Germany",
    navigation: "Navigation",
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    contactTitle: "Contact",
    followUs: "Follow us",
    rights: "All rights reserved",
    legal: "Legal notice",
    privacy: "Privacy policy"
  },
  de: {
    tagline: "Ihr Partner für Erfolg in Deutschland",
    navigation: "Navigation",
    home: "Startseite",
    about: "Über uns",
    services: "Dienstleistungen",
    contact: "Kontakt",
    contactTitle: "Kontakt",
    followUs: "Folgen Sie uns",
    rights: "Alle Rechte vorbehalten",
    legal: "Impressum",
    privacy: "Datenschutzerklärung"
  }
};

export default function Footer({ lang }) {
  const t = translations[lang];
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    base44.auth.isAuthenticated().then(async (auth) => {
      if (auth) {
        const user = await base44.auth.me();
        if (user?.role === 'admin') {
          setIsAdmin(true);
        }
      }
    });
  }, []);

  return (
    <footer className="bg-[#050D18] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_697c887bb26a4cfccb07f537/dd25a7fb4_logo_light.jpg" 
                alt="StivMab Consulting" 
                className="h-10 w-10 object-contain rounded-full border-2 border-[#D4A84B] p-1 bg-white"
              />
              <span className="font-bold text-lg">
                StivMab <span className="text-[#D4A84B]">Consulting</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {t.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#D4A84B] font-semibold mb-6 text-sm uppercase tracking-wider">
              {t.navigation}
            </h4>
            <ul className="space-y-3">
              {[
                { name: t.home, path: 'Home' },
                { name: t.about, path: 'About' },
                { name: t.services, path: 'Services' },
                { name: t.contact, path: 'Contact' }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={`/${link.path}`}
                    className="text-white/60 hover:text-[#D4A84B] transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#D4A84B] font-semibold mb-6 text-sm uppercase tracking-wider">
              {t.contactTitle}
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:support@stivmabconsulting.com" 
                  className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-3"
                >
                  <Mail className="w-4 h-4 text-[#D4A84B]" />
                  <span className="break-all">support@stivmabconsulting.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+4915213435560" 
                  className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-3"
                >
                  <Phone className="w-4 h-4 text-[#D4A84B]" />
                  +49 152 13435560
                </a>
              </li>
              <li>
                <a 
                  href="https://stivmabconsulting.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-3"
                >
                  <Globe className="w-4 h-4 text-[#D4A84B]" />
                  stivmabconsulting.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[#D4A84B] font-semibold mb-6 text-sm uppercase tracking-wider">
              {t.followUs}
            </h4>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: 'https://www.instagram.com/stivmabconsulting?igsh=MWtmd2lyamN2azR0Zg==' },
                { icon: TikTokIcon, href: 'https://www.tiktok.com/@stivmabconsulting' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#D4A84B]/20 flex items-center justify-center transition-all group"
                >
                  <social.icon className="w-4 h-4 text-white/60 group-hover:text-[#D4A84B] transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} StivMab Consulting. {t.rights}.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-4">
              <Link to="/MentionsLegales" className="text-white/40 hover:text-white/60 text-sm transition-colors">
                {t.legal}
              </Link>
              <span className="text-white/20 hidden sm:inline">·</span>
              <Link to="/PolitiqueConfidentialite" className="text-white/40 hover:text-white/60 text-sm transition-colors">
                {t.privacy}
              </Link>
              {isAdmin && (
                <>
                  <span className="text-white/20 hidden sm:inline">·</span>
                  <Link to="/admin" className="text-white/10 hover:text-white/30 text-xs transition-colors select-none">
                    admin
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
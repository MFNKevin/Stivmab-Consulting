import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const pageNames = {
  fr: { Home: 'Accueil', About: 'À propos', Services: 'Services', Contact: 'Contact', MentionsLegales: 'Mentions légales', PolitiqueConfidentialite: 'Politique de confidentialité' },
  en: { Home: 'Home', About: 'About', Services: 'Services', Contact: 'Contact', MentionsLegales: 'Legal notice', PolitiqueConfidentialite: 'Privacy policy' },
  de: { Home: 'Startseite', About: 'Über uns', Services: 'Dienstleistungen', Contact: 'Kontakt', MentionsLegales: 'Impressum', PolitiqueConfidentialite: 'Datenschutzerklärung' },
};

const servicePages = {
  ServiceAllemand: { fr: "Langue", en: "Language", de: "Sprache" },
  ServiceMentoring: { fr: "Mentoring & Business", en: "Mentoring & Business", de: "Mentoring & Business" },
  ServiceImmobilier: { fr: "Immobilier", en: "Real Estate", de: "Immobilien" },
  ServiceRetraite: { fr: "Retraite & Patrimoine", en: "Retirement & Wealth", de: "Rente & Vermögen" },
};

export default function Breadcrumb({ currentPageName, lang = 'fr' }) {
  if (!currentPageName || currentPageName === 'Home') return null;

  const names = pageNames[lang] || pageNames.fr;
  const isServicePage = currentPageName in servicePages;

  return (
    <div className="bg-[#0A1628]/5 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <nav className="flex items-center gap-1.5 text-sm text-gray-500">
          <Link to="/Home" className="flex items-center gap-1 hover:text-[#D4A84B] transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>{names.Home}</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
          {isServicePage ? (
            <>
              <Link to="/Services" className="hover:text-[#D4A84B] transition-colors">{names.Services}</Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
              <span className="text-[#0A1628] font-medium">{servicePages[currentPageName][lang] || servicePages[currentPageName].fr}</span>
            </>
          ) : (
            <span className="text-[#0A1628] font-medium">{names[currentPageName] || currentPageName}</span>
          )}
        </nav>
      </div>
    </div>
  );
}
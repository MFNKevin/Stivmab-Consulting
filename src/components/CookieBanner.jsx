import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cookie, Check, ChevronDown, ChevronUp } from 'lucide-react';

const COOKIE_KEY = 'stivmab-cookie-consent';

const translations = {
  fr: {
    title: "Nous respectons votre vie privée",
    description: "Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic du site (Google Analytics) et personnaliser le contenu. Vous pouvez choisir quels cookies accepter.",
    acceptAll: "Tout accepter",
    rejectAll: "Tout refuser",
    customize: "Personnaliser",
    save: "Enregistrer mes préférences",
    necessary: "Cookies nécessaires",
    necessaryDesc: "Indispensables au fonctionnement du site (langue, session). Toujours actifs.",
    analytics: "Cookies analytiques",
    analyticsDesc: "Google Analytics — nous aide à comprendre comment vous utilisez le site (pages visitées, durée, etc.).",
    marketing: "Cookies marketing",
    marketingDesc: "Facebook Pixel — mesure l'efficacité de nos publicités sur Facebook et Instagram.",
    alwaysOn: "Toujours actif",
    learnMore: "En savoir plus",
    privacyPolicy: "Politique de confidentialité",
  },
  en: {
    title: "We respect your privacy",
    description: "We use cookies to improve your experience, analyze site traffic (Google Analytics) and personalize content. You can choose which cookies to accept.",
    acceptAll: "Accept all",
    rejectAll: "Reject all",
    customize: "Customize",
    save: "Save my preferences",
    necessary: "Necessary cookies",
    necessaryDesc: "Essential for the site to work (language, session). Always active.",
    analytics: "Analytical cookies",
    analyticsDesc: "Google Analytics — helps us understand how you use the site (pages visited, duration, etc.).",
    marketing: "Marketing cookies",
    marketingDesc: "Facebook Pixel — measures the effectiveness of our ads on Facebook and Instagram.",
    alwaysOn: "Always on",
    learnMore: "Learn more",
    privacyPolicy: "Privacy policy",
  },
  de: {
    title: "Wir respektieren Ihre Privatsphäre",
    description: "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern, den Website-Traffic zu analysieren (Google Analytics) und Inhalte zu personalisieren. Sie können wählen, welche Cookies Sie akzeptieren.",
    acceptAll: "Alle akzeptieren",
    rejectAll: "Alle ablehnen",
    customize: "Anpassen",
    save: "Meine Einstellungen speichern",
    necessary: "Notwendige Cookies",
    necessaryDesc: "Unerlässlich für den Betrieb der Website (Sprache, Sitzung). Immer aktiv.",
    analytics: "Analytische Cookies",
    analyticsDesc: "Google Analytics — hilft uns zu verstehen, wie Sie die Website nutzen (besuchte Seiten, Dauer usw.).",
    marketing: "Marketing-Cookies",
    marketingDesc: "Facebook Pixel — misst die Wirksamkeit unserer Werbung auf Facebook und Instagram.",
    alwaysOn: "Immer aktiv",
    learnMore: "Mehr erfahren",
    privacyPolicy: "Datenschutzerklärung",
  }
};

function getCookieConsent() {
  try {
    const val = localStorage.getItem(COOKIE_KEY);
    return val ? JSON.parse(val) : null;
  } catch {
    return null;
  }
}

function setCookieConsent(prefs) {
  localStorage.setItem(COOKIE_KEY, JSON.stringify({ ...prefs, date: new Date().toISOString() }));
}

export function useCookieConsent() {
  const consent = getCookieConsent();
  return {
    analytics: consent?.analytics === true,
    marketing: consent?.marketing === true,
    hasConsented: consent !== null,
  };
}

export default function CookieBanner({ lang = 'fr' }) {
  const t = translations[lang] || translations.fr;
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: true, marketing: false });

  useEffect(() => {
    const existing = getCookieConsent();
    if (!existing) {
      setTimeout(() => setVisible(true), 800);
    }
  }, []);

  const handleAcceptAll = () => {
    setCookieConsent({ analytics: true, marketing: true });
    setVisible(false);
    window.location.reload(); // reload to activate GA/FB pixel
  };

  const handleRejectAll = () => {
    // Ne pas sauvegarder → bannière réapparaîtra à la prochaine visite
    setVisible(false);
  };

  const handleSavePrefs = () => {
    if (prefs.analytics || prefs.marketing) {
      setCookieConsent(prefs);
      setVisible(false);
      window.location.reload();
    } else {
      // Aucun cookie accepté → même comportement que "Refuser"
      setVisible(false);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 z-[9998] sm:hidden"
          />

          {/* Banner */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed bottom-0 left-0 right-0 sm:bottom-4 sm:left-4 sm:right-4 md:left-auto md:right-4 md:max-w-md z-[9999]"
          >
            <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className="bg-[#0A1628] px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cookie className="w-5 h-5 text-[#D4A84B]" />
                  <span className="text-white font-semibold text-sm">{t.title}</span>
                </div>
              </div>

              {/* Body */}
              <div className="px-5 py-4">
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  {t.description}
                </p>
                <Link to="/PolitiqueConfidentialite" className="text-[#D4A84B] text-xs underline hover:opacity-80 block mb-3">
                  {t.privacyPolicy} →
                </Link>

                {/* Details toggle */}
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center gap-1 text-[#D4A84B] text-sm font-medium mb-4 hover:underline"
                >
                  {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  {t.customize}
                </button>

                {/* Detailed preferences */}
                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-4 space-y-3 overflow-hidden"
                    >
                      {/* Necessary */}
                      <div className="flex items-start justify-between gap-3 p-3 bg-gray-50 rounded-xl">
                        <div>
                          <p className="text-sm font-semibold text-[#0A1628]">{t.necessary}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{t.necessaryDesc}</p>
                        </div>
                        <span className="text-xs text-green-600 font-medium shrink-0 mt-1">{t.alwaysOn}</span>
                      </div>

                      {/* Analytics */}
                      <div className="flex items-start justify-between gap-3 p-3 bg-gray-50 rounded-xl">
                        <div>
                          <p className="text-sm font-semibold text-[#0A1628]">{t.analytics}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{t.analyticsDesc}</p>
                        </div>
                        <button
                          onClick={() => setPrefs(p => ({ ...p, analytics: !p.analytics }))}
                          className={`shrink-0 mt-1 w-10 h-5 rounded-full transition-colors duration-200 ${prefs.analytics ? 'bg-[#D4A84B]' : 'bg-gray-300'}`}
                        >
                          <span className={`block w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 mx-0.5 ${prefs.analytics ? 'translate-x-5' : 'translate-x-0'}`} />
                        </button>
                      </div>

                      {/* Marketing */}
                      <div className="flex items-start justify-between gap-3 p-3 bg-gray-50 rounded-xl">
                        <div>
                          <p className="text-sm font-semibold text-[#0A1628]">{t.marketing}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{t.marketingDesc}</p>
                        </div>
                        <button
                          onClick={() => setPrefs(p => ({ ...p, marketing: !p.marketing }))}
                          className={`shrink-0 mt-1 w-10 h-5 rounded-full transition-colors duration-200 ${prefs.marketing ? 'bg-[#D4A84B]' : 'bg-gray-300'}`}
                        >
                          <span className={`block w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 mx-0.5 ${prefs.marketing ? 'translate-x-5' : 'translate-x-0'}`} />
                        </button>
                      </div>

                      <button
                        onClick={handleSavePrefs}
                        className="w-full py-2.5 rounded-xl bg-[#0A1628] text-white text-sm font-semibold hover:bg-[#132042] transition-colors"
                      >
                        {t.save}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={handleRejectAll}
                    className="text-gray-400 text-xs underline underline-offset-2 hover:text-gray-600 transition-colors px-2"
                  >
                    {t.rejectAll}
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 py-2.5 rounded-xl bg-[#D4A84B] hover:bg-[#C49A3E] text-[#0A1628] text-sm font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Check className="w-4 h-4" />
                    {t.acceptAll}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
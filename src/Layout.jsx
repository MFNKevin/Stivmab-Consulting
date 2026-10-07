import React, { useState, useEffect } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import CookieBanner, { useCookieConsent } from '@/components/CookieBanner';
import SEOHead from '@/components/SEOHead';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackToTop from '@/components/BackToTop';
import Breadcrumb from '@/components/Breadcrumb';

// ─── Google Analytics ────────────────────────────────────────────────────────
// ÉTAPES POUR ACTIVER GOOGLE ANALYTICS :
// 1. Créez un compte sur https://analytics.google.com
// 2. Créez une propriété "Web" pour votre site
// 3. Récupérez votre ID de mesure (format : G-XXXXXXXXXX)
// 4. Remplacez 'G-XXXXXXXXXX' ci-dessous par votre vrai ID
// ⚠️  Tant que l'ID contient 'G-XXXXXXXXXX', le script ne se charge PAS (mode test)
const GA_MEASUREMENT_ID = 'G-KRMP0NKVV6';

function GoogleAnalytics() {
  const { analytics } = useCookieConsent();
  useEffect(() => {
    if (!analytics) return;
    if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') return;
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
  }, [analytics]);
  return null;
}
// ─────────────────────────────────────────────────────────────────────────────

// ─── Facebook Pixel ───────────────────────────────────────────────────────────
// ÉTAPES POUR ACTIVER LE FACEBOOK PIXEL :
// 1. Allez sur https://www.facebook.com/events_manager
// 2. Cliquez sur "Connecter des sources de données" → choisissez "Web"
// 3. Sélectionnez "Pixel Facebook" et donnez-lui un nom
// 4. Récupérez votre Pixel ID (un nombre à 15-16 chiffres, ex: 1234567890123456)
// 5. Remplacez 'XXXXXXXXXXXXXXXXX' ci-dessous par votre vrai Pixel ID
// ⚠️  Tant que l'ID contient 'XXXXXXXXXXXXXXXXX', le script ne se charge PAS (mode test)
// 💡 Le Pixel permet de mesurer les conversions de vos publicités Facebook/Instagram
const FB_PIXEL_ID = '2008254563372958';

function FacebookPixel() {
  const { marketing } = useCookieConsent();
  useEffect(() => {
    if (!marketing) return;
    if (!FB_PIXEL_ID || FB_PIXEL_ID === 'XXXXXXXXXXXXXXXXX') return;
    // Inject Facebook Pixel base code
    (function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', FB_PIXEL_ID);
    window.fbq('track', 'PageView');
  }, [marketing]);
  return null;
}
// ─────────────────────────────────────────────────────────────────────────────

export default function Layout({ children, currentPageName }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedLang = localStorage.getItem('stivmab-lang');
        // On s'assure que la langue stockée est bien l'une de nos 3 langues officielles
        if (storedLang && ['fr', 'en', 'de'].includes(storedLang)) {
          return storedLang;
        }
        
        // Détection stricte parmi nos 3 langues officielles (en vérifiant toutes les langues préférées du navigateur)
        if (navigator.languages && navigator.languages.length > 0) {
          for (let i = 0; i < navigator.languages.length; i++) {
            const langCode = navigator.languages[i].toLowerCase();
            if (langCode.startsWith('fr')) return 'fr';
            if (langCode.startsWith('en')) return 'en';
            if (langCode.startsWith('de')) return 'de';
          }
        }
        
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang) {
          const langCode = browserLang.toLowerCase();
          if (langCode.startsWith('fr')) return 'fr';
          if (langCode.startsWith('en')) return 'en';
          if (langCode.startsWith('de')) return 'de';
        }
        
        return 'en'; // Anglais par défaut si la langue du navigateur n'est ni FR, ni EN, ni DE
      } catch (e) {
        return 'en';
      }
    }
    return 'en';
  });

  useEffect(() => {
    if (window.location.hostname === 'stivmab-consult-grow.base44.app') {
      window.location.replace(`https://stivmabconsulting.com${window.location.pathname}${window.location.search}`);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('stivmab-lang', lang);
    } catch (e) {
      console.warn("localStorage is not available, language won't be saved persistently.");
    }
  }, [lang]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPageName]);

  // Clone children and pass lang prop
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { lang });
    }
    return child;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans w-full overflow-x-hidden">
      <GoogleAnalytics />
      <FacebookPixel />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }
        
        :root {
          --color-primary: #4f46e5;
          --color-accent: #D4A84B;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #D4A84B;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #C49A3E;
        }
      `}</style>
      
      <SEOHead pageName={currentPageName} lang={lang} />
      <Navbar lang={lang} setLang={setLang} currentPageName={currentPageName} />
      <main className="flex-1 w-full flex flex-col">
        {currentPageName !== 'Home' && (
          <div className="pt-20">
            <Breadcrumb currentPageName={currentPageName} lang={lang} />
          </div>
        )}
        {childrenWithProps}
      </main>
      <Footer lang={lang} />
      <CookieBanner lang={lang} />
      <WhatsAppButton lang={lang} />
      <BackToTop />
    </div>
  );
}
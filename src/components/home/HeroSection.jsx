import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThreeDScene = React.lazy(() => import('@/components/ThreeDScene'));

const translations = {
  fr: {
    title: "Réussir son expatriation et ses investissements",
    titleHighlight: "en Allemagne avec un accompagnement personnalisé",
    subtitle: "Conseil personnalisé pour l'immigration, l'intégration et les investissements en Allemagne. Je vous accompagne étape par étape dans votre immigration et vos investissements en Allemagne.",
    cta: "Réserver une consultation gratuite",
    watchVideo: "Voir la vidéo",
    benefits: ["Immigration en Allemagne : conseil", "Intégration & maîtrise de la langue", "Comprendre les opportunités immobilières et le patrimoine en Allemagne"],
    trust1: "Années d'expérience",
    trust2: "Clients accompagnés avec succès"
  },
  en: {
    title: "Succeed in your expatriation and investments",
    titleHighlight: "in Germany with personalized support",
    subtitle: "Personalized advice for immigration, integration and investments in Germany. I guide you step by step in your immigration and investments in Germany.",
    cta: "Book a free consultation",
    watchVideo: "Watch video",
    benefits: ["Immigration to Germany: advice", "Integration & language mastery", "Analyze real estate and wealth-building opportunities in Germany"],
    trust1: "Years of experience",
    trust2: "Clients successfully supported"
  },
  de: {
    title: "Erfolgreich auswandern und investieren",
    titleHighlight: "in Deutschland mit persönlicher Betreuung",
    subtitle: "Persönliche Beratung für Einwanderung, Integration und Investitionen in Deutschland. Ich begleite Sie Schritt für Schritt bei Ihrer Einwanderung und Ihren Investitionen in Deutschland.",
    cta: "Kostenlose Beratung buchen",
    watchVideo: "Video ansehen",
    benefits: ["Einwanderung nach Deutschland: Beratung", "Integration & Sprachkompetenz", "Immobilien und Vermögensaufbau in Deutschland analysieren"],
    trust1: "Jahre Erfahrung",
    trust2: "Erfolgreich betreute Kunden"
  }
};

export default function HeroSection({ lang }) {
  const t = translations[lang];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1628]">
      {/* Background Slideshow with Overlay */}
      <div className="absolute inset-0 -top-20">
        <style>{`
          @keyframes slideshow {
            0%, 20%   { opacity: 1; }
            25%, 95%  { opacity: 0; }
            100%      { opacity: 1; }
          }
          .slide-1 { animation: slideshow 20s infinite 0s; }
          .slide-2 { animation: slideshow 20s infinite 5s; }
          .slide-3 { animation: slideshow 20s infinite 10s; }
          .slide-4 { animation: slideshow 20s infinite 15s; }
        `}</style>

        {/* Slides */}
        {[
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80",
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80",
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80",
          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80"
        ].map((src, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 slide-${idx + 1}`}
            style={{ opacity: idx === 0 ? 1 : 0 }}
          >
            <img
              src={src}
              alt="Professional background"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/95 via-[#0A1628]/90 to-[#132042]/85" />
        
        {/* Accent Overlays */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D4A84B]/10 blur-3xl rounded-full transform translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#D4A84B]/5 blur-3xl rounded-full transform -translate-x-1/4" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#D4A84B 1px, transparent 1px), linear-gradient(90deg, #D4A84B 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* 3D Animation Layer */}
        <React.Suspense fallback={<div className="absolute inset-0 bg-transparent" />}>
          <ThreeDScene variant="hero" />
        </React.Suspense>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A84B]/10 border border-[#D4A84B]/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#D4A84B] animate-pulse" />
              <span className="text-[#D4A84B] text-sm font-medium">StivMab Consulting</span>
            </motion.div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {t.title}
              <br />
              <span className="text-[#D4A84B]">{t.titleHighlight}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
              {t.subtitle}
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap gap-4 mb-10">
              {t.benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="flex items-center gap-2 text-white/60 text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-[#D4A84B]" />
                  {benefit}
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link to="/Services">
                <Button 
                  size="lg"
                  className="bg-[#D4A84B] hover:bg-[#C49A3E] text-[#0A1628] font-semibold px-8 h-14 rounded-xl group"
                >
                  {t.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Trust Elements */}
            <div className="flex flex-wrap gap-8 items-center pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white mb-1">14+</div>
                <div className="text-sm text-white/60">{t.trust1}</div>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-[#132042] to-[#0A1628] rounded-3xl p-8 border border-white/10 shadow-2xl">
                <img 
                  src="https://media.base44.com/images/public/697fb7ca64330dfe9624d226/41a084128_Gemini_Generated_Image_bbycambbycambbyc.png"
                  alt="StivMab Consulting Logo"
                  className="w-full h-auto rounded-2xl border-2 border-[#D4A84B] shadow-lg"
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="text-[#0A1628] font-bold text-2xl">✓</div>
                <div className="text-[#0A1628]/70 text-xs">{lang === 'fr' ? 'Client toujours satisfaits' : lang === 'en' ? 'Always satisfied clients' : 'Immer zufriedene Kunden'}</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#D4A84B] rounded-full" />
        </div>
      </motion.div>

    </section>
  );
}
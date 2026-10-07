import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeDScene from '@/components/ThreeDScene';

const translations = {
  fr: {
    title: "Prêt à transformer votre avenir ?",
    subtitle: "Réservez votre consultation gratuite et commencez votre parcours vers le succès en Allemagne.",
    cta: "Prendre rendez-vous",
    contact: "Nous contacter"
  },
  en: {
    title: "Ready to transform your future?",
    subtitle: "Book your free consultation and start your journey to success in Germany.",
    cta: "Book appointment",
    contact: "Contact us"
  },
  de: {
    title: "Bereit, Ihre Zukunft zu verändern?",
    subtitle: "Buchen Sie Ihre kostenlose Beratung und starten Sie Ihren Weg zum Erfolg in Deutschland.",
    cta: "Termin buchen",
    contact: "Kontaktieren Sie uns"
  }
};

export default function CTASection({ lang }) {
  const t = translations[lang];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4A84B]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#D4A84B]/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#0A1628] rounded-3xl p-8 md:p-16 overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D4A84B]/10 blur-3xl rounded-full transform translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#D4A84B]/5 blur-3xl rounded-full" />

          {/* 3D Animation Layer */}
          <ThreeDScene variant="cta" />

          <div className="relative text-center max-w-3xl mx-auto">
            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl bg-[#D4A84B]/20 flex items-center justify-center mx-auto mb-8">
              <Calendar className="w-10 h-10 text-[#D4A84B]" />
            </div>

            {/* Content */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t.title}
            </h2>
            <p className="text-lg text-white/70 mb-10">
              {t.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://calendly.com/stivmabconsulting/rendez-vous"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  className="bg-[#D4A84B] hover:bg-[#C49A3E] text-[#0A1628] font-semibold px-8 h-14 rounded-xl group"
                >
                  {t.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link to={createPageUrl('Contact')}>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-white bg-white/10 text-white hover:bg-white/20 hover:border-white h-14 rounded-xl px-8 font-medium"
                >
                  {t.contact}
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
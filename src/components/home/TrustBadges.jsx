import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Globe, Briefcase, Zap } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const translations = {
  fr: {
    title: "Pourquoi nous faire confiance",
    badges: [
      { icon: Globe, value: "3", label: "Langues maîtrisées (FR, EN, DE)" },
      { icon: Briefcase, value: "98%", label: "Taux de succès" },
      { icon: Zap, value: "24h", label: "Délai de réponse" }
    ],
    certifications: [
      { icon: CheckCircle, text: "Ingénieur – Business Analyst – Coach" },
      { icon: CheckCircle, text: "Investisseur en bourse et diverses activités" },
      { icon: CheckCircle, text: "Agent immobilier – Conformement a l'article §34c GewO" },
      { icon: CheckCircle, text: "Membre actif de la diaspora africaine en Allemagne depuis 2012" }
    ]
  },
  en: {
    title: "Why trust us",
    badges: [
      { icon: Globe, value: "3", label: "Languages spoken (FR, EN, DE)" },
      { icon: Briefcase, value: "98%", label: "Success rate" },
      { icon: Zap, value: "24h", label: "Response time" }
    ],
    certifications: [
      { icon: CheckCircle, text: "Engineer – Business Analyst – Coach" },
      { icon: CheckCircle, text: "Stock market investor and various activities" },
      { icon: CheckCircle, text: "Real estate agent – According to article §34c GewO" },
      { icon: CheckCircle, text: "Active member of the African diaspora in Germany since 2012" }
    ]
  },
  de: {
    title: "Warum uns vertrauen",
    badges: [
      { icon: Globe, value: "3", label: "Beherrschte Sprachen (FR, EN, DE)" },
      { icon: Briefcase, value: "98%", label: "Erfolgsquote" },
      { icon: Zap, value: "24h", label: "Antwortzeit" }
    ],
    certifications: [
      { icon: CheckCircle, text: "Ingenieur – Business Analyst – Coach" },
      { icon: CheckCircle, text: "Börseninvestor und verschiedene Aktivitäten" },
      { icon: CheckCircle, text: "Immobilienmakler – Gemäß §34c GewO" },
      { icon: CheckCircle, text: "Aktives Mitglied der afrikanischen Diaspora in Deutschland seit 2012" }
    ]
  }
};

export default function TrustBadges({ lang }) {
  const t = translations[lang];

  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D4A84B]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#D4A84B]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-[#0A1628] text-center mb-16"
        >
          {t.title}
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {t.badges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-[#D4A84B]/10 flex items-center justify-center mx-auto mb-4">
                <badge.icon className="w-7 h-7 text-[#D4A84B]" />
              </div>
              <div className="text-3xl font-bold text-[#0A1628] mb-2">
                <AnimatedCounter value={badge.value} />
              </div>
              <div className="text-gray-600 text-sm">{badge.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-4">
            {t.certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100"
              >
                <cert.icon className="w-5 h-5 text-[#D4A84B] shrink-0" />
                <span className="text-gray-700 text-sm">{cert.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
}
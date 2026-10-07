import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Users, Building2, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThreeDScene from '@/components/ThreeDScene';

const translations = {
  fr: {
    intro: "Mon focus se concentre sur quatre domaines principaux : l'immigration, l'intégration, les investissements et le Business.",
    title: "Notre expertise",
    subtitle: "4 piliers de succès garantis",
    pillars: [
      {
        icon: Plane,
        title: "Immigration",
        description: "Conseil pour l'immigration en Allemagne (travail, études, Formation, regroupement familial et Au-Pair).",
        route: "/Services#immigration"
      },
      {
        icon: Users,
        title: "Intégration",
        description: "Intégration en Allemagne : maîtriser avec succès la langue, les systèmes et le quotidien.",
        route: "/Services#integration"
      },
      {
        icon: Building2,
        title: "Investissements",
        description: "Investir dans l'immobilier et la bourse en Allemagne : stratégies pour les investisseurs internationaux.",
        route: "/Services#investissement"
      },
      {
        icon: Briefcase,
        title: "Business",
        description: "Créer une entreprise en Allemagne et générer des revenus : conseil et stratégie pour se lancer.",
        route: "/Services#business"
      }
    ],
    learnMore: "En savoir plus"
  },
  en: {
    intro: "My focus is on four main areas: immigration, integration, investments and Business.",
    title: "Our Proven Expertise",
    subtitle: "4 guaranteed pillars of success",
    pillars: [
      {
        icon: Plane,
        title: "Immigration",
        description: "Advice for immigration to Germany (work, studies, training, family reunification and Au-Pair).",
        route: "/Services#immigration"
      },
      {
        icon: Users,
        title: "Integration",
        description: "Integration in Germany: successfully master the language, systems and daily life.",
        route: "/Services#integration"
      },
      {
        icon: Building2,
        title: "Investments",
        description: "Invest in real estate in Germany: strategies for international investors.",
        route: "/Services#investissement"
      },
      {
        icon: Briefcase,
        title: "Business",
        description: "Start a business in Germany: advice for international entrepreneurs.",
        route: "/Services#business"
      }
    ],
    learnMore: "Learn more"
  },
  de: {
    intro: "Mein Fokus liegt auf vier Hauptbereichen: Einwanderung, Integration, Investitionen und Business.",
    title: "Unsere Bewährte Expertise",
    subtitle: "4 garantierte Erfolgssäulen",
    pillars: [
      {
        icon: Plane,
        title: "Einwanderung",
        description: "Beratung zur Einwanderung nach Deutschland (Arbeit, Studium, Ausbildung, Familiennachzug und Au-Pair).",
        route: "/Services#immigration"
      },
      {
        icon: Users,
        title: "Integration",
        description: "Integration in Deutschland: Sprache, Systeme und Alltag erfolgreich meistern.",
        route: "/Services#integration"
      },
      {
        icon: Building2,
        title: "Investitionen",
        description: "Immobilieninvestition in Deutschland: Strategien für internationale Investoren.",
        route: "/Services#investissement"
      },
      {
        icon: Briefcase,
        title: "Unternehmen",
        description: "Unternehmensgründung in Deutschland: Beratung für internationale Unternehmer.",
        route: "/Services#business"
      }
    ],
    learnMore: "Mehr erfahren"
  }
};

export default function PillarsSection({ lang }) {
  const t = translations[lang];

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[#D4A84B]/5 rounded-full blur-3xl" />
      
      {/* 3D Animation Layer */}
      <ThreeDScene variant="pillars" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#D4A84B] font-semibold text-sm uppercase tracking-wider">
            {t.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mt-4 mb-6">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 italic">
            "{t.intro}"
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="h-full bg-gray-50 hover:bg-[#0A1628] rounded-2xl p-8 transition-all duration-500 border border-gray-100 hover:border-[#0A1628]">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#D4A84B]/10 group-hover:bg-[#D4A84B]/20 flex items-center justify-center mb-6 transition-colors">
                  <pillar.icon className="w-7 h-7 text-[#D4A84B]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#0A1628] group-hover:text-white mb-4 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/70 leading-relaxed transition-colors">
                  {pillar.description}
                </p>

                {/* Link */}
                <Link
                  to={pillar.route}
                  state={{ lang }}
                  className="inline-flex items-center gap-2 mt-6 text-[#D4A84B] font-medium text-sm group/link"
                >
                  {t.learnMore}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
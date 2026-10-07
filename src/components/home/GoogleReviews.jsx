import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

const translations = {
  fr: {
    title: "Avis de nos clients",
    subtitle: "Ce que disent ceux qui nous ont fait confiance",
    cta: "Voir tous les avis sur Google",
    rating: "4.9/5 sur Google",
    reviews: [
      {
        name: "Marie K.",
        date: "Il y a 2 mois",
        text: "Steve m'a accompagnée dans tout mon processus d'intégration en Allemagne. Grâce à lui, j'ai décroché mon visa en un temps record. Je recommande vivement !",
        stars: 5
      },
      {
        name: "Jean-Paul N.",
        date: "Il y a 3 mois",
        text: "Un accompagnement exceptionnel pour mon investissement immobilier. Steve connaît parfaitement le marché allemand et m'a guidé à chaque étape. Résultat : mon premier appartement locatif !",
        stars: 5
      },
      {
        name: "Aïcha T.",
        date: "Il y a 1 mois",
        text: "Les cours de soutien en allemand sont top ! En 3 mois j'ai passé le niveau B1 avec succès. Pédagogie claire, disponible, professionnel.",
        stars: 5
      }
    ]
  },
  en: {
    title: "Client Reviews",
    subtitle: "What those who trusted us have to say",
    cta: "See all reviews on Google",
    rating: "4.9/5 on Google",
    reviews: [
      {
        name: "Marie K.",
        date: "2 months ago",
        text: "Steve accompanied me through my entire integration process in Germany. Thanks to him, I got my visa in record time. Highly recommended!",
        stars: 5
      },
      {
        name: "Jean-Paul N.",
        date: "3 months ago",
        text: "Exceptional support for my real estate investment. Steve knows the German market perfectly and guided me at every step. Result: my first rental apartment!",
        stars: 5
      },
      {
        name: "Aïcha T.",
        date: "1 month ago",
        text: "The German support lessons are great! In 3 months I passed level B1 successfully. Clear teaching method, available, professional.",
        stars: 5
      }
    ]
  },
  de: {
    title: "Kundenbewertungen",
    subtitle: "Was unsere Kunden sagen",
    cta: "Alle Bewertungen auf Google ansehen",
    rating: "4,9/5 auf Google",
    reviews: [
      {
        name: "Marie K.",
        date: "Vor 2 Monaten",
        text: "Steve hat mich durch den gesamten Integrationsprozess in Deutschland begleitet. Dank ihm habe ich mein Visum in Rekordzeit bekommen. Sehr empfehlenswert!",
        stars: 5
      },
      {
        name: "Jean-Paul N.",
        date: "Vor 3 Monaten",
        text: "Außergewöhnliche Unterstützung für meine Immobilieninvestition. Steve kennt den deutschen Markt perfekt und hat mich bei jedem Schritt begleitet.",
        stars: 5
      },
      {
        name: "Aïcha T.",
        date: "Vor 1 Monat",
        text: "Die Deutschnachhilfe ist super! In 3 Monaten habe ich das Niveau B1 erfolgreich bestanden. Klare Pädagogik, verfügbar, professionell.",
        stars: 5
      }
    ]
  }
};

const GOOGLE_REVIEWS_URL = "https://g.co/kgs/your-google-reviews-link"; // À remplacer par le vrai lien

export default function GoogleReviews({ lang = 'fr' }) {
  const t = translations[lang] || translations.fr;

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-[#D4A84B] fill-[#D4A84B]" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-2">{t.title}</h2>
          <p className="text-gray-500 text-lg">{t.subtitle}</p>
          <span className="inline-block mt-3 px-4 py-1.5 bg-[#D4A84B]/10 rounded-full text-[#D4A84B] font-semibold text-sm">
            ⭐ {t.rating}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {t.reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#D4A84B] fill-[#D4A84B]" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-[#0A1628] text-sm">{review.name}</div>
                  <div className="text-gray-400 text-xs">{review.date}</div>
                </div>
                <img
                  src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png"
                  alt="Google"
                  className="w-5 h-5 opacity-70"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#D4A84B] text-[#0A1628] font-semibold rounded-xl hover:bg-[#D4A84B]/10 transition-colors"
          >
            <img
              src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png"
              alt="Google"
              className="w-5 h-5"
            />
            {t.cta}
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const translations = {
  fr: {
    title: "Témoignages",
    subtitle: "Ce que disent nos clients",
    testimonials: [
      {
        name: "Kevin, Munich",
        role: "Ingénieur en mécanique",
        content: "Arrivé en 2018, j'étais un peu perdu face à la complexité du système allemand. L'accompagnement sur-mesure de Steve a été un vrai déclic pour mon intégration. Ses conseils pratiques m'ont permis de trouver mes repères rapidement et d'évoluer sereinement dans ma carrière d'ingénieur.",
        rating: 5
      },
      {
        name: "Sylvie, Allemagne",
        role: "Professionnelle de la santé",
        content: "Je voulais investir dans l'immobilier en Allemagne mais je ne savais pas par où commencer. L'expertise de Steve a complètement démystifié le marché pour moi. Grâce à son réseau et sa vision claire, j'ai pu concrétiser l'achat de mon premier bien en toute sécurité.",
        rating: 5
      },
      {
        name: "Ulrich, Allemagne",
        role: "Particulier",
        content: "Créer mon entreprise en Allemagne me paraissait être un parcours du combattant administratif. L'intervention de StivMab Consulting a tout changé : une structuration claire de mon projet et un gain de temps énorme face à la bureaucratie. Aujourd'hui, mon business décolle sereinement.",
        rating: 5
      }
    ]
  },
  en: {
    title: "Testimonials",
    subtitle: "What our clients say",
    testimonials: [
      {
        name: "Kevin, Munich",
        role: "Mechanical Engineer",
        content: "Arriving in 2018, I felt a bit lost dealing with the complex German system. Steve's tailored guidance was a real turning point for my integration. His practical advice helped me quickly find my footing and confidently grow in my engineering career.",
        rating: 5
      },
      {
        name: "Sylvie, Germany",
        role: "Healthcare Professional",
        content: "I wanted to invest in real estate in Germany but didn't know where to start. Steve's expertise completely demystified the market for me. Thanks to his clear vision and network, I successfully bought my first property with total peace of mind.",
        rating: 5
      },
      {
        name: "Ulrich, Germany",
        role: "Individual",
        content: "Starting my business in Germany felt like an administrative obstacle course. StivMab Consulting changed everything: a clear structure for my project and huge time savings dealing with bureaucracy. Today, my business is taking off smoothly.",
        rating: 5
      }
    ]
  },
  de: {
    title: "Erfahrungsberichte",
    subtitle: "Was unsere Kunden sagen",
    testimonials: [
      {
        name: "Kevin, München",
        role: "Maschinenbauingenieur",
        content: "Als ich 2018 ankam, fühlte ich mich angesichts des komplexen deutschen Systems etwas verloren. Steves maßgeschneiderte Betreuung war ein echter Wendepunkt für meine Integration. Seine praktischen Ratschläge halfen mir, schnell Fuß zu fassen und mich in meiner Karriere als Ingenieur sicher weiterzuentwickeln.",
        rating: 5
      },
      {
        name: "Sylvie, Deutschland",
        role: "Gesundheitsfachkraft",
        content: "Ich wollte in Immobilien in Deutschland investieren, wusste aber nicht, wo ich anfangen sollte. Steves Expertise hat den Markt für mich völlig entmystifiziert. Dank seiner klaren Vision und seines Netzwerks konnte ich meinen ersten Immobilienkauf völlig beruhigt abschließen.",
        rating: 5
      },
      {
        name: "Ulrich, Deutschland",
        role: "Privatperson",
        content: "Die Gründung meines Unternehmens in Deutschland kam mir vor wie ein administrativer Hürdenlauf. Die Unterstützung von StivMab Consulting hat alles verändert: eine klare Strukturierung meines Projekts und enorme Zeitersparnis bei der Bürokratie. Heute startet mein Geschäft reibungslos durch.",
        rating: 5
      }
    ]
  }
};

export default function TestimonialsSection({ lang }) {
  const t = translations[lang];
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % t.testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + t.testimonials.length) % t.testimonials.length);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4A84B]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4A84B]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4A84B] font-semibold text-sm uppercase tracking-wider">
            {t.title}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mt-4">
            {t.subtitle}
          </h2>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-3xl p-6 md:p-12 border border-gray-100 shadow-lg"
            >
              {/* Quote Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#D4A84B]/10 flex items-center justify-center mb-8">
                <Quote className="w-8 h-8 text-[#D4A84B]" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4A84B] text-[#D4A84B]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-base md:text-xl text-gray-800 leading-relaxed mb-8">
                "{t.testimonials[current].content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#D4A84B]/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-[#D4A84B]">
                    {t.testimonials[current].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-[#0A1628]">
                    {t.testimonials[current].name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {t.testimonials[current].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="border-gray-200 bg-white text-gray-700 hover:bg-gray-50 rounded-full w-12 h-12"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {t.testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === current ? 'bg-[#D4A84B] w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Aller au témoignage ${idx + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="border-gray-200 bg-white text-gray-700 hover:bg-gray-50 rounded-full w-12 h-12"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
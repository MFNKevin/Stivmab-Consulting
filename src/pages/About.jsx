import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Heart, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThreeDScene = React.lazy(() => import('@/components/ThreeDScene'));

const translations = {
  fr: {
    hero: {
      badge: "À propos",
      title: "Steve Nghotue",
      subtitle: "Votre expert en immigration, intégration et investissements en Allemagne",
      intro: "Je sais par expérience à quel point le parcours vers l'Allemagne peut être complexe, que ce soit à cause des obstacles administratifs ou de l'intégration au quotidien. C'est précisément pour cela que j'ai créé StivMab Consulting : afin de rendre ce parcours plus simple et plus clair pour les autres."
    },
    story: {
      title: "Mon histoire",
      content: [
        "En 2012, je suis moi-même arrivé en Allemagne en tant qu'étudiant, sans savoir exactement quels défis m'attendaient. Nouvelle langue, démarches bureaucratiques complexes, un système complètement différent : beaucoup de situations étaient au départ peu claires, parfois frustrantes et liées à l'incertitude.",
        "Ces expériences sont précisément celles que partagent beaucoup de mes clients aujourd'hui. J'ai moi-même emprunté ce chemin : réussite du DSH, développement d'une carrière d'ingénieur dans une entreprise internationale, et construction à long terme d'une stabilité financière.",
        "Désormais, j'accompagne des personnes qui se posent les mêmes questions que moi à l'époque. Comment bien démarrer en Allemagne ? Comment prendre les bonnes décisions ? Comment me construire une vie stable à long terme ? Fort de mon multilinguisme et de plus de 14 ans d'expérience, j'aide de nombreuses personnes à parcourir ce chemin avec clarté et sécurité."
      ]
    },
    mission: {
      title: "Ma Mission",
      content: "Je me suis donné pour mission d'aider les personnes à non seulement s'orienter en Allemagne, mais à réellement s'y installer et à réussir sur le long terme."
    },
    values: {
      title: "Mes valeurs",
      items: [
        { icon: Target, title: "Excellence", desc: "Je travaille avec une exigence claire : chaque accompagnement doit être personnalisé, précis et orienté vers des solutions." },
        { icon: Heart, title: "Discipline", desc: "La structure et la régularité sont les clés pour transformer des objectifs en résultats tangibles." },
        { icon: TrendingUp, title: "Résilience", desc: "Ne jamais abandonner face aux obstacles. Ensemble, nous trouvons le chemin de votre réussite." }
      ]
    },
    cta: "Parlons de votre projet en Allemagne"
  },
  en: {
    hero: {
      badge: "About",
      title: "Steve Nghotue",
      subtitle: "Your expert in immigration, integration and investments in Germany",
      intro: "I know from experience how complex the journey to Germany can be, whether due to administrative obstacles or daily integration. That's exactly why I founded StivMab Consulting: to make this journey simpler and clearer for others."
    },
    story: {
      title: "My Story",
      content: [
        "In 2012, I arrived in Germany myself as a student, not knowing exactly what challenges awaited me. A new language, complex bureaucratic procedures, a completely different system: many situations were initially unclear, sometimes frustrating and associated with uncertainty.",
        "These exact experiences are shared by many of my clients today. I have walked this path myself: passing the DSH exam, building an engineering career in an international company, and establishing long-term financial stability.",
        "Today, I guide people who face the same questions I did back then. How do I start properly in Germany? How do I make the right decisions? How do I build a stable life in the long term? Now multilingual and with over 14 years of experience, I support many people in walking this path with clarity and security."
      ]
    },
    mission: {
      title: "My Mission",
      content: "I have made it my mission to help people not only orient themselves in Germany, but to truly settle and succeed in the long term."
    },
    values: {
      title: "My values",
      items: [
        { icon: Target, title: "Excellence", desc: "I work with a clear standard: every support must be personalized, precise, and solution-oriented." },
        { icon: Heart, title: "Discipline", desc: "Structure and consistency are the keys to turning goals into tangible results." },
        { icon: TrendingUp, title: "Resilience", desc: "Never give up in the face of obstacles. Together, we find the path to your success." }
      ]
    },
    cta: "Let's talk about your project in Germany"
  },
  de: {
    hero: {
      badge: "Über uns",
      title: "Steve Nghotue",
      subtitle: "Ihr Experte für Einwanderung, Integration und Investitionen in Deutschland",
      intro: "Ich weiß aus eigener Erfahrung, wie komplex der Weg nach Deutschland sein kann, sei es durch administrative Hürden oder die tägliche Integration. Genau deshalb habe ich StivMab Consulting gegründet: um diesen Weg für andere einfacher und klarer zu machen."
    },
    story: {
      title: "Meine Geschichte",
      content: [
        "2012 kam ich selbst als Student nach Deutschland, ohne genau zu wissen, welche Herausforderungen mich erwarten würden. Neue Sprache, komplexe bürokratische Verfahren, ein komplett anderes System: Viele Situationen waren am Anfang unklar, teilweise frustrierend und mit Unsicherheit verbunden.",
        "Genau diese Erfahrungen teilen viele meiner heutigen Kunden. Ich bin diesen Weg selbst gegangen: erfolgreiche DSH-Prüfung, Aufbau einer Karriere als Ingenieur in einem internationalen Unternehmen sowie der langfristige Aufbau finanzieller Stabilität.",
        "Heute begleite ich Menschen, die vor denselben Fragen stehen wie ich damals. Wie starte ich in Deutschland richtig? Wie treffe ich die richtigen Entscheidungen? Wie baue ich mir langfristig ein stabiles Leben auf? Mehrsprachig und mit über 14 Jahren Erfahrung unterstütze ich heute viele Menschen dabei, diesen Weg mit Klarheit und Sicherheit zu gehen."
      ]
    },
    mission: {
      title: "Meine Mission",
      content: "Ich habe es mir zur Aufgabe gemacht, Menschen nicht nur dabei zu helfen, sich in Deutschland zu orientieren, sondern sich wirklich niederzulassen und langfristig erfolgreich zu sein."
    },
    values: {
      title: "Meine Werte",
      items: [
        { icon: Target, title: "Exzellenz", desc: "Ich arbeite mit einem klaren Anspruch: Jede Begleitung muss individuell, präzise und lösungsorientiert sein." },
        { icon: Heart, title: "Disziplin", desc: "Struktur und Beständigkeit sind der Schlüssel, um Ziele in greifbare Ergebnisse zu verwandeln." },
        { icon: TrendingUp, title: "Resilienz", desc: "Niemals aufgeben angesichts von Hindernissen. Gemeinsam finden wir den Weg zu Ihrem Erfolg." }
      ]
    },
    cta: "Lassen Sie uns über Ihr Projekt in Deutschland sprechen"
  }
};

export default function About({ lang = 'fr' }) {
  const t = translations[lang];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 -top-20">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697fb7ca64330dfe9624d226/85099ed29_Gemini_Generated_Image_i82qqmi82qqmi82q.png"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/95 via-[#0A1628]/90 to-[#132042]/85" />
        </div>
        
        <React.Suspense fallback={<div className="absolute inset-0 bg-transparent" />}>
          <ThreeDScene variant="about" />
        </React.Suspense>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A84B]/10 border border-[#D4A84B]/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#D4A84B]" />
                <span className="text-[#D4A84B] text-sm font-medium">{t.hero.badge}</span>
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                {t.hero.title}
              </h1>
              <p className="text-xl text-[#D4A84B] mb-6">{t.hero.subtitle}</p>
              <p className="text-lg text-white/70 leading-relaxed">
                {t.hero.intro}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center mt-4 lg:mt-0"
            >
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 w-full max-w-xs sm:max-w-sm lg:max-w-md">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697fb7ca64330dfe9624d226/e97d61581_IMG-20251119-WA0009.jpg"
                  alt="Steve Nghotue"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story & Mission */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#0A1628] mb-6">{t.story.title}</h2>
              <div className="space-y-4">
                {t.story.content.map((p, idx) => {
                  const parts = p.split('Steve Nghotue');
                  return (
                    <p key={idx} className="text-gray-600 leading-relaxed">
                      {parts.map((part, i) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < parts.length - 1 && <strong className="text-[#0A1628]">Steve Nghotue</strong>}
                        </React.Fragment>
                      ))}
                    </p>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#0A1628] rounded-3xl p-8 lg:p-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6">{t.mission.title}</h2>
              <p className="text-white/80 leading-relaxed text-lg">{t.mission.content}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#0A1628] text-center mb-16"
          >
            {t.values.title}
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {t.values.items.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-xl bg-[#D4A84B]/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#D4A84B]" />
                </div>
                <h3 className="text-xl font-bold text-[#0A1628] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a
              href="https://calendly.com/stivmabconsulting/coaching-integration-investissement"
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
          </motion.div>
        </div>
      </section>
    </main>
  );
}
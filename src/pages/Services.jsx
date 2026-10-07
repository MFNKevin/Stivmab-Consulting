import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Languages, 
  Building2, 
  PiggyBank,
  ArrowRight,
  CheckCircle,
  Calendar,
  Users,
  Star,
  Brain,
  Target,
  TrendingUp,
  Mail,
  Phone,
  Info,
  Globe,
  Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeDScene from '@/components/ThreeDScene';

const translations = {
  fr: {
    hero: {
      title: "Votre chemin personnalisé vers la réussite en Allemagne",
      subtitle: "Aide à l'intégration, coaching pour étrangers et conseil pour investir dans l'immobilier en Allemagne. Structuré clairement et accompagné de manière personnalisée.",
      cta: "Prendre un rendez-vous"
    },
    categories: [
      {
        id: "immigration",
        title: "Immigration",
        icon: Globe,
        services: [
          {
            title: "Réussir son projet d’immigration",
            subtitle: "Un accompagnement complet pour votre installation",
            target: "Candidats à l'immigration (étudiants, travailleurs qualifiés, regroupement familial).",
            promise: "Un plan d'action étape par étape pour obtenir votre visa et préparer votre arrivée sans stress.",
            format: "Accompagnement personnalisé.",
            icon: Target,
            link: "/ServiceImmigration"
          },
          {
            title: "Booster son niveau de langue",
            subtitle: "Maîtriser l'allemand pour réussir son arrivée",
            target: "Personnes préparant leur projet d'immigration nécessitant des certifications linguistiques (A1 à B1).",
            promise: "Atteindre le niveau requis pour votre demande de visa et réussir vos examens de langue avec confiance.",
            format: "Coaching linguistique orienté examens.",
            icon: Languages,
            link: "/ServiceAllemand"
          }
        ]
      },
      {
        id: "investissement",
        title: "Investissement",
        icon: PiggyBank,
        services: [
          {
            title: "Comprendre le marché immobilier",
            subtitle: "Analyser les opportunités d'investissement et de patrimoine en Allemagne",
            target: "Expatriés et professionnels internationaux souhaitant devenir propriétaire, produire du cash flow et optimiser les impôts.",
            promise: "Compréhension du marché immobilier allemand et analyse personnalisée de votre situation.",
            format: "Accompagnement personnalisé et formation.",
            icon: Building2,
            link: "/ServiceImmobilier"
          },
          {
            title: "Comprendre une stratégie patrimoniale optimisée fiscalement",
            subtitle: "Sécuriser votre avenir financier",
            target: "Parents, travailleurs et expatriés soucieux de leur avenir financier et celui des enfants.",
            promise: "Comprendre comment évaluer votre situation et les facteurs influençant la stabilité à long terme.",
            format: "Consultation individuelle.",
            icon: TrendingUp,
            link: "/ServiceRetraite"
          }
        ]
      },
      {
        id: "integration",
        title: "Intégration",
        icon: Users,
        services: [
          {
            title: "Booster son niveau de langue",
            subtitle: "L'intégration par la langue au quotidien",
            target: "Expatriés déjà en Allemagne souhaitant s'intégrer professionnellement et socialement.",
            promise: "Parler allemand avec fluidité au travail et dans la vie courante pour une véritable intégration.",
            format: "Pratique conversationnelle et vocabulaire professionnel.",
            icon: Languages,
            link: "/ServiceAllemand"
          },
          {
            title: "Comprendre le système allemand",
            subtitle: "Naviguer avec aisance dans la société allemande",
            target: "Nouveaux arrivants et résidents en Allemagne.",
            promise: "Maîtriser la bureaucratie, les impôts, le système de santé et les codes culturels locaux.",
            format: "Mentoring pratique et explications claires.",
            icon: Brain,
            link: "/ServiceSystemeAllemand"
          }
        ]
      },
      {
        id: "business",
        title: "Business",
        icon: Briefcase,
        services: [
          {
            title: "Mentoring Business & Mindset",
            subtitle: "Développer votre potentiel entrepreneurial",
            target: "Toute personne souhaitant se lancer en entrepreneuriat.",
            promise: "Échange d'idées et présentation des opportunités de business qui s'offrent à vous et dans lesquelles vous pouvez vous lancer, même en partant de zéro.",
            format: "Suivi individualisé en ligne.",
            icon: Star,
            link: "/ServiceBusiness"
          }
        ]
      }
    ],
    method: {
      title: "Notre Méthode",
      subtitle: "Beaucoup de personnes échouent non pas par manque de motivation, mais par absence de structure. C'est exactement là que ma méthode intervient.",
      steps: [
        {
          icon: Target,
          title: "Le Diagnostic",
          badge: "Gratuit",
          description: "Nous analysons votre situation actuelle et vos objectifs"
        },
        {
          icon: TrendingUp,
          title: "Le Plan d'Action",
          badge: "Personnalisé",
          description: "Vous recevez un plan clair et réalisable"
        },
        {
          icon: Users,
          title: "L'Accompagnement",
          badge: "Suivi",
          description: "Je vous accompagne personnellement à chaque étape"
        },
        {
          icon: Star,
          title: "Résultats",
          badge: "Objectif atteint",
          description: "Vous obtenez des progrès mesurables et des résultats concrets"
        }
      ]
    },
    pricing: {
      title: "Tarification & Disponibilités",
      subtitle: "Sur mesure",
      message: "Chaque projet est unique. C'est pourquoi nous commençons par une première analyse gratuite durant laquelle nous étudions votre situation et définissons ensemble une stratégie adaptée.",
      includes: [
        "Support Email 24/7",
        "Réseau de partenaires",
        "Premier diagnostic offert"
      ]
    },
    finalCta: {
      title: "Prêt à passer à l'action ?",
      cta: "Prendre une première consultation gratuite",
      calendlyUrl: "https://calendly.com/stivmabconsulting/rendez-vous",
      contact: "Questions pré-réservation",
      email: "infos@stivmabconsulting.com",
      phone: "+49 152 13435560"
    }
  },
  en: {
    hero: {
      title: "Your personalized path to success in Germany",
      subtitle: "Integration support, coaching for foreigners and advice for investing in real estate in Germany. Clearly structured and personally accompanied.",
      cta: "Book an appointment"
    },
    categories: [
      {
        id: "immigration",
        title: "Immigration",
        icon: Globe,
        services: [
          {
            title: "Succeed in your immigration project",
            subtitle: "Complete support for your installation",
            target: "Immigration candidates (students, skilled workers, family reunification).",
            promise: "A step-by-step action plan to obtain your visa and prepare your arrival without stress.",
            format: "Personalized support.",
            icon: Target,
            link: "/ServiceImmigration"
          },
          {
            title: "Boost your language level",
            subtitle: "Master German for a successful arrival",
            target: "People preparing their immigration project requiring language certifications (A1 to B1).",
            promise: "Achieve the required level for your visa application and pass your language exams with confidence.",
            format: "Exam-oriented language coaching.",
            icon: Languages,
            link: "/ServiceAllemand"
          }
        ]
      },
      {
        id: "investissement",
        title: "Investment",
        icon: PiggyBank,
        services: [
          {
            title: "Understanding the German real estate market",
            subtitle: "Analyze real estate and wealth-building opportunities in Germany",
            target: "Expatriates and international professionals wishing to become owners, generate cash flow and optimize taxes.",
            promise: "Personalized analysis of your financial situation and clear orientation in a complex market.",
            format: "Training and personalized support.",
            icon: Building2,
            link: "/ServiceImmobilier"
          },
          {
            title: "Understanding a tax optimization strategy",
            subtitle: "Secure your financial future",
            target: "Parents, workers and expatriates concerned about their financial future and that of their children.",
            promise: "Gain orientation on fundamental approaches to wealth building and tax-related aspects in Germany.",
            format: "Individual consultation.",
            icon: TrendingUp,
            link: "/ServiceRetraite"
          }
        ]
      },
      {
        id: "integration",
        title: "Integration",
        icon: Users,
        services: [
          {
            title: "Boost your language level",
            subtitle: "Integration through daily language",
            target: "Expatriates already in Germany wishing to integrate professionally and socially.",
            promise: "Speak German fluently at work and in daily life for genuine integration.",
            format: "Conversational practice and professional vocabulary.",
            icon: Languages,
            link: "/ServiceAllemand"
          },
          {
            title: "Understand the German system",
            subtitle: "Navigate German society with ease",
            target: "Newcomers and residents in Germany.",
            promise: "Master bureaucracy, taxes, healthcare system, and local cultural codes.",
            format: "Practical mentoring and clear explanations.",
            icon: Brain,
            link: "/ServiceSystemeAllemand"
          }
        ]
      },
      {
        id: "business",
        title: "Business",
        icon: Briefcase,
        services: [
          {
            title: "Business & Mindset Mentoring",
            subtitle: "Develop your entrepreneurial potential",
            target: "Anyone wishing to start in entrepreneurship.",
            promise: "Exchange of ideas and business opportunities available to you, and how to get started even from scratch.",
            format: "Personalized online tracking.",
            icon: Star,
            link: "/ServiceBusiness"
          }
        ]
      }
    ],
    method: {
      title: "Our Method",
      subtitle: "A rigorous process regardless of the service",
      steps: [
        {
          icon: Target,
          title: "Diagnosis",
          badge: "Free",
          description: "Analysis of your situation"
        },
        {
          icon: TrendingUp,
          title: "Action Plan",
          badge: "Customized",
          description: "Strategy adapted to your situation"
        },
        {
          icon: Users,
          title: "Support",
          badge: "Follow-up",
          description: "Execution and personalized follow-up"
        },
        {
          icon: Star,
          title: "Results",
          badge: "Goal achieved",
          description: "Achievement of your integration and investment objectives"
        }
      ]
    },
    pricing: {
      title: "Pricing & Availability",
      subtitle: "Customized",
      message: "Each project is unique. We define the appropriate package after the first free diagnosis. Whether you want to master German, invest in real estate or plan your retirement, our support is tailored to your personal situation and goals.",
      includes: [
        "24/7 Email Support",
        "Partner network",
        "First free diagnosis"
      ]
    },
    finalCta: {
      title: "Ready to take action?",
      cta: "Book your free session",
      calendlyUrl: "https://calendly.com/stivmabconsulting/rendez-vous",
      contact: "Pre-booking questions",
      email: "infos@stivmabconsulting.com",
      phone: "+49 152 13435560"
    }
  },
  de: {
    hero: {
      title: "Ihr persönlicher Weg zum Erfolg in Deutschland",
      subtitle: "Integrationshilfe, Coaching für Ausländer und Beratung für Immobilieninvestitionen in Deutschland. Klar strukturiert und persönlich begleitet.",
      cta: "Termin vereinbaren"
    },
    categories: [
      {
        id: "immigration",
        title: "Einwanderung",
        icon: Globe,
        services: [
          {
            title: "Ihr Einwanderungsprojekt erfolgreich umsetzen",
            subtitle: "Vollständige Begleitung für Ihre Installation",
            target: "Einwanderungskandidaten (Studenten, Fachkräfte, Familiennachzug).",
            promise: "Ein Schritt-für-Schritt-Aktionsplan, um Ihr Visum zu erhalten und Ihre Ankunft stressfrei vorzubereiten.",
            format: "Individuelle Begleitung.",
            icon: Target,
            link: "/ServiceImmigration"
          },
          {
            title: "Sprachniveau verbessern",
            subtitle: "Deutsch beherrschen für eine erfolgreiche Ankunft",
            target: "Personen, die ihr Einwanderungsprojekt vorbereiten und Sprachzertifikate benötigen (A1 bis B1).",
            promise: "Erreichen Sie das erforderliche Niveau für Ihren Visumantrag und bestehen Sie Ihre Sprachprüfungen mit Zuversicht.",
            format: "Prüfungsorientiertes Sprachcoaching.",
            icon: Languages,
            link: "/ServiceAllemand"
          }
        ]
      },
      {
        id: "investissement",
        title: "Investition",
        icon: PiggyBank,
        services: [
          {
            title: "Verständnis des deutschen Immobilienmarktes",
            subtitle: "Immobilien und Vermögensaufbau in Deutschland analysieren",
            target: "Expatriates und internationale Fachkräfte, die Eigentümer werden, Cashflow generieren und Steuern optimieren möchten.",
            promise: "Personalisierte Analyse Ihrer finanziellen Situation und klare Orientierung in einem komplexen Marktumfeld.",
            format: "Schulung und individuelle Begleitung.",
            icon: Building2,
            link: "/ServiceImmobilier"
          },
          {
            title: "Steueroptimierte Vermögensstrategie verstehen",
            subtitle: "Sichern Sie Ihre finanzielle Zukunft",
            target: "Eltern, Arbeitnehmer und Expatriates, die sich um ihre finanzielle Zukunft und die ihrer Kinder sorgen.",
            promise: "Orientierung zu grundlegenden Strategien des Vermögensaufbaus und steuerlichen Zusammenhängen in Deutschland.",
            format: "Individuelle Beratung.",
            icon: TrendingUp,
            link: "/ServiceRetraite"
          }
        ]
      },
      {
        id: "integration",
        title: "Integration",
        icon: Users,
        services: [
          {
            title: "Sprachniveau verbessern",
            subtitle: "Integration durch Alltagssprache",
            target: "Bereits in Deutschland lebende Expatriates, die sich beruflich und sozial integrieren möchten.",
            promise: "Sprechen Sie fließend Deutsch bei der Arbeit und im Alltag für eine echte Integration.",
            format: "Konversationspraxis und Berufsvokabular.",
            icon: Languages,
            link: "/ServiceAllemand"
          },
          {
            title: "Das deutsche System verstehen",
            subtitle: "Sich sicher in der deutschen Gesellschaft bewegen",
            target: "Neuankömmlinge und Einwohner in Deutschland.",
            promise: "Meistern Sie die Bürokratie, Steuern, das Gesundheitssystem und lokale kulturelle Codes.",
            format: "Praktisches Mentoring und klare Erklärungen.",
            icon: Brain,
            link: "/ServiceSystemeAllemand"
          }
        ]
      },
      {
        id: "business",
        title: "Business",
        icon: Briefcase,
        services: [
          {
            title: "Mentoring Business & Mindset",
            subtitle: "Entwickeln Sie Ihr unternehmerisches Potenzial",
            target: "Jeder, der in die Selbstständigkeit starten möchte.",
            promise: "Austausch von Ideen und Geschäftsmöglichkeiten, die sich Ihnen bieten, und wie Sie auch bei Null anfangen können.",
            format: "Individuelle Online-Betreuung.",
            icon: Star,
            link: "/ServiceBusiness"
          }
        ]
      }
    ],
    method: {
      title: "Unsere Methode",
      subtitle: "Ein rigoroser Prozess unabhängig vom Service",
      steps: [
        {
          icon: Target,
          title: "Diagnose",
          badge: "Kostenlos",
          description: "Analyse Ihrer Situation"
        },
        {
          icon: TrendingUp,
          title: "Aktionsplan",
          badge: "Personalisiert",
          description: "An Ihre Situation angepasste Strategie"
        },
        {
          icon: Users,
          title: "Begleitung",
          badge: "Nachverfolgung",
          description: "Umsetzung und personalisierte Betreuung"
        },
        {
          icon: Star,
          title: "Ergebnisse",
          badge: "Ziel erreicht",
          description: "Erreichen Ihrer Integrations- und Investitionsziele"
        }
      ]
    },
    pricing: {
      title: "Preise & Verfügbarkeit",
      subtitle: "Maßgeschneidert",
      message: "Jedes Projekt ist einzigartig. Wir definieren das passende Paket nach der ersten kostenlosen Diagnose. Ob Deutschkurs, Immobilieninvestition oder Altersvorsorge – unsere Begleitung passt sich Ihrer persönlichen Situation und Ihren Zielen an.",
      includes: [
        "24H/7 E-Mail-Support",
        "Partnernetzwerk",
        "Erste kostenlose Diagnose"
      ]
    },
    finalCta: {
      title: "Bereit, aktiv zu werden?",
      cta: "Ihre kostenlose Sitzung buchen",
      calendlyUrl: "https://calendly.com/stivmabconsulting/rendez-vous",
      contact: "Fragen vor der Buchung",
      email: "infos@stivmabconsulting.com",
      phone: "+49 152 13435560"
    }
  }
};

export default function Services({ lang = 'fr' }) {
  const t = translations[lang];
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, [location.hash]);

  const scrollToServices = () => {
    document.getElementById('services-list')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-28 sm:pt-40 pb-20 sm:pb-32 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 -top-20">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697fb7ca64330dfe9624d226/573c3c336_Gemini_Generated_Image_gosbw4gosbw4gosb.png"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/95 via-[#0A1628]/90 to-[#132042]/85" />
        </div>
        
        <ThreeDScene variant="services" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6">
              {t.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
              {t.hero.subtitle}
            </p>

            <a href={t.finalCta.calendlyUrl} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="bg-[#D4A84B] hover:bg-[#C49A3E] text-[#0A1628] font-semibold px-8 h-14 rounded-xl"
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section id="services-list" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {t.categories.map((category, idx) => (
            <div key={idx} id={category.id} className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A84B]/10 border border-[#D4A84B]/20 mb-4">
                  <category.icon className="w-4 h-4 text-[#D4A84B]" />
                  <span className="text-[#D4A84B] text-sm font-medium">{category.title}</span>
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628]">
                  {category.title}
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.services.map((service, sIdx) => (
                  <motion.div
                    key={sIdx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: sIdx * 0.1 }}
                    className="bg-gray-50 hover:bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#D4A84B]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4A84B] transition-colors duration-300">
                      <service.icon className="w-7 h-7 text-[#D4A84B] group-hover:text-[#0A1628] transition-colors duration-300" />
                    </div>

                    <h3 className="text-2xl font-bold text-[#0A1628] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.subtitle}
                    </p>

                    {(service.target || service.promise || service.format) && (
                      <div className="space-y-3 mb-6 text-sm bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                        {service.target && (
                          <div>
                            <span className="font-semibold text-[#0A1628]">{lang === 'fr' ? 'Cible :' : lang === 'en' ? 'Target:' : 'Zielgruppe:'}</span> <span className="text-gray-600">{service.target}</span>
                          </div>
                        )}
                        {service.promise && (
                          <div>
                            <span className="font-semibold text-[#0A1628]">{lang === 'fr' ? 'Promesse :' : lang === 'en' ? 'Promise:' : 'Versprechen:'}</span> <span className="text-gray-600">{service.promise}</span>
                          </div>
                        )}
                        {service.format && (
                          <div>
                            <span className="font-semibold text-[#0A1628]">{lang === 'fr' ? 'Format :' : lang === 'en' ? 'Format:' : 'Format:'}</span> <span className="text-gray-600">{service.format}</span>
                          </div>
                        )}
                      </div>
                    )}

                    <Link
                      to={service.link}
                      state={{ lang }}
                      className="inline-flex items-center gap-2 text-[#D4A84B] font-medium text-sm hover:underline"
                    >
                      <Info className="w-4 h-4" />
                      {lang === 'fr' ? 'Voir les détails' : lang === 'en' ? 'Show details' : 'Details anzeigen'}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Notre Méthode */}
      <section className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-4">
              {t.method.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.method.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {t.method.steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative bg-white rounded-2xl p-6 border border-gray-200"
              >
                <div className="absolute -top-3 left-6 px-3 py-1 bg-[#D4A84B] rounded-full">
                  <span className="text-[#0A1628] text-xs font-bold">{step.badge}</span>
                </div>

                <div className="w-12 h-12 rounded-xl bg-[#D4A84B]/20 flex items-center justify-center mb-4 mt-2">
                  <step.icon className="w-6 h-6 text-[#D4A84B]" />
                </div>

                <h3 className="text-xl font-bold text-[#0A1628] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>

                {idx < t.method.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#D4A84B]/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarification */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-2">
              {t.pricing.title}
            </h2>
            <p className="text-[#D4A84B] text-lg font-medium mb-6">
              {t.pricing.subtitle}
            </p>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t.pricing.message}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {t.pricing.includes.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D4A84B] shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#0A1628] rounded-3xl p-8 md:p-16 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D4A84B]/10 blur-3xl rounded-full transform translate-x-1/3" />
            
            <ThreeDScene variant="cta" />

            <div className="relative text-center max-w-3xl mx-auto">
              <div className="w-20 h-20 rounded-2xl bg-[#D4A84B]/20 flex items-center justify-center mx-auto mb-8">
                <Calendar className="w-10 h-10 text-[#D4A84B]" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                {t.finalCta.title}
              </h2>

              <a
                href={t.finalCta.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-12"
              >
                <Button 
                  size="lg"
                  className="bg-[#D4A84B] hover:bg-[#C49A3E] text-[#0A1628] font-semibold px-8 h-14 rounded-xl group"
                >
                  {t.finalCta.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>

              <div className="border-t border-white/10 pt-8">
                <p className="text-white/60 text-sm mb-4">{t.finalCta.contact}</p>
                <div className="flex flex-wrap items-center justify-center gap-6">
                  <a href={`mailto:${t.finalCta.email}`} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                    {t.finalCta.email}
                  </a>
                  <a href={`tel:${t.finalCta.phone}`} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                    {t.finalCta.phone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


    </main>
  );
}
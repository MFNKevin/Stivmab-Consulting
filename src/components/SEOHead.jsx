import { useEffect } from 'react';

const seoData = {
  Home: {
    fr: {
      title: "Immigration et investissement en Allemagne | StivMab Consulting",
      description: "Conseil pour l'immigration, l'intégration et les investissements en Allemagne. Adapté individuellement, expérimenté et orienté pratique. Première consultation gratuite.",
    },
    en: {
      title: "Immigration and investment in Germany | StivMab Consulting",
      description: "Advice for immigration, integration and investment in Germany. Individually tailored, experienced and practice-oriented. Free first consultation.",
    },
    de: {
      title: "Einwanderung und Investition in Deutschland | StivMab Consulting",
      description: "Beratung für Einwanderung, Integration und Investitionen in Deutschland. Individuell angepasst, erfahren und praxisorientiert. Kostenlose Erstberatung.",
    }
  },
  Services: {
    fr: {
      title: "Aide à l'intégration et investissement immobilier en Allemagne | StivMab Consulting",
      description: "Coaching pour étrangers en Allemagne : cours d'allemand A1-B2, mentoring business, conseil pour investir dans l'immobilier en Allemagne. Accompagnement sur mesure.",
    },
    en: {
      title: "Integration support and real estate investment in Germany | StivMab Consulting",
      description: "Coaching for foreigners in Germany: German courses A1-B2, business mentoring, advice for real estate investment in Germany. Tailored support.",
    },
    de: {
      title: "Integrationshilfe und Immobilieninvestition in Deutschland | StivMab Consulting",
      description: "Coaching für Ausländer in Deutschland: Deutschkurse A1-B2, Business-Mentoring, Beratung zur Immobilieninvestition. Individuelle Begleitung.",
    }
  },
  About: {
    fr: {
      title: "Steve Nghotue – Votre expert en immigration et investissement en Allemagne | StivMab Consulting",
      description: "Steve Nghotue : conseil en immigration Allemagne, accompagnement à l'intégration, expérience immigration Allemagne depuis plus de 14 ans. Vivre en Allemagne pour étrangers.",
    },
    en: {
      title: "Steve Nghotue – Your expert for immigration and investment in Germany | StivMab Consulting",
      description: "Steve Nghotue: immigration advice Germany, integration support, over 14 years of immigration experience in Germany. Living in Germany for foreigners.",
    },
    de: {
      title: "Steve Nghotue – Ihr Experte für Einwanderung und Investitionen in Deutschland | StivMab Consulting",
      description: "Steve Nghotue: Einwanderungsberatung Deutschland, Integrations-Coaching, über 14 Jahre Erfahrung mit Einwanderung in Deutschland. Leben in Deutschland für Ausländer.",
    }
  },
  Contact: {
    fr: {
      title: "Conseil Allemagne – Aide à l'intégration et coaching | StivMab Consulting",
      description: "Commencez votre parcours en Allemagne avec un accompagnement clair. Première évaluation gratuite et sans engagement. Coaching Allemagne, aide à l'intégration.",
    },
    en: {
      title: "Germany advice – Integration support and coaching | StivMab Consulting",
      description: "Start your journey in Germany with clear support. Free and no-commitment first evaluation. Germany coaching, integration support.",
    },
    de: {
      title: "Deutschland Beratung – Integrationshilfe und Coaching | StivMab Consulting",
      description: "Starten Sie Ihren Weg in Deutschland mit klarer Begleitung. Kostenlose und unverbindliche Erstbewertung. Coaching Deutschland, Integrationshilfe.",
    }
  },
  ServiceAllemand: {
    fr: {
      title: "Intégration en Allemagne : maîtriser avec succès la langue | StivMab Consulting",
      description: "Aide à l'intégration en Allemagne : Parler allemand avec assurance au quotidien et au travail. Surmontez les barrières linguistiques de A1 à B2."
    },
    en: {
      title: "Integration in Germany: successfully master the language | StivMab Consulting",
      description: "Integration support in Germany: Speak German with confidence at work and in daily life. Overcome language barriers from A1 to B2."
    },
    de: {
      title: "Integration in Deutschland: Sprache erfolgreich meistern | StivMab Consulting",
      description: "Integrationshilfe in Deutschland: Sicher Deutsch sprechen im Alltag und im Beruf. Überwinden Sie Sprachbarrieren von A1 bis B2."
    }
  },
  ServiceImmigration: {
    fr: {
      title: "Réussir son projet d’Immigration en Allemagne | StivMab Consulting",
      description: "Accompagnement personnalisé pour transformer votre projet d'immigration, études et travail en Allemagne en réalité sans erreurs administratives."
    },
    en: {
      title: "Succeed in your Immigration project in Germany | StivMab Consulting",
      description: "Personalized support to turn your immigration, studies and work project in Germany into reality without administrative errors."
    },
    de: {
      title: "Ihr Einwanderungsprojekt in Deutschland erfolgreich umsetzen | StivMab Consulting",
      description: "Persönliche Unterstützung, um Ihr Einwanderungs-, Studien- und Arbeitsprojekt in Deutschland ohne Verwaltungsfehler zu verwirklichen."
    }
  },
  ServiceSystemeAllemand: {
    fr: {
      title: "Comprendre le système allemand pour une intégration réussie | StivMab Consulting",
      description: "Naviguez avec aisance dans la société allemande. Nous vous aidons à comprendre les impôts, la santé et l'administration en Allemagne."
    },
    en: {
      title: "Understand the German system for successful integration | StivMab Consulting",
      description: "Navigate German society with ease. We help you understand taxes, healthcare, and administration in Germany."
    },
    de: {
      title: "Das deutsche System verstehen für eine erfolgreiche Integration | StivMab Consulting",
      description: "Bewegen Sie sich sicher in der deutschen Gesellschaft. Wir helfen Ihnen, Steuern, Gesundheit und Verwaltung in Deutschland zu verstehen."
    }
  },
  ServiceBusiness: {
    fr: {
      title: "Mentoring Business & Mindset en Allemagne | StivMab Consulting",
      description: "Développez votre carrière, créez votre entreprise et construisez votre patrimoine en Allemagne avec notre mentoring sur-mesure."
    },
    en: {
      title: "Business & Mindset Mentoring in Germany | StivMab Consulting",
      description: "Develop your career, start your business, and build your wealth in Germany with our tailored mentoring."
    },
    de: {
      title: "Business & Mindset Mentoring in Deutschland | StivMab Consulting",
      description: "Entwickeln Sie Ihre Karriere, gründen Sie Ihr Unternehmen und bauen Sie Ihr Vermögen in Deutschland mit unserem Mentoring auf."
    }
  },
  ServiceMentoring: {
    fr: {
      title: "Créer une entreprise en Allemagne : conseil entrepreneurs | StivMab Consulting",
      description: "Coaching pour étrangers en Allemagne. Construisez votre carrière ou devenez indépendant avec une stratégie claire et un accompagnement personnalisé."
    },
    en: {
      title: "Start a business in Germany: advice for entrepreneurs | StivMab Consulting",
      description: "Coaching for foreigners in Germany. Build your career or become independent with a clear strategy and personalized support."
    },
    de: {
      title: "Unternehmensgründung in Deutschland: Beratung für Unternehmer | StivMab Consulting",
      description: "Coaching für Ausländer in Deutschland. Karriere aufbauen oder selbstständig machen mit einer klaren Strategie und Begleitung."
    }
  },
  ServiceImmobilier: {
    fr: {
      title: "Investir dans l'immobilier en Allemagne : stratégies | StivMab Consulting",
      description: "Conseil pour investir dans l'immobilier en Allemagne. Construire un patrimoine en Allemagne étape par étape, même sans connaissances préalables."
    },
    en: {
      title: "Invest in real estate in Germany: strategies | StivMab Consulting",
      description: "Advice for investing in real estate in Germany. Build wealth in Germany step by step, even without prior knowledge."
    },
    de: {
      title: "Immobilieninvestition in Deutschland: Strategien | StivMab Consulting",
      description: "Beratung für Immobilieninvestitionen in Deutschland. Mit Immobilien ein Vermögen in Deutschland aufbauen, auch als Anfänger."
    }
  },
  ServiceRetraite: {
    fr: {
      title: "Construire une sécurité financière en Allemagne | StivMab Consulting",
      description: "Commencer à vivre en Allemagne et préparer l'avenir. Des stratégies personnalisées pour votre retraite et l'optimisation fiscale en Allemagne."
    },
    en: {
      title: "Build financial security in Germany | StivMab Consulting",
      description: "Start living in Germany and prepare for the future. Personalized strategies for your retirement and tax optimization in Germany."
    },
    de: {
      title: "Finanzielle Sicherheit in Deutschland aufbauen | StivMab Consulting",
      description: "Leben in Deutschland beginnen und die Zukunft vorbereiten. Persönliche Strategien für Ihren Ruhestand und Steueroptimierung in Deutschland."
    }
  },
  MentionsLegales: {
    fr: { title: "Mentions Légales – StivMab Consulting", description: "Mentions légales et informations juridiques de StivMab Consulting." },
    en: { title: "Legal Notice – StivMab Consulting", description: "Legal notice and legal information of StivMab Consulting." },
    de: { title: "Impressum – StivMab Consulting", description: "Impressum und rechtliche Informationen von StivMab Consulting." }
  },
  PolitiqueConfidentialite: {
    fr: { title: "Politique de Confidentialité – StivMab Consulting", description: "Comment StivMab Consulting collecte, utilise et protège vos données personnelles. Conformité RGPD." },
    en: { title: "Privacy Policy – StivMab Consulting", description: "How StivMab Consulting collects, uses and protects your personal data. GDPR compliance." },
    de: { title: "Datenschutzerklärung – StivMab Consulting", description: "Wie StivMab Consulting Ihre personenbezogenen Daten erhebt, verwendet und schützt. DSGVO-Konformität." }
  }
};

export default function SEOHead({ pageName, lang = 'fr' }) {
  const pageData = seoData[pageName]?.[lang] || seoData[pageName]?.fr;

  useEffect(() => {
    if (!pageData) return;

    // Title
    document.title = pageData.title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = pageData.description;

    // Open Graph
    const ogTags = [
      { property: 'og:title', content: pageData.title },
      { property: 'og:description', content: pageData.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_697c887bb26a4cfccb07f537/dd25a7fb4_logo_light.jpg' },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    });

    // Favicon
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_697c887bb26a4cfccb07f537/dd25a7fb4_logo_light.jpg';
      favicon.type = 'image/jpeg';
    }

    // Canonical link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = window.location.href.split('?')[0];

    // Lang attribute
    document.documentElement.lang = lang;
  }, [pageName, lang, pageData]);

  return null;
}
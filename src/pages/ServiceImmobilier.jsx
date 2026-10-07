import React from 'react';
import { Building2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';

const data = {
  fr: {
    back: "← Retour aux services",
    badge: "Pôle Investissement",
    title: "Immobilier & Patrimoine : comprendre et évaluer vos opportunités",
    subtitle: "Analyser les opportunités immobilières et le patrimoine en Allemagne",
    intro: "L'immobilier est un sujet complexe qui demande de l'orientation. Vous souhaitez mieux comprendre le marché ? Je vous montre à travers un accompagnement comment analyser vos opportunités en Allemagne.\n\nPour de nombreux expatriés en Allemagne, la question immobilière est importante. Cependant, le marché peut sembler complexe et inconnu.\n\nImaginez que vous ne soyez pas seul pour réfléchir, mais accompagné par une orientation claire. Ma mission est de vous guider afin que vous puissiez comprendre vos possibilités. Je vous offre un accompagnement qui vous aidera à évaluer les opportunités pour construire une stabilité financière en Allemagne.",
    sections: [
      {
        title: "Pourquoi choisir cet accompagnement ?",
        bullets: [
          "Compréhension du marché immobilier allemand et de ses processus",
          "Analyse personnalisée de votre situation financière et de vos objectifs",
          "Un accompagnement clair et structuré à chaque étape de votre réflexion pour prendre des décisions réfléchies",
          "Une orientation claire dans un environnement de marché complexe",
          "Fokus sur des stratégies à long terme et durables",
          "Vous apprenez à évaluer les opportunités et à prendre des décisions indépendantes"
        ]
      }
    ],
    principlesTitle: "Pourquoi travailler avec nous ?",
    principles: [
      {
        label: "Clarté",
        desc: "Nous vous expliquons chaque étape de manière simple et transparente."
      },
      {
        label: "Confiance",
        desc: "Nous plaçons vos intérêts et vos objectifs au centre de chaque décision."
      },
      {
        label: "Accompagnement complet",
        desc: "Nous restons à vos côtés durant tout le processus, de l’analyse initiale jusqu’à la concrétisation de votre projet immobilier."
      }
    ],
    ctaTitle: "Prêt à démarrer votre projet ?",
    bookLabel: "Réservez votre première consultation sans engagement",
    calendlyUrl: "https://calendly.com/stivmabconsulting/rendez-vous"
  },
  en: {
    back: "← Back to services",
    badge: "Investment Hub",
    title: "Real estate & wealth: understand and evaluate your opportunities",
    subtitle: "Analyze real estate and wealth-building opportunities in Germany",
    intro: "Real estate is a complex topic that requires orientation. Do you want to better understand the market? I show you through guidance how to analyze your opportunities in Germany.\n\nFor many expatriates in Germany, the real estate question is important. However, the market can seem complex and unfamiliar.\n\nImagine you are not alone in your reflections, but accompanied by clear orientation. My mission is to guide you so that you can understand your possibilities. I offer you support that will help you evaluate opportunities to build financial stability in Germany.",
    sections: [
      {
        title: "Why choose this guidance?",
        bullets: [
          "Understanding of the German real estate market and its processes",
          "Personalized analysis of your financial situation and your goals",
          "Clear and structured support throughout your decision-making process",
          "Orientation in a complex and unfamiliar market environment",
          "Focus on long-term and sustainable approaches",
          "You learn how to evaluate opportunities and make independent decisions"
        ]
      }
    ],
    principlesTitle: "Why work with us?",
    principles: [
      {
        label: "Clarity",
        desc: "We explain each step in a simple and transparent way."
      },
      {
        label: "Trust",
        desc: "We place your interests and goals at the center of every decision."
      },
      {
        label: "Complete support",
        desc: "We stay by your side throughout the entire process, from the initial analysis to the realization of your real estate project."
      }
    ],
    ctaTitle: "Ready to start your project?",
    bookLabel: "Book your first free consultation",
    calendlyUrl: "https://calendly.com/stivmabconsulting/rendez-vous"
  },
  de: {
    back: "← Zurück zu den Dienstleistungen",
    badge: "Investition",
    title: "Immobilien & Vermögen: Möglichkeiten erkennen und bewerten",
    subtitle: "Analyse von Möglichkeiten im Bereich Immobilien in Deutschland und langfristiger Vermögensaufbau",
    intro: "Immobilien sind ein komplexes Thema, das Orientierung erfordert. Möchten Sie den Markt besser verstehen? Ich zeige Ihnen durch Begleitung, wie Sie Ihre Möglichkeiten in Deutschland analysieren können.\n\nFür viele Expatriates in Deutschland ist die Immobilienfrage wichtig. Der Markt kann jedoch komplex und unbekannt erscheinen.\n\nStellen Sie sich vor, Sie sind in Ihren Überlegungen nicht allein, sondern werden durch klare Orientierung begleitet. Meine Mission ist es, Sie zu führen, damit Sie Ihre Möglichkeiten verstehen können. Ich biete Ihnen Unterstützung, die Ihnen hilft, Möglichkeiten zu bewerten, um finanzielle Stabilität in Deutschland aufzubauen.",
    sections: [
      {
        title: "Warum diese Begleitung wählen?",
        bullets: [
          "Verständnis des deutschen Immobilienmarktes (-jargons) und dessen Prozesse",
          "Personalisierte Analyse Ihrer finanziellen Situation und Zielsetzung",
          "Klare und strukturierte Unterstützung: Wir begleiten Sie Schritt für Schritt durch alle Phasen des Prozesses, damit Sie sichere und durchdachte Entscheidungen treffen können",
          "Klare Orientierung in einem komplexen Marktumfeld",
          "Fokus auf langfristige und nachhaltige Strategien: Je nach Ihren Zielen kann die Immobilie dazu dienen, Mieteinnahmen zu generieren, Ihr Hauptwohnsitz zu werden, oder langfristig solides Vermögen aufzubauen.",
          "Sie lernen, Möglichkeiten einzuordnen und Entscheidungen eigenständig zu treffen"
        ]
      }
    ],
    principlesTitle: "Warum mit uns arbeiten?",
    principles: [
      {
        label: "Klarheit",
        desc: "Wir erklären jeden Schritt einfach und transparent."
      },
      {
        label: "Vertrauen",
        desc: "Wir stellen Ihre Interessen und Ziele in den Mittelpunkt jeder Entscheidung."
      },
      {
        label: "Umfassende Begleitung",
        desc: "Wir bleiben während des gesamten Prozesses an Ihrer Seite, von der ersten Analyse bis zur Umsetzung Ihres Immobilienprojekts."
      }
    ],
    ctaTitle: "Bereit, Ihr Projekt zu starten?",
    bookLabel: "Buchen Sie Ihre erste kostenlose Beratung",
    calendlyUrl: "https://calendly.com/stivmabconsulting/rendez-vous"
  }
};

export default function ServiceImmobilier({ lang = 'fr' }) {
  const location = useLocation();
  const effectiveLang = location.state?.lang || lang;
  return <ServiceDetailPage lang={effectiveLang} icon={Building2} data={data} sceneVariant="immobilier" />;
}
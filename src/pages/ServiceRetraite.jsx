import React from 'react';
import { PiggyBank } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';

const data = {
  fr: {
    back: "← Retour aux services",
    badge: "Pôle Investissement",
    title: "Stratégies patrimoniales et de sécurité pour l'avenir",
    subtitle: "Comprendre une stratégie d'optimisation fiscale",
    intro: "Un élément essentiel de la planification financière est de comprendre les différentes façons de construire et de gérer son patrimoine. Mettre en place une stratégie claire permet d'avoir une orientation à long terme.\n\nL'objectif est que vous puissiez prendre vos décisions de manière consciente, informée et indépendante.",
    sections: [
      {
        title: "Obtenir une orientation",
        content: "Vous obtenez une orientation sur :",
        bullets: [
          "les approches fondamentales de la construction de patrimoine",
          "les aspects liés à la fiscalité en Allemagne",
          "les principes de planification à long terme, y compris l'impact des intérêts composés"
        ]
      },
      {
        title: "Évaluer votre situation",
        content: "Cela vous permet de mieux évaluer :",
        bullets: [
          "comment développer votre situation financière de manière durable",
          "quels facteurs influencent votre stabilité financière à long terme"
        ]
      },
      {
        title: "Stratégies également personnalisées et adaptées aux enfants",
        content: "Sur la base de votre situation personnelle, nous travaillons ensemble pour structurer vos prochaines étapes d'une manière qui correspond à votre calendrier, à votre conscience des risques et à vos possibilités financières.\n\nPour les professionnels mobiles à l'international, la planification transfrontalière joue un rôle important dans la constitution et la gestion efficace du patrimoine.\n\nVous gagnez en clarté sur :",
        bullets: [
          "comment évaluer de manière réaliste et structurer votre situation financière",
          "quels facteurs influencent la construction de patrimoine en Allemagne (ex. impôts, coût de la vie, horizon temporel)",
          "comment définir des priorités pour la stabilité financière à long terme",
          "quelles approches générales existent pour construire un patrimoine durablement et gérer les risques"
        ]
      }
    ],
    ctaTitle: "Sécurisez votre avenir dès aujourd'hui",
    bookLabel: "Réserver votre consultation gratuite",
    calendlyUrl: "https://calendly.com/stivmabconsulting/rendez-vous"
  },
  en: {
    back: "← Back to services",
    badge: "Investment Hub",
    title: "Wealth strategies and future security",
    subtitle: "Understanding a tax optimization strategy",
    intro: "An essential part of financial planning is understanding different ways of building and managing wealth.\n\nSetting up a clear strategy gives you long-term orientation. The goal is for you to make informed and independent decisions.",
    sections: [
      {
        title: "Gaining orientation",
        content: "You gain orientation on:",
        bullets: [
          "fundamental approaches to wealth building",
          "tax-related aspects in Germany",
          "long-term planning principles, including the impact of compound interest"
        ]
      },
      {
        title: "Assessing your situation",
        content: "This allows you to better assess:",
        bullets: [
          "how to develop your financial situation sustainably",
          "which factors influence your long-term financial stability"
        ]
      },
      {
        title: "Strategies also personalized and adapted to children",
        content: "Based on your personal situation, we work together to structure your next steps in a way that aligns with your timeline, your risk awareness, and your financial possibilities.\n\nFor internationally mobile professionals, cross-border planning plays an important role in building and managing wealth effectively.\n\nYou gain clarity on:",
        bullets: [
          "how to realistically assess and structure your financial situation",
          "which factors influence wealth building in Germany (e.g. taxes, cost of living, time horizon)",
          "how to set priorities for long-term financial stability",
          "which general approaches exist to build wealth sustainably and manage risks"
        ]
      }
    ],
    ctaTitle: "Secure your future today",
    bookLabel: "Book your free consultation",
    calendlyUrl: "https://calendly.com/stivmabconsulting/rendez-vous"
  },
  de: {
    back: "← Zurück zu den Dienstleistungen",
    badge: "Investition",
    title: "Vermögensstrategien und Zukunftssicherung",
    subtitle: "Steueroptimierte Vermögensstrategie verstehen",
    intro: "Ein zentraler Bestandteil Ihrer finanziellen Planung ist das Verständnis verschiedener Möglichkeiten des Vermögensaufbaus.\n\nEine klare Strategie aufzubauen gibt Ihnen eine langfristige Orientierung. Ziel ist es, dass Sie Ihre Entscheidungen bewusst, informiert und eigenständig treffen können.",
    sections: [
      {
        title: "Orientierung erhalten",
        content: "Sie erhalten Orientierung zu:",
        bullets: [
          "grundlegenden Strategien des Vermögensaufbaus",
          "steuerlichen Zusammenhängen in Deutschland",
          "langfristigen Planungsansätzen, um vom Zinseszinseffekt zu profitieren"
        ]
      },
      {
        title: "Ihre Situation einschätzen",
        content: "So können Sie besser einschätzen:",
        bullets: [
          "wie Sie Ihr Vermögen nachhaltig entwickeln können",
          "welche Faktoren Ihre finanzielle Zukunft beeinflussen"
        ]
      },
      {
        title: "Individuelle Altersvorsorgestrategien für Sie und Ihre Familie",
        content: "Auf Grundlage Ihrer Situation entwickeln wir gemeinsam eine klare Struktur für Ihre nächsten Schritte, die zu Ihrem Zeitplan, Ihrer Risikobereitschaft und Ihren finanziellen Möglichkeiten passen.\n\nGerade für international mobile Fachkräfte ist eine grenzüberschreitende Planung besonders wichtig, damit Vermögen effizient aufgebaut und verwaltet werden kann.\n\nSie gewinnen Klarheit über:",
        bullets: [
          "Wege, wie Sie Ihre finanzielle Situation realistisch einschätzen und strukturieren",
          "welche Faktoren Ihren Vermögensaufbau in Deutschland tatsächlich beeinflussen (z. B. Steuern, Lebenshaltungskosten, Planungshorizont)",
          "wie Sie Prioritäten setzen, um finanzielle Stabilität und langfristige Sicherheit aufzubauen",
          "welche Rolle langfristige Planung für Ihre Familie und die finanzielle Zukunft Ihrer Kinder spielen kann"
        ]
      }
    ],
    ctaTitle: "Sichern Sie sich heute Ihre Zukunft",
    bookLabel: "Buchen Sie Ihre kostenlose Beratung",
    calendlyUrl: "https://calendly.com/stivmabconsulting/rendez-vous"
  }
};

export default function ServiceRetraite({ lang = 'fr' }) {
  const location = useLocation();
  const effectiveLang = location.state?.lang || lang;
  return <ServiceDetailPage lang={effectiveLang} icon={PiggyBank} data={data} sceneVariant="retraite" />;
}
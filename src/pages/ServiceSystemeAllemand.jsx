import React from 'react';
import { Brain } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';

const data = {
  fr: {
    back: "← Retour aux services",
    badge: "Pôle Intégration",
    title: "Comprendre le système allemand pour une intégration réussie",
    subtitle: "Naviguer avec aisance dans la société allemande",
    intro: "S'installer dans un nouveau pays signifie devoir s'adapter à de nouvelles règles. Le système allemand est reconnu pour sa rigueur et son efficacité, mais il peut paraître complexe et bureaucratique pour les nouveaux arrivants (et même pour ceux qui y vivent depuis un moment).\n\nQue ce soit pour comprendre le fonctionnement des impôts, le système de santé, les assurances obligatoires, les démarches administratives locales ou même les codes culturels en entreprise, une bonne compréhension est la clé d'une vie sereine.\n\nNous vous accompagnons pour déchiffrer ces systèmes, éviter les pièges coûteux et vous permettre de naviguer avec aisance dans la société allemande.",
    sections: [
      {
        title: "Pourquoi un accompagnement sur le système allemand ?",
        bullets: [
          "Éviter les erreurs administratives coûteuses",
          "Comprendre vos droits et obligations (impôts, santé, retraites, etc.)",
          "Vous intégrer plus rapidement dans la vie quotidienne et professionnelle",
          "Gagner du temps et de l'énergie face à la bureaucratie",
          "Démystifier les contrats et les assurances obligatoires"
        ]
      },
      {
        title: "Notre approche",
        content: "Nous ne nous contentons pas de vous donner des informations théoriques. Nous analysons votre situation et vous fournissons des clés concrètes pour que vous puissiez devenir autonome et comprendre comment tirer profit du système allemand pour votre évolution personnelle et professionnelle."
      }
    ],
    ctaTitle: "Facilitez votre vie en Allemagne",
    bookLabel: "Réserver un entretien découverte",
    calendlyUrl: "https://calendly.com/stivmabconsulting/rendez-vous"
  },
  en: {
    back: "← Back to services",
    badge: "Integration Hub",
    title: "Understand the German system for successful integration",
    subtitle: "Navigate German society with ease",
    intro: "Settling in a new country means adapting to new rules. The German system is known for its rigor and efficiency, but it can seem complex and bureaucratic for newcomers (and even for those who have lived there for a while).\n\nWhether it's understanding how taxes work, the healthcare system, mandatory insurance, local administrative procedures or even cultural codes in business, a good understanding is the key to a peaceful life.\n\nWe support you to decipher these systems, avoid costly traps and allow you to navigate German society with ease.",
    sections: [
      {
        title: "Why get support on the German system?",
        bullets: [
          "Avoid costly administrative mistakes",
          "Understand your rights and obligations (taxes, health, pensions, etc.)",
          "Integrate faster into daily and professional life",
          "Save time and energy dealing with bureaucracy",
          "Demystify contracts and mandatory insurance"
        ]
      },
      {
        title: "Our approach",
        content: "We don't just give you theoretical information. We analyze your situation and provide you with concrete keys so that you can become independent and understand how to leverage the German system for your personal and professional growth."
      }
    ],
    ctaTitle: "Make your life easier in Germany",
    bookLabel: "Book a discovery call",
    calendlyUrl: "https://calendly.com/stivmabconsulting/rendez-vous"
  },
  de: {
    back: "← Zurück zu den Dienstleistungen",
    badge: "Integration",
    title: "Das deutsche System verstehen für eine erfolgreiche Integration",
    subtitle: "Sich sicher in der deutschen Gesellschaft bewegen",
    intro: "Sich in einem neuen Land niederzulassen, bedeutet, sich an neue Regeln anzupassen. Das deutsche System ist für seine Strenge und Effizienz bekannt, kann aber für Neuankömmlinge (und sogar für diejenigen, die schon eine Weile dort leben) komplex und bürokratisch erscheinen.\n\nOb es darum geht, Steuern, das Gesundheitssystem, Pflichtversicherungen, lokale Verwaltungsverfahren oder auch kulturelle Codes im Geschäftsleben zu verstehen – ein gutes Verständnis ist der Schlüssel zu einem sorgenfreien Leben.\n\nWir unterstützen Sie dabei, diese Systeme zu entschlüsseln, kostspielige Fallen zu vermeiden und sich sicher in der deutschen Gesellschaft zu bewegen.",
    sections: [
      {
        title: "Warum Begleitung zum deutschen System?",
        bullets: [
          "Teure administrative Fehler vermeiden",
          "Ihre Rechte und Pflichten verstehen (Steuern, Gesundheit, Renten usw.)",
          "Sich schneller in den Alltag und das Berufsleben integrieren",
          "Zeit und Energie im Umgang mit der Bürokratie sparen",
          "Verträge und Pflichtversicherungen entmystifizieren"
        ]
      },
      {
        title: "Unser Ansatz",
        content: "Wir geben Ihnen nicht nur theoretische Informationen. Wir analysieren Ihre Situation und geben Ihnen konkrete Schlüssel an die Hand, damit Sie unabhängig werden und verstehen, wie Sie das deutsche System für Ihre persönliche und berufliche Entwicklung nutzen können."
      }
    ],
    ctaTitle: "Erleichtern Sie sich das Leben in Deutschland",
    bookLabel: "Buchen Sie ein Entdeckungsgespräch",
    calendlyUrl: "https://calendly.com/stivmabconsulting/rendez-vous"
  }
};

export default function ServiceSystemeAllemand({ lang = 'fr' }) {
  const location = useLocation();
  const effectiveLang = location.state?.lang || lang;
  return <ServiceDetailPage lang={effectiveLang} icon={Brain} data={data} sceneVariant="integration" />;
}
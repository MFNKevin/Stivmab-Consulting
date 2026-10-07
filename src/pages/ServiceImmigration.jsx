import React from 'react';
import { Target } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';

const data = {
  fr: {
    back: "← Retour aux services",
    badge: "Pôle Immigration",
    title: "Réussir son projet d’Immigration en Allemagne",
    subtitle: "Un accompagnement pour transformer votre projet en réalité",
    intro: "Chaque année, de nombreuses personnes rêvent de venir en Allemagne pour étudier, travailler, se former ou rejoindre leur famille. Mais dans la réalité, beaucoup se retrouvent confrontées à des procédures administratives complexes, des informations contradictoires et des refus de visa qui auraient pourtant pu être évités.\n\nComprendre les exigences des autorités, préparer un dossier solide et suivre les bonnes étapes peut faire toute la différence entre un projet qui réussit et un projet qui reste bloqué.\n\nC’est précisément pour cela que j’ai mis en place un service d’accompagnement et de coaching personnalisé, afin d’aider celles et ceux qui souhaitent venir en Allemagne à mieux préparer leur projet et maximiser leurs chances de réussite.",
    sections: [
      {
        title: "Un accompagnement pour transformer votre projet en réalité",
        content: "Venir en Allemagne ne se limite pas simplement à déposer une demande de visa. Il s’agit d’un projet de vie qui demande de la préparation, une bonne stratégie et une compréhension claire des démarches à suivre.\n\nÀ travers mon accompagnement, je vous partage mon expérience, mes connaissances et des conseils pratiques pour vous aider à mieux comprendre les démarches, éviter les erreurs fréquentes et avancer avec plus de confiance dans votre projet.\n\nMon objectif est simple : vous aider à comprendre le processus, structurer votre dossier et prendre les bonnes décisions dès le départ.\n\nCet accompagnement repose sur le partage d’expérience, les conseils pratiques et l’orientation stratégique pour vous aider à mieux préparer votre projet d’installation en Allemagne. Chaque situation est différente, et c’est pourquoi l’objectif est de vous apporter des orientations adaptées à votre profil et à votre objectif."
      },
      {
        title: "Pourquoi choisir cet accompagnement ?",
        bullets: [
          "Une expérience concrète des procédures : Je partage des conseils pratiques et des orientations basées sur l’expérience du processus, afin de vous aider à mieux comprendre les exigences et à préparer votre projet de manière stratégique.",
          "Un accompagnement personnalisé : Chaque projet est différent. C’est pourquoi l’accompagnement est adapté à votre situation, votre profil et votre objectif.",
          "Une meilleure préparation de votre dossier : Une préparation claire et structurée augmente vos chances de réussite et vous permet d’aborder les démarches avec plus de sérénité et de confiance."
        ]
      },
      {
        title: "À qui s’adresse cet accompagnement ?",
        content: "Ce service est destiné aux personnes qui souhaitent venir en Allemagne pour :",
        bullets: [
          "Des études universitaires",
          "Une formation professionnelle",
          "Un emploi",
          "Un regroupement familial",
          "Toute personne qui ne sait pas par où commencer",
          "Toute personne qui veut éviter les erreurs dans les démarches",
          "Toute personne qui souhaite comprendre clairement les procédures",
          "Toute personne qui veut préparer un projet solide"
        ]
      }
    ],
    ctaTitle: "Prêt à réussir votre immigration ?",
    bookLabel: "Réserver un entretien découverte",
    calendlyUrl: "https://calendly.com/stivmabconsulting/rendez-vous"
  },
  en: {
    back: "← Back to services",
    badge: "Immigration Hub",
    title: "Succeed in your Immigration project in Germany",
    subtitle: "Support to turn your project into reality",
    intro: "Every year, many people dream of coming to Germany to study, work, train, or join their families. But in reality, many face complex administrative procedures, conflicting information, and visa rejections that could have been avoided.\n\nUnderstanding the authorities' requirements, preparing a solid application, and following the right steps can make all the difference between a successful project and a blocked one.\n\nThis is precisely why I have set up a personalized coaching and support service, to help those who wish to come to Germany better prepare their project and maximize their chances of success.",
    sections: [
      {
        title: "Support to turn your project into reality",
        content: "Coming to Germany is not just about submitting a visa application. It is a life project that requires preparation, a good strategy, and a clear understanding of the steps to follow.\n\nThrough my support, I share my experience, knowledge, and practical advice to help you better understand the procedures, avoid common mistakes, and move forward with more confidence in your project.\n\nMy goal is simple: to help you understand the process, structure your application, and make the right decisions from the start.\n\nThis support is based on experience sharing, practical advice, and strategic guidance to help you better prepare your settlement project in Germany. Each situation is different, and that is why the goal is to provide you with guidance tailored to your profile and your objective."
      },
      {
        title: "Why choose this support?",
        bullets: [
          "Concrete experience of the procedures: I share practical advice and guidance based on experience of the process, to help you better understand the requirements and strategically prepare your project.",
          "Personalized support: Every project is different. That is why the support is tailored to your situation, your profile, and your goal.",
          "Better preparation of your application: Clear and structured preparation increases your chances of success and allows you to approach the procedures with more peace of mind and confidence."
        ]
      },
      {
        title: "Who is this support for?",
        content: "This service is intended for people who wish to come to Germany for:",
        bullets: [
          "University studies",
          "Vocational training",
          "Employment",
          "Family reunification",
          "Anyone who does not know where to start",
          "Anyone who wants to avoid mistakes in the procedures",
          "Anyone who wants to clearly understand the procedures",
          "Anyone who wants to prepare a solid project"
        ]
      }
    ],
    ctaTitle: "Ready to succeed in your immigration?",
    bookLabel: "Book a discovery call",
    calendlyUrl: "https://calendly.com/stivmabconsulting/rendez-vous"
  },
  de: {
    back: "← Zurück zu den Dienstleistungen",
    badge: "Einwanderung",
    title: "Ihr Einwanderungsprojekt in Deutschland erfolgreich umsetzen",
    subtitle: "Eine Begleitung, um Ihr Projekt in die Realität umzusetzen",
    intro: "Jedes Jahr träumen viele Menschen davon, nach Deutschland zu kommen, um zu studieren, zu arbeiten, eine Ausbildung zu machen oder zu ihren Familien zu ziehen. Doch in der Realität sehen sich viele mit komplexen Verwaltungsverfahren, widersprüchlichen Informationen und Visumablehnungen konfrontiert, die hätten vermieden werden können.\n\nDie Anforderungen der Behörden zu verstehen, einen soliden Antrag vorzubereiten und die richtigen Schritte zu befolgen, kann den Unterschied zwischen einem erfolgreichen und einem blockierten Projekt ausmachen.\n\nGenau aus diesem Grund habe ich einen personalisierten Begleitungs- und Coaching-Service eingerichtet, um denjenigen zu helfen, die nach Deutschland kommen möchten, ihr Projekt besser vorzubereiten und ihre Erfolgschancen zu maximieren.",
    sections: [
      {
        title: "Eine Begleitung, um Ihr Projekt in die Realität umzusetzen",
        content: "Nach Deutschland zu kommen, bedeutet nicht nur, einen Visumantrag einzureichen. Es ist ein Lebensprojekt, das Vorbereitung, eine gute Strategie und ein klares Verständnis der zu befolgenden Schritte erfordert.\n\nDurch meine Begleitung teile ich meine Erfahrung, mein Wissen und praktische Ratschläge, um Ihnen zu helfen, die Verfahren besser zu verstehen, häufige Fehler zu vermeiden und mit mehr Zuversicht in Ihrem Projekt voranzukommen.\n\nMein Ziel ist einfach: Ihnen zu helfen, den Prozess zu verstehen, Ihren Antrag zu strukturieren und von Anfang an die richtigen Entscheidungen zu treffen.\n\nDiese Begleitung basiert auf Erfahrungsaustausch, praktischen Ratschlägen und strategischer Orientierung, um Ihnen zu helfen, Ihr Ansiedlungsprojekt in Deutschland besser vorzubereiten. Jede Situation ist anders, und deshalb ist es das Ziel, Ihnen eine auf Ihr Profil und Ihr Ziel zugeschnittene Orientierung zu bieten."
      },
      {
        title: "Warum diese Begleitung wählen?",
        bullets: [
          "Konkrete Erfahrung mit den Verfahren: Ich teile praktische Ratschläge und Orientierungen, die auf der Erfahrung mit dem Prozess basieren, um Ihnen zu helfen, die Anforderungen besser zu verstehen und Ihr Projekt strategisch vorzubereiten.",
          "Personalisierte Begleitung: Jedes Projekt ist anders. Deshalb ist die Begleitung auf Ihre Situation, Ihr Profil und Ihr Ziel zugeschnitten.",
          "Bessere Vorbereitung Ihres Antrags: Eine klare und strukturierte Vorbereitung erhöht Ihre Erfolgschancen und ermöglicht es Ihnen, die Verfahren mit mehr Gelassenheit und Zuversicht anzugehen."
        ]
      },
      {
        title: "An wen richtet sich diese Begleitung?",
        content: "Dieser Service richtet sich an Personen, die nach Deutschland kommen möchten für:",
        bullets: [
          "Universitätsstudium",
          "Berufsausbildung",
          "Beschäftigung",
          "Familienzusammenführung",
          "Jeder, der nicht weiß, wo er anfangen soll",
          "Jeder, der Fehler in den Verfahren vermeiden möchte",
          "Jeder, der die Verfahren klar verstehen möchte",
          "Jeder, der ein solides Projekt vorbereiten möchte"
        ]
      }
    ],
    ctaTitle: "Bereit für Ihre erfolgreiche Einwanderung?",
    bookLabel: "Buchen Sie ein Entdeckungsgespräch",
    calendlyUrl: "https://calendly.com/stivmabconsulting/rendez-vous"
  }
};

export default function ServiceImmigration({ lang = 'fr' }) {
  const location = useLocation();
  const effectiveLang = location.state?.lang || lang;
  return <ServiceDetailPage lang={effectiveLang} icon={Target} data={data} sceneVariant="immigration" />;
}
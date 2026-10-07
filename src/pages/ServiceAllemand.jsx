import React from 'react';
import { Languages } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';

const data = {
  fr: {
    back: "← Retour aux services",
    badge: "Pôle Langue & Intégration",
    title: "Maîtriser la langue allemande en toute confiance – pour la vie quotidienne, les études, le travail en Allemagne",
    subtitle: "Apprendre l’allemand est une étape essentielle pour toute personne souhaitant s’intégrer avec succès en Allemagne.",
    intro: "Que ce soit pour le travail, les études, la formation professionnelle, le regroupement familial ou simplement pour la vie quotidienne, une bonne maîtrise de l’allemand ouvre de nombreuses opportunités et facilite considérablement la vie en Allemagne.\n\nCependant, de nombreux apprenants constatent rapidement que les cours de langue classiques ne suffisent pas toujours à bien comprendre toutes les notions ou à les utiliser avec assurance. C’est précisément là que le soutien personnalisé peut faire toute la différence.\n\nNos cours de soutien en allemand, individuels ou en groupe, vous aident à combler vos lacunes linguistiques, à mieux comprendre la grammaire et à gagner en confiance lorsque vous parlez allemand.\n\nJe vous accompagne à travers les niveaux du Cadre européen commun de référence pour les langues (A1–B2) afin de vous permettre de progresser plus rapidement et d’atteindre vos objectifs linguistiques.",
    sections: [
      {
        title: "À qui s’adresse ce soutien en allemand ?",
        content: "Nos services s’adressent particulièrement à :",
        bullets: [
          "Expats et professionnels internationaux : Les personnes qui travaillent en Allemagne ou souhaitent y construire leur carrière et améliorer leurs compétences en allemand.",
          "Étudiants et candidats aux études : Les personnes qui ont besoin d’un bon niveau d’allemand pour l’université, une formation ou leurs études.",
          "Participants aux cours d’intégration et aux cours de langue : Les apprenants qui suivent déjà un cours d’allemand et qui souhaitent bénéficier d’un accompagnement supplémentaire.",
          "Regroupement familial : Les personnes qui doivent apprendre l’allemand pour faciliter le regroupement familial et leur intégration en Allemagne.",
          "Salariés et apprentis : Les personnes qui souhaitent mieux comprendre et utiliser l’allemand dans leur environnement professionnel."
        ]
      },
      {
        title: "Notre accompagnement pour apprendre l’allemand",
        content: "Cours de soutien personnalisés ou groupés du niveau A1 au niveau B2. Je vous aide à :",
        bullets: [
          "Mieux comprendre la grammaire allemande",
          "Comprendre plus facilement les contenus abordés en cours",
          "Réaliser vos devoirs et exercices efficacement",
          "Éviter les erreurs fréquentes",
          "Progresser plus rapidement",
          "Enrichir votre vocabulaire",
          "Mener des conversations avec plus d’assurance",
          "Utiliser vos connaissances linguistiques dans la vie quotidienne"
        ]
      },
      {
        title: "Pourquoi puis-je vous aider ?",
        content: "Mon parcours avec la langue allemande est avant tout une expérience personnelle et académique solide. J’ai suivi toute ma formation linguistique jusqu’au niveau C1, puis j’ai obtenu le DSH, un examen reconnu qui atteste d’une excellente maîtrise de l’allemand pour les études supérieures en Allemagne.\n\nDurant mon propre apprentissage, j’ai rapidement commencé à accompagner et soutenir plusieurs membres de ma communauté dans leur parcours d’apprentissage de l’allemand. Cette expérience m’a permis de développer une méthode claire, pratique et adaptée aux difficultés que rencontrent souvent les apprenants.\n\nJe suis multilingue (français, anglais et allemand), ce qui me permet de comprendre facilement les défis linguistiques auxquels les apprenants sont confrontés et de les expliquer de manière simple et efficace. Ayant poursuivi mes études en allemand et participé à plusieurs conférences et présentations dans cette langue, j’ai développé une maîtrise solide et pratique de l’allemand, aussi bien dans un contexte académique que professionnel.\n\nAujourd’hui, j’ai déjà accompagné de nombreuses personnes dans leur progression en allemand, en les aidant à mieux comprendre la grammaire, à gagner en confiance à l’oral et à atteindre leurs objectifs linguistiques. En travaillant avec moi, vous bénéficiez non seulement d’un accompagnement personnalisé, mais aussi de l’expérience de quelqu’un qui a lui-même traversé tout le parcours d’apprentissage de l’allemand et qui connaît les méthodes les plus efficaces pour progresser."
      }
    ],
    ctaTitle: "Prêt à maîtriser l'allemand ?",
    bookLabel: "Réserver une séance offerte",
    calendlyUrl: "https://calendly.com/stivmabconsulting/rendez-vous"
  },
  en: {
    back: "← Back to services",
    badge: "Language & Integration Hub",
    title: "Master the German language with confidence – for daily life, studies, and work in Germany",
    subtitle: "Learning German is an essential step for anyone wishing to successfully integrate in Germany.",
    intro: "Whether for work, studies, professional training, family reunification, or simply daily life, a good command of German opens up many opportunities and greatly facilitates life in Germany.\n\nHowever, many learners quickly find that standard language courses are not always enough to fully understand all concepts or use them with confidence. This is precisely where personalized support can make all the difference.\n\nOur German support courses, individual or in groups, help you fill your language gaps, better understand grammar, and gain confidence when speaking German.\n\nI guide you through the levels of the Common European Framework of Reference for Languages (A1–B2) so that you can progress faster and achieve your language goals.",
    sections: [
      {
        title: "Who is this German support for?",
        content: "Our services are particularly aimed at:",
        bullets: [
          "Expats and international professionals: People working in Germany or wishing to build their career and improve their German skills.",
          "Students and university applicants: People who need a good level of German for university, training, or their studies.",
          "Participants in integration and language courses: Learners who are already taking a German course and wish to receive additional support.",
          "Family reunification: People who must learn German to facilitate family reunification and their integration in Germany.",
          "Employees and apprentices: People who wish to better understand and use German in their professional environment."
        ]
      },
      {
        title: "Our support for learning German",
        content: "Personalized or group support courses from level A1 to B2. I help you to:",
        bullets: [
          "Better understand German grammar",
          "Easily understand the content covered in class",
          "Complete your homework and exercises efficiently",
          "Avoid frequent mistakes",
          "Progress more quickly",
          "Enrich your vocabulary",
          "Hold conversations with greater confidence",
          "Use your language skills in daily life"
        ]
      },
      {
        title: "Why can I help you?",
        content: "My journey with the German language is first and foremost a solid personal and academic experience. I completed all my language training up to level C1, then obtained the DSH, a recognized exam that certifies excellent mastery of German for higher education in Germany.\n\nDuring my own learning, I quickly began to accompany and support several members of my community in their German learning journey. This experience allowed me to develop a clear, practical method adapted to the difficulties learners often encounter.\n\nI am multilingual (French, English, and German), which allows me to easily understand the linguistic challenges learners face and explain them simply and effectively. Having pursued my studies in German and participated in several conferences and presentations in this language, I have developed a solid and practical mastery of German, both in an academic and professional context.\n\nToday, I have already supported many people in their progress in German, helping them better understand grammar, gain confidence in speaking, and achieve their language goals. By working with me, you benefit not only from personalized support but also from the experience of someone who has gone through the entire German learning process themselves and knows the most effective methods to progress."
      }
    ],
    ctaTitle: "Ready to master German?",
    bookLabel: "Book a free session",
    calendlyUrl: "https://calendly.com/stivmabconsulting/rendez-vous"
  },
  de: {
    back: "← Zurück zu den Dienstleistungen",
    badge: "Sprache & Integration",
    title: "Deutsch sicher lernen – für Alltag, Studium und Beruf in Deutschland",
    subtitle: "Deutsch zu lernen ist für viele Menschen ein entscheidender Schritt, um sich in Deutschland erfolgreich zu integrieren.",
    intro: "Ob für Arbeit, Studium, Ausbildung, Familienzusammenführung oder den Alltag – gute Deutschkenntnisse eröffnen neue Möglichkeiten und erleichtern das Leben in Deutschland erheblich.\n\nViele Teilnehmer von Deutschkursen merken jedoch schnell, dass der Unterricht im Kurs oft nicht ausreicht, um alle Inhalte vollständig zu verstehen oder sicher anzuwenden. Genau hier kann individuelle Nachhilfe eine große Unterstützung sein.\n\nUnsere individuelle sowie gruppierte Deutsch-Nachhilfe hilft Ihnen dabei, Sprachlücken zu schließen, Grammatik besser zu verstehen und sicherer Deutsch zu sprechen.\n\nIch begleite Sie auf den Sprachniveaus des Gemeinsamen Europäischen Referenzrahmens (A1–C1)., damit Sie schneller Fortschritte machen und Ihre sprachlichen Ziele erreichen können.",
    sections: [
      {
        title: "Für wen ist diese Deutsch-Nachhilfe geeignet?",
        content: "Die Nachhilfeangebote richten sich besonders an:",
        bullets: [
          "Expats und internationale Fachkräfte: Menschen, die in Deutschland arbeiten oder eine Karriere aufbauen möchten und ihre Deutschkenntnisse verbessern wollen.",
          "Studierende und Studienbewerber: Personen, die Ihr Deutsch für Universität, Ausbildung oder Studium benötigen.",
          "Teilnehmer von Integrations- und Sprachkursen: Lernende, die bereits einen Deutschkurs besuchen und zusätzliche Unterstützung brauchen.",
          "Familiennachzug: Menschen, die Deutsch lernen müssen, um Familienzusammenführung oder Integration zu erleichtern.",
          "Arbeitnehmer und Auszubildende: Personen, die Deutsch im Arbeitsalltag besser verstehen und sprechen möchten."
        ]
      },
      {
        title: "Unsere Unterstützung beim Deutschlernen",
        content: "Individuelle Nachhilfe von A1 bis C1. Dabei helfe ich Ihnen:",
        bullets: [
          "Grammatik besser zu verstehen",
          "Inhalte aus dem Unterricht besser zu verstehen",
          "Hausaufgaben und Übungen zu bearbeiten",
          "typische Fehler zu vermeiden",
          "schneller Fortschritte zu machen",
          "Wortschatz zu erweitern",
          "Gespräche sicher zu führen",
          "Ihre Sprachkenntnisse im Alltag anzuwenden"
        ]
      }
    ],
    principlesTitle: "Warum mit uns?",
    principles: [
      {
        label: "Fokus auf praktische Anwendung",
        desc: "Unser Ziel ist nicht nur Theorie, sondern dass Sie Deutsch im Alltag, im Beruf und im Studium sicher verwenden können."
      },
      {
        label: "Verständliche Erklärungen",
        desc: "Komplizierte Grammatik oder schwierige Themen werden Schritt für Schritt erklärt, sodass Sie sie wirklich verstehen und anwenden können."
      },
      {
        label: "Individuelle Betreuung",
        desc: "Jeder Lernende hat ein anderes Tempo und andere Herausforderungen. Deshalb passen wir unsere Unterstützung individuell an Ihr Sprachniveau und Ihre Ziele an."
      }
    ],
    ctaTitle: "Bereit, Deutsch zu meistern?",
    bookLabel: "Kostenlose Sitzung buchen",
    calendlyUrl: "https://calendly.com/stivmabconsulting/rendez-vous"
  }
};

export default function ServiceAllemand({ lang = 'fr' }) {
  const location = useLocation();
  const effectiveLang = location.state?.lang || lang;
  return <ServiceDetailPage lang={effectiveLang} icon={Languages} data={data} sceneVariant="allemand" />;
}
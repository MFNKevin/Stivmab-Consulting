import React from 'react';
import { Briefcase } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';

const data = {
  fr: {
    back: "← Retour aux services",
    badge: "Pôle Business",
    title: "Mentoring Business & Mindset",
    subtitle: "Construire son patrimoine : un choix qui peut transformer votre avenir",
    intro: "Construire un patrimoine n’est pas réservé aux personnes déjà riches ou aux experts de la finance. C’est une démarche accessible à toute personne qui souhaite prendre le contrôle de son avenir financier. D’ailleurs, les personnes riches ou qui ont du succès ont bel et bien commencé quelque part, indépendamment de leur profil.\n\nAlors, que vous soyez étudiant, en formation, jeune professionnel ou simplement quelqu’un qui souhaite mieux comprendre comment gérer et faire évoluer son argent, il est toujours possible de commencer ; tout dépend de votre état d'esprit et de vos choix.\n\nBeaucoup de personnes pensent qu’il faut déjà disposer de grosses sommes pour investir ou construire un patrimoine. En réalité, les grandes réussites financières commencent souvent par de petites décisions prises au bon moment. La décision de se former, planifier et passer à l'action.",
    sections: [
      {
        title: "Le premier investissement que vous puissiez faire, c'est de vous former",
        content: "Même des investissements modestes, mais réguliers, peuvent évoluer et produire des résultats significatifs avec le temps. L’important est d’apprendre à avancer de manière intelligente, progressive et stratégique, en découvrant les options adaptées aux débutants comme les plans d’épargne, certains types d’investissements ou d’autres solutions accessibles."
      },
      {
        title: "Chaque réussite financière commence par une vision claire",
        content: "Que souhaitez-vous réellement accomplir ? Souhaitez-vous constituer une épargne pour plus de sécurité, construire un patrimoine sur le long terme, ou trouver un équilibre entre les deux ? Définissez vos objectifs, car une fois qu'ils sont clairs, il devient beaucoup plus facile de prendre des décisions qui correspondent à votre mode de vie et à vos ambitions.\n\nLe monde économique offre de nombreuses possibilités pour faire évoluer sa situation financière. Encore faut-il savoir les identifier et les comprendre. Que ce soit à travers des investissements, des revenus complémentaires ou certains projets, il existe plusieurs chemins pour faire grandir son patrimoine.\n\nL’objectif est de trouver les opportunités qui correspondent réellement à votre profil, à votre niveau de risque et à vos objectifs personnels. Avec les bonnes informations, les bonnes stratégies et un accompagnement adapté, il devient possible d’avancer avec plus de confiance et de clarté. Souvent, ce sont les petites actions que l’on commence aujourd’hui qui ouvrent les plus grandes portes demain."
      },
      {
        title: "À travers Le programme Mentoring Business & Mindset",
        content: "Pour les personnes ambitieuses qui souhaitent se développer leur carrière professionnelle, créer un projet ou entreprendre avec plus de clarté et de confiance.\n\nCet accompagnement s’adresse notamment à :",
        bullets: [
          "Futurs entrepreneurs souhaitant lancer une activité en Allemagne",
          "Expatriés qui veulent mieux comprendre l’environnement professionnel allemand",
          "Professionnels souhaitant développer leur carrière",
          "Personnes ambitieuses qui souhaitent améliorer leur position professionnelle",
          "Individus souhaitant développer un mindset de réussite et une vision claire de leur avenir"
        ]
      }
    ],
    ctaTitle: "Prêt à transformer votre avenir ?",
    bookLabel: "Réserver un entretien découverte",
    calendlyUrl: "https://calendly.com/stivmabconsulting/rendez-vous"
  },
  en: {
    back: "← Back to services",
    badge: "Business Hub",
    title: "Business & Mindset Mentoring",
    subtitle: "Building your wealth: a choice that can transform your future",
    intro: "Building wealth is not reserved for those who are already wealthy or financial experts. It is an accessible step for anyone who wants to take control of their financial future. Besides, wealthy or successful people have definitely started somewhere, regardless of their background.\n\nSo whether you are a student, in training, a young professional or simply someone who wants to better understand how to manage and grow their money, it is always possible to start; But everything depends on your Mindset and your choices.\n\nMany people think you need to have large sums to invest or build wealth. In reality, major financial successes often start with small decisions made at the right time. The decision to educate yourself, plan and take action.",
    sections: [
      {
        title: "The first investment you can make is to educate yourself",
        content: "Even modest, but regular investments can evolve and produce significant results over time. The important thing is to learn to move forward intelligently, progressively and strategically, discovering options suitable for beginners such as savings plans, certain types of investments or other accessible solutions."
      },
      {
        title: "Every financial success begins with a clear vision",
        content: "What do you really want to achieve? Do you want to build up savings for more security, build wealth over the long term, or find a balance between the two? Define your goals because once they are well defined, it becomes much easier to make decisions that match your lifestyle and ambitions.\n\nThe economic world offers many possibilities to improve your financial situation. But you still need to know how to identify and understand them. Whether through investments, additional income or certain projects, there are several paths to grow your wealth.\n\nThe goal is to find the opportunities that truly match your profile, your risk level and your personal goals. With the right information, the right strategies and appropriate support, it becomes possible to move forward with more confidence and clarity. Often, it is the small actions we start today that open the biggest doors tomorrow."
      },
      {
        title: "Through The Business & Mindset Mentoring program",
        content: "For ambitious people who wish to develop their professional career, create a project or start a business with more clarity and confidence.\n\nThis support is aimed particularly at:",
        bullets: [
          "Future entrepreneurs wishing to launch a business in Germany",
          "Expatriates who want to better understand the German professional environment",
          "Professionals wishing to develop their career",
          "Ambitious people who wish to improve their professional position",
          "Individuals wishing to develop a mindset of success and a clear vision of their future"
        ]
      }
    ],
    ctaTitle: "Ready to transform your future?",
    bookLabel: "Book a discovery call",
    calendlyUrl: "https://calendly.com/stivmabconsulting/rendez-vous"
  },
  de: {
    back: "← Zurück zu den Dienstleistungen",
    badge: "Business",
    title: "Mentoring Business & Mindset",
    subtitle: "Vermögensaufbau: eine Entscheidung, die Ihre Zukunft verändern kann",
    intro: "Der Aufbau von Vermögen ist nicht nur für bereits Reiche oder Finanzexperten reserviert. Es ist ein zugänglicher Schritt für jeden, der die Kontrolle über seine finanzielle Zukunft übernehmen möchte. Im Übrigen haben reiche oder erfolgreiche Menschen definitiv irgendwo angefangen, unabhängig von ihrem Hintergrund.\n\nEgal, ob Sie Student, in der Ausbildung, junger Berufstätiger oder einfach jemand sind, der besser verstehen möchte, wie er sein Geld verwalten und vermehren kann, es ist immer möglich anzufangen; Aber alles hängt von Ihrem Mindset und Ihren Entscheidungen ab.\n\nViele Menschen denken, sie müssten bereits über große Summen verfügen, um zu investieren oder Vermögen aufzubauen. In Wirklichkeit beginnen große finanzielle Erfolge oft mit kleinen Entscheidungen, die zur richtigen Zeit getroffen werden. Die Entscheidung, sich weiterzubilden, zu planen und ins Handeln zu kommen.",
    sections: [
      {
        title: "Die erste Investition, die Sie tätigen können, ist Ihre Bildung",
        content: "Selbst bescheidene, aber regelmäßige Investitionen können sich im Laufe der Zeit entwickeln und signifikante Ergebnisse erzielen. Wichtig ist es, zu lernen, intelligent, schrittweise und strategisch vorzugehen und anfängerfreundliche Optionen wie Sparpläne, bestimmte Arten von Investitionen oder andere zugängliche Lösungen zu entdecken."
      },
      {
        title: "Jeder finanzielle Erfolg beginnt mit einer klaren Vision",
        content: "Was möchten Sie wirklich erreichen? Möchten Sie Ersparnisse für mehr Sicherheit aufbauen, langfristiges Vermögen aufbauen oder ein Gleichgewicht zwischen beiden finden? Definieren Sie Ihre Ziele, denn sobald diese klar definiert sind, wird es viel einfacher, Entscheidungen zu treffen, die Ihrem Lebensstil und Ihren Ambitionen entsprechen.\n\nDie Wirtschaftswelt bietet viele Möglichkeiten, die eigene finanzielle Situation zu verbessern. Man muss sie nur erkennen und verstehen. Ob durch Investitionen, Zusatzeinkommen oder bestimmte Projekte, es gibt mehrere Wege, Ihr Vermögen zu vermehren.\n\nDas Ziel ist es, die Möglichkeiten zu finden, die wirklich Ihrem Profil, Ihrer Risikobereitschaft und Ihren persönlichen Zielen entsprechen. Mit den richtigen Informationen, den richtigen Strategien und der passenden Unterstützung wird es möglich, mit mehr Selbstvertrauen und Klarheit voranzukommen. Oft sind es die kleinen Schritte, die wir heute beginnen, die morgen die größten Türen öffnen."
      },
      {
        title: "Durch das Mentoring Business & Mindset Programm",
        content: "Für ehrgeizige Menschen, die ihre berufliche Karriere entwickeln, ein Projekt aufbauen oder mit mehr Klarheit und Vertrauen ein Unternehmen gründen möchten.\n\nDiese Begleitung richtet sich insbesondere an:",
        bullets: [
          "Zukünftige Unternehmer, die ein Geschäft in Deutschland gründen möchten",
          "Expatriates, die das deutsche Berufsumfeld besser verstehen wollen",
          "Fachkräfte, die ihre Karriere weiterentwickeln möchten",
          "Ehrgeizige Personen, die ihre berufliche Position verbessern möchten",
          "Personen, die ein Erfolgsmindset und eine klare Vision für ihre Zukunft entwickeln möchten"
        ]
      }
    ],
    ctaTitle: "Bereit, Ihre Zukunft zu verändern?",
    bookLabel: "Buchen Sie ein Entdeckungsgespräch",
    calendlyUrl: "https://calendly.com/stivmabconsulting/rendez-vous"
  }
};

export default function ServiceBusiness({ lang = 'fr' }) {
  const location = useLocation();
  const effectiveLang = location.state?.lang || lang;
  return <ServiceDetailPage lang={effectiveLang} icon={Briefcase} data={data} sceneVariant="business" />;
}
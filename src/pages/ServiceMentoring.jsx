import React from 'react';
import { Brain } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import ServiceDetailPage from '@/components/services/ServiceDetailPage';

const data = {
  fr: {
    back: "← Retour aux services",
    badge: "Pôle Immigration & Intégration",
    title: "Construire sa carrière ou devenir indépendant en Allemagne",
    subtitle: "Une stratégie claire et un accompagnement personnalisé",
    intro: "Ensemble, nous élaborons un plan concret qui vous permettra de réaliser vos objectifs professionnels en Allemagne de manière réaliste. Construire un patrimoine n'est pas réservé aux personnes déjà riches ou aux experts de la finance. C'est une démarche accessible à toute personne qui souhaite prendre le contrôle de son avenir financier. D'ailleurs, les personnes riches ou qui ont du succès ont bel et bien commencé quelque part et de façon indépendante de leur profil. Alors que tu sois étudiant, en formation, jeune professionnel ou simplement quelqu'un qui souhaite mieux comprendre comment gérer et faire évoluer son argent, il est toujours possible de commencer. Mais tout dépend de ton Mindset et de tes choix.",
    sections: [
      {
        id: "business",
        title: "Mentoring Business & Mindset : Construire un patrimoine",
        content: "Beaucoup de personnes pensent qu'il faut déjà disposer de grosses sommes pour investir ou construire un patrimoine. En réalité, les grandes réussites financières commencent souvent par de petites décisions prises au bon moment. La décision de se former, planifier et passer à l'action. Le premier investissement que tu puisses faire, c'est de te former. Même des investissements modestes, mais réguliers, peuvent évoluer et produire des résultats significatifs avec le temps. L'important est d'apprendre à avancer de manière intelligente, progressive et stratégique, en découvrant les options adaptées aux débutants comme les plans d'épargne, certains types d'investissements ou d'autres solutions accessibles."
      },
      {
        title: "Chaque réussite financière commence par une vision claire",
        content: "Que souhaites-tu réellement accomplir ? Souhaites-tu constituer une épargne pour plus de sécurité, construire un patrimoine sur le long terme, ou trouver un équilibre entre les deux ? Définis tes objectifs, car une fois qu'ils sont bien définis, il devient beaucoup plus facile de prendre des décisions qui correspondent à ton mode de vie et tes ambitions. Le monde économique offre de nombreuses possibilités pour faire évoluer sa situation financière. Encore faut-il savoir les identifier et les comprendre. Que ce soit à travers des investissements, des revenus complémentaires ou certains projets, il existe plusieurs chemins pour faire grandir son patrimoine. L'objectif est de trouver les opportunités qui correspondent réellement à votre profil, à votre niveau de risque et à vos objectifs personnels. Avec les bonnes informations, les bonnes stratégies et un accompagnement adapté, il devient possible d'avancer avec plus de confiance et de clarté. Souvent, ce sont les petites actions que l'on commence aujourd'hui qui ouvrent les plus grandes portes demain."
      },
      {
        title: "Pour qui est ce programme ?",
        bullets: [
          "Futurs entrepreneurs souhaitant lancer une activité en Allemagne",
          "Expatriés qui veulent mieux comprendre l'environnement professionnel allemand",
          "Professionnels souhaitant développer leur carrière",
          "Personnes ambitieuses qui souhaitent améliorer leur position professionnelle",
          "Individus souhaitant développer un mindset de réussite et une vision claire de leur avenir"
        ]
      },
      {
        id: "systeme-allemand",
        title: "Comprendre le système allemand pour une intégration réussie",
        content: "S'installer dans un nouveau pays signifie devoir s'adapter à de nouvelles règles. Le système allemand est reconnu pour sa rigueur et son efficacité, mais il peut paraître complexe et bureaucratique pour les nouveaux arrivants (et même pour ceux qui y vivent depuis un moment). Que ce soit pour comprendre le fonctionnement des impôts, le système de santé, les assurances obligatoires, les démarches administratives locales ou même les codes culturels en entreprise, une bonne compréhension est la clé d'une vie sereine. Nous vous accompagnons pour déchiffrer ces systèmes, éviter les pièges coûteux et vous permettre de naviguer avec aisance dans la société allemande."
      },
      {
        id: "immigration",
        title: "Réussir son projet d'Immigration en Allemagne",
        content: "Chaque année, de nombreuses personnes rêvent de venir en Allemagne pour étudier, travailler, se former ou rejoindre leur famille. Mais dans la réalité, beaucoup se retrouvent confrontées à des procédures administratives complexes, des informations contradictoires et des refus de visa qui auraient pourtant pu être évités. Comprendre les exigences des autorités, préparer un dossier solide et suivre les bonnes étapes peut faire toute la différence entre un projet qui réussit et un projet qui reste bloqué. C'est précisément pour cela que j'ai mis en place un service d'accompagnement et de coaching personnalisé, afin d'aider celles et ceux qui souhaitent venir en Allemagne à mieux préparer leur projet et maximiser leurs chances de réussite. Venir en Allemagne ne se limite pas simplement à déposer une demande de visa. Il s'agit d'un projet de vie qui demande de la préparation, une bonne stratégie et une compréhension claire des démarches à suivre. À travers mon accompagnement, je vous partage mon expérience, mes connaissances et des conseils pratiques pour vous aider à mieux comprendre les démarches, éviter les erreurs fréquentes et avancer avec plus de confiance dans votre projet."
      },
      {
        title: "À qui s'adresse cet accompagnement immigration ?",
        content: "Ce service est destiné aux personnes qui souhaitent venir en Allemagne pour :",
        bullets: [
          "Des études universitaires",
          "Une formation professionnelle",
          "Un emploi",
          "Un regroupement familial",
          "Toute personne qui ne sait pas par où commencer",
          "Ceux qui veulent éviter les erreurs dans les démarches",
          "Les personnes souhaitant comprendre clairement les procédures",
          "Ceux qui veulent préparer un projet solide"
        ]
      },
      {
        title: "Pourquoi choisir cet accompagnement ?",
        bullets: [
          "Une expérience concrète des procédures — je partage des conseils pratiques et des orientations basées sur l'expérience du processus, afin de vous aider à mieux comprendre les exigences et à préparer votre projet de manière stratégique.",
          "Un accompagnement personnalisé — chaque projet est différent, c'est pourquoi l'accompagnement est adapté à votre situation, votre profil et votre objectif.",
          "Une meilleure préparation de votre dossier — une préparation claire et structurée augmente vos chances de réussite et vous permet d'aborder les démarches avec plus de sérénité et de confiance."
        ]
      }
    ],
    ctaTitle: "Prêt à construire votre avenir ?",
    bookLabel: "Réserver un entretien découverte",
    calendlyUrl: "https://calendly.com/stivmabconsulting/rendez-vous"
  },
  en: {
    back: "← Back to services",
    badge: "Immigration & Integration Hub",
    title: "Build your career or become independent in Germany",
    subtitle: "A clear strategy and personalized support",
    intro: "Together, we develop a concrete plan that will allow you to realistically achieve your professional goals in Germany. Building wealth is not reserved for the already wealthy or financial experts. It is accessible to anyone who wants to take control of their financial future. Wealthy and successful people all started somewhere, independently of their profile. Whether you are a student, in training, a young professional or simply someone who wants to better understand how to manage and grow their money, it is always possible to start. But everything depends on your Mindset and your choices.",
    sections: [
      {
        id: "business",
        title: "Business & Mindset Mentoring: Building wealth",
        content: "Many people think you need large sums to invest or build wealth. In reality, great financial successes often start with small decisions made at the right time. The decision to learn, plan and take action. The first investment you can make is to educate yourself. Even modest but regular investments can produce significant results over time. The key is to move forward in a smart, progressive and strategic way, discovering beginner-friendly options like savings plans, certain types of investments or other accessible solutions."
      },
      {
        title: "Every financial success starts with a clear vision",
        content: "What do you really want to achieve? Do you want to build savings for more security, build long-term wealth, or find a balance between the two? Define your goals, because once they are well defined, it becomes much easier to make decisions that align with your lifestyle and ambitions. The economic world offers many possibilities to improve your financial situation. The key is knowing how to identify and understand them. Whether through investments, additional income or certain projects, there are several paths to growing your wealth. The goal is to find the opportunities that truly match your profile, your risk level and your personal goals. With the right information, the right strategies and the right support, it becomes possible to move forward with more confidence and clarity. Often, the small actions we start today open the biggest doors tomorrow."
      },
      {
        title: "Who is this program for?",
        bullets: [
          "Future entrepreneurs looking to launch a business in Germany",
          "Expats who want to better understand the German professional environment",
          "Professionals looking to develop their career",
          "Ambitious people wanting to improve their professional position",
          "Individuals looking to develop a success mindset and a clear vision of their future"
        ]
      },
      {
        id: "systeme-allemand",
        title: "Understand the German system for successful integration",
        content: "Settling in a new country means adapting to new rules. The German system is known for its rigor and efficiency, but it can seem complex and bureaucratic for newcomers (and even for those who have lived there for a while). Whether it's understanding how taxes work, the healthcare system, mandatory insurance, local administrative procedures or even cultural codes in business, a good understanding is the key to a peaceful life. We support you to decipher these systems, avoid costly traps and allow you to navigate German society with ease."
      },
      {
        id: "immigration",
        title: "Succeeding in your Immigration project to Germany",
        content: "Every year, many people dream of coming to Germany to study, work, train or join their family. But many face complex administrative procedures, contradictory information and avoidable visa rejections. Understanding the authorities' requirements, preparing a solid file and following the right steps can make all the difference between a project that succeeds and one that remains blocked. This is precisely why I have set up a personalized accompaniment and coaching service to help those who want to come to Germany better prepare their project and maximize their chances of success. Coming to Germany is not simply about submitting a visa application. It is a life project that requires preparation, a good strategy and a clear understanding of the steps to follow. Through my support, I share my experience, knowledge and practical advice to help you better understand the procedures, avoid common mistakes and move forward with more confidence in your project."
      },
      {
        title: "Who is this immigration support for?",
        content: "This service is intended for people who wish to come to Germany for:",
        bullets: [
          "University studies",
          "Vocational training",
          "Employment",
          "Family reunification",
          "Anyone who does not know where to start",
          "Those who want to avoid mistakes in the procedures",
          "People who want to clearly understand the procedures",
          "Those who want to prepare a solid project"
        ]
      },
      {
        title: "Why choose this support?",
        bullets: [
          "Concrete experience of the procedures — practical advice and guidance based on first-hand experience of the process, to help you better understand the requirements and prepare your project strategically.",
          "Personalized support — each project is different, which is why the support is adapted to your situation, your profile and your objective.",
          "Better preparation of your application — a clear and structured preparation increases your chances of success and allows you to approach the process with more serenity and confidence."
        ]
      }
    ],
    ctaTitle: "Ready to build your future?",
    bookLabel: "Book a discovery call",
    calendlyUrl: "https://calendly.com/stivmabconsulting/rendez-vous"
  },
  de: {
    back: "← Zurück zu den Dienstleistungen",
    badge: "Einwanderung & Integration",
    title: "Karriere aufbauen oder sich in Deutschland selbstständig machen",
    subtitle: "Eine klare Strategie und persönliche Begleitung",
    intro: "Gemeinsam erarbeiten wir einen konkreten Plan, der es Ihnen ermöglicht, Ihre beruflichen Ziele in Deutschland realistisch zu erreichen. Vermögen aufzubauen ist nicht nur etwas für Reiche oder Finanzexperten. Es ist ein Weg, der jedem offensteht, der die Kontrolle über seine finanzielle Zukunft übernehmen möchte. Reiche und erfolgreiche Menschen haben alle irgendwo angefangen, unabhängig von ihrem Profil. Ob Student, Auszubildender, Berufseinsteiger oder jemand, der besser versteht, wie man Geld verwaltet und wachsen lässt — es ist immer möglich anzufangen. Aber alles hängt von Ihrem Mindset und Ihren Entscheidungen ab.",
    sections: [
      {
        id: "business",
        title: "Business & Mindset Mentoring: Vermögensaufbau",
        content: "Viele denken, man brauche bereits große Summen zum Investieren oder zum Aufbau von Vermögen. Tatsächlich beginnen große finanzielle Erfolge oft mit kleinen Entscheidungen zur richtigen Zeit. Die Entscheidung, sich zu bilden, zu planen und zu handeln. Die erste Investition, die Sie tätigen können, ist Ihre Bildung. Selbst bescheidene, aber regelmäßige Investitionen können langfristig bedeutende Ergebnisse liefern. Der Schlüssel liegt darin, intelligent, schrittweise und strategisch vorzugehen und anfängerfreundliche Optionen wie Sparpläne, bestimmte Arten von Investitionen oder andere zugängliche Lösungen zu entdecken."
      },
      {
        title: "Jeder finanzielle Erfolg beginnt mit einer klaren Vision",
        content: "Was möchten Sie wirklich erreichen? Möchten Sie Ersparnisse für mehr Sicherheit aufbauen, langfristig Vermögen aufbauen oder eine Balance zwischen beidem finden? Definieren Sie Ihre Ziele, denn sobald sie klar definiert sind, wird es viel einfacher, Entscheidungen zu treffen, die zu Ihrem Lebensstil und Ihren Ambitionen passen. Die Wirtschaftswelt bietet viele Möglichkeiten, die finanzielle Situation zu verbessern. Man muss nur wissen, wie man sie erkennt und versteht. Ob durch Investitionen, zusätzliche Einkünfte oder bestimmte Projekte – es gibt verschiedene Wege, sein Vermögen zu steigern. Das Ziel ist es, die Chancen zu finden, die wirklich zu Ihrem Profil, Ihrer Risikobereitschaft und Ihren persönlichen Zielen passen. Mit den richtigen Informationen, den richtigen Strategien und der richtigen Unterstützung wird es möglich, mit mehr Selbstvertrauen und Klarheit voranzukommen. Oft sind es die kleinen Handlungen, die man heute beginnt, die morgen die größten Türen öffnen."
      },
      {
        title: "Für wen ist dieses Programm?",
        bullets: [
          "Zukünftige Unternehmer, die ein Geschäft in Deutschland gründen möchten",
          "Expats, die das deutsche Berufsumfeld besser verstehen wollen",
          "Fachkräfte, die ihre Karriere weiterentwickeln möchten",
          "Ambitionierte Personen, die ihre berufliche Position verbessern wollen",
          "Personen, die ein Erfolgsmindset und eine klare Zukunftsvision entwickeln möchten"
        ]
      },
      {
        id: "systeme-allemand",
        title: "Das deutsche System verstehen für eine erfolgreiche Integration",
        content: "Sich in einem neuen Land niederzulassen, bedeutet, sich an neue Regeln anzupassen. Das deutsche System ist für seine Strenge und Effizienz bekannt, kann aber für Neuankömmlinge (und sogar für diejenigen, die schon eine Weile dort leben) komplex und bürokratisch erscheinen. Ob es darum geht, Steuern, das Gesundheitssystem, Pflichtversicherungen, lokale Verwaltungsverfahren oder auch kulturelle Codes im Geschäftsleben zu verstehen – ein gutes Verständnis ist der Schlüssel zu einem sorgenfreien Leben. Wir unterstützen Sie dabei, diese Systeme zu entschlüsseln, kostspielige Fallen zu vermeiden und sich sicher in der deutschen Gesellschaft zu bewegen."
      },
      {
        id: "immigration",
        title: "Ihr Immigrationsprojekt nach Deutschland erfolgreich umsetzen",
        content: "Jedes Jahr träumen viele davon, zum Studieren, Arbeiten, zur Ausbildung oder für den Familiennachzug nach Deutschland zu kommen. Viele stoßen jedoch auf komplexe Verwaltungsverfahren, widersprüchliche Informationen und vermeidbare Ablehnungen. Die Anforderungen der Behörden zu verstehen, eine solide Akte vorzubereiten und die richtigen Schritte zu befolgen, kann den Unterschied zwischen einem erfolgreichen und einem blockierten Projekt ausmachen. Genau deshalb habe ich einen personalisierten Begleitungs- und Coaching-Service eingerichtet, um denen zu helfen, die nach Deutschland kommen möchten, ihr Projekt besser vorzubereiten und ihre Erfolgschancen zu maximieren. Nach Deutschland zu kommen ist nicht nur eine Visaantragstellung. Es ist ein Lebensprojekt, das Vorbereitung, eine gute Strategie und ein klares Verständnis der zu befolgenden Schritte erfordert. Durch meine Begleitung teile ich meine Erfahrungen, Kenntnisse und praktische Ratschläge, um Ihnen zu helfen, die Verfahren besser zu verstehen, häufige Fehler zu vermeiden und mit mehr Zuversicht in Ihrem Projekt voranzukommen."
      },
      {
        title: "An wen richtet sich diese Einwanderungsbegleitung?",
        content: "Dieser Service richtet sich an Personen, die nach Deutschland kommen möchten für:",
        bullets: [
          "Ein Universitätsstudium",
          "Eine Berufsausbildung",
          "Eine Beschäftigung",
          "Einen Familiennachzug",
          "Alle, die nicht wissen, wo sie anfangen sollen",
          "Wer Fehler in den Verfahren vermeiden möchte",
          "Personen, die die Verfahren klar verstehen möchten",
          "Wer ein solides Projekt vorbereiten möchte"
        ]
      },
      {
        title: "Warum diese Begleitung wählen?",
        bullets: [
          "Konkrete Erfahrung mit den Verfahren — praxisnahe Beratung und Orientierung basierend auf eigener Erfahrung mit dem Prozess, um die Anforderungen besser zu verstehen und das Projekt strategisch vorzubereiten.",
          "Individuelle Betreuung — jedes Projekt ist anders, weshalb die Begleitung an Ihre Situation, Ihr Profil und Ihre Ziele angepasst wird.",
          "Bessere Vorbereitung Ihrer Unterlagen — eine klare und strukturierte Vorbereitung erhöht Ihre Erfolgschancen und ermöglicht es Ihnen, die Verfahren mit mehr Gelassenheit und Zuversicht anzugehen."
        ]
      }
    ],
    ctaTitle: "Bereit, Ihre Zukunft aufzubauen?",
    bookLabel: "Erstgespräch vereinbaren",
    calendlyUrl: "https://calendly.com/stivmabconsulting/rendez-vous"
  }
};

export default function ServiceMentoring({ lang = 'fr' }) {
  const location = useLocation();
  const effectiveLang = location.state?.lang || lang;
  return <ServiceDetailPage lang={effectiveLang} icon={Brain} data={data} sceneVariant="studies" />;
}
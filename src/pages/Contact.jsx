import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { base44 } from '@/api/base44Client';
import { 
  Mail, 
  Phone, 
  Globe, 
  Send,
  ChevronDown,
  MessageSquare,
  CheckCircle,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import ThreeDScene from '@/components/ThreeDScene';

const translations = {
  fr: {
    hero: {
      badge: "Contact",
      title: "Commencez votre parcours en Allemagne avec un accompagnement clair",
      description: "Vous avez des questions ? Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais. Plus vous nous fournirez d’informations, mieux nous pourrons vous aider."
    },
    form: {
      name: "Nom",
      firstName: "Prénom",
      email: "Email",
      phone: "Téléphone (optionnel)",
      country: "Dans quel pays vivez-vous ?",
      situation: "Quelle est votre situation ?",
      situationOptions: [
        "Etudiant",
        "Formation",
        "Travailleur",
        "Sans Emploi"
      ],
      domain: "Dans quel domaine avez-vous besoin d'aide ?",
      domainOptions: [
        "Compréhension langue allemande",
        "Voyager pour l'Allemagne",
        "Création d'entreprise",
        "Investissement en bourse",
        "Immobilier",
        "Stratégies Impôts"
      ],
      message: "Votre message",
      consent: null,
      trust1: "Première évaluation gratuite",
      trust2: "Réponse sous 24 heures",
      trust3: "Accompagnement personnalisé",
      freeConsultation: "La première consultation est gratuite et sans engagement.",
      submit: "Envoyer ma demande",
      sending: "Envoi en cours...",
      success: "Message envoyé avec succès !",
      error: "Une erreur est survenue. Veuillez réessayer.",
      otpTitle: "Vérification de votre adresse email",
      otpDesc: "Un code a été envoyé à votre adresse email. Veuillez le saisir pour valider votre demande.",
      otpPlaceholder: "Code à 6 chiffres",
      verify: "Vérifier",
      otpSending: "Vérification en cours...",
      securityCheck: "Vérification \"vous êtes humain *\""
    },
    info: {
      title: "Informations de contact",
      subtitle: "Vous pouvez également nous contacter directement, nous répondons rapidement et personnellement.",
      email: "Email",
      phone: "Téléphone",
      website: "Site web"
    },
    faq: {
      title: "Questions fréquentes",
      items: [
        {
          question: "Comment se déroule la première consultation ?",
          answer: "Lors du premier rendez-vous, nous prenons le temps de comprendre votre situation et de vous fournir une évaluation claire. Gratuit et sans engagement."
        },
        {
          question: "Quels sont les frais du premier rendez-vous ?",
          answer: "Le premier rendez-vous est sans engagement, et donc gratuit !"
        },
        {
          question: "Quels sont les délais pour obtenir un visa ?",
          answer: "Les délais varient selon le type de visa et votre pays d'origine. Toutefois, il est important de mentionner que seule l'ambassade a le dernier mot. Cependant, nous vous accompagnons pour optimiser ce processus."
        },
        {
          question: "Proposez-vous des services à distance ?",
          answer: "Oui, la majorité de nos services sont disponibles en ligne via visioconférence. Cela nous permet d'accompagner des clients de partout ailleurs."
        },
        {
          question: "Quels sont vos tarifs ?",
          answer: "Nos tarifs dépendent du type d'accompagnement choisi. Contactez-nous et ensemble nous verrons comment vous aider. Le premier rendez-vous est gratuit et sans engagement."
        }
      ]
    }
  },
  en: {
    hero: {
      badge: "Contact",
      title: "Let's talk about your project",
      description: "Do you have questions? Fill out the form below and we will get back to you as soon as possible. The more information you provide, the better we can support you."
    },
    form: {
      name: "Last name",
      firstName: "First name",
      email: "Email",
      phone: "Phone (optional)",
      country: "What is your country of origin?",
      situation: "What is your situation?",
      situationOptions: [
        "Student",
        "Training",
        "Worker",
        "Unemployed"
      ],
      domain: "In which area do you need help?",
      domainOptions: [
        "Understanding German language",
        "Traveling to Germany",
        "Business Creation",
        "Stock Market Investment",
        "Real Estate",
        "Tax Strategies"
      ],
      message: "Your message",
      consent: null,
      trust1: "Free initial assessment",
      trust2: "Response within 24 hours",
      trust3: "Personalized support",
      freeConsultation: "The first consultation is free and without obligation.",
      submit: "Send my free request",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "An error occurred. Please try again.",
      otpTitle: "Email address verification",
      otpDesc: "A code has been sent to your email address. Please enter it to validate your request.",
      otpPlaceholder: "6-digit code",
      verify: "Verify",
      otpSending: "Verifying...",
      securityCheck: "Human verification *"
    },
    info: {
      title: "Contact information",
      subtitle: "You can also contact us directly, we answer quickly and personally.",
      email: "Email",
      phone: "Phone",
      website: "Website"
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          question: "How does the first appointment go?",
          answer: "During the first appointment, we take the time to understand your situation and provide you with a clear assessment. Free and without obligation."
        },
        {
          question: "What are the delays to get a visa?",
          answer: "Delays vary depending on the type of visa and your country of origin. Generally, expect 2 to 6 months. We support you to optimize this process."
        },
        {
          question: "Do you offer remote services?",
          answer: "Yes, most of our services are available online via video conference. This allows us to support clients worldwide."
        },
        {
          question: "What are your rates?",
          answer: "Our rates depend on the type of support chosen. Contact us to receive a free personalized quote."
        }
      ]
    }
  },
  de: {
    hero: {
      badge: "Kontakt",
      title: "Lassen Sie uns über Ihr Projekt sprechen",
      description: "Haben Sie Fragen? Füllen Sie das Formular aus und wir werden uns so schnell wie möglich bei Ihnen melden. Je mehr Informationen Sie angeben, desto besser können wir Sie unterstützen."
    },
    form: {
      name: "Nachname",
      firstName: "Vorname",
      email: "Email",
      phone: "Telefon (optional)",
      country: "Was ist Ihr Herkunftsland?",
      situation: "Was ist Ihre Situation?",
      situationOptions: [
        "Student",
        "Ausbildung",
        "Arbeitnehmer",
        "Arbeitslos"
      ],
      domain: "In welchem Bereich benötigen Sie Hilfe?",
      domainOptions: [
        "Deutsches Sprachverständnis",
        "Reisen nach Deutschland",
        "Unternehmensgründung",
        "Börseninvestition",
        "Immobilien",
        "Steuerstrategien"
      ],
      message: "Ihre Nachricht",
      consent: null,
      trust1: "Kostenlose Ersteinschätzung",
      trust2: "Antwort innerhalb von 24 Stunden",
      trust3: "Persönliche Betreuung",
      freeConsultation: "Die erste Beratung ist kostenlos und unverbindlich.",
      submit: "Meine kostenlose Anfrage senden",
      sending: "Senden...",
      success: "Nachricht erfolgreich gesendet!",
      error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
      otpTitle: "Überprüfung Ihrer E-Mail-Adresse",
      otpDesc: "Ein Code wurde an Ihre E-Mail-Adresse gesendet. Bitte geben Sie diesen ein, um Ihre Anfrage zu bestätigen.",
      otpPlaceholder: "6-stelliger Code",
      verify: "Bestätigen",
      otpSending: "Wird überprüft...",
      securityCheck: "Menschliche Überprüfung *"
    },
    info: {
      title: "Kontaktinformationen",
      subtitle: "Sie können uns auch direkt kontaktieren, wir antworten schnell und persönlich.",
      email: "Email",
      phone: "Telefon",
      website: "Website"
    },
    faq: {
      title: "Häufig gestellte Fragen",
      items: [
        {
          question: "Wie läuft der erste Termin ab?",
          answer: "Beim ersten Termin nehmen wir uns die Zeit, Ihre Situation zu verstehen und Ihnen eine klare Einschätzung zu geben. Kostenlos und unverbindlich."
        },
        {
          question: "Wie lange dauert es, ein Visum zu bekommen?",
          answer: "Die Fristen variieren je nach Visumtyp und Herkunftsland. Im Allgemeinen rechnen Sie mit 2 bis 6 Monaten. Wir unterstützen Sie, diesen Prozess zu optimieren."
        },
        {
          question: "Bieten Sie Ferndienstleistungen an?",
          answer: "Ja, die meisten unserer Dienstleistungen sind online per Videokonferenz verfügbar. Dies ermöglicht uns, Kunden weltweit zu unterstützen."
        },
        {
          question: "Was sind Ihre Preise?",
          answer: "Unsere Preise hängen von der Art der gewählten Begleitung ab. Kontaktieren Sie uns für ein kostenloses, personalisiertes Angebot."
        }
      ]
    }
  }
};

const countries = [
  "Afghanistan", "Afrique du Sud", "Albanie", "Algérie", "Allemagne", "Andorre", "Angola",
  "Arabie Saoudite", "Argentine", "Arménie", "Australie", "Autriche", "Azerbaïdjan",
  "Bahamas", "Bahreïn", "Bangladesh", "Barbade", "Belgique", "Belize", "Bénin",
  "Bhoutan", "Biélorussie", "Birmanie", "Bolivie", "Bosnie-Herzégovine", "Botswana", "Brésil",
  "Brunei", "Bulgarie", "Burkina Faso", "Burundi", "Cambodge", "Cameroun", "Canada",
  "Cap-Vert", "Chili", "Chine", "Chypre", "Colombie", "Comores", "Congo", "Corée du Nord",
  "Corée du Sud", "Costa Rica", "Côte d'Ivoire", "Croatie", "Cuba", "Danemark",
  "Djibouti", "Dominique", "Égypte", "Émirats arabes unis", "Équateur", "Érythrée",
  "Espagne", "Estonie", "Eswatini", "États-Unis", "Éthiopie", "Fidji", "Finlande",
  "France", "Gabon", "Gambie", "Géorgie", "Ghana", "Grèce", "Grenade", "Guatemala",
  "Guinée", "Guinée équatoriale", "Guinée-Bissau", "Guyana", "Haïti", "Honduras",
  "Hongrie", "Inde", "Indonésie", "Irak", "Iran", "Irlande", "Islande", "Israël",
  "Italie", "Jamaïque", "Japon", "Jordanie", "Kazakhstan", "Kenya", "Kirghizistan",
  "Kiribati", "Koweït", "Laos", "Lesotho", "Lettonie", "Liban", "Liberia", "Libye",
  "Liechtenstein", "Lituanie", "Luxembourg", "Macédoine du Nord", "Madagascar", "Malaisie",
  "Malawi", "Maldives", "Mali", "Malte", "Maroc", "Maurice", "Mauritanie", "Mexique",
  "Micronésie", "Moldavie", "Monaco", "Mongolie", "Monténégro", "Mozambique", "Namibie",
  "Nauru", "Népal", "Nicaragua", "Niger", "Nigeria", "Norvège", "Nouvelle-Zélande",
  "Oman", "Ouganda", "Ouzbékistan", "Pakistan", "Palaos", "Panama", "Papouasie-Nouvelle-Guinée",
  "Paraguay", "Pays-Bas", "Pérou", "Philippines", "Pologne", "Portugal", "Qatar",
  "République centrafricaine", "République démocratique du Congo", "République dominicaine",
  "République tchèque", "Roumanie", "Royaume-Uni", "Russie", "Rwanda", "Saint-Kitts-et-Nevis",
  "Saint-Vincent-et-les-Grenadines", "Sainte-Lucie", "Salvador", "Samoa", "Sao Tomé-et-Principe",
  "Sénégal", "Serbie", "Seychelles", "Sierra Leone", "Singapour", "Slovaquie", "Slovénie",
  "Somalie", "Soudan", "Soudan du Sud", "Sri Lanka", "Suède", "Suisse", "Suriname",
  "Syrie", "Tadjikistan", "Tanzanie", "Tchad", "Thaïlande", "Timor oriental", "Togo",
  "Tonga", "Trinité-et-Tobago", "Tunisie", "Turkménistan", "Turquie", "Tuvalu",
  "Ukraine", "Uruguay", "Vanuatu", "Vatican", "Venezuela", "Viêt Nam", "Yémen",
  "Zambie", "Zimbabwe"
];

export default function Contact({ lang = 'fr' }) {
  const t = translations[lang];
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    pays: '',
    situation: '',
    domaine: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [num1, setNum1] = useState(() => Math.floor(Math.random() * 5) + 1);
  const [num2, setNum2] = useState(() => Math.floor(Math.random() * 5) + 1);
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [qualification, setQualification] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [showOtpDialog, setShowOtpDialog] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [expectedOtp, setExpectedOtp] = useState('');
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  
  const handleSendOtp = async () => {
    if (!formData.email) return;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error(lang === 'fr' ? 'Email invalide' : lang === 'de' ? 'Ungültige E-Mail' : 'Invalid email');
      return;
    }
    setIsSendingOtp(true);
    try {
      const res = await base44.functions.invoke('sendOtp', { email: formData.email, lang });
      if (res.data && res.data.success) {
        setExpectedOtp(res.data.otp);
        setShowOtpDialog(true);
        toast.success(lang === 'fr' ? 'Code envoyé !' : lang === 'de' ? 'Code gesendet!' : 'Code sent!');
      } else {
        toast.error(t.form.error);
      }
    } catch (error) {
      toast.error(t.form.error);
    } finally {
      setIsSendingOtp(false);
    }
  };

  const handleVerifyOtp = () => {
    if (otpCode === expectedOtp) {
      setIsEmailVerified(true);
      setShowOtpDialog(false);
      setOtpCode('');
      toast.success(lang === 'fr' ? 'Email vérifié avec succès' : lang === 'de' ? 'E-Mail erfolgreich verifiziert' : 'Email successfully verified');
    } else {
      toast.error(lang === 'fr' ? 'Code incorrect' : lang === 'de' ? 'Falscher Code' : 'Incorrect code');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isEmailVerified) {
      toast.error(lang === 'fr' ? "Veuillez d'abord vérifier votre email." : lang === 'de' ? "Bitte verifizieren Sie zuerst Ihre E-Mail." : "Please verify your email first.");
      return;
    }

    if (parseInt(captchaAnswer) !== num1 + num2) {
      toast.error(lang === 'de' ? 'Falsches Captcha' : lang === 'en' ? 'Incorrect Captcha' : 'Captcha incorrect');
      setNum1(Math.floor(Math.random() * 5) + 1);
      setNum2(Math.floor(Math.random() * 5) + 1);
      setCaptchaAnswer('');
      return;
    }
    
    setIsSubmitting(true);
    
    const fullMessage = `Situation: ${formData.situation}\nDomaine: ${formData.domaine}\nObjectif: ${qualification}\n\nMessage: ${formData.message}`;
    const dataToSubmit = { 
      ...formData, 
      nom: `${formData.prenom} ${formData.nom}`.trim(),
      sujet: formData.domaine,
      message: fullMessage 
    };

    try {
      await base44.entities.ContactMessage.create(dataToSubmit);
      // Envoyer confirmation au client
      await base44.functions.invoke('confirmContact', { ...dataToSubmit, lang });
      
      // Notifier l'administrateur
      await base44.functions.invoke('notifyNewContact', dataToSubmit);
      
      // Enregistrer le consentement légal
      await base44.entities.LegalConsent.create({
        name: `${formData.prenom} ${formData.nom}`.trim(),
        source: "Formulaire de contact",
        details: JSON.stringify({
          "Email": formData.email,
          "Téléphone": formData.telephone || 'Non renseigné',
          "Pays": formData.pays,
          "Situation": formData.situation,
          "Domaine": formData.domaine,
          "Objectif": qualification,
          "Message": formData.message
        })
      });

      setSubmitted(true);
      toast.success(t.form.success);
      setFormData({ nom: '', prenom: '', email: '', telephone: '', pays: '', situation: '', domaine: '', message: '', consent: false });
      setCaptchaAnswer('');
      setQualification('');
      setIsEmailVerified(false);
    } catch (error) {
      toast.error(t.form.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 -top-20">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697fb7ca64330dfe9624d226/a046843c8_Gemini_Generated_Image_miosnrmiosnrmios.png"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/95 via-[#0A1628]/90 to-[#132042]/85" />
        </div>
        
        <ThreeDScene variant="contact" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A84B]/10 border border-[#D4A84B]/20 mb-6">
              <MessageSquare className="w-4 h-4 text-[#D4A84B]" />
              <span className="text-[#D4A84B] text-sm font-medium">{t.hero.badge}</span>
            </span>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {t.hero.title}
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              {t.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form & Info */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="bg-green-50 rounded-3xl p-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A1628] mb-4">{t.form.success}</h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4 justify-between mb-8 pb-6 border-b border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-[#D4A84B]" /> {t.form.trust1}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-[#D4A84B]" /> {t.form.trust2}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-[#D4A84B]" /> {t.form.trust3}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.form.name} *
                      </label>
                      <Input
                        required
                        value={formData.nom}
                        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                        className="h-14 rounded-xl border-gray-200 focus:border-[#D4A84B] focus:ring-[#D4A84B]"
                        onInvalid={(e) => e.target.setCustomValidity(lang === 'fr' ? 'Veuillez remplir ce champ.' : lang === 'de' ? 'Bitte füllen Sie dieses Feld aus.' : 'Please fill out this field.')}
                        onInput={(e) => e.target.setCustomValidity('')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.form.firstName} *
                      </label>
                      <Input
                        required
                        value={formData.prenom}
                        onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                        className="h-14 rounded-xl border-gray-200 focus:border-[#D4A84B] focus:ring-[#D4A84B]"
                        onInvalid={(e) => e.target.setCustomValidity(lang === 'fr' ? 'Veuillez remplir ce champ.' : lang === 'de' ? 'Bitte füllen Sie dieses Feld aus.' : 'Please fill out this field.')}
                        onInput={(e) => e.target.setCustomValidity('')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.form.email} *
                      </label>
                      <div className="flex gap-2">
                        <Input
                          type="email"
                          required
                          disabled={isEmailVerified}
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            setIsEmailVerified(false);
                          }}
                          className="h-14 rounded-xl border-gray-200 focus:border-[#D4A84B] focus:ring-[#D4A84B]"
                          onInvalid={(e) => e.target.setCustomValidity(lang === 'fr' ? 'Veuillez remplir ce champ avec un email valide.' : lang === 'de' ? 'Bitte füllen Sie dieses Feld mit einer gültigen E-Mail-Adresse aus.' : 'Please fill out this field with a valid email.')}
                          onInput={(e) => e.target.setCustomValidity('')}
                        />
                        {!isEmailVerified ? (
                          <Button 
                            type="button" 
                            id="verify-email-btn"
                            onClick={handleSendOtp} 
                            disabled={!formData.email || isSendingOtp}
                            className="h-14 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 whitespace-nowrap rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D4A84B] focus:border-[#D4A84B] outline-none"
                          >
                            {isSendingOtp ? <Loader2 className="w-4 h-4 animate-spin" /> : t.form.verify}
                          </Button>
                        ) : (
                          <div className="h-14 px-4 flex items-center justify-center bg-green-50 text-green-600 rounded-xl border border-green-200">
                            <CheckCircle className="w-5 h-5" />
                          </div>
                        )}
                      </div>
                      {!isEmailVerified && (
                        <p className="text-xs text-gray-500 mt-2">
                          {lang === 'fr' ? 'Nous vérifions votre email pour garantir que nous pouvons vous recontacter.' : lang === 'de' ? 'Wir überprüfen Ihre E-Mail, um sicherzustellen, dass wir Sie kontaktieren können.' : 'We verify your email to ensure we can reach you.'}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.form.phone}
                      </label>
                      <Input
                        value={formData.telephone}
                        onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                        className="h-14 rounded-xl border-gray-200 focus:border-[#D4A84B] focus:ring-[#D4A84B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.form.country} *
                    </label>
                    <Select
                      required
                      value={formData.pays}
                      onValueChange={(value) => setFormData({ ...formData, pays: value })}
                    >
                      <SelectTrigger className="h-14 rounded-xl border-gray-200 focus:border-[#D4A84B] focus:ring-[#D4A84B]">
                        <SelectValue placeholder={t.form.country} />
                      </SelectTrigger>
                      <SelectContent className="max-h-60">
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.form.situation} *
                      </label>
                      <Select
                        required
                        value={formData.situation}
                        onValueChange={(value) => setFormData({ ...formData, situation: value })}
                      >
                        <SelectTrigger className="h-14 rounded-xl border-gray-200 focus:border-[#D4A84B] focus:ring-[#D4A84B]">
                          <SelectValue placeholder={t.form.situation} />
                        </SelectTrigger>
                        <SelectContent>
                          {t.form.situationOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.form.domain} *
                      </label>
                      <Select
                        required
                        value={formData.domaine}
                        onValueChange={(value) => setFormData({ ...formData, domaine: value })}
                      >
                        <SelectTrigger className="h-14 rounded-xl border-gray-200 focus:border-[#D4A84B] focus:ring-[#D4A84B]">
                          <SelectValue placeholder={t.form.domain} />
                        </SelectTrigger>
                        <SelectContent>
                          {t.form.domainOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {lang === 'de' ? 'Was ist Ihr genaues Ziel in Deutschland?' : lang === 'en' ? 'What is your exact goal in Germany?' : 'Quel est votre objectif exact en Allemagne ?'} *
                    </label>
                    <Input
                      required
                      value={qualification}
                      onChange={(e) => setQualification(e.target.value)}
                      placeholder={lang === 'de' ? 'Z.B. Studieren, Arbeiten, Investieren...' : lang === 'en' ? 'E.g. Study, Work, Invest...' : 'Ex: Étudier, Travailler, Investir...'}
                      className="h-14 rounded-xl border-gray-200 focus:border-[#D4A84B] focus:ring-[#D4A84B]"
                      onInvalid={(e) => e.target.setCustomValidity(lang === 'fr' ? 'Veuillez remplir ce champ.' : lang === 'de' ? 'Bitte füllen Sie dieses Feld aus.' : 'Please fill out this field.')}
                      onInput={(e) => e.target.setCustomValidity('')}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.form.message} *
                    </label>
                    <Textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="rounded-xl border-gray-200 focus:border-[#D4A84B] focus:ring-[#D4A84B]"
                      onInvalid={(e) => e.target.setCustomValidity(lang === 'fr' ? 'Veuillez remplir ce champ.' : lang === 'de' ? 'Bitte füllen Sie dieses Feld aus.' : 'Please fill out this field.')}
                      onInput={(e) => e.target.setCustomValidity('')}
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.form.securityCheck} : {num1} + {num2} = ? *
                    </label>
                    <Input
                      required
                      type="number"
                      value={captchaAnswer}
                      onChange={(e) => setCaptchaAnswer(e.target.value)}
                      placeholder="?"
                      className="h-14 w-full sm:w-32 rounded-xl border-gray-200 focus:border-[#D4A84B] focus:ring-[#D4A84B] text-center text-lg"
                      onInvalid={(e) => e.target.setCustomValidity(lang === 'fr' ? 'Veuillez remplir ce champ.' : lang === 'de' ? 'Bitte füllen Sie dieses Feld aus.' : 'Please fill out this field.')}
                      onInput={(e) => e.target.setCustomValidity('')}
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      required
                      type="checkbox"
                      id="consent"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 w-4 h-4 text-[#D4A84B] border-gray-300 rounded focus:ring-[#D4A84B]"
                      onInvalid={(e) => e.target.setCustomValidity(lang === 'fr' ? 'Veuillez cocher cette case.' : lang === 'de' ? 'Bitte kreuzen Sie dieses Kästchen an.' : 'Please check this box.')}
                      onInput={(e) => e.target.setCustomValidity('')}
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      {lang === 'de' ? (
                        <><span className="text-red-500 font-bold">*</span> Ich habe die <Link to="/PolitiqueConfidentialite" className="text-[#D4A84B] hover:underline">Datenschutzerklärung</Link> und das <Link to="/MentionsLegales" className="text-[#D4A84B] hover:underline">Impressum</Link> gelesen und akzeptiere sie.</>
                      ) : lang === 'en' ? (
                        <><span className="text-red-500 font-bold">*</span> I have read the <Link to="/PolitiqueConfidentialite" className="text-[#D4A84B] hover:underline">privacy policy</Link> and the <Link to="/MentionsLegales" className="text-[#D4A84B] hover:underline">legal notice</Link> and I accept them.</>
                      ) : (
                        <><span className="text-red-500 font-bold">*</span> J'ai lu et j'accepte la <Link to="/PolitiqueConfidentialite" className="text-[#D4A84B] hover:underline">politique de confidentialité</Link> et les <Link to="/MentionsLegales" className="text-[#D4A84B] hover:underline">mentions légales</Link>.</>
                      )}
                    </label>
                  </div>

                  {!isEmailVerified && formData.email.length > 5 && (
                    <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-xl text-sm text-orange-800 flex gap-3 items-center">
                      <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shrink-0" />
                      {lang === 'fr' ? 'N\'oubliez pas de cliquer sur "Vérifier" à côté de votre email pour pouvoir envoyer votre demande.' : lang === 'de' ? 'Vergessen Sie nicht, neben Ihrer E-Mail auf "Bestätigen" zu klicken, um Ihre Anfrage senden zu können.' : 'Don\'t forget to click "Verify" next to your email to be able to send your request.'}
                    </div>
                  )}
                  <div className="text-center text-sm font-medium text-gray-600 mt-8 mb-4">
                    {t.form.freeConsultation}
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-[#D4A84B] hover:bg-[#C49A3E] text-[#0A1628] font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={(e) => {
                      if (!isEmailVerified) {
                        e.preventDefault();
                        toast.error(lang === 'fr' ? "Veuillez d'abord vérifier votre email." : lang === 'de' ? "Bitte verifizieren Sie zuerst Ihre E-Mail." : "Please verify your email first.");
                        document.getElementById('verify-email-btn')?.focus();
                      }
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        {t.form.sending}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {t.form.submit}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>



            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-[#0A1628] rounded-3xl p-6 lg:p-10 lg:sticky lg:top-24">
                <h3 className="text-xl font-bold text-white mb-4">{t.info.title}</h3>
                <p className="text-white/70 text-sm mb-8">{t.info.subtitle}</p>
                
                <div className="space-y-6">
                  <a 
                    href="mailto:support@stivmabconsulting.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#D4A84B]/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#D4A84B]" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">{t.info.email}</div>
                      <div className="text-white group-hover:text-[#D4A84B] transition-colors">
                        support@stivmabconsulting.com
                      </div>
                    </div>
                  </a>

                  <a 
                    href="tel:+4915213435560"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#D4A84B]/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#D4A84B]" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">{t.info.phone}</div>
                      <div className="text-white group-hover:text-[#D4A84B] transition-colors">
                        +49 152 13435560
                      </div>
                    </div>
                  </a>

                  <a 
                    href="https://stivmabconsulting.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#D4A84B]/20 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-[#D4A84B]" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">{t.info.website}</div>
                      <div className="text-white group-hover:text-[#D4A84B] transition-colors">
                        stivmabconsulting.com
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#0A1628] text-center mb-12"
          >
            {t.faq.title}
          </motion.h2>

          <div className="space-y-4">
            {t.faq.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-[#0A1628]">{item.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#D4A84B] transition-transform ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Dialog open={showOtpDialog} onOpenChange={setShowOtpDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t.form.otpTitle}</DialogTitle>
            <DialogDescription>
              {t.form.otpDesc}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <Input
              value={otpCode}
              onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
              placeholder={t.form.otpPlaceholder}
              className="text-center text-2xl tracking-[0.5em] font-semibold h-16"
              maxLength={6}
            />
            <Button 
              onClick={handleVerifyOtp}
              disabled={otpCode.length < 6}
              className="w-full h-12 bg-[#D4A84B] hover:bg-[#C49A3E] text-[#0A1628]"
            >
              {t.form.verify}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
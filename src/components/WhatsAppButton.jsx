import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Send } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';

const WA_NUMBER = '4915213435560';

const translations = {
  fr: {
    tooltip: "Discutez avec nous sur WhatsApp 💬",
    captchaError: "Captcha incorrect. Veuillez réessayer.",
    modalTitle: "Vérification avant de discuter",
    modalDesc: "Afin de filtrer les robots et garantir un accompagnement de qualité, veuillez répondre à ces quelques questions.",
    nameLabel: "Nom *",
    namePlaceholder: "Ex: Jean Dupont",
    emailLabel: "E-mail *",
    emailPlaceholder: "Ex: jean@example.com",
    phoneLabel: "Numéro de téléphone *",
    phonePlaceholder: "Ex: +49 152...",
    domainLabel: "Dans quel domaine avez-vous besoin d'aide ? *",
    domainPlaceholder: "Sélectionnez un domaine",
    domainOptions: [
      "Compréhension langue allemande",
      "Voyager pour l'Allemagne",
      "Création d'entreprise",
      "Investissement en bourse",
      "Immobilier",
      "Stratégies Impôts"
    ],
    countryLabel: "Dans quel pays vivez-vous ? *",
    countryPlaceholder: "Ex: Cameroun",
    situationLabel: "Quelle est votre situation ? *",
    situationPlaceholder: "Sélectionnez une situation",
    situationOptions: [
      "Etudiant",
      "Formation",
      "Travailleur",
      "Sans Emploi"
    ],
    captchaLabel: "Vérification",
    legal1: "J'ai lu et j'accepte la ",
    legal2: "politique de confidentialité",
    legal3: " et les ",
    legal4: "mentions légales",
    legalEnd: ".",
    submit: "Accéder à WhatsApp"
  },
  en: {
    tooltip: "Chat with us on WhatsApp 💬",
    captchaError: "Incorrect captcha. Please try again.",
    modalTitle: "Verification before chatting",
    modalDesc: "To filter out bots and guarantee quality support, please answer these few questions.",
    nameLabel: "Name *",
    namePlaceholder: "E.g.: John Doe",
    emailLabel: "Email *",
    emailPlaceholder: "E.g.: john@example.com",
    phoneLabel: "Phone number *",
    phonePlaceholder: "E.g.: +49 152...",
    domainLabel: "In which area do you need help? *",
    domainPlaceholder: "Select an area",
    domainOptions: [
      "Understanding German language",
      "Traveling to Germany",
      "Business Creation",
      "Stock Market Investment",
      "Real Estate",
      "Tax Strategies"
    ],
    countryLabel: "Which country do you live in? *",
    countryPlaceholder: "E.g.: UK",
    situationLabel: "What is your situation? *",
    situationPlaceholder: "Select your situation",
    situationOptions: [
      "Student",
      "Training",
      "Worker",
      "Unemployed"
    ],
    captchaLabel: "Verification",
    legal1: "I have read and accept the ",
    legal2: "privacy policy",
    legal3: " and the ",
    legal4: "legal notice",
    legalEnd: ".",
    submit: "Access WhatsApp"
  },
  de: {
    tooltip: "Chatten Sie mit uns auf WhatsApp 💬",
    captchaError: "Falsches Captcha. Bitte versuchen Sie es erneut.",
    modalTitle: "Überprüfung vor dem Chatten",
    modalDesc: "Um Bots herauszufiltern und einen qualitativ hochwertigen Support zu gewährleisten, beantworten Sie bitte diese wenigen Fragen.",
    nameLabel: "Name *",
    namePlaceholder: "Z.B.: Max Mustermann",
    emailLabel: "E-Mail *",
    emailPlaceholder: "Z.B.: max@example.com",
    phoneLabel: "Telefonnummer *",
    phonePlaceholder: "Z.B.: +49 152...",
    domainLabel: "In welchem Bereich benötigen Sie Hilfe? *",
    domainPlaceholder: "Bereich auswählen",
    domainOptions: [
      "Deutsches Sprachverständnis",
      "Reisen nach Deutschland",
      "Unternehmensgründung",
      "Börseninvestition",
      "Immobilien",
      "Steuerstrategien"
    ],
    countryLabel: "In welchem Land leben Sie? *",
    countryPlaceholder: "Z.B.: Deutschland",
    situationLabel: "Was ist Ihre Situation? *",
    situationPlaceholder: "Situation auswählen",
    situationOptions: [
      "Student",
      "Ausbildung",
      "Arbeitnehmer",
      "Arbeitslos"
    ],
    captchaLabel: "Überprüfung",
    legal1: "Ich habe die ",
    legal2: "Datenschutzerklärung",
    legal3: " und das ",
    legal4: "Impressum",
    legalEnd: " gelesen und akzeptiert.",
    submit: "WhatsApp öffnen"
  }
};

export default function WhatsAppButton({ lang = 'fr' }) {
  const t = translations[lang] || translations.fr;
  const [tooltip, setTooltip] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    domain: '',
    country: '',
    situation: '',
    captcha: '',
    consent: false
  });

  const openModal = () => {
    setNum1(Math.floor(Math.random() * 5) + 1);
    setNum2(Math.floor(Math.random() * 5) + 1);
    setFormData({ name: '', email: '', phone: '', domain: '', country: '', situation: '', captcha: '', consent: false });
    setIsOpen(true);
    setTooltip(false);
  };

  const handleWhatsAppRedirect = async (e) => {
    e.preventDefault();
    if (parseInt(formData.captcha) !== num1 + num2) {
      alert(t.captchaError);
      setNum1(Math.floor(Math.random() * 5) + 1);
      setNum2(Math.floor(Math.random() * 5) + 1);
      setFormData(prev => ({ ...prev, captcha: '' }));
      return;
    }

    try {
      // Enregistrer le consentement légal
      await base44.entities.LegalConsent.create({
        name: formData.name,
        source: "Bouton WhatsApp",
        details: JSON.stringify({
          "Email": formData.email,
          "Téléphone": formData.phone,
          "Pays": formData.country,
          "Situation": formData.situation,
          "Domaine": formData.domain
        })
      });
      // Enregistrer comme message de contact dans la BD pour le panel Admin
      await base44.entities.ContactMessage.create({
        nom: formData.name,
        email: formData.email,
        telephone: formData.phone,
        pays: formData.country,
        sujet: `WhatsApp - ${formData.domain}`,
        message: `Contact via WhatsApp.\nSituation: ${formData.situation}\nDomaine: ${formData.domain}`,
        consent: formData.consent,
        status: 'nouveau'
      });
    } catch (err) {
      console.error("Erreur sauvegarde BD", err);
    }

    const message = `Bonjour, je m'appelle ${formData.name}.
Email: ${formData.email}
Téléphone: ${formData.phone}
Pays: ${formData.country}
Situation: ${formData.situation}
Domaine: ${formData.domain}

Je souhaite en savoir plus sur vos services.`;
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="relative bg-white rounded-2xl shadow-xl px-4 py-3 text-sm text-[#0A1628] font-medium max-w-[180px] text-center border border-gray-100"
          >
            {t.tooltip}
            <button
              onClick={() => setTooltip(false)}
              className="absolute -top-2 -right-2 w-5 h-5 bg-gray-400 hover:bg-gray-500 rounded-full flex items-center justify-center"
            >
              <X className="w-3 h-3 text-white" />
            </button>
            {/* Arrow */}
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={openModal}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
        className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center cursor-pointer"
        style={{ backgroundColor: '#25D366' }}
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.button>
    </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#25D366]" />
              {t.modalTitle}
            </DialogTitle>
            <DialogDescription>
              {t.modalDesc}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleWhatsAppRedirect} className="space-y-4 mt-4 max-h-[60vh] overflow-y-auto px-1 pb-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.nameLabel}</label>
              <Input
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                placeholder={t.namePlaceholder}
                onInvalid={(e) => e.target.setCustomValidity(lang === 'fr' ? 'Veuillez remplir ce champ.' : lang === 'de' ? 'Bitte füllen Sie dieses Feld aus.' : 'Please fill out this field.')}
                onInput={(e) => e.target.setCustomValidity('')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.emailLabel}</label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                placeholder={t.emailPlaceholder}
                onInvalid={(e) => e.target.setCustomValidity(lang === 'fr' ? 'Veuillez remplir ce champ.' : lang === 'de' ? 'Bitte füllen Sie dieses Feld aus.' : 'Please fill out this field.')}
                onInput={(e) => e.target.setCustomValidity('')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.phoneLabel}</label>
              <Input
                required
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                placeholder={t.phonePlaceholder}
                onInvalid={(e) => e.target.setCustomValidity(lang === 'fr' ? 'Veuillez remplir ce champ.' : lang === 'de' ? 'Bitte füllen Sie dieses Feld aus.' : 'Please fill out this field.')}
                onInput={(e) => e.target.setCustomValidity('')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.domainLabel}</label>
              <Select
                required
                value={formData.domain}
                onValueChange={value => setFormData({ ...formData, domain: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t.domainPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  {t.domainOptions.map((option, idx) => (
                    <SelectItem key={idx} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.countryLabel}</label>
              <Input
                required
                value={formData.country}
                onChange={e => setFormData({ ...formData, country: e.target.value })}
                placeholder={t.countryPlaceholder}
                onInvalid={(e) => e.target.setCustomValidity(lang === 'fr' ? 'Veuillez remplir ce champ.' : lang === 'de' ? 'Bitte füllen Sie dieses Feld aus.' : 'Please fill out this field.')}
                onInput={(e) => e.target.setCustomValidity('')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.situationLabel}</label>
              <Select
                required
                value={formData.situation}
                onValueChange={value => setFormData({ ...formData, situation: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t.situationPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  {t.situationOptions.map((option, idx) => (
                    <SelectItem key={idx} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.captchaLabel} : {num1} + {num2} = ? *</label>
              <Input
                required
                type="number"
                value={formData.captcha}
                onChange={e => setFormData({ ...formData, captcha: e.target.value })}
                placeholder="?"
                className="w-24"
                onInvalid={(e) => e.target.setCustomValidity(lang === 'fr' ? 'Veuillez remplir ce champ.' : lang === 'de' ? 'Bitte füllen Sie dieses Feld aus.' : 'Please fill out this field.')}
                onInput={(e) => e.target.setCustomValidity('')}
              />
            </div>
            <div className="flex items-start gap-2 pt-2">
              <input
                required
                type="checkbox"
                id="wa-consent"
                checked={formData.consent}
                onChange={e => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1 w-4 h-4 text-[#D4A84B] border-gray-300 rounded"
                onInvalid={(e) => e.target.setCustomValidity(lang === 'fr' ? 'Veuillez cocher cette case.' : lang === 'de' ? 'Bitte kreuzen Sie dieses Kästchen an.' : 'Please check this box.')}
                onInput={(e) => e.target.setCustomValidity('')}
              />
              <label htmlFor="wa-consent" className="text-xs text-gray-600 leading-tight">
                <span className="text-red-500 font-bold">*</span> {t.legal1}<Link to="/PolitiqueConfidentialite" onClick={() => setIsOpen(false)} className="text-[#D4A84B] hover:underline">{t.legal2}</Link>{t.legal3}<Link to="/MentionsLegales" onClick={() => setIsOpen(false)} className="text-[#D4A84B] hover:underline">{t.legal4}</Link>{t.legalEnd}
              </label>
            </div>
            <div className="pt-4 flex justify-end">
              <Button type="submit" className="bg-[#25D366] hover:bg-[#128C7E] text-white w-full">
                <Send className="w-4 h-4 mr-2" />
                {t.submit}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
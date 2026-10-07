import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  { id: 'ServiceImmigration', name: 'Pôle Immigration' },
  { id: 'ServiceSystemeAllemand', name: 'Système Allemand' },
  { id: 'ServiceAllemand', name: 'Langue (Allemand)' },
  { id: 'ServiceImmobilier', name: 'Investissement Immobilier' },
  { id: 'ServiceRetraite', name: 'Investissement Retraite' },
  { id: 'ServiceBusiness', name: 'Business & Mindset' },
  { id: 'ServiceMentoring', name: 'Mentoring' },
];

export default function AdminQRCodes() {
  const handleDownload = async (serviceId, name) => {
    try {
      const url = typeof window !== 'undefined' ? window.location.origin + '/' + serviceId : '';
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&color=0A1628&data=${encodeURIComponent(url)}`;
      
      const response = await fetch(qrUrl);
      const blob = await response.blob();
      const objectUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = objectUrl;
      link.download = `QR_Code_${name.replace(/[^a-zA-Z0-9]/g, '_')}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(objectUrl);
    } catch (err) {
      console.error("Erreur lors du téléchargement", err);
      alert("Erreur lors du téléchargement. Veuillez réessayer.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#0A1628] mb-6">QR Codes des Services</h1>
      <p className="text-gray-600 mb-8">
        Téléchargez les QR codes en très haute résolution (1000x1000 pixels) pour vos flyers et supports de communication. Le format téléchargé est prêt pour l'impression.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <div key={service.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
            <h2 className="font-semibold text-lg mb-4 text-center">{service.name}</h2>
            <img 
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=0A1628&data=${encodeURIComponent(typeof window !== 'undefined' ? window.location.origin + '/' + service.id : '')}`}
              alt={`QR Code ${service.name}`}
              className="w-32 h-32 mb-6"
            />
            <Button 
              onClick={() => handleDownload(service.id, service.name)}
              className="w-full bg-[#0A1628] hover:bg-[#0A1628]/90 text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Télécharger (Haute Qualité)
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
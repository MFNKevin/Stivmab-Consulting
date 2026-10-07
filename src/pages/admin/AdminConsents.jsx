import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Search, ShieldCheck, ShieldAlert } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function AdminConsents() {
  const [consents, setConsents] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchConsents = async () => {
      try {
        const data = await base44.entities.LegalConsent.list('-created_date', 500);
        setConsents(data);
      } catch(e) {}
    };
    fetchConsents();
  }, []);

  const filtered = consents.filter(c => 
    c.name?.toLowerCase().includes(search.toLowerCase()) || 
    c.details?.toLowerCase().includes(search.toLowerCase())
  );

  const renderDetails = (detailsStr) => {
    if (!detailsStr) return null;
    let details = {};
    try {
      details = JSON.parse(detailsStr);
    } catch (e) {
      detailsStr.split(', ').forEach(part => {
        const [k, ...v] = part.split(': ');
        if (k && v.length) details[k] = v.join(': ');
      });
      if (Object.keys(details).length === 0) return <div className="text-sm text-gray-600 whitespace-pre-wrap">{detailsStr}</div>;
    }
    return (
      <div className="flex flex-col gap-1.5 bg-white p-3 rounded-xl border border-gray-100 shadow-sm w-full max-w-sm">
        {Object.entries(details).map(([key, value]) => (
          <div key={key} className="flex flex-col text-xs">
            <span className="font-bold text-gray-400 uppercase tracking-wider mb-0.5">{key}</span>
            <span className="text-gray-800 font-medium whitespace-pre-wrap">{value}</span>
          </div>
        ))}
      </div>
    );
  };

  const handleRevoke = async (consent) => {
    if (window.confirm("Êtes-vous sûr de vouloir enregistrer la résiliation de ce consentement ? (Cette action est réversible, mais la résiliation restera dans l'historique d'audit)")) {
      const now = new Date().toISOString();
      try {
        await base44.entities.LegalConsent.update(consent.id, {
          status: 'resilie',
          revocation_date: now
        });
        
        await base44.entities.AuditLog.create({
          entity_type: 'LegalConsent',
          entity_id: consent.id,
          action: 'Résiliation Consentement',
          old_value: consent.status || 'actif',
          new_value: 'resilie',
          details: `Résiliation du consentement de ${consent.name}`
        });

        setConsents(consents.map(c => c.id === consent.id ? { ...c, status: 'resilie', revocation_date: now } : c));
      } catch (error) {
        console.error("Erreur lors de la résiliation", error);
      }
    }
  };

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#0A1628]">Consentements Légaux</h1>
        <p className="text-gray-500 mt-1">Suivi des acceptations de politiques et conditions (conformité RGPD).</p>
      </div>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input placeholder="Rechercher un consentement..." value={search} onChange={e => setSearch(e.target.value)} className="pl-10 max-w-md h-12 rounded-xl border-gray-200" />
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50/80 border-b border-gray-200 text-gray-500 font-medium">
              <tr>
                <th className="px-6 py-4 whitespace-nowrap">Nom de l'utilisateur</th>
                <th className="px-6 py-4 whitespace-nowrap">Source d'acquisition</th>
                <th className="px-6 py-4">Informations de contact</th>
                <th className="px-6 py-4 whitespace-nowrap">Date de consentement</th>
                <th className="px-6 py-4 whitespace-nowrap">Statut actuel</th>
                <th className="px-6 py-4 whitespace-nowrap text-right">Actions de gestion</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                    <ShieldAlert className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-900">Aucun consentement trouvé</p>
                    <p className="text-sm mt-1">Modifiez vos critères de recherche ou attendez de nouvelles soumissions.</p>
                  </td>
                </tr>
              ) : (
                filtered.map(c => (
                  <tr key={c.id} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-6 py-5 font-bold text-gray-900 whitespace-nowrap">{c.name}</td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <span className="inline-flex px-3 py-1.5 bg-[#D4A84B]/10 text-[#C49A3E] border border-[#D4A84B]/20 rounded-lg text-xs font-semibold">
                        {c.source}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-gray-600 min-w-[250px] leading-relaxed">
                      {renderDetails(c.details)}
                    </td>
                    <td className="px-6 py-5 text-gray-500 whitespace-nowrap font-medium">
                      {new Date(c.created_date).toLocaleString('fr-FR', {
                        day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
                      })}
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      {(!c.status || c.status === 'actif') ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 border border-green-200 rounded-lg text-xs font-bold">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          Actif
                        </span>
                      ) : (
                        <div className="flex flex-col gap-1">
                          <span className="inline-flex items-center gap-1.5 w-fit px-3 py-1.5 bg-red-50 text-red-700 border border-red-200 rounded-lg text-xs font-bold">
                            <ShieldAlert className="w-3.5 h-3.5" />
                            Résilié
                          </span>
                          {c.revocation_date && (
                            <span className="text-xs text-gray-500 font-medium">
                              le {new Date(c.revocation_date).toLocaleString('fr-FR', {
                                day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
                              })}
                            </span>
                          )}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap text-right">
                      {(!c.status || c.status === 'actif') ? (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleRevoke(c)} 
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
                        >
                          Résilier
                        </Button>
                      ) : (
                        <span className="text-sm text-gray-400 italic">Action révoquée</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
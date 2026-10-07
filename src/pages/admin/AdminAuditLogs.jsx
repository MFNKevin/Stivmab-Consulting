import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Clock, Search, Activity } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function AdminAuditLogs() {
  const [logs, setLogs] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const data = await base44.entities.AuditLog.list('-created_date', 500);
        setLogs(data);
      } catch(e) {}
    };
    fetchLogs();
  }, []);

  const filtered = logs.filter(log => 
    log.action?.toLowerCase().includes(search.toLowerCase()) || 
    log.details?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#0A1628]">Historique des Actions (Audit)</h1>
        <p className="text-gray-500 mt-1">Traçabilité stricte : chaque changement dans le système est enregistré et consultable.</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input placeholder="Rechercher une action ou un détail..." value={search} onChange={e => setSearch(e.target.value)} className="pl-10 max-w-md h-12 rounded-xl border-gray-200" />
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50/80 border-b border-gray-200 text-gray-500 font-medium">
              <tr>
                <th className="px-6 py-4 whitespace-nowrap">Horodatage</th>
                <th className="px-6 py-4 whitespace-nowrap">Type d'Action</th>
                <th className="px-6 py-4">Utilisateur / Contexte</th>
                <th className="px-6 py-4 whitespace-nowrap text-center">Valeur Initiale</th>
                <th className="px-6 py-4 whitespace-nowrap text-center">Nouvelle Valeur</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                    <Activity className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-900">Aucun historique trouvé</p>
                    <p className="text-sm mt-1">Affinez votre recherche ou commencez à effectuer des actions.</p>
                  </td>
                </tr>
              ) : (
                filtered.map(log => (
                  <tr key={log.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-5 text-gray-500 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        {new Date(log.created_date).toLocaleString('fr-FR', {
                          day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
                        })}
                      </div>
                    </td>
                    <td className="px-6 py-5 font-bold text-gray-900 whitespace-nowrap">{log.action}</td>
                    <td className="px-6 py-5 text-gray-600 font-medium leading-relaxed max-w-md">{log.details}</td>
                    <td className="px-6 py-5 whitespace-nowrap text-center">
                      <span className="px-3 py-1.5 bg-gray-100/80 border border-gray-200 rounded-lg text-xs font-semibold text-gray-600">
                        {log.old_value || '-'}
                      </span>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap text-center">
                      <span className="px-3 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 rounded-lg text-xs font-bold">
                        {log.new_value || '-'}
                      </span>
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
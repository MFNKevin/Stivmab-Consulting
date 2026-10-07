import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Mail, Phone, Check, Search, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { Input } from '@/components/ui/input';

const STATUS_LABELS = {
  nouveau: { label: 'Nouveau', color: 'bg-blue-100 text-blue-800' },
  lu: { label: 'Lu', color: 'bg-yellow-100 text-yellow-800' },
  traite: { label: 'Traité', color: 'bg-green-100 text-green-800' },
};

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('tous');
  const [expandedId, setExpandedId] = useState(null);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const data = await base44.entities.ContactMessage.list('-created_date', 300);
      setMessages(data);
    } catch (e) { console.error(e); }
    setLoading(false);
  };

  useEffect(() => { fetchMessages(); }, []);

  const updateStatus = async (id, oldStatus, newStatus) => {
    if (oldStatus === newStatus) return;
    try {
      await base44.entities.ContactMessage.update(id, { status: newStatus });
      setMessages(prev => prev.map(m => m.id === id ? { ...m, status: newStatus } : m));
      
      const user = await base44.auth.me();
      await base44.entities.AuditLog.create({
        entity_type: 'ContactMessage',
        entity_id: id,
        action: 'UPDATE_STATUS',
        old_value: oldStatus || 'nouveau',
        new_value: newStatus,
        details: `Modifié par ${user.email}`
      });
    } catch (e) {}
  };

  const filtered = messages.filter(m => {
    const matchStatus = filterStatus === 'tous' || m.status === filterStatus;
    const q = search.toLowerCase();
    const matchSearch = !q || m.nom?.toLowerCase().includes(q) || m.email?.toLowerCase().includes(q) || m.sujet?.toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#0A1628]">Messages & Contacts</h1>
        <p className="text-gray-500 mt-1">Traitez et suivez les demandes clients de la plateforme.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input placeholder="Rechercher..." value={search} onChange={e => setSearch(e.target.value)} className="pl-10 h-12 rounded-xl border-gray-200" />
        </div>
        <div className="flex gap-2 flex-wrap">
          {['tous', 'nouveau', 'lu', 'traite'].map(s => (
            <button key={s} onClick={() => setFilterStatus(s)} className={`px-5 h-12 rounded-xl text-sm font-medium transition-all ${filterStatus === s ? 'bg-[#0A1628] text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}>
              {s === 'tous' ? 'Tous' : STATUS_LABELS[s].label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20 text-gray-400 animate-pulse">
          <Mail className="w-8 h-8 mx-auto mb-3 opacity-50" />
          Chargement des messages...
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
          <Mail className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-900">Aucun message trouvé</h3>
          <p className="text-gray-500 mt-2 max-w-md mx-auto">
            Il n'y a pas de message correspondant à vos critères de recherche ou à ce statut actuel.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((msg) => (
            <div key={msg.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden group">
              <div className="flex items-center gap-4 px-6 py-5 cursor-pointer hover:bg-gray-50/80 transition-colors" onClick={() => {
                setExpandedId(expandedId === msg.id ? null : msg.id);
                if (msg.status === 'nouveau') updateStatus(msg.id, msg.status, 'lu');
              }}>
                <div className={`w-3 h-3 rounded-full shrink-0 shadow-inner ${msg.status === 'nouveau' ? 'bg-blue-500' : msg.status === 'lu' ? 'bg-yellow-400' : 'bg-green-500'}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-[#0A1628] text-lg truncate max-w-[200px] sm:max-w-none">{msg.nom}</span>
                    <span className={`text-xs px-2.5 py-1 rounded-md font-bold tracking-wide uppercase border ${STATUS_LABELS[msg.status || 'nouveau'].color.replace('bg-', 'border-').replace('text-', 'text-')}`}>
                      {STATUS_LABELS[msg.status || 'nouveau'].label}
                    </span>
                  </div>
                  <div className={`text-sm truncate mt-1.5 ${msg.status === 'nouveau' ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>{msg.sujet}</div>
                </div>
                <div className="text-sm font-medium text-gray-400 hidden sm:block">
                  {new Date(msg.created_date).toLocaleString('fr-FR', {
                    day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
                  })}
                </div>
                <div className={`p-2 rounded-full transition-transform ${expandedId === msg.id ? 'bg-gray-100' : 'group-hover:bg-gray-100'}`}>
                  {expandedId === msg.id ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </div>
              </div>
              
              {expandedId === msg.id && (
                <div className="border-t border-gray-200 px-6 py-6 bg-gray-50/50">
                  <div className="grid sm:grid-cols-2 gap-y-5 gap-x-8 mb-6 text-sm bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3"><div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100"><Mail className="w-4 h-4 text-blue-600"/></div><div className="flex flex-col"><span className="text-xs text-gray-400 font-medium">Email</span><a href={`mailto:${msg.email}`} className="font-semibold text-gray-800 hover:text-blue-600">{msg.email}</a></div></div>
                    {msg.telephone && <div className="flex items-center gap-3"><div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center border border-green-100"><Phone className="w-4 h-4 text-green-600"/></div><div className="flex flex-col"><span className="text-xs text-gray-400 font-medium">Téléphone</span><a href={`tel:${msg.telephone}`} className="font-semibold text-gray-800 hover:text-green-600">{msg.telephone}</a></div></div>}
                    <div className="flex items-center gap-3"><div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center border border-orange-100"><MapPin className="w-4 h-4 text-orange-600"/></div><div className="flex flex-col"><span className="text-xs text-gray-400 font-medium">Pays</span><span className="font-semibold text-gray-800">{msg.pays}</span></div></div>
                    <div className="flex items-center gap-3"><div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center border border-purple-100"><Calendar className="w-4 h-4 text-purple-600"/></div><div className="flex flex-col"><span className="text-xs text-gray-400 font-medium">Reçu le</span><span className="font-semibold text-gray-800">{new Date(msg.created_date).toLocaleString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span></div></div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-sm text-gray-700 leading-relaxed border border-gray-200 shadow-sm mb-6 whitespace-pre-wrap">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Contenu du message</h4>
                    {msg.message}
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <div className="flex flex-wrap gap-3">
                      {msg.status !== 'traite' && <button onClick={() => updateStatus(msg.id, msg.status, 'traite')} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-bold transition-all shadow-sm shadow-green-600/20"><Check className="w-4 h-4"/> Marquer comme traité</button>}
                      {msg.status === 'traite' && <button onClick={() => updateStatus(msg.id, msg.status, 'nouveau')} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-gray-600 text-sm font-bold transition-all"><Mail className="w-4 h-4" /> Remettre en nouveau</button>}
                    </div>
                    <a href={`mailto:${msg.email}`} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A1628] hover:bg-gray-800 text-white text-sm font-bold transition-all shadow-sm"><Mail className="w-4 h-4"/> Répondre au client</a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
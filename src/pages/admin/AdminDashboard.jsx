import React, { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { FileCheck, MessageSquare, Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const messages = await base44.entities.ContactMessage.list('-created_date', 1000);
        const consents = await base44.entities.LegalConsent.list('-created_date', 1000);
        const logs = await base44.entities.AuditLog.list('-created_date', 1000);
        
        const last7Days = Array.from({length: 7}).map((_, i) => {
          const d = new Date();
          d.setDate(d.getDate() - i);
          return d.toLocaleDateString('fr-FR', { weekday: 'short' });
        }).reverse();

        const chartData = last7Days.map(day => ({
          name: day,
          messages: messages.filter(m => new Date(m.created_date).toLocaleDateString('fr-FR', { weekday: 'short' }) === day).length,
          consents: consents.filter(c => new Date(c.created_date).toLocaleDateString('fr-FR', { weekday: 'short' }) === day).length,
        }));

        setStats({
          messagesCount: messages.length,
          consentsCount: consents.length,
          logsCount: logs.length,
          chartData
        });
      } catch (e) {
        console.error(e);
      }
    };
    fetchStats();
  }, []);

  if (!stats) return <div className="p-8 text-gray-500">Chargement des statistiques...</div>;

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#0A1628]">Tableau de bord</h1>
        <p className="text-gray-500 mt-1">Gérez les données de votre application en temps réel.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600"><MessageSquare className="w-7 h-7"/></div>
          <div><p className="text-sm font-medium text-gray-500">Messages & Contacts</p><p className="text-3xl font-bold text-[#0A1628] mt-1">{stats.messagesCount}</p></div>
        </motion.div>
        
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600"><FileCheck className="w-7 h-7"/></div>
          <div><p className="text-sm font-medium text-gray-500">Consentements</p><p className="text-3xl font-bold text-[#0A1628] mt-1">{stats.consentsCount}</p></div>
        </motion.div>
        
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600"><Activity className="w-7 h-7"/></div>
          <div><p className="text-sm font-medium text-gray-500">Actions enregistrées</p><p className="text-3xl font-bold text-[#0A1628] mt-1">{stats.logsCount}</p></div>
        </motion.div>
      </div>

      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-[400px]">
        <h2 className="text-lg font-semibold text-[#0A1628] mb-6">Activité des 7 derniers jours</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={stats.chartData} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 13}} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 13}} />
            <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
            <Bar dataKey="messages" name="Contacts" fill="#3b82f6" radius={[4, 4, 0, 0]} maxBarSize={40} />
            <Bar dataKey="consents" name="Consentements" fill="#22c55e" radius={[4, 4, 0, 0]} maxBarSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}
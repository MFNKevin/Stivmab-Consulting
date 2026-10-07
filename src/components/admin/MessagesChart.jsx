import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PERIODS = [
  { key: 'day', label: 'Jour' },
  { key: 'week', label: 'Semaine' },
  { key: 'month', label: 'Mois' },
  { key: 'year', label: 'Année' },
];

function buildChartData(messages, period) {
  const now = new Date();
  const counts = {};

  messages.forEach((m) => {
    if (!m.created_date) return;
    const d = new Date(m.created_date);
    let key = '';

    if (period === 'day') {
      // Dernières 24h par heure
      const diffH = (now - d) / 3600000;
      if (diffH > 24) return;
      key = `${d.getHours()}h`;
    } else if (period === 'week') {
      // Derniers 7 jours
      const diffD = (now - d) / 86400000;
      if (diffD > 7) return;
      key = d.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric' });
    } else if (period === 'month') {
      // Dernier mois par jour
      const diffD = (now - d) / 86400000;
      if (diffD > 30) return;
      key = d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
    } else if (period === 'year') {
      // Dernière année par mois
      const diffM = (now.getFullYear() - d.getFullYear()) * 12 + (now.getMonth() - d.getMonth());
      if (diffM > 12) return;
      key = d.toLocaleDateString('fr-FR', { month: 'short', year: '2-digit' });
    }

    counts[key] = (counts[key] || 0) + 1;
  });

  return Object.entries(counts).map(([name, total]) => ({ name, total }));
}

export default function MessagesChart({ messages }) {
  const [period, setPeriod] = useState('week');
  const data = useMemo(() => buildChartData(messages, period), [messages, period]);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <h2 className="text-[#0A1628] font-semibold text-base">Messages reçus</h2>
        <div className="flex gap-2">
          {PERIODS.map((p) => (
            <button
              key={p.key}
              onClick={() => setPeriod(p.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                period === p.key
                  ? 'bg-[#0A1628] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {data.length === 0 ? (
        <div className="h-48 flex items-center justify-center text-gray-400 text-sm">
          Aucune donnée pour cette période
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#6b7280' }} />
            <YAxis allowDecimals={false} tick={{ fontSize: 11, fill: '#6b7280' }} />
            <Tooltip
              contentStyle={{ borderRadius: '10px', border: '1px solid #e5e7eb', fontSize: '12px' }}
              formatter={(v) => [v, 'Messages']}
            />
            <Bar dataKey="total" fill="#D4A84B" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, FileCheck, ClipboardList, LogOut, Home, QrCode } from 'lucide-react';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { base44 } from '@/api/base44Client';

export default function AdminLayout() {
  const { isLoading, isAdmin, user } = useAdminAuth();
  const location = useLocation();

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500">Chargement sécurisé...</div>;
  }

  if (!isAdmin) return null;

  const handleLogout = async () => {
    localStorage.removeItem('admin_last_activity');
    await base44.auth.logout('/');
  };

  const nav = [
    { name: 'Tableau de bord', path: '/admin', icon: LayoutDashboard },
    { name: 'Messages', path: '/admin/messages', icon: MessageSquare },
    { name: 'Consentements', path: '/admin/consents', icon: FileCheck },
    { name: 'Historique', path: '/admin/audit-logs', icon: ClipboardList },
    { name: 'QR Codes', path: '/admin/qrcodes', icon: QrCode },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Desktop */}
      <aside className="w-64 bg-[#0A1628] text-white flex-col hidden md:flex">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_697c887bb26a4cfccb07f537/dd25a7fb4_logo_light.jpg" className="w-10 h-10 rounded-full border-2 border-[#D4A84B] p-0.5 bg-white" alt="logo"/>
            <span className="font-bold text-lg text-white">StivMab <span className="text-[#D4A84B]">Admin</span></span>
          </div>
          <div className="text-xs text-white/50 truncate pl-1">{user?.email}</div>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {nav.map(item => {
            const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
            return (
              <Link key={item.path} to={item.path} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-sm font-medium ${isActive ? 'bg-[#D4A84B] text-[#0A1628]' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 space-y-2 border-t border-white/10">
          <Link to="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-white/70 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium">
            <Home className="w-5 h-5" /> Retour au site
          </Link>
          <button onClick={handleLogout} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-400 hover:bg-red-400/10 w-full transition-colors text-sm font-medium text-left">
            <LogOut className="w-5 h-5" /> Déconnexion
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden flex flex-col h-screen">
        <div className="md:hidden bg-[#0A1628] p-4 flex items-center justify-between shadow-sm z-10">
          <span className="font-bold text-[#D4A84B]">StivMab Admin</span>
          <button onClick={handleLogout} className="text-white/70"><LogOut className="w-5 h-5" /></button>
        </div>
        <div className="flex-1 overflow-y-auto bg-gray-50/50">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
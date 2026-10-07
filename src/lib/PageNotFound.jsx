import { useLocation, Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function PageNotFound() {
    const location = useLocation();
    const pageName = location.pathname.substring(1);

    const { data: authData, isFetched } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            try {
                const user = await base44.auth.me();
                return { user, isAuthenticated: true };
            } catch {
                return { user: null, isAuthenticated: false };
            }
        }
    });

    return (
        <div className="min-h-screen bg-[#0A1628] flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0f1f3d] to-[#0A1628]" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4A84B]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#4f46e5]/5 rounded-full blur-3xl" />

            <div className="relative max-w-lg w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    {/* 404 Number */}
                    <div>
                        <h1 className="text-[10rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#D4A84B] to-[#D4A84B]/20 select-none">
                            404
                        </h1>
                        <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#D4A84B] to-transparent mx-auto -mt-4" />
                    </div>

                    {/* Message */}
                    <div className="space-y-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">
                            Page introuvable
                        </h2>
                        <p className="text-white/50 text-base leading-relaxed">
                            La page{pageName ? <span className="text-[#D4A84B]/80"> «&nbsp;{pageName}&nbsp;» </span> : ' '} n'existe pas ou a été déplacée.
                        </p>
                    </div>

                    {/* Admin Note */}
                    {isFetched && authData?.isAuthenticated && authData?.user?.role === 'admin' && (
                        <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl text-left">
                            <p className="text-xs font-semibold text-orange-400 mb-1">Note Admin</p>
                            <p className="text-xs text-white/60">
                                Cette page n'a pas encore été implémentée. Demandez à l'IA de la créer.
                            </p>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex items-center justify-center gap-4">
                        <button
                            onClick={() => window.history.back()}
                            className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white/60 border border-white/10 rounded-xl hover:bg-white/5 hover:text-white transition-all"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Retour
                        </button>
                        <Link
                            to="/"
                            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0A1628] bg-[#D4A84B] rounded-xl hover:bg-[#C49A3E] transition-all"
                        >
                            <Home className="w-4 h-4" />
                            Accueil
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
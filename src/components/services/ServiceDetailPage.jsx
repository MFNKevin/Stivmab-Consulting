import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const ThreeDScene = React.lazy(() => import('@/components/ThreeDScene'));

export default function ServiceDetailPage({ lang = 'fr', icon: Icon, data, sceneVariant }) {
  const t = data[lang] || data['fr'];
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-28 sm:pt-36 pb-20 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#D4A84B]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4A84B]/5 rounded-full blur-3xl" />
        </div>
        
        {/* 3D Animation Layer */}
        <React.Suspense fallback={<div className="absolute inset-0 bg-transparent" />}>
          <ThreeDScene variant={sceneVariant || "service"} />
        </React.Suspense>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link
              to="/Services"
              className="inline-flex items-center gap-2 text-white/60 hover:text-[#D4A84B] transition-colors mb-10 text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.back}
            </Link>

            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#D4A84B]/20 flex items-center justify-center shrink-0">
                {Icon && <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#D4A84B]" />}
              </div>
              <div>
                <p className="text-[#D4A84B] font-semibold text-sm uppercase tracking-wider mb-2">{t.badge}</p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
                  {t.title}
                </h1>
                <p className="text-white/70 text-lg mb-6">{t.subtitle}</p>
                
                <a href={t.calendlyUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
                  <Button className="bg-[#D4A84B] hover:bg-[#C49A3E] text-[#0A1628] font-semibold px-6 py-6 rounded-xl group">
                    <Calendar className="w-4 h-4 mr-2" />
                    {t.bookLabel}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      {t.intro && (
        <section className="py-12 bg-[#D4A84B]/5 border-b border-[#D4A84B]/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-700 text-lg leading-relaxed"
            >
              {t.intro}
            </motion.p>
          </div>
        </section>
      )}

      {/* Quote */}
      {t.quote && (
        <section className="py-10 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-l-4 border-[#D4A84B] pl-6 py-2"
            >
              <p className="text-xl text-[#0A1628] font-medium italic">{t.quote}</p>
            </motion.blockquote>
          </div>
        </section>
      )}

      {/* Sections */}
      {t.sections && t.sections.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {t.sections.map((section, idx) => (
              <motion.div
                key={idx}
                id={section.id || `section-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-100 scroll-mt-24"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A1628] mb-4 flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#D4A84B] text-[#0A1628] flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  {section.title}
                </h2>
                {section.content && (
                  <p className="text-gray-600 leading-relaxed mb-4 ml-11">{section.content}</p>
                )}
                {section.bullets && (
                  <ul className="space-y-3 ml-11">
                    {section.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-[#D4A84B] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Principles */}
      {t.principles && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1628] mb-8 text-center">
                {t.principlesTitle}
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {t.principles.map((p, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-2xl p-6 border border-gray-200 text-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#D4A84B]/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-[#D4A84B]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0A1628] mb-2">{p.label}</h3>
                    <p className="text-gray-600 text-sm">{p.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#D4A84B]/20 flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-[#D4A84B]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">{t.ctaTitle}</h2>
            <a href={t.calendlyUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-[#D4A84B] hover:bg-[#C49A3E] text-[#0A1628] font-semibold px-8 h-14 rounded-xl group"
              >
                <Calendar className="w-4 h-4 mr-2" />
                {t.bookLabel}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            {/* QR Code dynamique de la page */}
            <div className="mt-10 flex flex-col items-center justify-center">
              <p className="text-white/50 text-sm mb-3">
                {lang === 'fr' ? 'Scannez ce QR Code pour partager ou consulter sur mobile' : lang === 'en' ? 'Scan this QR Code to share or view on mobile' : 'Scannen Sie diesen QR-Code, um auf dem Handy anzusehen'}
              </p>
              <div className="bg-white p-2.5 rounded-xl shadow-lg">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=0A1628&data=${encodeURIComponent(typeof window !== 'undefined' ? window.location.origin + location.pathname : '')}`} 
                  alt="QR Code du service" 
                  className="w-28 h-28"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-8">
              <Link to="/Services" className="text-white/50 hover:text-white/80 text-sm transition-colors">
                {t.back}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ServiceDetailModal({ service, lang, onClose }) {
  if (!service || !service.details) return null;
  const d = service.details;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 bg-black/70 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-t-2xl sm:rounded-3xl shadow-2xl w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-[#0A1628] rounded-t-2xl sm:rounded-t-3xl p-4 sm:p-6 flex items-start justify-between z-10">
            <div className="flex items-start gap-3 pr-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#D4A84B]/20 flex items-center justify-center shrink-0 mt-0.5">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4A84B]" />
              </div>
              <div>
                <h2 className="text-base sm:text-xl font-bold text-white leading-tight">{service.title}</h2>
                <p className="text-[#D4A84B] text-xs sm:text-sm mt-0.5">{service.subtitle}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors mt-1 shrink-0"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6">
            {/* Intro */}
            {d.intro && (
              <p className="text-gray-700 leading-relaxed text-base">{d.intro}</p>
            )}

            {/* Quote */}
            {d.quote && (
              <blockquote className="border-l-4 border-[#D4A84B] pl-4 italic text-gray-600">
                {d.quote}
              </blockquote>
            )}

            {/* Sections */}
            {d.sections && d.sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-bold text-[#0A1628] mb-2">{section.title}</h3>
                {section.content && (
                  <p className="text-gray-600 leading-relaxed mb-3">{section.content}</p>
                )}
                {section.bullets && (
                  <ul className="space-y-2">
                    {section.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#D4A84B] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Principles */}
            {d.principles && (
              <div>
                <h3 className="text-lg font-bold text-[#0A1628] mb-3">{d.principlesTitle}</h3>
                <div className="space-y-3">
                  {d.principles.map((p, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <span className="font-semibold text-[#0A1628]">{p.label} — </span>
                      <span className="text-gray-600">{p.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="pt-2">
              <a
                href="https://calendly.com/stivmabconsulting/rendez-vous"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-[#D4A84B] hover:bg-[#C49A3E] text-[#0A1628] font-semibold h-12 rounded-xl group">
                  <Calendar className="w-4 h-4 mr-2" />
                  {lang === 'fr' ? 'Réservez votre première consultation sans engagement' :
                   lang === 'en' ? 'Book your first free consultation' :
                   'Erste Beratung ohne Verpflichtung buchen'}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { translations } from '@/lib/legalNoticeData';

export default function MentionsLegales({ lang = 'fr' }) {
  const t = translations[lang] || translations.fr;

  return (
    <main 
      className="pt-20 select-none"
      onContextMenu={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
      onCut={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      <section className="relative pt-24 pb-16 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] to-[#132042]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t.title}</h1>
            <p className="text-white/60 text-lg">{t.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {t.sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="border-l-4 border-[#D4A84B] pl-6"
              >
                <h2 className="text-xl font-bold text-[#0A1628] mb-4">{section.title}</h2>
                <div className="space-y-2">
                  {section.content.map((line, i) => (
                    line ? (
                      <ReactMarkdown 
                        key={i} 
                        className="text-gray-600 leading-relaxed"
                        components={{
                          strong: ({node, ...props}) => <strong className="font-semibold text-gray-900 block mt-4 mb-2" {...props} />,
                          a: ({node, ...props}) => <a className="text-[#D4A84B] hover:underline break-all" target="_blank" rel="noopener noreferrer" {...props} />
                        }}
                      >
                        {line}
                      </ReactMarkdown>
                    ) : (
                      <div key={i} className="h-4"></div>
                    )
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
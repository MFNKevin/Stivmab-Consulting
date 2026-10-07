import React from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { translations } from '@/lib/privacyPolicyData';

export default function PolitiqueConfidentialite({ lang = 'fr' }) {
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
            {t.lastUpdate && <p className="text-[#D4A84B] text-sm mt-3">{t.lastUpdate}</p>}
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
                transition={{ delay: idx * 0.04 }}
                className="border-l-4 border-[#D4A84B] pl-6"
              >
                <h2 className="text-xl font-bold text-[#0A1628] mb-4">{section.title}</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <ReactMarkdown
                    components={{
                      p: ({node, ...props}) => <p className="mb-4 whitespace-pre-wrap" {...props} />,
                      strong: ({node, ...props}) => <strong className="font-semibold text-gray-900" {...props} />,
                      a: ({node, ...props}) => <a className="text-[#D4A84B] hover:underline break-words" target="_blank" rel="noopener noreferrer" {...props} />,
                      em: ({node, ...props}) => <em className="italic" {...props} />,
                      ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-4" {...props} />,
                      ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-4" {...props} />,
                      li: ({node, ...props}) => <li className="mb-1" {...props} />
                    }}
                  >
                    {section.content}
                  </ReactMarkdown>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
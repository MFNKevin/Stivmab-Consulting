import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import PillarsSection from '@/components/home/PillarsSection';
import TrustBadges from '@/components/home/TrustBadges';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

export default function Home({ lang = 'fr' }) {
  return (
    <main>
      <HeroSection lang={lang} />
      <PillarsSection lang={lang} />
      <TrustBadges lang={lang} />
      <TestimonialsSection lang={lang} />
      <CTASection lang={lang} />
    </main>
  );
}
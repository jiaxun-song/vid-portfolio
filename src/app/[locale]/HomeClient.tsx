'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import SplashScreen from '@/components/layout/SplashScreen';
import HeroSection from '@/components/sections/HeroSection';
import WorkingWithAI from '@/components/sections/WorkingWithAI';
import WhatIDo from '@/components/sections/WhatIDo';
import KindWords from '@/components/sections/KindWords';
import CTASection from '@/components/sections/CTASection';
import { allVideos } from '@/data/videos';
import VideoGridCard from '@/components/ui/VideoGridCard';
import GlowButton from '@/components/ui/GlowButton';

export default function HomeClient() {
  const [splashDone, setSplashDone] = useState(false);
  const featured = allVideos
    .filter((v) => v.category === 'short-form')
    .slice(0, 3);
  const tCaseStudy = useTranslations('caseStudy');

  return (
    <>
      <SplashScreen onComplete={() => setSplashDone(true)} />

      <div className="flex flex-col">
        {/* WebGL Hero + Marquee */}
        <HeroSection animationReady={splashDone} />

        {/* Featured videos */}
        {featured.length > 0 && (
          <section className="relative pt-[164px] pb-[var(--section-padding-y)] px-6 md:px-16">
            <div className="mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mb-12"
              >
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-accent-orange" />
                  <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-display)] text-text-primary">
                    Featured
                  </h2>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5 lg:gap-6">
                {featured.map((video, i) => (
                  <VideoGridCard key={video.id} video={video} index={i} />
                ))}
              </div>

              {/* More Projects button (from My PPP) */}
              <div className="flex justify-center mt-[88px]">
                <GlowButton href="/work">{tCaseStudy('moreProjects')}</GlowButton>
              </div>
            </div>
          </section>
        )}

        {/* Working with AI */}
        <WorkingWithAI />

        {/* What I Do */}
        <WhatIDo />

        {/* Kind Words (testimonials) */}
        <KindWords />

        {/* Let's Work Together (CTA) */}
        <CTASection />
      </div>
    </>
  );
}

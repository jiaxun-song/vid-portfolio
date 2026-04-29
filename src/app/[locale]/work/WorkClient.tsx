'use client';

import { useState, useMemo, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { allVideos, type VideoCategory } from '@/data/videos';
import VideoGridCard from '@/components/ui/VideoGridCard';

const TABS: { key: VideoCategory; labelKey: string }[] = [
  { key: 'short-form', labelKey: 'tabs.shortForm' },
  { key: 'product', labelKey: 'tabs.product' },
  { key: 'cover', labelKey: 'tabs.cover' },
];

const VALID_TABS: VideoCategory[] = ['short-form', 'product', 'cover'];

export default function WorkClient() {
  const t = useTranslations('projectsPage');
  const searchParams = useSearchParams();
  const initialTab = (() => {
    const q = searchParams.get('tab');
    return q && (VALID_TABS as string[]).includes(q) ? (q as VideoCategory) : 'short-form';
  })();
  const [activeTab, setActiveTab] = useState<VideoCategory>(initialTab);

  useEffect(() => {
    const q = searchParams.get('tab');
    if (q && (VALID_TABS as string[]).includes(q)) {
      setActiveTab(q as VideoCategory);
    }
  }, [searchParams]);

  const filtered = useMemo(
    () => allVideos.filter((v) => v.category === activeTab),
    [activeTab],
  );

  return (
    <>
      {/* Page Header — Directional hover fill effect */}
      <motion.div
        className="pt-30 mb-12 flex justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="projects-title-wrapper">
          <span className="projects-hover-zone" data-dir="top" />
          <span className="projects-hover-zone" data-dir="right" />
          <span className="projects-hover-zone" data-dir="bottom" />
          <span className="projects-hover-zone" data-dir="left" />
          <h1 className="projects-fill-text" data-text={t('pageTitle')}>
            {t('pageTitle')}
          </h1>
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        className="mx-auto max-w-[1200px] px-5 md:px-8 lg:px-16 mb-12 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          role="tablist"
          aria-label="Project categories"
          className="inline-flex items-center gap-1 p-1.5 rounded-full glass-medium"
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.key)}
                data-cursor-hover
                className={`relative px-5 md:px-7 py-2.5 rounded-full text-sm md:text-[15px] font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-tab-pill"
                    className="absolute inset-0 rounded-full bg-accent/20 border border-accent/40"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{t(tab.labelKey)}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Cards Grid */}
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 lg:px-16 mb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5 lg:gap-6"
          >
            {filtered.length > 0 ? (
              filtered.map((video, i) => (
                <VideoGridCard key={video.id} video={video} index={i} />
              ))
            ) : (
              <div className="md:col-span-6 py-20 text-center text-text-secondary">
                {t('emptyState')}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Background scrolling wall — 12 images (jpg + png mix)
const workImages = [
  '/images/cta/work-01.jpg',
  '/images/cta/work-02.jpg',
  '/images/cta/work-03.jpg',
  '/images/cta/work-04.jpg',
  '/images/cta/work-05.png',
  '/images/cta/work-06.png',
  '/images/cta/work-07.png',
  '/images/cta/work-08.png',
  '/images/cta/work-09.png',
  '/images/cta/work-10.png',
  '/images/cta/work-11.png',
  '/images/cta/work-12.png',
];

// Split into 3 columns for vertical scrolling wall
const columns = [
  workImages.slice(0, 4),
  workImages.slice(4, 8),
  workImages.slice(8, 12),
];

export default function CTASection() {
  const t = useTranslations('cta');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative flex items-center justify-center py-[var(--section-padding-y)] px-6">
      {/* Outer glow */}
      <div className="cta-glow" />

      {/* Pill container */}
      <motion.div
        className="cta-pill"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Scrolling works wall — 3 vertical columns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="cta-works-grid">
            {columns.map((col, colIdx) => (
              <div
                key={colIdx}
                className={`cta-works-col ${colIdx % 2 === 0 ? 'cta-scroll-up' : 'cta-scroll-down'}`}
              >
                {/* Duplicate for seamless loop */}
                {[...col, ...col].map((img, imgIdx) => (
                  <div key={imgIdx} className="relative w-full shrink-0 rounded-lg overflow-hidden bg-bg-tertiary" style={{ aspectRatio: '3/4' }}>
                    <Image
                      src={img}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="33vw"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Color overlay */}
        <div
          className="absolute inset-0 transition-[background] duration-500 ease-out"
          style={{
            background: isHovered
              ? 'rgba(200, 60, 20, 0.65)'
              : 'rgba(40, 80, 75, 0.85)',
          }}
        />

        {/* Title text */}
        <h2 className="cta-title">
          {t('title')}
        </h2>
      </motion.div>
    </section>
  );
}

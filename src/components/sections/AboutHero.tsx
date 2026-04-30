'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

function stagger(delay: number) {
  return {
    ...fadeUp,
    transition: { ...fadeUp.transition, delay },
  };
}

const EDITING_STYLE = [
  '節奏流暢，讓觀眾自然看完',
  '畫面豐富，但不過度堆疊',
  '視覺美感與內容訊息之間的平衡',
];

export default function AboutHero() {
  const t = useTranslations('about.hero');

  return (
    <section className="pt-[100px] lg:pt-[120px] pb-[80px] lg:pb-[100px]">
      <div className="max-w-[1100px] mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-20 items-center">

          {/* 左側文字 */}
          <div>
            <motion.div {...stagger(0)} className="mb-[23px]">
              <div className="about-title-wrapper">
                <span className="about-hover-zone" data-dir="top" />
                <span className="about-hover-zone" data-dir="right" />
                <span className="about-hover-zone" data-dir="bottom" />
                <span className="about-hover-zone" data-dir="left" />
                <h1
                  className="about-fill-text"
                  data-text={`${t('greeting')} ${t('name')}`}
                >
                  {t('greeting')} {t('name')}
                </h1>
              </div>
            </motion.div>

            <motion.div
              {...stagger(0.1)}
              className="text-[var(--color-text-secondary)] text-base leading-[1.85] font-light space-y-[18px]"
            >
              <p>
                我是一位擁有 <span className="text-[var(--color-accent)] font-normal">7 年設計背景的創作者，近年樂衷於短影音剪輯與內容呈現，擅長從「品牌視角」出發，打造有節奏、有記憶點的影像作品。</span>
              </p>
              <p>
                過去曾參與 Web3、Fintech、電商、交友產品網頁＆App 開發設計專案，這些經驗讓我在剪輯時不只關注畫面本身，而是更重視
                <span className="text-[var(--color-accent)] font-normal">「內容如何被理解、被記住、被轉換」</span>。我習慣從觀眾的視角思考，將資訊拆解、重組，再用畫面節奏與音樂去放大情緒與重點。
              </p>

              {/* Editing style — accent bullet list */}
              <div className="pt-1">
                <p className="mb-3 text-[var(--color-text-primary)] font-normal">我的剪輯風格偏向：</p>
                <ul className="space-y-2 pl-0.5">
                  {EDITING_STYLE.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-[var(--color-accent)] shrink-0 select-none">—</span>
                      <span className="text-[var(--color-accent)] font-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p>
                除了剪輯本身，我也<span className="text-[var(--color-accent)] font-normal">具備封面設計與基礎內容結構規劃能力，能協助你從「一支影片」提升到「整體內容品質」。</span>
              </p>
              <p className="text-[var(--color-text-primary)] font-normal">
                如果你正在尋找一位不只是剪輯，而是能一起思考內容與品牌、IP 呈現的合作夥伴，歡迎一起聊聊～
              </p>
            </motion.div>

            <motion.div {...stagger(0.2)} className="mt-9 flex gap-4 items-center flex-wrap">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-accent)] text-[var(--color-bg-primary)] font-semibold text-[14px] rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,208,0.25)] hover:-translate-y-0.5"
              >
                {t('btnWork')}
              </Link>
            </motion.div>
          </div>

          {/* 右側照片 — Glow Frame */}
          <motion.div {...stagger(0.4)} className="relative flex justify-center order-first lg:order-last">
            <div className="glow-frame">
              <div className="glow-frame-body">
                <Image
                  src="/images/about-photo-02.png"
                  alt="Jae"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 340px, 200px"
                />
              </div>
            </div>
            <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-full px-5 py-2 font-[var(--font-mono)] text-[12px] text-[var(--color-accent)] tracking-[0.05em] whitespace-nowrap z-10">
              {t('location')}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

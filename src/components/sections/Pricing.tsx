'use client';

import { Check, Sparkles, ArrowRight, Camera, Mic, FileText } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface PricingTier {
  name: string;
  duration: string;
  price: string;
  unit: string;
  suitable: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

const tiers: PricingTier[] = [
  {
    name: 'Short Clip',
    duration: '30 秒內',
    price: 'NT$500',
    unit: '/ 支',
    suitable: '適合 Reels、TikTok 快節奏內容',
    features: [
      '精準節奏剪輯，快速吸睛、提高停留率',
      '包含專屬封面圖設計',
    ],
  },
  {
    name: 'Standard Clip',
    duration: '30–60 秒',
    price: 'NT$900',
    unit: '/ 支',
    suitable: '適合完整敘事型短影音',
    features: [
      '包含節奏設計、字幕配置與動態效果',
      '讓內容更有層次與觀看體驗',
      '包含專屬封面圖設計',
    ],
    highlighted: true,
    badge: '最受歡迎',
  },
  {
    name: 'Premium Clip',
    duration: '60–90 秒',
    price: 'NT$1,300',
    unit: '/ 支',
    suitable: '適合品牌內容、知識型或故事型影片',
    features: [
      '強化情緒節奏、轉場設計與畫面豐富度',
      '提升整體質感與品牌形象',
      '包含專屬封面圖設計',
    ],
  },
];

const pipelineSteps = [
  { icon: FileText, label: '內容發想' },
  { icon: Camera, label: '拍攝' },
  { icon: Mic, label: '聲音演繹' },
];

export default function Pricing() {
  return (
    <section className="pt-[120px] pb-[100px]">
      <div className="max-w-[1100px] mx-auto px-8">

        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 rounded-full bg-accent-orange" />
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-display)] text-text-primary">
              Pricing｜短影音剪輯方案
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-[var(--color-text-secondary)] text-base max-w-[600px] mb-14 font-light">
            為不同內容長度，提供最適合的節奏與製作密度
          </p>
        </ScrollReveal>

        {/* Pricing tiers — 3-column grid, middle card highlighted */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 lg:gap-6 mb-20">
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={0.2 + i * 0.1}>
              <div
                className={`relative h-full rounded-[var(--card-border-radius)] p-8 transition-all duration-[400ms] ease-[var(--ease-out-expo)] hover:-translate-y-1 ${
                  tier.highlighted
                    ? 'glass-medium md:scale-[1.04] shadow-[0_20px_60px_rgba(0,229,208,0.12)]'
                    : 'glass-medium hover:border-white/[0.14]'
                }`}
                style={
                  tier.highlighted
                    ? {
                        borderColor: 'rgba(0, 229, 208, 0.35)',
                        backgroundImage:
                          'linear-gradient(135deg, rgba(0, 229, 208, 0.08) 0%, rgba(0, 0, 0, 0) 60%)',
                      }
                    : {
                        backgroundImage:
                          'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(0, 0, 0, 0) 60%)',
                      }
                }
              >
                {/* Recommended badge */}
                {tier.highlighted && tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-accent)] text-[#0A0A0A] text-xs font-semibold tracking-wide whitespace-nowrap">
                    <Sparkles className="w-3 h-3" />
                    {tier.badge}
                  </div>
                )}

                {/* Tier name + duration */}
                <div className="mb-6">
                  <h3 className="font-[var(--font-display)] text-[22px] font-semibold text-text-primary mb-1.5">
                    {tier.name}
                  </h3>
                  <p className="text-[11px] text-text-secondary tracking-[0.15em] uppercase font-[var(--font-mono)]">
                    {tier.duration}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span
                    className={`font-[var(--font-display)] text-4xl md:text-[42px] font-bold ${
                      tier.highlighted ? 'text-accent' : 'text-text-primary'
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span className="text-sm text-text-secondary">{tier.unit}</span>
                </div>

                {/* Suitable for */}
                <p className="text-[14px] text-text-secondary mb-6 pb-6 border-b border-white/[0.06] leading-relaxed">
                  {tier.suitable}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-3">
                  {tier.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                          tier.highlighted
                            ? 'bg-[rgba(0,229,208,0.15)]'
                            : 'bg-white/[0.06]'
                        }`}
                      >
                        <Check
                          className={`w-2.5 h-2.5 ${
                            tier.highlighted ? 'text-accent' : 'text-text-secondary'
                          }`}
                          strokeWidth={3}
                        />
                      </span>
                      <span className="text-[13px] text-text-secondary leading-[1.6]">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional Services header */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-3 h-3 rounded-full bg-accent" />
            <h3 className="text-2xl md:text-3xl font-bold font-[var(--font-display)] text-text-primary">
              Additional Services｜加值服務
            </h3>
          </div>
        </ScrollReveal>

        {/* Two blocks in distinct styles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-5 lg:gap-6">

          {/* Block 1 — Production pipeline (chip-flow style) */}
          <ScrollReveal delay={0.1}>
            <div className="glass-medium rounded-[var(--card-border-radius)] p-8 h-full">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] tracking-[0.2em] uppercase text-accent font-[var(--font-mono)]">
                  All-in-one
                </span>
              </div>
              <h4 className="font-[var(--font-display)] text-[20px] font-semibold text-text-primary mb-2 leading-snug">
                藏鏡人拍攝 / 口白 / 腳本企劃
              </h4>
              <p className="text-[13px] text-text-secondary mb-7 leading-[1.7]">
                提供從「內容發想 → 拍攝 → 聲音演繹」的一條龍服務
              </p>

              {/* Chip pipeline */}
              <div className="flex items-center gap-2 flex-wrap">
                {pipelineSteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.label} className="flex items-center gap-2">
                      <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] transition-colors duration-300 hover:border-accent/30">
                        <Icon className="w-3.5 h-3.5 text-accent" />
                        <span className="text-[13px] text-text-primary font-medium">{step.label}</span>
                      </div>
                      {i < pipelineSteps.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-text-secondary opacity-50" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Block 2 — Subscription / bulk (accent-orange CTA style) */}
          <ScrollReveal delay={0.2}>
            <div
              className="relative rounded-[var(--card-border-radius)] p-8 h-full overflow-hidden transition-all duration-[400ms] ease-[var(--ease-out-expo)] hover:-translate-y-1"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255, 107, 44, 0.12) 0%, rgba(20, 20, 20, 0.4) 70%)',
                border: '1px solid rgba(255, 107, 44, 0.30)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-accent-orange)] via-[var(--color-accent)] to-transparent" />

              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] tracking-[0.2em] uppercase text-[var(--color-accent-orange)] font-[var(--font-mono)] font-bold">
                  Long-term partnership
                </span>
              </div>
              <h4 className="font-[var(--font-display)] text-[20px] font-semibold text-text-primary mb-2 leading-snug">
                大量剪輯 / 包月合作
              </h4>
              <p className="text-[13px] text-text-secondary mb-7 leading-[1.75]">
                適合品牌長期經營、自媒體穩定輸出<br />
                依需求提供專屬報價與優惠方案
              </p>

              <a
                href="#contact"
                data-cursor-hover
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'rgba(255, 107, 44, 0.15)',
                  border: '1px solid rgba(255, 107, 44, 0.35)',
                }}
              >
                <span className="text-[13px] font-semibold text-[var(--color-accent-orange)]">
                  優惠價格另議
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[var(--color-accent-orange)]" />
              </a>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

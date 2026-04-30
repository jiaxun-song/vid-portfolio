'use client';

import { Check, Sparkles, ArrowRight, Camera, Mic, FileText, Film, Globe, TrendingUp, Magnet, ShieldCheck } from 'lucide-react';
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

          {/* Block 2 — Subscription / bulk (cyan + violet CTA style) */}
          <ScrollReveal delay={0.2}>
            <div
              className="relative rounded-[var(--card-border-radius)] p-8 h-full overflow-hidden transition-all duration-[400ms] ease-[var(--ease-out-expo)] hover:-translate-y-1"
              style={{
                background:
                  'linear-gradient(135deg, rgba(0, 229, 208, 0.10) 0%, rgba(120, 80, 255, 0.06) 50%, rgba(20, 20, 20, 0.4) 85%)',
                border: '1px solid rgba(0, 229, 208, 0.30)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-accent)] via-[#7B61FF] to-transparent" />

              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] tracking-[0.2em] uppercase text-accent font-[var(--font-mono)] font-bold">
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
                  background: 'rgba(0, 229, 208, 0.10)',
                  border: '1px solid rgba(0, 229, 208, 0.30)',
                }}
              >
                <span className="text-[13px] font-semibold text-accent">
                  優惠價格另議
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-accent" />
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* ─── Upgrade Services｜進階服務 (soft yellow theme) ─────────── */}
        <ScrollReveal delay={0.3}>
          <div
            className="mt-6 relative rounded-[var(--card-border-radius)] p-8 md:p-10 overflow-hidden transition-all duration-[400ms] ease-[var(--ease-out-expo)] hover:-translate-y-1"
            style={{
              background:
                'linear-gradient(135deg, rgba(255, 217, 107, 0.10) 0%, rgba(20, 20, 20, 0.4) 70%)',
              border: '1px solid rgba(255, 217, 107, 0.28)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFD96B] via-[var(--color-accent)] to-transparent" />

            {/* Soft radial glow top-right */}
            <div
              aria-hidden
              className="absolute -top-20 -right-20 w-[320px] h-[320px] pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(255, 217, 107, 0.10) 0%, transparent 60%)',
                filter: 'blur(20px)',
              }}
            />

            <div className="relative">
              {/* Eyebrow tag */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#FFD96B] font-[var(--font-mono)] font-bold">
                  Upgrade Services
                </span>
              </div>

              {/* Title */}
              <h4 className="font-[var(--font-display)] text-[22px] md:text-[26px] font-semibold text-text-primary mb-5 leading-snug">
                Upgrade Services｜進階服務
              </h4>

              {/* Pitch paragraph */}
              <p className="text-[14px] md:text-[15px] text-text-secondary leading-[1.85] mb-8">
                我同時提供品牌 / 公司 / 個人形象網站的規劃與設計，將短影音視為
                <span className="text-[#FFD96B] font-medium">「引流入口」</span>，
                並透過品牌形象網站的建置，打造具有
                <span className="text-[#FFD96B] font-medium">長尾效應的轉換載體</span>。
              </p>

              {/* Funnel viz + Bullet checklist (side-by-side on md+) */}
              <div className="flex flex-col md:flex-row md:items-stretch md:justify-between gap-6 md:gap-10 mb-7">
                {/* Funnel visualization: 短影音 → 品牌網站 → 信任轉換 */}
                <div
                  className="inline-flex w-fit max-w-full flex-wrap items-center justify-center gap-5 md:gap-7 px-5 md:px-7 py-4 md:py-5 rounded-2xl shrink-0"
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  {[
                    { icon: Film, label: '短影音', sub: 'Hook' },
                    { icon: Globe, label: '品牌網站', sub: 'Build trust' },
                    { icon: TrendingUp, label: '信任轉換', sub: 'Convert' },
                  ].map((step, i, arr) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.label} className="flex items-center gap-3 md:gap-5">
                        <div className="flex flex-col items-center gap-2">
                          <div
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center"
                            style={{
                              background: 'rgba(255, 217, 107, 0.10)',
                              border: '1px solid rgba(255, 217, 107, 0.25)',
                            }}
                          >
                            <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#FFD96B]" />
                          </div>
                          <div className="text-center">
                            <div className="text-[13px] text-text-primary font-medium leading-tight">
                              {step.label}
                            </div>
                            <div className="text-[10px] text-text-secondary tracking-[0.15em] uppercase font-[var(--font-mono)] mt-0.5">
                              {step.sub}
                            </div>
                          </div>
                        </div>
                        {i < arr.length - 1 && (
                          <ArrowRight className="w-4 h-4 text-text-secondary opacity-60 self-center -mt-3" />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Outcomes — single unified card with internal rows */}
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] text-text-primary mb-4 font-medium">
                    透過完整的內容與轉換規劃協助：
                  </p>
                  <div
                    className="rounded-2xl overflow-hidden"
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                    }}
                  >
                    {[
                      { icon: Magnet, label: '承接短影音帶來的流量', sub: 'Catch leads' },
                      { icon: ShieldCheck, label: '建立品牌信任感的網站', sub: 'Earn trust' },
                    ].map((item, i, arr) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className="flex items-center gap-4 px-5 py-4"
                          style={
                            i < arr.length - 1
                              ? { borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }
                              : undefined
                          }
                        >
                          <div
                            className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                            style={{
                              background: 'rgba(255, 217, 107, 0.10)',
                              border: '1px solid rgba(255, 217, 107, 0.25)',
                            }}
                          >
                            <Icon className="w-[18px] h-[18px] text-[#FFD96B]" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[13px] md:text-[14px] text-text-primary font-medium leading-tight">
                              {item.label}
                            </div>
                            <div className="text-[10px] text-text-secondary tracking-[0.15em] uppercase font-[var(--font-mono)] mt-1">
                              {item.sub}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* CTA highlight */}
              <div
                className="flex items-start gap-2.5 px-4 py-3 rounded-xl"
                style={{
                  background: 'rgba(255, 217, 107, 0.08)',
                  border: '1px solid rgba(255, 217, 107, 0.22)',
                }}
              >
                <Sparkles className="w-4 h-4 shrink-0 mt-[2px] text-[#FFD96B]" />
                <span className="text-[13px] text-[#FFD96B] leading-[1.65] font-medium">
                  可單獨委託網站設計，或與剪輯服務整合規劃
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

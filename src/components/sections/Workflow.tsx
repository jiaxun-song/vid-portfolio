'use client';

import { Info, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface Step {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: '需求提供',
    description:
      '提供影片素材與基本需求（主題、平台、參考風格等）\n也可以附上你喜歡的影片作為方向參考',
    highlight: '釐清最適合的剪輯呈現方式',
  },
  {
    number: '02',
    title: '風格確認',
    description:
      '根據內容定位，確認剪輯節奏與整體風格\n（節奏快慢、字幕風格、畫面氛圍等）',
    highlight: '確保後續剪輯方向一致',
  },
  {
    number: '03',
    title: '初剪交付',
    description:
      '完成初版剪輯並提供預覽\n包含基本節奏、字幕配置與畫面效果',
    highlight: '提供 2 次免費修改，可針對細節進行調整優化',
  },
  {
    number: '04',
    title: '最終交付',
    description:
      '確認修改完成後，交付最終影片檔案\n（可依需求提供不同平台尺寸或格式）',
    highlight: '讓你可以直接上架使用',
  },
];

const notes = [
  '修改範圍以「原剪輯內容調整」為主（不包含大幅重剪或更換素材）',
  '如需急件或特殊需求，可提前討論安排',
  '長期合作或大量需求可提供更彈性的合作方式',
];

export default function Workflow() {
  return (
    <section className="pt-[120px] pb-[100px]">
      <div className="max-w-[1100px] mx-auto px-8">

        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 rounded-full bg-accent-orange" />
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-display)] text-text-primary">
              Workflow｜合作流程
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-[var(--color-text-secondary)] text-base max-w-[600px] mb-14 font-light">
            清楚流程，讓每一支影片都順暢完成
          </p>
        </ScrollReveal>

        {/* 2×2 grid of step cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-5 lg:gap-6 mb-16">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={0.15 + i * 0.08}>
              <div
                className="relative h-full rounded-[var(--card-border-radius)] p-8 transition-all duration-[400ms] ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-white/[0.14] glass-medium overflow-hidden"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, rgba(0, 229, 208, 0.04) 0%, rgba(0, 0, 0, 0) 60%)',
                }}
              >
                {/* Step number watermark */}
                <span
                  aria-hidden
                  className="absolute -top-4 right-4 font-[var(--font-display)] text-[110px] font-black leading-none select-none pointer-events-none"
                  style={{
                    color: 'rgba(0, 229, 208, 0.06)',
                    letterSpacing: '-0.05em',
                  }}
                >
                  {step.number}
                </span>

                {/* Step header */}
                <div className="relative flex items-baseline gap-3 mb-5">
                  <span className="font-[var(--font-mono)] text-[14px] font-bold tracking-[0.15em] text-accent">
                    {step.number}
                  </span>
                  <span className="text-text-secondary text-sm select-none">｜</span>
                  <h3 className="font-[var(--font-display)] text-[22px] font-semibold text-text-primary leading-tight">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="relative text-[14px] text-text-secondary leading-[1.85] whitespace-pre-line mb-5">
                  {step.description}
                </p>

                {/* Highlight callout */}
                <div
                  className="relative flex items-start gap-2.5 px-4 py-3 rounded-xl"
                  style={{
                    background: 'rgba(0, 229, 208, 0.06)',
                    border: '1px solid rgba(0, 229, 208, 0.18)',
                  }}
                >
                  <Sparkles className="w-4 h-4 shrink-0 mt-[2px] text-accent" />
                  <span className="text-[13px] text-accent leading-[1.65] font-medium">
                    {step.highlight}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Notes block — same orange-accent style as Pricing's 加值服務 block */}
        <ScrollReveal delay={0.4}>
          <div
            className="relative rounded-[var(--card-border-radius)] p-8 overflow-hidden transition-all duration-[400ms] ease-[var(--ease-out-expo)] hover:-translate-y-1"
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

            <div className="flex items-center gap-2 mb-3">
              <Info className="w-3.5 h-3.5 text-[var(--color-accent-orange)]" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-[var(--color-accent-orange)] font-[var(--font-mono)] font-bold">
                Notes
              </span>
            </div>
            <h4 className="font-[var(--font-display)] text-[20px] font-semibold text-text-primary mb-5 leading-snug">
              補充說明
            </h4>

            <ul className="flex flex-col gap-3">
              {notes.map((note) => (
                <li
                  key={note}
                  className="flex items-start gap-3 text-[14px] text-text-secondary leading-[1.75]"
                >
                  <span
                    className="shrink-0 mt-[10px] select-none"
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: 999,
                      background: 'var(--color-accent-orange)',
                    }}
                    aria-hidden
                  />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

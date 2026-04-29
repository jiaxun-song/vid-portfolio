import { setRequestLocale } from 'next-intl/server';
import AboutHero from '@/components/sections/AboutHero';
import Pricing from '@/components/sections/Pricing';
import CTASection from '@/components/sections/CTASection';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="relative">
      <AboutHero />

      <Pricing />

      <CTASection />
    </div>
  );
}

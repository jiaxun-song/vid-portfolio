import { Suspense } from 'react';
import { setRequestLocale } from 'next-intl/server';
import WorkClient from './WorkClient';

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Suspense fallback={null}>
      <WorkClient />
    </Suspense>
  );
}

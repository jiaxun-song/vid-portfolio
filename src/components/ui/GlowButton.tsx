'use client';

import { Link } from '@/i18n/navigation';

interface GlowButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function GlowButton({ href, children }: GlowButtonProps) {
  return (
    <div className="more-projects-btn-wrap">
      <Link href={href} className="more-projects-btn">
        {children}
      </Link>
    </div>
  );
}

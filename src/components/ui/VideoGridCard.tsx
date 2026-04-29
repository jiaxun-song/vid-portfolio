'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import {
  type Video,
  getVideoEmbedUrl,
  getVideoThumbnail,
  parseVideoUrl,
} from '@/data/videos';

interface VideoGridCardProps {
  video: Video;
  index: number;
}

const aspectClass: Record<Video['orientation'], string> = {
  vertical: 'aspect-[9/16]',
  horizontal: 'aspect-[16/9]',
  square: 'aspect-square',
};

// Used inside a 6-column grid on md+. Verticals take 2 cols (3 per row),
// horizontals take 3 cols (2 per row), squares take 2.
const colSpanClass: Record<Video['orientation'], string> = {
  vertical: 'md:col-span-2',
  horizontal: 'md:col-span-3',
  square: 'md:col-span-2',
};

export default function VideoGridCard({ video, index }: VideoGridCardProps) {
  const [playing, setPlaying] = useState(false);

  const thumbnail = getVideoThumbnail(video);
  const embedUrl = getVideoEmbedUrl(video, true);
  const provider = video.url ? parseVideoUrl(video.url)?.provider : undefined;
  const hasVideo = !!video.url;
  const isCover = video.category === 'cover';

  return (
    <motion.div
      className={`h-full ${colSpanClass[video.orientation]}`}
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: (index % 2) * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <article
        data-cursor-hover
        className="group glass-medium rounded-[32px] overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:border-white/[0.14] hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] h-full flex flex-col"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(0, 229, 208, 0.03) 0%, rgba(0, 0, 0, 0) 50%)',
        }}
      >
        {/* Player area */}
        <div
          className={`relative w-[calc(100%-24px)] mx-3 mt-3 ${isCover ? 'mb-3' : ''} ${aspectClass[video.orientation]} rounded-xl overflow-hidden bg-black`}
        >
          {playing && hasVideo ? (
            <iframe
              src={embedUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : hasVideo ? (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="absolute inset-0 w-full h-full cursor-pointer group/play"
              aria-label={`Play ${video.title}`}
            >
              {thumbnail && (
                <Image
                  src={thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized={provider === 'youtube'}
                />
              )}
              {/* Play overlay */}
              <span className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-100 transition-opacity duration-300">
                <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/15 backdrop-blur-md border border-white/30 transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-7 h-7 text-white fill-white ml-1" />
                </span>
              </span>
            </button>
          ) : (
            // Cover-design / image-only entry — no play button, just the image
            thumbnail && (
              <Image
                src={thumbnail}
                alt={video.title}
                fill
                className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            )
          )}
        </div>

        {/* Content — hidden for cover-design entries (image-only display) */}
        {!isCover && (
          <div className="px-6 pt-5 pb-6 flex flex-col flex-1">
            <div className="flex items-baseline justify-between gap-3 mb-2">
              <h3 className="font-[var(--font-display)] text-[20px] md:text-[18px] lg:text-[20px] font-semibold text-text-primary leading-[1.4]">
                {video.title}
              </h3>
              {video.year && (
                <span className="text-xs text-text-secondary opacity-70 shrink-0">
                  {video.year}
                </span>
              )}
            </div>
            {video.client && (
              <p className="text-xs text-accent mb-2 uppercase tracking-wider">
                {video.client}
              </p>
            )}
            <p className="text-[14px] text-text-secondary leading-relaxed mb-4 whitespace-pre-line flex-1">
              {video.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {video.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3.5 py-1 text-xs rounded-full text-text-secondary"
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>
    </motion.div>
  );
}

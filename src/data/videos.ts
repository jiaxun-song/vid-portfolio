export type VideoOrientation = 'vertical' | 'horizontal' | 'square';

export type VideoCategory = 'short-form' | 'product' | 'cover';

export interface Video {
  /** Internal slug, e.g. "client-x-promo". Must be unique. */
  id: string;
  /** Which Projects-page tab this entry belongs to. */
  category: VideoCategory;
  title: string;
  description: string;
  tags: string[];
  /**
   * Paste any YouTube or Vimeo URL. All common formats are supported:
   *  - https://www.youtube.com/watch?v=XXXXXXXXXXX
   *  - https://youtu.be/XXXXXXXXXXX
   *  - https://www.youtube.com/shorts/XXXXXXXXXXX
   *  - https://www.youtube.com/embed/XXXXXXXXXXX
   *  - https://vimeo.com/123456789
   *
   * Optional — leave out for cover-design entries that are images only.
   */
  url?: string;
  /**
   * Local image path under `public/`, e.g. `/images/covers/my-cover.jpg`.
   * Required for `cover` category. Optional for video entries
   * (falls back to YouTube auto-thumbnail).
   */
  image?: string;
  orientation: VideoOrientation;
  client?: string;
  year?: number;
}

// ─── Add or remove videos here ──────────────────────────────────────────────
export const allVideos: Video[] = [
  // ─── 短影音 (short-form) ──────────────────────────────────────────────────
  {
    id: 'sample-short-1',
    category: 'short-form',
    title: '教你一眼看出成衣批發貨源！',
    description: '擔任腳本企劃、藏鏡人視角拍攝、剪輯輸出',
    tags: ['Short Form'],
    url: 'https://youtube.com/shorts/B_IaGBcqau4',
    orientation: 'vertical',
    year: 2025,
  },
  {
    id: 'sample-short-2',
    category: 'short-form',
    title: '怎麼寄淘寶集運？',
    description: '擔任腳本企劃、藏鏡人視角拍攝、剪輯輸出',
    tags: ['Short Form'],
    url: 'https://youtube.com/shorts/i0qbzgIGn-g',
    orientation: 'vertical',
    year: 2025,
  },
  {
    id: 'sample-short-3',
    category: 'short-form',
    title: '日本質感專業禮盒超殺代購',
    description: '擔任腳本企劃、藏鏡人視角拍攝、剪輯輸出',
    tags: ['Short Form'],
    url: 'https://youtube.com/shorts/KRqY4jA-noQ',
    orientation: 'vertical',
    year: 2025,
  },

  // ─── 產品影音 (product) ───────────────────────────────────────────────────
  {
    id: 'product-1',
    category: 'product',
    title: '嘖嘖募資 - 智能泡奶機',
    description: '產品募資影片剪輯、Banner 設計',
    tags: ['Product'],
    url: 'https://youtu.be/FKozML3tliw',
    // Cache-buster query — bump the version when YouTube thumbnail is updated
    image: 'https://img.youtube.com/vi/FKozML3tliw/hqdefault.jpg?v=2',
    orientation: 'horizontal',
  },
  {
    id: 'product-2',
    category: 'product',
    title: '電商女裝 - 新品預告',
    description: '影片拍攝、影片剪輯',
    tags: ['Product'],
    url: 'https://youtu.be/cVJ3wfMC5Ug',
    orientation: 'horizontal',
  },

  // ─── 封圖設計 (cover) ─────────────────────────────────────────────────────
  // For covers, set `image` to a local path under public/ and leave `url` empty.
  {
    id: 'sample-cover-1',
    category: 'cover',
    title: 'Cover Design Sample',
    description: 'Replace `image` with your own cover artwork (9:16).',
    tags: ['Cover', 'Design'],
    image: '/images/covers/cover-01.jpg',
    orientation: 'vertical',
    year: 2025,
  },
  {
    id: 'sample-cover-2',
    category: 'cover',
    title: 'Another Cover',
    description: 'Cover designs are display-only — no play button, just the image.',
    tags: ['Cover'],
    image: '/images/covers/cover-02.jpg',
    orientation: 'vertical',
    year: 2025,
  },
  {
    id: 'sample-cover-3',
    category: 'cover',
    title: 'Third Cover',
    description: 'Three per row, same as Short Form.',
    tags: ['Cover'],
    image: '/images/covers/cover-03.jpg',
    orientation: 'vertical',
    year: 2025,
  },
];

// ─── URL parsing ────────────────────────────────────────────────────────────

export type VideoProvider = 'youtube' | 'vimeo';

export interface ParsedVideo {
  provider: VideoProvider;
  videoId: string;
}

export function parseVideoUrl(url: string): ParsedVideo | null {
  try {
    const u = new URL(url.trim());
    const host = u.hostname.replace(/^www\.|^m\./, '');

    // YouTube
    if (host === 'youtube.com' || host === 'youtu.be') {
      // youtu.be/<id>
      if (host === 'youtu.be') {
        const id = u.pathname.slice(1).split('/')[0];
        return id ? { provider: 'youtube', videoId: id } : null;
      }
      // youtube.com/watch?v=<id>
      const v = u.searchParams.get('v');
      if (v) return { provider: 'youtube', videoId: v };
      // youtube.com/shorts/<id> or /embed/<id>
      const m = u.pathname.match(/^\/(?:shorts|embed)\/([^/?#]+)/);
      if (m) return { provider: 'youtube', videoId: m[1] };
      return null;
    }

    // Vimeo
    if (host === 'vimeo.com' || host === 'player.vimeo.com') {
      const m = u.pathname.match(/\/(\d+)/);
      if (m) return { provider: 'vimeo', videoId: m[1] };
      return null;
    }

    return null;
  } catch {
    return null;
  }
}

export function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export function getVideoEmbedUrl(video: Video, autoplay = false): string {
  if (!video.url) return '';
  const parsed = parseVideoUrl(video.url);
  if (!parsed) return '';
  const ap = autoplay ? 1 : 0;
  // mute=0 — user explicitly clicked Play, so start with sound on.
  // Browser autoplay policies allow unmuted autoplay because the iframe is
  // inserted as a result of a user gesture.
  if (parsed.provider === 'youtube') {
    return `https://www.youtube.com/embed/${parsed.videoId}?autoplay=${ap}&mute=0&controls=1&rel=0&modestbranding=1&playsinline=1`;
  }
  return `https://player.vimeo.com/video/${parsed.videoId}?autoplay=${ap}&muted=0&dnt=1`;
}

export function getVideoThumbnail(video: Video): string {
  if (video.image) return video.image;
  if (!video.url) return '';
  const parsed = parseVideoUrl(video.url);
  if (parsed?.provider === 'youtube') return getYouTubeThumbnail(parsed.videoId);
  return '';
}

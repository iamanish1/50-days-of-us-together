import type { ImageAsset, PlaceholderTone } from './types';

/**
 * Reference a real photograph in /public/media.
 *
 *   photo('ch03/first-hug.jpg', 'Two people under an umbrella')
 *
 * For responsive loading, export each photo at several widths named
 * `name-800.jpg`, `name-1600.jpg`, … and pass `widths`:
 *
 *   photo('ch03/first-hug.jpg', 'alt text', { widths: [800, 1600, 2400] })
 */
export function photo(
  path: string,
  alt: string,
  opts: { widths?: number[]; focal?: { x: number; y: number }; width?: number; height?: number } = {},
): ImageAsset {
  const src = `/media/${path}`;
  const asset: ImageAsset = { src, alt, focal: opts.focal, width: opts.width, height: opts.height };
  if (opts.widths?.length) {
    const dot = src.lastIndexOf('.');
    const base = src.slice(0, dot);
    const ext = src.slice(dot);
    asset.srcSet = opts.widths.map((w) => `${base}-${w}${ext} ${w}w`).join(', ');
    asset.src = `${base}-${opts.widths[Math.min(1, opts.widths.length - 1)]}${ext}`;
  }
  return asset;
}

/** A placeholder slot for a photograph that has not been chosen yet. */
export function slot(label: string, tone: PlaceholderTone = 'sand'): ImageAsset {
  return { alt: `Placeholder: ${label}`, label, tone };
}

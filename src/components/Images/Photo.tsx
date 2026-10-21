import { memo, useRef, useState, type CSSProperties } from 'react';
import type { ImageAsset, Photo as PhotoData } from '../../data/types';
import { Handnote } from '../Typography/Typography';

type Props = PhotoData & {
  className?: string;
  /** Moves very slightly with the pointer. For large, dominant photographs only. */
  parallax?: boolean;
  /** Bleeds to the page edges; the photo fills its container. */
  bleed?: boolean;
  /** Load immediately (first visible photograph). */
  eager?: boolean;
  /** Order in the page's reveal sequence. */
  revealOrder?: number;
};

/** Renders a real image or, until one is supplied, a tonal darkroom-paper placeholder. */
export const Media = memo(function Media({ image, fit = 'cover', eager }: { image: ImageAsset; fit?: 'cover' | 'contain'; eager?: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const pos = image.focal ? `${image.focal.x}% ${image.focal.y}%` : '50% 50%';

  if (!image.src) {
    return (
      <div className={`media media--placeholder tone-${image.tone ?? 'sand'}`} role="img" aria-label={image.alt}>
        <span className="media__label">
          <span className="media__label-kind">Photograph</span>
          {image.label && <span className="media__label-text">{image.label}</span>}
        </span>
      </div>
    );
  }
  return (
    <img
      className={`media ${loaded ? 'is-loaded' : ''}`}
      src={image.src}
      srcSet={image.srcSet}
      sizes={image.sizes ?? '(max-width: 700px) 100vw, 60vw'}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      draggable={false}
      onLoad={() => setLoaded(true)}
      style={{ objectFit: fit, objectPosition: pos }}
    />
  );
});

export const Photo = memo(function Photo({
  image,
  frame = 'borderless',
  ratio = 'fill',
  fit,
  caption,
  date,
  location,
  note,
  grain,
  tapToReveal,
  alternate,
  className = '',
  parallax,
  bleed,
  eager,
  revealOrder = 0,
}: Props) {
  const [revealed, setRevealed] = useState(!tapToReveal);
  const [showAlt, setShowAlt] = useState(false);
  const holdTimer = useRef<number>();

  const meta = [date, location].filter(Boolean).join(' · ');
  const hasCaption = Boolean(caption || meta);

  const holdHandlers = alternate
    ? {
        onPointerDown: () => {
          holdTimer.current = window.setTimeout(() => setShowAlt(true), 550);
        },
        onPointerUp: () => {
          window.clearTimeout(holdTimer.current);
          setShowAlt(false);
        },
        onPointerLeave: () => {
          window.clearTimeout(holdTimer.current);
          setShowAlt(false);
        },
        onContextMenu: (e: React.MouseEvent) => e.preventDefault(),
      }
    : {};

  const interactive = tapToReveal || alternate;
  const classes = [
    'photo',
    `photo--${frame}`,
    `photo--${ratio}`,
    bleed && 'photo--bleed',
    parallax && 'photo--parallax',
    grain && 'photo--grain',
    interactive && 'photo--interactive',
    showAlt && 'is-alt',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const frameEl = (
    <div className="photo__frame">
      <div className="photo__media">
        <Media image={image} fit={fit} eager={eager} />
        {alternate && (
          <div className="photo__alt" aria-hidden={!showAlt}>
            <Media image={alternate} fit={fit} />
          </div>
        )}
      </div>
      {frame === 'polaroid' && note && <Handnote className="photo__polaroid-note">{note}</Handnote>}
    </div>
  );

  const extras = (
    <>
      {frame !== 'polaroid' && note && <Handnote className="photo__note">{note}</Handnote>}
      {alternate?.note && <Handnote className="photo__alt-note">{alternate.note}</Handnote>}
      {hasCaption && (
        <figcaption className={`photo__caption ${revealed ? '' : 'is-hidden'}`}>
          {caption && <span className="photo__caption-text">{caption}</span>}
          {meta && <span className="photo__caption-meta">{meta}</span>}
        </figcaption>
      )}
    </>
  );

  const style = { '--d': revealOrder } as CSSProperties;

  if (interactive) {
    return (
      <figure className={classes} style={style} data-reveal="photo">
        <button
          type="button"
          className="photo__button"
          aria-label={
            alternate ? `${image.alt}. Press and hold to see another photograph.` : `${image.alt}. Tap to reveal the caption.`
          }
          aria-pressed={tapToReveal ? revealed : undefined}
          onClick={(e) => {
            e.stopPropagation();
            if (tapToReveal) setRevealed((r) => !r);
          }}
          onKeyDown={(e) => {
            if (alternate && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault();
              setShowAlt((s) => !s);
            }
          }}
          {...holdHandlers}
        >
          {frameEl}
        </button>
        {extras}
      </figure>
    );
  }
  return (
    <figure className={classes} style={style} data-reveal="photo">
      {frameEl}
      {extras}
    </figure>
  );
});

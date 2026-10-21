import type { Chapter } from '../../data/types';
import { pad2 } from '../Typography/Typography';

type Props = {
  index: number;
  total: number;
  chapter?: Chapter;
  visible: boolean;
  onPrev: () => void;
  onNext: () => void;
  onContents: () => void;
};

/** Navigation that steps back when the reader is reading. */
export function Chrome({ index, total, chapter, visible, onPrev, onNext, onContents }: Props) {
  const onCover = index === 0;
  const last = total - 1;
  const progress = last > 0 ? index / last : 0;

  return (
    <div className={`chrome ${visible && !onCover ? 'is-visible' : ''} ${onCover ? 'is-cover' : ''}`}>
      <div className="chrome__top">
        <span className="chrome__where" aria-hidden="true">
          {chapter ? (
            <>
              {chapter.number > 0 && <span className="chrome__where-n">{chapter.label ?? pad2(chapter.number)}</span>} {chapter.title}
            </>
          ) : (
            '50 Days'
          )}
        </span>
        <button type="button" className="chrome__btn" onClick={onContents} aria-haspopup="dialog">
          Contents
        </button>
      </div>

      <button type="button" className="chrome__edge chrome__edge--prev" onClick={onPrev} disabled={index === 0} aria-label="Previous page">
        <Arrow dir={-1} />
      </button>
      <button type="button" className="chrome__edge chrome__edge--next" onClick={onNext} disabled={index === last} aria-label="Next page">
        <Arrow dir={1} />
      </button>

      <div className="chrome__bottom" aria-hidden="true">
        <span className="chrome__count">
          {pad2(index)} <span className="chrome__of">/ {pad2(last)}</span>
        </span>
        <span className="chrome__line">
          <span className="chrome__line-fill" style={{ transform: `scaleX(${progress})` }} />
        </span>
      </div>

      {onCover && (
        <p className="chrome__hint">
          <span className="hint--fine">Click or press → to open</span>
          <span className="hint--touch">Tap to open</span>
        </p>
      )}
    </div>
  );
}

function Arrow({ dir }: { dir: 1 | -1 }) {
  return (
    <svg viewBox="0 0 40 12" aria-hidden="true" style={{ transform: dir === -1 ? 'scaleX(-1)' : undefined }}>
      <path d="M0 6h38M33 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

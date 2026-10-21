import { useEffect, useRef } from 'react';
import type { Chapter } from '../../data/types';
import { ContentsList } from './ContentsList';

type Props = {
  open: boolean;
  chapters: Chapter[];
  chapterStart: Record<string, number>;
  currentChapterId?: string;
  onSelect: (index: number) => void;
  onClose: () => void;
};

export function ContentsOverlay({ open, chapters, chapterStart, currentChapterId, onSelect, onClose }: Props) {
  const panel = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<Element | null>(null);

  useEffect(() => {
    if (!open) return;
    returnFocus.current = document.activeElement;
    const first = panel.current?.querySelector<HTMLElement>('.is-current button, button.contents__link');
    first?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      }
      if (e.key === 'Tab' && panel.current) {
        // Keep focus inside the dialog.
        const items = panel.current.querySelectorAll<HTMLElement>('button');
        const a = items[0];
        const b = items[items.length - 1];
        if (e.shiftKey && document.activeElement === a) {
          e.preventDefault();
          b.focus();
        } else if (!e.shiftKey && document.activeElement === b) {
          e.preventDefault();
          a.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey, true);
    return () => {
      window.removeEventListener('keydown', onKey, true);
      (returnFocus.current as HTMLElement | null)?.focus?.();
    };
  }, [open, onClose]);

  return (
    <div className={`overlay ${open ? 'is-open' : ''}`} aria-hidden={!open} onClick={onClose}>
      {open && (
        <div
          ref={panel}
          className="overlay__panel"
          role="dialog"
          aria-modal="true"
          aria-label="Contents"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="overlay__head">
            <h2 className="overlay__title">Contents</h2>
            <button type="button" className="chrome__btn" onClick={onClose}>
              Close
            </button>
          </div>
          <ContentsList chapters={chapters} chapterStart={chapterStart} currentChapterId={currentChapterId} onSelect={onSelect} />
          <button type="button" className="overlay__cover" onClick={() => onSelect(0)}>
            Back to the cover
          </button>
        </div>
      )}
    </div>
  );
}

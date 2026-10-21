import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import type { Book as BookData, CoverVariant } from '../../data/types';
import { flattenBook, imagesOf } from '../../engine/flatten';
import { useActivity, usePointerParallax, useReducedMotion, useSwipe } from '../../engine/hooks';
import { Chrome } from '../Navigation/Chrome';
import { ContentsOverlay } from '../Navigation/ContentsOverlay';
import { Leaf } from './Leaf';

type Turn = { from: number; dir: 1 | -1; mode: 'turn' | 'open' | 'close' | 'jump' } | null;

const DURATION = { turn: 820, open: 1350, close: 1150, jump: 620, reduced: 260 };

const readHash = (max: number) => {
  const n = parseInt(window.location.hash.slice(1), 10);
  return Number.isFinite(n) ? Math.min(Math.max(n, 0), max) : 0;
};

const isInteractive = (el: EventTarget | null) =>
  el instanceof Element && Boolean(el.closest('button, a, input, audio, video, [role="dialog"], .letter, .secret__slip'));

export function Book({ book, coverVariant }: { book: BookData; coverVariant: CoverVariant }) {
  const { leaves, chapterStart } = useMemo(() => flattenBook(book), [book]);
  const total = leaves.length;
  const last = total - 1;

  const [index, setIndex] = useState(() => readHash(last));
  const [turn, setTurn] = useState<Turn>(null);
  const [contentsOpen, setContentsOpen] = useState(false);
  const [chromeActive, pokeChrome] = useActivity();
  const [chromePinned, setChromePinned] = useState(false);
  const reduced = useReducedMotion();

  const stageRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(index);
  indexRef.current = index;
  const timer = useRef<number>();

  usePointerParallax(stageRef, !reduced);

  const go = useCallback(
    (to: number, jump = false) => {
      const from = indexRef.current;
      const target = Math.min(Math.max(to, 0), last);
      if (target === from) return;
      const dir: 1 | -1 = target > from ? 1 : -1;
      const mode = from === 0 && dir === 1 ? 'open' : target === 0 ? 'close' : jump || Math.abs(target - from) > 1 ? 'jump' : 'turn';
      indexRef.current = target;
      setIndex(target);
      setTurn({ from, dir, mode });
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setTurn(null), reduced ? DURATION.reduced : DURATION[mode]);
    },
    [last, reduced],
  );

  const next = useCallback(() => go(indexRef.current + 1), [go]);
  const prev = useCallback(() => go(indexRef.current - 1), [go]);
  const select = useCallback(
    (i: number) => {
      setContentsOpen(false);
      go(i, true);
    },
    [go],
  );
  const closeContents = useCallback(() => setContentsOpen(false), []);

  // Remember the page in the URL so a refresh (or a shared link) returns here.
  useEffect(() => {
    const url = index === 0 ? window.location.pathname + window.location.search : `#${index}`;
    window.history.replaceState(null, '', url);
  }, [index]);

  useEffect(() => {
    const onHash = () => go(readHash(last), true);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [go, last]);

  // Keyboard.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (contentsOpen || e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target as HTMLElement;
      const onControl = t.closest?.('button, input, a, audio, video');
      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
          if (t.matches?.('input[type="range"]')) return;
          e.preventDefault();
          next();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          if (t.matches?.('input[type="range"]')) return;
          e.preventDefault();
          prev();
          break;
        case ' ':
          if (onControl) return;
          e.preventDefault();
          if (e.shiftKey) prev();
          else next();
          break;
        case 'Home':
          e.preventDefault();
          go(0, true);
          break;
        case 'End':
          e.preventDefault();
          go(last, true);
          break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [contentsOpen, next, prev, go, last]);

  // Mouse: clicking the cover opens the book. Touch: tap the outer quarters to turn, the middle to show the controls.
  const onStageClick = (e: React.MouseEvent) => {
    const pointer = (e.nativeEvent as PointerEvent).pointerType;
    if (pointer === 'touch' || isInteractive(e.target)) return;
    if (indexRef.current === 0) next();
  };

  useSwipe(
    stageRef,
    (dir) => (dir === 1 ? next() : prev()),
    (e) => {
      if (isInteractive(e.target)) return;
      if (indexRef.current === 0) return next();
      const x = e.clientX / window.innerWidth;
      if (x > 0.75) next();
      else if (x < 0.25) prev();
      else {
        setChromePinned((p) => !p);
        pokeChrome();
      }
    },
  );

  // Preload photographs one and two pages ahead (and one behind).
  useEffect(() => {
    for (const i of [index + 1, index + 2, index - 1]) {
      for (const src of imagesOf(leaves[i])) {
        const img = new Image();
        img.decoding = 'async';
        img.src = src;
      }
    }
  }, [index, leaves]);

  const leaf = leaves[index];
  const chapter = leaf.chapter;
  const announce = index === 0 ? 'Cover' : `Page ${index} of ${last}${chapter ? `, ${chapter.title}` : ''}`;

  const leafProps = { book, chapterStart, coverVariant, onSelect: select, total };
  const fromLeaf = turn ? leaves[turn.from] : undefined;

  return (
    <main
      className={`reader ${reduced ? 'is-reduced' : ''} ${index === 0 ? 'is-closed' : 'is-open'}`}
      style={{ '--read': (index / last).toFixed(3) } as CSSProperties}
    >
      <div className="book">
        <span className="book__stack book__stack--left" aria-hidden="true" />
        <span className="book__stack book__stack--right" aria-hidden="true" />
        <div
          ref={stageRef}
          className={`stage ${turn ? `is-turning turn-${turn.mode} dir-${turn.dir === 1 ? 'next' : 'prev'}` : ''}`}
          onClick={onStageClick}
        >
          {fromLeaf && turn && <Leaf key={`${fromLeaf.key}-leave`} leaf={fromLeaf} index={turn.from} phase="leave" {...leafProps} />}
          <Leaf key={leaf.key} leaf={leaf} index={index} phase={turn ? 'enter' : 'current'} {...leafProps} />
        </div>
      </div>

      <Chrome
        index={index}
        total={total}
        chapter={chapter}
        visible={chromeActive || chromePinned || contentsOpen}
        onPrev={prev}
        onNext={next}
        onContents={() => setContentsOpen(true)}
      />

      <ContentsOverlay
        open={contentsOpen}
        chapters={book.chapters}
        chapterStart={chapterStart}
        currentChapterId={chapter?.id}
        onSelect={select}
        onClose={closeContents}
      />

      <p className="visually-hidden" aria-live="polite">
        {announce}
      </p>
    </main>
  );
}

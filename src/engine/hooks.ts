import { useEffect, useRef, useState, type RefObject } from 'react';

export function useReducedMotion(): boolean {
  const query = '(prefers-reduced-motion: reduce)';
  const [reduced, setReduced] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

/**
 * Touch gestures: horizontal swipes and taps. Vertical movement is left alone so pages can scroll.
 * Taps are read from pointer events rather than `click`, which browsers may delay or drop after a gesture.
 */
export function useSwipe(ref: RefObject<HTMLElement>, onSwipe: (dir: 1 | -1) => void, onTap?: (e: PointerEvent) => void) {
  const cb = useRef(onSwipe);
  cb.current = onSwipe;
  const tap = useRef(onTap);
  tap.current = onTap;
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let start: { x: number; y: number; t: number } | null = null;
    const down = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') return;
      start = { x: e.clientX, y: e.clientY, t: performance.now() };
    };
    const up = (e: PointerEvent) => {
      if (!start) return;
      const dx = e.clientX - start.x;
      const dy = e.clientY - start.y;
      const fast = performance.now() - start.t < 600;
      start = null;
      if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.4 && fast) cb.current(dx < 0 ? 1 : -1);
      else if (Math.abs(dx) < 10 && Math.abs(dy) < 10 && fast) tap.current?.(e);
    };
    const cancel = () => (start = null);
    el.addEventListener('pointerdown', down);
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', cancel);
    return () => {
      el.removeEventListener('pointerdown', down);
      el.removeEventListener('pointerup', up);
      el.removeEventListener('pointercancel', cancel);
    };
  }, [ref]);
}

/** True while the reader is moving the pointer or pressing keys; false after a quiet spell. */
export function useActivity(delay = 2600): [boolean, () => void] {
  const [active, setActive] = useState(true);
  const timer = useRef<number>();
  const poke = useRef(() => {});
  poke.current = () => {
    setActive(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setActive(false), delay);
  };
  useEffect(() => {
    const onMove = (e: PointerEvent) => e.pointerType === 'mouse' && poke.current();
    const onKey = () => poke.current();
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('keydown', onKey);
    poke.current();
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('keydown', onKey);
      window.clearTimeout(timer.current);
    };
  }, []);
  return [active, () => poke.current()];
}

/** Writes pointer position into CSS variables (--px / --py, -1…1) for gentle parallax. No React re-renders. */
export function usePointerParallax(ref: RefObject<HTMLElement>, enabled: boolean) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled || !window.matchMedia('(pointer: fine)').matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty('--px', ((e.clientX / window.innerWidth) * 2 - 1).toFixed(3));
        el.style.setProperty('--py', ((e.clientY / window.innerHeight) * 2 - 1).toFixed(3));
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
    };
  }, [ref, enabled]);
}

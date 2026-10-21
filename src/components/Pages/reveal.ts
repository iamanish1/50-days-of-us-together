import type { CSSProperties } from 'react';

/** Marks an element as part of the page's entrance sequence. Order 0 appears first. */
export const reveal = (order = 0) => ({ 'data-reveal': '', style: { '--d': order } as CSSProperties });

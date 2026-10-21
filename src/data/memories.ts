import type { MilestonePage } from './types';
import { slot } from './media';

/**
 * Reusable memory collections — the "firsts" and the "50 little things".
 * PLACEHOLDER — REPLACE WITH REAL STORY. Labels below are examples only.
 */

const P = '[PLACEHOLDER — REPLACE WITH REAL STORY]';

export const firsts: MilestonePage[] = [
  {
    kind: 'milestone',
    draft: true,
    label: 'First hug',
    index: 1,
    date: '[Date]',
    location: '[Place]',
    photo: { image: slot('A photograph from that day', 'rose'), frame: 'polaroid', ratio: 'square', note: '[tiny note]' },
    story: [`${P} Two or three sentences. What happened just before, and what you noticed after.`],
  },
  {
    kind: 'milestone',
    draft: true,
    label: 'First time holding hands',
    index: 2,
    date: '[Date]',
    location: '[Place]',
    story: [`${P} Some firsts don't need a photograph. Let the words carry this one.`],
    quote: '[A line that was said — or not said — in that moment.]',
  },
  {
    kind: 'milestone',
    draft: true,
    label: 'First movie date',
    index: 3,
    date: '[Date]',
    location: '[Cinema]',
    photo: {
      image: slot('Ticket stub, or the two of you after', 'night'),
      frame: 'editorial',
      ratio: 'landscape',
      caption: '[Caption]',
      // Hidden detail: press and hold the photograph to see a second one.
      alternate: { ...slot('A second photo, revealed on long press', 'wine'), note: '[the other version of the night]' },
    },
    story: [`${P} What you watched, where you sat, what you talked about on the way home.`],
  },
  {
    kind: 'milestone',
    draft: true,
    label: 'First kiss',
    index: 4,
    date: '[Date]',
    location: '[Place]',
    story: [`${P} Keep this one short. Leave space around it.`],
  },
];

export const littleThings: string[] = Array.from(
  { length: 50 },
  (_, i) => `[Little thing ${String(i + 1).padStart(2, '0')} — a habit, a phrase, a look. PLACEHOLDER]`,
);

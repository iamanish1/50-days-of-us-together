import type { Book, BookMeta } from './types';
import { chapters } from './chapters';

/**
 * Book-level settings: cover, dedication, closing words.
 * Cover variants can also be previewed with `?cover=photo` (or `photo-type`, `illustrated`) in the URL.
 */
export const meta: BookMeta = {
  titleLines: ['50 Days', 'of Us Together'],
  subtitle: 'Our first little chapter.',
  inscription: 'Since 2 September 2026',
  cover: {
    variant: 'typography',
    // image: photo('cover.jpg', 'Describe the cover photograph'),
    image: { alt: 'Placeholder: cover photograph', label: 'Cover photograph', tone: 'dusk' },
  },
  dedication: {
    to: 'For my bby girl, my cutoo ❤️',
  },
  colophon: ['Made for Kshama.', 'Since 2 September 2026'],
  showDraftMarks: true,
};

/** The note before Chapter 1. */
const prologue: Book['prologue'] = {
  title: '50 Days of Us Together',
  pages: [
    {
      kind: 'letter',
      salutation: 'Hi Kshama,',
      paragraphs: [
        `Yes, my bby girl. I'm actually writing a book for you.`,
        `Okay, technically, it's a **digital book**. 😂\nPhysically toh copy nahi hai abhi, but at least this one you can always carry with you, wherever you go.`,
        `Kal humare 50 days complete ho jayenge.`,
        `And honestly?`,
      ],
    },
    {
      kind: 'text',
      paragraphs: [
        `**It still feels like a dream.**`,
        `Maine bola tha na, I'll do something special for you.`,
        `So yeah...`,
        `This is it.`,
      ],
    },
    {
      kind: 'text',
      paragraphs: [
        `A book about **us**.`,
        `About these first 50 days.`,
        `About the little things, the big things, the stupid things, the beautiful things, and all those moments that somehow became so important to me.`,
      ],
    },
    {
      kind: 'text',
      paragraphs: [
        `But before I tell you about *us*...`,
        `I think you should know a little about **me before you came into my life.**`,
      ],
    },
  ],
};

export const book: Book = { ...meta, prologue, chapters };

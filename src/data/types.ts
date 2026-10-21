/**
 * Content model for the book.
 *
 * Everything the reader sees comes from data that matches these types.
 * To write the real story, edit files in `src/data/` — never the components.
 */

/* ------------------------------------------------------------------ media */

/** Placeholder colouring used while a photograph has not been supplied yet. */
export type PlaceholderTone = 'sand' | 'rose' | 'dusk' | 'wine' | 'sage' | 'night';

/** Focal point in percent (0–100). Keeps faces in frame when an image is cropped. */
export type FocalPoint = { x: number; y: number };

export type ImageAsset = {
  /** Path under /public, e.g. `/media/ch03/first-hug.jpg`. Omit to render a placeholder. */
  src?: string;
  /** Optional responsive sources — see `photo()` in `media.ts`. */
  srcSet?: string;
  sizes?: string;
  /** Always describe the photograph for screen readers. */
  alt: string;
  width?: number;
  height?: number;
  focal?: FocalPoint;
  /** Placeholder only. */
  tone?: PlaceholderTone;
  /** Placeholder only — what kind of picture belongs here. */
  label?: string;
};

/** Every frame has a purpose:
 *  - borderless: the photograph speaks alone
 *  - editorial:  a thin keyline, like a plate in an art book
 *  - polaroid:   an object that was held — for candid, kept moments
 *  - film:       a sequence, a moment in motion
 *  - rounded:    softer, for screenshots and small everyday things
 */
export type Frame = 'borderless' | 'editorial' | 'polaroid' | 'film' | 'rounded';

export type Ratio = 'portrait' | 'landscape' | 'square' | 'tall' | 'wide' | 'fill';

export type Photo = {
  image: ImageAsset;
  frame?: Frame;
  ratio?: Ratio;
  fit?: 'cover' | 'contain';
  caption?: string;
  date?: string;
  location?: string;
  /** A short handwritten note in the margin. Keep it to a few words. */
  note?: string;
  /** Adds a light film grain over the photograph. */
  grain?: boolean;
  /** Hidden detail: caption stays hidden until the photograph is tapped. */
  tapToReveal?: boolean;
  /** Hidden detail: press and hold to see a second photograph. */
  alternate?: ImageAsset & { note?: string };
};

export type AudioClip = {
  title: string;
  /** Path under /public. Omit to show the "recording to come" state. */
  src?: string;
  caption?: string;
};

export type VideoClip = {
  title: string;
  src?: string;
  poster?: ImageAsset;
  caption?: string;
  date?: string;
};

/* ------------------------------------------------------------------ pages */

/** A hidden detail attached to a page. Use two to four across the whole book. */
export type Secret = {
  /** `folio`: tap the page number. `mark`: tap a tiny ✦ placed on the page. */
  via: 'folio' | 'mark';
  message: string;
  signature?: string;
};

type PageBase = {
  /** Optional stable id — handy for deep links. */
  id?: string;
  /** Marks content that is still placeholder copy. Shows a small "draft" tab. */
  draft?: boolean;
  /** Background of the page. `ink` is reserved for rare, cinematic moments. */
  tone?: 'paper' | 'cream' | 'ink';
  secret?: Secret;
  audio?: AudioClip;
};

/**
 * Paragraph strings support *italic* and **bold** emphasis, and `\n` for a line break.
 * A paragraph that is entirely **bold** is set large, as a statement on its own line.
 */
export type Paragraphs = string[];

export type TextPage = PageBase & {
  kind: 'text';
  eyebrow?: string;
  heading?: string;
  paragraphs: Paragraphs;
  dropCap?: boolean;
};

export type ImagePage = PageBase & {
  kind: 'image';
  photo: Photo;
};

export type ImageTextPage = PageBase & {
  kind: 'image-text';
  photo: Photo;
  /** Which edge the photograph bleeds from on wider pages. Narrow screens stack it on top. */
  side?: 'left' | 'right';
  eyebrow?: string;
  heading?: string;
  paragraphs: Paragraphs;
};

export type TwoImagePage = PageBase & {
  kind: 'two-image';
  photos: [Photo, Photo];
  caption?: string;
};

export type GalleryPage = PageBase & {
  kind: 'gallery';
  eyebrow?: string;
  heading?: string;
  /** Two to six photographs. */
  photos: Photo[];
  caption?: string;
};

export type QuotePage = PageBase & {
  kind: 'quote';
  quote: string;
  attribution?: string;
  /** Who said it, when — set in small type. */
  context?: string;
};

export type DatePage = PageBase & {
  kind: 'date';
  day: string;
  month: string;
  year?: string;
  heading?: string;
  photo?: Photo;
  paragraphs: Paragraphs;
};

export type TimelinePage = PageBase & {
  kind: 'timeline';
  eyebrow?: string;
  heading?: string;
  events: { date: string; title: string; text?: string }[];
};

export type LetterPage = PageBase & {
  kind: 'letter';
  place?: string;
  date?: string;
  salutation: string;
  paragraphs: Paragraphs;
  closing?: string;
  signature?: string;
  postscript?: string;
};

export type MilestonePage = PageBase & {
  kind: 'milestone';
  /** e.g. "First hug" */
  label: string;
  /** Numbering within the set of firsts, e.g. 1 → "No. 01" */
  index?: number;
  date?: string;
  location?: string;
  photo?: Photo;
  story: Paragraphs;
  quote?: string;
};

export type ListPage = PageBase & {
  kind: 'list';
  heading: string;
  intro?: string;
  /** All items — the engine splits them across as many pages as needed. */
  items: string[];
  perPage?: number;
};

/** A page that is deliberately almost empty. Give the story room to breathe. */
export type PausePage = PageBase & {
  kind: 'pause';
  line?: string;
};

/** A chat or phone screenshot, always shown whole — never cropped. */
export type ScreenPage = PageBase & {
  kind: 'screen';
  image: ImageAsset;
  caption?: string;
  date?: string;
};

export type VideoPage = PageBase & {
  kind: 'video';
  eyebrow?: string;
  video: VideoClip;
};

export type FinalPage = PageBase & {
  kind: 'final';
  eyebrow: string;
  statement: string;
  paragraphs: Paragraphs;
  signature?: string;
  closing: string;
};

export type Page =
  | TextPage
  | ImagePage
  | ImageTextPage
  | TwoImagePage
  | GalleryPage
  | QuotePage
  | DatePage
  | TimelinePage
  | LetterPage
  | MilestonePage
  | ListPage
  | PausePage
  | ScreenPage
  | VideoPage
  | FinalPage;

export type PageKind = Page['kind'];

/* --------------------------------------------------------------- chapters */

/** Chapter openings rotate between layouts so the book never feels repetitive. */
export type OpeningVariant = 'classic' | 'numeral' | 'image' | 'margin';

export type Chapter = {
  id: string;
  number: number;
  /** Shown instead of the number, e.g. "Bonus". */
  label?: string;
  title: string;
  /** Italic line beneath the title on the opening page. */
  subtitle?: string;
  /** One line shown in the table of contents. */
  description?: string;
  thumbnail?: ImageAsset;
  opening?: { variant?: OpeningVariant; image?: ImageAsset };
  pages: Page[];
};

/* ------------------------------------------------------------------- book */

export type CoverVariant = 'typography' | 'photo' | 'photo-type' | 'illustrated';

export type BookMeta = {
  titleLines: [string, string];
  subtitle?: string;
  /** Bottom of the cover — date range or initials. */
  inscription: string;
  cover: { variant: CoverVariant; image?: ImageAsset };
  dedication?: { to: string; line?: string; secret?: Secret };
  /** Last words on the closing page. */
  colophon?: string[];
  /** Shows a small "draft" tab on pages marked `draft: true`. Turn off when the book is finished. */
  showDraftMarks: boolean;
};

export type Book = BookMeta & {
  /** Pages before Chapter 1 (after the contents) — a note to the reader. No chapter number. */
  prologue?: { title: string; pages: Page[] };
  chapters: Chapter[];
};

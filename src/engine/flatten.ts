import type { Book, Chapter, ImageAsset, ListPage, Page } from '../data/types';

/**
 * Turns the nested book (chapters → pages) into the linear sequence of leaves
 * the reader turns through. Long lists are split here, so content never has to
 * think about pagination.
 */
export type Leaf =
  | { type: 'cover'; key: string; chapter?: undefined }
  | { type: 'dedication'; key: string; chapter?: undefined }
  | { type: 'contents'; key: string; chapter?: undefined }
  | { type: 'opening'; key: string; chapter: Chapter }
  | { type: 'page'; key: string; chapter: Chapter; page: Page; part?: { index: number; total: number; offset: number } }
  | { type: 'end'; key: string; chapter?: undefined };

export type FlatBook = {
  leaves: Leaf[];
  /** Leaf index of each chapter's opening page. */
  chapterStart: Record<string, number>;
  contentsIndex: number;
};

export function flattenBook(book: Book): FlatBook {
  const leaves: Leaf[] = [{ type: 'cover', key: 'cover' }];
  if (book.dedication) leaves.push({ type: 'dedication', key: 'dedication' });
  const contentsIndex = leaves.length;
  leaves.push({ type: 'contents', key: 'contents' });

  if (book.prologue) {
    const prologue: Chapter = { id: 'prologue', number: 0, title: book.prologue.title, pages: book.prologue.pages };
    prologue.pages.forEach((page, i) => leaves.push({ type: 'page', key: page.id ?? `prologue-${i + 1}`, chapter: prologue, page }));
  }

  const chapterStart: Record<string, number> = {};
  for (const chapter of book.chapters) {
    chapterStart[chapter.id] = leaves.length;
    leaves.push({ type: 'opening', key: `${chapter.id}`, chapter });
    chapter.pages.forEach((page, i) => {
      const key = page.id ?? `${chapter.id}-${i + 1}`;
      if (page.kind === 'list') {
        for (const part of splitList(page)) leaves.push({ type: 'page', key: `${key}-${part.index}`, chapter, page, part });
      } else {
        leaves.push({ type: 'page', key, chapter, page });
      }
    });
  }
  leaves.push({ type: 'end', key: 'end' });
  return { leaves, chapterStart, contentsIndex };
}

function splitList(page: ListPage) {
  const per = page.perPage ?? 10;
  const total = Math.max(1, Math.ceil(page.items.length / per));
  return Array.from({ length: total }, (_, index) => ({ index, total, offset: index * per }));
}

/** Every real image source a leaf will show — used to preload upcoming pages. */
export function imagesOf(leaf: Leaf | undefined): string[] {
  if (!leaf) return [];
  const out: string[] = [];
  const walk = (v: unknown) => {
    if (!v || typeof v !== 'object') return;
    if (Array.isArray(v)) return v.forEach(walk);
    const asset = v as ImageAsset;
    if (typeof asset.src === 'string' && typeof asset.alt === 'string' && /\.(jpe?g|png|webp|avif|gif)$/i.test(asset.src)) {
      out.push(asset.src);
    }
    Object.values(v).forEach(walk);
  };
  if (leaf.type === 'page') walk(leaf.page);
  if (leaf.type === 'opening') walk(leaf.chapter.opening);
  return out;
}

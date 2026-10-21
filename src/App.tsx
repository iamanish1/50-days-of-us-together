import { Book } from './components/Book/Book';
import { book } from './data/book';
import type { CoverVariant } from './data/types';

const VARIANTS: CoverVariant[] = ['typography', 'photo', 'photo-type', 'illustrated'];

/** `?cover=photo` previews another cover composition without editing data. */
function coverFromUrl(): CoverVariant {
  const v = new URLSearchParams(window.location.search).get('cover') as CoverVariant | null;
  return v && VARIANTS.includes(v) ? v : book.cover.variant;
}

export default function App() {
  return <Book book={book} coverVariant={coverFromUrl()} />;
}

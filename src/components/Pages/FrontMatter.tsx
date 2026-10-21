import type { Book } from '../../data/types';
import { ContentsList } from '../Navigation/ContentsList';
import { Inline, SecretNote } from '../Typography/Typography';
import { reveal } from './reveal';

export function DedicationLayout({ book }: { book: Book }) {
  const d = book.dedication!;
  return (
    <div className="layout layout--dedication">
      <p className="dedication__to" {...reveal(0)}>
        <Inline text={d.to} />
      </p>
      {d.line && (
        <p className="dedication__line" {...reveal(1.5)}>
          <Inline text={d.line} />
        </p>
      )}
      {d.secret && (
        <span className="dedication__mark" {...reveal(4)}>
          <SecretNote secret={d.secret} label="A small mark" trigger={<span className="mark" aria-hidden="true">✦</span>} />
        </span>
      )}
    </div>
  );
}

export function ContentsLayout({
  book,
  chapterStart,
  onSelect,
}: {
  book: Book;
  chapterStart: Record<string, number>;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="layout layout--contents">
      <h2 className="contents-page__title" {...reveal(0)}>
        Contents
      </h2>
      <ContentsList chapters={book.chapters} chapterStart={chapterStart} onSelect={onSelect} revealItems />
    </div>
  );
}

/** The back page. */
export function EndLayout({ book }: { book: Book }) {
  return (
    <div className="layout layout--end">
      <p className="end__title" {...reveal(0)}>
        {book.titleLines[0]} <em>{book.titleLines[1]}</em>
      </p>
      {book.colophon?.map((line, i) => (
        <p key={i} className="end__line" {...reveal(1 + i)}>
          {line}
        </p>
      ))}
    </div>
  );
}

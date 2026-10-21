import type { Chapter } from '../../data/types';
import { Media } from '../Images/Photo';
import { Inline, pad2 } from '../Typography/Typography';

type Props = {
  chapters: Chapter[];
  chapterStart: Record<string, number>;
  onSelect: (index: number) => void;
  currentChapterId?: string;
  revealItems?: boolean;
};

export function ContentsList({ chapters, chapterStart, onSelect, currentChapterId, revealItems }: Props) {
  return (
    <ol className="contents">
      {chapters.map((c, i) => (
        <li
          key={c.id}
          className={`contents__item ${c.id === currentChapterId ? 'is-current' : ''}`}
          {...(revealItems ? { 'data-reveal': '', style: { '--d': 1 + i * 0.25 } as React.CSSProperties } : {})}
        >
          <button
            type="button"
            className="contents__link"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(chapterStart[c.id]);
            }}
          >
            <span className={`contents__num ${c.label ? 'contents__num--label' : ''}`}>{c.label ?? pad2(c.number)}</span>
            <span className="contents__body">
              <span className="contents__title">
                <Inline text={c.title} />
              </span>
              {c.description && <span className="contents__desc">{c.description}</span>}
            </span>
            {c.thumbnail && (
              <span className="contents__thumb">
                <Media image={c.thumbnail} />
              </span>
            )}
            <span className="contents__page" aria-label={`page ${chapterStart[c.id]}`}>
              {chapterStart[c.id]}
            </span>
          </button>
        </li>
      ))}
    </ol>
  );
}

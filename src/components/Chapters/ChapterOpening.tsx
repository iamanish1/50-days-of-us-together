import type { Chapter, OpeningVariant } from '../../data/types';
import { Media } from '../Images/Photo';
import { reveal } from '../Pages/reveal';
import { Inline, pad2 } from '../Typography/Typography';

const ROTATION: OpeningVariant[] = ['classic', 'numeral', 'image', 'margin'];

/**
 * Chapter openings. Four compositions:
 *  - classic: number above, title low on the page, lots of air
 *  - numeral: an oversized, pale numeral as the page's architecture
 *  - image:   a small photograph sits high; title anchored bottom-left
 *  - margin:  number set vertically in the margin beside a hairline
 */
export function ChapterOpening({ chapter }: { chapter: Chapter }) {
  let variant = chapter.opening?.variant ?? ROTATION[(chapter.number - 1) % ROTATION.length];
  if (variant === 'image' && !chapter.opening?.image) variant = 'classic';
  const n = chapter.label ?? pad2(chapter.number);

  return (
    <div className={`layout opening opening--${variant}`}>
      {variant === 'numeral' && (
        <span className="opening__numeral" aria-hidden="true" {...reveal(0)}>
          {n}
        </span>
      )}
      {variant === 'image' && chapter.opening?.image && (
        <div className="opening__image photo photo--borderless" data-reveal="photo">
          <div className="photo__frame">
            <div className="photo__media">
              <Media image={chapter.opening.image} eager />
            </div>
          </div>
        </div>
      )}
      {variant === 'margin' && (
        <span className="opening__margin" aria-hidden="true" {...reveal(0)}>
          <span className="opening__margin-n">{n}</span>
        </span>
      )}
      <header className="opening__text">
        {variant !== 'numeral' && variant !== 'margin' && (
          <span className="opening__number" {...reveal(0)}>
            {n}
          </span>
        )}
        <h2 className="opening__title" {...reveal(1)}>
          <span className="visually-hidden">{chapter.label ?? `Chapter ${chapter.number}`}: </span>
          <Inline text={chapter.title} />
        </h2>
        {chapter.subtitle && (
          <p className="opening__subtitle" {...reveal(2.5)}>
            <Inline text={chapter.subtitle} />
          </p>
        )}
      </header>
    </div>
  );
}

import type { DatePage, ListPage, MilestonePage, TimelinePage } from '../../data/types';
import { Photo } from '../Images/Photo';
import { Eyebrow, Inline, Prose, pad2 } from '../Typography/Typography';
import { reveal } from './reveal';

/** A date that matters, set like a title — not like a calendar. */
export function DateLayout({ page }: { page: DatePage }) {
  return (
    <div className={`layout layout--date ${page.photo ? 'has-photo' : ''}`}>
      <header className="date__head" {...reveal(0)}>
        <span className="date__day">{page.day}</span>
        <span className="date__month">
          {page.month}
          {page.year && <span className="date__year">{page.year}</span>}
        </span>
      </header>
      {page.photo && <Photo {...page.photo} ratio={page.photo.ratio ?? 'landscape'} className="date__photo" eager revealOrder={1} />}
      <div className="date__story" {...reveal(2)}>
        {page.heading && <Eyebrow>{page.heading}</Eyebrow>}
        <Prose paragraphs={page.paragraphs} />
      </div>
    </div>
  );
}

/** One of the "firsts". Understated: a label, a date, a few lines. */
export function MilestoneLayout({ page }: { page: MilestonePage }) {
  const meta = [page.date, page.location].filter(Boolean);
  return (
    <div className={`layout layout--milestone ${page.photo ? 'has-photo' : 'no-photo'}`}>
      <header className="milestone__head">
        {page.index !== undefined && (
          <span className="milestone__index" {...reveal(0)}>
            No. {pad2(page.index)}
          </span>
        )}
        <h2 className="milestone__label" {...reveal(0)}>
          <Inline text={page.label} />
        </h2>
        {meta.length > 0 && (
          <p className="milestone__meta" {...reveal(1)}>
            {meta.map((m, i) => (
              <span key={i}>{m}</span>
            ))}
          </p>
        )}
      </header>
      {page.photo && (
        <Photo {...page.photo} ratio={page.photo.ratio ?? 'square'} className="milestone__photo" eager revealOrder={1.5} />
      )}
      <div className="milestone__story" {...reveal(2.5)}>
        <Prose paragraphs={page.story} />
        {page.quote && (
          <p className="milestone__quote">
            <Inline text={page.quote} />
          </p>
        )}
      </div>
    </div>
  );
}

export function TimelineLayout({ page }: { page: TimelinePage }) {
  return (
    <div className="layout layout--timeline">
      <header className="timeline__head">
        {page.eyebrow && <Eyebrow {...reveal(0)}>{page.eyebrow}</Eyebrow>}
        {page.heading && (
          <h2 className="t-heading" {...reveal(0)}>
            <Inline text={page.heading} />
          </h2>
        )}
      </header>
      <ol className="timeline">
        {page.events.map((e, i) => (
          <li key={i} className="timeline__event" {...reveal(1 + i * 0.35)}>
            <span className="timeline__date">{e.date}</span>
            <span className="timeline__body">
              <span className="timeline__title">
                <Inline text={e.title} />
              </span>
              {e.text && (
                <span className="timeline__text">
                  <Inline text={e.text} />
                </span>
              )}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Numbered entries ("50 little things"), split across pages by the engine. */
export function ListLayout({ page, part }: { page: ListPage; part?: { index: number; total: number; offset: number } }) {
  const per = page.perPage ?? 10;
  const offset = part?.offset ?? 0;
  const items = page.items.slice(offset, offset + per);
  const first = !part || part.index === 0;
  return (
    <div className={`layout layout--list ${first ? 'is-first' : 'is-continued'}`}>
      <header className="list__head">
        {first ? (
          <>
            <h2 className="t-heading" {...reveal(0)}>
              <Inline text={page.heading} />
            </h2>
            {page.intro && (
              <p className="list__intro" {...reveal(0.5)}>
                <Inline text={page.intro} />
              </p>
            )}
          </>
        ) : (
          <Eyebrow {...reveal(0)}>
            {page.heading} — {pad2(offset + 1)}–{pad2(offset + items.length)}
          </Eyebrow>
        )}
      </header>
      <ol className="list" start={offset + 1}>
        {items.map((text, i) => (
          <li key={offset + i} className="list__item" {...reveal(1 + i * 0.15)}>
            <span className="list__num" aria-hidden="true">
              {pad2(offset + i + 1)}
            </span>
            <span className="list__text">
              <Inline text={text} />
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

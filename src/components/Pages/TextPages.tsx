import type { FinalPage, LetterPage, PausePage, QuotePage, TextPage } from '../../data/types';
import { Eyebrow, Handnote, Inline, Prose } from '../Typography/Typography';
import { reveal } from './reveal';

export function TextLayout({ page }: { page: TextPage }) {
  return (
    <div className="layout layout--text">
      <div className="measure">
        {page.eyebrow && <Eyebrow {...reveal(0)}>{page.eyebrow}</Eyebrow>}
        {page.heading && (
          <h2 className="t-heading" {...reveal(0)}>
            <Inline text={page.heading} />
          </h2>
        )}
        <div {...reveal(1)}>
          <Prose paragraphs={page.paragraphs} dropCap={page.dropCap} />
        </div>
      </div>
    </div>
  );
}

export function QuoteLayout({ page }: { page: QuotePage }) {
  return (
    <div className="layout layout--quote">
      <blockquote className={`quote ${page.quote.length <= 14 ? 'quote--short' : ''}`} {...reveal(0)}>
        <span className="quote__mark" aria-hidden="true">
          “
        </span>
        <p className="quote__text">
          <Inline text={page.quote} />
        </p>
        {(page.attribution || page.context) && (
          <footer className="quote__by" {...reveal(2)}>
            {page.attribution && <cite>{page.attribution}</cite>}
            {page.context && <span>{page.context}</span>}
          </footer>
        )}
      </blockquote>
    </div>
  );
}

/** Intentional silence. */
export function PauseLayout({ page }: { page: PausePage }) {
  return (
    <div className="layout layout--pause">
      {page.line ? (
        <p className="pause__line" {...reveal(1)}>
          <Inline text={page.line} />
        </p>
      ) : (
        <span className="pause__mark" aria-hidden="true" {...reveal(1)} />
      )}
    </div>
  );
}

export function LetterLayout({ page }: { page: LetterPage }) {
  return (
    <div className="layout layout--letter">
      <div className="letter" {...reveal(0)}>
        {(page.place || page.date) && (
          <p className="letter__dateline">{[page.place, page.date].filter(Boolean).join(', ')}</p>
        )}
        <p className="letter__salutation">
          <Inline text={page.salutation} />
        </p>
        <Prose paragraphs={page.paragraphs} className="letter__body" />
        {page.closing && (
          <p className="letter__closing">
            <Inline text={page.closing} />
          </p>
        )}
        {page.signature && <Handnote className="letter__signature">{page.signature}</Handnote>}
        {page.postscript && (
          <p className="letter__ps">
            <Inline text={page.postscript} />
          </p>
        )}
      </div>
    </div>
  );
}

export function FinalLayout({ page }: { page: FinalPage }) {
  return (
    <div className="layout layout--final">
      <Eyebrow className="final__eyebrow" {...reveal(0)}>
        {page.eyebrow}
      </Eyebrow>
      <h2 className="final__statement" {...reveal(1)}>
        <Inline text={page.statement} />
      </h2>
      <div className="final__body" {...reveal(3)}>
        <Prose paragraphs={page.paragraphs} />
        {page.signature && <Handnote className="final__signature">{page.signature}</Handnote>}
      </div>
      <p className="final__closing" {...reveal(5)}>
        {page.closing}
      </p>
    </div>
  );
}

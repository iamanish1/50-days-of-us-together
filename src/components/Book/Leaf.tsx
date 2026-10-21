import { memo } from 'react';
import type { Book, Page } from '../../data/types';
import type { Leaf as LeafData } from '../../engine/flatten';
import { AudioMemory } from '../Audio/AudioMemory';
import { ChapterOpening } from '../Chapters/ChapterOpening';
import { Cover } from '../Cover/Cover';
import { ContentsLayout, DedicationLayout, EndLayout } from '../Pages/FrontMatter';
import { GalleryLayout, ImageLayout, ImageTextLayout, ScreenLayout, TwoImageLayout, VideoLayout } from '../Pages/ImagePages';
import { DateLayout, ListLayout, MilestoneLayout, TimelineLayout } from '../Pages/MemoryPages';
import { FinalLayout, LetterLayout, PauseLayout, QuoteLayout, TextLayout } from '../Pages/TextPages';
import { SecretNote } from '../Typography/Typography';
import type { CoverVariant } from '../../data/types';

export type LeafPhase = 'current' | 'enter' | 'leave';

type Props = {
  leaf: LeafData;
  index: number;
  total: number;
  phase: LeafPhase;
  book: Book;
  chapterStart: Record<string, number>;
  coverVariant: CoverVariant;
  onSelect: (index: number) => void;
};

/** Pages that are pictures or silences don't carry running heads or page numbers — as in a printed book. */
const QUIET: Page['kind'][] = ['image', 'pause', 'final'];

export const Leaf = memo(function Leaf({ leaf, index, total, phase, book, chapterStart, coverVariant, onSelect }: Props) {
  const page = leaf.type === 'page' ? leaf.page : undefined;
  const quiet = leaf.type !== 'page' || QUIET.includes(page!.kind);
  const showFolio = !quiet || leaf.type === 'contents' || leaf.type === 'dedication';
  const runningHead = leaf.type === 'page' && !quiet ? leaf.chapter.title : undefined;
  const tone = leaf.type === 'cover' ? 'cover' : (page?.tone ?? 'paper');
  const kind = leaf.type === 'page' ? page!.kind : leaf.type;
  const secret = page?.secret;
  const recto = index % 2 === 1;

  const label =
    leaf.type === 'cover'
      ? 'Cover'
      : leaf.type === 'opening'
        ? `${leaf.chapter.label ?? `Chapter ${leaf.chapter.number}`}, ${leaf.chapter.title}`
        : `Page ${index} of ${total - 1}`;

  return (
    <article
      className={`leaf leaf--${phase} page page--${kind} tone-${tone} ${recto ? 'is-recto' : 'is-verso'}`}
      aria-roledescription="page"
      aria-label={label}
      aria-hidden={phase === 'leave' || undefined}
    >
      {leaf.type === 'cover' ? (
        <Cover meta={book} variant={coverVariant} />
      ) : (
        <>
          <div className="page__body">
            {renderLeaf(leaf, book, chapterStart, onSelect)}
            {page?.audio && (
              <div className="page__audio" data-reveal="" style={{ '--d': 3 } as React.CSSProperties}>
                <AudioMemory clip={page.audio} />
              </div>
            )}
          </div>

          {runningHead && (
            <p className="page__running" aria-hidden="true">
              {runningHead}
            </p>
          )}

          {page?.draft && book.showDraftMarks && (
            <span className="page__draft" title="Placeholder — replace with real story">
              Placeholder — replace with real story
            </span>
          )}

          {secret?.via === 'mark' && (
            <span className="page__mark">
              <SecretNote secret={secret} label="A small mark" trigger={<span className="mark">✦</span>} />
            </span>
          )}

          {showFolio && (
            <span className="page__folio">
              {secret?.via === 'folio' ? (
                <SecretNote secret={secret} label={`Page ${index}`} trigger={<span className="folio">{index}</span>} />
              ) : (
                <span className="folio" aria-hidden="true">
                  {index}
                </span>
              )}
            </span>
          )}
        </>
      )}
    </article>
  );
});

function renderLeaf(leaf: LeafData, book: Book, chapterStart: Record<string, number>, onSelect: (i: number) => void) {
  switch (leaf.type) {
    case 'dedication':
      return <DedicationLayout book={book} />;
    case 'contents':
      return <ContentsLayout book={book} chapterStart={chapterStart} onSelect={onSelect} />;
    case 'opening':
      return <ChapterOpening chapter={leaf.chapter} />;
    case 'end':
      return <EndLayout book={book} />;
    case 'page':
      return renderPage(leaf.page, leaf.part);
    default:
      return null;
  }
}

function renderPage(page: Page, part?: { index: number; total: number; offset: number }) {
  switch (page.kind) {
    case 'text':
      return <TextLayout page={page} />;
    case 'image':
      return <ImageLayout page={page} />;
    case 'image-text':
      return <ImageTextLayout page={page} />;
    case 'two-image':
      return <TwoImageLayout page={page} />;
    case 'gallery':
      return <GalleryLayout page={page} />;
    case 'quote':
      return <QuoteLayout page={page} />;
    case 'date':
      return <DateLayout page={page} />;
    case 'timeline':
      return <TimelineLayout page={page} />;
    case 'letter':
      return <LetterLayout page={page} />;
    case 'milestone':
      return <MilestoneLayout page={page} />;
    case 'list':
      return <ListLayout page={page} part={part} />;
    case 'pause':
      return <PauseLayout page={page} />;
    case 'screen':
      return <ScreenLayout page={page} />;
    case 'video':
      return <VideoLayout page={page} />;
    case 'final':
      return <FinalLayout page={page} />;
  }
}

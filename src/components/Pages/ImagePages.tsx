import type { GalleryPage, ImagePage, ImageTextPage, ScreenPage, TwoImagePage, VideoPage } from '../../data/types';
import { Media, Photo } from '../Images/Photo';
import { Eyebrow, Inline, Prose } from '../Typography/Typography';
import { VideoMemory } from '../Video/VideoMemory';
import { reveal } from './reveal';

/** One photograph owns the page. */
export function ImageLayout({ page }: { page: ImagePage }) {
  return (
    <div className="layout layout--bleed">
      <Photo {...page.photo} bleed parallax eager ratio="fill" />
    </div>
  );
}

export function ImageTextLayout({ page }: { page: ImageTextPage }) {
  return (
    <div className={`layout layout--image-text side-${page.side ?? 'left'}`}>
      <Photo {...page.photo} ratio="fill" className="image-text__photo" parallax eager />
      <div className="image-text__story">
        {page.eyebrow && <Eyebrow {...reveal(1)}>{page.eyebrow}</Eyebrow>}
        {page.heading && (
          <h2 className="t-heading t-heading--sm" {...reveal(1)}>
            <Inline text={page.heading} />
          </h2>
        )}
        <div {...reveal(2)}>
          <Prose paragraphs={page.paragraphs} />
        </div>
      </div>
    </div>
  );
}

/** Two photographs, two crops — composed off-axis like an art-book spread. */
export function TwoImageLayout({ page }: { page: TwoImagePage }) {
  const [a, b] = page.photos;
  return (
    <div className="layout layout--two">
      <Photo {...a} ratio={a.ratio ?? 'portrait'} className="two__a" eager revealOrder={0} />
      <Photo {...b} ratio={b.ratio ?? 'landscape'} className="two__b" eager revealOrder={2} />
      {page.caption && (
        <p className="two__caption caption" {...reveal(3)}>
          <Inline text={page.caption} />
        </p>
      )}
    </div>
  );
}

export function GalleryLayout({ page }: { page: GalleryPage }) {
  const photos = page.photos.slice(0, 6);
  const film = photos.every((p) => p.frame === 'film');
  return (
    <div className={`layout layout--gallery ${film ? 'is-film' : ''}`}>
      {(page.eyebrow || page.heading) && (
        <header className="gallery__head">
          {page.eyebrow && <Eyebrow {...reveal(0)}>{page.eyebrow}</Eyebrow>}
          {page.heading && (
            <h2 className="t-heading t-heading--sm" {...reveal(0)}>
              <Inline text={page.heading} />
            </h2>
          )}
        </header>
      )}
      <div className={`gallery gallery--n${photos.length}`}>
        {photos.map((p, i) => (
          <Photo key={i} {...p} ratio="fill" className={`gallery__item gallery__item--${i + 1}`} revealOrder={1 + i * 0.5} />
        ))}
      </div>
      {page.caption && (
        <p className="gallery__caption caption" {...reveal(4)}>
          <Inline text={page.caption} />
        </p>
      )}
    </div>
  );
}

/** A screenshot laid on the page like a phone set down on paper. */
export function ScreenLayout({ page }: { page: ScreenPage }) {
  return (
    <div className="layout layout--screen">
      <figure className="screen" data-reveal="photo">
        <div className="screen__shot">
          <Media image={page.image} fit="contain" eager />
        </div>
        {(page.caption || page.date) && (
          <figcaption className="photo__caption screen__caption">
            {page.caption && (
              <span className="photo__caption-text">
                <Inline text={page.caption} />
              </span>
            )}
            {page.date && <span className="photo__caption-meta">{page.date}</span>}
          </figcaption>
        )}
      </figure>
    </div>
  );
}

export function VideoLayout({ page }: { page: VideoPage }) {
  return (
    <div className="layout layout--video">
      {page.eyebrow && <Eyebrow {...reveal(0)}>{page.eyebrow}</Eyebrow>}
      <VideoMemory clip={page.video} />
    </div>
  );
}

# 50 Days of Us Together

A private digital book. This repository is the **book engine and design system**. Everything you see is a placeholder, waiting for the real story.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # static site in dist/, which can be hosted anywhere
```

## Reading

| Desktop | Phone / tablet |
| --- | --- |
| `→` `←`, `Space` / `Shift+Space`, `PageUp`/`PageDown` | Swipe left / right |
| `Home` returns to the cover, `End` goes to the last page | Tap the outer edges to turn, tap the middle for controls |
| Move the mouse to show the controls | |

`Esc` closes the contents. The URL remembers the page (`/#12`), so a refresh returns to the same place.

## Writing the story

Edit only the files in `src/data/`. Components never need to change.

| File | What it holds |
| --- | --- |
| `book.ts` | Cover, dedication, back-page lines, and the `showDraftMarks` switch |
| `chapters.ts` | The chapters and their pages, in reading order |
| `memories.ts` | Reusable sets: the "firsts" and the "50 little things" |
| `types.ts` | The content model: every page type and its fields |

Every placeholder is in `[brackets]` and its page is marked `draft: true`. When a page is real, remove `draft`. When the whole book is done, set `showDraftMarks: false`.

In paragraph text, `*asterisks*` set a phrase in italics.

### Page types

| `kind` | Use it for |
| --- | --- |
| `text` | Story pages. `dropCap: true` for the first page of a chapter. |
| `image` | One photograph fills the page. |
| `image-text` | Photograph on one side, story on the other (it stacks on phones). |
| `two-image` | Two photographs, two crops. |
| `gallery` | 2 to 6 photographs. If every frame is `film`, it becomes a film strip. |
| `quote` | One sentence, set large. |
| `date` | A day that matters: `day`, `month`, photo, a few lines. |
| `milestone` | One of the firsts: label, date, place, photo, story, quote. |
| `timeline` | Events in order. |
| `list` | Numbered entries. The engine splits long lists across pages (`perPage`, default 10). |
| `letter` | Long writing. It scrolls if it needs to. |
| `video` | A short clip with a poster frame. It never autoplays. |
| `pause` | A nearly empty page. Use these to give the story room. |
| `final` | The last page, on a dark tone. |

Any page can also take `audio` (a "listen to this memory" player), `tone: 'cream' | 'ink'`, and a `secret`.

Each chapter's `opening.variant` (`classic`, `numeral`, `image`, `margin`) sets how its opening page is composed. Mix them so the openings don't repeat.

### Photographs

Put files in `public/media/` and reference them with `photo()`:

```ts
import { photo } from './media';

photo: {
  image: photo('ch03/first-hug.jpg', 'Describe the photo for screen readers', { focal: { x: 50, y: 30 } }),
  frame: 'polaroid',     // borderless · editorial · polaroid · film · rounded
  ratio: 'square',       // portrait · landscape · square · tall · wide
  caption: '…', date: '…', location: '…',
  note: 'a few words',   // handwritten, in the margin
  grain: true,
}
```

**Sizing:** export JPEGs at about 2000px on the long edge, quality around 80. For faster phones, also export `name-800.jpg` and `name-1600.jpg` and pass `{ widths: [800, 1600] }`. The browser then picks the right size. Images load lazily, and the next two pages are preloaded in the background.

Until a photograph exists, `slot('what goes here', 'rose')` shows a tonal placeholder.

### Hidden details (use 2 to 4 in the whole book)

The prototype includes one of each:

- **Folio secret.** On a page, `secret: { via: 'folio', message }` hides a note behind the page number. (Example: page 18.)
- **Mark secret.** `via: 'mark'` adds a tiny ✦ that unfolds a note. (Example: the dedication.)
- **Tap to reveal.** On a photo, `tapToReveal: true` keeps its caption hidden until it is tapped. (Example: page 21.)
- **Hold for another photo.** On a photo, `alternate: {...}` shows a second photograph while it is pressed and held. (Example: page 14.)

### Cover

Set `cover.variant` in `book.ts` to `typography`, `photo`, `photo-type`, or `illustrated`. To preview a variant without editing anything, add it to the URL: `/?cover=photo`.

## Design system

- `src/styles/tokens.css`: colours, faces, page geometry, motion. Change the palette here.
- `src/styles/typography.css`: type scale, reading measure, marginalia.
- `src/styles/book.css`: the book object, page turning, entrance motion, phone layout.
- `src/styles/components.css` / `pages.css`: photos, media, navigation, page layouts.

Type is sized in container units, so a page composes the same way as a bound desktop page and as a full-screen phone page. `prefers-reduced-motion` replaces page turns with a short fade and removes entrance motion and parallax.

import type { BookMeta, CoverVariant } from '../../data/types';
import { Media } from '../Images/Photo';

/**
 * The cover. Four interchangeable compositions driven by `meta.cover.variant`:
 * typography · photo · photo-type · illustrated
 */
export function Cover({ meta, variant }: { meta: BookMeta; variant: CoverVariant }) {
  const image = meta.cover.image;
  const withPhoto = (variant === 'photo' || variant === 'photo-type') && image;
  const [first, second] = meta.titleLines;

  return (
    <div className={`cover cover--${withPhoto ? variant : variant === 'illustrated' ? 'illustrated' : 'typography'}`}>
      <span className="cover__spine" aria-hidden="true" />
      {withPhoto && variant === 'photo' && (
        <div className="cover__bleed photo photo--grain">
          <div className="photo__media">
            <Media image={image} eager />
          </div>
        </div>
      )}

      <div className="cover__inner">
        {variant === 'illustrated' && <CoverMark />}
        {withPhoto && variant === 'photo-type' && (
          <div className="cover__plate photo photo--editorial">
            <div className="photo__frame">
              <div className="photo__media">
                <Media image={image} eager />
              </div>
            </div>
          </div>
        )}

        <h1 className="cover__title">
          <span className="cover__title-1">{first}</span>
          <span className="cover__title-2">{second}</span>
        </h1>
        {meta.subtitle && <p className="cover__subtitle">{meta.subtitle}</p>}
        <p className="cover__inscription">{meta.inscription}</p>
      </div>
    </div>
  );
}

/** A single restrained line drawing: two paths that meet. */
function CoverMark() {
  return (
    <svg className="cover__mark" viewBox="0 0 120 60" aria-hidden="true">
      <circle cx="47" cy="30" r="22" />
      <circle cx="73" cy="30" r="22" />
    </svg>
  );
}

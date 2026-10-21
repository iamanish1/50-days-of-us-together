import { useEffect, useRef, useState } from 'react';
import type { VideoClip } from '../../data/types';
import { Media } from '../Images/Photo';

/** A short clip presented like a film still. Plays only when asked, with sound only after a click. */
export function VideoMemory({ clip }: { clip: VideoClip }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const available = Boolean(clip.src);

  useEffect(() => () => ref.current?.pause(), []);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    setStarted(true);
    if (el.paused) void el.play();
    else el.pause();
  };

  return (
    <figure className="video" onClick={(e) => e.stopPropagation()} data-reveal="photo">
      <div className={`video__screen ${started ? 'is-started' : ''}`}>
        {available && (
          <video
            ref={ref}
            src={clip.src}
            poster={clip.poster?.src}
            preload="none"
            playsInline
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => {
              setPlaying(false);
              setStarted(false);
            }}
            onTimeUpdate={(e) => setProgress(e.currentTarget.currentTime / (e.currentTarget.duration || 1))}
          />
        )}
        {!started && clip.poster && (
          <div className="video__poster">
            <Media image={clip.poster} />
          </div>
        )}
        <button
          type="button"
          className={`video__play ${playing ? 'is-playing' : ''}`}
          onClick={toggle}
          disabled={!available}
          aria-label={playing ? `Pause: ${clip.title}` : `Play: ${clip.title}`}
        >
          <span className="video__play-ring">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {playing ? (
                <g fill="currentColor">
                  <rect x="8" y="7" width="2.2" height="10" />
                  <rect x="13.8" y="7" width="2.2" height="10" />
                </g>
              ) : (
                <path d="M9.5 7.2v9.6l7.6-4.8z" fill="currentColor" />
              )}
            </svg>
          </span>
          {!available && <span className="video__soon">Video to come</span>}
        </button>
        {started && <span className="video__progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />}
      </div>
      <figcaption className="photo__caption">
        <span className="photo__caption-text">{clip.caption ?? clip.title}</span>
        {clip.date && <span className="photo__caption-meta">{clip.date}</span>}
      </figcaption>
    </figure>
  );
}

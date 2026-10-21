import { useEffect, useRef, useState } from 'react';
import type { AudioClip } from '../../data/types';

const fmt = (s: number) => (Number.isFinite(s) ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}` : '–:––');

/** A quiet, book-like audio player. Never autoplays. */
export function AudioMemory({ clip }: { clip: AudioClip }) {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(NaN);
  const available = Boolean(clip.src);

  // Stop when the page is turned away (component unmounts).
  useEffect(() => () => ref.current?.pause(), []);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) void el.play();
    else el.pause();
  };

  const progress = duration > 0 ? time / duration : 0;

  return (
    <div className={`audio ${available ? '' : 'is-unavailable'}`} onClick={(e) => e.stopPropagation()}>
      {available && (
        <audio
          ref={ref}
          src={clip.src}
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        />
      )}
      <button
        type="button"
        className="audio__play"
        onClick={toggle}
        disabled={!available}
        aria-label={playing ? `Pause: ${clip.title}` : `Play: ${clip.title}`}
      >
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
      </button>
      <div className="audio__body">
        <div className="audio__title">{clip.title}</div>
        <div className="audio__track">
          <input
            type="range"
            className="audio__seek"
            min={0}
            max={1000}
            value={Math.round(progress * 1000)}
            disabled={!available || !(duration > 0)}
            aria-label="Seek"
            aria-valuetext={`${fmt(time)} of ${fmt(duration)}`}
            onChange={(e) => {
              if (ref.current && duration > 0) ref.current.currentTime = (Number(e.target.value) / 1000) * duration;
            }}
            style={{ '--p': progress } as React.CSSProperties}
          />
          <span className="audio__time">{available ? `${fmt(time)} / ${fmt(duration)}` : 'Recording to come'}</span>
        </div>
        {clip.caption && <div className="audio__caption">{clip.caption}</div>}
      </div>
    </div>
  );
}

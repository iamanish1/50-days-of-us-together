import { Fragment, useId, useState, type HTMLAttributes, type ReactNode } from 'react';
import type { Paragraphs, Secret } from '../../data/types';

/** Renders **bold**, *italic* and line breaks (\n) inside a plain string. */
export function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\n)/g);
  return (
    <>
      {parts.map((p, i) => {
        if (p === '\n') return <br key={i} />;
        if (p.startsWith('**') && p.endsWith('**') && p.length > 4) return <strong key={i}>{p.slice(2, -2)}</strong>;
        if (p.startsWith('*') && p.endsWith('*') && p.length > 2) return <em key={i}>{p.slice(1, -1)}</em>;
        return <Fragment key={i}>{p}</Fragment>;
      })}
    </>
  );
}

/** A paragraph that is nothing but **bold** stands alone as a statement. */
const isStatement = (p: string) => /^\*\*[^*]+\*\*(\s*\p{Extended_Pictographic}️?)*$/u.test(p.trim());

export function Prose({ paragraphs, dropCap, className = '' }: { paragraphs: Paragraphs; dropCap?: boolean; className?: string }) {
  return (
    <div className={`prose ${dropCap ? 'prose--dropcap' : ''} ${className}`}>
      {paragraphs.map((p, i) => (
        <p key={i} className={isStatement(p) ? 'prose__statement' : undefined}>
          <Inline text={p} />
        </p>
      ))}
    </div>
  );
}

export function Eyebrow({ children, className = '', ...rest }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`eyebrow ${className}`} {...rest}>
      {children}
    </p>
  );
}

/** Handwritten marginalia. Few words only. */
export function Handnote({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`handnote ${className}`}>{children}</span>;
}

export const pad2 = (n: number) => String(n).padStart(2, '0');

/**
 * A hidden note. `trigger` renders whatever opens it (a page number, a tiny mark).
 * The note itself unfolds in place as a small slip of paper.
 */
export function SecretNote({ secret, trigger, label }: { secret: Secret; trigger: ReactNode; label: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <span className={`secret ${open ? 'is-open' : ''}`}>
      <button
        type="button"
        className="secret__trigger"
        aria-expanded={open}
        aria-controls={id}
        aria-label={label}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
      >
        {trigger}
      </button>
      <span id={id} className="secret__slip" role="note" hidden={!open}>
        <span className="secret__msg">{secret.message}</span>
        {secret.signature && <span className="secret__sig handnote">— {secret.signature}</span>}
      </span>
    </span>
  );
}

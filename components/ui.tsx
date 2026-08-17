import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-6 border-b border-rule pb-5">
        <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
        <h2 className="font-serif text-3xl font-medium leading-tight text-ink sm:text-[2.2rem]">
          {title}
        </h2>
        {intro && (
          <div className="prose-guide mt-3 max-w-2xl text-[15.5px] leading-relaxed text-ink-soft">
            {intro}
          </div>
        )}
      </div>
      <div className="space-y-5">{children}</div>
    </section>
  );
}

export function Callout({
  tone = "note",
  title,
  children,
}: {
  tone?: "note" | "warn" | "tip" | "why";
  title?: string;
  children: ReactNode;
}) {
  const styles = {
    note: "border-plum/25 bg-plum-soft text-ink",
    warn: "border-amber/40 bg-amber-soft text-ink",
    tip: "border-sage/35 bg-sage-soft text-ink",
    why: "border-rule bg-paper-deep text-ink-soft",
  }[tone];
  const labels = { note: "Note", warn: "Heads up", tip: "Tip", why: "Why" };
  return (
    <div className={`my-4 rounded-xl border px-4 py-3 text-[14.5px] leading-relaxed ${styles}`}>
      <span className="mr-2 font-semibold">{title ?? labels[tone]}:</span>
      <span>{children}</span>
    </div>
  );
}

export function LinkButton({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: ReactNode;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-sm font-medium no-underline! transition ${
        primary
          ? "border-accent bg-accent text-white! hover:bg-ink hover:border-ink"
          : "border-rule bg-card text-ink! hover:border-ink"
      }`}
    >
      {children}
      <span aria-hidden className="text-[0.85em] opacity-70">
        ↗
      </span>
    </a>
  );
}

export function Links({ children }: { children: ReactNode }) {
  return <div className="mt-4 flex flex-wrap gap-2">{children}</div>;
}

export function Ol({ children }: { children: ReactNode }) {
  return (
    <ol className="my-3 list-decimal space-y-1.5 pl-5 marker:font-mono marker:text-xs marker:text-ink-faint">
      {children}
    </ol>
  );
}

export function Ul({ children }: { children: ReactNode }) {
  return <ul className="my-3 list-disc space-y-1.5 pl-5 marker:text-ink-faint">{children}</ul>;
}

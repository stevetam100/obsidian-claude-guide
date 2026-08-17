"use client";

import { useEffect, useState, type ReactNode } from "react";

const KEY = "vault-guide-progress-v1";

function readProgress(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(KEY) ?? "{}");
  } catch {
    return {};
  }
}

type Props = {
  id: string;
  number: string;
  title: string;
  time?: string;
  children: ReactNode;
};

export function Step({ id, number, title, time, children }: Props) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDone(Boolean(readProgress()[id]));
  }, [id]);

  function toggle() {
    const next = !done;
    setDone(next);
    const all = readProgress();
    all[id] = next;
    window.localStorage.setItem(KEY, JSON.stringify(all));
    window.dispatchEvent(new Event("vault-guide-progress"));
  }

  return (
    <article
      id={id}
      className={`relative rounded-2xl border border-rule bg-card p-6 shadow-[0_1px_0_rgba(0,0,0,0.03)] sm:p-8 ${
        done ? "step-done" : ""
      }`}
    >
      <div className="flex items-start gap-4">
        <button
          type="button"
          onClick={toggle}
          aria-pressed={done}
          aria-label={done ? "Mark step not done" : "Mark step done"}
          className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 font-mono text-sm font-semibold transition ${
            done
              ? "border-sage bg-sage text-white"
              : "border-ink/20 bg-paper text-ink hover:border-accent hover:text-accent"
          }`}
        >
          {done ? "✓" : number}
        </button>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-serif text-[1.35rem] font-medium leading-tight text-ink">
              {title}
            </h3>
            {time && (
              <span className="text-xs font-medium uppercase tracking-wider text-ink-faint">
                {time}
              </span>
            )}
          </div>
          <div className="prose-guide mt-3 text-[15.5px] leading-relaxed text-ink-soft">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}

export function ProgressBar({ total }: { total: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const update = () =>
      setCount(Object.values(readProgress()).filter(Boolean).length);
    update();
    window.addEventListener("vault-guide-progress", update);
    return () => window.removeEventListener("vault-guide-progress", update);
  }, []);

  const pct = Math.round((count / total) * 100);

  return (
    <div className="flex items-center gap-3 text-xs text-ink-soft">
      <div className="h-1.5 w-28 overflow-hidden rounded-full bg-paper-deep">
        <div
          className="h-full rounded-full bg-sage transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="font-mono tabular-nums">
        {count}/{total} done
      </span>
    </div>
  );
}

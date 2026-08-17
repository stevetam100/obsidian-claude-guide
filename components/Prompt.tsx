"use client";

import { useState } from "react";

type Props = {
  label?: string;
  children: string;
  variant?: "claude" | "terminal";
};

export function Prompt({ label, children, variant = "claude" }: Props) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    const text = children.trim();
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch {
      // Fallback for browsers/contexts where the async clipboard API is unavailable.
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        ok = document.execCommand("copy");
      } catch {
        ok = false;
      }
      document.body.removeChild(ta);
    }
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  }

  const heading =
    label ?? (variant === "claude" ? "Paste this into Claude" : "Type this");

  return (
    <div className="my-4 overflow-hidden rounded-xl border border-rule bg-code-bg text-code-ink shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-2">
        <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-code-ink/60">
          <span
            className={`inline-block h-2 w-2 rounded-full ${
              variant === "claude" ? "bg-accent" : "bg-sage"
            }`}
          />
          {heading}
        </span>
        <button
          type="button"
          onClick={copy}
          className="rounded-md border border-white/15 px-2.5 py-1 text-xs font-medium text-code-ink/80 transition hover:border-white/40 hover:text-code-ink"
          aria-live="polite"
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </div>
      <pre className="whitespace-pre-wrap break-words px-4 py-3.5 font-mono text-[13.5px] leading-relaxed">
        {children.trim()}
      </pre>
    </div>
  );
}

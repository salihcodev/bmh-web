"use client";

import { useState } from "react";

export function CopyButton({ value, label, copied }: { value: string; label: string; copied: string }) {
  const [done, setDone] = useState(false);

  return (
    <button
      type="button"
      className="inline-flex h-11 items-center rounded-full border border-line px-4 text-sm font-medium dark:border-white/15"
      onClick={() => {
        navigator.clipboard
          ?.writeText(value)
          .then(() => {
            setDone(true);
            window.setTimeout(() => setDone(false), 2000);
          })
          .catch(() => setDone(false));
      }}
    >
      {done ? copied : label}
    </button>
  );
}

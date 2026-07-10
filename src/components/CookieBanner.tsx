"use client";

import { useEffect, useState } from "react";

export function CookieBanner() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    setShown(localStorage.getItem("cookie-consent") === null);
  }, []);

  if (!shown) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-modal="false"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line/70 bg-surface/95 p-4 backdrop-blur-md sm:p-5"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          We use cookies for basic analytics.{" "}
          <a href="/privacy" className="underline hover:text-ink">
            Learn more
          </a>
          .
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => {
              localStorage.setItem("cookie-consent", "accepted");
              setShown(false);
            }}
            className="min-h-[44px] rounded-full bg-primary px-5 text-sm font-medium text-ink transition-colors hover:bg-accent [touch-action:manipulation]"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => {
              localStorage.setItem("cookie-consent", "declined");
              setShown(false);
            }}
            className="min-h-[44px] rounded-full border border-line px-5 text-sm font-medium text-ink transition-colors hover:border-muted [touch-action:manipulation]"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}

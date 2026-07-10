export function Footer() {
  return (
    <footer className="border-t border-line/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-heading text-lg font-semibold tracking-tight">
              Custom Cuts Tree Service
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Watertown, SD 57201
              <br />
              <a href="tel:+16058846393" className="hover:text-ink">
                (605) 884-6393
              </a>
            </p>
          </div>

          <nav aria-label="Legal" className="flex flex-col gap-2 text-sm">
            <a href="/privacy" className="text-muted transition-colors hover:text-ink">
              Privacy Policy
            </a>
            <a href="/terms" className="text-muted transition-colors hover:text-ink">
              Terms of Service
            </a>
            <a
              href="/accessibility"
              className="text-muted transition-colors hover:text-ink"
            >
              Accessibility
            </a>
          </nav>
        </div>

        <p className="mt-10 text-xs text-muted">
          © {new Date().getFullYear()} Custom Cuts Tree Service. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

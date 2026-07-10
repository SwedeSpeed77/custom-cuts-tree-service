import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | Custom Cuts Tree Service",
  description: "Accessibility statement for Custom Cuts Tree Service, Watertown, SD.",
};

export default function AccessibilityPage() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <h1 className="font-heading text-4xl font-semibold tracking-tight">
        Accessibility Statement
      </h1>
      <p className="mt-2 text-sm text-muted">Last reviewed: July 10, 2026</p>

      <div className="mt-10 space-y-8 leading-relaxed text-muted">
        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">
            Our commitment
          </h2>
          <p className="mt-3">
            Custom Cuts Tree Service is committed to making this website
            usable by everyone. We aim to conform to the Web Content
            Accessibility Guidelines (WCAG) 2.1 Level AA.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">
            What we've done
          </h2>
          <p className="mt-3">
            This site is built with semantic HTML, keyboard-navigable menus
            and links, visible focus states, sufficient color contrast, and
            respects your device's reduced-motion setting. Text can be
            resized up to 200% without loss of content.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">
            Known limitations
          </h2>
          <p className="mt-3">
            The embedded Google Map on the service area section relies on
            Google's own accessibility support, which we don't control. If
            you have trouble with the map, our address and service area are
            also available as plain text on the same page.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">
            Feedback
          </h2>
          <p className="mt-3">
            If you encounter an accessibility barrier on this site, call
            (605) 884-6393 and we'll do our best to address it promptly.
          </p>
        </section>
      </div>
    </main>
  );
}

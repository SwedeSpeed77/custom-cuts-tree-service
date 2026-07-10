import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Custom Cuts Tree Service",
  description: "Terms of Service for Custom Cuts Tree Service, Watertown, SD.",
};

export default function TermsPage() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <h1 className="font-heading text-4xl font-semibold tracking-tight">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-muted">Last updated: July 10, 2026</p>

      <div className="mt-10 space-y-8 leading-relaxed text-muted">
        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">
            Who these terms apply to
          </h2>
          <p className="mt-3">
            These terms apply to anyone who visits this website or requests
            a quote or service from Custom Cuts Tree Service, a sole
            proprietorship owned and operated by Jake Brower in Watertown,
            South Dakota.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">
            What this service is
          </h2>
          <p className="mt-3">
            Custom Cuts Tree Service provides tree removal, pruning,
            trimming, stump grinding, storm cleanup, land clearing, and
            debris hauling to properties in and around Watertown, SD. This
            website provides information about those services; it does not
            book or confirm appointments automatically. Jobs are quoted and
            scheduled directly by phone.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">
            Payment terms
          </h2>
          <p className="mt-3">
            Pricing is provided as a quote before work begins. Payment terms
            are agreed on directly with the customer at the time of the
            quote.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">
            Limitation of liability
          </h2>
          <p className="mt-3">
            While every job is performed with care, tree work carries
            inherent risk. Custom Cuts Tree Service is not liable for
            pre-existing property conditions or damage arising from
            circumstances outside normal, reasonably foreseeable operations.
            Any specific liability terms for a job are discussed directly
            with the customer prior to work starting.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">
            Governing law
          </h2>
          <p className="mt-3">
            These terms are governed by the laws of the State of South
            Dakota.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">
            Dispute resolution
          </h2>
          <p className="mt-3">
            Any disputes will first be addressed directly between the
            customer and Custom Cuts Tree Service in good faith before any
            formal action is pursued.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">
            Contact
          </h2>
          <p className="mt-3">Questions about these terms? Call (605) 884-6393.</p>
        </section>
      </div>
    </main>
  );
}

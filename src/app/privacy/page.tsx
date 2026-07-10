import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Custom Cuts Tree Service",
  description: "Privacy Policy for Custom Cuts Tree Service, Watertown, SD.",
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <h1 className="font-heading text-4xl font-semibold tracking-tight">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted">Last updated: July 10, 2026</p>

      <div className="mt-10 space-y-8 leading-relaxed text-muted">
        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">
            What we collect
          </h2>
          <p className="mt-3">
            When you call, email, or use the contact information on this
            site, Custom Cuts Tree Service may collect your name, phone
            number, email address, property address, and any details you
            share about the job you'd like done. This site also uses basic
            analytics cookies to understand how visitors use the site, and
            an embedded Google Map to show our service area.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">
            How it's used
          </h2>
          <p className="mt-3">
            Information you provide is used only to respond to your quote
            request or job inquiry and to schedule and complete work. We do
            not sell, rent, or share your personal information with third
            parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">
            Who it's shared with
          </h2>
          <p className="mt-3">
            We may share limited information with service providers that
            help run this site — for example, hosting (Vercel) and basic
            analytics tools — solely to operate and improve the site.
            Embedding a Google Map on this site means Google may collect
            data per their own privacy policy when that map loads.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">
            Cookies
          </h2>
          <p className="mt-3">
            This site uses a small number of cookies for basic analytics.
            You can decline non-essential cookies using the banner shown on
            your first visit; declining does not affect your ability to use
            the site or contact us.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">
            How long we keep it
          </h2>
          <p className="mt-3">
            Contact and job information is kept only as long as needed to
            complete the work and for basic business recordkeeping, after
            which it's deleted.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">
            Your rights
          </h2>
          <p className="mt-3">
            You can ask us at any time what information we have about you,
            and request that it be corrected or deleted. Contact us at (605)
            884-6393 to make a request.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">
            AI disclosure
          </h2>
          <p className="mt-3">
            Some content on this site was generated with AI assistance and
            reviewed for accuracy before publishing.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-ink">
            Contact
          </h2>
          <p className="mt-3">
            Questions about this policy? Call (605) 884-6393.
          </p>
        </section>
      </div>
    </main>
  );
}

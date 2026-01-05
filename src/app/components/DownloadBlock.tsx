"use client";

type DownloadBlockProps = {
  googlePlayUrl: string;
};

export default function DownloadBlock({ googlePlayUrl }: DownloadBlockProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                Download Visit Recorder
              </h2>
              <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                Capture your visit with consent, then review a clear AI summary with key
                decisions, changes, and next steps.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold bg-[#0A2A43] text-white hover:opacity-95 transition"
                >
                  Get it on Google Play
                </a>

                <a
                  href="/privacy"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold border border-slate-300 text-slate-900 hover:bg-slate-50 transition"
                >
                  Privacy Policy
                </a>
              </div>

              <p className="mt-4 text-sm text-slate-500">
                Recording requires explicit consent. Subscription billing is managed through RevenueCat.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
              <h3 className="text-base font-semibold text-slate-900">Built for follow-through</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li>• Record the full conversation with consent</li>
                <li>• Get a structured AI summary after the visit</li>
                <li>• Export, share, and translate with Pro tools</li>
              </ul>

              <div className="mt-6 text-sm text-slate-500">
                Questions? Visit <span className="font-medium text-slate-700">/support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function VisitRecorderPrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-[#0A2A43] mb-6">
          Visit Recorder Privacy Policy
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          Visit Recorder is designed with privacy-first principles. This Privacy
          Policy explains what information we collect, how we use it, and the
          choices you have.
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[#0A2A43] mb-2">
              Consent and recording
            </h2>
            <p>
              Visit Recorder supports recording medical conversations only with
              consent. You are responsible for complying with applicable laws
              and clinic policies regarding recording.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0A2A43] mb-2">
              Information we may collect
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Account or device identifiers required to provide the service.
              </li>
              <li>
                Audio recordings you choose to create and store within the app.
              </li>
              <li>
                AI-generated summaries derived from your recordings (if enabled).
              </li>
              <li>
                Usage and diagnostic data to improve reliability and performance.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0A2A43] mb-2">
              How we use information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide recording, playback, and summary features.</li>
              <li>To generate AI summaries you request.</li>
              <li>To maintain security and prevent abuse.</li>
              <li>To improve app stability and user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0A2A43] mb-2">
              Sharing
            </h2>
            <p>
              You control when you export or share your summaries. We do not
              sell personal information. We may share limited data with service
              providers strictly to operate the app (e.g., storage/hosting),
              subject to appropriate safeguards.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0A2A43] mb-2">
              Data retention and deletion
            </h2>
            <p>
              You can delete recordings and summaries in the app (where
              supported). Retention may vary depending on your settings and
              storage method.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0A2A43] mb-2">
              Contact
            </h2>
            <p>
              For privacy questions, contact{" "}
              <a
                className="text-[#ff3fb5] font-semibold hover:underline"
                href="mailto:sloane@sloanesterling.com"
              >
                sloane@sloanesterling.com
              </a>
              .
            </p>
          </section>

          <p className="text-gray-500 text-sm pt-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </main>
  );
}

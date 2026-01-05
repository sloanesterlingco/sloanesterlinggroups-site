export default function VisitRecorderTermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-[#0A2A43] mb-6">
          Visit Recorder Terms of Service
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          These Terms govern your use of Visit Recorder. By using the app, you
          agree to these Terms.
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[#0A2A43] mb-2">
              Not medical advice
            </h2>
            <p>
              Visit Recorder does not provide medical advice and is not a
              medical device. The app is intended to help you capture and review
              information from your visits. Always consult a qualified clinician
              for diagnosis and treatment decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0A2A43] mb-2">
              Consent and legal compliance
            </h2>
            <p>
              You are responsible for obtaining consent and complying with all
              applicable laws and clinic policies when recording conversations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0A2A43] mb-2">
              Your content
            </h2>
            <p>
              You retain ownership of recordings and summaries you create. You
              grant necessary rights for the app to store, process, and generate
              summaries as requested to provide the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0A2A43] mb-2">
              Pro features
            </h2>
            <p>
              Some features (export, sharing, translation, PDF) may require a
              Pro subscription. Subscription terms, pricing, and availability
              may change.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0A2A43] mb-2">
              Limitations of liability
            </h2>
            <p>
              To the maximum extent permitted by law, we are not liable for any
              indirect, incidental, or consequential damages arising from your
              use of the app, including reliance on summaries or missed
              information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0A2A43] mb-2">
              Contact
            </h2>
            <p>
              Questions about these Terms? Contact{" "}
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

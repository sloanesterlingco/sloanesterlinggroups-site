"use client";

import Reveal from "../../components/Reveal";

export default function VisitRecorderTermsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="pt-28 md:pt-32 pb-14 bg-[#0A2A43] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_65%)]" />
        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
          <Reveal>
            <h1 className="text-white text-4xl md:text-5xl font-bold">
              Visit Recorder Terms of Service
            </h1>
            <p className="text-gray-200 text-lg mt-5 leading-relaxed max-w-3xl">
              These Terms govern your use of Visit Recorder. By using the app,
              you agree to these Terms.
            </p>
            <p className="text-gray-300 text-sm mt-6">
              Last updated: January 2026
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="prose prose-lg max-w-none">
              <h2>1. Who we are</h2>
              <p>
                Visit Recorder is provided by <strong>Sterling Health Technologies</strong>
                (“we”, “us”, “our”). The app and any related services are the
                “Service.”
              </p>

              <h2>2. Eligibility</h2>
              <p>
                You must be at least 13 years old (or the minimum age required
                by your jurisdiction) to use the Service.
              </p>

              <h2>3. Consent and lawful recording</h2>
              <p>
                You are responsible for complying with all applicable laws and
                clinic policies regarding recording. If consent from other
                participants is required, you must obtain it before recording.
              </p>

              <h2>4. Not medical advice</h2>
              <p>
                Visit Recorder does not provide medical advice and is not a
                substitute for professional clinical judgment. Always consult a
                qualified healthcare provider for diagnosis and treatment.
              </p>

              <h2>5. Your content</h2>
              <p>
                You may upload, record, or generate content through the Service
                (including audio and summaries). You retain ownership of your
                content. You grant us a limited license to process your content
                only to operate and provide the Service.
              </p>

              <h2>6. Acceptable use</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use the Service for illegal recording or surveillance.</li>
                <li>Interfere with or disrupt the Service.</li>
                <li>Attempt to access data you do not own or control.</li>
                <li>Reverse engineer or misuse the app or its security features.</li>
              </ul>

              <h2>7. Pro features and purchases</h2>
              <p>
                Certain features (such as export, share, PDF, and translation)
                may require a paid subscription (“Pro”). Purchases and refunds
                are handled by the platform store (e.g., Google Play) and are
                subject to their policies.
              </p>

              <h2>8. Availability and changes</h2>
              <p>
                We may update, modify, suspend, or discontinue parts of the
                Service at any time. We aim to keep the Service available and
                reliable, but we do not guarantee uninterrupted access.
              </p>

              <h2>9. Disclaimers</h2>
              <p>
                The Service is provided “as is” and “as available.” We disclaim
                warranties to the maximum extent permitted by law, including
                implied warranties of merchantability, fitness for a particular
                purpose, and non-infringement.
              </p>

              <h2>10. Limitation of liability</h2>
              <p>
                To the maximum extent permitted by law, Sterling Health
                Technologies will not be liable for any indirect, incidental,
                special, consequential, or punitive damages, or any loss of
                profits or data, arising from or related to your use of the
                Service.
              </p>

              <h2>11. Termination</h2>
              <p>
                You may stop using the Service at any time. We may suspend or
                terminate access if we reasonably believe you violated these
                Terms or if necessary to protect the Service or users.
              </p>

              <h2>12. Privacy</h2>
              <p>
                Our Privacy Policy describes how we handle data. By using Visit
                Recorder, you agree to our Privacy Policy.
              </p>

              <h2>13. Contact</h2>
              <p>
                Questions about these Terms? Contact:
                <br />
                <strong>Sterling Health Technologies</strong>
                <br />
                <strong>sloane@sloanesterling.com</strong>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

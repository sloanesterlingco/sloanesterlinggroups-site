"use client";

import Reveal from "../components/Reveal";

export default function VisitRecorderPrivacyPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="pt-28 md:pt-32 pb-14 bg-[#0A2A43] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_65%)]" />
        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
          <Reveal>
            <h1 className="text-white text-4xl md:text-5xl font-bold">
              Visit Recorder Privacy Policy
            </h1>
            <p className="text-gray-200 text-lg mt-5 leading-relaxed max-w-3xl">
              Visit Recorder is privacy-first by design. This policy explains
              what we collect, why we collect it, how we protect it, and the
              choices you have.
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
              <h2>Summary</h2>
              <ul>
                <li>
                  Visit Recorder helps you record medical visits (with consent)
                  and generate structured AI summaries.
                </li>
                <li>
                  We do not sell your personal information or health data.
                </li>
                <li>
                  You control when a recording is created and when it is shared.
                </li>
                <li>
                  You can request deletion of your stored data (see “Data
                  deletion requests”).
                </li>
              </ul>

              <h2>Who we are</h2>
              <p>
                Visit Recorder is a product of <strong>Sterling Health Technologies</strong>
                . This Privacy Policy applies to the Visit Recorder mobile
                application and related services (the “Service”).
              </p>

              <h2>What data we collect</h2>
              <h3>Data you provide</h3>
              <ul>
                <li>
                  <strong>Audio recordings</strong> of medical conversations (only
                  when you choose to record).
                </li>
                <li>
                  <strong>Text summaries</strong> generated from recordings.
                </li>
                <li>
                  <strong>Optional information</strong> you add, such as visit
                  labels, provider names, notes, or dates.
                </li>
              </ul>

              <h3>Data collected automatically</h3>
              <ul>
                <li>
                  <strong>Basic app diagnostics</strong> (e.g., crash logs and
                  performance metrics) to improve reliability and security.
                </li>
                <li>
                  <strong>Device/app info</strong> such as device type, OS
                  version, and app version.
                </li>
              </ul>

              <h2>How we use data</h2>
              <p>We use data to:</p>
              <ul>
                <li>Provide app features (recording, playback, summaries).</li>
                <li>Generate and display your AI summary.</li>
                <li>Enable exports and sharing features when you request them.</li>
                <li>Maintain safety, prevent abuse, and improve performance.</li>
                <li>Provide support if you contact us.</li>
              </ul>

              <h2>What we don’t do</h2>
              <ul>
                <li>
                  We do not sell your personal information or health data.
                </li>
                <li>
                  We do not use your recordings or summaries for advertising
                  targeting.
                </li>
                <li>
                  We do not record in the background without your action.
                </li>
              </ul>

              <h2>Sharing and disclosure</h2>
              <p>
                We share your information only in limited circumstances:
              </p>
              <ul>
                <li>
                  <strong>When you choose to share</strong> (e.g., exporting or
                  sending a summary).
                </li>
                <li>
                  <strong>Service providers</strong> that help us operate the
                  Service (e.g., hosting, analytics, support tools), under
                  contractual obligations to protect data.
                </li>
                <li>
                  <strong>Legal requirements</strong> where we are compelled to
                  comply with applicable law, regulation, or legal process.
                </li>
              </ul>

              <h2>Consent and recording laws</h2>
              <p>
                Visit Recorder requires user acknowledgment and consent. You are
                responsible for complying with applicable local laws and clinic
                policies regarding recording. If required, obtain consent from
                other participants.
              </p>

              <h2>Data retention</h2>
              <p>
                We retain data for as long as needed to provide the Service and
                as required by applicable law. You can delete your content from
                within the app where available, and you may request deletion as
                described below.
              </p>

              <h2>Data deletion requests</h2>
              <p>
                You can request deletion of stored Visit Recorder data by
                contacting us at:
              </p>
              <p>
                <strong>sloane@sloanesterling.com</strong>
              </p>
              <p>
                Include “Visit Recorder Deletion Request” in the subject line and
                the email associated with your account (if applicable). We may
                request additional information to verify the request.
              </p>

              <h2>Security</h2>
              <p>
                We use reasonable administrative, technical, and organizational
                safeguards designed to protect data. No system can be guaranteed
                100% secure, but we work to prevent unauthorized access and
                misuse.
              </p>

              <h2>Children’s privacy</h2>
              <p>
                Visit Recorder is not intended for children under 13 (or the
                minimum age required by your jurisdiction). We do not knowingly
                collect personal information from children.
              </p>

              <h2>Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time. If we make
                material changes, we will update the “Last updated” date above.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about this policy? Contact:
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

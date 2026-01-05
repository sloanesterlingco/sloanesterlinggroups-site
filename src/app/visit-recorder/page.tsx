"use client";

import Image from "next/image";
import Reveal from "../components/Reveal";
import type { MouseEvent } from "react";
import DownloadBlock from "../components/DownloadBlock";


/* CTA pulse animation handler (matches home) */
function triggerPulse(e: MouseEvent<HTMLAnchorElement>) {
  const btn = e.currentTarget;
  btn.classList.add("pulse-ring");
  setTimeout(() => btn.classList.remove("pulse-ring"), 350);
}

export default function VisitRecorderPage() {
  return (
    <>
      {/* ============================== */}
      {/*            HERO                */}
      {/* ============================== */}
      <section className="w-full bg-[#0A2A43] pt-28 md:pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_65%)]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <Reveal>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white/10 border border-white/20">
                  <Image
                    src="/visit-recorder/VR-Logo.png"
                    alt="Visit Recorder logo"
                    fill
                    className="object-contain p-1"
                    loading="lazy"
                  />
                </div>

                <div className="leading-tight">
                  <p className="text-white font-semibold tracking-wide">
                    Visit Recorder
                  </p>
                  <p className="text-[#8EE6FF] text-sm opacity-90">
                    Sterling Health Technologies
                  </p>
                </div>
              </div>

              <h1 className="text-white text-5xl lg:text-6xl font-bold leading-tight">
                Medical conversation capture with{" "}
                <span className="text-[#8EE6FF]">AI summaries</span> built for
                clarity and follow-through.
              </h1>

              <p className="text-gray-200 text-lg leading-relaxed mt-6 max-w-xl">
                Visit Recorder securely records medical visits and transforms
                them into structured AI summaries so patients, families, and care
                teams can clearly understand what changed, what to do next, and
                why it matters.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#explore"
                  onClick={triggerPulse}
                  className="bg-[#ff3fb5] text-white px-8 py-4 rounded-full text-lg font-medium shadow-md hover:bg-[#e036a9] transition-all"
                >
                  Explore Visit Recorder
                </a>

                <a
                  href="#sample-summary"
                  onClick={triggerPulse}
                  className="bg-white/10 text-white px-8 py-4 rounded-full text-lg font-medium shadow-md border border-white/20 hover:bg-white/15 transition-all"
                >
                  View a sample summary
                </a>
              </div>

              <p className="text-gray-300 text-sm mt-5">
                Consent required. Privacy-first by design.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative">
              <div className="relative w-full h-[420px] md:h-[520px] rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                <Image
                  src="/visit-recorder/visit-recorder-hero.png"
                  alt="Visit Recorder hero preview"
                  fill
                  loading="lazy"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#8EE6FF]/20 blur-2xl" />
              <div className="absolute -top-8 -right-10 w-28 h-28 rounded-full bg-[#ff3fb5]/20 blur-2xl" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================== */}
      {/*          EXPLORE               */}
      {/* ============================== */}
      <section id="explore" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold text-[#0A2A43]">
                Record the conversation — not just your memory
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mt-6">
                Medical visits are dense, emotional, and often overwhelming.
                Important details—medication changes, instructions, and follow-up
                timelines—are easy to miss or forget.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                Visit Recorder allows patients to securely record their medical
                visit <strong>with consent</strong>, ensuring the full
                conversation is captured accurately.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-gray-200 bg-[#F7F9FC] p-5 shadow-sm">
                  <p className="text-[#0A2A43] font-semibold">No missed instructions</p>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    Review key details after you leave the room.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-[#F7F9FC] p-5 shadow-sm">
                  <p className="text-[#0A2A43] font-semibold">No reliance on memory</p>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    Reduce stress and uncertainty after the visit.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-[#F7F9FC] p-5 shadow-sm">
                  <p className="text-[#0A2A43] font-semibold">A reviewable record</p>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    Keep a clear, accessible account of what happened.
                  </p>
                </div>
              </div>

              <p className="text-gray-600 text-sm mt-6">
                Designed to fit naturally into real clinical encounters.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative w-full h-[560px] rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white">
                <Image
                  src="/visit-recorder/visit-recorder-ui.jpg"
                  alt="Visit Recorder recording screen"
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>

              <div className="rounded-3xl border border-gray-200 bg-[#F7F9FC] p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#0A2A43]">
                  Consent required
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  Visit Recorder is built around explicit acknowledgment and
                  consent. Users stay in control of when recording happens and
                  what gets saved.
                </p>
                <p className="text-gray-600 text-sm mt-5">
                  Always follow local laws and clinic policies regarding
                  recording.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================== */}
      {/*     TURN AUDIO INTO CLARITY    */}
      {/* ============================== */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <h2 className="text-4xl font-bold text-[#0A2A43]">
                From raw audio to structured understanding
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mt-6">
                After the visit, Visit Recorder generates an AI-powered summary
                that organizes the conversation into clear, actionable sections.
              </p>

              <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
                <p className="text-[#0A2A43] font-semibold mb-3">
                  The AI summary includes:
                </p>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>• Reason for visit</li>
                  <li>• Key decisions and medication changes</li>
                  <li>• Action items and next steps</li>
                  <li>• Follow-up recommendations</li>
                </ul>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mt-6">
                With Pro tools, users can export, share, translate, or save
                summaries as PDFs — making it easier to involve caregivers,
                family members, or other providers.
              </p>

              <p className="text-[#0A2A43] font-semibold mt-6">
                The result: clarity without re-listening, and confidence without
                guesswork.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative w-full h-[520px] rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white">
              <Image
                src="/visit-recorder/visit-recorder.jpg"
                alt="Visit Recorder product preview"
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================== */}
      {/*    COMPLIANCE / FOLLOW-THROUGH */}
      {/* ============================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="max-w-4xl">
              <h2 className="text-4xl font-bold text-[#0A2A43]">
                The real problem in healthcare: follow-through
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mt-6">
                One of the most persistent challenges in healthcare isn’t
                diagnosis or treatment — it’s patient compliance and
                follow-through.
              </p>

              <div className="mt-8 rounded-3xl border border-gray-200 bg-[#F7F9FC] p-8 shadow-sm">
                <p className="text-[#0A2A43] font-semibold mb-3">
                  Patients often:
                </p>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>• Forget a significant portion of what is discussed</li>
                  <li>• Misunderstand medication changes or instructions</li>
                  <li>• Leave appointments unclear about next steps</li>
                </ul>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mt-6">
                This isn’t a lack of effort or intelligence — it’s a consequence
                of how healthcare information is delivered: verbally, quickly,
                and often under stress.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                Visit Recorder helps reduce ambiguity by creating a structured
                summary derived directly from the recorded conversation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================== */}
      {/*         SAMPLE SUMMARY         */}
      {/* ============================== */}
      <section id="sample-summary" className="py-24 bg-[#F7F9FC] scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div>
              <h2 className="text-4xl font-bold text-[#0A2A43]">
                Sample AI summary
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mt-6">
                Visit Recorder organizes complex visit details into a structured
                summary that’s easy to review, share, and follow.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/visit-recorder/privacy"
                  onClick={triggerPulse}
                  className="inline-block bg-white text-[#0A2A43] px-7 py-3 rounded-full text-base font-medium shadow-md border border-[#0A2A43]/10 hover:bg-[#F7F9FC] transition-all"
                >
                  Read Privacy Policy
                </a>

                <a
                  href="/visit-recorder/terms"
                  onClick={triggerPulse}
                  className="inline-block bg-white text-[#0A2A43] px-7 py-3 rounded-full text-base font-medium shadow-md border border-[#0A2A43]/10 hover:bg-[#F7F9FC] transition-all"
                >
                  Terms of Service
                </a>

                <a
                  href="/visit-recorder/support"
                  onClick={triggerPulse}
                  className="inline-block bg-white text-[#0A2A43] px-7 py-3 rounded-full text-base font-medium shadow-md border border-[#0A2A43]/10 hover:bg-[#F7F9FC] transition-all"
                >
                  Support
                </a>
              </div>

              <p className="text-gray-600 text-sm mt-6">
                Note: Visit Recorder does not provide medical advice. Always
                consult your clinician for diagnosis and treatment decisions.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl border border-gray-200 bg-white shadow-xl overflow-hidden">
              <div className="px-7 py-6 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-[#0A2A43] font-semibold">AI Summary</p>
                  <p className="text-gray-500 text-sm">Example output</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#8EE6FF]/25 text-[#0A2A43]">
                  Ready
                </span>
              </div>

              <div className="p-7">
                <div className="space-y-5 text-[#0A2A43]">
                  <div>
                    <p className="font-semibold">Visit Summary</p>
                    <p className="text-gray-700 mt-1 leading-relaxed">
                      Review of blood pressure and medication adjustment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-[#F7F9FC] border border-gray-200 p-4">
                      <p className="text-xs uppercase tracking-wide text-gray-500">
                        Provider
                      </p>
                      <p className="font-semibold mt-1">Dr. Anderson</p>
                    </div>
                    <div className="rounded-2xl bg-[#F7F9FC] border border-gray-200 p-4">
                      <p className="text-xs uppercase tracking-wide text-gray-500">
                        Date
                      </p>
                      <p className="font-semibold mt-1">Sunday, Jan 4</p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white border border-gray-200 p-5">
                    <p className="font-semibold">Key actions</p>
                    <ul className="text-gray-700 mt-2 space-y-2 leading-relaxed">
                      <li>• Lisinopril increased from 10mg to 20mg daily</li>
                      <li>• Monitor blood pressure daily for 2 weeks</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-white border border-gray-200 p-5">
                    <p className="font-semibold">Next steps</p>
                    <ul className="text-gray-700 mt-2 space-y-2 leading-relaxed">
                      <li>• Take the updated dose as prescribed</li>
                      <li>• Follow up in 6 weeks to reassess</li>
                      <li>• Contact clinic if side effects occur</li>
                    </ul>
                  </div>

                  <p className="text-gray-500 text-xs leading-relaxed">
                    This is an example summary for demonstration purposes only.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

<DownloadBlock />
      {/* ============================== */}
      {/*      CLOSING / CTA             */}
      {/* ============================== */}
      <section className="py-24 bg-[#0A2A43] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(142,230,255,0.10),transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <Reveal>
            <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-10 lg:p-12 shadow-2xl">
              <h2 className="text-4xl font-bold text-white">
                Better understanding leads to better outcomes
              </h2>

              <p className="text-gray-200 text-lg leading-relaxed mt-6 max-w-3xl">
                Healthcare doesn’t end when the visit does. Visit Recorder helps
                ensure that what happens in the room continues clearly and
                accurately afterward — so patients can follow through with
                confidence.
              </p>

              <p className="text-white/90 font-semibold mt-6">
                Because compliance starts with clarity — and clarity starts with
                understanding.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:sloane@sloanesterling.com"
                  onClick={triggerPulse}
                  className="bg-[#FFD87D] text-[#0A2A43] px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#f3c86e] transition-all"
                >
                  Contact Sterling Health Technologies
                </a>

                <a
                  href="/visit-recorder/privacy"
                  onClick={triggerPulse}
                  className="bg-white/10 text-white px-8 py-4 rounded-full text-lg font-medium shadow-md border border-white/20 hover:bg-white/15 transition-all"
                >
                  Privacy Policy
                </a>
              </div>

              <p className="text-gray-300 text-sm mt-6">
                Visit Recorder is not a medical device and does not provide
                medical advice.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

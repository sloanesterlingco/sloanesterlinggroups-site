"use client";

import Image from "next/image";
import Reveal from "../components/Reveal";
import DownloadBlock from "../components/DownloadBlock";
import type { MouseEvent } from "react";

function triggerPulse(e: MouseEvent<HTMLAnchorElement>) {
  const btn = e.currentTarget;
  btn.classList.add("pulse-ring");
  setTimeout(() => btn.classList.remove("pulse-ring"), 350);
}

type DownloadBlockProps = {
  googlePlayUrl?: string; // optional until you have it
};

export default function DownloadBlock({ googlePlayUrl }: DownloadBlockProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="rounded-3xl border border-gray-200 bg-[#F7F9FC] p-10 lg:p-12 shadow-sm overflow-hidden relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#8EE6FF]/25 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#ff3fb5]/20 blur-3xl" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* LEFT */}
              <div>
                <h2 className="text-4xl font-bold text-[#0A2A43]">
                  Get Visit Recorder
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mt-5 max-w-xl">
                  Record medical visits with consent, then review a structured AI
                  summary so you know exactly what changed and what to do next.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  {googlePlayUrl ? (
                    <a
                      href={googlePlayUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={triggerPulse}
                      className="inline-flex items-center justify-center bg-[#0A2A43] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:opacity-95 transition-all"
                    >
                      Get it on Google Play
                    </a>
                  ) : (
                    <a
                      href="mailto:sloane@sloanesterling.com?subject=Visit%20Recorder%20Google%20Play%20Link"
                      onClick={triggerPulse}
                      className="inline-flex items-center justify-center bg-[#0A2A43] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:opacity-95 transition-all"
                    >
                      Request the Google Play link
                    </a>
                  )}

                  <a
                    href="/visit-recorder/privacy"
                    onClick={triggerPulse}
                    className="inline-flex items-center justify-center bg-white text-[#0A2A43] px-8 py-4 rounded-full text-lg font-medium shadow-md border border-[#0A2A43]/10 hover:bg-[#F7F9FC] transition-all"
                  >
                    Privacy Policy
                  </a>
                </div>

                <p className="text-gray-600 text-sm mt-5">
                  Consent required. Privacy-first by design.
                </p>
              </div>

              {/* RIGHT */}
              <div className="relative w-full h-[380px] rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-black">
                <Image
                  src="/visit-recorder/visit-recorder-ui.jpg"
                  alt="Visit Recorder app interface"
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

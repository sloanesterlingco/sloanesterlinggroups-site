"use client";

import Image from "next/image";
import Reveal from "./components/Reveal";
import type { MouseEvent } from "react";
import { useInView } from "react-intersection-observer";

/* CTA pulse animation handler */
function triggerPulse(e: MouseEvent<HTMLAnchorElement>) {
  const btn = e.currentTarget;
  btn.classList.add("pulse-ring");
  setTimeout(() => btn.classList.remove("pulse-ring"), 350);
}

export default function Home() {
  const { ref: heroRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <>
      {/* ============================== */}
      {/*            HERO                */}
      {/* ============================== */}

      <section
        ref={heroRef}
        id="hero"
        className="hero-grid w-full min-h-[70vh] bg-[#0A2A43] pt-8 lg:pt-10 pb-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.20),transparent_65%)]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
          {/* LEFT TEXT */}
          <Reveal>
            <div className="flex flex-col justify-center">
              {/* SINGLE CLEAN PREMIUM BRAND INTRO */}
              <div className="mb-4 brand-intro delay-1 brand-underlight">
                <p className="text-white text-sm lg:text-base tracking-wide font-semibold opacity-80 brand-glow">
                  SLOANE STERLING GROUPS
                </p>
                <p className="text-[#8EE6FF] text-sm lg:text-base tracking-wide brand-glow delay-2">
                  Healthcare Redefined
                </p>
              </div>

              <h1 className="text-white text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Healthcare redefined with{" "}
                <span className="text-[#8EE6FF]">precision</span> & intelligent
                care
              </h1>

              <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-xl">
                Sloane Sterling blends clinical expertise with AI-driven
                innovation — elevating patient experience, workflow efficiency,
                and data clarity across modern healthcare systems.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <a
  href="/visit-recorder"
  onClick={triggerPulse}
  className="bg-[#FFD87D] text-[#0A2A43] px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#f3c86e] transition-all"
>
  Explore Visit Recorder
</a>

                <a
                  href="#myhealthvaultai"
                  onClick={triggerPulse}
                  className="text-[#8EE6FF] text-lg font-medium hover:underline"
                >
                  Explore MyHealthVaultAI
                </a>
              </div>

              <p className="text-gray-300 text-sm mt-6">
                Clinical Expertise • AI Innovation • Patient-Centered Design
              </p>
            </div>
          </Reveal>

          {/* RIGHT — RINGS + ORBS + SLOANE */}
          <Reveal>
            <div
              className={`relative flex items-center justify-center h-full ${
                inView ? "hero-inview" : ""
              }`}
            >
              {/* ROTATING RINGS */}
              <div className="absolute w-[420px] h-[420px] rounded-full border-[6px] border-white/25
                      animate-rotate-slow mobile-disable-anim parallax-ring ring-marker ring-glow" />

              <div className="absolute w-[500px] h-[500px] rounded-full border-[6px] border-white/18
                      animate-rotate-slower mobile-disable-anim parallax-ring ring-marker ring-glow" />

              <div className="absolute w-[580px] h-[580px] rounded-full border-[4px] border-white/12
                      animate-rotate-slowest mobile-disable-anim parallax-ring ring-marker ring-glow" />

              {/* ORBITING ORBS */}
              <div className="absolute w-[580px] h-[580px]">
                <div className="absolute inset-0 animate-orbit-main mobile-disable-anim orb-trail">
                  <div className="w-5 h-5 rounded-full bg-[#ff3fb5] shadow-[0_0_16px_#ff3fb5]" />
                </div>
              </div>

              <div className="absolute w-[580px] h-[580px]">
                <div className="absolute inset-0 animate-orbit-mid mobile-disable-anim orb-trail">
                  <div className="w-4 h-4 rounded-full bg-[#8EE6FF] shadow-[0_0_16px_#8EE6FF]" />
                </div>
              </div>

              <div className="absolute w-[580px] h-[580px]">
                <div className="absolute inset-0 animate-orbit-inner mobile-disable-anim orb-trail">
                  <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_12px_white]" />
                </div>
              </div>

              {/* SLOANE IMAGE */}
              <div
                className="relative w-[350px] h-[350px] rounded-full overflow-hidden border-[6px] border-white
                     shadow-2xl breathe-glow tilt-hover holo-shimmer z-30"
              >
                <Image
                  src="/sloanemobile.png"
                  alt="Sloane Sterling"
                  fill
                  loading="lazy"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================== */}
      {/*        ABOUT SLOANE           */}
      {/* ============================== */}

      <section
        id="about"
        className="py-28 bg-[#F7F9FC] section-animate activate-glow"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="section-left float-soft">
            <div className="relative w-full h-[460px] rounded-3xl overflow-hidden shadow-xl depth-hover">
              <Image
                src="/hero-desktop.jpg"
                alt="Sloane Sterling, PA-C"
                fill
                loading="lazy"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="section-right">
            <h2 className="text-4xl font-bold text-[#0A2A43] mb-6">
              About Sloane Sterling
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Sloane Sterling is a healthcare provider and healthcare innovator
              transforming patient experience through intelligent,
              patient-centered digital technologies.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              As founder of{" "}
              <span className="text-[#ff3fb5] font-semibold">
                Sloane Sterling Groups
              </span>
              , she leads the development of <strong>MyHealthVaultAI</strong> —
              a secure health data platform that organizes, structures, and
              interprets a lifetime of medical information.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Sloane helps medical organizations reduce clinical workloads,
              streamline documentation, elevate workflow efficiency, and build
              AI-enabled systems rooted in patient safety and clarity.
            </p>

            <a
              href="mailto:sloane@sloanesterling.com"
              onClick={triggerPulse}
              className="btn-primary inline-block mt-4 text-white px-8 py-4 rounded-full text-lg font-medium shadow-md transition-all"
            >
              Connect With Sloane
            </a>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/*         MYHEALTHVAULTAI       */}
      {/* ============================== */}

      <section id="myhealthvaultai" className="py-28 bg-white section-animate">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="section-left float-soft">
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-white depth-hover">
              <Image
                src="/MHV-image.png"
                alt="MyHealthVaultAI Screenshot"
                fill
                loading="lazy"
                className="object-contain"
              />
            </div>
          </div>

          <div className="section-right">
            <h2 className="text-4xl font-bold text-[#0A2A43] mb-6">
              MyHealthVaultAI
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              MyHealthVaultAI organizes, explains, and secures your entire
              medical history — giving patients total control over their data in
              one intelligent vault.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Built using React Native, Expo, and TypeScript, MyHealthVaultAI
              transforms raw records into structured FHIR® formats and provides
              AI-generated insights, summaries, and trend analysis.
            </p>

            <a
              href="mailto:sloane@sloanesterling.com"
              onClick={triggerPulse}
              className="inline-block mt-4 bg-[#ff3fb5] text-white px-8 py-4 rounded-full text-lg font-medium shadow-md hover:bg-[#e036a9] transition-all"
            >
              Learn More About MyHealthVaultAI
            </a>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/*       AI WORKFLOW SUPPORT     */}
      {/* ============================== */}

      <section
        id="ai-workflow"
        className="py-28 bg-[#F7F9FC] section-animate activate-glow"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="section-left float-soft">
            <div className="relative w-full h-[480px] rounded-3xl overflow-hidden shadow-xl bg-white depth-hover">
              <Image
                src="/ai-workflow.png"
                alt="AI Workflow Support Diagram"
                fill
                loading="lazy"
                className="object-contain p-6"
              />
            </div>
          </div>

          <div className="section-right">
            <h2 className="text-4xl font-bold text-[#0A2A43] mb-6">
              AI Workflow Support for Clinics
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Sloane integrates AI systems into medical and aesthetic practices
              — improving intake automation, documentation support, and clinical
              decision flow.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Her work is grounded in real-world clinical workflows, safety, and
              patient experience.
            </p>

            <a
              href="mailto:sloane@sloanesterling.com"
              onClick={triggerPulse}
              className="btn-primary inline-block mt-4 text-white px-8 py-4 rounded-full text-lg font-medium shadow-md transition-all"
            >
              Consult on AI Workflow Support
            </a>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/*       INNOVATION SECTION       */}
      {/* ============================== */}

      <section id="innovation" className="py-28 bg-white section-animate">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="section-left float-soft">
            <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-xl bg-white depth-hover">
              <Image
                src="/innovation.png"
                alt="Medical AI Innovation Graphic"
                fill
                loading="lazy"
                className="object-contain p-6"
              />
            </div>
          </div>

          <div className="section-right">
            <h2 className="text-4xl font-bold text-[#0A2A43] mb-6">
              Medical AI Innovation
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Sloane designs AI-enabled healthcare ecosystems that are safe,
              understandable, and built around real clinical workflows.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Her work spans diagnostic support, patient education, automation
              safety layers, and intelligent health data storytelling.
            </p>

            <a
              href="mailto:sloane@sloanesterling.com"
              onClick={triggerPulse}
              className="inline-block mt-4 bg-[#ff3fb5] text-white px-8 py-4 rounded-full text-lg font-medium shadow-md hover:bg-[#e036a9] transition-all"
            >
              Explore Innovation Work
            </a>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/*         VISIT RECORDER         */}
      {/* ============================== */}

      <section
        id="visit-recorder"
        className="py-28 bg-[#F7F9FC] section-animate"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="section-left">
            <h2 className="text-4xl font-bold text-[#0A2A43] leading-snug mb-6">
              Visit Recorder — Medical conversation capture with AI summaries
              built for clarity and follow-through
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Visit Recorder securely records medical visits and transforms them
              into structured AI summaries so patients, families, and care teams
              can clearly understand what changed, what to do next, and why it
              matters.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Capture key decisions, medication changes, and next steps — then
              export, share, translate, or save as PDF with Pro tools when you
              need it.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/visit-recorder"
                onClick={triggerPulse}
                className="inline-block bg-[#ff3fb5] text-white px-8 py-4 rounded-full text-lg font-medium shadow-md hover:bg-[#e036a9] transition-all"
              >
                Explore Visit Recorder
              </a>

              <a
                href="/visit-recorder#sample-summary"
                onClick={triggerPulse}
                className="inline-block bg-white text-[#0A2A43] px-8 py-4 rounded-full text-lg font-medium shadow-md border border-[#0A2A43]/10 hover:bg-[#F7F9FC] transition-all"
              >
                View a sample summary
              </a>
            </div>

            <p className="text-gray-600 text-sm mt-5">
              Consent required. Privacy-first by design.
            </p>
          </div>

          <div className="section-right float-soft">
            <div className="relative w-full h-[480px] rounded-3xl overflow-hidden shadow-xl bg-black depth-hover">
              <Image
                src="/visit-recorder/visit-recorder.jpg"
                alt="Visit Recorder preview"
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ===========================
// Premium Footer — Sloane Sterling Groups
// ===========================

export default function Footer() {
  return (
    <footer className="relative bg-[#0A2A43] text-white pt-16 pb-10 mt-32 overflow-hidden">
      {/* Glow layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(142,230,255,0.18),transparent_70%)] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1 */}
        <div>
          <h4 className="text-xl font-semibold mb-4 tracking-wide">
            Sloane Sterling Groups
          </h4>
          <p className="text-gray-300 leading-relaxed text-sm max-w-sm">
            Healthcare redefined through clinical excellence, AI innovation, and
            human-centered design.
          </p>

          <p className="text-gray-400 text-xs mt-5 leading-relaxed max-w-sm">
            Visit Recorder does not provide medical advice and is not a medical
            device. Always consult a qualified clinician for diagnosis and
            treatment decisions.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-3 tracking-wide">Explore</h4>
          <nav className="flex flex-col gap-2 text-gray-300 text-sm">
            <a href="/#about" className="hover:text-white transition">
              About
            </a>
            <a href="/#myhealthvaultai" className="hover:text-white transition">
              MyHealthVaultAI
            </a>
            <a href="/#ai-workflow" className="hover:text-white transition">
              AI Workflow Support
            </a>
            <a href="/#innovation" className="hover:text-white transition">
              Innovation
            </a>

            {/* Visit Recorder (route) */}
            <a href="/visit-recorder" className="hover:text-white transition">
              Visit Recorder
            </a>
          </nav>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-lg font-semibold mb-3 tracking-wide">Connect</h4>

          <a
            href="mailto:sloane@sloanesterling.com"
            className="inline-block bg-[#FFD87D] text-[#0A2A43] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#e6c470] transition-all shadow-lg hover:shadow-xl"
          >
            Contact Sloane
          </a>

          {/* Visit Recorder Legal Links (Google Play friendly) */}
          <div className="mt-6">
            <h5 className="text-sm font-semibold tracking-wide text-white/90">
              Visit Recorder
            </h5>
            <nav className="flex flex-col gap-2 text-gray-300 text-sm mt-3">
              <a
                href="/visit-recorder/privacy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </a>
              <a
                href="/visit-recorder/terms"
                className="hover:text-white transition"
              >
                Terms of Service
              </a>
              <a
                href="/visit-recorder/support"
                className="hover:text-white transition"
              >
                Support
              </a>
            </nav>
          </div>

          {/* Socials */}
          <div className="flex gap-5 mt-6">
            <a
              href="https://instagram.com/sloanesterlingco"
              target="_blank"
              rel="noreferrer"
              className="footer-social"
            >
              <i className="fa-brands fa-instagram text-2xl"></i>
            </a>
            <a
              href="https://x.com/VisitRecorder"
              target="_blank"
              rel="noreferrer"
              className="footer-social"
            >
              <i className="fa-brands fa-twitter text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sloane-sterling-health/"
              target="_blank"
              rel="noreferrer"
              className="footer-social"
            >
              <i className="fa-brands fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-xs mt-12 relative z-10">
        © {new Date().getFullYear()} Sloane Sterling Groups. All rights reserved.
      </div>
    </footer>
  );
}

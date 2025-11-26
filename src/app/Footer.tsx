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
          <h4 className="text-xl font-semibold mb-4 tracking-wide">Sloane Sterling Groups</h4>
          <p className="text-gray-300 leading-relaxed text-sm max-w-sm">
            Healthcare redefined through clinical excellence, AI innovation,
            and human-centered design.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-3 tracking-wide">Explore</h4>
          <nav className="flex flex-col gap-2 text-gray-300 text-sm">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#myhealthvaultai" className="hover:text-white transition">MyHealthVaultAI</a>
            <a href="#ai-workflow" className="hover:text-white transition">AI Workflow Support</a>
            <a href="#innovation" className="hover:text-white transition">Innovation</a>
            <a href="#luxesculpt" className="hover:text-white transition">LuxeSculpt™</a>
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

          {/* Socials */}
          <div className="flex gap-5 mt-6">
            <a href="https://instagram.com/sloanesterling" target="_blank" className="footer-social">
              <i className="fa-brands fa-instagram text-2xl"></i>
            </a>
            <a href="https://twitter.com/SloaneSterling" target="_blank" className="footer-social">
              <i className="fa-brands fa-twitter text-2xl"></i>
            </a>
            <a href="https://linkedin.com/in/sloanesterling" target="_blank" className="footer-social">
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

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0A2A43] text-white py-16 mt-32">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* BRAND */}
        <div>
          <Image src="/pink-logo.png" width={60} height={60} alt="logo" />
          <h3 className="mt-4 text-xl font-semibold">Sloane Sterling Groups</h3>
          <p className="text-pink-300">Healthcare Redefined</p>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <p className="text-pink-200">Sloane Sterling, PA-C</p>
          <p className="text-pink-200">Email: sloane@sloanesterling.com</p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Navigation</h4>
          <div className="flex flex-col gap-2 text-pink-200">
            <a href="#about">About</a>
            <a href="#myhealthvaultai">MyHealthVaultAI</a>
            <a href="#ai-workflow">AI Workflow Support</a>
            <a href="#innovation">Innovation</a>
            <a href="#luxesculpt">LuxeSculpt</a>
          </div>
        </div>

      </div>

      <p className="text-center text-pink-300 text-sm mt-12">
        © {new Date().getFullYear()} Sloane Sterling Groups
      </p>
    </footer>
  );
}

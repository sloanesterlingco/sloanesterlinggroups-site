export default function VisitRecorderSupportPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-[#0A2A43] mb-6">
          Visit Recorder Support
        </h1>

        <p className="text-gray-700 leading-relaxed mb-8">
          Need help with Visit Recorder? Use the options below and we’ll get you
          sorted.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200 bg-[#F7F9FC] p-6">
            <h2 className="text-lg font-semibold text-[#0A2A43]">
              Contact support
            </h2>
            <p className="text-gray-700 mt-2">
              Email us and include your device model + a brief description of
              the issue.
            </p>
            <a
              className="inline-block mt-4 bg-[#ff3fb5] text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-[#e036a9] transition-all"
              href="mailto:sloane@sloanesterling.com?subject=Visit%20Recorder%20Support"
            >
              Email Support
            </a>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-[#F7F9FC] p-6">
            <h2 className="text-lg font-semibold text-[#0A2A43]">
              Privacy & consent
            </h2>
            <p className="text-gray-700 mt-2">
              Visit Recorder supports recording with consent. Please follow your
              local laws and clinic policies.
            </p>
            <a
              className="inline-block mt-4 bg-white text-[#0A2A43] px-6 py-3 rounded-full font-medium shadow-md border border-[#0A2A43]/10 hover:bg-[#F7F9FC] transition-all"
              href="/visit-recorder/privacy"
            >
              Read Privacy Policy
            </a>
          </div>
        </div>

        <div className="mt-10 text-gray-600 text-sm leading-relaxed">
          <p className="font-semibold text-[#0A2A43]">Tip:</p>
          <p className="mt-2">
            If the app isn’t updating on Vercel, try a hard refresh
            (Cmd/Ctrl+Shift+R) or open the site in an incognito window.
          </p>
        </div>
      </div>
    </main>
  );
}

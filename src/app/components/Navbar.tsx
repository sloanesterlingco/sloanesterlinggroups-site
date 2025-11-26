"use client";

import Image from "next/image";
import { useState } from "react";

type NavLinkProps = {
  name: string;
  href: string;
};

type MobileLinkProps = {
  name: string;
  href: string;
  close: () => void;
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        backdrop-blur-xl
        bg-[rgba(255,63,181,0.16)]  /* translucent pink */
        border-b border-white/40
        shadow-[0_10px_35px_rgba(37,99,235,0.30)]  /* subtle blue glow */
        transition-all duration-500

        /* animated pink–blue line at bottom */
        before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-0
        before:h-[3px]
        before:bg-[linear-gradient(90deg,#ff3fb5,#71d8ff,#ff3fb5)]
        before:bg-size-[200%_200%]
        before:animate-gradientPulse
      "
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LEFT — logo + brand text */}
        <div className="flex items-center gap-3">
          <Image
            src="/pink-logo.png"
            alt="Sloane Sterling Logo"
            width={40}
            height={40}
            className="rounded-full drop-shadow-[0_0_12px_#ff3fb566]"
          />

          <div className="hidden sm:block leading-tight">
            <p className="text-[#0A2A43] font-semibold text-base">
              Sloane Sterling Groups
            </p>
            <p className="text-[#0A2A43]/70 text-sm -mt-1">
              Healthcare Redefined
            </p>
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-10 text-[#0A2A43] font-medium">
          <NavLink name="About" href="#about" />
          <NavLink name="MyHealthVaultAI" href="#myhealthvaultai" />
          <NavLink name="AI Workflow Support" href="#ai-workflow" />
          <NavLink name="Innovation" href="#innovation" />
          <NavLink name="LuxeSculpt" href="#luxesculpt" />
        </div>

        {/* RIGHT — aligned MyHealthVaultAI logo */}
        <div className="hidden md:flex items-center">
          <Image
            src="/mhv-logo.png"
            alt="MyHealthVaultAI Logo"
            width={145}
            height={40}
            className="h-9 w-auto object-contain drop-shadow-[0_0_10px_#71d8ff66]"
          />
        </div>

        {/* MOBILE TOGGLER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          aria-label="Toggle navigation"
        >
          <span
            className={`block h-[3px] w-7 bg-[#0A2A43] rounded transition-transform duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-[3px] w-7 bg-[#0A2A43] rounded transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[3px] w-7 bg-[#0A2A43] rounded transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-md px-6 py-6 space-y-6 text-lg font-medium">
          <MobileLink
            name="About"
            href="#about"
            close={() => setOpen(false)}
          />
          <MobileLink
            name="MyHealthVaultAI"
            href="#myhealthvaultai"
            close={() => setOpen(false)}
          />
          <MobileLink
            name="AI Workflow Support"
            href="#ai-workflow"
            close={() => setOpen(false)}
          />
          <MobileLink
            name="Innovation"
            href="#innovation"
            close={() => setOpen(false)}
          />
          <MobileLink
            name="LuxeSculpt"
            href="#luxesculpt"
            close={() => setOpen(false)}
          />

          <div className="pt-4 border-t border-gray-200 flex justify-center">
            <Image
              src="/mhv-logo.png"
              alt="MyHealthVaultAI Logo"
              width={150}
              height={40}
              className="h-9 w-auto object-contain"
            />
          </div>
        </div>
      )}
    </nav>
  );
}

/* ====== LINKS ====== */

function NavLink({ name, href }: NavLinkProps) {
  return (
    <a
      href={href}
      className="
        relative
        transition-all duration-300
        hover:text-[#ff3fb5]
      "
    >
      {name}
    </a>
  );
}

function MobileLink({ name, href, close }: MobileLinkProps) {
  return (
    <a
      href={href}
      onClick={close}
      className="block text-[#0A2A43] hover:text-[#ff3fb5] transition"
    >
      {name}
    </a>
  );
}

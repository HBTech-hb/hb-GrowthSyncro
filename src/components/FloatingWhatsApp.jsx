import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/918080224138?text=Hi%20I%20want%20help%20with%20my%20business"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-5 md:bottom-6 md:right-6 z-[99999] group"
    >
      {/* BUTTON */}
      <div className="bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 sm:p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 active:scale-95">
        <FaWhatsapp size={28} />
      </div>

      {/* TOOLTIP (Hidden on mobile touch screens, visible on desktop hover) */}
      <span className="hidden md:block absolute right-16 bottom-3 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
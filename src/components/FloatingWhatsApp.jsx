import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/918080224138?text=Hi%20I%20want%20help%20with%20my%20business"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* BUTTON */}
      <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <FaWhatsapp size={30} />
      </div>

      {/* TOOLTIP */}
      <span className="absolute right-16 bottom-3 bg-black text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
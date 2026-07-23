import { useState, useEffect } from "react";
import logo from "../assets/logo/WEBSITE-LOGO.png";
import {
  FaUser,
  FaServicestack,
  FaImage,
  FaPhone,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      id: "about",
      label: "About",
    },
    {
      id: "services",
      label: "Services",
    },
    {
      id: "portfolio",
      label: "Portfolio",
    },
    {
      id: "pricing",
      label: "Pricing",
    },
  ];

  return (
    <>
      {/* ================= Mobile Top Header (Sleek & Compact) ================= */}
      <div className="md:hidden sticky top-0 z-[9999] px-4 py-2.5 bg-white/90 backdrop-blur-md ">
        <div
          className={`mx-auto max-w-7xl rounded-2xl transition-all duration-300 backdrop-blur-xl border flex items-center justify-center px-3 py-1.5 ${isScrolled
              ? "bg-white/90 shadow-lg border-gray-200"
              : "bg-white/70 border-white/50"
            }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img
              src={logo}
              alt="HB GrowthSyncro"
              className="h-18 w-auto object-contain transition-transform active:scale-95"
            />
          </a>

          {/* Button / Action */}
          {/* <a
      href="#contact"
      className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 active:scale-95 transition-all duration-200"
    >
      Free Plan
    </a> */}
        </div>
      </div>
      {/* ================= Desktop ================= */}

      <div className="hidden md:block sticky top-3 z-[9999] px-6 m-5">
        <nav
          className={`mx-auto max-w-5xl rounded-2xl transition-all duration-300 backdrop-blur-xl border
          ${isScrolled
              ? "bg-white/90 shadow-lg border-gray-200"
              : "bg-white/70 border-white/50"
            }`}
        >
          <div className="flex items-center justify-between max-w-4xl mx-auto px-6 py-4">
            {/* Logo */}

            <a href="#home">
              <img
                src={logo}
                alt="HB GrowthSyncro"
                className="h-12 w-auto object-contain transition duration-300"
              />
            </a>

            {/* Navigation */}

            <ul className="flex items-center gap-7">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`relative font-medium transition-all duration-300
                    ${activeSection === item.id
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                      }`}
                  >
                    {item.label}

                    {activeSection === item.id && (
                      <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-blue-600"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Side */}

            <div className="flex items-center gap-5">


              {/* <div className="hidden xl:flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                <FaStar className="text-yellow-500" />
                5.0 Google Rating
              </div> */}

              {/* CTA */}

              <a
                href="#contact"
                className="group flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
              >
                Get My Free Growth Plan

                <FaArrowRight className="transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* ================= Mobile Bottom Floating Nav ================= */}
      <div className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-[99990] w-auto max-w-[85vw]">
        <nav className="flex items-center gap-5 sm:gap-6 rounded-full border border-gray-200/80 bg-white/95 px-6 py-2.5 shadow-2xl backdrop-blur-xl">

          <a
            href="#about"
            className={`flex flex-col items-center text-[10px] font-semibold transition-colors ${activeSection === "about" ? "text-blue-600" : "text-gray-500 hover:text-gray-900"
              }`}
          >
            <FaUser className="text-base mb-1" />
            About
          </a>

          <a
            href="#services"
            className={`flex flex-col items-center text-[10px] font-semibold transition-colors ${activeSection === "services" ? "text-blue-600" : "text-gray-500 hover:text-gray-900"
              }`}
          >
            <FaServicestack className="text-base mb-1" />
            Services
          </a>

          <a
            href="#portfolio"
            className={`flex flex-col items-center text-[10px] font-semibold transition-colors ${activeSection === "portfolio" ? "text-blue-600" : "text-gray-500 hover:text-gray-900"
              }`}
          >
            <FaImage className="text-base mb-1" />
            Portfolio
          </a>

          <a
            href="#contact"
            className={`flex flex-col items-center text-[10px] font-semibold transition-colors ${activeSection === "contact" ? "text-blue-600" : "text-gray-500 hover:text-gray-900"
              }`}
          >
            <FaPhone className="text-base mb-1" />
            Contact
          </a>

        </nav>
      </div>
    </>
  );
};

export default Navbar;
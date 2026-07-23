// src/components/Home.jsx
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiTrendingUp,
  FiMessageCircle,
  FiSearch,
  FiAward,
  FiUsers,
  FiZap,
  FiClock,
} 
from "react-icons/fi";


const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-8 pb-6 lg:pt-8 lg:pb-6 px-6 sm:px-10 bg-white text-slate-900 overflow-hidden flex items-center"
    >
      {/* Background Soft Glow Accents */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-blue-500/10 via-blue-200/20 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Narrative & Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span>Trusted Digital Growth Partner for Local Businesses</span>
            </div>

            {/* Powerful Outcome Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Turn Your Online Presence Into A Reliable <br className="hidden sm:inline" />
              <span className="text-blue-600 inline-block">
                <Typewriter
                  words={[
                    "Customer Engine.",
                    "Lead Generator.",
                    "Revenue Driver.",
                    "Trust Machine.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </h1>

            {/* Conversion-Focused Description */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              HB GrowthSyncro helps local businesses, service providers, and growing brands attract high-intent customers. We engineer high-converting web systems, dominant local Google search profiles, and automated messaging funnels built for business growth.
            </p>

            {/* Trust Checklist */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-xl">
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <FiCheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                <span>High-Converting Web Systems</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <FiCheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Google Maps Top 3 Ranking</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <FiCheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Automated WhatsApp Inquiry Funnels</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <FiCheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Turnkey Growth & SEO Strategy</span>
              </div>
            </div>

            {/* Primary CTA Action Row */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-blue-600/25 group"
              >
                <span>Book Free Consultation</span>
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-base transition-colors duration-200"
              >
                <FiBriefcase className="w-4 h-4 text-slate-500" />
                <span>View Client Results</span>
              </a>
            </div>

            {/* Business Statistics Bar */}
            <div className="mt-14 pt-8 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
              <div>
                <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-slate-900">
                  <FiZap className="w-5 h-5 text-blue-600" />
                  <span>50+</span>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wider">
                  Projects Deployed
                </p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-slate-900">
                  <FiUsers className="w-5 h-5 text-blue-600" />
                  <span>98%</span>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wider">
                  Client Retention
                </p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-slate-900">
                  <FiTrendingUp className="w-5 h-5 text-blue-600" />
                  <span>3.2x</span>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wider">
                  Avg Lead Increase
                </p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-slate-900">
                  <FiClock className="w-5 h-5 text-blue-600" />
                  <span>24/7</span>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wider">
                  System Reliability
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Premium Mockup & Floating Glassmorphism Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
            
            {/* Outer Subtle Glow Behind Graphic */}
            <div className="absolute w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10 animate-pulse" />

            {/* Laptop / Browser Showcase Container */}
            <div className="relative w-full max-w-lg bg-white p-3 rounded-[24px] border border-slate-200/80 shadow-2xl shadow-slate-200/60">
              
              {/* Fake Window Header Bar */}
              <div className="flex items-center justify-between px-3 py-2 bg-slate-50 rounded-t-2xl border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="text-[11px] font-medium text-slate-400 bg-white px-3 py-0.5 rounded-md border border-slate-100">
                  hbdigital.in/growth-engine
                </div>
                <div className="w-4" />
              </div>

              {/* Main Preview Graphic */}
              <div className="relative rounded-b-xl overflow-hidden bg-slate-900 h-[360px] sm:h-[420px] flex flex-col justify-between p-6 text-white">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
                  alt="HB GrowthSyncro Client Growth Dashboard"
                  className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-overlay"
                />
                
                <div className="relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded-full border border-blue-800/50">
                    Live Growth Dashboard
                  </span>
                  <h3 className="text-xl font-bold text-white mt-3 leading-snug">
                    Royal Fitness Club Acquisition System
                  </h3>
                </div>

                <div className="relative z-10 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Monthly Qualified Inquiries</span>
                    <span className="text-emerald-400 font-semibold">+180% Growth</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-[82%]" />
                  </div>
                </div>
              </div>

            </div>

            {/* FLOATING CARD 1: Traffic Spike (Top Right) */}
            <div className="absolute -top-4 -right-2 sm:right-0 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 flex items-center gap-3 animate-bounce [animation-duration:5s]">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                <FiTrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500">Organic Traffic</p>
                <p className="text-sm font-extrabold text-slate-900">+120% Increase</p>
              </div>
            </div>

            {/* FLOATING CARD 2: WhatsApp Enquiries (Bottom Left) */}
            <div className="absolute -bottom-6 -left-2 sm:left-0 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                <FiMessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500">Direct Inquiries</p>
                <p className="text-sm font-extrabold text-slate-900">3x WhatsApp Leads</p>
              </div>
            </div>

            {/* FLOATING CARD 3: Google Map Position (Middle Right) */}
            <div className="hidden sm:flex absolute top-1/2 -right-8 -translate-y-1/2 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 border border-amber-100">
                <FiSearch className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500">Google Map Ranking</p>
                <p className="text-sm font-extrabold text-slate-900">Top 3 Local Search</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
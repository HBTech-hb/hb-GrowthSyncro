import socialMedia from "../assets/services/social-media.png";
import reelEditing from "../assets/services/reel-editing.png";
import canvaDesign from "../assets/services/canva-design.png";
import contentStrategy from "../assets/services/content-strategy.png";

import creativeContent from "../assets/services/creative-content.png";
import fastResponse from "../assets/services/fast-response.png";
import affordablePricing from "../assets/services/affordable-pricing.png";
import clientSupport from "../assets/services/client-support.png";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 sm:px-10 bg-[var(--surface)]">

      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-16">

          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)]">
            I Help Businesses Turn Online Visitors Into Real Customers
          </h1>

          <p className="text-[var(--text-muted)] mt-6 max-w-3xl mx-auto text-lg">
            I build simple digital systems that help small businesses get more
            calls, WhatsApp messages, and customer enquiries — not just followers or views.
          </p>

        </div>

        {/* WHAT I DO (NO PERSONAL STORY) */}
        <div className="bg-[var(--surface)] p-8 md:p-10 rounded-2xl shadow-md mb-16">

          <h2 className="text-2xl font-bold text-center mb-6">
            What I Do For Your Business
          </h2>

          <p className="text-[var(--text-muted)] text-lg leading-relaxed">
            I help local businesses grow by improving their online presence in a simple and practical way.
            This includes websites, content, and basic digital systems that actually bring customer enquiries.
          </p>

          <p className="text-[var(--text-muted)] text-lg leading-relaxed mt-4">
            My focus is not on complicated marketing — I focus on what matters:
            getting you real customers through your online presence.
          </p>

        </div>

        {/* SERVICES */}
        <h2 className="text-3xl font-bold text-center mb-10">
          Services That Help You Get Customers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          <ServiceCard img={socialMedia} title="Social Media" desc="Build presence" />
          <ServiceCard img={reelEditing} title="Reels Editing" desc="Engaging videos" />
          <ServiceCard img={canvaDesign} title="Design Work" desc="Marketing creatives" />
          <ServiceCard img={contentStrategy} title="Strategy" desc="Customer growth plan" />

        </div>

        {/* WHY TRUST */}
        <div className="bg-[var(--surface)] p-10 rounded-2xl shadow-md mb-16">

          <h2 className="text-2xl font-bold text-center mb-8">
            Why Businesses Choose My Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">

            <Feature img={creativeContent} text="Clear & Simple Content" />
            <Feature img={clientSupport} text="Direct Communication" />
            <Feature img={fastResponse} text="Fast Delivery" />
            <Feature img={affordablePricing} text="Budget Friendly" />

          </div>

        </div>

        {/* FINAL CTA */}
        <div className="text-center">

          <h2 className="text-3xl font-bold mb-4">
            Want More Customers for Your Business?
          </h2>

          <p className="text-[var(--text-muted)] mb-6">
            Let’s build a simple system that brings you real enquiries through WhatsApp and your website.
          </p>

          <a
            href="https://wa.me/918080224138?text=Hi%20I%20want%20a%20website%20for%20my%20business"
            className="px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
          >
            Contact on WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
};

/* COMPONENTS */
const ServiceCard = ({ img, title, desc }) => (
  <div className="bg-[var(--surface)] p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
    <img src={img} className="w-16 h-16 mx-auto mb-4" />
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="text-[var(--text-muted)] text-sm mt-2">{desc}</p>
  </div>
);

const Feature = ({ img, text }) => (
  <div className="p-4">
    <img src={img} className="w-14 h-14 mx-auto mb-3" />
    <p className="font-semibold">{text}</p>
  </div>
);

export default About;
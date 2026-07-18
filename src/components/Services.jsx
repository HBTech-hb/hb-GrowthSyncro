const services = [
  {
    title: "Social Media Management",
    description:
      "Content planning, scheduling, audience engagement, and account growth strategies.",
    icon: "📱",
  },
  {
    title: "Reel Editing",
    description:
      "Professional short-form videos with captions, transitions, and engaging edits.",
    icon: "🎬",
  },
  {
    title: "Canva Design",
    description:
      "Eye-catching social media posts, banners, stories, and promotional creatives.",
    icon: "🎨",
  },
  {
    title: "Content Strategy",
    description:
      "Content planning and marketing strategies that help businesses grow online.",
    icon: "📈",
  },
  {
    title: "AI Growth Systems",
    description:
      "Using AI tools to improve content creation, workflows, and customer engagement.",
    icon: "🤖",
  },
  {
    title: "Website Development",
    description:
      "Modern, responsive websites that help businesses build credibility online.",
    icon: "🌐",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 px-6 sm:px-10 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADING (IMPROVED) */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            How I Help Your Business Get More Customers
          </h2>

          <p className="text-[var(--text-muted)] text-lg mt-4 max-w-3xl mx-auto">
            Simple digital solutions designed to turn your online presence into real WhatsApp messages, calls, and customer enquiries.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[var(--surface)] p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-5">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                {service.title}
              </h3>

              <p className="text-[var(--text-muted)] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

        </div>

        {/* 🔥 NEW CTA SECTION (IMPORTANT ADDITION) */}
        <div className="text-center mt-16">

          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Want These Results for Your Business?
          </h3>

          <p className="text-[var(--text-muted)] mb-6">
            Let’s build a simple system that brings you real customers through your website and social media.
          </p>

          <a
            href="https://wa.me/918080224138?text=Hi%20I%20want%20help%20to%20get%20more%20customers"
            className="px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
          >
            Get Free Consultation on WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
};

export default Services;
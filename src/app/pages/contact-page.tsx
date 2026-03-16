import { Mail, Phone, MapPin, Clock, MessageCircle, Send, LocateFixed, BookOpenText, Download } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
  };

  const [userCoords, setUserCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [locationError, setLocationError] = useState("");

  const handleUseMyLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser.");
      return;
    }

    setLocationError("");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        setLocationError("Unable to fetch your location. Please allow location access and try again.");
      },
    );
  };

  const mapLat = userCoords?.lat ?? 34.0522;
  const mapLng = userCoords?.lng ?? -118.2437;
  const mapEmbedUrl = `https://maps.google.com/maps?q=${mapLat},${mapLng}&z=13&output=embed`;

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      info: "1-800-DAIRY-01",
      hours: "Mon-Fri: 8am - 6pm PST",
      color: "from-emerald-50 to-teal-50 border-emerald-200",
      iconBg: "bg-emerald-100 text-emerald-700",
    },
    {
      icon: Mail,
      title: "Email",
      info: "hello@dairyfresh.com",
      hours: "Response within 24 hours",
      color: "from-yellow-50 to-amber-50 border-yellow-200",
      iconBg: "bg-yellow-100 text-yellow-700",
    },
    {
      icon: MapPin,
      title: "Headquarters",
      info: "123 Dairy Lane, Fresh Valley, CA 90210",
      hours: "Visit us by appointment",
      color: "from-rose-50 to-pink-50 border-rose-200",
      iconBg: "bg-rose-100 text-rose-700",
    },
    {
      icon: Clock,
      title: "Hours",
      info: "9am - 6pm PST",
      hours: "Closed Sundays & Holidays",
      color: "from-cyan-50 to-blue-50 border-cyan-200",
      iconBg: "bg-cyan-100 text-cyan-700",
    },
  ];

  const faqs = [
    {
      q: "How long does delivery take?",
      a: "Standard delivery is 2-3 business days. We ship via refrigerated express to ensure freshness. Free shipping on orders over $40.",
    },
    {
      q: "Are your products organic certified?",
      a: "Select products are USDA Organic certified. Check the product label for certification details. All items are sourced from quality-vetted farms.",
    },
    {
      q: "What's your return policy?",
      a: "100% satisfaction guarantee. If you're not happy with any product, contact us within 7 days for a full refund or replacement.",
    },
    {
      q: "Can I customize a bulk order?",
      a: "Absolutely! Email bulk@dairyfresh.com or call 1-800-DAIRY-01 for corporate, restaurant, or wholesale inquiries.",
    },
    {
      q: "Do you ship internationally?",
      a: "Currently we ship within the continental United States. International expansion is in development—check back soon!",
    },
    {
      q: "How do I report an issue with my order?",
      a: "Contact support@dairyfresh.com or call 1-800-DAIRY-01. Our team responds within 2 hours during business hours.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f4]" style={{ fontFamily: "var(--font-body)" }}>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 right-0 h-96 w-96 rounded-full bg-white blur-3xl" />
          <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center text-white">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-emerald-200 mb-4 opacity-90">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
              We're Here to Help
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-emerald-50">
              Have a question about our products or services? Reach out and our team will respond promptly—we're always happy to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT METHODS
      ══════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, i) => (
              <motion.div
                key={method.title}
                {...fadeInUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`rounded-2xl border p-8 hover:shadow-lg transition bg-gradient-to-br ${method.color}`}
              >
                <div className={`inline-flex items-center justify-center size-14 rounded-xl ${method.iconBg} mb-4`}>
                  <method.icon className="size-7" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{method.title}</h3>
                <p className="text-slate-600 font-semibold mb-1">{method.info}</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide">{method.hours}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Form & Info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Form */}
            <motion.div {...fadeInUp} className="order-2 md:order-1">
              <div className="bg-white rounded-3xl border border-emerald-100 p-10 shadow-sm">
                <h2 className="text-3xl font-bold text-slate-900 mb-8" style={{ fontFamily: "var(--font-display)" }}>
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-5 py-3.5 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition text-slate-900 placeholder-slate-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-5 py-3.5 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition text-slate-900 placeholder-slate-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-5 py-3.5 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition text-slate-900 placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition text-slate-900"
                    >
                      <option>General Inquiry</option>
                      <option>Product Question</option>
                      <option>Order Support</option>
                      <option>Partnership Opportunity</option>
                      <option>Feedback</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us how we can help…"
                      className="w-full px-5 py-3.5 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:outline-none transition text-slate-900 placeholder-slate-400"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-200"
                  >
                    <Send className="size-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Info Block */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="order-1 md:order-2"
            >
              <div className="space-y-6">
                {/* Social / Quick Links */}
                <div className="bg-white rounded-3xl border border-emerald-100 p-10 shadow-sm">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-display)" }}>
                    Other Ways to Reach Us
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:hello@dairyfresh.com"
                      className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition border border-emerald-100 hover:border-emerald-200"
                    >
                      <Mail className="size-5 text-emerald-700 flex-none" />
                      <span className="text-sm font-semibold text-slate-900">Email: hello@dairyfresh.com</span>
                    </a>
                    <a
                      href="tel:+18008007942"
                      className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition border border-emerald-100 hover:border-emerald-200"
                    >
                      <Phone className="size-5 text-emerald-700 flex-none" />
                      <span className="text-sm font-semibold text-slate-900">Call: 1-800-DAIRY-01</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => window.dispatchEvent(new CustomEvent("dairyfresh-open-chat"))}
                      className="w-full flex items-center gap-3 p-4 rounded-xl bg-slate-100 hover:bg-slate-200 transition border border-slate-200 text-left"
                    >
                      <MessageCircle className="size-5 text-slate-700 flex-none" />
                      <span className="text-sm font-semibold text-slate-900">Live Chat (9am-6pm PST)</span>
                    </button>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl border-2 border-emerald-200 p-10 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-700 mb-3">
                    Quick Response
                  </p>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    We Respond Fast
                  </h4>
                  <p className="text-slate-600 mb-6">
                    Average response time is under 2 hours during business hours. Weekend inquiries are answered by Monday morning.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-slate-700"><span className="font-semibold">Monday-Friday:</span> 8am - 6pm PST</p>
                    <p className="text-slate-700"><span className="font-semibold">Saturday:</span> 10am - 4pm PST</p>
                    <p className="text-slate-700"><span className="font-semibold">Sunday:</span> Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQs
      ══════════════════════════════════════ */}
      <section className="py-20 bg-white/60 border-t border-emerald-100/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-slate-600">
              Quick answers to common questions about our products and services
            </p>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border-2 border-emerald-100 bg-white p-7 hover:border-emerald-200 transition"
              >
                <h3 className="font-bold text-slate-900 text-lg mb-3">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MAP + BROCHURE
      ══════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              {...fadeInUp}
              className="lg:col-span-2 bg-white rounded-3xl border border-emerald-100 p-6 md:p-8 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
                    Find Us on the Map
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Showing {userCoords ? "your current location" : "our main location"}. Tap the button to switch to your live location.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleUseMyLocation}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition"
                >
                  <LocateFixed className="size-4" />
                  Use My Location
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden border border-emerald-100">
                <iframe
                  title="DairyFresh map"
                  src={mapEmbedUrl}
                  className="w-full h-[320px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {locationError && (
                <p className="mt-3 text-sm font-medium text-red-600">{locationError}</p>
              )}
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-emerald-700 to-teal-700 rounded-3xl p-8 text-white shadow-lg"
            >
              <div className="inline-flex items-center justify-center size-12 rounded-xl bg-white/15 mb-5">
                <BookOpenText className="size-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
                DairyFresh Brochure
              </h3>
              <p className="text-emerald-50/90 text-sm leading-relaxed">
                Download or open our latest brochure with product categories, quality standards, and contact information.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href="/dairyfresh-brochure.html"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white text-emerald-800 font-semibold text-sm hover:bg-emerald-50 transition"
                >
                  <BookOpenText className="size-4" />
                  Open Brochure
                </a>
                <a
                  href="/dairyfresh-brochure.html"
                  download
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition"
                >
                  <Download className="size-4" />
                  Download Brochure
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

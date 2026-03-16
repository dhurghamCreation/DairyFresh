import { Users, Award, Heart, Leaf, Truck, Sprout, CheckCircle2 } from "lucide-react";
import { AnimatedCounter } from "../components/animated-counter";
import { motion } from "motion/react";

const fadeInUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export function AboutPage() {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      desc: "Eco-friendly farm practices, renewable energy, and zero-waste packaging",
      color: "from-emerald-50 to-teal-50 border-emerald-200",
      iconBg: "bg-emerald-100 text-emerald-700",
    },
    {
      icon: Award,
      title: "Quality",
      desc: "Rigorous testing ensures only the finest dairy reaches your table",
      color: "from-yellow-50 to-amber-50 border-yellow-200",
      iconBg: "bg-yellow-100 text-yellow-700",
    },
    {
      icon: Users,
      title: "Community",
      desc: "Supporting 50+ local family farms and rural agricultural communities",
      color: "from-rose-50 to-pink-50 border-rose-200",
      iconBg: "bg-rose-100 text-rose-700",
    },
    {
      icon: Heart,
      title: "Animal Care",
      desc: "Grass-fed, humanely raised animals treated with utmost respect",
      color: "from-cyan-50 to-blue-50 border-cyan-200",
      iconBg: "bg-cyan-100 text-cyan-700",
    },
  ];

  const timeline = [
    { year: "1995", title: "The Beginning", desc: "Founded DairyFresh with a small family farm partnership" },
    { year: "2002", title: "First Expansion", desc: "Grew to serve 5 states across the Pacific region" },
    { year: "2012", title: "Going Organic", desc: "Certified USDA Organic and committed to sustainability" },
    { year: "2024", title: "12K+ Families", desc: "Now delivering fresh dairy to 12,000+ satisfied customers daily" },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f4]" style={{ fontFamily: "var(--font-body)" }}>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-1/3 left-0 h-72 w-72 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center text-white">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-emerald-200 mb-4 opacity-90">
              Our Heritage
            </span>
            <h1
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              29 Years of Pure Dairy Tradition
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-emerald-50 leading-relaxed">
              From humble farm beginnings to a trusted household name, we've stayed true to our promise: fresh products, happy farms, healthier families.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          OUR STORY
      ══════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-700 mb-3 block">
                The DairyFresh Story
              </span>
              <h2 className="text-4xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-display)" }}>
                From Family Passion to Your Table
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  In 1995, our founder Sarah Chen believed that families deserved pure, fresh dairy without compromise. She partnered with five local family farms to create DairyFresh—a brand built on transparency and quality.
                </p>
                <p>
                  Today, nearly three decades later, we work with over 50 carefully selected farms across pristine agricultural regions. Every bottle, wheel, and container carries our commitment: what's natural stays natural.
                </p>
                <p>
                  We've turned down multi-million dollar acquisition offers to stay independent. Because our real success is measured in happy customers and thriving farming families.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {["USDA Organic Certified", "Non-GMO Verified", "Certified Humane", "Carbon Neutral Shipping"].map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-50 border border-emerald-200 text-sm font-semibold text-emerald-800"
                  >
                    <CheckCircle2 className="size-4" />
                    {badge}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&q=80"
                alt="Dairy farm landscape"
                className="rounded-3xl shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-6 shadow-lg border border-emerald-100 max-w-xs">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-1">Our Impact</p>
                <p className="text-3xl font-bold text-slate-900">50+ Farms</p>
                <p className="text-sm text-slate-600 mt-1">Supporting rural communities nationwide</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          OUR VALUES
      ══════════════════════════════════════ */}
      <section className="py-20 bg-white/60 border-y border-emerald-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-emerald-700 mb-3">
              What Drives Us
            </span>
            <h2 className="text-4xl font-bold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
              Our Core Values
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              These principles guide every decision we make, from farm partnerships to product packaging.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                {...fadeInUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`rounded-2xl border p-7 hover:shadow-lg transition bg-gradient-to-br ${value.color}`}
              >
                <div className={`inline-flex items-center justify-center size-14 rounded-xl ${value.iconBg} mb-4`}>
                  <value.icon className="size-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TIMELINE
      ══════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
              Our Journey
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Three decades of growth, commitment, and unwavering quality
            </p>
          </motion.div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-200 to-emerald-100 transform -translate-x-1/2 hidden md:block" />
            <div className="grid md:grid-cols-2 gap-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  {...fadeInUp}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`relative ${i % 2 === 0 ? "md:pr-12" : "md:pl-12 md:col-start-2"}`}
                >
                  <div className="hidden md:absolute top-6 left-1/2 size-4 rounded-full bg-emerald-500 border-4 border-white transform -translate-x-1/2" />
                  <div className="bg-white rounded-2xl border border-emerald-100 p-8 shadow-sm hover:shadow-lg transition">
                    <span className="inline-block text-sm font-bold uppercase tracking-widest text-emerald-700 mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS
      ══════════════════════════════════════ */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { end: 29, suffix: "+", label: "Years Pure" },
              { end: 50, suffix: "+", label: "Partner Farms" },
              { end: 12, suffix: "K+", label: "Happy Customers" },
              { end: 15, suffix: "", label: "Quality Awards" },
            ].map((stat, i) => (
              <motion.div key={stat.label} {...fadeInUp} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <div className="text-5xl font-bold mb-2">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                </div>
                <p className="text-emerald-100 text-sm font-semibold uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CERTIFICATIONS
      ══════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-slate-900 mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Trusted & Certified
            </h2>
            <p className="text-slate-600 mb-12 text-lg">
              Our products meet the highest international standards and certifications. We're transparent, accountable, and proud of our compliance.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "USDA Organic", desc: "100% organic certified" },
              { name: "Non-GMO Project", desc: "No genetically modified ingredients" },
              { name: "Certified Humane", desc: "Ethical animal treatment" },
              { name: "Carbon Neutral", desc: "Net-zero shipping emissions" },
            ].map((cert, i) => (
              <motion.div
                key={cert.name}
                {...fadeInUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-6 hover:border-emerald-400 transition"
              >
                <CheckCircle2 className="size-8 text-emerald-700 mx-auto mb-3" />
                <p className="font-bold text-slate-900">{cert.name}</p>
                <p className="text-sm text-slate-600 mt-2">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
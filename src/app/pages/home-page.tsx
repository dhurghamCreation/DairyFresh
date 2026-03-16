import { Link } from "react-router";
import iceShopImg from "../../images/ice shop.png";
import greekYogurtImage from "../../images/gre you.png";
import norwegianImage from "../../images/Nor.png";      
import NDC from "../../images/NDC.png";
import Green from "../../images/Green.png"; 

import {
  ArrowRight,
  Leaf,
  Truck,
  Award,
  Clock,
  ShieldCheck,
  Sprout,
  Star,
  Sparkles,
  Globe,
  ChevronLeft,
  ChevronRight,
  Play,
  Heart,
  Users,
  MapPin,
} from "lucide-react";
import { products } from "../data/products";
import { ProductCard } from "../components/product-card";
import { AnimatedCounter } from "../components/animated-counter";
import { motion } from "motion/react";
import { useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export function HomePage() {
  const featuredProducts = products.slice(0, 6);
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (dir: "left" | "right") => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: dir === "right" ? 340 : -340, behavior: "smooth" });
    }
  };

  const categories = [
    {
      name: "Milk",
      image:
        "https://images.unsplash.com/photo-1768850418251-17480117ac9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG1pbGslMjBib3R0bGVzfGVufDF8fHx8MTc3MjkyNTUyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Cheese",
      image:
        "https://images.unsplash.com/photo-1717957352201-1d3ee984b6ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlc2UlMjB2YXJpZXRpZXMlMjBwbGF0dGVyfGVufDF8fHx8MTc3MjkyNTUyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Yogurt",
      image:
        "https://images.unsplash.com/photo-1621156970483-cc0960ec7f0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2d1cnQlMjBicmVha2Zhc3QlMjBoZWFsdGh5fGVufDF8fHx8MTc3MjkyNTUyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Ice Cream",
      image:
        "https://images.unsplash.com/photo-1673551493011-2b5f771013d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBjcmVhbSUyMGRlc3NlcnR8ZW58MXx8fHwxNzcyOTA1MDAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&q=80", alt: "Happy cows on a green farm", label: "Our Farms" },
    { src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80", alt: "Happy family enjoying milk", label: "Happy Families" },
    { src: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600&q=80", alt: "Artisan cheese market counter", label: "Cheese Market" },
    { src: iceShopImg, alt: "Fresh ice cream in shop", label: "Ice Cream Shop" },
    { src: "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=600&q=80", alt: "Dairy farm at sunrise", label: "Farm Sunrise" },
    { src: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=600&q=80", alt: "Smiling customer at counter", label: "Happy Customers" },
    { src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80", alt: "Butter and cream products", label: "Artisan Butter" },
    { src: "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=600&q=80", alt: "Children enjoying ice cream", label: "Sweet Moments" },
    { src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80", alt: "Fresh yogurt bowls", label: "Yogurt Bowls" },
  ];

  const worldDairy = [
    {
      flag: "🇫🇷",
      country: "France",
      specialty: "Brie & Camembert",
      desc: "Soft-ripened masterpieces with bloomy white rinds and buttery, mushroomy cores.",
      image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&q=80",
      color: "from-blue-50 to-indigo-50 border-blue-100",
    },
    {
      flag: "🇮🇹",
      country: "Italy",
      specialty: "Burrata & Parmigiano",
      desc: "Silky burrata pouches and hard, granular Parmigiano aged 24+ months.",
      image: "https://images.unsplash.com/photo-1650142700227-ebd74e00d84e?w=400&q=80",
      color: "from-green-50 to-emerald-50 border-green-100",
    },
    {
      flag: "🇬🇷",
      country: "Greece",
      specialty: "Authentic Feta",
      desc: "Brined PDO feta made from sheep and goat milk — tangy, crumbly, salty.",
      image: greekYogurtImage,
      color: "from-sky-50 to-cyan-50 border-sky-100",
    },
    
    {
      flag: "🇮🇳",
      country: "India",
      specialty: "Paneer & Ghee",
      desc: "Firm fresh paneer for curries and golden clarified ghee — pillars of Indian cuisine.",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80",
      color: "from-orange-50 to-amber-50 border-orange-100",
    },
    {
      flag: "🇳🇱",
      country: "Netherlands",
      specialty: "Gouda & Edam",
      desc: "Smooth, waxy Gouda in baby to aged varieties; Edam in its iconic red wax.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&q=80",
      color: "from-yellow-50 to-lime-50 border-yellow-100",
    },
    {
      flag: "🇹🇷",
      country: "Turkey",
      specialty: "Kaymak & Ayran",
      desc: "Super-thick clotted cream (kaymak) with honey, and frothy cold yogurt drink.",
      image: "https://images.unsplash.com/photo-1684135347630-82c37ed5c7b8?w=600&q=80",
      color: "from-teal-50 to-cyan-50 border-teal-100",
    },
    {
      flag: "🇯🇵",
      country: "Japan",
      specialty: "Hokkaido Milk",
      desc: "Ultra-rich milk from Hokkaido's pristine northern farms — creamy beyond compare.",
      image: "https://images.unsplash.com/photo-1768850418251-17480117ac9b?w=400&q=80",
      color: "from-pink-50 to-rose-50 border-pink-100",
    },
    {
      flag: "🇳🇴",
      country: "Norway",
      specialty: "Brunost (Brown Cheese)",
      desc: "Uniquely caramelised whey cheese with sweet, fudgy flavour — a Nordic treasure.",
      image: norwegianImage,
      color: "from-amber-50 to-yellow-50 border-amber-100",
    },
    {
      flag: "🇲🇽",
      country: "Mexico",
      specialty: "Queso Fresco & Crema",
      desc: "Mild, crumbly queso fresco for tacos; rich tangy crema drizzled over everything.",
      image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&q=80",
      color: "from-lime-50 to-green-50 border-lime-100",
    },
    {
      flag: "🇷🇺",
      country: "Russia",
      specialty: "Kefir & Smetana",
      desc: "Probiotic kefir (drinkable yogurt) and smetana, the rich cultured sour cream.",
      image: "https://images.unsplash.com/photo-1621156970483-cc0960ec7f0b?w=400&q=80",
      color: "from-violet-50 to-purple-50 border-violet-100",
    },
    {
      flag: "🇵🇰",
      country: "Pakistan",
      specialty: "Doodh Pati & Khoya",
      desc: "Spiced milky chai (doodh pati) and slow-simmered khoya for rich sweets.",
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&q=80",
      color: "from-emerald-50 to-teal-50 border-emerald-100",
    },
  ];

  const sponsors = [
    { name: "National Dairy Council", logo: NDC, desc: "Quality Standards" },
    { name: "Organic Farmers Co-op", logo: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&q=60", desc: "Certified Organic" },
    { name: "FreshFarm Alliance", logo: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&q=60", desc: "Local Sourcing" },
    { name: "GreenPasture Organics", logo: Green, desc: "Sustainable Practices" },
    
    
  ];

  const process = [
    {
      title: "Farm Morning Pickup",
      text: "Milk is collected before sunrise from selected farms within a 40 km radius.",
      icon: Sprout,
    },
    {
      title: "Cold-Chain Checked",
      text: "Every batch is temperature-verified with quality scans before packing.",
      icon: ShieldCheck,
    },
    {
      title: "Doorstep in Hours",
      text: "Fast-route delivery keeps products fresh and naturally flavorful.",
      icon: Truck,
    },
  ];

  const testimonials = [
    {
      quote:
        "The freshness is unreal. Their Greek yogurt has become my daily breakfast ritual.",
      name: "Nadia K.",
      city: "Lahore",
      avatar: "NK",
      color: "from-emerald-400 to-teal-500",
    },
    {
      quote:
        "Clean packaging, quick delivery, and premium quality cheese every single time.",
      name: "Hamza R.",
      city: "Islamabad",
      avatar: "HR",
      color: "from-blue-400 to-cyan-500",
    },
    {
      quote:
        "Finally a dairy store that feels modern and trustworthy. Ordering is super smooth.",
      name: "Sara M.",
      city: "Karachi",
      avatar: "SM",
      color: "from-violet-400 to-purple-500",
    },
  ];

  return (
    <div className="bg-[#fffdfa] text-slate-900" style={{ fontFamily: "var(--font-body)" }}>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,197,94,0.16),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.2),transparent_38%),linear-gradient(180deg,#f4fbff_0%,#fffdfa_62%,#ffffff_100%)]" />
        <div className="absolute -top-16 -left-10 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -top-12 right-0 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-18 md:py-24">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/70 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                <Sparkles className="size-3.5" />
                Crafted Fresh Every Day
              </span>
              <h1
                className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.1] text-slate-900"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Pure Dairy. Bold Flavor.
                <span className="block text-emerald-700">Delivered with Care.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
                From early-morning farm collection to your fridge in hours, DairyFresh brings premium milk, cheese, yogurt, and desserts with modern quality standards.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 px-8 py-3.5 text-white font-semibold shadow-md transition hover:-translate-y-0.5"
                >
                  Explore Products
                  <ArrowRight className="size-5" />
                </Link>
                <Link
                  to="/about"
                  className="rounded-xl border-2 border-slate-300 px-8 py-3.5 font-semibold text-slate-700 transition hover:border-emerald-600 hover:text-emerald-800 hover:bg-emerald-50"
                >
                  Our Story
                </Link>
              </div>
              {/* Stats row */}
              <div className="mt-10 flex gap-8">
                {[
                  { icon: Users, value: "12K+", label: "Happy Customers" },
                  { icon: Heart, value: "99%", label: "Satisfaction Rate" },
                  { icon: MapPin, value: "40+", label: "Farm Partners" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-start gap-2">
                    <div className="mt-0.5 flex size-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                      <stat.icon className="size-4" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-900">{stat.value}</p>
                      <p className="text-xs text-slate-500">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="relative"
            >
              {/* Floating cheese badge */}
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-12 -left-8 z-10 flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-3 py-2 shadow-lg"
              >
                <div>
                  <p className="text-xs font-bold text-slate-800 leading-none">Artisan Cheese</p>
                  <p className="text-[10px] text-emerald-600 mt-0.5 font-semibold">Just landed</p>
                </div>
              </motion.div>
              {/* Floating ice cream badge */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                 className="absolute bottom-24 -right-6 z-10 flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-3 py-2 shadow-lg"
              >
                <div>
                  <p className="text-xs font-bold text-slate-800 leading-none">Summer Special</p>
                  <p className="text-[10px] text-emerald-600 mt-0.5 font-semibold">3 for 2 today</p>
                </div>
              </motion.div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white/80 p-4 shadow-xl backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Satisfaction</p>
                <p className="text-3xl font-bold text-emerald-700">
                  <AnimatedCounter end={98} suffix="%" />
                </p>
              </div>
              <div className="absolute -top-5 right-2 rounded-2xl bg-slate-900 px-4 py-3 text-white shadow-xl">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-300">Daily Orders</p>
                <p className="text-2xl font-semibold">
                  <AnimatedCounter end={1200} suffix="+" />
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1771255217872-99fe6c876e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWlyeSUyMHByb2R1Y3RzJTIwbWlsayUyMGNoZWVzZXxlbnwxfHx8fDE3NzI4NzkwNTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Dairy products"
                className="h-[480px] w-full rounded-[2rem] object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURE BADGES
      ══════════════════════════════════════ */}
      <section className="py-16 border-y border-emerald-100 bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Leaf, title: "100% Organic", text: "Certified farm partners", color: "bg-emerald-50 text-emerald-700" },
              { icon: Truck, title: "Fast Delivery", text: "Cold-chain doorstep", color: "bg-blue-50 text-blue-700" },
              { icon: Clock, title: "Fresh Daily", text: "Packed every morning", color: "bg-amber-50 text-amber-700" },
              { icon: Award, title: "Award Quality", text: "Premium dairy standard", color: "bg-violet-50 text-violet-700" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                {...fadeInUp}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm hover:shadow-lg transition group cursor-default"
              >
                <div className={`mx-auto mb-3 flex size-12 items-center justify-center rounded-xl ${feature.color} group-hover:scale-110 transition-transform`}>
                  <feature.icon className="size-6" />
                </div>
                <h3 className="font-bold text-slate-900">{feature.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          OUR PROMISE
      ══════════════════════════════════════ */}
      <section className="py-16 bg-[#faf9f6] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate-600 mb-5">
                Our Commitment
              </span>
              <h2
                className="text-3xl md:text-4xl font-semibold text-slate-900 leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                We believe food should be{" "}
                <span className="italic text-emerald-700">real.</span>
              </h2>
              <p className="mt-4 text-slate-600 text-lg leading-relaxed max-w-md">
                No mysterious ingredients. No shortcuts. Just honest dairy — sourced from farms we personally trust and delivered before your morning starts.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { text: "Farm-direct sourcing" },
                  { text: "Unbroken cold chain" },
                  { text: "Family-owned farms" },
                  { text: "Eco-friendly packaging" },
                  { text: "Certified organic" },
                  { text: "Zero GMO promise" },
                ].map((item) => (
                  <div
                    key={item.text}
                      className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-2.5 shadow-sm hover:border-emerald-300 transition"
                  >
                      <span className="size-1.5 rounded-full bg-emerald-600 flex-none" />
                      <span className="text-sm font-semibold text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-300/20 to-amber-300/20 blur-2xl -z-10" />
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=700&q=80"
                alt="Family enjoying dairy breakfast together"
                className="relative w-full h-80 rounded-3xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-5 -right-5 rounded-2xl bg-white px-5 py-4 shadow-xl border border-emerald-100">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Est.</p>
                <p className="text-3xl font-bold text-slate-900 leading-none">1995</p>
                <p className="text-xs text-slate-500 mt-1">Family run since day one</p>
              </div>
              <div className="absolute -top-4 left-6 rounded-2xl bg-emerald-600 px-4 py-2.5 text-white shadow-xl">
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Freshness</p>
                <p className="text-xl font-bold leading-none">Guaranteed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PHOTO GALLERY (scrollable)
      ══════════════════════════════════════ */}
      <section className="py-16 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="flex items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-4xl font-semibold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
                Life at DairyFresh
              </h2>
              <p className="mt-2 text-slate-600">Farms, markets, happy faces — scroll to explore our world.</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => scrollGallery("left")}
                className="flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition shadow-sm"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={() => scrollGallery("right")}
                className="flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition shadow-sm"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </motion.div>
        </div>
        <div
          ref={galleryRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pl-4 sm:pl-8 lg:pl-[calc((100vw-80rem)/2+2rem)] pr-4 pb-4 scrollbar-thin"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#10b981 #f0fdf4" }}
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative flex-none w-72 h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-4 text-white font-semibold text-sm bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                {img.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SHOP BY CATEGORY
      ══════════════════════════════════════ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-8">
            <h2 className="text-4xl font-semibold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
              Shop by Category
            </h2>
            <p className="mt-3 text-slate-600">Find exactly what your home needs, from essentials to indulgent treats.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                {...fadeInUp}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Link
                  to={`/products?category=${category.name}`}
                  className="group relative block overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    {category.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW FRESHNESS REACHES YOU
      ══════════════════════════════════════ */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-10 text-center">
            <h2 className="text-4xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              How Freshness Reaches You
            </h2>
            <p className="mt-3 text-slate-300">A short journey with strict quality checkpoints.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <motion.article
                key={item.title}
                {...fadeInUp}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
                  <item.icon className="size-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-slate-300 leading-relaxed">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          DAIRY AROUND THE WORLD
      ══════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-700 mb-4">
              <Globe className="size-3.5" />
              A World of Dairy
            </span>
            <h2 className="text-4xl font-semibold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
              Dairy Traditions From Every Corner of the Globe
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Every culture has perfected its own dairy art form. Explore the finest traditions — from Alpine caves to Indian kitchens.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {worldDairy.map((item, index) => (
              <motion.div
                key={item.country}
                {...fadeInUp}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`rounded-2xl border p-5 hover:shadow-lg transition group ${item.color} bg-gradient-to-br`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{item.flag}</span>
                  <div>
                    <p className="font-bold text-slate-900">{item.country}</p>
                    <p className="text-xs text-slate-500 font-medium">{item.specialty}</p>
                  </div>
                </div>
                <img
                  src={item.image}
                  alt={item.specialty}
                  className="w-full h-32 object-cover rounded-xl mb-3 group-hover:scale-[1.03] transition duration-500"
                />
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          VIDEO FEATURE
      ══════════════════════════════════════ */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-6">
                <Play className="size-3.5" />
                Behind the Scenes
              </span>
              <h2 className="text-4xl font-semibold leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                From Sunrise Milking to Your Morning Cup
              </h2>
              <p className="mt-5 text-slate-300 leading-relaxed text-lg">
                Watch how we partner with passionate farmers who rise before dawn — ensuring every drop of milk is collected with care, kept cold, and delivered fresh to your door.
              </p>
              <ul className="mt-6 space-y-3 text-slate-300">
                {[
                  "Organic-certified partner farms",
                  "Single-day cold-chain processing",
                  "Zero-preservative packaging",
                  "Farm-to-door in under 24 hours",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="size-5 rounded-full bg-emerald-500 flex items-center justify-center flex-none">
                      <svg className="size-3 text-white" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-white font-semibold hover:bg-emerald-400 transition shadow-lg shadow-emerald-900"
              >
                Learn More About Us
                <ArrowRight className="size-4" />
              </Link>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 group"
            >
              <img
                src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&q=80"
                alt="Dairy farm at sunrise"
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-emerald-900/30 flex items-center justify-center">
                <a
                  href="https://www.youtube.com/results?search_query=dairy+farm+fresh+milk+documentary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-20 items-center justify-center rounded-full bg-white/90 hover:bg-white hover:scale-110 transition shadow-2xl"
                  aria-label="Watch dairy farm video"
                >
                  <Play className="size-8 text-emerald-600 ml-1" />
                </a>
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/50 backdrop-blur p-3 text-white text-sm">
                <p className="font-semibold">Our Farm Partnership Story</p>
                <p className="text-slate-300 text-xs mt-0.5">Click to explore dairy farm documentaries</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURED PRODUCTS
      ══════════════════════════════════════ */}
      <section className="py-16 bg-[#f7fbff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8 gap-4">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-semibold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
                Featured Products
              </h2>
              <p className="text-slate-600 mt-2">Top picks customers keep coming back for.</p>
            </motion.div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-semibold px-4 py-2 rounded-xl hover:bg-emerald-50 transition"
            >
              View All
              <ArrowRight className="size-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <h2 className="text-4xl font-semibold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
              Loved by Families
            </h2>
            <p className="mt-3 text-slate-600">Real feedback from regular DairyFresh customers.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <motion.article
                key={item.name}
                {...fadeInUp}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition relative overflow-hidden group"
              >
                {/* Decorative giant open-quote */}
                <span className="absolute -top-4 -left-1 text-[9rem] leading-none font-serif text-emerald-100 select-none pointer-events-none group-hover:text-emerald-200 transition duration-300 z-0">
                  “
                </span>
                <div className="mb-4 flex gap-1 text-amber-400 relative z-10">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={`${item.name}-${idx}`} className="size-4 fill-current" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-amber-600">5.0</span>
                </div>
                <p className="text-slate-700 leading-relaxed relative z-10 text-[15px]">{item.quote}</p>
                <div className="mt-5 flex items-center gap-3 relative z-10">
                  <div className={`size-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-sm font-bold shadow`}>
                    {item.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.city}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SPONSORS / PARTNERS
      ══════════════════════════════════════ */}
      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400 mb-2">Trusted By Industry Leaders</p>
            <h2 className="text-3xl font-semibold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
              Our Partners & Sponsors
            </h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-10">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                {...fadeInUp}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center gap-2 w-40 rounded-2xl border border-emerald-100 bg-white px-4 py-5 shadow-sm hover:shadow-md hover:border-emerald-300 transition group cursor-default"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center overflow-hidden group-hover:bg-emerald-100 transition-colors">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-100 h-10 object-contain"
                  />
                </div>
                <p className="text-center text-xs font-semibold text-emerald-900 leading-tight">{sponsor.name}</p>
                <p className="text-center text-xs text-teal-600 font-medium">{sponsor.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════ */}
      <section className="pb-20 pt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="relative overflow-hidden rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-600 via-emerald-700 to-slate-900 px-8 py-14 text-white shadow-2xl"
          >
            {/* Decorative circles */}
            <div className="absolute right-8 top-8 hidden md:block h-32 w-32 rounded-full border border-white/15" />
            <div className="absolute right-20 bottom-8 hidden md:block h-16 w-16 rounded-full border border-white/10" />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block h-52 w-52 rounded-full border border-white/5" />
            <div className="absolute -left-12 -bottom-12 h-48 w-48 rounded-full bg-emerald-400/10 blur-2xl" />
            {/* Limited time badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-400/50 bg-yellow-400/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-yellow-300 mb-5">
              Limited Time Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold max-w-2xl leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              This Week Only: 20% Off<br />Organic Collection
            </h2>
            <p className="mt-4 max-w-xl text-emerald-100/90 leading-relaxed text-lg">
              Upgrade your daily nutrition with premium organic dairy at a special seasonal discount. Limited quantities — don’t miss out.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-emerald-700 transition hover:bg-yellow-50 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Shop the Offer
                <ArrowRight className="size-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-7 py-3.5 font-semibold text-white/90 transition hover:border-white/60 hover:text-white"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

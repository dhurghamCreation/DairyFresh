import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Mail, Leaf, ShieldCheck, Truck, Award } from "lucide-react";
import { motion } from "motion/react";
import { BrandLogo } from "./brand-logo";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-emerald-950 via-teal-900 to-emerald-900 text-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Newsletter Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 rounded-2xl bg-emerald-800/60 border border-emerald-700/50 px-6 py-6 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="flex-1">
            <h3 className="text-white font-bold text-xl">Weekly deals straight to your inbox</h3>
            <p className="text-emerald-300 text-sm mt-1">Fresh offers, new arrivals, seasonal recipes. No spam — ever.</p>
          </div>
          <form
            className="flex gap-2 w-full md:w-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 md:w-60 px-4 py-2.5 rounded-xl bg-white/10 border border-emerald-600 text-white placeholder:text-emerald-400/70 focus:outline-none focus:border-emerald-300 text-sm transition"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl text-sm transition shadow-md hover:-translate-y-0.5 whitespace-nowrap"
            >
              Subscribe →
            </button>
          </form>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <BrandLogo
                  showSubtitle={false}
                  textClassName="text-white bg-none text-2xl"
                />
              </motion.div>
            </div>
            <p className="text-sm">
              Your trusted source for premium dairy products since 1995. Quality, freshness, and taste guaranteed.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="hover:text-emerald-300 transition inline-block hover:translate-x-1">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-300 transition inline-block hover:translate-x-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-300 transition inline-block hover:translate-x-1">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-emerald-300 transition inline-block hover:translate-x-1">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-emerald-300 transition inline-block hover:translate-x-1">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-emerald-300 transition inline-block hover:translate-x-1">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="/dairyfresh-brochure.html" target="_blank" rel="noreferrer" className="hover:text-emerald-300 transition inline-block hover:translate-x-1">
                  Brochure
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=Milk" className="hover:text-emerald-300 transition inline-block hover:translate-x-1">
                  Milk
                </Link>
              </li>
              <li>
                <Link to="/products?category=Cheese" className="hover:text-emerald-300 transition inline-block hover:translate-x-1">
                  Cheese
                </Link>
              </li>
              <li>
                <Link to="/products?category=Yogurt" className="hover:text-emerald-300 transition inline-block hover:translate-x-1">
                  Yogurt
                </Link>
              </li>
              <li>
                <Link to="/products?category=Ice Cream" className="hover:text-emerald-300 transition inline-block hover:translate-x-1">
                  Ice Cream
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-emerald-100 hover:text-emerald-300 transition"
              >
                <Facebook className="size-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-emerald-100 hover:text-emerald-300 transition"
              >
                <Twitter className="size-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-emerald-100 hover:text-emerald-300 transition"
              >
                <Instagram className="size-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-emerald-100 hover:text-emerald-300 transition"
              >
                <Mail className="size-5" />
              </motion.a>
            </div>
            <p className="text-sm">Email: info@dairyfresh.com</p>
            <p className="text-sm">Phone: 1-800-DAIRY-01</p>
          </motion.div>
        </div>

        <div className="border-t border-emerald-800/70 mt-8 pt-8">
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-5 mb-6">
            {[
              { icon: Leaf, label: "Certified Organic" },
              { icon: ShieldCheck, label: "Quality Tested" },
              { icon: Truck, label: "Cold-Chain Delivery" },
              { icon: Award, label: "Award-Winning" },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-emerald-300/80 text-xs font-semibold">
                <badge.icon className="size-4 text-emerald-400" />
                {badge.label}
              </div>
            ))}
          </div>
          <div className="text-sm text-center text-emerald-400/70">
            <p>© 2026 DairyFresh. All rights reserved. &nbsp;·&nbsp; Crafted with ♥ for dairy lovers everywhere.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
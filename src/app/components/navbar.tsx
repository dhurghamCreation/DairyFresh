import { Link, useNavigate, useLocation } from "react-router";
import {
  ShoppingCart, Search, Menu, User, LogOut, X,
  Phone, MapPin, Home, Package, Info, MessageCircle,
} from "lucide-react";
import { useCart } from "../context/cart-context";
import { useAuth } from "../context/auth-context";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BrandLogo } from "./brand-logo";
import { LanguageSwitcher } from "./language-switcher";

const navLinks = [
  { path: "/", label: "Home", icon: Home, activeColor: "from-sky-500 to-cyan-500", hoverColor: "hover:text-sky-700 hover:bg-sky-50" },
  { path: "/products", label: "Shop", icon: Package, activeColor: "from-emerald-500 to-teal-500", hoverColor: "hover:text-emerald-700 hover:bg-emerald-50" },
  { path: "/about", label: "About", icon: Info, activeColor: "from-amber-500 to-orange-500", hoverColor: "hover:text-amber-700 hover:bg-amber-50" },
  { path: "/contact", label: "Contact", icon: MessageCircle, activeColor: "from-rose-500 to-fuchsia-500", hoverColor: "hover:text-rose-700 hover:bg-rose-50" },
];

const categoryLinks = [
  { label: "All Products", path: "/products", colorClass: "text-slate-700 hover:text-slate-900 hover:bg-slate-100" },
  { label: "Milk", path: "/products?category=Milk", colorClass: "text-sky-700 hover:text-sky-800 hover:bg-sky-100" },
  { label: "Cheese", path: "/products?category=Cheese", colorClass: "text-amber-700 hover:text-amber-800 hover:bg-amber-100" },
  { label: "Yogurt", path: "/products?category=Yogurt", colorClass: "text-violet-700 hover:text-violet-800 hover:bg-violet-100" },
  { label: "Ice Cream", path: "/products?category=Ice%20Cream", colorClass: "text-rose-700 hover:text-rose-800 hover:bg-rose-100" },
  { label: "Butter", path: "/products?category=Butter", colorClass: "text-yellow-700 hover:text-yellow-800 hover:bg-yellow-100" },
  { label: "Cream", path: "/products?category=Cream", colorClass: "text-cyan-700 hover:text-cyan-800 hover:bg-cyan-100" },
  { label: "International", path: "/products?category=International", colorClass: "text-indigo-700 hover:text-indigo-800 hover:bg-indigo-100" },
  { label: "Organic", path: "/products?organic=true", colorClass: "text-emerald-700 hover:text-emerald-800 hover:bg-emerald-100" },
];

export function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const announcements = [
    "Free delivery on orders over $30  ·  This week: 20% off the organic range",
    "New arrivals: Aged Gruyère & Burrata — limited stock today",
    "Every product certified organic · Zero preservatives, always",
    "Summer deal: Buy 2 ice cream tubs, get 1 free · While stocks last",
  ];
  const [msgIndex, setMsgIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setMsgIndex((i) => (i + 1) % announcements.length), 4000);
    return () => clearInterval(id);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <div className="sticky top-0 z-50">
      {/* ── Announcement Bar ── */}
      <div className="bg-gradient-to-r from-sky-700 via-emerald-600 to-amber-600 text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          <span className="hidden sm:flex items-center gap-1.5 font-medium opacity-90">
            <Phone className="size-3" /> +1 800-DAIRY-FRESH
          </span>
          <div className="flex-1 overflow-hidden h-5 relative">
            <AnimatePresence mode="wait">
              <motion.span
                key={msgIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center font-semibold tracking-wide text-center"
              >
                {announcements[msgIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="hidden sm:flex items-center gap-1.5 font-medium opacity-90">
            <MapPin className="size-3" /> 12 Farm Lane, Green Valley
          </span>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur-xl bg-white/96 border-b border-emerald-100/70 shadow-[0_2px_28px_rgba(16,185,129,0.10)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.65 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/40 to-teal-300/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition" />
                <div className="relative">
                  <BrandLogo showSubtitle={false} />
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`group relative flex items-center gap-1.5 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-200 ${
                      isActive
                        ? `bg-gradient-to-r ${link.activeColor} text-white shadow-md`
                        : `text-slate-600 ${link.hoverColor}`
                    }`}
                  >
                    <link.icon
                      className={`size-4 transition-colors ${isActive ? "text-white/90" : "text-slate-400 group-hover:text-current"}`}
                    />
                    {link.label}
                    {!isActive && (
                      <motion.span
                        className={`absolute bottom-0.5 left-3 right-3 h-0.5 bg-gradient-to-r ${link.activeColor} origin-left rounded-full`}
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.22 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <LanguageSwitcher />

              {/* Search button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsSearchOpen(true)}
                className="hidden md:flex items-center gap-2 px-3.5 py-2 bg-slate-100 hover:bg-emerald-50 text-slate-500 hover:text-emerald-700 rounded-xl text-sm font-medium transition border border-transparent hover:border-emerald-200"
              >
                <Search className="size-4" />
                <span className="hidden lg:inline">Search…</span>
                <kbd className="hidden xl:inline-flex text-[10px] bg-white border border-slate-200 rounded px-1.5 py-0.5 text-slate-400 font-mono leading-none">
                  ⌘K
                </kbd>
              </motion.button>

              {/* User / Login */}
              {user ? (
                <div className="hidden md:flex items-center gap-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-xl border border-emerald-200/70">
                    <div className="size-7 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-xs font-bold shadow">
                      {user.name[0].toUpperCase()}
                    </div>
                    <span className="text-sm font-semibold text-emerald-800">{user.name}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={logout}
                    title="Logout"
                    className="p-2 text-red-400 hover:text-white hover:bg-red-500 rounded-xl transition border border-red-100 hover:border-red-500"
                  >
                    <LogOut className="size-4" />
                  </motion.button>
                </div>
              ) : (
                <Link to="/login" className="hidden md:block">
                  <motion.button
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-xl shadow-md shadow-emerald-200 transition text-sm"
                  >
                    <User className="size-4" />
                    Sign In
                  </motion.button>
                </Link>
              )}

              {/* Cart */}
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold text-sm shadow-md shadow-slate-200 transition"
              >
                <ShoppingCart className="size-4" />
                <span className="hidden sm:inline">Cart</span>
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-teal-400 text-white text-xs rounded-full size-5 flex items-center justify-center font-bold shadow"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2.5 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition border border-slate-200 hover:border-emerald-200"
              >
                {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-slate-100 bg-white/98"
            >
              <div className="py-4 space-y-1 px-4">
                {/* Main nav links */}
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-3 py-3 px-4 rounded-xl transition font-semibold text-sm ${
                        isActive
                          ? `bg-gradient-to-r ${link.activeColor} text-white shadow-md`
                          : `text-slate-700 ${link.hoverColor}`
                      }`}
                    >
                      <link.icon className="size-4" />
                      {link.label}
                    </Link>
                  );
                })}
                {/* Category quick-nav for mobile */}
                <div className="pt-3 border-t border-emerald-100 mt-2">
                  <div className="font-bold text-emerald-700 mb-2 text-xs uppercase tracking-wider">Categories</div>
                  {categoryLinks.map((cat) => (
                    <Link
                      key={cat.path}
                      to={cat.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-2 py-2 px-4 rounded-full text-sm font-medium whitespace-nowrap transition select-none ${cat.colorClass}`}
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
                <div className="pt-3 border-t border-emerald-100 mt-3">
                  <LanguageSwitcher mobile />
                </div>
                {/* Login for mobile */}
                {!user && (
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 py-3 px-4 text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl font-semibold text-sm mt-2 shadow-md"
                  >
                    <User className="size-4" />
                    Sign In
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search Modal */}
        <AnimatePresence>
          {isSearchOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                onClick={() => setIsSearchOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="fixed top-28 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-white rounded-2xl shadow-2xl z-50 p-6 border border-emerald-100"
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-xl font-bold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
                    Search Products
                  </h3>
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="p-2 hover:bg-slate-100 rounded-xl transition text-slate-500"
                  >
                    <X className="size-5" />
                  </button>
                </div>
                <form onSubmit={handleSearch}>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-emerald-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search for milk, cheese, yogurt…"
                      className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:border-emerald-400 focus:outline-none text-lg transition"
                      autoFocus
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-3.5 rounded-xl transition font-semibold text-base shadow-md shadow-emerald-200"
                  >
                    Search
                  </button>
                </form>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ── Category Quick-Nav Strip ── */}
      <div className="hidden md:block bg-white/96 border-b border-emerald-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center overflow-x-auto scrollbar-none py-2 gap-0.5">
            {categoryLinks.map((cat) => (
              <Link
                key={cat.path}
                to={cat.path}
                className={`flex-none flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition select-none ${cat.colorClass}`}
              >
                {cat.label}
              </Link>
            ))}
            <div className="flex-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
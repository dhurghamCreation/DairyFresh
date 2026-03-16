import { useState } from "react";
import { Link } from "react-router";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { Product } from "../data/products";
import { useCart } from "../context/cart-context";
import { motion } from "motion/react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition group border border-slate-100 product-card-unique-cursor"
    >
      <Link to={`/products/${product.id}`}>
        <div className="relative overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center pb-4">
            <span className="text-white text-sm font-semibold bg-black/40 backdrop-blur-sm px-4 py-1.5 rounded-full">
              View Details
            </span>
          </div>
          {product.organic && (
            <motion.span
              initial={{ x: 100 }}
              animate={{ x: 0 }}
                className="absolute top-2 right-2 bg-emerald-700 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-sm"
            >
                Organic
            </motion.span>
          )}
          {!product.inStock && (
            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
              Out of Stock
            </span>
          )}
          {/* Wishlist button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setWishlisted((w) => !w);
            }}
            className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-md transition hover:scale-110 z-10"
          >
            <Heart
              className={`size-4 transition-colors ${
                wishlisted ? "fill-red-500 text-red-500" : "text-slate-400 hover:text-red-400"
              }`}
            />
          </button>
        </div>
      </Link>

      <div className="p-5">
        <Link to={`/products/${product.id}`}>
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-1">{product.category}</p>
          <h3 className="font-bold text-[15px] mb-2 hover:text-emerald-700 transition leading-snug min-h-14 text-slate-900">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`size-4 ${
                i < Math.floor(product.rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm ml-1">{product.rating}</span>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        <p className="text-sm text-gray-600 mb-4">{product.size}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
            ${product.price.toFixed(2)}
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2.5 rounded-xl hover:from-emerald-700 hover:to-teal-700 transition disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed shadow-md font-semibold text-sm"
          >
            <ShoppingCart className="size-4" />
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
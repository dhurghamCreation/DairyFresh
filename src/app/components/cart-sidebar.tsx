import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "../context/cart-context";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";

export function CartSidebar() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
  } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-white/20 rounded-full transition"
          >
            <X className="size-5" />
          </motion.button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <ShoppingBag className="size-16 mb-4" />
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              <AnimatePresence>
                {cartItems.map(item => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4 border-b pb-4 group"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="size-20 object-cover rounded-lg shadow-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium group-hover:text-emerald-700 transition">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.size}</p>
                      <p className="text-emerald-700 font-semibold mt-1">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 border rounded-lg hover:bg-emerald-50 hover:border-emerald-600 transition"
                        >
                          <Minus className="size-4" />
                        </motion.button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 border rounded-lg hover:bg-emerald-50 hover:border-emerald-600 transition"
                        >
                          <Plus className="size-4" />
                        </motion.button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto text-red-600 text-sm hover:underline font-medium"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t p-6 space-y-4 bg-gray-50">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total:</span>
              <span className="text-emerald-700">${cartTotal.toFixed(2)}</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl hover:from-emerald-700 hover:to-teal-700 transition font-semibold shadow-lg"
            >
              Proceed to Checkout
            </motion.button>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full border-2 border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition font-medium"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
}
import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { useCart } from "../context/cart-context";
import { useAuth } from "../context/auth-context";
import { CreditCard, Lock, CheckCircle, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";

type CheckoutStep = "details" | "payment" | "success";

function formatCardNumber(input: string) {
  const digits = input.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(.{4})/g, "$1 ").trim();
}

function formatExpiryDate(input: string) {
  const digits = input.replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

function validateExpiryDate(expiry: string) {
  if (!/^\d{2}\/\d{2}$/.test(expiry)) return false;

  const [monthString, yearString] = expiry.split("/");
  const month = Number(monthString);
  const year = Number(yearString) + 2000;

  if (month < 1 || month > 12) return false;

  const now = new Date();
  const expiryDate = new Date(year, month);
  return expiryDate > now;
}

function formatPhone(input: string) {
  const digits = input.replace(/\D/g, "").slice(0, 15);
  return digits;
}

export function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState<CheckoutStep>("details");
  const [loading, setLoading] = useState(false);
  const [paymentError, setPaymentError] = useState("");
  const [completedOrderAmount, setCompletedOrderAmount] = useState(0);
  const [transactionId, setTransactionId] = useState("");

  const estimatedDelivery = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 2);
    return date.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }, []);

  const [formData, setFormData] = useState({
    fullName: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      setFormData((prev) => ({ ...prev, [name]: formatCardNumber(value) }));
      return;
    }

    if (name === "expiryDate") {
      setFormData((prev) => ({ ...prev, [name]: formatExpiryDate(value) }));
      return;
    }

    if (name === "cvv") {
      setFormData((prev) => ({ ...prev, [name]: value.replace(/\D/g, "").slice(0, 4) }));
      return;
    }

    if (name === "phone") {
      setFormData((prev) => ({ ...prev, [name]: formatPhone(value) }));
      return;
    }

    if (name === "zipCode") {
      setFormData((prev) => ({ ...prev, [name]: value.replace(/[^a-zA-Z0-9- ]/g, "").slice(0, 10) }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentError("");
    setStep("payment");
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentError("");

    if (cartItems.length === 0) {
      setPaymentError("Your cart is empty. Add items before payment.");
      return;
    }

    const cardDigits = formData.cardNumber.replace(/\D/g, "");
    if (cardDigits.length !== 16) {
      setPaymentError("Please enter a valid 16-digit card number.");
      return;
    }

    if (!validateExpiryDate(formData.expiryDate)) {
      setPaymentError("Please enter a valid expiry date (MM/YY) in the future.");
      return;
    }

    if (!/^\d{3,4}$/.test(formData.cvv)) {
      setPaymentError("Please enter a valid 3 or 4 digit CVV.");
      return;
    }

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const total = cartTotal;
    setCompletedOrderAmount(total);
    setTransactionId(`DF-${Date.now().toString().slice(-8)}`);
    setStep("success");
    setLoading(false);
    clearCart();
  };

  if (cartItems.length === 0 && step !== "success") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <Link
            to="/products"
            className="text-emerald-700 hover:underline inline-flex items-center gap-2"
          >
            <ArrowLeft className="size-4" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {step === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-xl p-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle className="size-24 text-green-600 mx-auto mb-6" />
              </motion.div>
              <h2 className="text-3xl font-bold mb-4">Payment Successful!</h2>
              <p className="text-gray-600 mb-8">
                Thank you for your purchase. Your order has been confirmed and will be delivered soon.
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mb-8 space-y-2">
                <p className="text-sm text-gray-600">Order Total</p>
                <p className="text-4xl font-bold text-emerald-700">${completedOrderAmount.toFixed(2)}</p>
                <p className="text-sm text-gray-600">Transaction: {transactionId}</p>
                <p className="text-sm text-gray-600">Estimated delivery: {estimatedDelivery}</p>
              </div>
              <div className="flex gap-4 justify-center">
                <Link to="/products">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition"
                  >
                    Continue Shopping
                  </motion.button>
                </Link>
                <Link to="/">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition"
                  >
                    Back to Home
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="checkout"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={`size-10 rounded-full flex items-center justify-center font-semibold ${
                        step === "details"
                          ? "bg-emerald-600 text-white"
                          : "bg-green-600 text-white"
                      }`}
                    >
                      {step === "payment" ? "✓" : "1"}
                    </div>
                    <span className="font-medium">Shipping Details</span>
                  </div>
                  <div className="w-16 h-1 bg-gray-300 rounded"></div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`size-10 rounded-full flex items-center justify-center font-semibold ${
                        step === "payment"
                          ? "bg-emerald-600 text-white"
                          : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      2
                    </div>
                    <span className="font-medium">Payment</span>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl shadow-xl p-8">
                    {step === "details" ? (
                      <form onSubmit={handleDetailsSubmit}>
                        <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
                        <div className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium mb-2">
                                Full Name
                              </label>
                              <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-2">
                                Phone Number
                              </label>
                              <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                                required
                                pattern="[0-9]{8,15}"
                                title="Enter 8 to 15 digits"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Street Address
                            </label>
                            <input
                              type="text"
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                              required
                            />
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium mb-2">City</label>
                              <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-2">
                                ZIP Code
                              </label>
                              <input
                                type="text"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          className="w-full mt-8 bg-emerald-600 text-white py-4 rounded-xl font-semibold hover:bg-emerald-700 transition"
                        >
                          Continue to Payment
                        </motion.button>
                      </form>
                    ) : (
                      <form onSubmit={handlePaymentSubmit}>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                          <Lock className="size-6" />
                          Secure Payment
                        </h2>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Card Number
                            </label>
                            <div className="relative">
                              <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                              <input
                                type="text"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleInputChange}
                                placeholder="1234 5678 9012 3456"
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                                required
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Cardholder Name
                            </label>
                            <input
                              type="text"
                              name="cardName"
                              value={formData.cardName}
                              onChange={handleInputChange}
                              placeholder="JOHN DOE"
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                              required
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium mb-2">
                                Expiry Date
                              </label>
                              <input
                                type="text"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleInputChange}
                                placeholder="MM/YY"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-2">CVV</label>
                              <input
                                type="text"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleInputChange}
                                placeholder="123"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        {paymentError && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 rounded-lg bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-700"
                          >
                            {paymentError}
                          </motion.div>
                        )}

                        <div className="flex gap-4 mt-8">
                          <button
                            type="button"
                            onClick={() => {
                              setPaymentError("");
                              setStep("details");
                            }}
                            className="flex-1 py-4 border border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition"
                          >
                            Back
                          </button>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={loading}
                            className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition disabled:opacity-50 shadow-lg"
                          >
                            {loading ? "Processing..." : `Pay $${cartTotal.toFixed(2)}`}
                          </motion.button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>

                <div>
                  <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
                    <h3 className="font-bold text-lg mb-4">Order Summary</h3>
                    <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="size-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <p className="font-medium text-sm">{item.name}</p>
                            <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                            <p className="text-sm font-semibold text-emerald-700">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>${cartTotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Shipping</span>
                        <span className="text-green-600">Free</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg pt-2 border-t">
                        <span>Total</span>
                        <span className="text-emerald-700">${cartTotal.toFixed(2)}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => navigate("/products")}
                      className="w-full mt-4 text-sm text-emerald-700 hover:text-emerald-800"
                    >
                      Add more products
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

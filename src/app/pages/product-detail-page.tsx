import { useParams, Link } from "react-router";
import { products } from "../data/products";
import { useCart } from "../context/cart-context";
import { Star, ShoppingCart, ArrowLeft, Truck, Shield, RefreshCw } from "lucide-react";
import { ProductCard } from "../components/product-card";

export function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/products" className="text-emerald-700 hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/products"
            className="text-emerald-700 hover:underline flex items-center gap-2"
          >
            <ArrowLeft className="size-4" />
            Back to Products
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Product Details */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Info */}
          <div>
            <div className="mb-4">
              <span className="text-emerald-700 font-semibold">
                {product.category}
              </span>
              {product.organic && (
                <span className="ml-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  Organic
                </span>
              )}
            </div>

            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`size-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="font-semibold">{product.rating}</span>
              <span className="text-gray-500">({product.reviews} reviews)</span>
            </div>

            <p className="text-3xl font-bold text-emerald-700 mb-6">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Size</p>
                  <p className="font-semibold">{product.size}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Availability</p>
                  <p className={`font-semibold ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => addToCart(product)}
              disabled={!product.inStock}
              className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold hover:bg-emerald-700 transition flex items-center justify-center gap-2 mb-6 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              <ShoppingCart className="size-5" />
              Add to Cart
            </button>

            {/* Features */}
            <div className="border-t pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Truck className="size-5 text-emerald-700 mt-1" />
                <div>
                  <h4 className="font-semibold">Free Delivery</h4>
                  <p className="text-sm text-gray-600">
                    Free shipping on orders over $50
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="size-5 text-emerald-700 mt-1" />
                <div>
                  <h4 className="font-semibold">Quality Guarantee</h4>
                  <p className="text-sm text-gray-600">
                    100% satisfaction guaranteed or money back
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RefreshCw className="size-5 text-emerald-700 mt-1" />
                <div>
                  <h4 className="font-semibold">Fresh Daily</h4>
                  <p className="text-sm text-gray-600">
                    Products delivered fresh every morning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

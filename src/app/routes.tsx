import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/home-page";
import { ProductsPage } from "./pages/products-page";
import { ProductDetailPage } from "./pages/product-detail-page";
import { AboutPage } from "./pages/about-page";
import { ContactPage } from "./pages/contact-page";
import { LoginPage } from "./pages/login-page";
import { CheckoutPage } from "./pages/checkout-page";
import { RootLayout } from "./layouts/root-layout";
import PrivacyPolicyPage from "./pages/privacy-policy-page";
import RefundPolicyPage from "./pages/refund-policy-page";
import TermsOfServicePage from "./pages/terms-of-service-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "products", Component: ProductsPage },
      { path: "products/:id", Component: ProductDetailPage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
      { path: "checkout", Component: CheckoutPage },
      { path: "privacy-policy", Component: PrivacyPolicyPage },
      { path: "refund-policy", Component: RefundPolicyPage },
      { path: "terms-of-service", Component: TermsOfServicePage },
    ],
  },
  {
    path: "/login",
    Component: LoginPage,
  },
]);
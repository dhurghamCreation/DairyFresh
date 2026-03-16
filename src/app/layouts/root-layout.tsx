import { Outlet } from "react-router";
import { useEffect } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { CartSidebar } from "../components/cart-sidebar";
import { LiveChatWidget } from "../components/live-chat-widget";

export function RootLayout() {
  useEffect(() => {
    const existingScript = document.getElementById("tawkto-script");
    if (existingScript) {
      return;
    }

    const win = window as Window & {
      Tawk_API?: Record<string, unknown>;
      Tawk_LoadStart?: Date;
    };

    win.Tawk_API = win.Tawk_API || {};
    win.Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.id = "tawkto-script";
    script.async = true;
    script.src = "https://embed.tawk.to/64e4e7e094cf5d49dc6b7b7b/1h8k9v8qg";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartSidebar />
      <LiveChatWidget />
    </div>
  );
}
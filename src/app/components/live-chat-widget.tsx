import { useEffect, useMemo, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

type ChatMessage = {
  id: number;
  sender: "bot" | "user";
  text: string;
};

function buildBotReply(input: string): string {
  const msg = input.toLowerCase();

  if (msg.includes("delivery") || msg.includes("ship")) {
    return "Delivery is 2-3 business days with refrigerated shipping. Free delivery is available on qualifying orders.";
  }

  if (msg.includes("refund") || msg.includes("return")) {
    return "You can request a return within 7 days of delivery. We offer refund or replacement after inspection.";
  }

  if (msg.includes("milk") || msg.includes("cheese") || msg.includes("product")) {
    return "You can browse all products in the Shop tab, then filter by category like Milk, Cheese, Yogurt, Butter, and more.";
  }

  if (msg.includes("location") || msg.includes("address") || msg.includes("map")) {
    return "Our main location is 123 Dairy Lane, Fresh Valley, CA 90210. You can also use the map section on Contact to detect your location.";
  }

  if (msg.includes("hours") || msg.includes("open") || msg.includes("time")) {
    return "Support hours are Monday-Friday 8am-6pm PST, Saturday 10am-4pm PST, and Sunday closed.";
  }

  return "Thanks for your message. Ask about products, delivery, refund policy, location, or support hours, and I will help right away.";
}

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: "bot",
      text: "Welcome to DairyFresh support. How can I help you today?",
    },
  ]);

  const nextId = useMemo(() => (messages.length ? messages[messages.length - 1].id + 1 : 1), [messages]);

  useEffect(() => {
    const openChat = () => setIsOpen(true);
    window.addEventListener("dairyfresh-open-chat", openChat as EventListener);

    return () => {
      window.removeEventListener("dairyfresh-open-chat", openChat as EventListener);
    };
  }, []);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) {
      return;
    }

    const userMessage: ChatMessage = {
      id: nextId,
      sender: "user",
      text: trimmed,
    };

    const botMessage: ChatMessage = {
      id: nextId + 1,
      sender: "bot",
      text: buildBotReply(trimmed),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-[90] w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl border border-emerald-200 bg-white shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-3 text-white flex items-center justify-between">
            <div>
              <p className="font-bold text-sm">DairyFresh Chat</p>
              <p className="text-[11px] text-emerald-50/90">Online support assistant</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/15 transition"
              aria-label="Close chat"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="h-72 overflow-y-auto p-3 space-y-2 bg-emerald-50/30">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[86%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                  message.sender === "user"
                    ? "ml-auto bg-emerald-600 text-white"
                    : "mr-auto bg-white border border-emerald-100 text-slate-700"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-emerald-100 bg-white flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Type your message"
              className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            <button
              type="button"
              onClick={handleSend}
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white p-2.5 transition"
              aria-label="Send message"
            >
              <Send className="size-4" />
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-4 right-4 z-[90] inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-3 shadow-lg hover:from-emerald-700 hover:to-teal-700 transition"
        aria-label="Open chat widget"
      >
        <MessageCircle className="size-5" />
        <span className="text-sm font-semibold">Chat</span>
      </button>
    </>
  );
}

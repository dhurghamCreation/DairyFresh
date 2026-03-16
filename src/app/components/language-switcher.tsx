import { Globe } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type LanguageSwitcherProps = {
  mobile?: boolean;
};

type TranslateWindow = Window & {
  google?: {
    translate?: {
      TranslateElement?: any;
    };
  };
  googleTranslateElementInit?: () => void;
};

const languageOptions = [
  { code: "en", label: "English", country: "United States", icon: "US" },
  { code: "es", label: "Spanish", country: "Spain", icon: "ES" },
  { code: "fr", label: "French", country: "France", icon: "FR" },
  { code: "ar", label: "Arabic", country: "Saudi Arabia", icon: "SA" },
  { code: "it", label: "Italian", country: "Italy", icon: "IT" },
  { code: "ja", label: "Japanese", country: "Japan", icon: "JP" },
  { code: "pl", label: "Polish", country: "Poland", icon: "PL" },
  { code: "pt", label: "Portuguese", country: "Portugal", icon: "PT" },
];

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCurrentLanguageFromCookie(): string {
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("googtrans="));

  if (!cookie) {
    return "en";
  }

  const value = decodeURIComponent(cookie.split("=")[1] ?? "");
  const parts = value.split("/");
  const target = parts[2];

  return target || "en";
}

export function LanguageSwitcher({ mobile = false }: LanguageSwitcherProps) {
  const [language, setLanguage] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const includedLanguages = useMemo(
    () => languageOptions.map((item) => item.code).join(","),
    [],
  );

  const activeLanguage = languageOptions.find((option) => option.code === language) ?? languageOptions[0];

  useEffect(() => {
    setLanguage(getCurrentLanguageFromCookie());

    const w = window as TranslateWindow;

    if (!document.getElementById("google-translate-script")) {
      w.googleTranslateElementInit = () => {
        if (!w.google?.translate?.TranslateElement) {
          return;
        }

        new w.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages,
            autoDisplay: false,
            layout: w.google.translate.TranslateElement.InlineLayout?.SIMPLE,
          },
          "google_translate_element",
        );
      };

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [includedLanguages]);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setCookie("googtrans", `/en/${lang}`, 365);
    setIsOpen(false);
    window.location.reload();
  };

  return (
    <div className={mobile ? "w-full relative" : "hidden md:flex items-center relative"}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={mobile
          ? "w-full flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-emerald-800"
          : "inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-white px-3 py-2 text-slate-700 text-sm font-medium hover:bg-emerald-50 transition"}
        aria-label="Open language options"
      >
        <span className="inline-flex items-center gap-2">
          <Globe className="size-4 text-emerald-600" />
          <span className="text-xs font-bold rounded-md bg-emerald-100 text-emerald-800 px-1.5 py-0.5">{activeLanguage.icon}</span>
          <span>{activeLanguage.label}</span>
        </span>
        <span className="text-xs text-slate-500">{isOpen ? "Close" : "Change"}</span>
      </button>

      {isOpen && (
        <div className={mobile
          ? "mt-2 w-full rounded-xl border border-emerald-200 bg-white shadow-lg p-2 space-y-1"
          : "absolute top-12 right-0 w-72 rounded-xl border border-emerald-200 bg-white shadow-xl p-2 space-y-1"}
        >
          {languageOptions.map((option) => (
            <button
              key={option.code}
              type="button"
              onClick={() => handleLanguageChange(option.code)}
              className={`w-full text-left rounded-lg px-3 py-2.5 transition ${
                language === option.code ? "bg-emerald-100 text-emerald-900" : "hover:bg-slate-50 text-slate-700"
              }`}
            >
              <span className="inline-flex items-center justify-between w-full">
                <span className="inline-flex items-center gap-2">
                  <span className="text-xs font-bold rounded-md bg-slate-100 px-1.5 py-0.5">{option.icon}</span>
                  <span className="font-semibold text-sm">{option.label}</span>
                </span>
                <span className="text-xs text-slate-500">{option.country}</span>
              </span>
            </button>
          ))}
        </div>
      )}

      <div id="google_translate_element" className="hidden" />
    </div>
  );
}

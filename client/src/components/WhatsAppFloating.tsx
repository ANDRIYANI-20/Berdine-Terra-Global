import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone } from "./icons";

// Floating WhatsApp button that stays fixed in the bottom-right corner.
// Clicking opens a new tab directing the user to the company WhatsApp number.
// Translations are provided for accessible labels.

export default function WhatsAppFloating() {
  const { t } = useLanguage();

  const handleClick = () => {
    window.open("https://wa.me/6285393210860", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      aria-label={t("home.contact.whatsappUs")}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5d] text-white p-4 rounded-full shadow-lg transition-colors"
    >
      <Phone className="w-6 h-6" />
    </button>
  );
}

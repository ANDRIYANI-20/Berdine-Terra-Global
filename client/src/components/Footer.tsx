import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Footer Component
 * Design: Organic Minimalism with Earth Tones
 * - Forest green background with white text
 * - Multiple sections: company info, links, contact, social
 * - Responsive grid layout
 * - Dark mode support
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground dark:bg-slate-900 dark:text-slate-100">
      {/* SVG Divider */}
      <svg
        viewBox="0 0 1200 120"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
          fill="currentColor"
          opacity="0.1"
        />
      </svg>

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white dark:text-slate-100">
              Berdine Terra Global
            </h3>
            <p className="text-sm opacity-90 mb-4">
              {t("footer.companyDesc")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/berdineterraglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/berdineterraglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/berdineterraglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white dark:text-slate-100 uppercase tracking-wide">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="opacity-90 hover:opacity-100 transition-opacity">
                    {t("nav.home")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="opacity-90 hover:opacity-100 transition-opacity">
                    {t("nav.about")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a className="opacity-90 hover:opacity-100 transition-opacity">
                    {t("nav.products")}
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white dark:text-slate-100 uppercase tracking-wide">
              {t("footer.resources")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/documentation">
                  <a className="opacity-90 hover:opacity-100 transition-opacity">
                    {t("footer.documentation")}
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  {t("footer.specifications")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  {t("footer.faq")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white dark:text-slate-100 uppercase tracking-wide">
              {t("contact.contactInfo")}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="opacity-90">Jl.H. Marzuki, Mampang Prapatan., Jakarta, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12790</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href="tel:+62"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  +62 889-7574-2032
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:hello@berdineterraglobal.com"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  hello@berdineterraglobal.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 dark:border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>
              &copy; {currentYear} Berdine Terra Global. {t("footer.allRightsReserved")}
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-100 transition-opacity">
                {t("footer.privacyPolicy")}
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                {t("footer.termsOfService")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

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
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-3">
              Berdine Terra Global
            </h3>
            <p className="text-sm text-background/80 mb-5">
              {t("footer.companyDesc")}
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <span className="pill bg-background text-foreground">{t("footer.trust.docReady")}</span>
              <span className="pill bg-background text-foreground">{t("footer.trust.qc")}</span>
              <span className="pill bg-background text-foreground">{t("footer.trust.traceable")}</span>
              <span className="pill bg-background text-foreground">{t("footer.trust.global")}</span>
            </div>
            <div className="flex gap-4 mt-6">
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
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link href="/">
                  <a className="hover:text-background transition-colors">
                    {t("nav.home")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-background transition-colors">
                    {t("nav.about")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a className="hover:text-background transition-colors">
                    {t("nav.products")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-background transition-colors">
                    {t("nav.contact")}
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">
              {t("footer.resources")}
            </h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link href="/documentation">
                  <a className="hover:text-background transition-colors">
                    {t("footer.documentation")}
                  </a>
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  {t("footer.specifications")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  {t("footer.faq")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  {t("footer.shipping")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">
              {t("contact.contactInfo")}
            </h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Jl.H. Marzuki, Mampang Prapatan., Jakarta, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12790</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+62" className="hover:text-background transition-colors">
                  +62 889-7574-2032
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:Partner@berdineterra.co.id"
                  className="hover:text-background transition-colors"
                >
                  Partner@berdineterra.co.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/15 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <p>
              &copy; {currentYear} Berdine Terra Global. {t("footer.allRightsReserved")}
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-background transition-colors">
                {t("footer.privacyPolicy")}
              </a>
              <a href="#" className="hover:text-background transition-colors">
                {t("footer.termsOfService")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

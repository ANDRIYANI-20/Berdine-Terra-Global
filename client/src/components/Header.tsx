import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Header Component
 * Design: Organic Minimalism with Earth Tones
 * - Sticky top navigation with forest green primary color
 * - Responsive mobile menu with hamburger icon
 * - Theme switcher (light/dark)
 * - Language switcher (English/Indonesian)
 * - Clean, professional styling with generous spacing
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/products", label: t("nav.products") },
    { href: "/documentation", label: t("nav.documentation") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-green-800 bg-green-700 dark:bg-gray-900 backdrop-blur">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-white dark:bg-gray-800 focus:text-gray-900 dark:focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
      >
        {t("nav.skip")}
      </a>
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img
              src="/images/ka.png"
              alt="Berdine Terra Global Logo"
              className="h-9 w-9 sm:h-11 sm:w-11 align-middle"
              loading="eager"
              decoding="async"
            />
            <div className="flex flex-col">
              <span className="text-sm sm:text-lg font-semibold text-white leading-none tracking-wide" style={{ fontFamily: 'Zen Serif, serif' }}>
                BERDINE TERRA GLOBAL
              </span>
              <span className="text-xs text-white/80">
                {t("nav.tagline")}
              </span>
            </div>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link key={link.href} href={link.href}>
                <a
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-white bg-green-800 dark:bg-gray-800"
                      : "text-white/80 hover:text-white hover:bg-green-800/60 dark:hover:bg-gray-800/60"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </a>
              </Link>
            );
          })}
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-green-800/60 dark:hover:bg-gray-800/60 rounded-md transition-colors"
            aria-label="Toggle theme"
            title={theme === "light" ? "Dark mode" : "Light mode"}
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-white" />
            ) : (
              <Sun className="w-5 h-5 text-white" />
            )}
          </button>

          {/* Language Switcher */}
          <div className="relative group">
            <button
              className="p-2 hover:bg-green-800/60 dark:hover:bg-gray-800/60 rounded-md transition-colors flex items-center gap-1"
              aria-haspopup="listbox"
            >
              <Globe className="w-5 h-5 text-white" />
              <span className="text-sm font-medium text-white uppercase">
                {language}
              </span>
            </button>
            <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <button
                onClick={() => setLanguage("en")}
                className={`w-full text-left px-4 py-2 text-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                  language === "en" ? "bg-gray-100 dark:bg-gray-700 font-bold" : ""
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("id")}
                className={`w-full text-left px-4 py-2 text-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                  language === "id" ? "bg-gray-100 dark:bg-gray-700 font-bold" : ""
                }`}
              >
                Bahasa Indonesia
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-green-800/60 dark:hover:bg-gray-800/60 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="md:hidden border-t border-green-800 dark:border-gray-800 bg-green-700 dark:bg-gray-900"
        >
          <div className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className="px-3 py-2 text-sm font-medium text-white hover:bg-green-800/60 dark:hover:bg-gray-800/60 rounded-md transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

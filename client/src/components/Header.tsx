import { useState } from "react";
import { Link } from "wouter";
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

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/products", label: t("nav.products") },
    { href: "/documentation", label: t("nav.documentation") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm dark:bg-slate-950">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="flex items-center gap-2">
              <img src="/images/logo.png" alt="Berdine Terra Global Logo" className="h-8 w-8 sm:h-10 sm:w-10 align-middle" />
              <h1 className="text-sm sm:text-lg font-bold text-primary leading-tight">
                BERDINE TERRA GLOBAL
              </h1>
            </div>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors">
                {link.label}
              </a>
            </Link>
          ))}
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-secondary rounded-md transition-colors"
            aria-label="Toggle theme"
            title={theme === "light" ? "Dark mode" : "Light mode"}
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-foreground" />
            ) : (
              <Sun className="w-5 h-5 text-foreground" />
            )}
          </button>

          {/* Language Switcher */}
          <div className="relative group">
            <button className="p-2 hover:bg-secondary rounded-md transition-colors flex items-center gap-1">
              <Globe className="w-5 h-5 text-foreground" />
              <span className="text-sm font-medium text-foreground uppercase">
                {language}
              </span>
            </button>
            <div className="absolute right-0 mt-0 w-32 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <button
                onClick={() => setLanguage("en")}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-secondary transition-colors ${
                  language === "en" ? "bg-secondary font-bold" : ""
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("id")}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-secondary transition-colors ${
                  language === "id" ? "bg-secondary font-bold" : ""
                }`}
              >
                Bahasa Indonesia
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-secondary rounded-md transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background dark:bg-slate-950">
          <div className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <a onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-2">
                  {t("nav.getQuote")}
                </Button>
              </a>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

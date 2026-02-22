import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Globe, Award, FileText, CheckCircle } from "@/components/icons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Home Page
 * Design: Organic Minimalism with Earth Tones
 * - Hero section with background image and diagonal divider
 * - Featured products showcase
 * - Company highlights
 * - Call-to-action sections
 */
export default function Home() {
  const { t } = useLanguage();
  const [imageLoadErrors, setImageLoadErrors] = useState<{[key: number]: boolean}>({});

  const handleImageError = (productId: number) => {
    setImageLoadErrors(prev => ({ ...prev, [productId]: true }));
  };

  const products = [
    {
      id: 1,
      name: t("product.vanilla.gradeAPlus"),
      image: "/images/ka.jpeg",
      description: t("product.vanilla.gradeAPlusDesc"),
      href: "/products?category=vanilla",
    },
    {
      id: 2,
      name: t("product.vanilla.gradeA"),
      image: "/images/la.jpeg",
      description: t("product.vanilla.gradeADesc"),
      href: "/products?category=vanilla",
    },
    {
      id: 3,
      name: t("product.pepper.whole"),
      image: "/images/laaa.jpg",
      description: t("product.pepper.wholeDesc"),
      href: "/products?category=pepper",
    },
  ];

  const highlights = [
    {
      icon: Award,
      title: t("home.highlights.qualityControl"),
      description: t("home.highlights.qualityControlDesc"),
    },
    {
      icon: Globe,
      title: t("home.highlights.documentation"),
      description: t("home.highlights.documentationDesc"),
    },
    {
      icon: Leaf,
      title: t("home.highlights.suppliers"),
      description: t("home.highlights.suppliersDesc"),
    },
    {
      icon: ArrowRight,
      title: t("home.highlights.capacity"),
      description: t("home.highlights.capacityDesc"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-slate-950">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/CA.png')",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative container py-20 md:py-32 flex items-center min-h-[500px]">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {t("home.hero.title")}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl">
                {t("home.hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <a>
                    <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                      {t("home.hero.getQuote")}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </a>
                </Link>
                <a href="/images/Berdine Catalog.pdf" download>
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg">
                    {t("home.hero.downloadCatalog")}
                  </Button>
                </a>
              </div>
              
              {/* Quick Facts */}
              <div className="flex flex-wrap gap-3 mt-8">
                <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2.5 text-sm font-semibold text-white">
                  {t("home.quickFacts.pricing")}
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2.5 text-sm font-semibold text-white">
                  {t("home.quickFacts.incoterms")}
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2.5 text-sm font-semibold text-white">
                  {t("home.quickFacts.port")}
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2.5 text-sm font-semibold text-white">
                  {t("home.quickFacts.leadTime")}
                </div>
              </div>
            </div>
          </div>

          {/* Diagonal Divider */}
          <svg
            viewBox="0 0 1200 120"
            className="absolute bottom-0 w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0,30 Q300,80 600,30 T1200,30 L1200,120 L0,120 Z"
              fill="white"
              className="dark:fill-slate-950"
            />
          </svg>
        </section>

        {/* Highlights Section */}
        <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, idx) => {
                const Icon = highlight.icon;
                return (
                  <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-border dark:border-slate-700 hover:shadow-md transition-shadow">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary dark:bg-slate-700 rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground dark:text-white">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground dark:text-slate-400">
                      {highlight.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 md:py-24 bg-secondary/10 dark:bg-slate-800">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white">
                {t("home.products.title")}
              </h2>
              <p className="text-lg text-muted-foreground dark:text-slate-400 max-w-2xl mx-auto">
                {t("home.products.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <Link key={product.id} href={product.href}>
                  <a className="group">
                    <div className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                      <div className="relative h-64 overflow-hidden bg-muted dark:bg-slate-700">
                        {imageLoadErrors[product.id] ? (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                            <Leaf className="w-16 h-16 text-primary mb-2" />
                            <p className="text-sm text-muted-foreground dark:text-slate-400 text-center px-4">
                              {product.name}
                            </p>
                          </div>
                        ) : (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={() => handleImageError(product.id)}
                          />
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                          {t("home.products.learnMore")}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white">
                {t("home.documents.title")}
              </h2>
              <p className="text-lg text-muted-foreground dark:text-slate-400 max-w-2xl mx-auto">
                {t("home.documents.subtitle")}
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-border dark:border-slate-700 flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground dark:text-white mb-1">
                      {t("home.documents.commercial")}
                    </h3>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-border dark:border-slate-700 flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground dark:text-white mb-1">
                      {t("home.documents.coo")}
                    </h3>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-border dark:border-slate-700 flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground dark:text-white mb-1">
                      {t("home.documents.phyto")}
                    </h3>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-border dark:border-slate-700 flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground dark:text-white mb-1">
                      {t("home.documents.export")}
                    </h3>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-border dark:border-slate-700 flex items-start gap-4 md:col-span-2">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground dark:text-white mb-1">
                      {t("home.documents.coa")}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("home.cta.title")}
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              {t("home.cta.subtitle")}
            </p>
            <Link href="/contact">
              <a>
                <Button className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg">
                  {t("home.cta.getInTouch")}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

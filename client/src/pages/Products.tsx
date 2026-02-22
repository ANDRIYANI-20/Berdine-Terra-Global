import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, Info } from "@/components/icons";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Products Page - Complete Catalog with Specifications
 * Design: Organic Minimalism with Earth Tones
 * - Product categories with filtering
 * - Detailed product specifications
 * - Price list
 * - Download options
 */
export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { t } = useLanguage();

  const products = [
    {
      id: 1,
      category: "vanilla",
      name: t("product.vanilla.gradeAPlus"),
      image: "/images/ka.jpeg",
      variant: t("product.vanilla.varian"),
      specifications: {
        origin: t("product.vanilla.origin"),
        grade: t("product.vanilla.gradeAPlus.grade"),
        moisture: t("product.vanilla.gradeAPlus.moisture"),
        length: t("product.vanilla.gradeAPlus.length"),
        appearance: t("product.vanilla.gradeAPlus.appearance"),
        aroma: t("product.vanilla.gradeAPlus.aroma"),
        texture: t("product.vanilla.gradeAPlus.texture"),
        defect: t("product.vanilla.gradeAPlus.defect"),
        packaging: t("product.vanilla.gradeAPlus.packaging"),
      },
      pricePerKg: "$320-380",
      minOrder: "50 kg",
      availability: "Pre-Order",
      description: t("product.vanilla.gradeAPlusDesc"),
    },
    {
      id: 2,
      category: "vanilla",
      name: t("product.vanilla.gradeA"),
      image: "/images/la.jpeg",
      variant: t("product.vanilla.varian"),
      specifications: {
        origin: t("product.vanilla.origin"),
        grade: t("product.vanilla.gradeA.grade"),
        moisture: t("product.vanilla.gradeA.moisture"),
        length: t("product.vanilla.gradeA.length"),
        appearance: t("product.vanilla.gradeA.appearance"),
        aroma: t("product.vanilla.gradeA.aroma"),
        texture: t("product.vanilla.gradeA.texture"),
        defect: t("product.vanilla.gradeA.defect"),
        packaging: t("product.vanilla.gradeA.packaging"),
      },
      pricePerKg: "$250-300",
      minOrder: "50 kg",
      availability: "Pre-Order",
      description: t("product.vanilla.gradeADesc"),
    },
    {
      id: 5,
      category: "pepper",
      name: t("product.pepper.whole"),
      image: "/images/laaa.jpg",
      grade: t("product.pepper.grade"),
      specifications: {
        origin: t("product.pepper.origin"),
        type: t("product.pepper.type"),
        size: t("product.pepper.size"),
        moisture: t("product.pepper.moisture"),
        garbledLevel: t("product.pepper.garbledLevel"),
        appearance: t("product.pepper.appearance"),
        packaging: t("product.pepper.packaging"),
      },
      pricePerKg: "$8-12",
      minOrder: "100 kg",
      availability: "Pre-Order",
      description: t("product.pepper.wholeDesc"),
    },
  ];

  const categories = [
    { id: "all", label: t("products.filter.all") },
    { id: "vanilla", label: t("products.filter.vanilla") },
    { id: "pepper", label: t("products.filter.pepper") },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-slate-950">
      <Header />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/MA.png"
              alt={t("products.hero.imageAlt")}
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-primary/70"></div>
          </div>
          <div className="container section-tight relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t("products.hero.title")}
            </h1>
            <p className="text-lg opacity-90 max-w-2xl text-white">
              {t("products.hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="/images/Berdine Catalog.pdf" download>
                <Button className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                  <Download className="w-5 h-5 mr-2" />
                  {t("products.downloadPriceList")}
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-semibold">
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="section-tight bg-white dark:bg-slate-900 border-b border-border dark:border-slate-700">
          <div className="container">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  variant={selectedCategory === cat.id ? "default" : "outline"}
                  className={
                    selectedCategory === cat.id
                      ? "bg-primary text-white"
                      : "border-border dark:border-slate-700"
                  }
                >
                  {cat.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section bg-white dark:bg-slate-900">
          <div className="container">
            <div className="grid grid-cols-1 gap-8">
              {filteredProducts.map((product) => {
                const detailLabel =
                  product.category === "pepper" || product.category === "coffee"
                    ? t("products.grade")
                    : t("products.origin");

                const detailValue =
                  product.category === "pepper" || product.category === "coffee"
                    ? product.grade
                    : product.specifications.origin;

                const showDetail = product.category !== "vanilla";

                return (
                <div
                  key={product.id}
                  className="surface-card overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {/* Product Image */}
                    <div className="h-64 md:h-auto bg-muted dark:bg-slate-700 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-6 md:col-span-2">
                      <h3 className="text-2xl font-bold mb-2 text-foreground dark:text-white">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground dark:text-slate-400 mb-6">
                        {product.description}
                      </p>

                      {/* Key Details */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6 pb-6 border-b border-border dark:border-slate-700">
                        <div>
                          <p className="text-xs text-muted-foreground dark:text-slate-400 uppercase font-semibold mb-1">
                            {t("products.price")}
                          </p>
                          <p className="text-lg font-bold text-primary">
                            {product.pricePerKg}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground dark:text-slate-400 uppercase font-semibold mb-1">
                            {t("products.minOrder")}
                          </p>
                          <p className="text-lg font-bold text-foreground dark:text-white">
                            {product.minOrder}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground dark:text-slate-400 uppercase font-semibold mb-1">
                            {t("products.availability")}
                          </p>
                          <p className="text-lg font-bold text-foreground dark:text-white">
                            {product.availability}
                          </p>
                        </div>
                        {product.category === "vanilla" && product.variant ? (
                          <div>
                            <p className="text-xs text-muted-foreground dark:text-slate-400 uppercase font-semibold mb-1">
                              {t("products.varian")}
                            </p>
                            <p className="text-lg font-bold text-foreground dark:text-white">
                              {product.variant}
                            </p>
                          </div>
                        ) : showDetail ? (
                          <div>
                            <p className="text-xs text-muted-foreground dark:text-slate-400 uppercase font-semibold mb-1">
                              {detailLabel}
                            </p>
                            <p className="text-lg font-bold text-foreground dark:text-white">
                              {detailValue}
                            </p>
                          </div>
                        ) : null}
                      </div>

                      {/* Specifications */}
                      <div className="mb-6">
                        <h4 className="font-bold mb-4 flex items-center gap-2 text-foreground dark:text-white">
                          <Info className="w-5 h-5 text-primary" />
                          {t("products.specifications")}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 text-sm">
                          {Object.entries(product.specifications).map(
                            ([key, value]) => (
                              <div key={key} className="border-l-2 border-primary/30 pl-3">
                                <p className="text-muted-foreground dark:text-slate-400 capitalize text-xs mb-1">
                                  {key.replace(/([A-Z])/g, " $1").trim()}
                                </p>
                                <p className="font-semibold text-foreground dark:text-white">
                                  {value}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              );
              })}
            </div>
          </div>
        </section>

        {/* Documentation Link */}
        <section className="section surface-muted">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground dark:text-white">
              {t("products.priceList")}
            </h2>
            <p className="text-lg text-muted-foreground dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              {t("products.priceListSubtitle")}
            </p>
            <Link href="/documentation">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6">
                <Info className="w-5 h-5 mr-2" />
                {t("products.viewDocumentation")}
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

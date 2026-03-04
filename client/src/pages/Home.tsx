import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Globe, Award, FileText, CheckCircle, MapPin, Phone, Clock, TrendingUp, Users, Download, Info } from "@/components/icons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Home Page - Comprehensive Landing Page
 * Design: International Standard - Professional & Elegant
 * - Premium hero section
 * - About us section
 * - Featured products
 * - Core advantages
 * - Certifications
 * - Quick ordering process
 * - Contact CTA
 */
export default function Home() {
  const { t } = useLanguage();
  const [imageLoadErrors, setImageLoadErrors] = useState<{[key: number]: boolean}>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleImageError = (productId: number) => {
    setImageLoadErrors(prev => ({ ...prev, [productId]: true }));
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Featured Products
  const products = [
    {
      id: 1,
      name: t("product.vanilla.gradeAPlus"),
      image: "/images/ka.jpeg",
      minOrder: "50 kg",
      availability: "Pre-Order",
      description: t("product.vanilla.gradeAPlusDesc"),
      href: "/products?category=vanilla",
    },
    {
      id: 2,
      name: t("product.vanilla.gradeA"),
      image: "/images/la.jpeg",
      minOrder: "50 kg",
      availability: "Pre-Order",
      description: t("product.vanilla.gradeADesc"),
      href: "/products?category=vanilla",
    },
    {
      id: 3,
      name: t("product.pepper.whole"),
      image: "/images/laaa.jpg",
      minOrder: "100 kg",
      availability: "Pre-Order",
      description: t("product.pepper.wholeDesc"),
      href: "/products?category=pepper",
    },
  ];

  // Why Choose Us
  const advantages = [
    {
      icon: Award,
      title: t("home.advantages.qualityCertified"),
      description: t("home.advantages.qualityCertifiedDesc"),
    },
    {
      icon: TrendingUp,
      title: t("home.advantages.reliableDelivery"),
      description: t("home.advantages.reliableDeliveryDesc"),
    },
    {
      icon: CheckCircle,
      title: t("home.advantages.competitivePricing"),
      description: t("home.advantages.competitivePricingDesc"),
    },
    {
      icon: Globe,
      title: t("home.advantages.globalNetwork"),
      description: t("home.advantages.globalNetworkDesc"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-slate-950">
      <Header />

      <main id="main-content" className="flex-1">
        {/* ===== Premium Hero Section ===== */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/CA.png"
              alt="Berdine Terra Global"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/70 to-primary/60"></div>
          </div>

          <div className="relative container py-20 md:py-32 lg:py-40">
            <div className="max-w-3xl">
              <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full">
                <span className="text-sm font-semibold text-white">{t("home.hero.tagline")}</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                {t("home.hero.title")}
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
                {t("home.hero.subtitle")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact">
                  <a>
                    <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                      Get Quote Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </a>
                </Link>
                <Link href="/products">
                  <a>
                    <Button variant="outline" className="border-2 border-white text-white hover:bg-white/20 px-8 py-3 text-lg font-semibold backdrop-blur-sm">
                      Explore Products
                    </Button>
                  </a>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                  <p className="text-white/70 text-sm">{t("home.quickStats.moq")}</p>
                  <p className="text-white font-bold text-lg">50+ kg</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                  <p className="text-white/70 text-sm">{t("home.quickStats.leadTime")}</p>
                  <p className="text-white font-bold text-lg">2-3 weeks</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                  <p className="text-white/70 text-sm">{t("home.quickStats.shippingFrom")}</p>
                  <p className="text-white font-bold text-lg">Port Panjang, Lampung</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                  <p className="text-white/70 text-sm">{t("home.quickStats.incoterms")}</p>
                  <p className="text-white font-bold text-lg">Lampung</p>
                </div>
              </div>
            </div>
          </div>

          {/* Wave Divider */}
          <svg
            viewBox="0 0 1200 120"
            className="absolute bottom-0 w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 Q300,80 600,40 T1200,40 L1200,120 L0,120 Z"
              fill="white"
              className="dark:fill-slate-950"
            />
          </svg>
        </section>

        {/* ===== About Us Section ===== */}
        <section className="py-20 md:py-28 bg-white dark:bg-slate-900">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* on mobile show image first */}
              <div className="order-last lg:order-first">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground dark:text-white leading-tight flex items-center gap-4">
                  {t("home.about.title")}
                </h2>
                <p className="text-lg text-muted-foreground dark:text-slate-400 mb-4 leading-relaxed">
                  {t("home.about.text1")}
                </p>
                <p className="text-lg text-muted-foreground dark:text-slate-400 mb-8 leading-relaxed">
                  {t("home.about.text2")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/about">
                    <a>
                      <Button variant="default" className="bg-primary hover:bg-primary/90">
                        {t("home.about.learnMore")}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end order-first lg:order-last">
                <img
                  src="/images/ha.png"
                  alt="Berdine Terra Global Logo"
                  className="w-150 h-150 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== Featured Products Section ===== */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground dark:text-white">
                {t("home.products.title")}
              </h2>
              <p className="text-lg text-muted-foreground dark:text-slate-400 max-w-2xl mx-auto">
                {t("home.products.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <Link key={product.id} href={product.href}>
                  <a className="group h-full block">
                    <div className="bg-white dark:bg-slate-900/90 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col border border-slate-100 dark:border-slate-700 hover:-translate-y-2">
                      {/* Product Image Container */}
                      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
                        {/* Availability Badge */}
                        <div className="absolute top-4 right-4 z-10">
                          <span className="inline-block px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-bold rounded-full shadow-lg">
                            {product.availability}
                          </span>
                        </div>

                        {imageLoadErrors[product.id] ? (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600">
                            <Leaf className="w-20 h-20 text-primary/30 mb-3" />
                            <p className="text-sm text-muted-foreground dark:text-slate-500 text-center px-4 font-medium">{product.name}</p>
                          </div>
                        ) : (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
                            onError={() => handleImageError(product.id)}
                          />
                        )}
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Product Info */}
                      <div className="p-7 flex-grow flex flex-col">
                        {/* Title */}
                        <h3 className="text-lg md:text-xl font-bold text-foreground dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                          {product.name}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
                          {product.description}
                        </p>

                        {/* Details Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground dark:text-slate-500 uppercase font-bold tracking-wide">Min. Order</p>
                            <p className="text-base font-bold text-foreground dark:text-white">{product.minOrder}</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground dark:text-slate-500 uppercase font-bold tracking-wide">Status</p>
                            <p className="text-base font-bold text-green-600 dark:text-green-400">{product.availability}</p>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <button className="w-full py-2.5 px-4 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg group/btn">
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>

            <div className="text-center mt-16 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <a>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                    View All Products
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </Link>
              <a href="/Berdine-Terra-Global-Catalog.pdf" download>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 px-10 py-3 text-base font-semibold">
                  Download Catalog
                  <Download className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* ===== Why Choose Us Section ===== */}
        <section className="py-20 md:py-28 bg-white dark:bg-slate-900">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground dark:text-white">
                {t("home.whyChoose.title")}
              </h2>
              <p className="text-xl text-muted-foreground dark:text-slate-400 max-w-2xl mx-auto">
                {t("home.whyChoose.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((adv, idx) => {
                const Icon = adv.icon;
                return (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-8 rounded-xl border border-border dark:border-slate-700 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-foreground dark:text-white">
                      {adv.title}
                    </h3>
                    <p className="text-muted-foreground dark:text-slate-400 leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== Certifications Section ===== */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground dark:text-white">
                {t("home.certifications.title")}
              </h2>
              <p className="text-xl text-muted-foreground dark:text-slate-400">
                {t("home.certifications.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: t("home.certifications.organic.title"),
                  desc: t("home.certifications.organic.desc"),
                },
                {
                  title: t("home.certifications.fairTrade.title"),
                  desc: t("home.certifications.fairTrade.desc"),
                },
                {
                  title: t("home.certifications.iso.title"),
                  desc: t("home.certifications.iso.desc"),
                },
              ].map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 p-8 rounded-xl border-2 border-border dark:border-slate-700 hover:border-primary dark:hover:border-primary hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground dark:text-slate-400 text-sm">
                    {cert.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Process Section ===== */}
        <section className="py-20 md:py-28 bg-white dark:bg-slate-900">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground dark:text-white">
                {t("home.process.title")}
              </h2>
              <p className="text-xl text-muted-foreground dark:text-slate-400">
                {t("home.process.subtitle")}
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { num: "1", title: t("home.process.step1.title"), desc: t("home.process.step1.desc") },
                  { num: "2", title: t("home.process.step2.title"), desc: t("home.process.step2.desc") },
                  { num: "3", title: t("home.process.step3.title"), desc: t("home.process.step3.desc") },
                  { num: "4", title: t("home.process.step4.title"), desc: t("home.process.step4.desc") },
                ].map((step, idx) => (
                  <div key={idx} className="relative">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 p-8 rounded-xl border-2 border-primary/20 dark:border-primary/30 text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full font-bold mb-4 mx-auto text-lg">
                        {step.num}
                      </div>
                      <h3 className="font-bold text-foreground dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground dark:text-slate-400">
                        {step.desc}
                      </p>
                    </div>
                    {idx < 3 && (
                      <div className="hidden md:block absolute top-1/3 -right-3 w-6 h-1 bg-primary/20"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== Documentation Section ===== */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground dark:text-white">
                {t("home.documentation.title")}
              </h2>
              <p className="text-xl text-muted-foreground dark:text-slate-400">
                {t("home.documentation.subtitle")}
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: FileText, name: t("home.documentation.doc1") },
                { icon: FileText, name: t("home.documentation.doc2") },
                { icon: FileText, name: t("home.documentation.doc3") },
                { icon: FileText, name: t("home.documentation.doc4") },
                { icon: FileText, name: t("home.documentation.doc5") },
                { icon: Award, name: t("home.documentation.doc6") },
              ].map((doc, idx) => {
                const Icon = doc.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-border dark:border-slate-700 hover:shadow-lg transition-all duration-300 flex items-center gap-4"
                  >
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-semibold text-foreground dark:text-white text-sm sm:text-base">
                      {doc.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        

        {/* ===== FAQ Preview Section ===== */}
        <section className="py-20 md:py-28 bg-white dark:bg-slate-900">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground dark:text-white">
                {t("home.faq.title")}
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: t("home.faq.moq.question"),
                  a: t("home.faq.moq.answer"),
                },
                {
                  q: t("home.faq.payment.question"),
                  a: t("home.faq.payment.answer"),
                },
                {
                  q: t("home.faq.leadTime.question"),
                  a: t("home.faq.leadTime.answer"),
                },
                {
                  q: t("home.faq.samples.question"),
                  a: t("home.faq.samples.answer"),
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-lg border border-border dark:border-slate-700 hover:shadow-md transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors text-left"
                  >
                    <h3 className="font-bold text-foreground dark:text-white text-lg">
                      {faq.q}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ml-4 ${
                        expandedFaq === idx ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </button>
                  {expandedFaq === idx && (
                    <div className="px-6 pb-6 border-t border-border dark:border-slate-700 pt-4">
                      <p className="text-muted-foreground dark:text-slate-400 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/documentation">
                <a>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                    View All Documentation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* ===== Contact CTA Section ===== */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-primary via-primary to-primary/80 dark:from-primary/80 dark:via-primary/70 dark:to-primary/60">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                {t("home.cta.title")}
              </h2>
              <p className="text-lg text-white/90 mb-10 leading-relaxed">
                {t("home.cta.subtitle")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="/contact">
                  <a>
                    <Button className="bg-white text-primary hover:bg-white/90 px-10 py-3 text-lg font-semibold shadow-lg hover:shadow-xl">
                      {t("home.contact.getInTouch")}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </a>
                </Link>
                <a
                  href="https://wa.me/6285393210860"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/20 px-10 py-3 text-lg font-semibold backdrop-blur-sm"
                  >
                    {t("home.contact.whatsappUs")}
                  </Button>
                </a>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 flex items-center gap-2 justify-center">
                  <Phone className="w-6 h-6 text-white" />
                  <p className="text-white text-sm">{t("home.contact.phone")}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 flex items-center gap-2 justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                  <p className="text-white text-sm">{t("home.contact.location")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </div>
  );
}

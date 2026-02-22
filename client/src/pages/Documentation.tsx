import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "@/components/icons";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Documentation Page
 * Design: Organic Minimalism with Earth Tones
 * - Product guides and documentation
 * - FAQ section
 * - Ordering information
 * - Shipping and logistics
 */
export default function Documentation() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [expandedGuide, setExpandedGuide] = useState<number | null>(null);
  const { t } = useLanguage();

  const guides = [
    {
      title: t("documentation.guide1.title"),
      description: t("documentation.guide1.description"),
      topics: [
        t("documentation.guide1.topic1"),
        t("documentation.guide1.topic2"),
        t("documentation.guide1.topic3"),
        t("documentation.guide1.topic4"),
        t("documentation.guide1.topic5"),
      ],
      details: [
        t("documentation.guide1.detail1"),
        t("documentation.guide1.detail2"),
        t("documentation.guide1.detail3"),
        t("documentation.guide1.detail4"),
        t("documentation.guide1.detail5"),
      ],
    },
    {
      title: t("documentation.guide2.title"),
      description: t("documentation.guide2.description"),
      topics: [
        t("documentation.guide2.topic1"),
        t("documentation.guide2.topic2"),
        t("documentation.guide2.topic3"),
        t("documentation.guide2.topic4"),
        t("documentation.guide2.topic5"),
      ],
      details: [
        t("documentation.guide2.detail1"),
        t("documentation.guide2.detail2"),
        t("documentation.guide2.detail3"),
        t("documentation.guide2.detail4"),
        t("documentation.guide2.detail5"),
      ],
    },
    {
      title: t("documentation.guide4.title"),
      description: t("documentation.guide4.description"),
      topics: [
        t("documentation.guide4.topic1"),
        t("documentation.guide4.topic2"),
        t("documentation.guide4.topic3"),
        t("documentation.guide4.topic4"),
        t("documentation.guide4.topic5"),
      ],
      details: [
        t("documentation.guide4.detail1"),
        t("documentation.guide4.detail2"),
        t("documentation.guide4.detail3"),
        t("documentation.guide4.detail4"),
        t("documentation.guide4.detail5"),
      ],
    },
  ];

  const faqs = [
    {
      question: t("documentation.faq1.question"),
      answer: t("documentation.faq1.answer"),
    },
    {
      question: t("documentation.faq2.question"),
      answer: t("documentation.faq2.answer"),
    },
    {
      question: t("documentation.faq3.question"),
      answer: t("documentation.faq3.answer"),
    },
    {
      question: t("documentation.faq4.question"),
      answer: t("documentation.faq4.answer"),
    },
    {
      question: t("documentation.faq5.question"),
      answer: t("documentation.faq5.answer"),
    },
    {
      question: t("documentation.faq6.question"),
      answer: t("documentation.faq6.answer"),
    },
    {
      question: t("documentation.faq7.question"),
      answer: t("documentation.faq7.answer"),
    },
    {
      question: t("documentation.faq8.question"),
      answer: t("documentation.faq8.answer"),
    },
  ];

  const orderingSteps = [
    {
      step: 1,
      title: t("documentation.step1"),
      description: t("documentation.step1Desc"),
    },
    {
      step: 2,
      title: t("documentation.step2"),
      description: t("documentation.step2Desc"),
    },
    {
      step: 3,
      title: t("documentation.step3"),
      description: t("documentation.step3Desc"),
    },
    {
      step: 4,
      title: t("documentation.step4"),
      description: t("documentation.step4Desc"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-slate-950">
      <Header />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/BA.png"
              alt={t("documentation.hero.imageAlt")}
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-primary/70"></div>
          </div>
          <div className="container section-tight relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t("documentation.hero.title")}
            </h1>
            <p className="text-lg opacity-90 max-w-2xl text-white">
              {t("documentation.hero.subtitle")}
            </p>
          </div>
        </section>

        {/* Payment Terms Section */}
        <section className="section bg-white dark:bg-slate-900">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white">
                {t("documentation.paymentTerms")}
              </h2>
              <p className="text-muted-foreground dark:text-slate-400 max-w-2xl mx-auto">
                {t("documentation.paymentTermsSubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                t("documentation.payment.tt3070"),
                t("documentation.payment.tt5050"),
                t("documentation.payment.ttFull"),
                t("documentation.payment.lc"),
              ].map((payment, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800 p-6 rounded-lg border-2 border-border dark:border-slate-700 hover:border-primary dark:hover:border-primary hover:shadow-lg transition-all text-center"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{idx + 1}</span>
                  </div>
                  <p className="text-sm font-semibold text-foreground dark:text-white leading-relaxed">
                    {payment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Samples Section */}
        <section className="section surface-muted">
          <div className="container max-w-4xl">
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-lg shadow-sm border border-border dark:border-slate-700">
              <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white">
                  {t("documentation.samples")}
                </h2>
                <p className="text-sm text-muted-foreground dark:text-slate-400 mb-6">
                  {t("documentation.samplesSubtitle")}
                </p>
              </div>
              <p className="text-muted-foreground dark:text-slate-400 leading-relaxed text-center">
                {t("documentation.samplesDesc")}
              </p>
            </div>
          </div>
        </section>

        {/* Guides Section */}
        <section className="section bg-white dark:bg-slate-900">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground dark:text-white">
              {t("documentation.guides")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {guides.map((guide, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm border border-border dark:border-slate-700 hover:shadow-md transition-shadow flex flex-col"
                >
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    {guide.title}
                  </h3>
                  <p className="text-muted-foreground dark:text-slate-400 mb-6">
                    {guide.description}
                  </p>
                  
                  {expandedGuide !== idx ? (
                    <>
                      <div className="space-y-2 mb-6 flex-grow">
                        <p className="text-sm font-semibold text-foreground dark:text-white mb-3">
                          {t("documentation.topicsCovered")}
                        </p>
                        <ul className="space-y-2">
                          {guide.topics.map((topic, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm"
                            >
                              <span className="text-primary font-bold">•</span>
                              <span className="text-muted-foreground dark:text-slate-400">
                                {topic}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button
                        onClick={() => setExpandedGuide(idx)}
                        className="w-full bg-primary hover:bg-primary/90"
                      >
                        {t("documentation.openGuide")}
                      </Button>
                    </>
                  ) : (
                    <>
                      <div className="space-y-4 mb-6 flex-grow">
                        <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary p-4 rounded">
                          <p className="text-sm font-semibold text-primary mb-2">
                            📋 {t("documentation.topicsCovered")}
                          </p>
                        </div>
                        {guide.details.map((detail, i) => (
                          <div
                            key={i}
                            className="bg-secondary/20 dark:bg-slate-700 p-4 rounded-lg"
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 bg-primary text-white rounded-full text-xs font-bold">
                                {i + 1}
                              </div>
                              <p className="text-sm text-foreground dark:text-white leading-relaxed">
                                {detail}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button
                        onClick={() => setExpandedGuide(null)}
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary/10"
                      >
                        {t("documentation.closeGuide")}
                      </Button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section surface-muted">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground dark:text-white">
              {t("documentation.faq")}
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-border dark:border-slate-700 overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === idx ? null : idx)
                    }
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/5 dark:hover:bg-slate-800 transition-colors"
                  >
                    <h3 className="font-bold text-foreground dark:text-white text-left">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${
                        expandedFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedFaq === idx && (
                    <div className="px-6 py-4 border-t border-border dark:border-slate-700 bg-secondary/5 dark:bg-slate-800">
                      <p className="text-muted-foreground dark:text-slate-400">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-primary dark:bg-primary/90">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {t("documentation.cta.title")}
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              {t("documentation.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                  {t("documentation.cta.requestQuote")}
                </Button>
              </Link>
              <a
                href="mailto:Partner@berdineterraglobal.com"
                className="inline-flex"
              >
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold"
                >
                  {t("documentation.cta.contactTeam")}
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Ordering Process */}
        <section className="section bg-white dark:bg-slate-900">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground dark:text-white">
              {t("documentation.orderingProcess")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {orderingSteps.map((item) => (
                <div key={item.step} className="relative">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-border dark:border-slate-700 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full font-bold mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-bold mb-2 text-foreground dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                  {item.step < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border dark:bg-slate-700" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="section surface-muted">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground dark:text-white">
              {t("documentation.needHelp")}
            </h2>
            <p className="text-lg text-muted-foreground dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              {t("documentation.needHelpText")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/6288975742032"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary dark:text-primary rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors font-semibold"
              >
                {t("documentation.callUs")}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

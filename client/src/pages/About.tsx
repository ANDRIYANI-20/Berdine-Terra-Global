import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "@/components/icons";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * About Page - Company Profile
 * Design: Organic Minimalism with Earth Tones
 * - Company mission and vision
 * - History and background
 * - Core values
 * - Team highlights
 */
export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      title: t("about.qualityExcellence"),
      description: t("about.qualityExcellenceDesc"),
    },
    {
      title: t("about.sustainability"),
      description: t("about.sustainabilityDesc"),
    },
    {
      title: t("about.reliability"),
      description: t("about.reliabilityDesc"),
    },
    {
      title: t("about.innovation"),
      description: t("about.innovationDesc"),
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
              src="/images/be.jpeg"
              alt={t("about.hero.imageAlt")}
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-primary/70"></div>
          </div>
          <div className="container section-tight relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t("about.hero.title")}
            </h1>
            <p className="text-lg opacity-90 max-w-2xl text-white">
              {t("about.hero.subtitle")}
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="section bg-white dark:bg-slate-900">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white">
                {t("about.whoAreWe")}
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="bg-secondary/10 dark:bg-slate-800 p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-base text-foreground dark:text-white leading-relaxed">
                    {t("about.whoAreWeText1")}
                  </p>
                </div>
                <div className="bg-secondary/10 dark:bg-slate-800 p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-base text-foreground dark:text-white leading-relaxed">
                    {t("about.whoAreWeText2")}
                  </p>
                </div>
                <div className="bg-secondary/10 dark:bg-slate-800 p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-base text-foreground dark:text-white leading-relaxed">
                    {t("about.whoAreWeText3")}
                  </p>
                </div>
              </div>
              <div className="bg-secondary/20 dark:bg-slate-800 rounded-lg p-8 border border-border dark:border-slate-700 flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold mb-6 text-primary text-center">
                  {t("about.byTheNumbers")}
                </h3>
                <div className="flex justify-center w-full">
                  <img
                    src="/images/ba.jpeg"
                    alt={t("about.hero.imageAlt")}
                    className="w-full max-w-sm rounded-lg object-cover shadow-lg"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section surface-muted">
          <div className="container max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white">
                Mission & Vision
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Vision Card */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg border-t-4 border-primary">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    {t("about.vision")}
                  </h3>
                </div>
                <p className="text-base text-foreground dark:text-white leading-relaxed">
                  {t("about.visionText")}
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg border-t-4 border-primary">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    {t("about.mission")}
                  </h3>
                </div>
                <ol className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <span className="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full font-bold text-sm flex-shrink-0">1</span>
                    <span className="text-base text-foreground dark:text-white leading-relaxed pt-1">{t("about.missionText1")}</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full font-bold text-sm flex-shrink-0">2</span>
                    <span className="text-base text-foreground dark:text-white leading-relaxed pt-1">{t("about.missionText2")}</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full font-bold text-sm flex-shrink-0">3</span>
                    <span className="text-base text-foreground dark:text-white leading-relaxed pt-1">{t("about.missionText3")}</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full font-bold text-sm flex-shrink-0">4</span>
                    <span className="text-base text-foreground dark:text-white leading-relaxed pt-1">{t("about.missionText4")}</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full font-bold text-sm flex-shrink-0">5</span>
                    <span className="text-base text-foreground dark:text-white leading-relaxed pt-1">{t("about.missionText5")}</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section bg-white dark:bg-slate-900">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground dark:text-white">
              {t("about.coreValues")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground dark:text-white">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground dark:text-slate-400">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="section surface-muted">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground dark:text-white">
              {t("about.certifications")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-sm border border-border dark:border-slate-700 text-center">
                <div className="text-4xl font-bold text-primary mb-2">✓</div>
                <h3 className="text-xl font-bold mb-2 text-foreground dark:text-white">
                  {t("about.organicCertified")}
                </h3>
                <p className="text-muted-foreground dark:text-slate-400">
                  {t("about.organicCertifiedDesc")}
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-sm border border-border dark:border-slate-700 text-center">
                <div className="text-4xl font-bold text-primary mb-2">✓</div>
                <h3 className="text-xl font-bold mb-2 text-foreground dark:text-white">
                  {t("about.fairTrade")}
                </h3>
                <p className="text-muted-foreground dark:text-slate-400">
                  {t("about.fairTradeDesc")}
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-sm border border-border dark:border-slate-700 text-center">
                <div className="text-4xl font-bold text-primary mb-2">✓</div>
                <h3 className="text-xl font-bold mb-2 text-foreground dark:text-white">
                  {t("about.isoCompliant")}
                </h3>
                <p className="text-muted-foreground dark:text-slate-400">
                  {t("about.isoCompliantDesc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Control Workflow */}
        <section className="section surface-muted">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white">
                {t("about.qcWorkflow.title")}
              </h2>
              <p className="text-base text-muted-foreground dark:text-slate-400 max-w-3xl mx-auto">
                {t("about.qcWorkflow.subtitle")}
              </p>
            </div>
            {/* Desktop: Horizontal Stepper */}
            <div className="hidden lg:block">
              <div className="flex items-start justify-between gap-4 max-w-6xl mx-auto">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div key={step} className="flex-1 flex flex-col items-center">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-border dark:border-slate-700 w-full min-h-[280px] flex flex-col">
                      <div className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full font-bold text-xl mb-4 mx-auto">
                        {step}
                      </div>
                      <h3 className="text-sm font-bold mb-3 text-foreground dark:text-white text-center">
                        {t(`about.qcWorkflow.step${step}`)}
                      </h3>
                      <p className="text-xs text-muted-foreground dark:text-slate-400 text-center flex-1">
                        {t(`about.qcWorkflow.step${step}Desc`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Mobile/Tablet: Vertical Stepper */}
            <div className="lg:hidden space-y-6">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="relative">
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-border dark:border-slate-700">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full font-bold text-lg flex-shrink-0">
                        {step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold mb-2 text-foreground dark:text-white">
                          {t(`about.qcWorkflow.step${step}`)}
                        </h3>
                        <p className="text-sm text-muted-foreground dark:text-slate-400">
                          {t(`about.qcWorkflow.step${step}Desc`)}
                        </p>
                      </div>
                    </div>
                  </div>
                  {step < 5 && (
                    <div className="flex justify-center my-3">
                      <div className="w-0.5 h-6 bg-primary"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="section bg-white dark:bg-slate-900">
          <div className="container max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white">
                {t("about.capabilities.title")}
              </h2>
              <p className="text-base text-muted-foreground dark:text-slate-400 max-w-3xl mx-auto">
                {t("about.capabilities.subtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { key: "port", icon: "📍" },
                { key: "leadTime", icon: "⏱️" },
                { key: "coa", icon: "📄" },
                { key: "payment", icon: "💳" },
                { key: "moq", icon: "📦" },
              ].map((item) => (
                <div
                  key={item.key}
                  className="bg-secondary/10 dark:bg-slate-800 p-6 rounded-lg border border-border dark:border-slate-700 text-center hover:shadow-lg hover:border-primary/50 transition-all group cursor-help"
                  title={t(`about.capabilities.${item.key}Desc`)}
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <p className="text-sm font-semibold text-foreground dark:text-white leading-tight mb-2">
                    {t(`about.capabilities.${item.key}`)}
                  </p>
                  <p className="text-xs text-muted-foreground dark:text-slate-400 leading-snug opacity-0 group-hover:opacity-100 transition-opacity">
                    {t(`about.capabilities.${item.key}Desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

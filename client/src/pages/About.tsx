import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24 dark:bg-slate-900 relative overflow-hidden" style={{ backgroundImage: 'url(/images/be.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
          <div className="absolute inset-0 bg-primary/70"></div>
          <div className="container relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("about.hero.title")}
            </h1>
            <p className="text-lg opacity-90 max-w-2xl">
              {t("about.hero.subtitle")}
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground dark:text-white">
                  {t("about.whoAreWe")}
                </h2>
                <p className="text-lg text-muted-foreground dark:text-slate-400 mb-4">
                  {t("about.whoAreWeText1")}
                </p>
                <p className="text-lg text-muted-foreground dark:text-slate-400 mb-4">
                  {t("about.whoAreWeText2")}
                </p>
                <p className="text-lg text-muted-foreground dark:text-slate-400">
                  {t("about.whoAreWeText3")}
                </p>
              </div>
              <div className="bg-secondary/20 dark:bg-slate-800 rounded-lg p-8 border border-border dark:border-slate-700">
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  {t("about.byTheNumbers")}
                </h3>
                <div className="flex justify-center">
                  <img src="/images/kp.jpeg" alt="Berdine Terra Global Logo" className="w-full h-auto max-h-64 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-secondary/10 dark:bg-slate-800">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-sm border border-border dark:border-slate-700">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {t("about.mission")}
                </h3>
                <p className="text-lg text-muted-foreground dark:text-slate-400">
                  {t("about.missionText")}
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-sm border border-border dark:border-slate-700">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {t("about.vision")}
                </h3>
                <p className="text-lg text-muted-foreground dark:text-slate-400">
                  {t("about.visionText")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
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
        <section className="py-16 md:py-24 bg-secondary/10 dark:bg-slate-800">
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
      </main>

      <Footer />
    </div>
  );
}

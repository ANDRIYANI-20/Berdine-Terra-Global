import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, WhatsApp } from "@/components/icons";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Contact Page
 * Design: Organic Minimalism with Earth Tones
 * - Contact form
 * - Contact information
 * - Business hours
 * - Location map
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = "New Contact Inquiry from Website";
    const body =
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company || "Not provided"}\n` +
      `Phone: ${formData.phone || "Not provided"}\n` +
      `Product of Interest: ${formData.product || "Not specified"}\n\n` +
      `Message:\n${formData.message}`;

    const mailtoUrl = `mailto:berdineterraglobal@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoUrl, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        product: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/6285393210860", "_blank");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.address"),
      details: ["Jl. H. Marzuki, Mampang Prapatan, South Jakarta, Jakarta - Indonesia"],
    },
    {
      icon: Mail,
      title: t("contact.email"),
      details: ["Partner@berdineterraglobal.com"],
    },
    {
      icon: WhatsApp,
      title: t("contact.whatsapp"),
      details: ["+62 853-9321-0860"],
      link: "https://wa.me/6285393210860",
    },
    {
      icon: Clock,
      title: t("contact.businessHours"),
      details: [
        t("contact.businessHours.monFri"),
        t("contact.businessHours.sat"),
        t("contact.businessHours.sun"),
      ],
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
              src="/images/ikon.png"
              alt={t("contact.hero.imageAlt")}
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-primary/70"></div>
          </div>
          <div className="container section-tight relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t("contact.hero.title")}
            </h1>
            <p className="text-lg opacity-90 max-w-2xl text-white">
              {t("contact.hero.subtitle")}
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section bg-white dark:bg-slate-950">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold mb-8 text-foreground dark:text-white">{t("contact.contactInfo")}</h2>
                <div className="space-y-8">
                  {contactInfo.map((info, idx) => {
                    const Icon = info.icon;
                    return (
                      <div key={idx} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 bg-secondary dark:bg-slate-800 rounded-lg">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold mb-2 text-foreground dark:text-white">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, i) => (
                              <p
                                key={i}
                                className="text-sm text-muted-foreground dark:text-slate-400"
                              >
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-sm border border-border dark:border-slate-700">
                  <h2 className="text-2xl font-bold mb-6 text-foreground dark:text-white">{t("contact.sendMessage")}</h2>

                  {submitted ? (
                    <div className="bg-secondary/20 border border-secondary p-6 rounded-lg text-center">
                      <p className="text-lg font-semibold text-primary mb-2">
                        {t("contact.thankYou")}
                      </p>
                      <p className="text-muted-foreground dark:text-slate-400">
                        {t("contact.thankYouText")}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-foreground dark:text-white">
                            {t("contact.fullName")} *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-border dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-slate-800 text-foreground dark:text-white"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-foreground dark:text-white">
                            {t("contact.emailAddress")} *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-border dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-slate-800 text-foreground dark:text-white"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-foreground dark:text-white">
                            {t("contact.companyName")}
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-slate-800 text-foreground dark:text-white"
                            placeholder="Your Company"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2 text-foreground dark:text-white">
                            {t("contact.phoneNumber")}
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-slate-800 text-foreground dark:text-white"
                            placeholder="+62 XXX XXX XXXX"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-foreground dark:text-white">
                          {t("contact.productOfInterest")}
                        </label>
                        <select
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-slate-800 text-foreground dark:text-white"
                        >
                          <option value="">{t("contact.selectProduct")}</option>
                          <option value="vanilla">Vanilla Beans</option>
                          <option value="pepper">Black Pepper</option>
                          <option value="other">Other / Multiple Products</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-foreground dark:text-white">
                          {t("contact.message")} *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-2 border border-border dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-slate-800 text-foreground dark:text-white"
                          placeholder="Tell us about your requirements..."
                        />
                      </div>

                      <div className="flex flex-col gap-4">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg">
                          {t("contact.sendBtn")}
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className="w-full border-primary text-primary hover:bg-primary/10 py-3 text-lg"
                          onClick={handleWhatsApp}
                        >
                          WhatsApp
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section surface-muted">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground dark:text-white">{t("contact.location")}</h2>
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-border dark:border-slate-700 overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5!2d106.824!3d-6.2424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2sJl.%20Mampang%20Prapatan%20I%20Gg.%20H.%20Marzuki%20No.49A%2C%20Jakarta%20Selatan%2012790!5e0!3m2!1sen!2sid!4v1703123456789!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Berdine Terra Global Location"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Back to Home Button (below map) */}
          <div className="container text-center py-8">
            <Link href="/">
              <a>
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-3">
                  ← {t("common.backToHome")}
                </Button>
              </a>
            </Link>
          </div>

      </main>

      <Footer />
    </div>
  );
}

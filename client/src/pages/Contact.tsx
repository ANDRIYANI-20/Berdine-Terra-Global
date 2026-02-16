import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "@/components/icons";
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
    window.open("https://wa.me/6288975742032", "_blank");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.address"),
      details: ["Jl. Mampang Prapatan I Gg. H. Marzuki,", "Mampang Prapatan., Jakarta,", "Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12790"],
    },
    {
      icon: Mail,
      title: t("contact.email"),
      details: ["Partner@berdineterraglobal.com"],
    },
    {
      icon: () => (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      ),
      title: t("contact.whatsapp"),
      details: ["+62 889-7574-2032"],
      link: "https://wa.me/6288975742032",
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
      </main>

      <Footer />
    </div>
  );
}

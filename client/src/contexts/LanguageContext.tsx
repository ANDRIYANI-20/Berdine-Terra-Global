import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.products": "Products",
    "nav.portfolio": "Portfolio",
    "nav.documentation": "Documentation",
    "nav.contact": "Contact",
    "nav.getQuote": "Get Quote",

    // Home Page
    "home.hero.title": "Indonesia's Premium Produce Exports",
    "home.hero.subtitle":
      "Born from Earth, Built with Trust.",
    "home.hero.viewCatalog": "View Catalog",
    "home.hero.getQuote": "Get Quote",
    "home.highlights.globalExport": "Global Export",
    "home.highlights.globalExportDesc":
      "Serving importers and distributors across 50+ countries",
    "home.highlights.premiumQuality": "Premium Quality",
    "home.highlights.premiumQualityDesc":
      "Certified organic and fair-trade natural products",
    "home.highlights.sustainable": "Sustainable",
    "home.highlights.sustainableDesc":
      "Committed to eco-friendly and ethical sourcing practices",
    "home.products.title": "Our Products",
    "home.products.subtitle":
      "Discover our premium selection of natural products, carefully sourced and processed to meet international standards.",
    "home.products.learnMore": "Learn More",
    "home.cta.title": "Ready to Partner With Us?",
    "home.cta.subtitle":
      "Contact our team to discuss your requirements and get a customized quote for your business.",
    "home.cta.getInTouch": "Contact Us Now",

    // About Page
    "about.hero.title": "About Berdine Terra Global",
    "about.hero.subtitle":
      "Born from Earth, Built with Trust.",
    "about.whoAreWe": "Who We Are",
    "about.whoAreWeText1":
      "Berdine Terra Global is an Indonesian natural resource export company focused on developing local farmers and SMEs through sustainable partnerships.",
    "about.whoAreWeText2":
      "We are here to bridge the potential of Indonesia's natural wealth with global market demand, ensuring that every product is professionally managed, high-quality, and meets international trade standards.",
    "about.whoAreWeText3":
      "By leveraging local resources and building long-term relationships with farmers and SME operators, Berdine Terra Global is committed to creating sustainable value, not only for the international market but also for local communities as the cornerstone of our supply chain.",
    "about.byTheNumbers": "BERDINE TERRA GLOBAL",
    "about.countriesServed": "Countries Served",
    "about.satisfiedClients": "Satisfied Clients Worldwide",
    "about.tonsExported": "Tons Exported Annually",
    "about.mission": "Our Mission",
    "about.missionText":
      "To become Indonesia's leading natural-produce export company, recognized globally for its commitment to quality, sustainability, and high ethical business standards.",
    "about.vision": "Our Vision",
    "about.visionText":
      "Berdine Terra Global is committed to providing premium agricultural products that meet international export standards through mutually beneficial partnerships with local farmers, the implementation of sustainable business practices from upstream to downstream, and the expansion of global markets to strengthen the positive image of Indonesian products.",
    "about.coreValues": "Our Core Values",
    "about.qualityExcellence": "Quality Excellence",
    "about.qualityExcellenceDesc":
      "We maintain the highest standards in sourcing, processing, and quality control of all our products.",
    "about.sustainability": "Sustainability",
    "about.sustainabilityDesc":
      "Committed to environmentally responsible practices and fair-trade partnerships with our suppliers.",
    "about.reliability": "Reliability",
    "about.reliabilityDesc":
      "Consistent delivery, transparent communication, and dependable partnerships with our clients.",
    "about.innovation": "Innovation",
    "about.innovationDesc":
      "Continuously improving our processes and exploring new opportunities in the natural products market.",
    "about.certifications": "Certifications & Standards",
    "about.organicCertified": "Organic Certified",
    "about.organicCertifiedDesc":
      "Ensure that all agricultural products are free from pests, diseases, and harmful organisms.",
    "about.fairTrade": "Certificate of Origin",
    "about.fairTradeDesc":
      "Certificate of Origin (COO) verifies the country of origin of the product and confirms its authenticity.",
    "about.isoCompliant": "Quality Control & Inspection",
    "about.isoCompliantDesc":
      "Our quality control procedures include laboratory testing, visual inspection, and documentation of all products.",

    // Products Page
    "products.hero.title": "Product Catalog",
    "products.hero.subtitle":
      "Explore our complete range of premium natural products with detailed specifications and pricing.",
    "products.filter.all": "All Products",
    "products.filter.vanilla": "Vanilla Beans",
    "products.filter.pepper": "Black Pepper",
    "products.filter.coffee": "Green Coffee",
    "products.price": "Price",
    "products.minOrder": "Min Order",
    "products.availability": "Availability",
    "products.origin": "Origin",
    "products.specifications": "Specifications",
    "products.requestQuote": "Request Quote",
    "products.downloadSpecs": "Download Specs",
    "products.priceList": "Digital Product Catalog",
    "products.priceListSubtitle":
      "Download our comprehensive product catalog with all products, specifications, and current pricing information.",
    "products.downloadPriceList": "Download Product Catalog (PDF)",

    // Portfolio Page
    "portfolio.hero.title": "Our Portfolio",
    "portfolio.hero.subtitle":
      "Success stories from our clients around the world, showcasing the quality and reliability of our products and services.",
    "portfolio.testimonials": "Client Testimonials",
    "portfolio.caseStudies": "Case Studies",
    "portfolio.company": "Company",
    "portfolio.year": "Year",
    "portfolio.project": "Project",
    "portfolio.challenge": "Challenge",
    "portfolio.solution": "Solution",
    "portfolio.result": "Result",
    "portfolio.stats.clients": "Satisfied Clients",
    "portfolio.stats.countries": "Countries Served",
    "portfolio.stats.experience": "Years Experience",
    "portfolio.stats.tons": "Tons Exported Annually",

    // Documentation Page
    "documentation.hero.title": "Documentation & Guides",
    "documentation.hero.subtitle":
      "Comprehensive resources to help you understand our products, ordering process, and best practices.",
    "documentation.guides": "Product Guides",
    "documentation.faq": "Frequently Asked Questions",
    "documentation.orderingProcess": "Ordering Process",
    "documentation.topicsCovered": "Topics Covered:",
    "documentation.step1": "Request Quote",
    "documentation.step1Desc":
      "Contact us with your product requirements and desired quantities.",
    "documentation.step2": "Receive Proposal",
    "documentation.step2Desc":
      "We provide detailed quotation with pricing, terms, and delivery timeline.",
    "documentation.step3": "Confirm Order",
    "documentation.step3Desc":
      "Agree on terms, arrange payment, and finalize shipping details.",
    "documentation.step4": "Delivery",
    "documentation.step4Desc":
      "Products shipped with tracking and full documentation included.",
    "documentation.needHelp": "Need More Help?",
    "documentation.needHelpText":
      "Our team is ready to assist you with any questions or special requirements. Contact us today.",
    "documentation.emailSupport": "Email Support",
    "documentation.callUs": "Call Us",

    // Documentation Guides
    "documentation.guide1.title": "Vanilla Bean Selection Guide",
    "documentation.guide1.description": "Learn how to select and grade vanilla beans, understand quality indicators, and storage best practices.",
    "documentation.guide1.topic1": "Classification by Grade",
    "documentation.guide1.topic2": "Visual quality indicators",
    "documentation.guide1.topic3": "Aroma assessment",
    "documentation.guide1.topic4": "Proper storage conditions",
    "documentation.guide1.topic5": "Shelf life and handling",
    "documentation.guide2.title": "Black Pepper Processing & Quality",
    "documentation.guide2.description": "Comprehensive guide to black pepper varieties, processing methods, and quality standards.",
    "documentation.guide2.topic1": "Pepper varieties and origins",
    "documentation.guide2.topic2": "Processing methods",
    "documentation.guide2.topic3": "Pungency levels (Scoville)",
    "documentation.guide2.topic4": "Grading standards",
    "documentation.guide2.topic5": "Applications and uses",
    "documentation.guide3.title": "Green Coffee Bean Cupping Guide",
    "documentation.guide3.description": "Professional guide to cupping green coffee, understanding flavor profiles, and quality assessment.",
    "documentation.guide3.topic1": "Cupping methodology",
    "documentation.guide3.topic2": "Flavor wheel reference",
    "documentation.guide3.topic3": "Defect identification",
    "documentation.guide3.topic4": "Scoring systems",
    "documentation.guide3.topic5": "Roasting recommendations",
    "documentation.guide4.title": "Ordering & Logistics",
    "documentation.guide4.description": "Complete information about ordering process, payment terms, shipping, and delivery.",
    "documentation.guide4.topic1": "Minimum order quantities",
    "documentation.guide4.topic2": "Payment methods and terms",
    "documentation.guide4.topic3": "Shipping options",
    "documentation.guide4.topic4": "Customs documentation",
    "documentation.guide4.topic5": "Delivery timelines",

    // Documentation FAQ
    "documentation.faq1.question": "What is the minimum order quantity?",
    "documentation.faq1.answer": "Minimum order quantities vary by product. Vanilla beans: 10kg, Black pepper: 50kg, Green coffee: 100kg. We can discuss custom arrangements for larger orders.",
    "documentation.faq2.question": "Do you offer organic and fair-trade products?",
    "documentation.faq2.answer": "Yes, all our products are certified organic and sourced through fair-trade partnerships. We maintain full traceability from farm to export.",
    "documentation.faq3.question": "What payment methods do you accept?",
    "documentation.faq3.answer": "We accept bank transfers, letters of credit (L/C), Freight On Board (FOB) and EX-Work (EXW) methods. Payment terms are negotiable based on order volume and client history.",
    "documentation.faq4.question": "How long does shipping typically take?",
    "documentation.faq4.answer": "Shipping times depend on destination and method. Ocean freight typically takes 2-4 weeks, while air freight takes 3-7 days. We can arrange both options.",
    "documentation.faq5.question": "Do you provide samples?",
    "documentation.faq5.answer": "Yes, we provide samples for new clients. Sample sizes are typically 100-500g depending on the product. Shipping costs may apply.",
    "documentation.faq6.question": "What certifications do your products have?",
    "documentation.faq6.answer": "Our products are certified organic, fair-trade, and comply with ISO quality standards. We also maintain food safety certifications and traceability documentation.",
    "documentation.faq7.question": "Can you customize packaging?",
    "documentation.faq7.answer": "Yes, we offer custom packaging options for bulk orders. Minimum quantities and lead times apply. Contact our sales team for details.",
    "documentation.faq8.question": "What is your quality guarantee?",
    "documentation.faq8.answer": "We guarantee product quality upon delivery. If products don't meet specifications, we offer replacement or refund. All shipments are insured.",

    // Contact Page
    "contact.hero.title": "Contact Us",
    "contact.hero.subtitle":
      "Have questions about our products or ready to place an order? We would love to hear from you.",
    "contact.contactInfo": "Contact Information",
    "contact.sendMessage": "Send us a Message",
    "contact.fullName": "Full Name",
    "contact.emailAddress": "Email Address",
    "contact.companyName": "Company Name",
    "contact.phoneNumber": "Phone Number",
    "contact.productOfInterest": "Product of Interest",
    "contact.selectProduct": "Select a product...",
    "contact.message": "Message",
    "contact.sendBtn": "Send Message",
    "contact.thankYou": "Thank you for your message!",
    "contact.thankYouText":
      "We will get back to you as soon as possible.",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.whatsapp": "Telephone",
    "contact.businessHours": "Business Hours",
    "contact.businessHours.monFri": "Monday - Friday: 9:00 AM - 6:00 PM",
    "contact.businessHours.sat": "Saturday: 10:00 AM - 4:00 PM",
    "contact.businessHours.sun": "Sunday: Closed",
    "contact.location": "Our Location",
    "contact.orContactVia": "Or contact us via",
    "contact.contactWhatsApp": "Contact via WhatsApp",

    // Footer
    "footer.companyDesc":
      "Premium natural products exporter specializing in vanilla beans, black pepper, and green coffee beans.",
    "footer.quickLinks": "Quick Links",
    "footer.resources": "Resources",
    "footer.documentation": "Documentation",
    "footer.specifications": "Specifications",
    "footer.faq": "FAQ",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.termsOfService": "Terms of Service",
    "footer.allRightsReserved": "All rights reserved.",

    // Product Names & Descriptions
    "product.vanilla.gradeAPlus": "Vanilla Beans Grade A+",
    "product.vanilla.gradeAPlusDesc":
      "Top-tier Indonesian Vanilla Beans (Planifolia) with an intense, creamy aroma and superior oil content. Expertly cured and hand-selected for maximum flavor, flexibility, and freshness. Ideal for gourmet applications and premium vanilla extract.",
    "product.vanilla.gradeA": "Vanilla Beans Grade A",
    "product.vanilla.gradeADesc":
      "Premium Indonesian Vanilla Beans (Planifolia) with a rich, sweet aroma and high quality standards. Carefully cured and hand-selected to ensure consistent flavor, flexible texture, and freshness. Suitable for food, beverage, and vanilla extract production.",
    "product.vanilla.gradeB": "Vanilla Beans Grade B",
    "product.vanilla.gradeBDesc":
      "High-quality Indonesian Vanilla Beans (Planifolia) with a pleasant aroma and good quality standards. Cured and selected to provide reliable flavor and texture. Ideal for general food processing and commercial use.",
    "product.vanilla.gradeC": "Vanilla Beans Grade C",
    "product.vanilla.gradeCDesc":
      "Standard Indonesian Vanilla Beans (Planifolia) with basic quality standards. Suitable for basic food applications and cost-effective vanilla production.",
    "product.pepper.whole": "Black Pepper",
    "product.pepper.wholeDesc":
      "Indonesian Black Pepper features a strong, spicy aroma and sharp pungent taste, making it ideal for culinary use, food processing, and spice manufacturing. Carefully dried and cleaned to meet export quality standards.",
    "product.coffee.robusta": "Green Coffee Beans - Robusta",
    "product.coffee.robustaDesc":
      "Indonesian Robusta Coffee Beans are known for their strong body, low acidity, and bold earthy flavor. Grown in Indonesia’s tropical highlands, these beans are ideal for instant coffee, espresso blends, and commercial coffee production.",
    // Product Specifications
    "product.vanilla.origin": "Indonesia",
    "product.vanilla.gradeAPlus.grade": "Grade A+",
    "product.vanilla.gradeAPlus.moisture": "25-35%",
    "product.vanilla.gradeAPlus.length": "18-23 cm",
    "product.vanilla.gradeAPlus.appearance": "Dark brown, very oily surface",
    "product.vanilla.gradeAPlus.aroma": "Intense, creamy vanilla notes",
    "product.vanilla.gradeAPlus.packaging": "Vacuum-sealed, 1kg per pack",
    "product.vanilla.gradeA.grade": "Grade A",
    "product.vanilla.gradeA.moisture": "25-35%",
    "product.vanilla.gradeA.length": "18-23 cm",
    "product.vanilla.gradeA.appearance": "Dark brown, oily surface",
    "product.vanilla.gradeA.aroma": "Rich, complex vanilla notes",
    "product.vanilla.gradeA.packaging": "Vacuum-sealed, 1kg per pack",
    "product.vanilla.gradeB.grade": "Grade B",
    "product.vanilla.gradeB.moisture": "20-30%",
    "product.vanilla.gradeB.length": "18-20 cm",
    "product.vanilla.gradeB.appearance": "Brown, slightly oily surface",
    "product.vanilla.gradeB.aroma": "Pleasant vanilla notes",
    "product.vanilla.gradeB.packaging": "Vacuum-sealed, 1kg per pack",
    "product.vanilla.gradeC.grade": "Grade C",
    "product.vanilla.gradeC.moisture": "10-15%",
    "product.vanilla.gradeC.length": "All Sizes",
    "product.vanilla.gradeC.appearance": "Light brown, dry surface",
    "product.vanilla.gradeC.aroma": "Basic vanilla notes",
    "product.vanilla.gradeC.packaging": "Vacuum-sealed, 1kg per pack",
    "product.pepper.origin": "Indonesia",
    "product.pepper.type": "Whole peppercorns",
    "product.pepper.size": "4-6 mm",
    "product.pepper.moisture": "12-14%",
    "product.pepper.pungency": "High (Scoville: 30,000-40,000)",
    "product.pepper.appearance": "Black, glossy, uniform",
    "product.pepper.packaging": "25kg bags",
    "product.coffee.origin": "Indonesia",
    "product.coffee.variety": "Robusta",
    "product.coffee.size": "6-7mm",
    "product.coffee.moisture": "11-13%",
    "product.coffee.defects": "Grade A",
    "product.coffee.cupping": "80+ points",
    "product.coffee.packaging": "60kg bags",  },
  id: {
    // Navigation
    "nav.home": "Beranda",
    "nav.about": "Tentang Kami",
    "nav.products": "Produk",
    "nav.portfolio": "Portofolio",
    "nav.documentation": "Dokumentasi",
    "nav.contact": "Kontak",
    "nav.getQuote": "Dapatkan Penawaran",

    // Home Page
    "home.hero.title": "Ekspor Hasil Bumi Premium Indonesia",
    "home.hero.subtitle":
      "Lahir dari Bumi, Dibangun dengan Kepercayaan.",
    "home.hero.viewCatalog": "Lihat Katalog",
    "home.hero.getQuote": "Kontak Kami",
    "home.highlights.globalExport": "Ekspor Global",
    "home.highlights.globalExportDesc":
      "Melayani importir dan distributor di lebih dari 50 negara",
    "home.highlights.premiumQuality": "Kualitas Premium",
    "home.highlights.premiumQualityDesc":
      "Produk alami bersertifikat organik dan fair-trade",
    "home.highlights.sustainable": "Berkelanjutan",
    "home.highlights.sustainableDesc":
      "Berkomitmen pada praktik ramah lingkungan dan etis",
    "home.products.title": "Produk Kami",
    "home.products.subtitle":
      "Temukan pilihan premium produk alami kami yang dikurasi dengan cermat dan diproses sesuai standar internasional.",
    "home.products.learnMore": "Pelajari Lebih Lanjut",
    "home.cta.title": "Siap Bermitra Dengan Kami?",
    "home.cta.subtitle":
      "Hubungi tim kami untuk mendiskusikan kebutuhan Anda dan temukan cara kami dapat melayani Anda.",
    "home.cta.getInTouch": "Hubungi Kami",

    // About Page
    "about.hero.title": "Tentang Berdine Terra Global",
    "about.hero.subtitle":
      "Lahir dari Bumi, Dibangun dengan Kepercayaan.",
    "about.whoAreWe": "Siapa Kami",
    "about.whoAreWeText1":
      "Berdine Terra Global adalah perusahaan ekspor hasil alam Indonesia yang berfokus pada pengembangan petani dan UMKM lokal melalui kemitraan yang berkelanjutan.",
    "about.whoAreWeText2":
      "Kami hadir untuk menjembatani potensi kekayaan alam Indonesia dengan kebutuhan pasar global, dengan memastikan setiap produk dikelola secara profesional, berkualitas, dan memenuhi standar perdagangan internasional.",
    "about.whoAreWeText3":
      "Dengan memanfaatkan sumber daya lokal dan membangun hubungan jangka panjang dengan para petani serta pelaku UMKM, Berdine Terra Global berkomitmen menciptakan nilai tambah yang berkelanjutan, tidak hanya bagi pasar internasional tetapi juga bagi komunitas lokal sebagai fondasi utama rantai pasok kami.",
    "about.byTheNumbers": "BERDINE TERRA GLOBAL",
    "about.countriesServed": "Negara yang Dilayani",
    "about.satisfiedClients": "Klien Puas di Seluruh Dunia",
    "about.tonsExported": "Ton Diekspor Per Tahun",
    "about.mission": "Misi Kami",
    "about.missionText":
      "Menjadi perusahaan ekspor hasil bumi terkemuka di Indonesia yang dikenal secara global karena komitmennya terhadap kualitas, keberlanjutan, dan etika bisnis yang tinggi.",
    "about.vision": "Visi Kami",
    "about.visionText":
      "Berdine Terra Global berkomitmen menyediakan produk hasil bumi premium berstandar ekspor internasional melalui kemitraan yang saling menguntungkan dengan petani lokal, penerapan praktik bisnis berkelanjutan dari hulu ke hilir, serta perluasan pasar global untuk memperkuat citra positif produk Indonesia.",
    "about.coreValues": "Nilai-Nilai Inti Kami",
    "about.qualityExcellence": "Keunggulan Kualitas",
    "about.qualityExcellenceDesc":
      "Kami mempertahankan standar tertinggi dalam sourcing, pemrosesan, dan kontrol kualitas semua produk kami.",
    "about.sustainability": "Keberlanjutan",
    "about.sustainabilityDesc":
      "Berkomitmen pada praktik ramah lingkungan dan kemitraan fair-trade dengan pemasok kami.",
    "about.reliability": "Keandalan",
    "about.reliabilityDesc":
      "Pengiriman konsisten, komunikasi transparan, dan kemitraan yang dapat diandalkan dengan klien kami.",
    "about.innovation": "Inovasi",
    "about.innovationDesc":
      "Terus meningkatkan proses kami dan mengeksplorasi peluang baru di pasar produk alami.",
    "about.certifications": "Sertifikasi & Standar",
    "about.organicCertified": "Bersertifikat Organik",
    "about.organicCertifiedDesc":
      "memastikan bahwa semua produk pertanian bebas dari hama, penyakit, dan organisme berbahaya.",
    "about.fairTrade": "Sertifikat Asal (Certificate of Origin)",
    "about.fairTradeDesc":
      "Sertifikat Asal (COO) memverifikasi negara asal produk dan menegaskan keasliannya.",
    "about.isoCompliant": "Kontrol Mutu & Inspeksi",
    "about.isoCompliantDesc":
      "Prosedur kontrol mutu kami meliputi pengujian laboratorium, inspeksi visual, dan pendokumentasian semua produk. ",

    // Products Page
    "products.hero.title": "Katalog Produk",
    "products.hero.subtitle":
      "Jelajahi rangkaian lengkap produk alami premium kami dengan spesifikasi detail dan harga.",
    "products.filter.all": "Semua Produk",
    "products.filter.vanilla": "Vanilla Beans",
    "products.filter.pepper": "Black Pepper",
    "products.filter.coffee": "Green Coffee",
    "products.price": "Harga",
    "products.minOrder": "Pesanan Min",
    "products.availability": "Ketersediaan",
    "products.origin": "Asal",
    "products.specifications": "Spesifikasi",
    "products.requestQuote": "Minta Penawaran",
    "products.downloadSpecs": "Unduh Spesifikasi",
    "products.priceList": "Katalog Produk Digital",
    "products.priceListSubtitle":
      "Unduh katalog produk digital komprehensif kami dengan semua produk, spesifikasi, dan informasi terkini.",
    "products.downloadPriceList": "Unduh Katalog Produk (PDF)",

    // Portfolio Page
    "portfolio.hero.title": "Portofolio Kami",
    "portfolio.hero.subtitle":
      "Kisah sukses dari klien kami di seluruh dunia, menampilkan kualitas dan keandalan produk dan layanan kami.",
    "portfolio.testimonials": "Testimoni Klien",
    "portfolio.caseStudies": "Studi Kasus",
    "portfolio.company": "Perusahaan",
    "portfolio.year": "Tahun",
    "portfolio.project": "Proyek",
    "portfolio.challenge": "Tantangan",
    "portfolio.solution": "Solusi",
    "portfolio.result": "Hasil",
    "portfolio.stats.clients": "Klien Puas",
    "portfolio.stats.countries": "Negara Dilayani",
    "portfolio.stats.experience": "Tahun Pengalaman",
    "portfolio.stats.tons": "Ton Diekspor Per Tahun",

    // Documentation Page
    "documentation.hero.title": "Dokumentasi & Panduan",
    "documentation.hero.subtitle":
      "Sumber daya komprehensif untuk membantu Anda memahami produk, proses pemesanan, dan praktik terbaik kami.",
    "documentation.guides": "Panduan Produk",
    "documentation.faq": "Pertanyaan yang Sering Diajukan",
    "documentation.orderingProcess": "Proses Pemesanan",
    "documentation.topicsCovered": "Topik yang Dibahas:",
    "documentation.step1": "Minta Penawaran",
    "documentation.step1Desc":
      "Hubungi kami dengan persyaratan produk dan jumlah yang diinginkan.",
    "documentation.step2": "Terima Proposal",
    "documentation.step2Desc":
      "Kami memberikan penawaran terperinci dengan harga, syarat, dan jadwal pengiriman.",
    "documentation.step3": "Konfirmasi Pesanan",
    "documentation.step3Desc":
      "Setujui syarat, atur pembayaran, dan finalisasi detail pengiriman.",
    "documentation.step4": "Pengiriman",
    "documentation.step4Desc":
      "Produk dikirim dengan pelacakan dan dokumentasi lengkap.",
    "documentation.needHelp": "Butuh Bantuan Lebih Lanjut?",
    "documentation.needHelpText":
      "Tim kami siap membantu Anda dengan pertanyaan atau kebutuhan khusus. Hubungi kami hari ini.",
    "documentation.emailSupport": "Dukungan Email",
    "documentation.callUs": "Hubungi Kami",

    // Documentation Guides
    "documentation.guide1.title": "Panduan Pemilihan Vanilla Beans",
    "documentation.guide1.description": "Pelajari cara memilih dan mengklasifikasikan vanilla beans, memahami indikator kualitas, dan praktik penyimpanan terbaik.",
    "documentation.guide1.topic1": "Klasifikasi sesuai Grade",
    "documentation.guide1.topic2": "Indikator kualitas visual",
    "documentation.guide1.topic3": "Penilaian aroma",
    "documentation.guide1.topic4": "Kondisi penyimpanan yang tepat",
    "documentation.guide1.topic5": "Umur simpan dan penanganan",
    "documentation.guide2.title": "Pengolahan & Kualitas Lada Hitam",
    "documentation.guide2.description": "Panduan komprehensif tentang varietas lada hitam, metode pengolahan, dan standar kualitas.",
    "documentation.guide2.topic1": "Varietas lada dan asal",
    "documentation.guide2.topic2": "Metode pengolahan",
    "documentation.guide2.topic3": "Tingkat kepedasan (Scoville)",
    "documentation.guide2.topic4": "Standar grading",
    "documentation.guide2.topic5": "Aplikasi dan penggunaan",
    "documentation.guide3.title": "Panduan Cupping Green Coffee Beans",
    "documentation.guide3.description": "Panduan profesional untuk cupping green coffee, memahami profil rasa, dan penilaian kualitas.",
    "documentation.guide3.topic1": "Metodologi cupping",
    "documentation.guide3.topic2": "Referensi roda rasa",
    "documentation.guide3.topic3": "Identifikasi cacat",
    "documentation.guide3.topic4": "Sistem penilaian",
    "documentation.guide3.topic5": "Rekomendasi roasting",
    "documentation.guide4.title": "Pemesanan & Logistik",
    "documentation.guide4.description": "Informasi lengkap tentang proses pemesanan, syarat pembayaran, pengiriman, dan pengiriman.",
    "documentation.guide4.topic1": "Kuantitas pesanan minimum",
    "documentation.guide4.topic2": "Metode dan syarat pembayaran",
    "documentation.guide4.topic3": "Opsi pengiriman",
    "documentation.guide4.topic4": "Dokumentasi bea cukai",
    "documentation.guide4.topic5": "Jadwal pengiriman",

    // Documentation FAQ
    "documentation.faq1.question": "Berapa kuantitas pesanan minimum?",
    "documentation.faq1.answer": "Kuantitas pesanan minimum bervariasi per produk. Vanilla beans: 10kg, Black pepper: 50kg, Green coffee: 100kg. Kami dapat mendiskusikan pengaturan khusus untuk pesanan yang lebih besar.",
    "documentation.faq2.question": "Apakah Anda menawarkan produk organik dan fair-trade?",
    "documentation.faq2.answer": "Ya, semua produk kami bersertifikat organik dan bersumber dari kemitraan fair-trade. Kami menjaga pelacakan penuh dari petani hingga ekspor.",
    "documentation.faq3.question": "Metode pembayaran apa yang Anda terima?",
    "documentation.faq3.answer": "Kami menerima transfer bank, letter of credit (L/C),FOB dan EXW. Syarat pembayaran dapat dinegosiasikan berdasarkan volume pesanan dan riwayat klien.",
    "documentation.faq4.question": "Berapa lama waktu pengiriman biasanya?",
    "documentation.faq4.answer": "Waktu pengiriman tergantung pada tujuan dan metode. Pengiriman laut biasanya memakan waktu 2-4 minggu, sedangkan pengiriman udara memakan waktu 3-7 hari. Kami dapat mengatur kedua opsi.",
    "documentation.faq5.question": "Apakah Anda menyediakan sampel?",
    "documentation.faq5.answer": "Ya, kami menyediakan sampel untuk klien baru. Ukuran sampel biasanya 100-500g tergantung produk. Biaya pengiriman mungkin berlaku.",
    "documentation.faq6.question": "Sertifikasi apa yang dimiliki produk Anda?",
    "documentation.faq6.answer": "Produk kami bersertifikat organik, fair-trade, dan mematuhi standar kualitas ISO. Kami juga menjaga sertifikasi keamanan pangan dan dokumentasi pelacakan.",
    "documentation.faq7.question": "Bisakah Anda menyesuaikan kemasan?",
    "documentation.faq7.answer": "Ya, kami menawarkan opsi kemasan khusus untuk pesanan grosir. Kuantitas minimum dan waktu lead berlaku. Hubungi tim penjualan kami untuk detail.",
    "documentation.faq8.question": "Apa jaminan kualitas Anda?",
    "documentation.faq8.answer": "Kami menjamin kualitas produk saat pengiriman. Jika produk tidak memenuhi spesifikasi, kami menawarkan penggantian atau pengembalian dana. Semua pengiriman diasuransikan.",

    // Contact Page
    "contact.hero.title": "Hubungi Kami",
    "contact.hero.subtitle":
      "Punya pertanyaan tentang produk kami atau siap melakukan pesanan? Kami ingin mendengar dari Anda.",
    "contact.contactInfo": "Informasi Kontak",
    "contact.sendMessage": "Kirim Pesan Kami",
    "contact.fullName": "Nama Lengkap",
    "contact.emailAddress": "Alamat Email",
    "contact.companyName": "Nama Perusahaan",
    "contact.phoneNumber": "Nomor Telepon",
    "contact.productOfInterest": "Produk yang Diminati",
    "contact.selectProduct": "Pilih produk...",
    "contact.message": "Pesan",
    "contact.sendBtn": "Kirim Pesan",
    "contact.thankYou": "Terima kasih atas pesan Anda!",
    "contact.thankYouText":
      "Kami akan menghubungi Anda sesegera mungkin.",
    "contact.address": "Alamat",
    "contact.phone": "Telepon",
    "contact.email": "Email",
    "contact.whatsapp": "Telepon",
    "contact.businessHours": "Jam Kerja",
    "contact.businessHours.monFri": "Senin - Jumat: 9:00 AM - 6:00 PM",
    "contact.businessHours.sat": "Sabtu: 10:00 AM - 4:00 PM",
    "contact.businessHours.sun": "Minggu: Tutup",
    "contact.location": "Lokasi Kami",
    "contact.orContactVia": "Atau hubungi kami via",
    "contact.contactWhatsApp": "Hubungi via WhatsApp",

    // Footer
    "footer.companyDesc":
      "Eksportir produk alami premium yang khusus dalam vanilla beans, black pepper, dan green coffee beans.",
    "footer.quickLinks": "Tautan Cepat",
    "footer.resources": "Sumber Daya",
    "footer.documentation": "Dokumentasi",
    "footer.specifications": "Spesifikasi",
    "footer.faq": "FAQ",
    "footer.privacyPolicy": "Kebijakan Privasi",
    "footer.termsOfService": "Syarat Layanan",
    "footer.allRightsReserved": "Semua hak dilindungi.",

    // Product Names & Descriptions
    "product.vanilla.gradeAPlus": "Vanilla Utuh Grade A+",
    "product.vanilla.gradeAPlusDesc":
      "Vanila Indonesia (Planifolia) kelas premium tertinggi dengan aroma yang intens, creamy, dan kadar minyak tinggi. Diolah secara ahli dan dipilih manual untuk rasa maksimal, fleksibilitas, dan kesegaran. Ideal untuk aplikasi gourmet dan ekstrak vanila premium.",
    "product.vanilla.gradeA": "Vanilla Utuh Grade A",
    "product.vanilla.gradeADesc":
      "Vanila Indonesia (Planifolia) Premium dengan aroma manis yang kaya dan standar kualitas tinggi. Diolah dengan hati-hati dan dipilih secara manual untuk memastikan rasa yang konsisten, tekstur yang fleksibel, dan kesegaran. Cocok untuk produksi makanan, minuman, dan ekstrak vanila.",
    "product.vanilla.gradeB": "Vanilla Utuh Grade B",
    "product.vanilla.gradeBDesc":
      "Vanila Indonesia (Planifolia) berkualitas tinggi dengan aroma yang menyenangkan dan standar kualitas baik. Diolah dan dipilih untuk memberikan rasa dan tekstur yang andal. Ideal untuk pengolahan makanan umum dan penggunaan komersial.",
    "product.vanilla.gradeC": "Vanilla Utuh Grade C",
    "product.vanilla.gradeCDesc":
      "Vanila Indonesia (Planifolia) standar dengan standar kualitas dasar. Cocok untuk aplikasi makanan dasar dan produksi vanila yang hemat biaya.",
    "product.pepper.whole": "Lada Hitam",
    "product.pepper.wholeDesc":
      "Biji Lada Hitam Indonesia memiliki aroma pedas yang kuat dan rasa pedas yang tajam, menjadikannya ideal untuk penggunaan kuliner, pengolahan makanan, dan produksi rempah-rempah. Dihasilkan melalui proses pengeringan dan pembersihan yang teliti untuk memenuhi standar kualitas ekspor.",
    "product.coffee.robusta": "Green Coffee Beans - Robusta",
    "product.coffee.robustaDesc":
      "Biji kopi Robusta Indonesia dikenal karena tubuhnya yang kuat, keasaman yang rendah, dan rasa tanah yang kaya. Ditanam di dataran tinggi tropis Indonesia, bijih kopi ini ideal untuk kopi instan, campuran espresso, dan produksi kopi komersial.",

    // Product Specifications
    "product.vanilla.origin": "Indonesia",
    "product.vanilla.gradeAPlus.grade": "Grade A+",
    "product.vanilla.gradeAPlus.moisture": "25-35%",
    "product.vanilla.gradeAPlus.length": "18-23 cm",
    "product.vanilla.gradeAPlus.appearance": "Permukaan coklat gelap, sangat berminyak",
    "product.vanilla.gradeAPlus.aroma": "Aroma vanila intens dan creamy",
    "product.vanilla.gradeAPlus.packaging": "Dikemas vakum, 1kg per paket",
    "product.vanilla.gradeA.grade": "Grade A",
    "product.vanilla.gradeA.moisture": "25-35%",
    "product.vanilla.gradeA.length": "18-23 cm",
    "product.vanilla.gradeA.appearance": "Permukaan coklat gelap, berminyak",
    "product.vanilla.gradeA.aroma": "Aroma vanila yang kaya dan kompleks",
    "product.vanilla.gradeA.packaging": "Dikemas vakum, 1kg per paket",
    "product.vanilla.gradeB.grade": "Grade B",
    "product.vanilla.gradeB.moisture": "20-30%",
    "product.vanilla.gradeB.length": "18-20 cm",
    "product.vanilla.gradeB.appearance": "Permukaan coklat, sedikit berminyak",
    "product.vanilla.gradeB.aroma": "Aroma vanila yang menyenangkan",
    "product.vanilla.gradeB.packaging": "Dikemas vakum, 1kg per paket",
    "product.vanilla.gradeC.grade": "Grade C",
    "product.vanilla.gradeC.moisture": "10-15%",
    "product.vanilla.gradeC.length": "Semua Ukuran",
    "product.vanilla.gradeC.appearance": "Permukaan coklat terang, kering",
    "product.vanilla.gradeC.aroma": "Aroma vanila dasar",
    "product.vanilla.gradeC.packaging": "Dikemas vakum, 1kg per paket",
    "product.pepper.origin": "Indonesia",
    "product.pepper.type": "Biji lada utuh",
    "product.pepper.size": "4-6 mm",
    "product.pepper.moisture": "12-14%",
    "product.pepper.pungency": "Tinggi (Scoville: 30,000-40,000)",
    "product.pepper.appearance": "Hitam, berkilau, seragam",
    "product.pepper.packaging": "Kantong 25kg",
    "product.coffee.origin": "Indonesia",
    "product.coffee.variety": "Robusta",
    "product.coffee.size": "6-7mm",
    "product.coffee.moisture": "11-13%",
    "product.coffee.defects": "Grade A",
    "product.coffee.cupping": "80+ poin",
    "product.coffee.packaging": "Kantong 60kg",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language") as Language | null;
      return saved || "en";
    }
    return "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

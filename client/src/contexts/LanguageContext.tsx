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
    "nav.skip": "Skip to content",
    "nav.tagline": "Indonesian Natural Produce Exporter",

    // Home Page
    "home.hero.eyebrow": "Trusted Indonesian Exporter",
    "home.hero.title": "Premium Indonesian Vanilla & Pepper for Global Buyers",
    "home.hero.subtitle":
      "Export-ready supply backed by traceable sourcing, quality assurance, and dependable logistics.",
    "home.hero.viewCatalog": "View Catalog",
    "home.hero.getQuote": "Request a Quote",
    "home.hero.downloadCatalog": "Download Catalog",
    "home.hero.trust1": "Export documentation ready",
    "home.hero.trust2": "QA & moisture control",
    "home.hero.trust3": "Verified source",
    "home.hero.imageAlt": "Export-ready vanilla and black pepper",
    "home.hero.badgeLabel": "Typical lead time",
    "home.hero.badgeValue": "21-30 days FOB",
    "home.highlights.qualityControl": "Quality-Controlled Supply Chain",
    "home.highlights.qualityControlDesc":
      "Quality standards from upstream to delivery with complete documentation.",
    "home.highlights.documentation": "Export-Ready Documentation",
    "home.highlights.documentationDesc":
      "COO, Phytosanitary Certificate, PEB, and supporting documents available.",
    "home.highlights.suppliers": "Verified Local Suppliers",
    "home.highlights.suppliersDesc":
      "Partnerships with producers and farmers who have undergone verification process.",
    "home.highlights.capacity": "Flexible Production Capacity",
    "home.highlights.capacityDesc":
      "Supply scale can be adjusted according to buyer needs.",
    "home.products.title": "Our Products",
    "home.products.subtitle":
      "Discover our premium selection of natural products, carefully sourced and processed to meet international standards.",
    "home.products.learnMore": "Learn More",
    "home.stats.countries": "Countries served",
    "home.stats.buyers": "Buyer partnerships",
    "home.stats.volume": "Annual export volume (tons)",
    "home.stats.sourcing": "Sourcing partners",
    "home.assurance.eyebrow": "Why global buyers choose us",
    "home.assurance.title": "Built for consistent, compliant supply",
    "home.assurance.subtitle":
      "From origin to shipment, we provide the documentation, quality controls, and logistics support global importers expect.",
    "home.assurance.qc": "QC-led grading",
    "home.assurance.qcDesc":
      "Each batch is inspected for moisture, size, and visual quality with documented results.",
    "home.assurance.docs": "Export documentation",
    "home.assurance.docsDesc":
      "COO, phytosanitary, COA, packing list, and invoice prepared to destination requirements.",
    "home.assurance.trace": "Verified source",
    "home.assurance.traceDesc":
      "Direct partnerships with farmers and MSMEs ensure supply continuity and transparency.",
    "home.assurance.logistics": "Logistics coordination",
    "home.assurance.logisticsDesc":
      "Flexible shipping options with clear timelines and proactive communication.",
    "home.cta.title": "Ready to Partner With Us?",
    "home.cta.subtitle":
      "Contact our team to discuss your requirements and get a customized quote for your business.",
    "home.cta.getInTouch": "Contact Us Now",

    // About Page
    "about.hero.title": "About Berdine Terra Global",
    "about.hero.subtitle":
      "Born from Earth, Built with Trust.",
    "about.hero.imageAlt": "Berdine Terra Global team and sourcing network",
    "about.whoAreWe": "Who We Are",
    "about.whoAreWeText1":
      "Berdine Terra Global is an exporter of premium commodities from Indonesia focusing on vanilla beans and black pepper. Based on the value 'Born from Earth, Built with Trust', we build a supply chain that connects international buyer needs with the welfare of local farmers.",
    "about.whoAreWeText2":
      "We work through direct partnerships with farmers to ensure quality, traceability, and sustainability of every product. With controlled processing, standardized quality control, and complete export documentation, we provide consistent and reliable commodities.",
    "about.whoAreWeText3":
      "Our goal is to deliver value to the global market while making a real impact on the farmers who are the main foundation of this company.",
    "about.byTheNumbers": "BERDINE TERRA GLOBAL",
    "about.countriesServed": "Countries Served",
    "about.satisfiedClients": "Satisfied Clients Worldwide",
    "about.tonsExported": "Tons Exported Annually",
    "about.mission": "Mission",
    "about.missionText1":
      "Build a trust-based supply chain through direct partnerships with farmers.",
    "about.missionText2":
      "Provide vanilla beans and black pepper with consistent and standardized quality.",
    "about.missionText3":  
      "Strengthen local agricultural MSMEs to compete in international markets.",
    "about.missionText4": 
      "Ensure every export meets official standards and documentation.",
    "about.missionText5":
      "Promote sustainable production practices.",
    "about.vision": "Vision",
    "about.visionText":
      "To become a trusted agricultural exporter capable of delivering quality commodities to the global market, while strengthening the welfare and independence of local farmers through a transparent, sustainable, and integrity-driven supply chain.",
    "about.coreValues": "Our Core Values",
    "about.qualityExcellence": "Quality",
    "about.qualityExcellenceDesc":
      "Every product is selected through a rigorous process, including visual inspection, grade sorting, and batch documentation to ensure consistency.",
    "about.sustainability": "Sustainability",
    "about.sustainabilityDesc":
      "We work with local suppliers using fair-partnership principles to create equitable economic benefits from upstream to downstream.",
    "about.reliability": "Reliability",
    "about.reliabilityDesc":
      "Clear communication, on-time delivery, and specification compliance are our focus in building trust with international buyers.",
    "about.innovation": "Market Development",
    "about.innovationDesc":
      "We actively identify new market opportunities and adapt products based on global demand trends.",
    "about.certifications": "Standards & Documentation",
    "about.organicCertified": "Certificate of Analysis (COA)",
    "about.organicCertifiedDesc":
      "Laboratory test documents that confirm the product meets quality specifications and standards.",
    "about.fairTrade": "Quality Inspection / QC Report",
    "about.fairTradeDesc":
      "Inspection and quality control report that documents product condition, specifications, and compliance prior to shipment.",
    "about.isoCompliant": "Export Documentation",
    "about.isoCompliantDesc":
      "Includes Packing List, Commercial Invoice, Phytosanitary Certificate, and COO (Certificate of Origin).",

    // Compliance & Certifications
    "about.compliance.title": "Compliance & Certifications",
    "about.compliance.subtitle": "Flexible certification arrangements based on your market requirements",
    "about.compliance.text":
      "We are a legally registered Indonesian company. Product certifications and additional compliance requirements can be arranged based on buyer needs and destination market requirements. COA/QC documentation can be provided per batch upon request.",

    // Quality Control Workflow
    "about.qcWorkflow.title": "Quality Control Workflow",
    "about.qcWorkflow.subtitle": "Our 5-step process ensures consistent quality from farm to shipment",
    "about.qcWorkflow.step1": "Sourcing & Traceability",
    "about.qcWorkflow.step1Desc": "Direct partnerships with verified farmers ensuring full origin transparency and sustainable sourcing practices",
    "about.qcWorkflow.step2": "Sorting & Grading",
    "about.qcWorkflow.step2Desc": "Professional visual inspection and classification by size, moisture content, and quality grade standards",
    "about.qcWorkflow.step3": "Moisture Control & Batch Preparation",
    "about.qcWorkflow.step3Desc": "Controlled drying and storage facilities to meet exact export specifications and prevent spoilage",
    "about.qcWorkflow.step4": "Packing (Vacuum/Bags)",
    "about.qcWorkflow.step4Desc": "Professional packaging using vacuum sealing or specialized bags to preserve quality during international transit",
    "about.qcWorkflow.step5": "Pre-shipment QC + COA (upon request)",
    "about.qcWorkflow.step5Desc": "Final quality inspection with detailed documentation and Certificate of Analysis available for all buyers",

    // Key Capabilities
    "about.capabilities.title": "Key Capabilities",
    "about.capabilities.subtitle": "Essential information for procurement planning and logistics",
    "about.capabilities.port": "FOB Port Panjang (Lampung)",
    "about.capabilities.portDesc": "Main export gateway with efficient customs clearance and container handling",
    "about.capabilities.leadTime": "Lead time 1–3 weeks",
    "about.capabilities.leadTimeDesc": "Fast turnaround from order confirmation to shipment readiness",
    "about.capabilities.coa": "COA available",
    "about.capabilities.coaDesc": "Certificate of Analysis provided per batch with detailed lab test results",
    "about.capabilities.payment": "T/T & L/C supported",
    "about.capabilities.paymentDesc": "Flexible payment terms including Telegraphic Transfer and Letter of Credit",
    "about.capabilities.moq": "MOQ: Vanilla 50 kg, Pepper 100 kg",
    "about.capabilities.moqDesc": "Accessible minimum order quantities suitable for both trial and bulk orders",

    // Products Page
    "products.hero.title": "Product Catalog",
    "products.hero.subtitle":
      "Explore our export-grade product range with transparent specs, pricing bands, and minimum order quantities.",
    "products.hero.imageAlt": "Berdine Terra Global product catalog",
    "products.filter.all": "All Products",
    "products.filter.vanilla": "Vanilla Beans",
    "products.filter.pepper": "Black Pepper",
    "products.price": "Price",
    "products.minOrder": "Min Order",
    "products.availability": "Availability",
    "products.origin": "Origin",
    "products.varian": "Variant",
    "products.grade": "Grade",
    "products.specifications": "Specifications",
    "products.requestQuote": "Request Quote",
    "products.downloadSpecs": "Download Specs",
    "products.priceList": "Documentation & Guides",
    "products.priceListSubtitle":
      "Comprehensive resources to help you understand our products, ordering process, and best practices.",
    "products.downloadPriceList": "Download Catalog",
    "products.viewDocumentation": "View The Documentation",

    // Product Specifications
    "product.vanilla.origin": "Indonesia",
    "product.pepper.origin": "Indonesia",

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
    "documentation.hero.imageAlt": "Export documentation and buyer guides",
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
    "documentation.paymentTerms": "Payment Terms",
    "documentation.paymentTermsSubtitle": "Flexible payment options tailored to your business needs",
    "documentation.payment.tt3070": "T/T 30/70: 30% deposit, 70% before loading",
    "documentation.payment.tt5050": "T/T 50/50: 50% deposit, 50% before loading",
    "documentation.payment.ttFull": "T/T Full Payment: full payment before production/shipment",
    "documentation.payment.lc": "L/C: available (subject to agreement)",
    "documentation.samples": "Samples",
    "documentation.samplesSubtitle": "Request product samples for quality evaluation",
    "documentation.samplesDesc": "Samples can be arranged upon request. Courier cost and sample availability depend on product and destination. Please contact us with your shipping address and required specs.",
    "documentation.openGuide": "Open Guide",
    "documentation.closeGuide": "Close Guide",
    "documentation.cta.title": "Need a quote or COA?",
    "documentation.cta.subtitle": "Our export team is ready to provide detailed quotations and certificates of analysis.",
    "documentation.cta.requestQuote": "Request a Quote",
    "documentation.cta.contactTeam": "Contact Export Team",

    // Documentation Guides
    "documentation.guide1.title": "Vanilla Bean Selection Guide",
    "documentation.guide1.description": "Learn how to select and grade vanilla beans, understand quality indicators, and storage best practices.",
    "documentation.guide1.topic1": "Classification by Grade",
    "documentation.guide1.topic2": "Visual quality indicators",
    "documentation.guide1.topic3": "Aroma assessment",
    "documentation.guide1.topic4": "Proper storage conditions",
    "documentation.guide1.topic5": "Shelf life and handling",
    "documentation.guide1.detail1": "Grade A+ (Gourmet Premium): Length 20-25cm, moisture 30-35%, deep black color, very oily surface, intense creamy aroma. Best for high-end culinary use and extract production.",
    "documentation.guide1.detail2": "Grade A: Length 16-20cm, moisture 25-30%, dark brown color, oily texture, strong sweet-creamy aroma. Ideal for food & beverage industry and flavor applications.",
    "documentation.guide1.detail3": "Visual Quality: Look for uniform color, no splits or cracks, flexible texture (not brittle), glossy surface with visible oil content.",
    "documentation.guide1.detail4": "Storage: Keep in airtight containers, cool dark place (15-20°C), avoid direct sunlight. Properly stored beans maintain quality for 1-2 years.",
    "documentation.guide1.detail5": "Handling: Always use clean, dry hands or tools. Avoid exposure to moisture. Vacuum-sealed packaging recommended for long-term storage.",
    "documentation.guide2.title": "Black Pepper Selection Guide",
    "documentation.guide2.description": "Comprehensive guide to black pepper varieties, processing methods, and quality standards.",
    "documentation.guide2.topic1": "Pepper varieties and origins",
    "documentation.guide2.topic2": "Processing methods",
    "documentation.guide2.topic3": "Pungency levels (Scoville)",
    "documentation.guide2.topic4": "Grading standards",
    "documentation.guide2.topic5": "Applications and uses",
    "documentation.guide2.detail1": "Indonesian Origin: Our black pepper comes from Indonesian farms, known for strong pungency and distinctive aroma. Size typically 3.5-4.5mm with consistent quality.",
    "documentation.guide2.detail2": "Processing: Sun-dried whole peppercorns, carefully cleaned and sorted. Moisture content maintained at 12-13% for optimal preservation and flavor.",
    "documentation.guide2.detail3": "Quality Standards: Grade A quality, garbled level 550, uniform black glossy appearance, free from foreign matter and defects.",
    "documentation.guide2.detail4": "Pungency: High piperine content delivers sharp, spicy heat. Ideal for culinary applications, food processing, and spice manufacturing.",
    "documentation.guide2.detail5": "Storage & Shelf Life: Store in cool, dry conditions in sealed containers. Properly stored whole peppercorns maintain flavor for 2-3 years.",
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
    "documentation.guide4.detail1": "Minimum Order Quantities: Vanilla beans 50kg minimum, Black pepper 100kg minimum. For larger volumes, please contact us for special arrangements.",
    "documentation.guide4.detail2": "Payment Terms: We accept T/T (30/70, 50/50, or full payment), L/C (subject to agreement). Payment terms negotiable based on order volume and relationship.",
    "documentation.guide4.detail3": "Shipping Options: FOB and EXW terms available. Ocean freight (2-4 weeks) or air freight (3-7 days) depending on urgency and destination.",
    "documentation.guide4.detail4": "Documentation: We provide complete export documentation including Certificate of Origin (COO), Phytosanitary Certificate, Certificate of Analysis (COA), Packing List, and Commercial Invoice.",
    "documentation.guide4.detail5": "Lead Times: Typical lead time 21-30 days FOB from order confirmation to shipment, depending on product availability and order size. Expedited processing available for urgent orders.",

    // Documentation FAQ
    "documentation.faq1.question": "What is the minimum order quantity?",
    "documentation.faq1.answer": "Minimum order quantities vary by product. Vanilla beans 50kg and Black pepper 100kg. We can discuss custom arrangements for larger orders.",
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
    "contact.hero.imageAlt": "Berdine Terra Global contact and support",
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
    "contact.businessHours.monFri": "Monday - Friday : 9:00 AM - 6:00 PM",
    "contact.businessHours.sat": "Saturday : 10:00 AM - 4:00 PM",
    "contact.businessHours.sun": "Sunday : Closed",
    "contact.location": "Our Location",
    "contact.orContactVia": "Or contact us via",
    "contact.contactWhatsApp": "Contact via WhatsApp",

    // Footer
    "footer.companyDesc":
      "Export-ready Indonesian natural products for global buyers, specializing in vanilla beans and black pepper.",
    "footer.quickLinks": "Quick Links",
    "footer.resources": "Resources",
    "footer.documentation": "Documentation",
    "footer.specifications": "Specifications",
    "footer.faq": "FAQ",
    "footer.shipping": "Shipping & Incoterms",
    "footer.trust.docReady": "Export docs ready",
    "footer.trust.qc": "QC reports",
    "footer.trust.traceable": "Verified source",
    "footer.trust.global": "Global shipping",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.termsOfService": "Terms of Service",
    "footer.allRightsReserved": "All rights reserved.",

    // Product Names & Descriptions
    "product.vanilla.gradeAPlus": "Vanilla Beans Gourmet Premium A+",
    "product.vanilla.gradeAPlusDesc":
      "The highest quality Indonesian Vanilla Planifolia (Gourmet A+) with an intense, creamy, sweet and very rich aroma. Hand-picked from the ripest fruits and put through a highly selective drying process. Each pod is manually selected based on length, oil content, texture and visual perfection. Longer drying and tighter moisture control results in a very oily, shiny and fleshy pod. Ideal for products that require high clarity of flavour and intensity of aroma.",
    "product.vanilla.gradeA": "Vanilla Beans Grade A",
    "product.vanilla.gradeADesc":
      "Grade A Indonesian Vanilla Planifolia is a premium quality export product processed through a professional drying process to produce a strong sweet and creamy aroma with a stable flavour character. The pods are long with an oily surface and a uniform dark brown-black colour. The texture is moist and pliable, making it ideal for the food and beverage industry, flavour extraction and other products.",
    "product.pepper.whole": "Black Pepper",
    "product.pepper.wholeDesc":
      "Indonesian Black Pepper features a strong, spicy aroma and sharp pungent taste, making it ideal for culinary use, food processing, and spice manufacturing. Carefully dried and cleaned to meet export quality standards.",
    // Product Specifications
    "product.vanilla.varian": "Planifolia",
    "product.vanilla.gradeAPlus.grade": "Gourmet Premium A+",
    "product.vanilla.gradeAPlus.moisture": "30-35%",
    "product.vanilla.gradeAPlus.length": "20-25 cm",
    "product.vanilla.gradeAPlus.texture": "Moist, pliable, meaty (flexible, not easily broken)",
    "product.vanilla.gradeAPlus.defect": "≤2%",
    "product.vanilla.gradeAPlus.appearance": "Deep black colour, glossy and very oily surface",
    "product.vanilla.gradeAPlus.aroma": "Intense, creamy, sweet-complex",
    "product.vanilla.gradeAPlus.packaging": "Vacuum-sealed",
    "product.vanilla.gradeA.grade": "Grade A",
    "product.vanilla.gradeA.moisture": "25-30%",
    "product.vanilla.gradeA.length": "16-20 cm",
    "product.vanilla.gradeA.texture": "Moist, oily, pliable",
    "product.vanilla.gradeA.defect": "≤5%",
    "product.vanilla.gradeA.appearance": "Dark brown colour and oily surface",
    "product.vanilla.gradeA.aroma": "Strong, sweet-creamy",
    "product.vanilla.gradeA.packaging": "Vacuum-sealed",
    "product.pepper.grade": "Grade A",
    "product.pepper.type": "Whole peppercorns",
    "product.pepper.size": "3,5mm-4,5mm",
    "product.pepper.moisture": "12-13%",
    "product.pepper.garbledLevel": "550",
    "product.pepper.appearance": "Black, glossy, uniform",
    "product.pepper.packaging": "60kg bags",
  },
  id: {
    // Navigation
    "nav.home": "Beranda",
    "nav.about": "Tentang Kami",
    "nav.products": "Produk",
    "nav.portfolio": "Portofolio",
    "nav.documentation": "Dokumentasi",
    "nav.contact": "Kontak",
    "nav.getQuote": "Dapatkan Penawaran",
    "nav.skip": "Lewati ke konten",
    "nav.tagline": "Eksportir Hasil Alam Indonesia",

    // Home Page
    "home.hero.eyebrow": "Eksportir Indonesia Tepercaya",
    "home.hero.title": "Vanilla & Lada Hitam Indonesia untuk Buyer Global",
    "home.hero.subtitle":
      "Pasokan siap ekspor dengan asal-usul terverifikasi, quality assurance, dan logistik yang andal.",
    "home.hero.viewCatalog": "Lihat Katalog",
    "home.hero.getQuote": "Minta Penawaran",
    "home.hero.downloadCatalog": "Unduh Katalog",
    "home.hero.trust1": "Dokumen ekspor siap",
    "home.hero.trust2": "QC & kontrol kadar air",
    "home.hero.trust3": "Asal Terverifikasi",
    "home.hero.imageAlt": "Vanilla dan lada hitam siap ekspor",
    "home.hero.badgeLabel": "Estimasi lead time",
    "home.hero.badgeValue": "21-30 hari FOB",
    "home.highlights.qualityControl": "Rantai Pasokan Terkontrol Kualitas",
    "home.highlights.qualityControlDesc":
      "Standar mutu dari hulu hingga pengiriman dengan dokumentasi lengkap.",
    "home.highlights.documentation": "Dokumentasi Siap Ekspor",
    "home.highlights.documentationDesc":
      "COO, Phytosanitary Certificate, PEB, dan dokumen pendukung tersedia.",
    "home.highlights.suppliers": "Supplier Lokal Terverifikasi",
    "home.highlights.suppliersDesc":
      "Kemitraan dengan produsen dan petani yang sudah melalui proses verifikasi.",
    "home.highlights.capacity": "Kapasitas Produksi Fleksibel",
    "home.highlights.capacityDesc":
      "Skala pasokan dapat disesuaikan sesuai kebutuhan buyer.",
    "home.products.title": "Produk Kami",
    "home.products.subtitle":
      "Temukan pilihan premium produk alami kami yang dikurasi dengan cermat dan diproses sesuai standar internasional.",
    "home.products.learnMore": "Pelajari Lebih Lanjut",
    "home.stats.countries": "Negara tujuan",
    "home.stats.buyers": "Kemitraan buyer",
    "home.stats.volume": "Volume ekspor tahunan (ton)",
    "home.stats.sourcing": "Mitra pemasok",
    "home.assurance.eyebrow": "Alasan buyer global memilih kami",
    "home.assurance.title": "Dibangun untuk pasokan konsisten dan patuh",
    "home.assurance.subtitle":
      "Dari hulu ke pengiriman, kami menyediakan dokumen ekspor, kontrol kualitas, dan dukungan logistik yang buyer internasional butuhkan.",
    "home.assurance.qc": "Grading berbasis QC",
    "home.assurance.qcDesc":
      "Setiap batch diperiksa kadar air, ukuran, dan kualitas visual dengan laporan tertulis.",
    "home.assurance.docs": "Dokumentasi ekspor",
    "home.assurance.docsDesc":
      "COO, phytosanitary, COA, packing list, dan invoice disiapkan sesuai kebutuhan tujuan.",
    "home.assurance.trace": "Traceable sourcing",
    "home.assurance.traceDesc":
      "Kemitraan langsung dengan petani dan UMKM untuk kesinambungan pasokan dan transparansi.",
    "home.assurance.logistics": "Koordinasi logistik",
    "home.assurance.logisticsDesc":
      "Opsi pengiriman fleksibel dengan timeline jelas dan komunikasi proaktif.",
    "home.cta.title": "Siap Bermitra Dengan Kami?",
    "home.cta.subtitle":
      "Hubungi tim kami untuk mendiskusikan kebutuhan Anda dan temukan cara kami dapat melayani Anda.",
    "home.cta.getInTouch": "Hubungi Kami",

    // About Page
    "about.hero.title": "Tentang Berdine Terra Global",
    "about.hero.subtitle":
      "Lahir dari Bumi, Dibangun dengan Kepercayaan.",
    "about.hero.imageAlt": "Tim dan jaringan sourcing Berdine Terra Global",
    "about.whoAreWe": "Siapa Kami",
    "about.whoAreWeText1":
      "Berdine Terra Global adalah eksportir komoditas unggulan dari Indonesia dengan fokus pada vanilla beans dan black pepper. Berlandaskan nilai \"Lahir dari Bumi, Dibangun dengan Kepercayaan\", kami membangun rantai pasok yang menghubungkan kebutuhan buyer internasional dengan kesejahteraan petani lokal.",
    "about.whoAreWeText2":
      "Kami bekerja melalui kemitraan langsung dengan petani untuk memastikan kualitas, ketelusuran, dan keberlanjutan setiap produk. Dengan proses pengolahan terkontrol, quality control terstandarisasi, dan dokumentasi ekspor lengkap, kami menyediakan komoditas yang konsisten dan dapat diandalkan.",
    "about.whoAreWeText3":
      "Tujuan kami yaitu menghadirkan nilai bagi pasar global sekaligus memberi dampak nyata bagi para petani yang menjadi fondasi utama perusahaan ini.",
    "about.byTheNumbers": "BERDINE TERRA GLOBAL",
    "about.countriesServed": "Negara yang Dilayani",
    "about.satisfiedClients": "Klien Puas di Seluruh Dunia",
    "about.tonsExported": "Ton Diekspor Per Tahun",
    "about.mission": "Misi",
    "about.missionText1":
      "Membangun rantai pasok berbasis kepercayaan melalui kemitraan langsung dengan petani.",
    "about.missionText2":
      "Menyediakan vanilla beans dan black pepper dengan kualitas konsisten dan terstandarisasi.",
    "about.missionText3":
      "Menguatkan UMKM pertanian lokal agar mampu bersaing di pasar internasional.",
    "about.missionText4":
      "Memastikan setiap ekspor memenuhi standar dan dokumentasi resmi.",
    "about.missionText5":
      "Mendorong praktik produksi yang berkelanjutan.",
    "about.vision": "Visi",
    "about.visionText":
      "Menjadi eksportir agrikultur tepercaya yang mampu menghadirkan komoditas berkualitas ke pasar global, sekaligus memperkuat kesejahteraan dan kemandirian petani lokal melalui rantai pasok yang transparan, berkelanjutan, dan berintegritas.",
    "about.coreValues": "Nilai-Nilai Inti Kami",
    "about.qualityExcellence": "Kualitas",
    "about.qualityExcellenceDesc":
      "Setiap produk dipilih melalui proses seleksi ketat, termasuk pemeriksaan visual, sortasi grade, dan dokumentasi batch untuk menjamin konsistensi.",
    "about.sustainability": "Keberlanjutan",
    "about.sustainabilityDesc":
      "Kami bekerja dengan pemasok lokal menggunakan prinsip fair partnership untuk menciptakan manfaat ekonomi yang merata dari hulu ke hilir.",
    "about.reliability": "Keandalan",
    "about.reliabilityDesc":
      "Komunikasi jelas, pengiriman tepat waktu, dan pemenuhan spesifikasi menjadi fokus utama kami dalam membangun kepercayaan buyer internasional.",
    "about.innovation": "Pengembangan Pasar",
    "about.innovationDesc":
      "Kami aktif mengidentifikasi peluang pasar baru dan menyesuaikan produk berdasarkan tren permintaan global.",
    "about.certifications": "Standar & Dokumentasi",
    "about.organicCertified": "Certificate of Analysis (COA)",
    "about.organicCertifiedDesc":
      "Dokumen hasil uji laboratorium yang memastikan produk memenuhi spesifikasi dan standar yang berkualitas.",
    "about.fairTrade": "Quality Inspection / QC Report",
    "about.fairTradeDesc":
      "Laporan inspeksi dan kontrol kualitas yang mencatat kondisi, spesifikasi, dan kepatuhan produk sebelum pengiriman.",
    "about.isoCompliant": "Export Documentation",
    "about.isoCompliantDesc":
      "Mencakup Packing List, Commercial Invoice, Phytosanitary dan COO (Certificate of Origin)",

    // Compliance & Certifications
    "about.compliance.title": "Kepatuhan & Sertifikasi",
    "about.compliance.subtitle": "Pengaturan sertifikasi fleksibel berdasarkan persyaratan pasar Anda",
    "about.compliance.text":
      "Kami adalah perusahaan Indonesia yang terdaftar secara resmi. Sertifikasi produk dan persyaratan kepatuhan tambahan dapat diatur berdasarkan kebutuhan pembeli dan persyaratan pasar tujuan. Dokumentasi COA/QC dapat disediakan per batch sesuai permintaan.",

    // Quality Control Workflow
    "about.qcWorkflow.title": "Alur Kontrol Kualitas",
    "about.qcWorkflow.subtitle": "Proses 5 langkah kami memastikan kualitas konsisten dari petani hingga pengiriman",
    "about.qcWorkflow.step1": "Pengadaan & Ketertelusuran",
    "about.qcWorkflow.step1Desc": "Kemitraan langsung dengan petani terverifikasi memastikan transparansi asal-usul penuh dan praktik pengadaan berkelanjutan",
    "about.qcWorkflow.step2": "Penyortiran & Penilaian",
    "about.qcWorkflow.step2Desc": "Pemeriksaan visual profesional dan klasifikasi berdasarkan ukuran, kadar kelembaban, dan standar tingkat kualitas",
    "about.qcWorkflow.step3": "Kontrol Kelembaban & Persiapan Batch",
    "about.qcWorkflow.step3Desc": "Fasilitas pengeringan dan penyimpanan terkontrol untuk memenuhi spesifikasi ekspor yang tepat dan mencegah kerusakan",
    "about.qcWorkflow.step4": "Pengemasan (Vakum/Kantong)",
    "about.qcWorkflow.step4Desc": "Pengemasan profesional menggunakan penyegelan vakum atau kantong khusus untuk mempertahankan kualitas selama transit internasional",
    "about.qcWorkflow.step5": "QC Pra-pengiriman + COA (sesuai permintaan)",
    "about.qcWorkflow.step5Desc": "Inspeksi kualitas akhir dengan dokumentasi terperinci dan Certificate of Analysis tersedia untuk semua pembeli",

    // Key Capabilities
    "about.capabilities.title": "Kemampuan Utama",
    "about.capabilities.subtitle": "Informasi penting untuk perencanaan pengadaan dan logistik",
    "about.capabilities.port": "FOB Pelabuhan Panjang (Lampung)",
    "about.capabilities.portDesc": "Gerbang ekspor utama dengan bea cukai yang efisien dan penanganan kontainer",
    "about.capabilities.leadTime": "Lead time 1–3 minggu",
    "about.capabilities.leadTimeDesc": "Waktu penyelesaian cepat dari konfirmasi pesanan hingga kesiapan pengiriman",
    "about.capabilities.coa": "COA tersedia",
    "about.capabilities.coaDesc": "Certificate of Analysis disediakan per batch dengan hasil uji laboratorium terperinci",
    "about.capabilities.payment": "T/T & L/C didukung",
    "about.capabilities.paymentDesc": "Syarat pembayaran fleksibel termasuk Telegraphic Transfer dan Letter of Credit",
    "about.capabilities.moq": "MOQ: Vanilla 50 kg, Lada 100 kg",
    "about.capabilities.moqDesc": "Kuantitas pesanan minimum yang dapat diakses cocok untuk pesanan percobaan dan dalam jumlah besar",

    // Products Page
    "products.hero.title": "Katalog Produk",
    "products.hero.subtitle":
      "Jelajahi produk siap ekspor dengan spesifikasi jelas, kisaran harga, dan minimum order.",
    "products.hero.imageAlt": "Katalog produk Berdine Terra Global",
    "products.filter.all": "Semua Produk",
    "products.filter.vanilla": "Vanilla Beans",
    "products.filter.pepper": "Black Pepper",
    "products.price": "Harga",
    "products.minOrder": "Pesanan Min",
    "products.availability": "Ketersediaan",
    "products.origin": "Asal",
    "products.varian": "Varian",
    "products.grade": "Grade",
    "products.specifications": "Spesifikasi",
    "products.requestQuote": "Minta Penawaran",
    "products.downloadSpecs": "Unduh Spesifikasi",
    "products.priceList": "Dokumentasi & Panduan",
    "products.priceListSubtitle":
      "Sumber daya komprehensif untuk membantu Anda memahami produk, proses pemesanan, dan praktik terbaik kami.",
    "products.downloadPriceList": "Unduh Katalog",
    "products.viewDocumentation": "Lihat Dokumentasi",

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
    "documentation.hero.imageAlt": "Dokumentasi ekspor dan panduan buyer",
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
    "documentation.paymentTerms": "Syarat Pembayaran",
    "documentation.paymentTermsSubtitle": "Opsi pembayaran fleksibel yang disesuaikan dengan kebutuhan bisnis Anda",
    "documentation.payment.tt3070": "T/T 30/70: DP 30%, 70% sebelum loading",
    "documentation.payment.tt5050": "T/T 50/50: DP 50%, 50% sebelum loading",
    "documentation.payment.ttFull": "T/T Full Payment: pembayaran penuh sebelum produksi/pengiriman",
    "documentation.payment.lc": "L/C: tersedia (tergantung kesepakatan)",
    "documentation.samples": "Sampel",
    "documentation.samplesSubtitle": "Minta sampel produk untuk evaluasi kualitas",
    "documentation.samplesDesc": "Sampel dapat diatur berdasarkan permintaan. Biaya kurir dan ketersediaan sampel tergantung pada produk dan tujuan. Silakan hubungi kami dengan alamat pengiriman dan spesifikasi yang diperlukan.",
    "documentation.openGuide": "Buka Panduan",
    "documentation.closeGuide": "Tutup Panduan",
    "documentation.cta.title": "Butuh penawaran atau COA?",
    "documentation.cta.subtitle": "Tim ekspor kami siap memberikan penawaran terperinci dan sertifikat analisis.",
    "documentation.cta.requestQuote": "Minta Penawaran",
    "documentation.cta.contactTeam": "Hubungi Tim Ekspor",

    // Documentation Guides
    "documentation.guide1.title": "Panduan Pemilihan Vanilla Beans",
    "documentation.guide1.description": "Pelajari cara memilih dan mengklasifikasikan vanilla beans, memahami indikator kualitas, dan praktik penyimpanan terbaik.",
    "documentation.guide1.topic1": "Klasifikasi sesuai Grade",
    "documentation.guide1.topic2": "Indikator kualitas visual",
    "documentation.guide1.topic3": "Penilaian aroma",
    "documentation.guide1.topic4": "Kondisi penyimpanan yang tepat",
    "documentation.guide1.topic5": "Umur simpan dan penanganan",
    "documentation.guide1.detail1": "Grade A+ (Gourmet Premium): Panjang 20-25cm, kadar air 30-35%, warna hitam pekat, permukaan sangat berminyak, aroma creamy intens. Terbaik untuk kuliner premium dan produksi ekstrak.",
    "documentation.guide1.detail2": "Grade A: Panjang 16-20cm, kadar air 25-30%, warna coklat gelap, tekstur berminyak, aroma sweet-creamy kuat. Ideal untuk industri makanan & minuman serta aplikasi flavoring.",
    "documentation.guide1.detail3": "Kualitas Visual: Cari warna seragam, tanpa belahan atau retakan, tekstur fleksibel (tidak rapuh), permukaan mengkilap dengan kandungan minyak terlihat.",
    "documentation.guide1.detail4": "Penyimpanan: Simpan dalam wadah kedap udara, tempat gelap sejuk (15-20°C), hindari sinar matahari langsung. Beans yang disimpan dengan benar dapat bertahan 1-2 tahun.",
    "documentation.guide1.detail5": "Penanganan: Selalu gunakan tangan atau alat yang bersih dan kering. Hindari paparan kelembaban. Kemasan vakum direkomendasikan untuk penyimpanan jangka panjang.",
    "documentation.guide2.title": "Panduan Pemilihan Lada Hitam",
    "documentation.guide2.description": "Panduan komprehensif tentang varietas lada hitam, metode pengolahan, dan standar kualitas.",
    "documentation.guide2.topic1": "Varietas lada dan asal",
    "documentation.guide2.topic2": "Metode pengolahan",
    "documentation.guide2.topic3": "Tingkat kepedasan (Scoville)",
    "documentation.guide2.topic4": "Standar grading",
    "documentation.guide2.topic5": "Aplikasi dan penggunaan",
    "documentation.guide2.detail1": "Asal Indonesia: Lada hitam kami berasal dari petani Indonesia, dikenal dengan kepedasan kuat dan aroma khas. Ukuran biasanya 3,5-4,5mm dengan kualitas konsisten.",
    "documentation.guide2.detail2": "Pengolahan: Biji lada utuh dijemur matahari, dibersihkan dan disortir dengan hati-hati. Kadar air dijaga pada 12-13% untuk preservasi dan rasa optimal.",
    "documentation.guide2.detail3": "Standar Kualitas: Kualitas Grade A, garbled level 550, tampilan hitam mengkilap seragam, bebas dari bahan asing dan cacat.",
    "documentation.guide2.detail4": "Kepedasan: Kandungan piperine tinggi memberikan panas pedas tajam. Ideal untuk aplikasi kuliner, pengolahan makanan, dan manufaktur rempah.",
    "documentation.guide2.detail5": "Penyimpanan & Umur Simpan: Simpan dalam kondisi sejuk dan kering dalam wadah tertutup. Biji lada utuh yang disimpan dengan benar dapat bertahan 2-3 tahun.",
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
    "documentation.guide4.detail1": "Kuantitas Pesanan Minimum: Vanilla beans minimal 50kg, Lada hitam minimal 100kg. Untuk volume lebih besar, silakan hubungi kami untuk pengaturan khusus.",
    "documentation.guide4.detail2": "Syarat Pembayaran: Kami menerima T/T (30/70, 50/50, atau pembayaran penuh), L/C (tergantung kesepakatan). Syarat pembayaran dapat dinegosiasikan berdasarkan volume pesanan dan hubungan.",
    "documentation.guide4.detail3": "Opsi Pengiriman: Tersedia syarat FOB dan EXW. Pengiriman laut (2-4 minggu) atau udara (3-7 hari) tergantung urgensi dan tujuan.",
    "documentation.guide4.detail4": "Dokumentasi: Kami menyediakan dokumentasi ekspor lengkap termasuk Certificate of Origin (COO), Phytosanitary Certificate, Certificate of Analysis (COA), Packing List, dan Commercial Invoice.",
    "documentation.guide4.detail5": "Waktu Lead: Waktu lead tipikal 21-30 hari FOB dari konfirmasi pesanan hingga pengiriman, tergantung ketersediaan produk dan ukuran pesanan. Pemrosesan dipercepat tersedia untuk pesanan mendesak.",

    // Documentation FAQ
    "documentation.faq1.question": "Berapa kuantitas pesanan minimum?",
    "documentation.faq1.answer": "Kuantitas pesanan minimum bervariasi per produk. Vanilla beans 50kg dan Black pepper 100kg. Kami dapat mendiskusikan pengaturan khusus untuk pesanan yang lebih besar.",
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
    "contact.hero.imageAlt": "Kontak dan dukungan Berdine Terra Global",
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
    "contact.businessHours.monFri": "Senin - Jumat : 9:00 AM - 6:00 PM",
    "contact.businessHours.sat": "Sabtu : 10:00 AM - 4:00 PM",
    "contact.businessHours.sun": "Minggu : Tutup",
    "contact.location": "Lokasi Kami",
    "contact.orContactVia": "Atau hubungi kami via",
    "contact.contactWhatsApp": "Hubungi via WhatsApp",

    // Footer
    "footer.companyDesc":
      "Produk alami Indonesia siap ekspor untuk buyer global, fokus pada vanilla beans dan black pepper.",
    "footer.quickLinks": "Tautan Cepat",
    "footer.resources": "Sumber Daya",
    "footer.documentation": "Dokumentasi",
    "footer.specifications": "Spesifikasi",
    "footer.faq": "FAQ",
    "footer.shipping": "Pengiriman & Incoterms",
    "footer.trust.docReady": "Dokumen ekspor siap",
    "footer.trust.qc": "Laporan QC",
    "footer.trust.traceable": "Traceable sourcing",
    "footer.trust.global": "Pengiriman global",
    "footer.privacyPolicy": "Kebijakan Privasi",
    "footer.termsOfService": "Syarat Layanan",
    "footer.allRightsReserved": "Semua hak dilindungi.",

    // Product Names & Descriptions
    "product.vanilla.gradeAPlus": "Vanilla Utuh Premium Gourmet A+",
    "product.vanilla.gradeAPlusDesc":
      "Vanilla Planifolia Indonesia berkualitas tertinggi (Gourmet A+) dengan aroma yang intens, creamy, manis, dan sangat kaya. Dipetik secara manual dari buah yang paling matang dan melalui proses pengeringan yang sangat selektif. Setiap pod dipilih secara manual berdasarkan panjang, kandungan minyak, tekstur, dan kesempurnaan visual. Pengeringan yang lebih lama dan pengendalian kelembapan yang lebih ketat menghasilkan pod yang sangat berminyak, berkilau, dan berdaging. Ideal untuk produk yang membutuhkan kejernihan rasa dan intensitas aroma yang tinggi.",
    "product.vanilla.gradeA": "Vanilla Utuh Grade A",
    "product.vanilla.gradeADesc":
      "Vanilla Planifolia Indonesia Grade A merupakan produk ekspor berkualitas premium yang diolah melalui proses pengeringan profesional untuk menghasilkan aroma manis dan creamy yang kuat dengan karakter rasa yang stabil. Polongnya panjang dengan permukaan berminyak dan warna cokelat gelap-hitam yang seragam. Teksturnya lembap dan lentur, menjadikannya ideal untuk industri makanan dan minuman, ekstraksi rasa, serta produk lainnya.",
    "product.pepper.whole": "Lada Hitam",
    "product.pepper.wholeDesc":
      "Biji Lada Hitam Indonesia memiliki aroma pedas yang kuat dan rasa pedas yang tajam, menjadikannya ideal untuk penggunaan kuliner, pengolahan makanan, dan produksi rempah-rempah. Dihasilkan melalui proses pengeringan dan pembersihan yang teliti untuk memenuhi standar kualitas ekspor.",

    // Product Specifications
    "product.vanilla.origin": "Indonesia",
    "product.vanilla.varian": "Planifolia",
    "product.vanilla.gradeAPlus.grade": "Premium Gourmet A+",
    "product.vanilla.gradeAPlus.moisture": "30-35%",
    "product.vanilla.gradeAPlus.length": "20-25 cm",
    "product.vanilla.gradeAPlus.texture": "Lembab, lentur, berdaging (fleksibel, tidak mudah patah)",
    "product.vanilla.gradeAPlus.defect": "≤2%",
    "product.vanilla.gradeAPlus.appearance": "Warna hitam pekat, permukaan berkilau dan sangat berminyak",
    "product.vanilla.gradeAPlus.aroma": "Aroma vanila kuat dan creamy",
    "product.vanilla.gradeAPlus.packaging": "Dikemas vakum",
    "product.vanilla.gradeA.grade": "Grade A",
    "product.vanilla.gradeA.moisture": "25-30%",
    "product.vanilla.gradeA.length": "16-20 cm",
    "product.vanilla.gradeA.texture": "Lembap, berminyak, lentur",
    "product.vanilla.gradeA.defect": "≤5%",
    "product.vanilla.gradeA.appearance": "Warna coklat gelap dan berminyak",
    "product.vanilla.gradeA.aroma": "Aroma vanila yang kaya dan kompleks",
    "product.vanilla.gradeA.packaging": "Dikemas vakum",
    "product.pepper.origin": "Indonesia",
    "product.pepper.grade": "Grade A",
    "product.pepper.type": "Biji lada utuh",
    "product.pepper.size": "3,5mm-4,5mm",
    "product.pepper.moisture": "12-13%",
    "product.pepper.garbledLevel": "550",
    "product.pepper.appearance": "Hitam, berkilau, seragam",
    "product.pepper.packaging": "Kantong 60kg",
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

export type Language = "en" | "ar";

export const translations = {
  en: {
    // Navigation
    nav: {
      collection: "Collection",
      services: "Services",
      process: "Process",
      about: "About",
      contact: "Contact",
      bookConsultation: "Book Consultation",
    },
    // Hero Section
    hero: {
      tagline: "Premium Natural Stone • Dubai",
      title1: "From Quarry",
      title2: "to Kitchen",
      subtitle: "Exclusive Italian, Spanish, and Brazilian marble & granite slabs for residential and commercial projects. Precision CNC fabrication. Installed in your Dubai space within days.",
      cta1: "Visit Our Showroom",
      cta2: "View Collection",
      scroll: "Scroll",
    },
    // Collection Section
    collection: {
      tagline: "Our Collection",
      title1: "Curated",
      title2: "Stone",
      bestFor: "Best For",
      viewInventory: "View Full Inventory",
      inventoryNote: "Over 500 exclusive slabs in stock. Visit our showroom to choose your exact piece.",
      stones: {
        calacatta: {
          name: "Calacatta Borghini",
          description: "White canvas with bold gold and gray veining. The ultimate statement piece.",
          bestFor: "Grand Kitchen Islands",
        },
        statuario: {
          name: "Statuario",
          description: "Luminous white background with soft, elegant gray veins. Timeless sophistication.",
          bestFor: "Modern Minimalist Kitchens",
        },
        neroMarquina: {
          name: "Nero Marquina",
          description: "Dramatic black with striking white veining. Bold contrast for the contemporary space.",
          bestFor: "Statement Backsplashes",
        },
        leatheredGranite: {
          name: "Leathered Granite",
          description: "Textured matte finish that hides fingerprints. Practical luxury for busy spaces.",
          bestFor: "High-Traffic Areas",
        },
      },
    },
    // Projects Section
    projects: {
      tagline: "Our Projects",
      title1: "Residential &",
      title2: "Commercial",
      residential: "Residential",
      commercial: "Commercial",
      residentialDesc: "Transform your home with the timeless elegance of natural stone. From luxury villas to modern apartments.",
      commercialDesc: "Elevate your business space with stunning marble installations. Hotels, restaurants, and corporate offices.",
      viewMore: "View More Projects",
    },
    // Portfolio Section
    portfolio: {
      tagline: "Our Portfolio",
      title1: "Completed",
      title2: "Projects",
      subtitle: "Explore our portfolio of completed marble installations across Dubai's most prestigious properties.",
      filterAll: "All Projects",
      filterResidential: "Residential",
      filterCommercial: "Commercial",
      projects: {
        villaKitchen: {
          title: "Luxury Villa Kitchen",
          description: "A stunning Calacatta Gold marble kitchen with waterfall island and full-height backsplash.",
          location: "Palm Jumeirah, Dubai",
          stone: "Calacatta Gold",
        },
        penthouseBath: {
          title: "Penthouse Master Suite",
          description: "Floor-to-ceiling Statuario marble bathroom with city skyline views.",
          location: "Downtown Dubai",
          stone: "Statuario Marble",
        },
        officeLobby: {
          title: "Corporate Headquarters",
          description: "Dramatic Nero Marquina marble reception and elevator lobbies.",
          location: "DIFC, Dubai",
          stone: "Nero Marquina",
        },
        restaurant: {
          title: "Fine Dining Restaurant",
          description: "Elegant marble bar and dining area with gold accents.",
          location: "Dubai Marina",
          stone: "Calacatta Borghini",
        },
        hotelReception: {
          title: "Boutique Hotel",
          description: "Grand reception with bookmatched feature wall and marble staircase.",
          location: "Jumeirah, Dubai",
          stone: "Arabescato Orobico",
        },
        villaFlooring: {
          title: "Mediterranean Estate",
          description: "Crema Marfil flooring throughout with custom medallion inlays.",
          location: "Emirates Hills",
          stone: "Crema Marfil",
        },
        spaWellness: {
          title: "Private Spa & Wellness",
          description: "Serene Thassos marble steam room and relaxation areas.",
          location: "Al Barari, Dubai",
          stone: "Thassos White",
        },
      },
    },
    // Services Section
    services: {
      tagline: "Our Services",
      title1: "Crafted for",
      title2: "Distinction",
      subtitle: "From template to installation, every surface is crafted with meticulous attention to detail in our Dubai-based fabrication facility.",
      cncNote: "CNC Precision",
      items: {
        countertops: {
          title: "Kitchen Countertops",
          description: "Precision-fabricated marble and granite surfaces with flawless seams. Available in polished, honed, or leathered finishes.",
        },
        islands: {
          title: "Waterfall Islands",
          description: "Bookmatched slabs flowing elegantly from surface to floor. The centerpiece your kitchen deserves.",
        },
        backsplashes: {
          title: "Full-Height Backsplashes",
          description: "Jumbo slabs spanning counter to ceiling. Minimal seams, maximum visual impact.",
        },
        vanities: {
          title: "Bathroom Vanities",
          description: "Transform your ensuite into a spa retreat. Custom vessel sink cutouts and integrated basins available.",
        },
      },
    },
    // Process Section
    process: {
      tagline: "Our Process",
      title1: "Quarry to",
      title2: "Kitchen",
      steps: {
        consultation: {
          title: "Consultation & Slab Selection",
          description: "Visit our slab yard and choose your exact piece. Our experts guide you through origins, veining patterns, and finish options.",
        },
        templating: {
          title: "Digital Templating",
          description: "Our technicians visit your site with laser measurement tools. Sub-millimeter precision ensures perfect fit.",
        },
        fabrication: {
          title: "CNC Fabrication",
          description: "Your slab is precision-cut with CNC technology. Edge profiles from Ogee to Half-Bullnose, fabricated to specification.",
        },
        installation: {
          title: "White-Glove Installation",
          description: "Our master installers deliver and install your countertops. Full cleanup and care instructions included.",
        },
      },
    },
    // Why Choose Us Section
    whyUs: {
      tagline: "Why Choose Us",
      title1: "The",
      title2: "Difference",
      subtitle: "Local fabrication, global sourcing. We combine the world's finest natural stone with Dubai-based precision manufacturing.",
      features: {
        slabs: {
          title: "Jumbo Slabs",
          stat: "3.2m",
          description: "Maximum slab width available, reducing seams on large islands",
        },
        turnaround: {
          title: "Fast Turnaround",
          stat: "7-10",
          unit: "Days",
          description: "From template to installation for standard projects",
        },
        warranty: {
          title: "Quality Guarantee",
          stat: "10",
          unit: "Years",
          description: "Warranty on fabrication and installation workmanship",
        },
        origins: {
          title: "Premium Origins",
          stat: "50+",
          description: "Exclusive quarry partnerships across three continents",
        },
      },
    },
    // Contact Section
    contact: {
      tagline: "Get in Touch",
      title1: "Begin Your",
      title2: "Journey",
      subtitle: "Schedule a private consultation at our showroom. Walk among hundreds of exclusive stones and choose the perfect piece for your space.",
      showroom: "Showroom",
      phone: "Phone",
      email: "Email",
      hours: "Open Saturday - Thursday, 9AM - 6PM",
      form: {
        title: "Request a Consultation",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        phone: "Phone Number",
        project: "Project Details",
        projectPlaceholder: "Tell us about your project...",
        submit: "Schedule Visit",
        captchaError: "Please complete the captcha",
        success: "Thank you! We'll contact you shortly.",
      },
    },
    // Footer
    footer: {
      description: "Oasis Marble Interiors - Dubai's premier destination for luxury natural stone countertops for residential and commercial spaces. From quarry to installation, we craft distinction.",
      quickLinks: "Quick Links",
      stoneTypes: "Stone Types",
      stones: {
        italian: "Italian Marble",
        spanish: "Spanish Marble",
        brazilian: "Brazilian Granite",
        quartz: "Engineered Quartz",
      },
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      copyright: "All rights reserved.",
    },
    // Chat Widget
    chat: {
      title: "Chat with Us",
      placeholder: "Ask about our marble services...",
      send: "Send",
      greeting: "Hello! How can I help you with your marble project today?",
      typing: "Typing...",
      error: "Sorry, something went wrong. Please try again.",
      rateLimit: "Please wait a moment before sending another message.",
    },
    // WhatsApp
    whatsapp: {
      message: "Hello! I'm interested in your marble services.",
    },
  },
  ar: {
    // Navigation
    nav: {
      collection: "المجموعة",
      services: "الخدمات",
      process: "المراحل",
      about: "من نحن",
      contact: "اتصل بنا",
      bookConsultation: "احجز استشارة",
    },
    // Hero Section
    hero: {
      tagline: "أحجار طبيعية فاخرة • دبي",
      title1: "من المحجر",
      title2: "إلى المطبخ",
      subtitle: "ألواح رخام وجرانيت إيطالية وإسبانية وبرازيلية حصرية للمشاريع السكنية والتجارية. تصنيع دقيق بتقنية CNC. التركيب في مساحتك بدبي خلال أيام.",
      cta1: "زيارة صالة العرض",
      cta2: "عرض المجموعة",
      scroll: "مرر للأسفل",
    },
    // Collection Section
    collection: {
      tagline: "مجموعتنا",
      title1: "أحجار",
      title2: "مختارة",
      bestFor: "مثالي لـ",
      viewInventory: "عرض المخزون الكامل",
      inventoryNote: "أكثر من 500 لوح حصري في المخزون. زر صالة العرض لاختيار قطعتك.",
      stones: {
        calacatta: {
          name: "كالاكاتا بورغيني",
          description: "لوحة بيضاء مع عروق ذهبية ورمادية جريئة. قطعة مميزة بامتياز.",
          bestFor: "جزر المطبخ الكبيرة",
        },
        statuario: {
          name: "ستاتواريو",
          description: "خلفية بيضاء مضيئة مع عروق رمادية ناعمة وأنيقة. أناقة خالدة.",
          bestFor: "المطابخ العصرية البسيطة",
        },
        neroMarquina: {
          name: "نيرو ماركينا",
          description: "أسود درامي مع عروق بيضاء لافتة. تباين جريء للمساحات المعاصرة.",
          bestFor: "جدران المطبخ المميزة",
        },
        leatheredGranite: {
          name: "جرانيت مصقول",
          description: "لمسة نهائية مطفية تخفي البصمات. فخامة عملية للمساحات المزدحمة.",
          bestFor: "المناطق عالية الحركة",
        },
      },
    },
    // Projects Section
    projects: {
      tagline: "مشاريعنا",
      title1: "سكني و",
      title2: "تجاري",
      residential: "سكني",
      commercial: "تجاري",
      residentialDesc: "حوّل منزلك بأناقة الأحجار الطبيعية الخالدة. من الفيلات الفاخرة إلى الشقق العصرية.",
      commercialDesc: "ارتقِ بمساحة عملك بتركيبات رخامية مذهلة. الفنادق والمطاعم والمكاتب.",
      viewMore: "عرض المزيد من المشاريع",
    },
    // Portfolio Section
    portfolio: {
      tagline: "معرض أعمالنا",
      title1: "مشاريع",
      title2: "منجزة",
      subtitle: "استكشف معرض أعمالنا من تركيبات الرخام في أرقى عقارات دبي.",
      filterAll: "جميع المشاريع",
      filterResidential: "سكني",
      filterCommercial: "تجاري",
      projects: {
        villaKitchen: {
          title: "مطبخ فيلا فاخرة",
          description: "مطبخ رخام كالاكاتا الذهبي مع جزيرة شلال وجدار كامل الارتفاع.",
          location: "نخلة جميرا، دبي",
          stone: "كالاكاتا الذهبي",
        },
        penthouseBath: {
          title: "جناح البنتهاوس الرئيسي",
          description: "حمام رخام ستاتواريو من الأرض للسقف مع إطلالة على المدينة.",
          location: "وسط دبي",
          stone: "رخام ستاتواريو",
        },
        officeLobby: {
          title: "المقر الرئيسي للشركة",
          description: "استقبال مثير من رخام نيرو ماركينا وردهات المصاعد.",
          location: "مركز دبي المالي",
          stone: "نيرو ماركينا",
        },
        restaurant: {
          title: "مطعم فاخر",
          description: "بار ومنطقة طعام رخامية أنيقة بلمسات ذهبية.",
          location: "دبي مارينا",
          stone: "كالاكاتا بورغيني",
        },
        hotelReception: {
          title: "فندق بوتيكي",
          description: "استقبال فخم مع جدار مميز ودرج رخامي.",
          location: "جميرا، دبي",
          stone: "أرابيسكاتو أوروبيكو",
        },
        villaFlooring: {
          title: "قصر متوسطي",
          description: "أرضيات كريما مارفيل مع ميداليات مخصصة.",
          location: "تلال الإمارات",
          stone: "كريما مارفيل",
        },
        spaWellness: {
          title: "سبا وعافية خاص",
          description: "غرفة بخار وصالات استرخاء من رخام ثاسوس.",
          location: "البراري، دبي",
          stone: "ثاسوس الأبيض",
        },
      },
    },
    // Services Section
    services: {
      tagline: "خدماتنا",
      title1: "صُنعت من أجل",
      title2: "التميز",
      subtitle: "من القياس إلى التركيب، كل سطح يُصنع بعناية فائقة في منشأتنا للتصنيع في دبي.",
      cncNote: "دقة CNC",
      items: {
        countertops: {
          title: "أسطح المطبخ",
          description: "أسطح رخام وجرانيت مصنعة بدقة مع وصلات سلسة. متوفرة بلمعة مصقولة أو غير لامعة أو مطفية.",
        },
        islands: {
          title: "جزر شلال",
          description: "ألواح متطابقة تتدفق بأناقة من السطح إلى الأرض. قطعة مركزية يستحقها مطبخك.",
        },
        backsplashes: {
          title: "جدران كاملة الارتفاع",
          description: "ألواح ضخمة تمتد من الكاونتر إلى السقف. وصلات قليلة، تأثير بصري أقصى.",
        },
        vanities: {
          title: "أحواض الحمام",
          description: "حوّل حمامك إلى ملاذ سبا. قطع مخصصة للأحواض المدمجة والمنفصلة.",
        },
      },
    },
    // Process Section
    process: {
      tagline: "عمليتنا",
      title1: "من المحجر",
      title2: "إلى المطبخ",
      steps: {
        consultation: {
          title: "الاستشارة واختيار اللوح",
          description: "زر ساحة الألواح لدينا واختر قطعتك بالضبط. خبراؤنا يرشدونك خلال الأصول وأنماط العروق وخيارات اللمسة النهائية.",
        },
        templating: {
          title: "القياس الرقمي",
          description: "يزور فنيونا موقعك بأدوات قياس ليزرية. دقة تحت الملليمتر تضمن ملاءمة مثالية.",
        },
        fabrication: {
          title: "التصنيع بتقنية CNC",
          description: "يُقطع لوحك بدقة بتقنية CNC. حواف من Ogee إلى Half-Bullnose، مصنعة حسب المواصفات.",
        },
        installation: {
          title: "تركيب فاخر",
          description: "مُركبونا الخبراء يوصلون ويركبون أسطحك. تنظيف كامل وتعليمات العناية متضمنة.",
        },
      },
    },
    // Why Choose Us Section
    whyUs: {
      tagline: "لماذا نحن",
      title1: "الفرق",
      title2: "الذي نقدمه",
      subtitle: "تصنيع محلي، مصادر عالمية. نجمع بين أفضل الأحجار الطبيعية في العالم والتصنيع الدقيق في دبي.",
      features: {
        slabs: {
          title: "ألواح ضخمة",
          stat: "٣.٢م",
          description: "أقصى عرض للوح متاح، يقلل الوصلات في الجزر الكبيرة",
        },
        turnaround: {
          title: "سرعة التنفيذ",
          stat: "٧-١٠",
          unit: "أيام",
          description: "من القياس إلى التركيب للمشاريع القياسية",
        },
        warranty: {
          title: "ضمان الجودة",
          stat: "١٠",
          unit: "سنوات",
          description: "ضمان على التصنيع والتركيب",
        },
        origins: {
          title: "أصول فاخرة",
          stat: "+٥٠",
          description: "شراكات حصرية مع محاجر في ثلاث قارات",
        },
      },
    },
    // Contact Section
    contact: {
      tagline: "تواصل معنا",
      title1: "ابدأ",
      title2: "رحلتك",
      subtitle: "احجز استشارة خاصة في صالة العرض. تجول بين مئات الأحجار الحصرية واختر القطعة المثالية لمساحتك.",
      showroom: "صالة العرض",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      hours: "مفتوح السبت - الخميس، ٩ صباحاً - ٦ مساءً",
      form: {
        title: "طلب استشارة",
        firstName: "الاسم الأول",
        lastName: "اسم العائلة",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        project: "تفاصيل المشروع",
        projectPlaceholder: "أخبرنا عن مشروعك...",
        submit: "حجز زيارة",
        captchaError: "يرجى إكمال التحقق",
        success: "شكراً! سنتواصل معك قريباً.",
      },
    },
    // Footer
    footer: {
      description: "أواسيس ماربل إنتيريورز - الوجهة الأولى في دبي للأحجار الطبيعية الفاخرة للمساحات السكنية والتجارية. من المحجر إلى التركيب، نصنع التميز.",
      quickLinks: "روابط سريعة",
      stoneTypes: "أنواع الأحجار",
      stones: {
        italian: "رخام إيطالي",
        spanish: "رخام إسباني",
        brazilian: "جرانيت برازيلي",
        quartz: "كوارتز صناعي",
      },
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      copyright: "جميع الحقوق محفوظة.",
    },
    // Chat Widget
    chat: {
      title: "تحدث معنا",
      placeholder: "اسأل عن خدمات الرخام لدينا...",
      send: "إرسال",
      greeting: "مرحباً! كيف يمكنني مساعدتك في مشروع الرخام الخاص بك اليوم؟",
      typing: "جاري الكتابة...",
      error: "عذراً، حدث خطأ. يرجى المحاولة مرة أخرى.",
      rateLimit: "يرجى الانتظار قليلاً قبل إرسال رسالة أخرى.",
    },
    // WhatsApp
    whatsapp: {
      message: "مرحباً! أنا مهتم بخدمات الرخام لديكم.",
    },
  },
};

export type TranslationKey = typeof translations.en;

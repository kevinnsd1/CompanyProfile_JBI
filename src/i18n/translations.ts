export type Lang = 'ID' | 'EN' | 'CN';

export const translations = {
  // ============ NAVIGATION ============
  nav: {
    BERANDA: { ID: 'BERANDA', EN: 'HOME', CN: '首页' },
    TENTANG: { ID: 'TENTANG', EN: 'ABOUT', CN: '关于我们' },
    PRODUK: { ID: 'PRODUK', EN: 'PRODUCTS', CN: '产品' },
    KONTAK: { ID: 'KONTAK', EN: 'CONTACT', CN: '联系我们' },
  },

  // ============ HEADER ============
  header: {
    greeting: { ID: 'Selamat datang!', EN: 'Welcome!', CN: '欢迎光临！' },
  },

  // ============ BRAND SUB-HEADER ============
  brandSubHeader: {
    greeting: { ID: 'Selamat datang!', EN: 'Welcome!', CN: '欢迎光临！' },
  },

  // ============ BERANDA (HOME) ============
  home: {
    heroTitle: {
      ID: 'Material Interior & Arsitektural',
      EN: 'Interior & Architectural Materials',
      CN: '室内与建筑材料',
    },
    heroSubtitle: {
      ID: 'Distributor resmi granit, marmer, sanitari, wall panel & keramik premium di Bandung.',
      EN: 'Official distributor of granite, marble, sanitary ware, wall panels & premium ceramics in Bandung.',
      CN: '万隆花岗岩、大理石、卫浴洁具、墙板及优质瓷砖的官方经销商。',
    },
    ctaShowroom: { ID: 'Kunjungi Showroom', EN: 'Visit Showroom', CN: '参观展厅' },
    ctaProducts: { ID: 'Lihat Produk', EN: 'View Products', CN: '查看产品' },
  },

  // ============ TENTANG ============
  tentang: {
    heroTitle: {
      ID: 'Solusi Material Interior & Arsitektural',
      EN: 'Interior & Architectural Material Solutions',
      CN: '室内与建筑材料解决方案',
    },
    heroHighlight: {
      ID: 'Terpercaya & Berkelanjutan',
      EN: 'Trusted & Sustainable',
      CN: '值得信赖 · 可持续发展',
    },
    heroDesc: {
      ID: 'Jaya Bersama Interior (JBI) konsisten hadir sebagai distributor dan penyedia material interior unggulan di Indonesia. Kami menghadirkan koleksi terbaik ',
      EN: 'Jaya Bersama Interior (JBI) consistently serves as a leading interior material distributor in Indonesia. We offer the finest collections of ',
      CN: 'Jaya Bersama Interior（JBI）是印度尼西亚领先的室内建材分销商，提供优质的 ',
    },
    heroDescMaterials: {
      ID: 'Sanitari, Granit, Marmer, Wall Panel, dan Keramik',
      EN: 'Sanitary Ware, Granite, Marble, Wall Panels, and Ceramics',
      CN: '卫浴洁具、花岗岩、大理石、墙板和瓷砖',
    },
    heroDescSuffix: {
      ID: ' berstandarisasi mutu tinggi di Showroom Ruko IBCC Jalan Ahmad Yani Bandung.',
      EN: ' with high quality standards at our IBCC Showroom, Jalan Ahmad Yani Bandung.',
      CN: ' 高品质产品，展厅位于万隆艾哈迈德亚尼街IBCC商铺。',
    },
    ctaWA: { ID: 'Konsultasi via WhatsApp', EN: 'Consult via WhatsApp', CN: '通过WhatsApp咨询' },
    ctaHome: { ID: 'Kembali ke Beranda', EN: 'Back to Home', CN: '返回首页' },

    // Stats section
    statsYears: { ID: '15+ Tahun', EN: '15+ Years', CN: '15年以上' },
    statsYearsLabel: { ID: 'Pengalaman Pengadaan Material', EN: 'Material Procurement Experience', CN: '建材采购经验' },
    statsGuaranteed: { ID: '100% Guaranteed', EN: '100% Guaranteed', CN: '100% 质量保证' },
    statsGuaranteedLabel: { ID: 'Garansi Mutu Resmi Pabrik', EN: 'Official Factory Quality Guarantee', CN: '官方工厂质量保证' },
    statsShowroom: { ID: 'Showroom IBCC', EN: 'IBCC Showroom', CN: 'IBCC展厅' },
    statsShowroomLabel: { ID: 'Ruko IBCC Ahmad Yani Bandung', EN: 'IBCC Ahmad Yani Bandung', CN: '万隆艾哈迈德亚尼IBCC商铺' },
    statsBrand: { ID: '13+ Brand', EN: '13+ Brands', CN: '13个以上品牌' },
    statsBrandLabel: { ID: 'Mitra Resmi Pabrik Terkemuka', EN: 'Certified Factory Partners', CN: '授权工厂合作伙伴' },

    // Product section
    offeringsTitle: { ID: 'PENAWARAN MATERIAL UTAMA', EN: 'KEY MATERIAL OFFERINGS', CN: '主要材料供应' },
    offeringsHeading: { ID: 'Layanan & Produk Unggulan Kami', EN: 'Our Featured Services & Products', CN: '我们的优质服务与产品' },
    offeringsDesc: {
      ID: 'Jaya Bersama Interior menghadirkan 5 lini kategori produk pilihan berkualitas tinggi untuk mendukung keindahan serta keandalan bangunan Anda.',
      EN: 'Jaya Bersama Interior offers 5 premium product categories to support the beauty and durability of your building.',
      CN: 'Jaya Bersama Interior提供5个高品质产品类别，支持您建筑的美观性和耐久性。',
    },
    brandLabel: { ID: 'Merek Terkait:', EN: 'Related Brands:', CN: '相关品牌：' },

    // Showroom CTA
    showroomLabel: { ID: 'LOKASI SHOWROOM KAMI', EN: 'OUR SHOWROOM LOCATION', CN: '我们的展厅位置' },
    showroomTitle: { ID: 'Kunjungi Showroom Ruko IBCC Jalan Ahmad Yani Bandung', EN: 'Visit Our IBCC Showroom at Jalan Ahmad Yani Bandung', CN: '参观我们位于万隆艾哈迈德亚尼街IBCC商铺的展厅' },
    showroomDesc: {
      ID: 'Lihat langsung sampel fisik granit, marmer, sanitari, wall panel, dan keramik di showroom kami: ',
      EN: 'See physical samples of granite, marble, sanitary ware, wall panels, and ceramics at our showroom: ',
      CN: '在我们的展厅亲眼查看花岗岩、大理石、卫浴洁具、墙板和瓷砖实物样品：',
    },
    ctaDirections: { ID: 'Petunjuk Arah Maps', EN: 'Get Directions', CN: '获取导航' },
    ctaEmail: { ID: 'Kirim Email', EN: 'Send Email', CN: '发送邮件' },
  },

  // ============ PRODUK ============
  produk: {
    heroTitle: { ID: 'Koleksi Produk & Brand Pabrik Terkemuka', EN: 'Product Collections & Leading Factory Brands', CN: '产品系列与知名工厂品牌' },
    heroDesc: {
      ID: 'Jaya Bersama Interior bekerja sama secara resmi dengan 13+ manufaktur sanitari, granit tile, marmer, wall panel, dan keramik ternama untuk menjamin garansi mutu dan harga terbaik bagi proyek Anda.',
      EN: 'Jaya Bersama Interior officially partners with 13+ leading sanitary ware, granite tile, marble, wall panel, and ceramic manufacturers to guarantee quality and the best prices for your project.',
      CN: 'Jaya Bersama Interior与13家以上知名卫浴、花岗岩砖、大理石、墙板和瓷砖制造商官方合作，为您的项目提供质量保证和最优价格。',
    },
    searchPlaceholder: { ID: 'Cari brand (contoh: Titanium, AER, Roman, INA)...', EN: 'Search brands (e.g. Titanium, AER, Roman, INA)...', CN: '搜索品牌（例如：Titanium, AER, Roman, INA）...' },
    searchClear: { ID: 'Hapus', EN: 'Clear', CN: '清除' },
    filterAll: { ID: 'Semua Brand (13)', EN: 'All Brands (13)', CN: '全部品牌 (13)' },
    filterGranit: { ID: 'Granit & Marmer', EN: 'Granite & Marble', CN: '花岗岩 & 大理石' },
    filterSanitari: { ID: 'Sanitari & Fittings', EN: 'Sanitary & Fittings', CN: '卫浴洁具 & 配件' },
    filterKeramik: { ID: 'Keramik & Porcelain', EN: 'Ceramics & Porcelain', CN: '瓷砖 & 陶瓷' },
    filterWallPanel: { ID: 'Wall Panel WPC', EN: 'WPC Wall Panel', CN: 'WPC墙板' },
    sizeVariant: { ID: 'Ukuran / Varian:', EN: 'Size / Variant:', CN: '尺寸 / 规格：' },
    askProduct: { ID: 'Tanyakan Produk', EN: 'Inquire About', CN: '咨询产品' },
    noResult: { ID: 'Tidak ada brand yang cocok', EN: 'No matching brands found', CN: '未找到匹配品牌' },
    noResultDesc: { ID: 'Coba sesuaikan kata kunci pencarian atau pilih kategori lain.', EN: 'Try adjusting your search or selecting another category.', CN: '请尝试调整搜索关键词或选择其他类别。' },
    resetFilter: { ID: 'Reset Filter', EN: 'Reset Filters', CN: '重置筛选' },
    showroomBanner: { ID: 'SAMPEL FISIK SHOWROOM', EN: 'SHOWROOM PHYSICAL SAMPLES', CN: '展厅实物样品' },
    showroomTitle: { ID: 'Ingin melihat sampel fisik produk brand ini?', EN: 'Want to see physical product samples?', CN: '想查看品牌产品实物样品？' },
    showroomDesc: { ID: 'Kunjungi Showroom Ruko IBCC Blok D3-6 Bandung untuk konsultasi & perbandingan sampel fisik langsung.', EN: 'Visit our IBCC Blok D3-6 Bandung Showroom for consultation and direct physical sample comparison.', CN: '参观我们位于万隆IBCC D3-6商铺的展厅，进行咨询和实物样品比较。' },
    ctaSales: { ID: 'Hubungi Sales', EN: 'Contact Sales', CN: '联系销售' },
    ctaHome: { ID: 'Beranda', EN: 'Home', CN: '首页' },
  },

  // ============ KONTAK ============
  kontak: {
    heroTitle: { ID: 'Hubungi & Kunjungi', EN: 'Contact & Visit', CN: '联系我们 & 参观' },
    heroHighlight: { ID: 'Showroom Kami', EN: 'Our Showroom', CN: '我们的展厅' },
    heroDesc: {
      ID: 'Tim Jaya Bersama Interior siap melayani konsultasi kebutuhan material Anda. Kunjungi showroom kami di Ruko IBCC Jalan Ahmad Yani Bandung, atau hubungi kami langsung via WhatsApp & Email.',
      EN: 'The Jaya Bersama Interior team is ready to consult on your material needs. Visit our showroom at IBCC Ruko Jalan Ahmad Yani Bandung, or contact us directly via WhatsApp & Email.',
      CN: 'Jaya Bersama Interior团队随时为您提供建材咨询服务。请参观我们位于万隆艾哈迈德亚尼街IBCC商铺的展厅，或直接通过WhatsApp和电子邮件联系我们。',
    },
    ctaWA: { ID: 'Chat WhatsApp', EN: 'Chat on WhatsApp', CN: '通过WhatsApp联系' },
    ctaHome: { ID: 'Kembali ke Beranda', EN: 'Back to Home', CN: '返回首页' },
  },

  // ============ CONTACT LOCATION SECTION ============
  contact: {
    sectionTitle: {
      ID: 'Kunjungi Showroom Kami di ',
      EN: 'Visit Our Showroom at ',
      CN: '参观我们的展厅 ',
    },
    sectionTitleHighlight: { ID: 'IBCC Bandung', EN: 'IBCC Bandung', CN: 'IBCC万隆' },
    sectionDesc: {
      ID: 'Temukan koleksi lengkap granit, marmer, sanitari, wall panel, dan keramik di showroom Jaya Bersama Interior Ruko IBCC Jalan Ahmad Yani. Tim konsultan kami siap membantu proyek Anda.',
      EN: 'Discover our complete collection of granite, marble, sanitary ware, wall panels, and ceramics at Jaya Bersama Interior IBCC Showroom, Jalan Ahmad Yani. Our consultants are ready to assist your project.',
      CN: '在Jaya Bersama Interior IBCC展厅（艾哈迈德亚尼街商铺）发现我们完整的花岗岩、大理石、卫浴洁具、墙板和瓷砖系列。我们的顾问随时为您的项目提供帮助。',
    },
    showroomTitle: { ID: 'SHOWROOM UTAMA BANDUNG', EN: 'MAIN SHOWROOM BANDUNG', CN: '万隆主展厅' },
    phoneWA: { ID: 'Telepon & WhatsApp', EN: 'Phone & WhatsApp', CN: '电话 & WhatsApp' },
    email: { ID: 'Email Official', EN: 'Official Email', CN: '官方邮箱' },
    social: { ID: 'Media Sosial Official', EN: 'Official Social Media', CN: '官方社交媒体' },
    hours: { ID: 'Jam Operasional', EN: 'Operating Hours', CN: '营业时间' },
    hoursValue: { ID: '08:00 - 17:30 WIB', EN: '08:00 - 17:30 WIB', CN: '08:00 - 17:30（西印度尼西亚时间）' },
    ctaDirections: { ID: 'Petunjuk Arah (Google Maps)', EN: 'Get Directions (Google Maps)', CN: '导航（谷歌地图）' },
    ctaWA: { ID: 'Chat WhatsApp', EN: 'Chat on WhatsApp', CN: '通过WhatsApp联系' },
    ctaEmail: { ID: 'Kirim Email', EN: 'Send Email', CN: '发送邮件' },

    // Form
    formTitle: { ID: 'KONSULTASI & PENAWARAN', EN: 'CONSULTATION & QUOTE', CN: '咨询与报价' },
    formHeading: { ID: 'Formulir Pertanyaan & Proyek', EN: 'Project Inquiry Form', CN: '项目询价表格' },
    formDesc: {
      ID: 'Isi formulir di bawah ini untuk konsultasi kebutuhan material interior, sampel produk, atau penawaran harga khusus proyek Anda.',
      EN: 'Fill out the form below for interior material consultation, product samples, or a special project price quote.',
      CN: '请填写以下表格，进行室内建材咨询、产品样品申请或项目特殊报价。',
    },
    formName: { ID: 'Nama Lengkap *', EN: 'Full Name *', CN: '姓名 *' },
    formPhone: { ID: 'No. Telepon / WhatsApp *', EN: 'Phone / WhatsApp No. *', CN: '电话 / WhatsApp号码 *' },
    formNamePlaceholder: { ID: 'Nama Anda', EN: 'Your Name', CN: '您的姓名' },
    formPhonePlaceholder: { ID: '+62 8xx-xxxx-xxxx', EN: '+62 8xx-xxxx-xxxx', CN: '+62 8xx-xxxx-xxxx' },
    formCategory: { ID: 'Kategori Material', EN: 'Material Category', CN: '材料类别' },
    formMessage: { ID: 'Pesan / Kebutuhan Proyek', EN: 'Message / Project Requirements', CN: '留言 / 项目需求' },
    formMessagePlaceholder: {
      ID: 'Ceritakan kebutuhan material proyek Anda...',
      EN: 'Tell us about your project material needs...',
      CN: '请描述您的项目建材需求...',
    },
    formSubmit: { ID: 'KIRIM PERTANYAAN PROYEK', EN: 'SEND PROJECT INQUIRY', CN: '发送项目询价' },
    formSuccessTitle: { ID: 'Terima Kasih!', EN: 'Thank You!', CN: '谢谢！' },
    formSuccessMsg: {
      ID: 'Pertanyaan Anda telah kami terima. Tim sales kami akan menghubungi Anda dalam 1x24 jam melalui WhatsApp atau Email.',
      EN: 'We have received your inquiry. Our sales team will contact you within 24 hours via WhatsApp or Email.',
      CN: '我们已收到您的询价。我们的销售团队将在24小时内通过WhatsApp或电子邮件与您联系。',
    },
    formSuccessWA: { ID: 'Chat Langsung via WhatsApp', EN: 'Chat Directly via WhatsApp', CN: '直接通过WhatsApp联系' },
  },

  // ============ FOOTER ============
  footer: {
    copyright: { ID: '© 2026 Jaya Bersama Interior. Hak Cipta Dilindungi Undang-Undang.', EN: '© 2026 Jaya Bersama Interior. All Rights Reserved.', CN: '© 2026 Jaya Bersama Interior. 版权所有。' },
  },
} as const;

export type TranslationKey = keyof typeof translations;

// Helper hook - to be used inside components
export function t(section: keyof typeof translations, key: string, lang: Lang): string {
  const sectionData = translations[section] as Record<string, Record<Lang, string>>;
  return sectionData[key]?.[lang] ?? sectionData[key]?.['ID'] ?? key;
}

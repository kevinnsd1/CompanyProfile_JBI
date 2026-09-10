import React, { useState } from 'react';
import { Search, ArrowRight, ShieldCheck, CheckCircle2, PhoneCall } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface BrandItem {
  id: string;
  name: string;
  category: 'GRANIT' | 'SANITARI' | 'KERAMIK' | 'WALLPANEL';
  categoryLabel: string;
  logo: string;
  description: string;
  specialties: string[];
  sizes: string[];
  origin: string;
}

export const ProdukPage: React.FC<{ onNavigateHome?: () => void }> = ({ onNavigateHome }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchFilter, setSearchFilter] = useState<string>('');
  const { t } = useLanguage();

  const brandList: BrandItem[] = [
    {
      id: 'titanium',
      name: 'TITANIUM Granite',
      category: 'GRANIT',
      categoryLabel: 'Granit Tile & Large Slab',
      logo: '/assets/logo/logobrand/titanium.png',
      description: 'Produsen granit tile porselen kelas atas dengan teknologi cetak digital HD dan permukaan ultra-glossy tahan gores.',
      specialties: ['Granit Large Slab 60x120', 'Tekstur Urat Alami Marmer', 'Daya Tahan Beban Tinggi'],
      sizes: ['60x60 cm', '60x120 cm', '80x80 cm', '100x100 cm'],
      origin: 'Indonesia & Standard Eropa',
    },
    {
      id: 'granito',
      name: 'GRANITO',
      category: 'GRANIT',
      categoryLabel: 'Homogeneous Tile',
      logo: '/assets/logo/logobrand/granito.png',
      description: 'Pelopor homogeneous tile di Indonesia dengan ketahanan abrasi tinggi, sempurna untuk area komersial dan hunian.',
      specialties: ['Body Porselen Homogen', 'Anti-Slip & Anti-Noda', 'Permukaan Unpolished & Polished'],
      sizes: ['60x60 cm', '60x120 cm', '30x60 cm'],
      origin: 'Indonesia',
    },
    {
      id: 'arna',
      name: 'ARNA Tile',
      category: 'GRANIT',
      categoryLabel: 'Granit Tile Modern',
      logo: '/assets/logo/logobrand/arna.png',
      description: 'Lini granit tile arsitektural bermotif semen ekspos, kayu alami, dan batuan kristal kontemporer.',
      specialties: ['Motif Semen Teraso & Minimalis', 'Presisi Edge Rectified', 'Ketebalan Konsisten'],
      sizes: ['60x60 cm', '60x120 cm'],
      origin: 'Indonesia',
    },
    {
      id: 'infiniti',
      name: 'INFINITI Granite',
      category: 'GRANIT',
      categoryLabel: 'Granit Tile Premium',
      logo: '/assets/logo/logobrand/infiniti.png',
      description: 'Koleksi granit porselen berkualitas ekspor dengan variasi motif veining marmer alami mewah dan kilau kristal.',
      specialties: ['Glazed Porcelain Tile', 'Desain Marmer Carrara & Nero', 'Bebas Gelombang'],
      sizes: ['60x60 cm', '60x120 cm', '80x80 cm'],
      origin: 'Indonesia',
    },
    {
      id: 'aer',
      name: 'AER Sanitary',
      category: 'SANITARI',
      categoryLabel: 'Sanitari & Brass Fittings',
      logo: '/assets/logo/logobrand/aer.png',
      description: 'Merek perlengkapan kamar mandi berkualitas tinggi dengan material kuningan tahan karat dan garansi bocor resmi.',
      specialties: ['Keran Mixer Hot & Cold', 'Shower Column Set Stainless', 'Aksesoris Kamar Mandi Brass'],
      sizes: ['Standard Plumbing', 'Garansi 5 Tahun'],
      origin: 'Indonesia',
    },
    {
      id: 'inasanitary',
      name: 'INA Sanitary Ware',
      category: 'SANITARI',
      categoryLabel: 'Keramik Sanitari',
      logo: '/assets/logo/logobrand/inasanitary.png',
      description: 'Produsen kloset duduk, wastafel, dan urinal keramik terpercaya di Indonesia dengan teknologi hemat air dan higienis.',
      specialties: ['Kloset Monoblok & Dual Flush', 'Wastafel Gantung & Countertop', 'Keramik Glaze Anti-Bakteri'],
      sizes: ['Sanitary Ware Standard', 'SNI Certified'],
      origin: 'Indonesia',
    },
    {
      id: 'wasser',
      name: 'WASSER',
      category: 'SANITARI',
      categoryLabel: 'Sanitary & Pump System',
      logo: '/assets/logo/logobrand/wasser.png',
      description: 'Spesialis fitting sanitari, keran air, dan perlengkapan kamar mandi berstandar Jerman untuk kenyamanan maksimal.',
      specialties: ['Kran Otomatis Sensor', 'Shower Head Rain Shower', 'Katup Plumbing Tahan Tekanan'],
      sizes: ['Fitting Standard', 'Garansi Resmi'],
      origin: 'Jerman / Indonesia',
    },
    {
      id: 'roman',
      name: 'ROMAN Ceramics & Granit',
      category: 'KERAMIK',
      categoryLabel: 'Keramik & Granit Art',
      logo: '/assets/logo/logobrand/roman.png',
      description: 'Produsen ubin keramik dan granit legendaris dengan sertifikasi ISO dan reputasi internasional terbaik.',
      specialties: ['Interlocking Wall Tile', 'Granit Glazed Motivo', 'Keramik Dapur & Kamar Mandi'],
      sizes: ['30x60 cm', '60x60 cm', '30x30 cm', '20x40 cm'],
      origin: 'Indonesia',
    },
    {
      id: 'platinum',
      name: 'PLATINUM Ceramic',
      category: 'KERAMIK',
      categoryLabel: 'Keramik Lantai & Dinding',
      logo: '/assets/logo/logobrand/platinum.png',
      description: 'Rangkaian ubin keramik berdesain trendy dengan variasi tekstur matt, satin, dan glossy untuk seluruh ruangan.',
      specialties: ['Ubin Lantai Dapur & Garasi', 'Motif Kayu Parquet Keramik', 'Ketahanan Beban Tinggi'],
      sizes: ['40x40 cm', '50x50 cm', '60x60 cm', '25x40 cm'],
      origin: 'Indonesia',
    },
    {
      id: 'sunpower',
      name: 'SUNPOWER Ceramics',
      category: 'KERAMIK',
      categoryLabel: 'Keramik & Porcelanato',
      logo: '/assets/logo/logobrand/sunpower.png',
      description: 'Pilihan ubin keramik inovatif dengan harga kompetitif dan pilihan motif warna yang sangat lengkap.',
      specialties: ['Keramik Dinding Dekoratif', 'Lantai Anti-Selip Teras', 'Porselen Terjangkau'],
      sizes: ['40x40 cm', '50x50 cm', '60x60 cm'],
      origin: 'Indonesia',
    },
    {
      id: 'garuda',
      name: 'GARUDA Tile',
      category: 'KERAMIK',
      categoryLabel: 'Keramik & Granit Ekonomis',
      logo: '/assets/logo/logobrand/garuda.png',
      description: 'Brand keramik dan granit lantai teruji yang banyak digunakan untuk proyek perumahan, ruko, dan bangunan publik.',
      specialties: ['Ubin Proyek Massal', 'Tahan Gores & Gesekan', 'Motif Polos & Marmer'],
      sizes: ['50x50 cm', '60x60 cm'],
      origin: 'Indonesia',
    },
    {
      id: 'kobin',
      name: 'KOBIN Ceramic',
      category: 'KERAMIK',
      categoryLabel: 'Keramik Arsitektural',
      logo: '/assets/logo/logobrand/kobin.png',
      description: 'Pelapis dinding dan lantai keramik berkualitas tinggi untuk interior hunian modern dan aplikasi outdoor.',
      specialties: ['Keramik Kolam Renang & Teras', 'Keramik Dinding Dapur', 'Ketepatan Siku Sempurna'],
      sizes: ['30x60 cm', '50x50 cm'],
      origin: 'Indonesia',
    },
    {
      id: 'meliuz',
      name: 'MELIUZ Wall Panel',
      category: 'WALLPANEL',
      categoryLabel: 'WPC & Fluted Wall Panel',
      logo: '/assets/logo/logobrand/meliuz.png',
      description: 'Produsen panel dinding dekoratif WPC (Wood Plastic Composite) anti rayap, tahan air, dan mudah dipasang.',
      specialties: ['Fluted Wall Panel Kayu', 'Panel Aksen Backlit', 'Tahan Kelembapan & Anti Rayap'],
      sizes: ['Panjang 2.9m x Lebar 16cm', 'Tebal 24mm'],
      origin: 'Indonesia',
    },
  ];

  const categories = [
    { id: 'ALL', label: t('produk', 'filterAll') },
    { id: 'GRANIT', label: t('produk', 'filterGranit') },
    { id: 'SANITARI', label: t('produk', 'filterSanitari') },
    { id: 'KERAMIK', label: t('produk', 'filterKeramik') },
    { id: 'WALLPANEL', label: t('produk', 'filterWallPanel') },
  ];

  const filteredBrands = brandList.filter((b) => {
    const matchesCategory = selectedCategory === 'ALL' || b.category === selectedCategory;
    const matchesSearch =
      b.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      b.categoryLabel.toLowerCase().includes(searchFilter.toLowerCase()) ||
      b.description.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-[#FBFBFB] text-gray-800 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-gray-50 via-white to-[#FBFBFB] py-16 sm:py-20 border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight max-w-4xl mx-auto leading-tight">
            {t('produk', 'heroTitle')}
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto mt-4 leading-relaxed font-normal">
            {t('produk', 'heroDesc')}
          </p>

          {/* Search Filter Bar */}
          <div className="mt-8 max-w-xl mx-auto relative flex items-center">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              placeholder={t('produk', 'searchPlaceholder')}
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-300 rounded-xl text-sm font-medium text-gray-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all"
            />
            {searchFilter && (
              <button
                onClick={() => setSearchFilter('')}
                className="absolute right-3 text-xs text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded cursor-pointer"
              >
                {t('produk', 'searchClear')}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER TABS */}
      <section className="sticky top-[68px] sm:top-[85px] z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-xs py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-red-600 text-white shadow-sm scale-102'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. BRAND CARDS GRID */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {filteredBrands.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredBrands.map((b) => {
              const isDarkContainer = b.id === 'titanium' || b.id === 'platinum';
              return (
                <div
                  key={b.id}
                  className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Top Origin Badge */}
                  <div className="flex items-center justify-end gap-2 mb-4">
                    <span className="text-[11px] font-bold text-gray-400 flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-md">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      {b.origin}
                    </span>
                  </div>

                  {/* Brand Logo Container: Black ONLY for Titanium, Light/White for all other brands */}
                  <div className={`w-full h-32 rounded-xl p-5 flex items-center justify-center mb-5 transition-colors ${
                    isDarkContainer
                      ? 'bg-[#181818] border border-gray-800 shadow-inner'
                      : 'bg-gray-50/80 border border-gray-200/60 group-hover:bg-amber-50/30'
                  }`}>
                    <img
                      src={b.logo}
                      alt={b.name}
                      className="max-h-20 max-w-[85%] object-contain filter group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                {/* Brand Title & Description (Solid Colors) */}
                <div className="space-y-3 flex-1 mb-6">
                  <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-red-600 transition-colors">
                    {b.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal">
                    {b.description}
                  </p>

                  {/* Key Features Bullet */}
                  <div className="space-y-1.5 pt-2">
                    {b.specialties.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Size Pills */}
                <div className="pt-3 border-t border-gray-100 mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1.5">
                    {t('produk', 'sizeVariant')}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {b.sizes.map((sz, szIdx) => (
                      <span
                        key={szIdx}
                        className="px-2 py-0.5 bg-gray-100 border border-gray-200/60 text-gray-700 rounded text-[11px] font-semibold"
                      >
                        {sz}
                      </span>
                    ))}
                  </div>
                </div>

                {/* WA Inquiry Direct Action Button */}
                <a
                  href={`https://wa.me/62882001078009?text=Halo%20Jaya%20Bersama%20Interior,%20saya%20tertarik%20dengan%20katalog%20produk%20merek%20${encodeURIComponent(b.name)}.%20Saya%20mendapatkan%20informasi%20ini%20dari%20website%20Jaya%20Bersama%20Interior.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-3 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] sm:text-[11px] lg:text-xs uppercase tracking-wider rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2.5 active:scale-95 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 shrink-0" />
                  <span className="leading-snug max-w-[85%]">{t('produk', 'askProduct')} {b.name}</span>
                </a>
              </div>
            );
          })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <h3 className="text-lg font-bold text-gray-800">{t('produk', 'noResult')}</h3>
            <p className="text-xs text-gray-500 mt-1">{t('produk', 'noResultDesc')}</p>
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                setSearchFilter('');
              }}
              className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-lg text-xs font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
            >
              {t('produk', 'resetFilter')}
            </button>
          </div>
        )}

      </section>

      {/* 4. SHOWROOM & CONSULTATION CTA BANNER */}
      <section className="bg-gray-100/80 border-t border-gray-200/60 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 p-8 sm:p-10 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs uppercase font-extrabold tracking-widest text-red-600">{t('produk', 'showroomBanner')}</span>
              <h3 className="text-2xl font-extrabold text-gray-900">{t('produk', 'showroomTitle')}</h3>
              <p className="text-gray-600 text-sm">
                {t('produk', 'showroomDesc')}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://wa.me/62882001078009?text=Halo%20Jaya%20Bersama%20Interior,%20saya%20ingin%20jadwal%20kunjungan%20ke%20showroom.%20Saya%20mendapatkan%20informasi%20ini%20dari%20website%20Jaya%20Bersama%20Interior."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>{t('produk', 'ctaSales')}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              {onNavigateHome && (
                <button
                  onClick={onNavigateHome}
                  className="px-5 py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  {t('produk', 'ctaHome')}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProdukPage;

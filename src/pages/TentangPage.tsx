import React from 'react';
import { Award, ShieldCheck, CheckCircle2, MapPin, Navigation, Send, ArrowRight, Home, Bath, Layers, Square, Grid } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductOffer {
  id: string;
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  icon: React.ReactNode;
  highlights: string[];
  brands: string[];
}

export const TentangPage: React.FC<{ onNavigateHome?: () => void }> = ({ onNavigateHome }) => {
  const { t } = useLanguage();
  const productOffers: ProductOffer[] = [
    {
      id: 'sanitari',
      category: 'Kategori 01',
      title: 'Sanitari & Fittings Modern',
      description: 'Menyediakan koleksi lengkap perangkat kamar mandi kontemporer mulai dari bathtub freestanding, kloset duduk ergonomis, washtafel keramik premium, hingga keran fitting tahan karat bergaransi resmi.',
      imageSrc: '/assets/projects/sanitari.jpg',
      icon: <Bath className="w-5 h-5 text-red-500" />,
      highlights: [
        'Keramik sanitari tahan noda & mudah dibersihkan',
        'Fitting kran kuningan lapis chrome tahan karat',
        'Desain kamar mandi hotel bintang 5 & villa mewah',
        'Garansi resmi pabrik hingga 10 tahun',
      ],
      brands: ['AER', 'INA Sanitary', 'WASSER', 'VERA Ceramic'],
    },
    {
      id: 'granit',
      category: 'Kategori 02',
      title: 'Granit & Marmer Premium',
      description: 'Lantai granit dan marmer bermotif veining kristal alami dengan daya tahan beban ekstra tinggi, kerapatan porselen sempurna, serta kilap kristal elegan untuk hunian mewah dan lobi gedung komersial.',
      imageSrc: '/assets/projects/granit.jpg',
      icon: <Square className="w-5 h-5 text-red-500" />,
      highlights: [
        'Ukuran jumbo slab (60x60, 60x120, 80x80, 100x100)',
        'Daya serap air sangat rendah (< 0.5%)',
        'Motif vein marmer kontinyu (bookmatch)',
        'Tahan goresan & beban lalu lintas tinggi',
      ],
      brands: ['INFINITI', 'SUNPOWER', 'GRANITO', 'ARNA', 'ROMAN', 'MELIUS', 'TITANIUM', 'PLATINUM'],
    },
    {
      id: 'wallpanel',
      category: 'Kategori 03',
      title: 'Wall Panel Arsitektural',
      description: 'Inovasi pelapis dinding akustik & batu dekoratif backlit yang menambahkan dimensi visual mewah, peredam gema ruangan, serta memberikan karakter unik pada dinding utama rumah maupun ruang kerja Anda.',
      imageSrc: '/assets/projects/wallpanel.jpg',
      icon: <Layers className="w-5 h-5 text-red-500" />,
      highlights: [
        'Panel akustik kayu & fluted wall panel',
        'Fitur backlit batu translusen yang dramatis',
        'Material tahan rayap, karat & kelembapan',
        'Pemasangan cepat dengan sistem interlock',
      ],
      brands: ['JBI Luxury Panel', 'Marmi Graniti', 'Portofino'],
    },
    {
      id: 'keramik',
      category: 'Kategori 04',
      title: 'Keramik & Glazed Tile',
      description: 'Koleksi keramik lantai dan dinding berteknologi cetak presisi tinggi dengan ragam motif kayu, semen teraso, batu alam, serta warna pastel harmonis untuk dapur, kamar mandi, dan area outdoor.',
      imageSrc: '/assets/projects/keramik.jpg',
      icon: <Grid className="w-5 h-5 text-red-500" />,
      highlights: [
        'Keramik anti-selip untuk area basah & outdoor',
        'Glazed ceramic tile dengan variasi motif kaya',
        'Harga ekonomis dengan standar kekuatan tinggi',
        'Perawatan mudah dan ramah lingkungan',
      ],
      brands: ['GARUDA', 'KOBIN', 'ROMAN', 'SUNPOWER'],
    },
    {
      id: 'residensial',
      category: 'Kategori 05',
      title: 'Solusi Proyek Rumah & Villa',
      description: 'Layanan konsultasi material terpadu untuk proyek hunian pribadi dan vila mewah. Tim konsultan kami membantu merekomendasikan kombinasi batu alam, sanitari, dan lantai terbaik sesuai konsep arsitektur Anda.',
      imageSrc: '/assets/projects/rumah.jpg',
      icon: <Home className="w-5 h-5 text-red-500" />,
      highlights: [
        'Konsultasi kebutuhan material gratis',
        'Pengiriman sampel fisik direct to project site',
        'Estimasi kalkulasi kebutuhan luasan presisi',
        'Dukungan armada pengiriman aman & tepat waktu',
      ],
      brands: ['Jaya Bersama Interior Official'],
    },
  ];

  return (
    <div className="w-full bg-[#FBFBFB] text-gray-800 min-h-screen">
      
      {/* 1. HERO PAGE HEADER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-[#FBFBFB] py-16 sm:py-24 border-b border-gray-200/60">
        {/* Subtle Architectural Grid Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 max-w-4xl mx-auto leading-tight">
            {t('tentang', 'heroTitle')} <span className="text-red-600">{t('tentang', 'heroHighlight')}</span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto mt-6 leading-relaxed font-normal">
            {t('tentang', 'heroDesc')}<strong className="text-gray-900 font-extrabold">{t('tentang', 'heroDescMaterials')}</strong>{t('tentang', 'heroDescSuffix')}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/62882001078009?text=Halo%20Jaya%20Bersama%20Interior,%20saya%20ingin%20konsultasi%20mengenai%20produk%20interior."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
              <span>{t('tentang', 'ctaWA')}</span>
            </a>

            {onNavigateHome && (
              <button
                onClick={onNavigateHome}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <span>{t('tentang', 'ctaHome')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 2. COMPANY STATS & VALUE PROPOSITION */}
      <section className="py-12 bg-white border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            
            <div className="p-4 sm:p-6 bg-white border border-gray-200/80 rounded-xl shadow-xs hover:shadow-md hover:border-red-200 transition-all">
              <div className="w-9 h-9 sm:w-11 sm:h-11 mx-auto mb-2 sm:mb-3 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                <Award className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">{t('tentang', 'statsYears')}</div>
              <div className="text-[10px] sm:text-xs text-gray-500 font-semibold uppercase tracking-wider mt-1 leading-snug">{t('tentang', 'statsYearsLabel')}</div>
            </div>

            <div className="p-4 sm:p-6 bg-white border border-gray-200/80 rounded-xl shadow-xs hover:shadow-md hover:border-red-200 transition-all">
              <div className="w-9 h-9 sm:w-11 sm:h-11 mx-auto mb-2 sm:mb-3 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                <ShieldCheck className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">{t('tentang', 'statsGuaranteed')}</div>
              <div className="text-[10px] sm:text-xs text-gray-500 font-semibold uppercase tracking-wider mt-1 leading-snug">{t('tentang', 'statsGuaranteedLabel')}</div>
            </div>

            <div className="p-4 sm:p-6 bg-white border border-gray-200/80 rounded-xl shadow-xs hover:shadow-md hover:border-red-200 transition-all">
              <div className="w-9 h-9 sm:w-11 sm:h-11 mx-auto mb-2 sm:mb-3 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                <MapPin className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">{t('tentang', 'statsShowroom')}</div>
              <div className="text-[10px] sm:text-xs text-gray-500 font-semibold uppercase tracking-wider mt-1 leading-snug">{t('tentang', 'statsShowroomLabel')}</div>
            </div>

            <div className="p-4 sm:p-6 bg-white border border-gray-200/80 rounded-xl shadow-xs hover:shadow-md hover:border-red-200 transition-all">
              <div className="w-9 h-9 sm:w-11 sm:h-11 mx-auto mb-2 sm:mb-3 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                <CheckCircle2 className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">{t('tentang', 'statsBrand')}</div>
              <div className="text-[10px] sm:text-xs text-gray-500 font-semibold uppercase tracking-wider mt-1 leading-snug">{t('tentang', 'statsBrandLabel')}</div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PRODUCT OFFERINGS SHOWCASE GRID */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-red-600">{t('tentang', 'offeringsTitle')}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2">
            {t('tentang', 'offeringsHeading')}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
            {t('tentang', 'offeringsDesc')}
          </p>
        </div>

        <div className="space-y-12">
          {productOffers.map((offer, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={offer.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white border border-gray-200/80 rounded-2xl overflow-hidden p-6 sm:p-10 hover:border-red-200/80 transition-all duration-300 shadow-md hover:shadow-xl ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Column */}
                <div className={`lg:col-span-6 relative rounded-xl overflow-hidden h-[300px] sm:h-[380px] group shadow-inner ${
                  !isEven ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <img
                    src={offer.imageSrc}
                    alt={offer.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-xs text-gray-900 border border-gray-200/60 shadow-sm flex items-center gap-2">
                    {offer.icon}
                    <span className="font-bold">{offer.category}</span>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 space-y-6 ${!isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div>
                    <span className="text-xs uppercase font-extrabold tracking-widest text-red-600">{offer.category}</span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">{offer.title}</h3>
                  </div>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                    {offer.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 pt-2">
                    {offer.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Available Brand Badges */}
                  <div className="pt-4 border-t border-gray-100">
                    <span className="text-[11px] uppercase font-bold text-gray-400 tracking-wider block mb-2">
                      {t('tentang', 'brandLabel')}
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {offer.brands.map((b, bIdx) => (
                        <span
                          key={bIdx}
                          className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-md text-xs font-semibold text-gray-700 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </section>

      {/* 4. LOCATION & SHOWROOM CALL TO ACTION */}
      <section className="bg-gray-100/70 border-t border-gray-200/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200/80 p-8 sm:p-12 rounded-2xl shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-widest text-red-600">{t('tentang', 'showroomLabel')}</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                {t('tentang', 'showroomTitle')}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {t('tentang', 'showroomDesc')}<strong className="text-gray-900 font-bold">JL AHMAD YANI RUKO IBCC BLOK D3-6, Bandung</strong>.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                href="https://www.google.com/maps/search/?api=1&query=-6.915228189935767,107.6338078352852"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>{t('tentang', 'ctaDirections')}</span>
              </a>

              <a
                href="mailto:jayabersamainterior@gmail.com"
                className="w-full py-3.5 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                <Send className="w-4 h-4 text-red-400" />
                <span>{t('tentang', 'ctaEmail')}</span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default TentangPage;

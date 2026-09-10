import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Home, Bath, Layers, Square, Grid } from 'lucide-react';


interface ProjectCategory {
  id: string;
  tagNumber: string;
  categoryName: string;
  title: string;
  description: string;
  imageSrc: string;
  location: string;
  icon: React.ReactNode;
}

export const ProjectShowcaseSection: React.FC = () => {
  const categories: ProjectCategory[] = [
    {
      id: 'rumah',
      tagNumber: '01 / 05',
      categoryName: 'Proyek Residensial',
      title: 'Rumah & Villa Mewah',
      description: 'Menghadirkan pesona kemewahan hunian pribadi dengan batu alam granit & marmer berkualitas tinggi yang mencerminkan cita rasa elegan dan keindahan abadi.',
      imageSrc: '/assets/projects/rumah.jpg',
      location: 'Residensial Pantai Indah Kapuk, Jakarta',
      icon: <Home className="w-4 h-4" />,
    },
    {
      id: 'sanitari',
      tagNumber: '02 / 05',

      categoryName: 'Sanitari & Fittings',
      title: 'Koleksi Sanitari & Bathware',
      description: 'Solusi perangkat kamar mandi modern dengan rancangan ergonomis, material keramik tahan noda, serta keran fitting premium berstandar internasional.',
      imageSrc: '/assets/projects/sanitari.jpg',
      location: 'Private Villa & Luxury Suite, Bali',
      icon: <Bath className="w-4 h-4" />,
    },
    {
      id: 'wallpanel',
      tagNumber: '03 / 05',
      categoryName: 'Panel Arsitektural',
      title: 'Wall Panel & Dinding Interior',
      description: 'Inovasi panel dinding dekoratif bernilai seni tinggi yang memperkuat akustik ruangan, tekstur alami, serta memberikan aksen mewah pada dinding utama.',
      imageSrc: '/assets/projects/wallpanel.jpg',
      location: 'Penthouse Apartment, Menteng Jakarta',
      icon: <Layers className="w-4 h-4" />,
    },
    {
      id: 'granit',
      tagNumber: '04 / 05',
      categoryName: 'Granit & Marmer',
      title: 'Granit Tile Premium',
      description: 'Lantai granit bermotif veining alami dengan ketahanan beban tinggi, permukaan kilap kristal sempurna untuk lobi gedung komersial dan hunian mewah.',
      imageSrc: '/assets/projects/granit.jpg',
      location: 'Commercial Tower Lobby, Surabaya',
      icon: <Square className="w-4 h-4" />,

    },
    {
      id: 'keramik',
      tagNumber: '05 / 05',
      categoryName: 'Keramik & Tile',
      title: 'Keramik & Glazed Tile',
      description: 'Ragam pola keramik inovatif berteknologi presisi tinggi untuk area lantai dan dinding dengan perpaduan warna harmonis dan mudah dalam perawatan.',
      imageSrc: '/assets/projects/keramik.jpg',
      location: 'Showroom Center, Bandung',
      icon: <Grid className="w-4 h-4" />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Auto slide every 6 seconds if not manually controlled
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % categories.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [categories.length]);

  const currentCategory = categories[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % categories.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <section className="w-full bg-[#141414] text-white py-8 sm:py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-gray-800 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Inspirasi Material & Kategori Proyek
            </h2>
          </div>


          {/* Category Tabs for Quick Navigation */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                  activeIndex === idx
                    ? 'bg-white text-gray-900 shadow-md font-bold'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat.icon}
                <span>{cat.categoryName}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Citatah-Style Split Showcase Grid (Left Card + Right Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-sm overflow-hidden bg-[#1A1A1A] border border-gray-800 shadow-2xl min-h-[460px] sm:min-h-[520px]">
          
          {/* LEFT SIDE: Dark Content Box (citatah reference layout) */}
          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative bg-[#1c1c1c] border-r border-gray-800/80 z-10">
            {/* Top Category Tag */}
            <div>
              <div className="flex items-center text-xs font-mono text-gray-400 mb-6 border-b border-gray-800 pb-3">
                <span className="uppercase tracking-wider font-semibold text-gray-300">{currentCategory.categoryName}</span>
              </div>

              {/* Main Title */}
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
                {currentCategory.title}
              </h3>

              {/* Description Paragraph */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal mb-8">
                {currentCategory.description}
              </p>

              {/* Outlined Action Button (matching Citatah reference 'VIEW MORE') */}
              <div>
                <a
                  href="#proyek"
                  className="inline-flex items-center gap-3 px-7 py-3.5 border border-white/80 hover:border-white text-white hover:bg-white hover:text-gray-900 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 group"
                >
                  <span>LIHAT PROYEK</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Bottom Controls (Next/Prev Buttons & Dots) */}
            <div className="pt-8 mt-6 border-t border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {categories.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === idx ? 'w-8 bg-red-500' : 'w-2 bg-gray-700 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-gray-700 hover:border-white text-gray-300 hover:text-white flex items-center justify-center transition-colors active:scale-95"
                  aria-label="Previous Project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-gray-700 hover:border-white text-gray-300 hover:text-white flex items-center justify-center transition-colors active:scale-95"
                  aria-label="Next Project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Large Image Showcase */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[460px] lg:min-h-full overflow-hidden bg-gray-900 group">
            {categories.map((cat, idx) => (
              <div
                key={cat.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  activeIndex === idx ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={cat.imageSrc}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default ProjectShowcaseSection;

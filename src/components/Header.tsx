import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Globe, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Company Logo component
export const CompanyLogo: React.FC<{ className?: string }> = ({ className = "h-12 w-auto" }) => (
  <img 
    src="/assets/logo/logojbi.png" 
    alt="JBI Logo" 
    className={`object-contain transition-all duration-300 ${className}`}
  />
);

// Flag Components
const Flags = {
  CN: () => (
    <svg viewBox="0 0 30 20" className="w-7 h-5 sm:w-8 sm:h-5.5 rounded-xs shadow-xs object-cover cursor-pointer">
      <rect width="30" height="20" fill="#DE2910" />
      <polygon points="5,3 6.2,6.8 2.9,4.4 7.1,4.4 3.8,6.8" fill="#FFDE00" />
      <polygon points="10,1 10.5,2.5 9.1,1.5 10.9,1.5 9.5,2.5" fill="#FFDE00" />
      <polygon points="12,3 12.5,4.5 11.1,3.5 12.9,3.5 11.5,4.5" fill="#FFDE00" />
      <polygon points="12,6 12.5,7.5 11.1,6.5 12.9,6.5 11.5,7.5" fill="#FFDE00" />
      <polygon points="10,8 10.5,9.5 9.1,8.5 10.9,8.5 9.5,9.5" fill="#FFDE00" />
    </svg>
  ),
  UK: () => (
    <svg viewBox="0 0 30 20" className="w-7 h-5 sm:w-8 sm:h-5.5 rounded-xs shadow-xs object-cover cursor-pointer">
      <clipPath id="uk-clip-lg">
        <rect width="30" height="20" />
      </clipPath>
      <g clipPath="url(#uk-clip-lg)">
        <rect width="30" height="20" fill="#00247D" />
        <path d="M0,0 L30,20 M30,0 L0,20" stroke="#FFFFFF" strokeWidth="4" />
        <path d="M0,0 L30,20 M30,0 L0,20" stroke="#CF142B" strokeWidth="2" />
        <path d="M15,0 V20 M0,10 H30" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M15,0 V20 M0,10 H30" stroke="#CF142B" strokeWidth="3.5" />
      </g>
    </svg>
  ),
  ID: () => (
    <svg viewBox="0 0 30 20" className="w-7 h-5 sm:w-8 sm:h-5.5 rounded-xs border border-gray-200 shadow-xs object-cover cursor-pointer">
      <rect width="30" height="10" fill="#CE1126" />
      <rect y="10" width="30" height="10" fill="#FFFFFF" />
    </svg>
  ),
};

interface CompanyHeaderProps {
  activeNav?: string;
  onNavigate?: (navId: string) => void;
}

export const CompanyHeader: React.FC<CompanyHeaderProps> = ({ activeNav: externalActiveNav, onNavigate }) => {
  const [internalActiveNav, setInternalActiveNav] = useState('BERANDA');
  const activeNav = externalActiveNav || internalActiveNav;

  const { lang, setLang, t } = useLanguage();
  // Map internal 'UK' key → 'EN' for context
  const activeLang = lang === 'EN' ? 'UK' : lang;
  const handleSetLang = (flag: 'ID' | 'UK' | 'CN') => setLang(flag === 'UK' ? 'EN' : flag);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for Escape key to close modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems = [
    { id: 'BERANDA', label: t('nav', 'BERANDA') },
    { id: 'TENTANG', label: t('nav', 'TENTANG') },
    { id: 'PRODUK', label: t('nav', 'PRODUK') },
    { id: 'KONTAK', label: t('nav', 'KONTAK') },
  ];

  const quickSearchTags = [
    'Granit 60x120',
    'Marmer Import',
    'Sanitari Premium',
    'Wall Panel WPC',
    'Keramik Motif',
    'Showroom IBCC',
  ];

  const searchDatabase = [
    { title: 'Granit Tile Premium (60x120 & Large Slab)', category: 'Granit', desc: 'Permukaan kilau tinggi, anti gores, cocok untuk ruang tamu & komersial.', nav: 'PRODUK' },
    { title: 'Marmer Natural Import (Carrara & Nero Marquina)', category: 'Marmer', desc: 'Urat alami elegan untuk meja counter, dinding aksen, & lantai mewah.', nav: 'PRODUK' },
    { title: 'Sanitari Modern (Kloset Duduk, Wastafel, Shower)', category: 'Sanitari', desc: 'Koleksi sanitary perlengkapan kamar mandi berkualitas dan hemat air.', nav: 'PRODUK' },
    { title: 'Wall Panel WPC & Fluted Board Accent', category: 'Wall Panel', desc: 'Panel dinding dekoratif tahan air & anti rayap untuk interior modern.', nav: 'PRODUK' },
    { title: 'Keramik Lantai & Dinding Motif Terkini', category: 'Keramik', desc: 'Pilihan keramik tahan lama untuk dapur, teras, kamar mandi & garasi.', nav: 'PRODUK' },
    { title: 'Showroom Utama JBI IBCC Bandung', category: 'Lokasi & Kontak', desc: 'Jl. Ahmad Yani Ruko IBCC Blok D3-6, Bandung. Telepon / WA direct.', nav: 'KONTAK' },
  ];

  const filteredResults = searchQuery.trim() === '' 
    ? [] 
    : searchDatabase.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const handleNavClick = (id: string) => {
    setInternalActiveNav(id);
    if (onNavigate) {
      onNavigate(id);
    }
  };



  return (
    <header className={`w-full bg-white border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-md py-1' : 'shadow-xs'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8 py-3.5 sm:py-5 flex items-center justify-between gap-4">
        
        {/* Left: Sticky Header Logo - Clean solid header logo destination */}
        <div className="flex items-center shrink-0 min-w-[50px] min-h-[44px]">
          <button onClick={() => handleNavClick('BERANDA')} className="flex items-center group cursor-pointer border-none bg-transparent">
            <CompanyLogo className="h-11 sm:h-13 md:h-14 w-auto group-hover:scale-105 transition-all duration-300 opacity-100 scale-100" />
          </button>
        </div>

        {/* Center: Large Navigation Pill (Desktop) */}
        <nav className="hidden lg:flex items-center bg-[#EFEFEF] px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-inner">
          <ul className="flex items-center gap-4 sm:gap-6 text-xs sm:text-[13px] font-bold tracking-widest text-gray-800">
            {navItems.map((item, index) => {
              const isActive = activeNav === item.id;
              return (
                <React.Fragment key={item.id}>
                  {index > 0 && <span className="text-gray-400 select-none font-normal text-sm">–</span>}
                  <li className="relative group">
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`px-1.5 py-1 transition-colors duration-150 cursor-pointer ${
                        isActive
                          ? 'text-gray-950 font-black'
                          : 'text-gray-700 hover:text-gray-950'
                      }`}
                    >
                      {item.label}

                      {/* Active underline matching Image 2 indicator */}
                      {isActive && (
                        <span className="absolute bottom-[-3px] left-0 w-full h-[2.5px] bg-gray-900 rounded-full animate-fade-in" />
                      )}
                    </button>
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        </nav>

        {/* Right Section: Flags, Social Pill, Search, Menu */}
        <div className="flex items-center gap-4 sm:gap-5 shrink-0">
          
          {/* Language Flags */}
          <div className="hidden sm:flex items-center gap-2.5 px-1">
            <button
              onClick={() => handleSetLang('CN')}
              title="Chinese"
              className={`p-0.5 rounded transition-transform hover:scale-110 ${
                activeLang === 'CN' ? 'ring-2 ring-red-500/50 scale-105' : 'opacity-80 hover:opacity-100'
              }`}
            >
              <Flags.CN />
            </button>
            <button
              onClick={() => handleSetLang('UK')}
              title="English"
              className={`p-0.5 rounded transition-transform hover:scale-110 ${
                activeLang === 'UK' ? 'ring-2 ring-blue-500/50 scale-105' : 'opacity-80 hover:opacity-100'
              }`}
            >
              <Flags.UK />
            </button>
            <button
              onClick={() => handleSetLang('ID')}
              title="Indonesian"
              className={`p-0.5 rounded transition-transform hover:scale-110 ${
                activeLang === 'ID' ? 'ring-2 ring-red-500/50 scale-105' : 'opacity-80 hover:opacity-100'
              }`}
            >
              <Flags.ID />
            </button>
          </div>

          {/* Social Media Pill Container */}
          <div className="hidden sm:flex items-center gap-4 bg-[#EFEFEF] px-5 py-3 rounded-full">
            {/* WhatsApp */}
            <a
              href="https://wa.me/62882001078009"
              target="_blank"
              rel="noreferrer"
              title="WhatsApp"
              className="text-gray-700 hover:text-emerald-600 transition-colors hover:scale-110 transform duration-150"
            >
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/jayabersamainterior"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
              className="text-gray-700 hover:text-pink-600 transition-colors hover:scale-110 transform duration-150"
            >
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>


          {/* Search Circular Button */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 ${
              isSearchOpen 
                ? 'bg-gray-900 text-white shadow-md rotate-90' 
                : 'bg-[#EFEFEF] hover:bg-gray-200 text-gray-700'
            }`}
            title="Pencarian Produk"
          >
            {isSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
          </button>

          {/* Hamburger Menu Circular Button - ONLY SHOWS ON MOBILE / TABLET MODE (< lg) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EFEFEF] hover:bg-gray-200 flex lg:hidden items-center justify-center text-gray-700 transition-all duration-150 active:scale-95 cursor-pointer"
            title="Menu Navigasi Mobile"
          >
            {isMobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
          </button>
        </div>
      </div>

      {/* Smooth Premium Glassmorphism Floating Search Bar & Recommendations Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 top-[68px] sm:top-[85px] z-50 bg-black/40 backdrop-blur-sm transition-all duration-300 flex justify-center items-start pt-3 sm:pt-6 px-4">
          <div 
            className="w-full max-w-3xl bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all transform duration-300 animate-in fade-in slide-in-from-top-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Field */}
            <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center gap-3.5 bg-gray-50/50">
              <Search className="w-6 h-6 text-amber-600 shrink-0" />
              <input
                type="text"
                placeholder="Cari produk (contoh: Granit 60x120, Sanitari, Marmer, IBCC)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent border-none outline-none text-base sm:text-lg font-medium text-gray-900 placeholder:text-gray-400"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
              <button
                onClick={() => setIsSearchOpen(false)}
                className="px-3 py-1.5 bg-gray-900 text-white rounded-lg text-xs font-semibold hover:bg-gray-800 transition-colors shrink-0"
              >
                Tutup [ESC]
              </button>
            </div>

            {/* Quick Suggestions & Live Search Results */}
            <div className="p-4 sm:p-6 max-h-[65vh] overflow-y-auto space-y-5">
              
              {/* Quick Tags when empty query */}
              {searchQuery.trim() === '' && (
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Pencarian Populer</h4>
                  <div className="flex flex-wrap gap-2">
                    {quickSearchTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        className="px-3.5 py-1.5 bg-gray-100 hover:bg-amber-50 hover:text-amber-800 hover:border-amber-300 border border-gray-200 text-gray-700 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer"
                      >
                        🔍 {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Live Filter Results */}
              {searchQuery.trim() !== '' && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Hasil Pencarian ({filteredResults.length})
                    </h4>
                  </div>

                  {filteredResults.length > 0 ? (
                    <div className="space-y-2.5">
                      {filteredResults.map((res, idx) => (
                        <div
                          key={idx}
                          onClick={() => {
                            handleNavClick(res.nav);
                            setIsSearchOpen(false);
                          }}
                          className="p-3.5 rounded-xl hover:bg-amber-50/70 border border-transparent hover:border-amber-200/80 transition-all cursor-pointer group flex items-start justify-between gap-3"
                        >
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="px-2 py-0.5 bg-amber-100 text-amber-900 rounded text-[10px] font-bold uppercase tracking-wider">
                                {res.category}
                              </span>
                              <h5 className="font-bold text-sm text-gray-900 group-hover:text-amber-800 transition-colors">
                                {res.title}
                              </h5>
                            </div>
                            <p className="text-xs text-gray-600 line-clamp-1">{res.desc}</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-amber-600 shrink-0 self-center group-hover:translate-x-1 transition-transform" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-400 text-sm">
                      <p className="font-semibold text-gray-600">Tidak ada hasil untuk "{searchQuery}"</p>
                      <p className="text-xs mt-1">Coba kata kunci lain seperti Granit, Marmer, Sanitari, atau IBCC.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-6 shadow-xl animate-in slide-in-from-top duration-200">
          {/* Mobile Links */}
          <div className="flex flex-col space-y-3">
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Navigasi</span>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  handleNavClick(item.id);
                  setIsMobileMenuOpen(false);
                }}

                className={`flex items-center justify-between py-2.5 text-left text-base font-semibold transition-colors ${
                  activeNav === item.id ? 'text-red-600 font-bold' : 'text-gray-800 hover:text-gray-950'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            ))}
          </div>

          {/* Mobile Language and Social */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-gray-400" />
              <span className="text-xs font-medium text-gray-500">Bahasa:</span>
              <div className="flex items-center gap-2">
                <button onClick={() => handleSetLang('CN')} className={`p-1 rounded ${activeLang === 'CN' ? 'ring-2 ring-red-500' : ''}`}><Flags.CN /></button>
                <button onClick={() => handleSetLang('UK')} className={`p-1 rounded ${activeLang === 'UK' ? 'ring-2 ring-blue-500' : ''}`}><Flags.UK /></button>
                <button onClick={() => handleSetLang('ID')} className={`p-1 rounded ${activeLang === 'ID' ? 'ring-2 ring-red-500' : ''}`}><Flags.ID /></button>
              </div>
            </div>

            {/* Mobile Socials */}
            <div className="flex items-center gap-3.5 bg-[#EFEFEF] px-4 py-2 rounded-full">
              <a href="#" className="text-gray-700"><svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 2.494 6.341 6.341 0 0 0 1.074 8.78 6.336 6.336 0 0 0 8.784-1.075 6.31 6.31 0 0 0 1.554-4.218V8.868a8.219 8.219 0 0 0 4.219 1.258V6.686z" /></svg></a>
              <a href="#" className="text-gray-700"><svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" /></svg></a>
              <a href="#" className="text-gray-700"><svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path></svg></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// Brand Sub-Header: Seamless bi-directional morphing emergence / docking animation without ghosting
export const BrandSubHeader: React.FC = () => {
  const { t } = useLanguage();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate progress continuously between 0 (top) and 1 (scrolled 130px)
      const progress = Math.min(1, Math.max(0, window.scrollY / 130));
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute scale & translation so it visually emerges from header logo when scrolling up to top,
  // and enters/docks directly into the header logo when scrolling down!
  const logoY = scrollProgress * 125; // moves up by 125px directly to header logo center
  const logoScale = 1 - scrollProgress * 0.52; // shrinks 1.0 -> 0.48 (exact size of header logo)
  
  // Fade out cleanly before scrollProgress = 0.85 so when it lands, there is ZERO double-ghosting/shadow!
  const logoOpacity = Math.max(0, 1 - scrollProgress * 1.35);
  const textOpacity = Math.max(0, 1 - scrollProgress * 2.2);

  return (
    <div className="w-full bg-white pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        
        {/* Left: Brand Logo + 3-line text: JAYA / BERSAMA / INTERIOR */}
        <div className="flex items-center gap-5 relative">
          
          {/* Morphing Logo: Emerges out of header logo on scroll-up, docks into header logo on scroll-down */}
          <div 
            style={{
              transform: `translateY(-${logoY}px) scale(${logoScale})`,
              opacity: logoOpacity,
              transformOrigin: 'top left',
              willChange: 'transform, opacity',
            }}
            className="shrink-0 transition-transform duration-75 ease-out z-[60] relative"
          >
            <CompanyLogo className="h-20 sm:h-24 md:h-28 w-auto" />
          </div>

          {/* 3-Line Text: JAYA / BERSAMA / INTERIOR */}
          <div 
            style={{
              opacity: textOpacity,
              transform: `translateX(-${scrollProgress * 30}px)`,
              willChange: 'transform, opacity',
            }}
            className="flex flex-col font-heading font-extrabold text-xl sm:text-2xl md:text-3xl text-gray-900 tracking-wider leading-snug uppercase transition-transform duration-75 ease-out"
          >
            <span>JAYA</span>
            <span>BERSAMA</span>
            <span>INTERIOR</span>
          </div>
        </div>

        {/* Right: Welcome Greeting & Contact numbers */}
        <div className="flex flex-col items-start sm:items-end justify-center space-y-1 text-gray-500">
          <span className="text-sm sm:text-base font-normal tracking-wide text-gray-400">
            {t('brandSubHeader', 'greeting')}
          </span>
          <div className="flex flex-col items-start sm:items-end font-semibold text-gray-700 text-sm sm:text-base tracking-tight pt-2 space-y-0.5">
            <a href="mailto:jayabersamainterior@gmail.com" className="hover:text-red-600 transition-colors flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              jayabersamainterior@gmail.com
            </a>
            <a href="https://wa.me/62882001078009" target="_blank" rel="noreferrer" className="hover:text-emerald-600 transition-colors flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 opacity-70 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.887-9.892-5.448 0-9.886 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              +62 882-0010-78009
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CompanyHeader;

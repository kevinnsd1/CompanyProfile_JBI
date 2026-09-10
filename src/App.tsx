import { useState } from 'react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { CompanyHeader, BrandSubHeader } from '@/components/Header';
import { VerticalSliderGallery } from '@/components/VerticalSliderGallery';
import { CompanyCardSection } from '@/components/CompanyCardSection';
import { ProjectShowcaseSection } from '@/components/ProjectShowcaseSection';
import { ContactLocationSection } from '@/components/ContactLocationSection';
import { TentangPage } from '@/pages/TentangPage';
import { ProdukPage } from '@/pages/ProdukPage';
import { KontakPage } from '@/pages/KontakPage';

function AppInner() {
  const [activeNav, setActiveNav] = useState<'BERANDA' | 'TENTANG' | 'PRODUK' | 'KONTAK'>('BERANDA');
  const { t } = useLanguage();

  const handleNavigate = (navId: string) => {
    const validNavIds = ['BERANDA', 'TENTANG', 'PRODUK', 'KONTAK'];
    if (validNavIds.includes(navId)) {
      setActiveNav(navId as 'BERANDA' | 'TENTANG' | 'PRODUK' | 'KONTAK');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-gray-800 font-sans selection:bg-red-500 selection:text-white flex flex-col">
      {/* Sticky Top Header Navigation */}
      <CompanyHeader activeNav={activeNav} onNavigate={handleNavigate} />

      {activeNav === 'TENTANG' ? (
        <main className="flex-1">
          <TentangPage onNavigateHome={() => handleNavigate('BERANDA')} />
        </main>
      ) : activeNav === 'PRODUK' ? (
        <main className="flex-1">
          <ProdukPage onNavigateHome={() => handleNavigate('BERANDA')} />
        </main>
      ) : activeNav === 'KONTAK' ? (
        <main className="flex-1">
          <KontakPage onNavigateHome={() => handleNavigate('BERANDA')} />
        </main>
      ) : (
        <main className="flex-1">
          {/* Brand Sub-Header section with Logo + 3-line 'JAYA BERSAMA INTERIOR' & Contact numbers */}
          <BrandSubHeader />

          {/* 3-Column Showcase Image Gallery with Vertical Sliding Animation */}
          <VerticalSliderGallery />

          {/* Sandimas-style Company Card Section with Architectural Background & CTAs */}
          <CompanyCardSection />

          {/* Citatah-style Split Screen Project Category Showcase Section */}
          <ProjectShowcaseSection />

          {/* Contact & Showroom Location Section (IBCC Jalan Ahmad Yani Bandung) */}
          <ContactLocationSection />
        </main>
      )}

      {/* Footer */}
      <footer className="bg-[#181818] text-gray-400 py-10 text-center text-xs border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/assets/logo/logojbi.png" alt="Company Logo" className="h-7 w-auto bg-white p-1 rounded" />
          </div>
          <p>{t('footer', 'copyright')}</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}

export default App;

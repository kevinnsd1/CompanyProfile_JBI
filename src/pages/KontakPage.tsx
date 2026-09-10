import React from 'react';
import { ContactLocationSection } from '@/components/ContactLocationSection';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const KontakPage: React.FC<{ onNavigateHome?: () => void }> = ({ onNavigateHome }) => {
  const { t } = useLanguage();
  return (
    <div className="w-full bg-[#FBFBFB] text-gray-800 min-h-screen">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-gray-50 via-white to-[#FBFBFB] py-14 sm:py-20 border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight max-w-3xl mx-auto leading-tight">
            {t('kontak', 'heroTitle')} <span className="text-red-600">{t('kontak', 'heroHighlight')}</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            {t('kontak', 'heroDesc')}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/62882001078009?text=Halo%20Jaya%20Bersama%20Interior,%20saya%20ingin%20konsultasi%20produk%20interior."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
              <span>{t('kontak', 'ctaWA')}</span>
            </a>
            {onNavigateHome && (
              <button
                onClick={onNavigateHome}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <span>{t('kontak', 'ctaHome')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* CONTACT LOCATION SECTION (existing component with full form, map, contact info) */}
      <ContactLocationSection />

    </div>
  );
};

export default KontakPage;

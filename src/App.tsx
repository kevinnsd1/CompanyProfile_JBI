import { CompanyHeader, BrandSubHeader } from '@/components/Header';
import { VerticalSliderGallery } from '@/components/VerticalSliderGallery';
import { CompanyCardSection } from '@/components/CompanyCardSection';
import { ArrowRight, ChevronRight, Building2, Layers, Award, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-gray-800 font-sans selection:bg-red-500 selection:text-white flex flex-col">
      {/* Sticky Top Header Navigation */}
      <CompanyHeader />

      {/* Brand Sub-Header section with Logo + 3-line 'JAYA BERSAMA INTERIOR' & Contact numbers */}
      <BrandSubHeader />

      {/* 3-Column Showcase Image Gallery with Vertical Sliding Animation */}
      <VerticalSliderGallery />

      {/* Sandimas-style Company Card Section with Architectural Background & CTAs */}
      <CompanyCardSection />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Banner Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white border-t border-b border-gray-100 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div className="space-y-6 text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  Inovasi & Solusi Interior <br className="hidden sm:inline" />
                  <span className="text-red-600">Terpercaya & Berkelanjutan</span>
                </h1>

                <p className="text-gray-600 text-lg leading-relaxed max-w-xl font-normal">
                  Penyedia layanan desain dan produk interior terintegrasi terbaik untuk mendukung kebutuhan proyek hunian, komersial, dan industri Anda.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#produk"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-red-600/20 hover:shadow-lg hover:shadow-red-600/30 active:scale-95"
                  >
                    Jelajahi Produk
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a
                    href="#tentang"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-sm transition-all duration-200 active:scale-95"
                  >
                    Tentang Kami
                  </a>
                </div>
              </div>

              {/* Hero Image Showcase */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-tr from-red-500/20 to-gray-200 rounded-3xl blur-2xl opacity-60" />
                <div className="relative bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/assets/hero.png"
                    alt="JBI Company Hero"
                    className="w-full h-[360px] object-cover object-center"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="p-6 bg-white flex items-center justify-between border-t border-gray-100">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Komitmen Kualitas Utuh</h3>
                      <p className="text-xs text-gray-500">Standar Internasional ISO & Sertifikasi Industri</p>
                    </div>
                    <span className="text-xs font-bold text-red-600 flex items-center gap-1">
                      Pelajari Proyek <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Overview Stats */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="p-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="text-3xl font-extrabold text-gray-900">15+</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Tahun Pengalaman</div>
              </div>

              <div className="p-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="text-3xl font-extrabold text-gray-900">250+</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Proyek Selesai</div>
              </div>

              <div className="p-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-3xl font-extrabold text-gray-900">100%</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Garansi Mutu</div>
              </div>

              <div className="p-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-3xl font-extrabold text-gray-900">50+</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Mitra Strategis</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#181818] text-gray-400 py-10 text-center text-xs border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/assets/logo/logojbi.png" alt="Company Logo" className="h-7 w-auto bg-white p-1 rounded" />
          </div>
          <p>© 2026 Jaya Bersama Interior. Hak Cipta Dilindungi Undang-Undang.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

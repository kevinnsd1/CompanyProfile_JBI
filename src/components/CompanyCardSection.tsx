import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CompanyCardSection: React.FC = () => {
  return (
    <section className="w-full bg-white relative pt-1 pb-16">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Main Card Container with Light Architectural Background */}
        <div className="relative overflow-hidden bg-[#F8F9FA] border border-gray-100/80 rounded-sm py-12 sm:py-16 md:py-20 px-6 sm:px-12 md:px-16">
          
          {/* Subtle Architectural Blueprint Background Graphic */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500" preserveAspectRatio="none">
              <path d="M0,400 L300,100 L700,100 L1000,400 M300,100 L300,500 M700,100 L700,500 M150,250 L850,250 M0,200 L1000,200" stroke="#000" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
              <path d="M100,50 L900,50 M200,150 L800,150 M500,0 L500,500" stroke="#000" strokeWidth="1" fill="none" />
              <circle cx="500" cy="250" r="180" stroke="#000" strokeWidth="1" fill="none" strokeDasharray="6 6" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Paragraph & Underlined Link */}
            <div className="lg:col-span-5 space-y-8">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                <strong className="text-gray-900 font-bold uppercase tracking-wider">JAYA BERSAMA INTERIOR</strong> konsisten sebagai penyedia material & solusi desain interior berkualitas tinggi di Indonesia. Hadirkan berbagai produk unggulan interior dan arsitektural dengan standarisasi tinggi.
              </p>

              <div>
                <a
                  href="#tentang"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-900 underline underline-offset-4 hover:text-red-600 transition-colors group"
                >
                  perjalanan bisnis kami
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column: Slogan & Black Action Button */}
            <div className="lg:col-span-7 lg:pl-8 flex flex-col items-start lg:items-end text-left lg:text-right space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 leading-tight max-w-xl">
                jadikan bangunan lebih bernilai dengan interior & material <span className="font-normal text-gray-900 uppercase">JAYA BERSAMA INTERIOR</span>.
              </h2>

              <div>
                <a
                  href="#produk"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-[#181818] hover:bg-black text-white text-xs sm:text-sm font-medium transition-all duration-200 shadow-xs hover:shadow-md group"
                >
                  eksplor semua produk
                  <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyCardSection;

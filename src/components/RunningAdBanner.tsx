import React from 'react';

interface BrandItem {
  name: string;
  imageSrc: string;
  className?: string;
}

export const RunningAdBanner: React.FC = () => {
  // Brand logos located in public/assets/logo/logobrand/ with custom visual scale tuning
  const brandPartners: BrandItem[] = [
    { name: 'Infiniti', imageSrc: '/assets/logo/logobrand/infiniti.png', className: 'h-10 sm:h-12 max-w-[140px]' },
    { name: 'Sunpower', imageSrc: '/assets/logo/logobrand/sunpower.png', className: 'h-10 sm:h-12 max-w-[150px]' },
    { name: 'Garuda', imageSrc: '/assets/logo/logobrand/garuda.png', className: 'h-11 sm:h-13 max-w-[140px]' },
    { name: 'Kobin', imageSrc: '/assets/logo/logobrand/kobin.png', className: 'h-11 sm:h-13 max-w-[140px]' },
    { name: 'Granito', imageSrc: '/assets/logo/logobrand/granito.png', className: 'h-9 sm:h-11 max-w-[150px]' },
    { name: 'Arna', imageSrc: '/assets/logo/logobrand/arna.png', className: 'h-14 sm:h-16 max-w-[140px] scale-120' },
    { name: 'Roman', imageSrc: '/assets/logo/logobrand/roman.png', className: 'h-10 sm:h-12 max-w-[150px]' },
    { name: 'AER', imageSrc: '/assets/logo/logobrand/aer.png', className: 'h-14 sm:h-16 max-w-[130px] scale-135' },
    { name: 'INA Sanitary', imageSrc: '/assets/logo/logobrand/inasanitary.png', className: 'h-9 sm:h-10 max-w-[140px]' },
    { name: 'Wasser', imageSrc: '/assets/logo/logobrand/wasser.png', className: 'h-14 sm:h-17 max-w-[150px] scale-140' },
    { name: 'Melius', imageSrc: '/assets/logo/logobrand/meliuz.png', className: 'h-14 sm:h-16 max-w-[140px] scale-135' },
    { name: 'Titanium', imageSrc: '/assets/logo/logobrand/titanium.png', className: 'h-11 sm:h-13 max-w-[140px]' },
    { name: 'Platinum', imageSrc: '/assets/logo/logobrand/platinum.png', className: 'h-11 sm:h-13 max-w-[140px]' },
  ];

  // Repeat items in each track so track width easily exceeds any screen resolution
  const trackItems = [...brandPartners, ...brandPartners];

  return (
    <div className="w-full bg-white relative">
      {/* BRAND PARTNER LOGO MARQUEE */}
      <div className="w-full bg-white py-8 sm:py-10 relative overflow-hidden border-t border-b border-gray-100/90">
        {/* Left & Right Smooth Fade Overlays */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

        {/* 100% Seamless Continuous Infinite Scrolling Marquee */}
        <div className="flex w-max animate-marquee-left">
          {/* Track 1 */}
          <div className="flex items-center gap-14 sm:gap-20 pr-14 sm:pr-20 shrink-0">
            {trackItems.map((brand, index) => (
              <div
                key={`t1-${brand.name}-${index}`}
                className="inline-flex items-center justify-center shrink-0 h-16 w-32 sm:w-40 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer transform hover:scale-105 px-2"
                title={brand.name}
              >
                <img
                  src={brand.imageSrc}
                  alt={`${brand.name} Logo`}
                  className={`w-auto object-contain filter grayscale brightness-90 contrast-125 transition-transform ${
                    brand.className || 'h-10 sm:h-12 max-w-[140px]'
                  }`}
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>

          {/* Track 2 (Exact Identical Duplicate for Seamless 0-Gap Infinite Loop) */}
          <div className="flex items-center gap-14 sm:gap-20 pr-14 sm:pr-20 shrink-0">
            {trackItems.map((brand, index) => (
              <div
                key={`t2-${brand.name}-${index}`}
                className="inline-flex items-center justify-center shrink-0 h-16 w-32 sm:w-40 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer transform hover:scale-105 px-2"
                title={brand.name}
              >
                <img
                  src={brand.imageSrc}
                  alt={`${brand.name} Logo`}
                  className={`w-auto object-contain filter grayscale brightness-90 contrast-125 transition-transform ${
                    brand.className || 'h-10 sm:h-12 max-w-[140px]'
                  }`}
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunningAdBanner;

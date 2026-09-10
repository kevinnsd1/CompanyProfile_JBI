import React from 'react';

interface BrandItem {
  name: string;
  imageSrc: string;
  className?: string;
}

export const RunningAdBanner: React.FC = () => {
  // Brand logos located in public/assets/logo/logobrand/ with custom visual scale tuning
  const brandPartners: BrandItem[] = [
    { name: 'Infiniti', imageSrc: '/assets/logo/logobrand/infiniti.png', className: 'h-10 max-w-[130px]' },
    { name: 'Sunpower', imageSrc: '/assets/logo/logobrand/sunpower.png', className: 'h-10 max-w-[140px]' },
    { name: 'Garuda', imageSrc: '/assets/logo/logobrand/garuda.png', className: 'h-11 max-w-[130px]' },
    { name: 'Kobin', imageSrc: '/assets/logo/logobrand/kobin.png', className: 'h-11 max-w-[130px]' },
    { name: 'Granito', imageSrc: '/assets/logo/logobrand/granito.png', className: 'h-9 max-w-[140px]' },
    { name: 'Arna', imageSrc: '/assets/logo/logobrand/arna.png', className: 'h-12 max-w-[130px]' },
    { name: 'Roman', imageSrc: '/assets/logo/logobrand/roman.png', className: 'h-10 max-w-[140px]' },
    { name: 'AER', imageSrc: '/assets/logo/logobrand/aer.png', className: 'h-12 max-w-[120px]' },
    { name: 'INA Sanitary', imageSrc: '/assets/logo/logobrand/inasanitary.png', className: 'h-9 max-w-[130px]' },
    { name: 'Wasser', imageSrc: '/assets/logo/logobrand/wasser.png', className: 'h-12 max-w-[140px]' },
    { name: 'Melius', imageSrc: '/assets/logo/logobrand/meliuz.png', className: 'h-12 max-w-[130px]' },
    { name: 'Titanium', imageSrc: '/assets/logo/logobrand/titanium.png', className: 'h-11 max-w-[130px]' },
    { name: 'Platinum', imageSrc: '/assets/logo/logobrand/platinum.png', className: 'h-11 max-w-[130px]' },
  ];

  // Duplicate 4x — strip always wider than any screen.
  // Animation slides -50% which is exactly 2× set = perfect seamless loop.
  const items = [
    ...brandPartners,
    ...brandPartners,
    ...brandPartners,
    ...brandPartners,
  ];

  return (
    <div className="w-full bg-white relative">
      <div
        className="w-full bg-white py-7 relative border-t border-b border-gray-100/90"
        style={{ overflow: 'hidden' }}
      >
        {/* Left fade */}
        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Single continuous strip */}
        <div className="marquee-strip">
          {items.map((brand, index) => (
            <div key={`m-${index}`} className="marquee-item" title={brand.name}>
              <img
                src={brand.imageSrc}
                alt={`${brand.name} Logo`}
                className={`w-auto object-contain grayscale brightness-90 contrast-125 ${brand.className || 'h-10 max-w-[130px]'}`}
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RunningAdBanner;

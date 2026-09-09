import React, { useState, useEffect } from 'react';

const leftImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80"
];

const middleImages = [
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80"
];

const rightImages = [
  "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80"
];

export const VerticalSliderGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % 4);
    }, 6500);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const getImageStyle = (i: number, direction: 'up' | 'down') => {
    const isActive = i === currentIndex;
    const isPrev = i === prevIndex;

    // Base clip path for hidden state depending on curtain reveal direction
    const hiddenClip = direction === 'up' 
      ? 'inset(100% 0% 0% 0%)'  // Reveal from bottom up (tirai buka ke atas)
      : 'inset(0% 0% 100% 0%)'; // Reveal from top down (tirai buka ke bawah)

    if (isActive) {
      return {
        zIndex: 20,
        clipPath: 'inset(0% 0% 0% 0%)',
        transform: 'scale(1)',
        transition: 'clip-path 2.2s cubic-bezier(0.4, 0, 0.2, 1), transform 2.2s cubic-bezier(0.4, 0, 0.2, 1)'
      };
    }

    if (isPrev) {
      return {
        zIndex: 10,
        clipPath: 'inset(0% 0% 0% 0%)',
        transform: 'scale(1.04)',
        transition: 'transform 2.2s cubic-bezier(0.4, 0, 0.2, 1)'
      };
    }

    return {
      zIndex: 0,
      clipPath: hiddenClip,
      transform: 'scale(1.08)',
      transition: 'none'
    };
  };

  return (
    <section className="w-full bg-white pb-1.5">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-3">
          
          {/* Column 1 (Left, Wide): Curtain Opens UPWARDS */}
          <div className="md:col-span-5 relative overflow-hidden shadow-xs h-[180px] sm:h-[250px] md:h-[320px]">
            {leftImages.map((src, i) => (
              <div
                key={i}
                className="absolute inset-0 w-full h-full"
                style={getImageStyle(i, 'up')}
              >
                <img
                  src={src}
                  alt="Interior Showcase Left"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Column 2 (Middle, Narrow): Curtain Opens DOWNWARDS */}
          <div className="md:col-span-2 relative overflow-hidden shadow-xs h-[180px] sm:h-[250px] md:h-[320px]">
            {middleImages.map((src, i) => (
              <div
                key={i}
                className="absolute inset-0 w-full h-full"
                style={getImageStyle(i, 'down')}
              >
                <img
                  src={src}
                  alt="Interior Showcase Middle"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Column 3 (Right, Wide): Curtain Opens UPWARDS */}
          <div className="md:col-span-5 relative overflow-hidden shadow-xs h-[180px] sm:h-[250px] md:h-[320px]">
            {rightImages.map((src, i) => (
              <div
                key={i}
                className="absolute inset-0 w-full h-full"
                style={getImageStyle(i, 'up')}
              >
                <img
                  src={src}
                  alt="Interior Showcase Right"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default VerticalSliderGallery;

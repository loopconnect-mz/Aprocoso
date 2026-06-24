import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

type PhotoCarouselProps = {
  photos: { src: string; alt?: string }[];
};

export default function PhotoCarousel({ photos }: PhotoCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  if (!photos || photos.length === 0) return null;

  return (
    <div className="relative max-w-6xl mx-auto px-4">
      <div className="overflow-hidden rounded-3xl shadow-2xl" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {photos.map((photo, index) => (
            <div className="relative flex-[0_0_100%] md:flex-[0_0_80%] lg:flex-[0_0_60%] min-w-0 mr-4 md:mr-8" key={index}>
              <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-3xl">
                <img
                  src={photo.src}
                  alt={photo.alt || `Fotografia da APROCOSO ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Pontos de Navegação */}
      <div className="flex justify-center items-center mt-8 gap-3">
        {photos.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-primary-light'
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Ir para a fotografia ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

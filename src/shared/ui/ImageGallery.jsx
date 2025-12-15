import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export const ImageGallery = ({ images = [], title = '' }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      {/* Main Image Gallery with Swiper */}
      <div className="relative rounded-t-2xl overflow-hidden">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          className="aspect-[4/3]"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`${title} - фото ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 z-10 bg-primary-dark/80 backdrop-blur-sm px-3 py-1.5 rounded-lg">
            <span className="text-white text-sm font-medium">
              {activeIndex + 1} / {images.length}
            </span>
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 p-4 overflow-x-auto bg-secondary">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                // Программно переключаемся на нужный слайд
                const swiperInstance = document.querySelector('.swiper')?.swiper;
                if (swiperInstance) {
                  swiperInstance.slideTo(index);
                }
              }}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                index === activeIndex
                  ? 'border-gold'
                  : 'border-transparent opacity-60'
              }`}
            >
              <img
                src={image}
                alt={`${title} - миниатюра ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};


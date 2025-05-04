import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Lightbox from 'yet-another-react-lightbox';
import { homeSliderImages } from './homeSliderImages';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'yet-another-react-lightbox/styles.css';


/* const imageModules = import.meta.glob('../assets/homeSlider/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
}); */

/* const images = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, mod]) => mod); */

const images = homeSliderImages

export default function ImageCarousel() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="w-full aspect-[4/3] md:aspect-[3/2] rounded overflow-hidden shadow">
        <Swiper
          modules={[Autoplay, EffectFade]}
          slidesPerView={1}
          loop={true}
          speed={1000}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 4000 }}
          className="w-full h-full"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                alt={`slide-${i}`}
                onClick={() => {
                  setOpen(true);
                  setIndex(i);
                }}
                className="w-full h-full object-cover cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((src) => ({ src }))}
      />
    </>
  );
}
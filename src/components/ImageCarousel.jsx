import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Lightbox from 'yet-another-react-lightbox';
import 'swiper/css';
import 'swiper/css/pagination';
import 'yet-another-react-lightbox/styles.css';

const imageModules = import.meta.glob('../assets/homeSlider/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
});

const images = Object.values(imageModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map((mod) => mod);

export default function ImageCarousel() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="w-full aspect-[4/3] md:aspect-[3/2] rounded overflow-hidden shadow">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000 }}
          
          className="w-full h-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
                onClick={() => setOpen(true)}
              >
              </div>
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

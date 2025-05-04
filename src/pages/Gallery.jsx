import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import usePageTitle from '../hooks/usePageTitle';
import { portfolioImages } from '../components/portfolioImages';

/* const imageModules = import.meta.glob('../assets/portfolio/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
}); */

const sortedImages = Object.entries(portfolioImages)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([filename, src]) => ({ src, filename }));

export default function Gallery() {
  const location = useLocation();
  usePageTitle(location.pathname);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Determine aspect ratios and layout groups
  const imageRefs = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const updateSizes = () => {
      imageRefs.current = imageRefs.current.slice(0, sortedImages.length);
    };
    updateSizes();
    window.addEventListener('resize', updateSizes);
    return () => window.removeEventListener('resize', updateSizes);
  }, []);

  return (
<section id="gallery" className="bg-white py-12 px-4 max-w-screen-2xl mx-auto">
{/* IG Link Block */}
      <div className="mb-8 text-center">
        <a
          href="https://www.instagram.com/_yu_cc_"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#E4405F] font-medium text-lg hover:underline"
        >
          <FaInstagram size={20} />
          Instagram 即時作品更新
        </a>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex md:flex-wrap md:gap-4">
        {sortedImages.map(({ src }, i) => (
          <div
            key={i}
            ref={el => imageRefs.current[i] = el}
            className="cursor-pointer overflow-hidden rounded shadow hover:opacity-90 transition"
            style={{ flex: '0 0 auto', maxWidth: '100%' }}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <img
              src={src}
              alt={`wedding-${i + 1}`}
              className="h-[400px] w-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {sortedImages.map(({ src }, i) => (
          <div
            key={i}
            className="cursor-pointer"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <img
              src={src}
              alt={`wedding-${i + 1}`}
              className="w-full h-auto rounded shadow hover:opacity-90 transition"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Popup */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={sortedImages.map(({ src }) => ({ src }))}
      />
    </section>
  );
}
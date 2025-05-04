import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import usePageTitle from '../hooks/usePageTitle';

const imageModules = import.meta.glob('../assets/portfolio/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
});

// 按檔名排序的 URL 陣列
const sortedImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([key, mod]) => ({ src: mod, filename: key }));

export default function Gallery() {
  const location = useLocation();
  usePageTitle(location.pathname);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section id="gallery" className="bg-white py-12 px-4 max-w-7xl mx-auto">
      {/* IG Link Block */}
      <div className="mb-8 text-center">
        <a
          href="https://www.instagram.com/_yu_cc_"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#E4405F] font-medium text-lg hover:underline"
        >
          <FaInstagram size={24} />
          Instagram 即時作品更新
        </a>
      </div>

      {/* 圖片自動排列，保證順序一致，橫幅不壓縮 */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {sortedImages.map(({ src }, i) => (
          <img
            key={i}
            src={src}
            alt={`wedding-${i + 1}`}
            className="w-full mb-4 rounded shadow hover:opacity-90 transition cursor-pointer inline-block"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={sortedImages.map(({ src }) => ({ src }))}
      />
    </section>
  );
}
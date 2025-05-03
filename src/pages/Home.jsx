import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section id="home" className="w-full px-4 py-12 md:py-20 max-w-7xl mx-auto">
      {/* RWD container */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* 左側：文字 + 按鈕 */}
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
            正職安卓碼農。<br />
            給也喜歡美好畫面的你們<br />
          </p>

          {/* <Link
            to="#about"
            className="inline-block bg-[#00343C] text-white font-bold text-lg px-6 py-2 rounded tracking-widest"
          >
            看更多
          </Link> */}
        </div>

        {/* 右側：Swiper 輪播圖 */}
            <div className="w-full md:w-[65%] md:absolute md:right-0 md:top-0">
          <ImageCarousel />
        </div>
      </div>
    </section>
  );
}

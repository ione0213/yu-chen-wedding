import React from 'react';
import { useState } from 'react';


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-800">陳 裕 Yu Chen</div>

        {/* desktop menu */}
        <div className="hidden md:flex space-x-6 text-gray-700">
          <a href="#home" className="hover:text-[#00343C]">首頁</a>
          <a href="#about" className="hover:text-[#00343C]">關於我</a>
          <a href="#plans" className="hover:text-[#00343C]">方案資訊</a>
          <a href="#portfolio" className="hover:text-[#00343C]">作品集</a>
          <a href="#contact" className="hover:text-[#00343C]">聯絡我</a>
        </div>

        {/* 漢堡 icon */}
        <div className="md:hidden">
          <button
            className="text-3xl text-gray-800"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* mobile web menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gray-100 z-50 flex flex-col items-center justify-center space-y-4 text-gray-800 text-lg tracking-wide">
          {/* close button */}
          <button
            className="absolute top-4 right-6 text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          <h2 className="text-sm text-gray-500 mb-4">HOME</h2>

          <a href="#about" onClick={() => setMenuOpen(false)}>+ 關於我</a>
          <a href="#plans" onClick={() => setMenuOpen(false)}>+ 方案資訊</a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>+ 作品集</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>預約｜聯絡我</a>

          <div className="text-gray-400 mt-8">－ － －</div>
          <a href="#home" className="text-sm text-gray-600 mt-2" onClick={() => setMenuOpen(false)}>回主頁</a>
        </div>
      )}
    </nav>
  );
}

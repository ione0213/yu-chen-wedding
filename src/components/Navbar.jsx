import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 動態樣式：當前頁面高亮
  const desktopNavItemClass = ({ isActive }) =>
    isActive
      ? 'bg-gray-200 text-gray-500 px-4 py-2 rounded'
      : 'hover:text-[#00343C] px-4 py-2';

  const mobileWebNavItemClass = ({ isActive }) =>
    isActive
      ? 'text-white text-sm tracking-widest'
      : 'text-gray-600 text-sm tracking-widest'

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-bold text-gray-800">
          陳 裕 Yu Chen
        </NavLink>

        {/* 桌面版選單 */}
        <div className="hidden md:flex space-x-6 text-gray-700">
          <NavLink to="/" className={desktopNavItemClass}>首頁</NavLink>
          <NavLink to="/about" className={desktopNavItemClass}>關於我</NavLink>
          <NavLink to="/gallery" className={desktopNavItemClass}>作品集</NavLink>
          <NavLink to="/plans" className={desktopNavItemClass}>方案資訊</NavLink>
          <NavLink to="/contact" className={desktopNavItemClass}>聯絡我</NavLink>
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

      {/* 手機版選單 */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gray-300 z-50 flex flex-col items-center justify-center space-y-4 text-gray-800 text-lg tracking-wide">
          <button className="absolute top-4 right-6 text-3xl" onClick={() => setMenuOpen(false)}>
            ✕
          </button>

          <NavLink to="/" onClick={() => setMenuOpen(false)} className={mobileWebNavItemClass}>HOME</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className={mobileWebNavItemClass}>關於我</NavLink>
          <NavLink to="/gallery" onClick={() => setMenuOpen(false)} className={mobileWebNavItemClass}>作品集</NavLink>
          <NavLink to="/plans" onClick={() => setMenuOpen(false)} className={mobileWebNavItemClass}>方案資訊</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={mobileWebNavItemClass}>預約｜聯絡我</NavLink>
          <div className="text-gray-500 mt-6">－ － －</div>
        </div>
      )}
    </nav>
  );
}

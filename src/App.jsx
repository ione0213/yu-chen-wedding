import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About'
import Gallery from './pages/Gallery';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-[64px] md:mt-[72px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>

      {/* 共用 Footer */}
      <footer className="bg-neutral-900 text-white py-6 mt-16 text-center text-sm">
        {/* 上箭頭 */}
        <div className="flex justify-center mb-2">
        <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="group flex items-center justify-center w-14 h-14 focus:outline-none"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <div className="relative w-10 h-10">
        {/* 箭頭 */}
        <svg
          className="absolute inset-0 w-full h-full stroke-white stroke-[4] transition-transform duration-200"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M6 14L12 8L18 14" />
        </svg>
        {/* hover 白框 */}
        <div className="absolute inset-0 border border-white opacity-0 group-hover:opacity-100 transition-opacity rounded-sm"></div>
      </div>
    </button>
        </div>
        {/* Back to Top 文字 */}
        <a href="#top" className="text-[16px] text-white hover:underline">
          Back to Top
        </a>
        <p className="text-gray-400">
          © 2025 by 陳裕 Yu Chen
        </p>
      </footer>

    </div>
  );
}

export default App;

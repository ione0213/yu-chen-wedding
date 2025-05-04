// src/hooks/usePageTitle.js
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const routeTitles = {
  '/': '首頁',
  '/home': '首頁',
  '/about': '關於我',
  '/gallery': '作品集',
  // 可擴充更多頁面
};

const defaultText = '｜陳裕 婚禮紀錄｜婚紗攝影｜人像寫真'

export default function usePageTitle(pathname) {
    const title = routeTitles[pathname]+defaultText || defaultText;
  
    useEffect(() => {
      document.title = title;
    }, [pathname]);
  
    return title;
}

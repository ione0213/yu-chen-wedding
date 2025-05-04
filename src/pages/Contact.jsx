import usePageTitle from '../hooks/usePageTitle';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { FaLine } from 'react-icons/fa';
import React from 'react';

export default function Contact() {
    const location = useLocation();
    usePageTitle(location.pathname);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://tally.so/widgets/embed.js';
        script.onload = () => {
            if (window.Tally) {
                window.Tally.loadEmbeds();
            }
        };
        document.body.appendChild(script);
    }, []);

    return (
        <section id="contact" className="min-h-screen bg-white py-16 px-4 text-center">
            <h2 className="text-3xl font-semibold mb-2">預約 <span className="mx-3">｜</span> 聯絡我</h2>
            <p className="text-gray-700 mb-8">您可以透過以下方式與我聯繫</p>

            <div className="flex justify-center gap-4 mb-10 flex-wrap">
            {/* 表單按鈕 */}
                <a
                    href="https://forms.gle/bXd5QV4G4nvjAbwp8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-black px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition flex items-center justify-center"
                    >
                    填寫預約表單
                </a>

                {/* Line 按鈕 */}
                <a
                    href="https://line.me/ti/p/TLdBIvg_DK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-6 py-2 flex items-center gap-2 hover:bg-green-700 transition"

                >
                    <FaLine className="text-3xl -ml-1" />
                    加入好友
                </a>
            </div>

            <p className="text-gray-800 mb-6 text-base">或是詳述您的需求，直接填寫資料</p>

            {/* 嵌入 Tally 表單 */}
            <div id="form" className="max-w-xl mx-auto px-4">
        <iframe
          data-tally-src="https://tally.so/embed/woOk1X?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="500"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="聯絡我表單"
          className="w-full"
        ></iframe>
      </div>
        </section>
    );
}

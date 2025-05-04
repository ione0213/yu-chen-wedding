import React from 'react';
import usePageTitle from '../hooks/usePageTitle';

const imageModules = import.meta.glob('../assets/about/*.{jpg,jpeg,png}', {
    eager: true,
    import: 'default',
});

const images = Object.entries(imageModules)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, mod]) => mod);

    export default function About() {
        usePageTitle(location.pathname);
        return (
          <section id="about" className="bg-white overflow-hidden">
            <div className="flex flex-col-reverse md:flex-row">
              {/* 左：程式碼圖 */}
              <div className="w-full md:w-3/4 flex items-start justify-center bg-white">
                <img
                  src={images[0]}
                  alt="About 1"
                  className="w-full h-auto object-cover"
                />
              </div>
      
              {/* 右：大頭照 */}
              <div className="w-full md:w-1/4 flex items-start justify-center">
                <img
                  src={images[1]}
                  alt="About 2"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>
        );
      }
      

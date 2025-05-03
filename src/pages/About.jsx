const imageModules = import.meta.glob('../assets/about/*.{jpg,jpeg,png}', {
    eager: true,
    import: 'default',
  });
  
  const images = Object.entries(imageModules)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, mod]) => mod);
  
  export default function About() {
    return (
      <section id="about" className="min-h-screen bg-white overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row h-auto md:h-screen">
          {/* 左：程式碼圖 */}
          <div className="w-full md:w-3/4 flex items-start justify-center bg-white">
            <img
              src={images[0]}
              alt="About 1"
              className="w-full h-auto max-h-screen object-contain"
            />
          </div>
  
          {/* 右：大頭照 */}
          <div className="w-full md:w-1/4 flex items-start justify-center">
            <img
              src={images[1]}
              alt="About 2"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
    );
  }
  
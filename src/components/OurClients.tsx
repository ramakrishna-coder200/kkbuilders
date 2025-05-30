import brand1 from '../assets/gcon.jpg';
import brand2 from '../assets/brand2.jpg';
import brand3 from '../assets/brand12.jpg';
import brand4 from '../assets/brand3.jpg';
import brand5 from '../assets/brand4.jpg';
import brand6 from '../assets/brand5.jpg';
import brand7 from '../assets/brand6.jpg';
import brand8 from '../assets/brand7.jpg';
import brand9 from '../assets/brand8.png';
import brand10 from '../assets/brand9.svg.png';
import brand11 from '../assets/brand10.jpg';
import brand12 from '../assets/brand11.png';
import brand13 from '../assets/brand13.jpg';
import brand14 from '../assets/kfc.png';
import brand15 from '../assets/mondetez.jpg';


const AntDMarquee = ({ speed = 80 }) => {
  const images = [
    brand1, brand2, brand3, brand4, brand5, brand6,
    brand7, brand8, brand9, brand10, brand11, brand12, brand13, brand14, brand15
  ];

  return (
    <div className="relative py-16 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl"></div>
      
      {/* Title Section */}
      <div className="relative z-10 text-center mb-12">
        <div className="inline-block">
          <h1 
            className="!m-0 !text-4xl md:!text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent font-poppins"
          >
            Trusted Partners & Clients
          </h1>
          <div className="mt-3 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>
        <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Collaborating with industry leaders to deliver exceptional results and innovative solutions
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
        
        {/* Main marquee */}
        <div className="overflow-hidden py-8">
          <div 
            className="flex animate-marquee hover:animation-pause"
            style={{ 
              animationDuration: `${speed}s`,
              width: 'calc(300px * 30)' // Adjust based on number of items
            }}
          >
            {images.concat(images).map((src, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 mx-8 group cursor-pointer"
              >
                <div className="relative w-32 h-20 md:w-40 md:h-24 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border border-slate-200/50">
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer rounded-2xl"></div>
                  
                  <img 
                    src={src} 
                    alt={`Partner ${index + 1}`}
                    className="w-full h-full object-contain p-4 rounded-2xl transition-all duration-500"
                  />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second row moving in opposite direction */}
        <div className="overflow-hidden py-8">
          <div 
            className="flex animate-marquee-reverse hover:animation-pause"
            style={{ 
              animationDuration: `${speed * 1.2}s`,
              width: 'calc(300px * 30)'
            }}
          >
            {images.slice().reverse().concat(images.slice().reverse()).map((src, index) => (
              <div 
                key={`reverse-${index}`} 
                className="flex-shrink-0 mx-8 group cursor-pointer"
              >
                <div className="relative w-32 h-20 md:w-40 md:h-24 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border border-slate-200/50">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer rounded-2xl"></div>
                  
                  <img 
                    src={src} 
                    alt={`Partner ${index + 1}`}
                    className="w-full h-full object-contain p-4 rounded-2xl transition-all duration-500"
                  />
                  
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom stats or additional info */}
      <div className="relative z-10 mt-16 text-center">
        <div className="inline-flex items-center justify-center space-x-8 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-slate-200/50">
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-800">{images.length}+</div>
            <div className="text-sm text-slate-600">Trusted Partners</div>
          </div>
          <div className="h-8 w-px bg-slate-300"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-800">100%</div>
            <div className="text-sm text-slate-600">Satisfaction Rate</div>
          </div>
          <div className="h-8 w-px bg-slate-300"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-800">24/7</div>
            <div className="text-sm text-slate-600">Support Available</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        .animate-marquee {
          animation: marquee linear infinite;
        }
        
        .animate-marquee-reverse {
          animation: marquee-reverse linear infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 1.5s ease-out;
        }
        
        .hover\\:animation-pause:hover {
          animation-play-state: paused;
        }
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        .bg-grid-slate-100\\/50 {
          background-image: radial-gradient(circle, rgb(241 245 249 / 0.5) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>
    </div>
  );
};

export default AntDMarquee;
import React, { useState, useMemo } from "react";
import allEvents from "../data/EventData"; 

// --- SVG COMPONENTS ---

const ImageClipPathSVG = () => (
  <svg width="0" height="0" className="absolute">
    <defs>
      <clipPath id="image-clip" clipPathUnits="objectBoundingBox">
        <path d="M0.331 0.001 L0.010 0.047 V0.988 H0.451 C0.617 0.950 0.953 0.874 0.969 0.871 C0.984 0.868 0.990 0.855 0.992 0.849 C0.991 0.582 0.991 0.043 0.992 0.025 C0.992 0.007 0.970 0.001 0.960 0.001 H0.331 Z" />
      </clipPath>
    </defs>
  </svg>
);

const EventDetailsBorderSVG = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1269 715" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 90.3709V19C1 9.05888 9.05887 1 19 1H315.886C317.125 1 318.362 1.12804 319.575 1.38209L474.3 33.7807C475.513 34.0347 476.75 34.1628 477.989 34.1628H634.5H791.011C792.25 34.1628 793.487 34.0347 794.7 33.7807L949.425 1.38209C950.638 1.12804 951.875 1 953.114 1H1109.62H1250C1259.94 1 1268 9.05887 1268 19V51.1657V101.331V201.663V280.073V358.484V537.225V613.591C1268 621.354 1263.02 628.243 1255.65 630.68L1147.33 666.504L1010.35 713.022C1008.44 713.669 1006.44 713.992 1004.43 713.977L877.205 713.016L746.939 712.033L234.798 713.987C232.529 713.996 230.279 713.575 228.166 712.748L12.4363 628.265C5.53847 625.563 1 618.912 1 611.504V90.3709Z" fill="#1F1F1F" stroke="#F64040" strokeWidth="2"/>
  </svg>
);

const ImageClipShapeSVG = () => (
  <svg className="absolute top-0 right-0 w-auto h-full pointer-events-none" viewBox="0 0 485 722" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMin meet">
    <defs>
      <filter id="filter0_d_389_57" x="0.5" y="0" width="484.011" height="722" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_389_57"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_389_57" result="shape"/>
      </filter>
    </defs>
    <g filter="url(#filter0_d_389_57)">
      <path d="M160 0.5L5 34V713.5H218.5C298.833 686.167 461.4 631 469 629C476.6 627 479.5 617.5 480 613C479.833 420 479.6 30.8 480 18C480.4 5.2 469.833 1 464.5 0.5H160Z" fill="none" stroke="#F64040" strokeWidth="2"/>
    </g>
  </svg>
);

const DesktopPageBorderSVG = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1810 929" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="path-1-inside-1_130_60" fill="white">
      <path d="M1779 3C1787.28 3 1794 9.71573 1794 18V914C1794 922.284 1787.28 929 1779 929H31C22.7157 929 16 922.284 16 914V18C16 9.71573 22.7157 3 31 3H512C536.301 3 556 22.6995 556 47C556 66.8823 572.118 83 592 83H1217C1236.88 83 1253 66.8823 1253 47C1253 22.6995 1272.7 3 1297 3H1779Z" />
    </mask>
    <path d="M1779 3V5C1786.18 5 1792 10.8203 1792 18H1794H1796C1796 8.61116 1788.39 1 1779 1V3ZM1794 18H1792V914H1794H1796V18H1794ZM1794 914H1792C1792 921.18 1786.18 927 1779 927V929V931C1788.39 931 1796 923.389 1796 914H1794ZM1779 929V927H31V929V931H1779V929ZM31 929V927C23.8203 927 18 921.18 18 914H16H14C14 923.389 21.6112 931 31 931V929ZM16 914H18V18H16H14V914H16ZM16 18H18C18 10.8203 23.8203 5 31 5V3V1C21.6112 1 14 8.61116 14 18H16ZM31 3V5H512V3V1H31V3ZM556 47L554 47C554 67.9868 571.013 85 592 85V83V81C573.222 81 558 65.7777 558 47L556 47ZM592 83V85H1217V83V81H592V83ZM1217 83V85C1237.99 85 1255 67.9868 1255 47L1253 47L1251 47C1251 65.7777 1235.78 81 1217 81V83ZM1297 3V5H1779V3V1H1297V3ZM1253 47H1255C1255 23.804 1273.8 5 1297 5V3V1C1271.59 1 1251 21.5949 1251 47H1253ZM512 3V5C535.196 5 554 23.804 554 47H556H558C558 21.5949 537.405 1 512 1V3Z" fill="#F64040" mask="url(#path-1-inside-1_130_60)" />
  </svg>
);

const MobilePageBorderSVG = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 364 742" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="362" height="740" rx="20" stroke="#F64040" strokeWidth="2" />
  </svg>
);

const CardShapeSVG = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 464 636" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 80.5V19C1 9.05888 9.05887 1 19 1H112.169C115.016 1 117.822 1.67525 120.357 2.9703L170.393 28.5297C172.928 29.8248 175.734 30.5 178.581 30.5H285.419C288.266 30.5 291.072 29.8247 293.607 28.5297L343.643 2.9703C346.178 1.67525 348.984 1 351.831 1H445C454.941 1 463 9.05887 463 19V547.07C463 552.122 460.877 556.942 457.148 560.352L406.852 605.648C403.123 609.058 398.303 611 393.25 611H70.75C65.6971 611 60.8766 609.058 57.1484 605.648L6.85163 560.352C3.12343 556.942 1 552.122 1 547.07V80.5Z" fill="#1C1C1C" stroke="#333333" strokeWidth="1" />
  </svg>
);

// --- BUTTON COMPONENTS ---

const DetailsRegisterButton = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-target cursor-none relative w-full max-w-[280px] h-[58px] group font-['KH_Interference'] tracking-widest uppercase text-sm flex items-center justify-center mx-auto transition-all duration-300"
  >
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 285 58"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 1H275C279.971 1 284 5.02944 284 10V31.1021C284 32.2435 283.606 33.3444 282.88 34.2217L273.231 45.3981L262.041 56.622C261.268 57.47 260.16 58 258.998 58H26.0019C24.8402 58 23.7323 57.47 22.9593 56.622L11.769 45.3981L2.11984 34.2217C1.39383 33.3444 1 32.2435 1 31.1021V10C1 5.02944 5.02944 1 10 1Z"
        stroke="#F64040"
        strokeWidth="2"
        className="transition-colors duration-300 group-hover:fill-[#F64040]"
      />
    </svg>
    <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-white">
      Register Now
    </span>
  </a>
);


const ViewDetailsButton = ({ onClick }) => (
  <button onClick={onClick} className="cursor-none cursor-target relative w-full h-[50px] group text-white font-['KH_Interference'] tracking-widest uppercase text-sm hover:opacity-80 transition-opacity">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 379 84" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 1H368C373.523 1 378 5.47716 378 11V37.2012C378 39.9827 376.841 42.639 374.803 44.5312L356.591 61.4326L334.06 80.6143C332.251 82.154 329.953 83 327.577 83H51.4229C49.0474 83 46.7492 82.154 44.9404 80.6143L22.4082 61.4326L4.19727 44.5312C2.15851 42.639 1 39.9827 1 37.2012V11C1 5.47715 5.47715 1 11 1Z" stroke="#F64040" strokeWidth="2" />
    </svg>
    <span className="relative z-10">View Details</span>
  </button>
);

// --- EVENT CARD ---

const EventCard = ({ event, onViewDetailsClick }) => (
  <div className="relative w-11/12 mx-auto aspect-[464/636]">
    <CardShapeSVG />
    <div className="absolute inset-0 p-6 flex flex-col">
      <div className="flex-grow space-y-2 mb-2">
        <h3 className="text-xl font-['KH_Interference'] text-white leading-tight">{event.title}</h3>
        <p className="text-neutral-400 text-xs leading-snug">{event.description.substring(0, 150)}...</p>
      </div>
      <div className="flex-shrink-0 mt-auto">
        <ViewDetailsButton onClick={() => onViewDetailsClick(event)} />
      </div>
    </div>
  </div>
);

// --- FILTER NAVIGATION ---

const FilterNavigation = ({ activeFilter, setActiveFilter }) => (
  <div className="flex justify-center -mt-5 md:-mt-2">
    <div className="relative flex items-center justify-center p-1.5 border-2 border-white rounded-full mx-auto w-full max-w-[300px] md:max-w-md bg-black/30">
      <div className={`absolute top-1/2 -translate-y-1/2 left-1.5 w-[calc(50%-6px)] h-[calc(100%-12px)] bg-red-600 rounded-full transition-transform duration-300 ease-out ${activeFilter === 'non-technical' ? 'translate-x-full' : 'translate-x-0'}`}></div>
      <button onClick={() => setActiveFilter("technical")} className="cursor-pointer relative flex-1 py-2 text-white text-xs md:text-sm uppercase font-['KH_Interference'] tracking-wider text-center">
        Technical Events
      </button>
      <button onClick={() => setActiveFilter("non-technical")} className="cursor-pointer relative flex-1 py-2 text-white text-xs md:text-sm uppercase font-['KH_Interference'] tracking-wider text-center">
        Non-Technical Events
      </button>
    </div>
  </div>
);

// --- EVENT MODAL ---

const EventModal = ({ event, onClose }) => {
  if (!event) return null;
  const handleModalContentClick = (e) => e.stopPropagation();

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <ImageClipPathSVG />

      {/* DESKTOP LAYOUT */}
      <div onClick={handleModalContentClick} className="relative w-full max-w-6xl mx-auto hidden md:flex items-center justify-center animate-scale-in">
        <div className="relative w-full aspect-[1269/715]">
          <EventDetailsBorderSVG />
          
          <div className="absolute left-8 top-16 bottom-16 w-[55%] flex flex-col justify-between text-white font-['KH_Interference'] pr-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl uppercase tracking-wider text-white">{event.title}</h2>
              
              <div className="space-y-3 text-sm text-neutral-300">
                {event.date && (
                  <div className="flex items-center space-x-3">
                    <span className="text-[#F64040]">📅</span>
                    <span>{event.date}</span>
                  </div>
                )}
                {event.venue && (
                  <div className="flex items-center space-x-3">
                    <span className="text-[#F64040]">📍</span>
                    <span>{event.venue}</span>
                  </div>
                )}
              </div>
              
              <p className="text-neutral-300 text-sm leading-relaxed max-h-[280px] overflow-y-auto custom-scrollbar pr-2">
                {event.description}
              </p>
            </div>
            
            <div className="mt-8">
              <DetailsRegisterButton href={event.registrationUrl} />
            </div>
          </div>
          
          <div className="absolute right-[-5px] top-[3px] bottom-0 w-[38%] h-full">
            <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" style={{ clipPath: 'url(#image-clip)' }} />
            <ImageClipShapeSVG />
          </div>
        </div>
      </div>

      {/* MOBILE LAYOUT */}
      <div onClick={handleModalContentClick} className="relative w-full max-w-sm md:hidden bg-[#1C1C1C] border-2 border-[#F64040] rounded-2xl animate-scale-in flex flex-col p-6 space-y-4">
        <img src={event.imageUrl} alt={event.title} className="w-full h-auto aspect-video object-cover rounded-lg" />
        <div className="flex-grow flex flex-col justify-between overflow-hidden">
          <div className="space-y-3 overflow-y-auto custom-scrollbar pr-2">
            <h2 className="text-2xl uppercase tracking-wider text-white">{event.title}</h2>
            
            {(event.date || event.venue) && (
              <div className="space-y-2 text-xs text-neutral-300">
                {event.date && (
                  <div className="flex items-center space-x-2">
                    <span className="text-[#F64040]">📅</span>
                    <span>{event.date}</span>
                  </div>
                )}
                {event.venue && (
                  <div className="flex items-center space-x-2">
                    <span className="text-[#F64040]">📍</span>
                    <span>{event.venue}</span>
                  </div>
                )}
              </div>
            )}
            
            <p className="text-neutral-300 text-sm leading-normal">{event.description}</p>
          </div>
          <div className="mt-6 flex-shrink-0">
            <DetailsRegisterButton href={event.registrationUrl} />
          </div>
        </div>
      </div>

      <button onClick={onClose} className="cursor-pointer absolute top-4 right-4 md:top-6 md:right-6 text-neutral-400 hover:text-white transition-colors z-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

// --- MAIN PAGE ---

const EventsPage = () => {
  const [activeFilter, setActiveFilter] = useState("technical");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = useMemo(() => {
    return allEvents.filter(event => event.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/kh-interference');
        
        .font-kh-interference { font-family: 'KH Interference', sans-serif; }
        .dot-grid { background-image: radial-gradient(circle at 1px 1px, rgba(200, 200, 200, 0.2) 1px, transparent 0); background-size: 20px 20px; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #F64040; border-radius: 2px; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes scale-in {
          from { transform: scale(0.9) translateY(20px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }
        .animate-scale-in { animation: scale-in 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
      `}</style>

      <main className="h-screen w-screen relative overflow-hidden dot-grid font-kh-interference flex items-center justify-center p-4 sm:p-9 bg-black">
        <div className="relative w-full h-full max-w-screen-2xl">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="hidden md:block w-full h-full">
              <DesktopPageBorderSVG />
            </div>
            <div className="block md:hidden w-full h-full">
              <MobilePageBorderSVG />
            </div>
          </div>

          <div className="absolute inset-0 z-10 flex flex-col pt-0">
            <div className="flex-shrink-0 sticky top-0 bg-transparent z-20 pt-8 md:pt-0">
              <FilterNavigation activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            </div>
            
            <div className="flex-grow overflow-y-scroll no-scrollbar pt-12 md:pt-16 pb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-6 md:px-12 lg:px-20">
                {filteredEvents.map(event => (
                  <EventCard key={event.id} event={event} onViewDetailsClick={setSelectedEvent} />
                ))}
              </div>
            </div>

            <div className="flex-shrink-0 h-12 md:h-24"></div>
          </div>
        </div>
      </main>

      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </>
  );
};

export default EventsPage;
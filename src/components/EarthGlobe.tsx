"use client";
import { useState, useEffect } from 'react';
export default function EarthGlobe() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="absolute right-[10rem] top-1/2 transform -translate-y-1/2 z-30">
      <div 
        className={`relative w-95 h-95 cursor-pointer transition-all duration-1000 ease-out ${
          isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        } hover:scale-105`}
        style={{ 
          transform: `perspective(1000px) rotateX(10deg) ${isVisible ? 'scale(1)' : 'scale(0)'}`,
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center'
        }}
      >
        <div 
          className="absolute w-80 h-80 rounded-full overflow-hidden border-4 border-blue-400/30"
          style={{
            left: '32px',
            top: '32px',
            boxShadow: `
              0 0 60px rgba(59, 130, 246, 0.5),
              inset 0 0 30px rgba(0, 0, 0, 0.3),
              0 20px 40px rgba(0, 0, 0, 0.4)
            `
          }}
        >
          <video 
            src="/dotearth.mp4" 
            autoPlay
            loop
            muted
            className="w-full h-full object-cover scale-110"
            style={{
              filter: 'brightness(0.8) contrast(1.2) saturate(1.1)'
            }}
          />
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(circle at 40% 30%, 
                  rgba(255, 255, 255, 0.3) 0%, 
                  rgba(255, 255, 255, 0.1) 20%, 
                  transparent 40%
                ),
                radial-gradient(circle at 60% 70%, 
                  rgba(0, 0, 0, 0.4) 0%, 
                  rgba(0, 0, 0, 0.2) 30%, 
                  transparent 60%
                )
              `
            }}
          ></div>
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                linear-gradient(135deg, 
                  rgba(59, 130, 246, 0.2) 0%, 
                  transparent 50%, 
                  rgba(29, 78, 216, 0.3) 100%
                )
              `
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
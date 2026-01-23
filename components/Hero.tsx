import React from 'react';
import { Flag, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden bg-white selection:bg-orange-100 selection:text-orange-900 pt-20 pb-10">

      {/* Soft Gradient Background (Reference Match) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 5% 5%, rgba(255, 240, 229, 0.8) 0%, rgba(255, 255, 255, 0) 60%),
            radial-gradient(circle at 95% 95%, rgba(230, 244, 234, 0.8) 0%, rgba(255, 255, 255, 0) 60%),
            #ffffff
          `
        }} />

      <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center text-center">

        {/* National Pride Initiative Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white border border-stone-100 shadow-sm mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#FF671F]"></span>
          <span className="text-[#9C4221] font-bold tracking-widest text-[10px] md:text-xs uppercase">
            NATIONAL PRIDE INITIATIVE
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display font-black tracking-tighter leading-[0.85] mb-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
          <span className="block text-4xl md:text-7xl text-stone-300 mb-2 tracking-tight font-bold">
            Pledge for
          </span>
          <div className="flex justify-center gap-x-2 md:gap-x-4 text-5xl md:text-7xl lg:text-[9rem] font-black tracking-tight leading-none pb-6 whitespace-nowrap">
            <div className="relative inline-block pb-[0.1em]">
              {/* Gradient Fill Layer (Front) - Horizontal Gradient Match */}
              <span className="relative z-10 text-transparent bg-clip-text" style={{
                backgroundImage: 'linear-gradient(90deg, #FF671F 0%, #000080 50%, #046A38 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
              }}>
                MY INDIAN FLAG
              </span>
            </div>
          </div>
        </h1>

        <p className="text-xl md:text-2xl text-stone-500 mb-12 max-w-xl mx-auto font-medium leading-relaxed">
          My promise for the Indian Flag
        </p>

        {/* CTA Button */}
        <button
          onClick={onStart}
          className="group relative inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1c1917] text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 overflow-hidden"
        >
          Pledge Now
          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </button>

      </div>
    </div >
  );
};
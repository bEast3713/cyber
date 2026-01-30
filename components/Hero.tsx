
import React from 'react';
import { ChevronDown, Gift } from 'lucide-react';

interface HeroProps {
  onTrigger?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onTrigger }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden text-center px-4">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none animate-pulse" />
      
      <div className="relative z-10 max-w-4xl">
        <div className="mb-6 flex flex-col items-center animate-fade-in">
           <span className="font-mono text-purple-500 text-[10px] tracking-[0.8em] uppercase mb-4">
             Initial Configuration: SUCCESSFUL
           </span>
           <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </div>
        
        <h1 className="text-8xl md:text-[11rem] font-light tracking-tighter text-white mb-2 leading-tight">
          Tarnija<span className="text-purple-600 animate-pulse">.</span>
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-10 overflow-hidden">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
          <p className="text-gray-400 font-mono text-[10px] tracking-[0.3em] uppercase whitespace-nowrap">
            v{new Date().getFullYear()}.{new Date().getMonth() + 1}.{new Date().getDate()}
          </p>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
        </div>

        <p className="max-w-xl mx-auto text-gray-400 leading-relaxed text-lg font-light italic mb-12 animate-fade-in animation-delay-500">
          "A sanctuary of digital peace and elegant logic, built specifically for the one who hacks happiness into every day."
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 animate-fade-in animation-delay-700">
           <button 
             onClick={() => document.getElementById('terminal')?.scrollIntoView({ behavior: 'smooth' })}
             className="w-full md:w-auto px-10 py-4 bg-white/5 border border-white/10 text-white rounded-full font-mono text-xs uppercase tracking-[0.2em] hover:bg-purple-600/20 hover:border-purple-500/50 transition-all duration-500"
           >
             Initialize Console
           </button>
           <button 
             onClick={onTrigger}
             className="w-full md:w-auto px-10 py-4 bg-purple-600 text-white rounded-full font-mono text-xs uppercase tracking-[0.2em] hover:bg-purple-500 shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all duration-500 flex items-center justify-center gap-2 group"
           >
             <Gift size={16} className="group-hover:rotate-12 transition-transform" />
             Execute Surprise
           </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 animate-bounce">
        <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white">Descend</span>
        <ChevronDown size={20} className="text-purple-500" />
      </div>
    </div>
  );
};

export default Hero;

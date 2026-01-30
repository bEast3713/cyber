
import React, { useEffect, useState } from 'react';
import { Sparkles, X, Star, Heart, Cake } from 'lucide-react';

interface SurpriseCakeProps {
  onClose: () => void;
}

const SurpriseCake: React.FC<SurpriseCakeProps> = ({ onClose }) => {
  const [phase, setPhase] = useState<'entry' | 'cake' | 'message'>('entry');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer1 = setTimeout(() => setPhase('cake'), 2000);
    const timer2 = setTimeout(() => setPhase('message'), 4000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl transition-all duration-1000 overflow-hidden ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <button 
        onClick={onClose} 
        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-3 rounded-full border border-white/10 z-[110] bg-black/20"
      >
        <X size={24} />
      </button>

      {/* Background Glitch Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={i}
            className="absolute h-px bg-purple-500 animate-[glitch_2s_infinite]"
            style={{
              width: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative text-center w-full max-w-4xl px-4">
        {phase === 'entry' && (
          <div className="space-y-4 animate-pulse">
            <h2 className="text-4xl md:text-6xl font-mono text-purple-400 tracking-[0.5em] uppercase">Overriding Reality</h2>
            <div className="flex justify-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full" />
              <div className="w-3 h-3 bg-purple-500 rounded-full" />
              <div className="w-3 h-3 bg-purple-500 rounded-full" />
            </div>
          </div>
        )}

        {phase !== 'entry' && (
          <div className="space-y-12 animate-in fade-in zoom-in duration-1000">
            <div className="relative inline-block">
               <div className="w-72 h-72 mx-auto bg-gradient-to-t from-purple-900/60 to-transparent rounded-full flex items-center justify-center border border-purple-500/40 shadow-[0_0_100px_rgba(168,85,247,0.3)]">
                  <div className="relative mt-8 group">
                    {/* Floating Hearts */}
                    <Heart className="absolute -top-20 -left-12 text-pink-500 w-8 h-8 animate-bounce" />
                    <Star className="absolute -top-24 right-4 text-yellow-400 w-6 h-6 animate-pulse" />
                    
                    {/* The Digital Cake */}
                    <div className="relative">
                      {/* Animated Flame */}
                      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-3 h-12 bg-purple-300 rounded-t-full shadow-[0_0_20px_purple]">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-6 h-10 bg-gradient-to-t from-orange-400 via-yellow-300 to-white rounded-full animate-flame blur-[1px]" />
                      </div>
                      
                      {/* Cake Body */}
                      <div className="w-40 h-14 bg-purple-600 rounded-lg shadow-2xl border-x border-purple-400/30" />
                      <div className="w-48 h-14 bg-purple-700 rounded-lg -mt-2 shadow-2xl border-x border-purple-400/30" />
                      <div className="w-56 h-14 bg-purple-800 rounded-lg -mt-2 shadow-2xl border-x border-purple-400/30" />
                      
                      {/* "Frosting" code bits */}
                      <div className="absolute top-2 left-4 text-[8px] font-mono text-white/40">01101000 01100010 01100100</div>
                    </div>
                  </div>
               </div>
               <Sparkles className="absolute -top-6 -right-6 w-16 h-16 text-yellow-400 animate-spin" />
            </div>

            <div className="space-y-6">
              <h2 className="text-6xl md:text-9xl font-light tracking-tighter text-white uppercase italic leading-none">
                HAPPY <span className="text-purple-500 font-mono font-bold block md:inline underline decoration-purple-500/30">LEVEL {new Date().getFullYear() - 2000}+</span>
              </h2>
              <p className="text-purple-300 font-mono tracking-[0.5em] uppercase text-sm md:text-base animate-pulse">
                Encryption Protocol: CELEBRATION_STORM_v1.0
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="font-mono text-xs text-green-400 border border-green-500/30 bg-green-500/5 py-3 px-8 rounded-full">
                CORE STATUS: UNSTOPPABLE
              </div>
              <div className="font-mono text-xs text-cyan-400 border border-cyan-500/30 bg-cyan-500/5 py-3 px-8 rounded-full">
                FRIENDSHIP: OPTIMIZED
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes flame {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.9; }
          50% { transform: translateX(-50%) scale(1.2) rotate(5deg); opacity: 1; }
        }
        @keyframes glitch {
          0% { transform: translateX(0); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          60% { transform: translateX(-1px); }
          80% { transform: translateX(1px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default SurpriseCake;

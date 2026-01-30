
import React from 'react';
import { Cpu, Zap, Wind, Heart, Binary, Fingerprint, Shield, Search } from 'lucide-react';

const stats = [
  { name: 'Empathy.js', level: 99, icon: Heart, color: 'text-pink-400', desc: 'Predictive kindness algorithms.' },
  { name: 'Zen_Logic', level: 94, icon: Wind, color: 'text-blue-300', desc: 'Maintains composure under stress.' },
  { name: 'Cyber_Intelligence', level: 88, icon: Cpu, color: 'text-purple-400', desc: 'High-speed problem solving.' },
  { name: 'Kindness_Buffer', level: 100, icon: Zap, color: 'text-yellow-400', desc: 'Infinite storage for good vibes.' },
  { name: 'Encryption_Skills', level: 92, icon: Binary, color: 'text-cyan-400', desc: 'Keeps secrets behind 256-bit AES.' },
  { name: 'Uniqueness_Hash', level: 100, icon: Fingerprint, color: 'text-emerald-400', desc: 'Collision-free identity signature.' },
];

const CharacterStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {stats.map((stat, i) => (
        <div 
          key={i}
          className="bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all group relative overflow-hidden backdrop-blur-md"
        >
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
          
          <div className={`absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 transition-opacity ${stat.color}`}>
            <stat.icon size={80} />
          </div>

          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className={`p-3 rounded-2xl bg-gray-950 border border-white/10 shadow-inner ${stat.color}`}>
              <stat.icon size={22} />
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-gray-300 group-hover:text-white transition-colors">{stat.name}</h3>
              <p className="text-[10px] text-gray-500 font-mono mt-1 opacity-0 group-hover:opacity-100 transition-opacity uppercase">{stat.desc}</p>
            </div>
          </div>

          <div className="space-y-3 relative z-10">
            <div className="flex justify-between text-[10px] font-mono">
              <span className="text-gray-500 uppercase tracking-tighter">Bit_Stability</span>
              <span className={stat.color}>{stat.level}%</span>
            </div>
            <div className="h-1.5 w-full bg-gray-950/50 rounded-full overflow-hidden border border-white/5">
              <div 
                className={`h-full bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-[1.5s] ease-out delay-${i*100}`}
                style={{ width: `${stat.level}%` }}
              />
            </div>
          </div>
          
          {/* Technical footer bit */}
          <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
            <span className="font-mono text-[8px] uppercase tracking-tighter">ID: 0x{Math.floor(Math.random()*1000).toString(16)}</span>
            <div className="flex gap-1">
               <div className="w-1 h-1 bg-purple-500 rounded-full" />
               <div className="w-1 h-1 bg-purple-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterStats;

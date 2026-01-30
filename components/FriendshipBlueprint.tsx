
import React from 'react';
import { Activity, Zap, Share2, Target } from 'lucide-react';

const FriendshipBlueprint: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-[0.5em] text-purple-500 mb-4">Architecture</h2>
          <h3 className="text-4xl font-light text-white leading-tight">The <span className="italic">Friendship</span> Blueprint</h3>
        </div>
        
        <p className="text-gray-400 font-light leading-relaxed text-lg">
          An analytical breakdown of the system components that make the Tarnija-Connection the most stable network in existence. 
          Built on low-latency empathy and high-bandwidth laughter.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex gap-4 p-4 border border-white/5 rounded-2xl bg-white/[0.02]">
            <Activity className="text-purple-400 shrink-0" size={20} />
            <div>
              <h4 className="text-white text-sm font-mono uppercase">Heartbeat Sync</h4>
              <p className="text-[11px] text-gray-500 font-mono">Always on, zero packet loss.</p>
            </div>
          </div>
          <div className="flex gap-4 p-4 border border-white/5 rounded-2xl bg-white/[0.02]">
            <Zap className="text-yellow-400 shrink-0" size={20} />
            <div>
              <h4 className="text-white text-sm font-mono uppercase">Humor Flux</h4>
              <p className="text-[11px] text-gray-500 font-mono">Infinite gigabyte capacity.</p>
            </div>
          </div>
          <div className="flex gap-4 p-4 border border-white/5 rounded-2xl bg-white/[0.02]">
            <Share2 className="text-blue-400 shrink-0" size={20} />
            <div>
              <h4 className="text-white text-sm font-mono uppercase">Secret Bridge</h4>
              <p className="text-[11px] text-gray-500 font-mono">P2P Encryption enabled.</p>
            </div>
          </div>
          <div className="flex gap-4 p-4 border border-white/5 rounded-2xl bg-white/[0.02]">
            <Target className="text-red-400 shrink-0" size={20} />
            <div>
              <h4 className="text-white text-sm font-mono uppercase">Future Cache</h4>
              <p className="text-[11px] text-gray-500 font-mono">Endless storage for goals.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative aspect-square flex items-center justify-center">
        {/* Animated SVG Blueprint */}
        <svg viewBox="0 0 400 400" className="w-full max-w-[400px]">
          <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(168, 85, 247, 0.2)" strokeWidth="1" strokeDasharray="5 5" className="animate-[spin_60s_linear_infinite]" />
          <circle cx="200" cy="200" r="100" fill="none" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="2" strokeDasharray="10 5" className="animate-[spin_40s_linear_infinite_reverse]" />
          
          {/* Core Node */}
          <circle cx="200" cy="200" r="20" className="fill-purple-500 animate-pulse" />
          
          {/* Connecting Lines */}
          <g className="stroke-purple-500/40" strokeWidth="1.5">
            <line x1="200" y1="200" x2="300" y2="100" className="animate-[dash_3s_ease-in-out_infinite]" strokeDasharray="100" />
            <line x1="200" y1="200" x2="100" y2="100" className="animate-[dash_3s_ease-in-out_infinite_delay-1]" strokeDasharray="100" />
            <line x1="200" y1="200" x2="300" y2="300" className="animate-[dash_3s_ease-in-out_infinite_delay-2]" strokeDasharray="100" />
            <line x1="200" y1="200" x2="100" y2="300" className="animate-[dash_3s_ease-in-out_infinite_delay-3]" strokeDasharray="100" />
          </g>

          {/* Orbiting Nodes */}
          <circle cx="300" cy="100" r="6" className="fill-blue-400 animate-bounce" />
          <circle cx="100" cy="100" r="6" className="fill-pink-400 animate-bounce delay-100" />
          <circle cx="300" cy="300" r="6" className="fill-yellow-400 animate-bounce delay-200" />
          <circle cx="100" cy="300" r="6" className="fill-cyan-400 animate-bounce delay-300" />
        </svg>

        <div className="absolute inset-0 bg-purple-500/5 blur-[80px] rounded-full" />
      </div>

      <style>{`
        @keyframes dash {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
};

export default FriendshipBlueprint;

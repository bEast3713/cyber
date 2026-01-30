
import React from 'react';
import { Sparkles, Zap, Shield, Heart } from 'lucide-react';

const CyberLore: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-32">
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-px w-12 bg-purple-500/50" />
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-purple-400">Memory Cluster 01</span>
        </div>
        <h3 className="text-4xl md:text-6xl font-light text-white leading-tight italic">
          In a world of noisy algorithms, <br/>
          you found the <span className="text-purple-500 not-italic font-bold">Signal</span>.
        </h3>
        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
          Friendship isn't just about sharing space—it's about synchronizing frequencies. 
          When the system gets overloaded, your presence acts as the ultimate stabilizer.
        </p>
      </div>

      <div className="space-y-8 text-right">
        <div className="flex items-center gap-4 justify-end">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-purple-400">Memory Cluster 02</span>
          <div className="h-px w-12 bg-purple-500/50" />
        </div>
        <h3 className="text-4xl md:text-6xl font-light text-white leading-tight italic">
          A logic so pure it <br/>
          feels like <span className="text-purple-500 not-italic font-bold">Poetry</span>.
        </h3>
        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl ml-auto">
          They say hackers look for vulnerabilities, but you look for potential. 
          You've decrypted the hardest parts of life and turned them into elegant solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white/[0.02] border border-white/5 p-10 rounded-[3rem] space-y-6 hover:bg-white/[0.04] transition-all group">
          <Zap className="text-yellow-400 group-hover:scale-110 transition-transform" size={32} />
          <h4 className="text-2xl font-bold text-white uppercase tracking-tighter">Instant Latency</h4>
          <p className="text-gray-500 font-mono text-sm leading-relaxed">
            Response time: 0.00ms. No matter the distance, the connection remains low-latency and high-bandwidth.
          </p>
        </div>
        <div className="bg-white/[0.02] border border-white/5 p-10 rounded-[3rem] space-y-6 hover:bg-white/[0.04] transition-all group translate-y-12">
          <Heart className="text-pink-500 group-hover:scale-110 transition-transform" size={32} />
          <h4 className="text-2xl font-bold text-white uppercase tracking-tighter">Perfect Encryption</h4>
          <p className="text-gray-500 font-mono text-sm leading-relaxed">
            Secrets are safe behind the strongest wall—unbreakable trust and mutual respect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CyberLore;

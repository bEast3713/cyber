
import React, { useState, useEffect } from 'react';
import { Terminal, Heart, Image as ImageIcon, Sparkles, User, List, Activity, Code } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-8 py-5 ${scrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-white/5 py-3' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => scrollTo('home')}>
          <div className="w-11 h-11 rounded-xl bg-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.3)] group-hover:scale-110 transition-all duration-500">
            <Heart size={20} className="text-white fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs font-black tracking-[0.3em] text-white">TARNIJA_OS</span>
            <span className="font-mono text-[8px] text-purple-400/60 uppercase tracking-tighter">Secure.v2.5</span>
          </div>
        </div>

        <div className="hidden lg:flex gap-12 text-white/50 font-mono text-[9px] uppercase tracking-[0.3em]">
          <button onClick={() => scrollTo('metrics')} className="hover:text-white transition-all flex items-center gap-2 group">
            <Activity size={12} className="group-hover:text-purple-400" /> <span>Health</span>
          </button>
          <button onClick={() => scrollTo('stats')} className="hover:text-white transition-all flex items-center gap-2 group">
            <User size={12} className="group-hover:text-purple-400" /> <span>Profile</span>
          </button>
          <button onClick={() => scrollTo('code')} className="hover:text-white transition-all flex items-center gap-2 group">
            <Code size={12} className="group-hover:text-purple-400" /> <span>Source</span>
          </button>
          <button onClick={() => scrollTo('terminal')} className="hover:text-white transition-all flex items-center gap-2 group">
            <Terminal size={12} className="group-hover:text-purple-400" /> <span>Console</span>
          </button>
          <button onClick={() => scrollTo('memories')} className="hover:text-white transition-all flex items-center gap-2 group">
            <ImageIcon size={12} className="group-hover:text-purple-400" /> <span>Vault</span>
          </button>
          <button onClick={() => scrollTo('wish')} className="px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 hover:bg-purple-600 hover:text-white transition-all flex items-center gap-2 group">
            <Sparkles size={12} /> <span>Sync</span>
          </button>
        </div>

        <div className="lg:hidden text-white opacity-60">
          <List size={22} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

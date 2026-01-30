
import React, { useEffect, useState, useRef } from 'react';
import { initLenis, getLenis } from './lib/lenis';
import Hero from './components/Hero';
import PhotoVault from './components/PhotoVault';
import Terminal from './components/Terminal';
import WishGenerator from './components/WishGenerator';
import SurpriseCake from './components/SurpriseCake';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CharacterStats from './components/CharacterStats';
import SystemLog from './components/SystemLog';
import ZenCanvas from './components/ZenCanvas';
import DecryptionGame from './components/DecryptionGame';
import FriendshipBlueprint from './components/FriendshipBlueprint';
import SystemMetrics from './components/SystemMetrics';
import CodeEditor from './components/CodeEditor';
import IntroOverlay from './components/IntroOverlay';
import DataRain from './components/DataRain';
import CyberLore from './components/CyberLore';
import { Volume2, VolumeX, Terminal as TerminalIcon, Shield, Activity, Search, Database } from 'lucide-react';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showSurprise, setShowSurprise] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [partyMode, setPartyMode] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const lenis = initLenis();
    setIsLoaded(true);

    const interval = setInterval(() => {
      if (Math.random() > 0.99) {
        document.body.classList.add('glitch-active');
        setTimeout(() => document.body.classList.remove('glitch-active'), 120);
      }
    }, 3000);

    return () => {
      lenis?.destroy();
      clearInterval(interval);
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(e => console.log("Audio play blocked", e));
        setIsMuted(false);
      } else {
        audioRef.current.pause();
        setIsMuted(true);
      }
    }
  };

  const triggerSurprise = () => {
    setPartyMode(true);
    setTimeout(() => {
      setShowSurprise(true);
      if (audioRef.current && isMuted) {
        toggleMusic();
      }
    }, 800);
  };

  const onIntroComplete = () => {
    setShowIntro(false);
    // Trigger audio on first interaction if possible, or wait for toggle
  };

  if (!isLoaded) return null;

  return (
    <div className={`min-h-screen transition-all duration-1000 ${partyMode ? 'bg-indigo-950' : 'bg-[#030712]'} selection:bg-purple-500/40 overflow-x-hidden`}>
      {showIntro && <IntroOverlay onComplete={onIntroComplete} />}
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
        <ZenCanvas active={!partyMode} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>
      
      <audio 
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3"
      />

      <Navbar />

      <div className="fixed bottom-8 left-8 z-[60]">
        <button 
          onClick={toggleMusic}
          className="p-5 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/5 text-purple-400 hover:text-white hover:bg-purple-600/20 transition-all flex items-center gap-3 group shadow-[0_0_40px_rgba(0,0,0,0.5)]"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} className="animate-pulse" />}
          <div className="flex flex-col items-start pr-2">
            <span className="font-mono text-[8px] uppercase tracking-widest text-gray-500">Audio Stream</span>
            <span className="font-mono text-[10px] uppercase font-bold">{isMuted ? "OFFLINE" : "ONLINE"}</span>
          </div>
        </button>
      </div>

      {showSurprise && <SurpriseCake onClose={() => setShowSurprise(false)} />}
      
      <main className={`relative z-10 transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <section id="home">
          <Hero onTrigger={triggerSurprise} />
        </section>

        <section id="metrics" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <SystemMetrics />
          </div>
        </section>
        
        <section id="stats" className="py-32 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center mb-16 text-center">
              <div className="p-4 bg-purple-500/10 rounded-3xl mb-4 border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                <Search className="text-purple-400" size={28} />
              </div>
              <h2 className="text-5xl font-light text-white tracking-tight mb-2 italic">Dossier: <span className="text-purple-500 not-italic font-bold uppercase tracking-widest">Tarnija</span></h2>
              <p className="font-mono text-[10px] text-gray-500 tracking-[0.5em] uppercase">Security Classification: TOP_SECRET</p>
            </div>
            <CharacterStats />
          </div>
        </section>

        <section id="rain" className="py-20 relative overflow-hidden h-[600px]">
           <DataRain />
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h3 className="text-6xl md:text-8xl font-black text-white/5 uppercase tracking-[0.2em] select-none">DATA_TRANQUILITY</h3>
           </div>
        </section>

        <section id="lore" className="py-32 px-4 bg-black/40">
           <CyberLore />
        </section>

        <section id="code" className="py-32 px-4">
          <div className="max-w-5xl mx-auto">
             <CodeEditor />
          </div>
        </section>

        <section id="blueprint" className="py-32 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
             <FriendshipBlueprint />
          </div>
        </section>

        <section id="terminal" className="py-20 px-4 bg-black/40 backdrop-blur-md">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px w-12 bg-purple-500/30" />
              <TerminalIcon className="text-purple-500" size={20} />
              <h2 className="text-xl font-mono tracking-[0.4em] text-purple-100 uppercase">
                Remote_Console
              </h2>
              <div className="h-px w-12 bg-purple-500/30" />
            </div>
            <Terminal onTriggerSurprise={triggerSurprise} />
          </div>
        </section>

        <section id="decryption" className="py-32 px-4">
          <div className="max-w-3xl mx-auto">
            <DecryptionGame />
          </div>
        </section>

        <section id="log" className="py-32 px-4 bg-black/30">
          <div className="max-w-4xl mx-auto">
            <SystemLog />
          </div>
        </section>

        <section id="memories" className="py-40 px-4 relative">
          <div className="max-w-6xl mx-auto">
             <div className="flex flex-col items-center mb-16 text-center">
               <div className="p-4 bg-purple-500/10 rounded-2xl mb-4 border border-white/5">
                <Database className="text-purple-400" size={24} />
               </div>
               <h2 className="text-4xl font-light tracking-tight text-white mb-4">Memory <span className="text-purple-500 italic">Clusters</span></h2>
               <div className="h-1 w-20 bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-6" />
              <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.2em] max-w-lg leading-relaxed">
                Persistent storage for Visual Assets. Initializing cloud sync for subject Tarnija.
              </p>
             </div>
            <PhotoVault />
          </div>
        </section>

        <section id="wish" className="py-40 px-4 bg-gradient-to-b from-transparent to-purple-900/10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-12">
               <Activity className="text-purple-500" size={20} />
               <h3 className="font-mono text-[9px] uppercase tracking-[0.6em] text-purple-400">Synchronizing Birthday Frequency</h3>
            </div>
            <WishGenerator />
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .glitch-active {
          filter: hue-rotate(15deg) contrast(1.2) brightness(1.1);
          transform: scale(1.002);
        }
        ::selection {
          background: #a855f7;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default App;

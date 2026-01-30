
import React, { useEffect, useState } from 'react';
import { ShieldCheck, Lock, Terminal as TerminalIcon, Cpu } from 'lucide-react';

interface IntroOverlayProps {
  onComplete: () => void;
}

const IntroOverlay: React.FC<IntroOverlayProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const bootLogs = [
    "Initializing Kernal_v2.5.0...",
    "Mounting /mnt/memories...",
    "Checking Friendship Integrity... 100%",
    "Bypassing Reality Filters...",
    "Scanning for subject: TARNIJA",
    "Identity CONFIRMED",
    "Unlocking Birthday Protocol...",
    "System Ready."
  ];

  useEffect(() => {
    let currentLog = 0;
    const interval = setInterval(() => {
      if (currentLog < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[currentLog]]);
        currentLog++;
      } else {
        clearInterval(interval);
        setTimeout(() => setStage(1), 1000);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (stage === 2) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [stage, onComplete]);

  return (
    <div className={`fixed inset-0 z-[200] bg-[#030712] flex flex-col items-center justify-center p-6 transition-all duration-1000 ${stage === 2 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="max-w-md w-full space-y-12 text-center">
        <div className="relative">
          <div className="w-24 h-24 mx-auto bg-purple-500/10 rounded-3xl flex items-center justify-center border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.2)]">
            {stage === 0 ? (
              <Cpu className="text-purple-500 animate-pulse" size={40} />
            ) : (
              <ShieldCheck className="text-purple-400 scale-125 transition-transform" size={40} />
            )}
          </div>
          {stage === 0 && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 border-2 border-purple-500/20 border-t-purple-500 rounded-full animate-spin" />
          )}
        </div>

        <div className="space-y-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.5em] text-purple-400">Authenticating Connection</h2>
          <div className="bg-black/40 border border-white/5 rounded-xl p-6 h-48 overflow-y-auto text-left font-mono text-[10px] space-y-1 scrollbar-none">
            {logs.map((log, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-gray-700">[{new Date().toLocaleTimeString()}]</span>
                <span className="text-purple-300 animate-in fade-in slide-in-from-left-2">{log}</span>
              </div>
            ))}
            {stage === 0 && <div className="w-2 h-4 bg-purple-500 animate-pulse inline-block align-middle ml-1" />}
          </div>
        </div>

        {stage === 1 && (
          <button
            onClick={() => setStage(2)}
            className="group relative w-full py-4 bg-purple-600 text-white font-mono text-xs uppercase tracking-[0.4em] rounded-xl hover:bg-purple-500 transition-all overflow-hidden animate-in zoom-in shadow-[0_0_30px_rgba(168,85,247,0.3)]"
          >
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            Establish Neural Link
          </button>
        )}
      </div>
    </div>
  );
};

export default IntroOverlay;

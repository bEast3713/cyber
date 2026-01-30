
import React, { useState, useRef, useEffect } from 'react';
import { TerminalLine } from '../types';

interface TerminalProps {
  onTriggerSurprise?: () => void;
}

const Terminal: React.FC<TerminalProps> = ({ onTriggerSurprise }) => {
  const [lines, setLines] = useState<TerminalLine[]>([
    { text: 'SYSTEM BOOT SUCCESSFUL', type: 'success' },
    { text: 'USER AUTHENTICATED: TARNIJA', type: 'output' },
    { text: 'Type "help" to see available commands.', type: 'output' },
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newLines = [...lines, { text: `> ${input}`, type: 'input' } as TerminalLine];
    const cmd = input.toLowerCase().trim();

    switch (cmd) {
      case 'help':
        newLines.push({ text: 'Available commands: about, manifest, uptime, birthday, scan, clear, hack, zen', type: 'output' });
        break;
      case 'about':
        newLines.push({ text: 'Subject: Tarnija. Spec: Peaceful, brilliant, logic-driven.', type: 'output' });
        break;
      case 'manifest':
        newLines.push({ text: 'Accessing core ideology...', type: 'output' });
        newLines.push({ text: 'Rule 01: Peace is the highest priority.', type: 'success' });
        newLines.push({ text: 'Rule 02: Curiosity fuels the system.', type: 'success' });
        newLines.push({ text: 'Rule 03: Celebration is mandatory today.', type: 'success' });
        break;
      case 'scan':
        newLines.push({ text: 'Scanning local memory clusters...', type: 'output' });
        setTimeout(() => {
          setLines(prev => [...prev, 
            { text: 'Found secret_file: memories_encrypted.zip', type: 'success' },
            { text: 'Found secret_file: future_plans.exe', type: 'success' },
            { text: 'Found secret_file: happiness_patch.v1', type: 'success' }
          ]);
        }, 800);
        break;
      case 'uptime':
        newLines.push({ text: 'Friendship uptime: 100% since deployment.', type: 'success' });
        newLines.push({ text: 'Zero crashes detected.', type: 'output' });
        break;
      case 'zen':
        newLines.push({ text: 'Initializing tranquility protocol...', type: 'output' });
        newLines.push({ text: 'The noise of the world is just background radiation.', type: 'success' });
        break;
      case 'birthday':
      case 'cake':
        newLines.push({ text: 'DEPLOYING SURPRISE_CAKE.EXE...', type: 'output' });
        setTimeout(() => { if (onTriggerSurprise) onTriggerSurprise(); }, 800);
        break;
      case 'hack':
        newLines.push({ text: 'Accessing high-serotonin zones...', type: 'output' });
        setTimeout(() => setLines(prev => [...prev, { text: 'SUCCESS: You are officially legendary.', type: 'success' }]), 1000);
        break;
      case 'clear':
        setLines([]);
        setInput('');
        return;
      default:
        newLines.push({ text: `Unknown command: ${cmd}`, type: 'error' });
    }

    setLines(newLines);
    setInput('');
  };

  return (
    <div className="bg-[#0b0e14]/90 backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
      <div className="bg-gray-900/50 px-5 py-3 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
          <span className="ml-4 font-mono text-[10px] text-gray-600 uppercase tracking-widest italic">Tarnija-OS Terminal</span>
        </div>
        <div className="font-mono text-[9px] text-purple-500 animate-pulse">● SECURE</div>
      </div>
      <div 
        ref={scrollRef}
        className="p-8 h-80 overflow-y-auto font-mono text-sm space-y-3 scroll-smooth scrollbar-none"
      >
        {lines.map((line, i) => (
          <div key={i} className={`
            ${line.type === 'error' ? 'text-red-400' : ''}
            ${line.type === 'success' ? 'text-green-400' : ''}
            ${line.type === 'output' ? 'text-purple-300' : ''}
            ${line.type === 'input' ? 'text-white font-bold brightness-125' : ''}
          `}>
            {line.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleCommand} className="p-5 bg-black/40 flex items-center gap-3 border-t border-white/5">
        <span className="text-purple-500 font-mono font-black text-lg">›</span>
        <input 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent border-none outline-none flex-1 font-mono text-white placeholder-purple-900/50"
          placeholder="Type 'help'..."
          autoFocus
        />
      </form>
    </div>
  );
};

export default Terminal;

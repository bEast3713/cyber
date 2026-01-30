
import React from 'react';

const logs = [
  { date: '2023.01.12', event: 'Initial Connection Established', detail: 'Packet exchange successful. Mutual interests detected.' },
  { date: '2023.06.24', event: 'Buffer Overflow: Laughter', detail: 'Critical system failure due to uncontrollable jokes. Heart rates synchronized.' },
  { date: '2023.11.02', event: 'Encryption Upgrade', detail: 'Secret sharing protocol activated. Trust levels at 100%.' },
  { date: '2024.03.15', event: 'Zen Mode Discovered', detail: 'Shared a moment of absolute tranquility. Systems stabilized.' },
  { date: '2024.05.21', event: 'Birthday.exe Deployment', detail: 'Executing major version update for Tarnija. Happiness maximized.' },
];

const SystemLog: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono uppercase tracking-[0.4em] text-purple-500 mb-2">History Trace</h2>
        <h3 className="text-3xl font-light text-white italic">Friendship Log Files</h3>
      </div>
      <div className="relative border-l border-white/10 ml-4 pl-8 space-y-12">
        {logs.map((log, i) => (
          <div key={i} className="relative group">
            {/* Timeline dot */}
            <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-gray-950 border-2 border-purple-500 group-hover:scale-125 transition-transform" />
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-purple-400 opacity-60">{log.date}</span>
              <h4 className="text-xl font-light text-white group-hover:text-purple-300 transition-colors">{log.event}</h4>
              <p className="text-gray-500 text-sm italic font-light max-w-lg leading-relaxed">{log.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemLog;

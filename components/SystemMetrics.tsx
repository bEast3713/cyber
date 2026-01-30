
import React, { useEffect, useState } from 'react';
import { Activity, BarChart3, CloudRain, Cpu } from 'lucide-react';

const SystemMetrics: React.FC = () => {
  const [metrics, setMetrics] = useState({
    empathy: 99.8,
    latency: 0.001,
    vibe: 100,
    uptime: 0
  });

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        empathy: 99.8 + Math.random() * 0.2,
        latency: 0.001 + Math.random() * 0.005,
        uptime: Math.floor((Date.now() - start) / 1000)
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-black/40 backdrop-blur-md border border-white/5 p-6 rounded-3xl flex flex-col items-center justify-center text-center group hover:border-purple-500/30 transition-all">
        <Activity className="text-purple-500 mb-3 group-hover:scale-110 transition-transform" size={20} />
        <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest mb-1">Heart_Rate</span>
        <span className="text-2xl font-mono text-white tracking-tighter">{metrics.empathy.toFixed(1)}<span className="text-[10px] ml-1 text-purple-400">bpm</span></span>
      </div>

      <div className="bg-black/40 backdrop-blur-md border border-white/5 p-6 rounded-3xl flex flex-col items-center justify-center text-center group hover:border-blue-500/30 transition-all">
        <Cpu className="text-blue-500 mb-3 group-hover:scale-110 transition-transform" size={20} />
        <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest mb-1">Latency</span>
        <span className="text-2xl font-mono text-white tracking-tighter">{metrics.latency.toFixed(4)}<span className="text-[10px] ml-1 text-blue-400">ms</span></span>
      </div>

      <div className="bg-black/40 backdrop-blur-md border border-white/5 p-6 rounded-3xl flex flex-col items-center justify-center text-center group hover:border-green-500/30 transition-all">
        <BarChart3 className="text-green-500 mb-3 group-hover:scale-110 transition-transform" size={20} />
        <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest mb-1">Vibe_Sync</span>
        <span className="text-2xl font-mono text-white tracking-tighter">1.00<span className="text-[10px] ml-1 text-green-400">ratio</span></span>
      </div>

      <div className="bg-black/40 backdrop-blur-md border border-white/5 p-6 rounded-3xl flex flex-col items-center justify-center text-center group hover:border-yellow-500/30 transition-all">
        <CloudRain className="text-yellow-500 mb-3 group-hover:scale-110 transition-transform" size={20} />
        <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest mb-1">Uptime</span>
        <span className="text-2xl font-mono text-white tracking-tighter">{metrics.uptime}s</span>
      </div>
    </div>
  );
};

export default SystemMetrics;

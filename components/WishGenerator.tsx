
import React, { useState } from 'react';
import { generateBirthdayWish } from '../services/gemini';
import { Sparkles, Loader2, RefreshCcw } from 'lucide-react';

const WishGenerator: React.FC = () => {
  const [wish, setWish] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const getWish = async () => {
    setLoading(true);
    const result = await generateBirthdayWish("Tarnija");
    setWish(result || "");
    setLoading(false);
  };

  return (
    <div className="relative p-12 bg-white/5 border border-white/10 rounded-3xl overflow-hidden text-center">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      
      <div className="mb-8">
        <Sparkles className="w-10 h-10 text-purple-400 mx-auto mb-4 animate-bounce" />
        <h3 className="text-2xl font-light text-white uppercase tracking-widest mb-2">AI Synchronization</h3>
        <p className="text-gray-400 font-light italic">Generating unique birthday frequencies for Tarnija...</p>
      </div>

      <div className="min-h-[100px] flex items-center justify-center mb-8">
        {loading ? (
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
            <span className="font-mono text-xs text-purple-500">Decrypting wish...</span>
          </div>
        ) : wish ? (
          <p className="text-xl md:text-2xl font-light leading-relaxed text-purple-100 max-w-2xl mx-auto italic animate-fade-in">
            "{wish}"
          </p>
        ) : (
          <p className="text-gray-500 font-mono text-sm">Ready for transmission.</p>
        )}
      </div>

      <button
        onClick={getWish}
        disabled={loading}
        className="group relative inline-flex items-center gap-3 px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-full transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100"
      >
        <span className="font-mono text-sm tracking-widest uppercase">
          {wish ? "Regenerate" : "Sync Wish"}
        </span>
        {wish ? <RefreshCcw size={16} /> : <Sparkles size={16} />}
      </button>
    </div>
  );
};

export default WishGenerator;


import React, { useState, useEffect } from 'react';
import { Unlock, Lock, AlertCircle } from 'lucide-react';

const DecryptionGame: React.FC = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const correctCode = ['2', '0', '0', '8']; // Set to Tarnija's birth year

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);
    setError(false);
    
    // Auto-focus next
    if (value && index < 3) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleVerify = () => {
    if (code.join('') === correctCode.join('')) {
      setIsUnlocked(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <div className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-5">
        <Lock size={120} />
      </div>

      <h3 className="text-xl font-light text-white uppercase tracking-widest mb-6">Encrypted Transmission</h3>
      
      {!isUnlocked ? (
        <div className="space-y-8 relative z-10">
          <p className="text-gray-400 text-sm font-light italic">
            Enter the 4-digit security protocol to decrypt the secret frequency.
            <br/><span className="text-[10px] text-purple-500 uppercase font-mono mt-1 block">(Hint: Birth Year)</span>
          </p>
          
          <div className="flex justify-center gap-4">
            {code.map((digit, i) => (
              <input
                key={i}
                id={`code-${i}`}
                type="text"
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                className={`w-14 h-16 bg-black/40 border-2 rounded-xl text-center text-2xl font-mono text-purple-400 focus:border-purple-500 outline-none transition-all ${error ? 'border-red-500 animate-shake' : 'border-white/10'}`}
                maxLength={1}
              />
            ))}
          </div>

          <button
            onClick={handleVerify}
            className="px-10 py-3 bg-purple-600/20 border border-purple-500/40 text-purple-400 rounded-full font-mono text-xs uppercase tracking-widest hover:bg-purple-600 hover:text-white transition-all"
          >
            Verify Identity
          </button>
          
          {error && (
            <div className="flex items-center justify-center gap-2 text-red-400 font-mono text-[10px] animate-pulse">
              <AlertCircle size={12} /> ACCESS DENIED: INVALID KEY
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-6 animate-fade-in">
          <div className="flex justify-center">
            <div className="p-4 bg-green-500/10 rounded-full border border-green-500/30 text-green-400 animate-bounce">
              <Unlock size={32} />
            </div>
          </div>
          <h4 className="text-green-400 font-mono text-xs uppercase tracking-[0.3em]">Decryption Successful</h4>
          <div className="bg-black/40 p-6 rounded-2xl border border-white/5 text-left">
            <p className="text-purple-100 font-light leading-relaxed italic">
              "Tarnija, you are the most elegant algorithm in this system. Your logic brings peace, and your friendship is the only constant in an ever-changing network. Happy birthday to the one who makes code feel like poetry."
            </p>
          </div>
          <p className="font-mono text-[9px] text-gray-500 uppercase">Checksum: VALID_0x00FFBD</p>
        </div>
      )}
      
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake { animation: shake 0.2s ease-in-out 3; }
      `}</style>
    </div>
  );
};

export default DecryptionGame;


import React, { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

const CodeEditor: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const code = `/**
 * Tarnija Birthday Algorithm v2.5
 * License: FRIENDSHIP_CORE
 */

const Tarnija = {
  status: "Birthday Mode",
  kindness: Infinity,
  zenLevel: 10.0,
  hackerRank: "ELITE",
  isAwesome: true
};

function celebrate(subject) {
  if (subject.isAwesome) {
    subject.zenLevel += 1;
    subject.happiness = subject.kindness;
    console.log("HAPPY BIRTHDAY TARNIJA!");
    return "SUCCESS_CELEBRATION_INIT";
  }
}

// Initialize the sequence
const result = celebrate(Tarnija);
export default result;`;

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#0d1117] rounded-3xl border border-white/10 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
      <div className="bg-gray-900 px-6 py-4 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/40" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
            <div className="w-3 h-3 rounded-full bg-green-500/40" />
          </div>
          <span className="font-mono text-xs text-gray-500 ml-4">Birthday.js — Tarnija-OS</span>
        </div>
        <button onClick={copyCode} className="text-gray-500 hover:text-white transition-colors">
          {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
        </button>
      </div>
      <div className="p-8 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed text-gray-300">
          {code.split('\n').map((line, i) => (
            <div key={i} className="flex group">
              <span className="w-8 text-gray-700 select-none text-right mr-6 font-light">{i + 1}</span>
              <span className="whitespace-pre">
                {line.split(/(const|function|if|return|export|default|subject|Tarnija|true|Infinity|console|log)/).map((part, j) => {
                   const colorMap: Record<string, string> = {
                     'const': 'text-purple-400',
                     'function': 'text-purple-400',
                     'if': 'text-purple-400',
                     'return': 'text-purple-400',
                     'export': 'text-purple-400',
                     'default': 'text-purple-400',
                     'subject': 'text-blue-300',
                     'Tarnija': 'text-cyan-400',
                     'true': 'text-orange-300',
                     'Infinity': 'text-orange-300',
                     'console': 'text-yellow-200',
                     'log': 'text-yellow-200'
                   };
                   return <span key={j} className={colorMap[part] || ''}>{part}</span>;
                })}
              </span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
};

export default CodeEditor;


import React from 'react';
import { Github, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/5 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div className="flex items-center gap-2 text-white font-mono text-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            System: Tarnija.birthday-os v2024.1.0
          </div>
          <p className="text-gray-500 text-xs font-light">
            Made with <Heart size={10} className="inline text-red-400" /> for the best friend in the cluster.
          </p>
        </div>

        <div className="flex gap-6 text-gray-400">
          <a href="#" className="hover:text-purple-400 transition-colors"><Github size={20} /></a>
          <a href="#" className="hover:text-purple-400 transition-colors"><Twitter size={20} /></a>
        </div>

        <div className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Tarnija Birthday Project
        </div>
      </div>
    </footer>
  );
};

export default Footer;

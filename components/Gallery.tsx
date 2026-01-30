
import React from 'react';
import { Memory } from '../types';

const memories: Memory[] = [
  {
    id: 1,
    title: "Binary Tranquility",
    description: "That moment we realized peace and logic aren't mutually exclusive.",
    image: "https://picsum.photos/seed/tech1/800/600",
    tag: "LOG"
  },
  {
    id: 2,
    title: "System Uptime",
    description: "Another year of successful execution and zero crashes.",
    image: "https://picsum.photos/seed/zen2/800/600",
    tag: "DATA"
  },
  {
    id: 3,
    title: "Encrypted Heart",
    description: "The deepest friendship protocol in the network.",
    image: "https://picsum.photos/seed/nature3/800/600",
    tag: "CORE"
  },
  {
    id: 4,
    title: "Neon Dreams",
    description: "Visualizing a future where every birthday is a new release.",
    image: "https://picsum.photos/seed/neon4/800/600",
    tag: "VIEW"
  }
];

const Gallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {memories.map((mem) => (
        <div 
          key={mem.id} 
          className="group relative overflow-hidden rounded-xl border border-white/5 bg-gray-900/40 transition-all hover:border-purple-500/50"
        >
          <div className="aspect-video overflow-hidden">
            <img 
              src={mem.image} 
              alt={mem.title}
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-medium text-white group-hover:text-purple-400 transition-colors">
                {mem.title}
              </h3>
              <span className="font-mono text-[10px] bg-purple-500/20 text-purple-400 px-2 py-1 rounded">
                {mem.tag}
              </span>
            </div>
            <p className="text-gray-400 font-light text-sm italic">
              {mem.description}
            </p>
          </div>
          {/* Overlay glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

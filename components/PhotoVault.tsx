
import React, { useState } from 'react';
import { Upload, Lock, ShieldCheck, Trash2, FileCode } from 'lucide-react';

interface LocalPhoto {
  id: string;
  url: string;
  size: string;
}

const PhotoVault: React.FC = () => {
  const [photos, setPhotos] = useState<LocalPhoto[]>([]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map((file: File) => ({
        id: Math.random().toString(36).substr(2, 9),
        url: URL.createObjectURL(file),
        size: (file.size / 1024 / 1024).toFixed(2) + 'MB'
      }));
      setPhotos(prev => [...prev, ...newFiles]);
    }
  };

  const removePhoto = (id: string) => {
    setPhotos(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Upload Trigger */}
        <label className="group relative cursor-pointer border border-white/10 rounded-3xl aspect-[4/5] flex flex-col items-center justify-center hover:border-purple-500/40 transition-all bg-white/[0.02] overflow-hidden backdrop-blur-xl">
          <input type="file" multiple className="hidden" onChange={handleUpload} accept="image/*" />
          <div className="p-5 bg-purple-500/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
            <Upload className="w-8 h-8 text-purple-400" />
          </div>
          <p className="text-white font-mono text-[10px] uppercase tracking-[0.3em]">Import Visuals</p>
          <p className="text-gray-500 text-[9px] font-mono mt-2">LOCAL_DISK_SECURE</p>
          <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </label>

        {photos.map((photo) => (
          <div key={photo.id} className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-black shadow-2xl transition-all hover:translate-y-[-4px]">
            <img src={photo.url} alt="Vault item" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500" />
            
            {/* HUD Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
              <div className="flex justify-between items-start">
                <div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                   <span className="font-mono text-[9px] text-white">LOADED</span>
                </div>
                <div className="bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10">
                  <ShieldCheck className="text-purple-500 w-4 h-4" />
                </div>
              </div>
              
              <div className="space-y-3 pointer-events-auto">
                <div className="bg-black/60 backdrop-blur-xl p-4 rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-[10px] text-purple-400">DATA_{photo.id.toUpperCase()}</span>
                    <span className="font-mono text-[10px] text-gray-500">{photo.size}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                       <FileCode size={12} className="text-gray-500" />
                       <span className="font-mono text-[9px] text-gray-400 uppercase">Static_Memory</span>
                    </div>
                    <button 
                      onClick={() => removePhoto(photo.id)} 
                      className="text-red-400 hover:text-red-300 transition-colors p-1"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none" />
          </div>
        ))}

        {photos.length < 2 && Array.from({ length: 2 - photos.length }).map((_, i) => (
          <div key={i} className="border border-white/5 rounded-3xl aspect-[4/5] flex flex-col items-center justify-center bg-white/[0.01] opacity-50 grayscale">
            <Lock className="text-gray-700 w-8 h-8 mb-4" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-gray-800">Awaiting Data</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoVault;

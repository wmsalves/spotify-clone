import { Play, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';

export default function Player() {
  return (
    <div className="h-20 bg-black border-t border-gray-800 px-4 flex items-center justify-between">
      <div className="flex items-center w-1/3">
        <img 
          src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&fit=crop" 
          alt="Album cover" 
          className="w-14 h-14 rounded-md"
        />
        <div className="ml-4">
          <div className="text-white text-sm">Never Gonna Give You Up</div>
          <div className="text-gray-400 text-xs">Rick Astley</div>
        </div>
      </div>

      <div className="flex flex-col items-center w-1/3">
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-white">
            <Shuffle size={20} />
          </button>
          <button className="text-gray-400 hover:text-white">
            <SkipBack size={20} />
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-105 transition">
            <Play size={20} className="text-black ml-1" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <SkipForward size={20} />
          </button>
          <button className="text-gray-400 hover:text-white">
            <Repeat size={20} />
          </button>
        </div>
        <div className="w-full max-w-md flex items-center gap-2 mt-2">
          <span className="text-xs text-gray-400">2:14</span>
          <div className="h-1 flex-1 bg-gray-800 rounded-full">
            <div className="h-1 w-1/3 bg-white rounded-full"></div>
          </div>
          <span className="text-xs text-gray-400">3:33</span>
        </div>
      </div>

      <div className="flex items-center justify-end w-1/3">
        <Volume2 size={20} className="text-gray-400" />
        <div className="w-24 h-1 bg-gray-800 rounded-full ml-2">
          <div className="h-1 w-2/3 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
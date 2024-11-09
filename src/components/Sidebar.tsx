import { Home, Search, Library, Plus, Heart } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 bg-black h-full flex flex-col">
      <div className="p-6">
        <div className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-black">♫</span>
          </span>
          Spotify
        </div>
      </div>
      
      <nav className="px-2">
        <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white px-4 py-3 transition">
          <Home size={24} />
          Home
        </a>
        <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white px-4 py-3 transition">
          <Search size={24} />
          Search
        </a>
        <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white px-4 py-3 transition">
          <Library size={24} />
          Your Library
        </a>
      </nav>

      <div className="mt-6 px-6">
        <button className="w-full flex items-center gap-2 text-gray-300 hover:text-white py-2">
          <div className="w-8 h-8 bg-gray-800 rounded-md flex items-center justify-center">
            <Plus size={20} />
          </div>
          Create Playlist
        </button>
        <button className="w-full flex items-center gap-2 text-gray-300 hover:text-white py-2">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-md flex items-center justify-center">
            <Heart size={20} />
          </div>
          Liked Songs
        </button>
      </div>

      <div className="mt-4 px-6">
        <div className="border-t border-gray-800 pt-4">
          <div className="text-xs text-gray-400 hover:text-white py-2 cursor-pointer">Chill Vibes</div>
          <div className="text-xs text-gray-400 hover:text-white py-2 cursor-pointer">Rock Classics</div>
          <div className="text-xs text-gray-400 hover:text-white py-2 cursor-pointer">Jazz Essentials</div>
          <div className="text-xs text-gray-400 hover:text-white py-2 cursor-pointer">Workout Mix</div>
        </div>
      </div>
    </div>
  );
}
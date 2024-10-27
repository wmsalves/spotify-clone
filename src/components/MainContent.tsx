import { Play, Heart } from 'lucide-react';

const playlists = [
  {
    title: "Today's Top Hits",
    description: "$uicideboy$ is on top of the Hottest 50!",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
  },
  {
    title: "Rap",
    description: "New music from Kendrick, Travis Scott and more",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
  },
  {
    title: "All Out 2010s",
    description: "The biggest songs of the 2010s",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop"
  },
  {
    title: "Rock Classics",
    description: "Rock legends & Epic songs",
    image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&h=300&fit=crop"
  }
];

export default function MainContent() {
  return (
    <div className="flex-1 bg-gradient-to-b from-indigo-900 to-black overflow-auto">
      <div className="p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Good afternoon</h1>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          {playlists.slice(0, 6).map((playlist, index) => (
            <div key={index} className="flex items-center bg-white/5 hover:bg-white/10 transition rounded-md overflow-hidden group">
              <img src={playlist.image} alt={playlist.title} className="w-20 h-20" />
              <div className="flex-1 p-4">
                <div className="text-white font-semibold">{playlist.title}</div>
              </div>
              <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 mr-4 hover:scale-105 transition">
                <Play size={24} className="text-black ml-1" />
              </button>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-white mt-8">Made for you</h2>
        <div className="grid grid-cols-4 gap-6 mt-4">
          {playlists.map((playlist, index) => (
            <div key={index} className="bg-white/5 p-4 rounded-md hover:bg-white/10 transition group">
              <div className="relative">
                <img src={playlist.image} alt={playlist.title} className="w-full aspect-square object-cover rounded-md mb-4" />
                <button className="absolute bottom-2 right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 hover:scale-105 transition shadow-xl">
                  <Play size={24} className="text-black ml-1" />
                </button>
              </div>
              <div className="text-white font-semibold">{playlist.title}</div>
              <div className="text-gray-400 text-sm mt-1">{playlist.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
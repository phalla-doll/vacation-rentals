import { Map } from 'lucide-react';

export function MapButton() {
  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-20">
      <button className="bg-gray-900 hover:bg-black text-white px-5 py-3.5 rounded-full flex items-center gap-2 text-[15px] font-semibold shadow-lg transition-transform hover:scale-105 active:scale-95">
        Show Map
        <Map size={18} />
      </button>
    </div>
  );
}

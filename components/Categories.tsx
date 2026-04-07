import { Eye, Waves, Palmtree, Tractor, Wind, Castle, Sparkles, Building2, TrendingUp, BedDouble, Gem, SlidersHorizontal, ChevronRight } from 'lucide-react';

const categories = [
  { name: 'Amazing views', icon: Eye, active: true },
  { name: 'Beachfront', icon: Waves },
  { name: 'Amazing pools', icon: Palmtree },
  { name: 'Farms', icon: Tractor },
  { name: 'Windmills', icon: Wind },
  { name: 'Mansions', icon: Castle },
  { name: 'OMG!', icon: Sparkles },
  { name: 'Iconic cities', icon: Building2 },
  { name: 'Trending', icon: TrendingUp },
  { name: 'Rooms', icon: BedDouble },
  { name: 'Luxe', icon: Gem },
];

export function Categories() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between gap-6 bg-white">
      <div className="flex items-center gap-8 overflow-x-auto no-scrollbar pb-1">
        {categories.map((cat) => (
          <button key={cat.name} className={`flex flex-col items-center gap-2 min-w-max pb-3 border-b-2 transition-colors ${cat.active ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'}`}>
            <cat.icon size={24} strokeWidth={cat.active ? 2 : 1.5} />
            <span className="text-[13px] font-medium">{cat.name}</span>
          </button>
        ))}
      </div>
      <div className="flex items-center gap-4 pl-4">
        <button className="hidden md:flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 hover:shadow-md transition-all shrink-0">
          <ChevronRight size={16} />
        </button>
        <button className="hidden md:flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2.5 text-[13px] font-medium hover:bg-gray-50 hover:border-gray-900 transition-all shrink-0">
          <SlidersHorizontal size={16} />
          Filters
        </button>
      </div>
    </div>
  );
}

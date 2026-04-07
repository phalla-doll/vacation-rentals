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
    <div className="px-6 md:px-10 xl:px-20 pt-5 flex items-center justify-between gap-6 bg-white border-b border-neutral-200 shadow-sm">
      <div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
        {categories.map((cat) => (
          <button key={cat.name} className={`flex flex-col items-center gap-2 min-w-max pb-4 border-b-2 transition-all duration-200 ${cat.active ? 'border-neutral-900 text-neutral-900' : 'border-transparent text-neutral-500 hover:text-neutral-900 hover:border-neutral-300'}`}>
            <cat.icon size={24} strokeWidth={cat.active ? 2 : 1.5} />
            <span className="text-[14px] font-medium">{cat.name}</span>
          </button>
        ))}
      </div>
      <div className="flex items-center gap-4 pl-4 bg-white mb-4">
        <button className="hidden md:flex items-center justify-center w-8 h-8 rounded-full border border-neutral-300 hover:shadow-md transition-all shrink-0 text-neutral-700">
          <ChevronRight size={16} />
        </button>
        <button className="hidden md:flex items-center gap-2 border border-neutral-200 rounded-xl px-4 py-2.5 text-[14px] font-medium hover:bg-neutral-50 hover:border-neutral-900 transition-all shrink-0 shadow-sm text-neutral-900">
          <SlidersHorizontal size={16} />
          Filters
        </button>
      </div>
    </div>
  );
}

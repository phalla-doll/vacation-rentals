import { Eye, Waves, Palmtree, Tractor, Wind, Castle, Sparkles, Building2, TrendingUp, BedDouble, Gem } from 'lucide-react';

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
    <div className="px-6 md:px-10 xl:px-20 pt-5 bg-white border-b border-neutral-200 shadow-sm">
      <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar w-full">
        {categories.map((cat) => (
          <button key={cat.name} className={`flex-1 flex flex-col items-center justify-center gap-2 min-w-max pb-4 border-b-2 transition-all duration-200 ${cat.active ? 'border-neutral-900 text-neutral-900' : 'border-transparent text-neutral-500 hover:text-neutral-900 hover:border-neutral-300'}`}>
            <cat.icon size={24} strokeWidth={cat.active ? 2 : 1.5} />
            <span className="text-[14px] font-medium whitespace-nowrap">{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

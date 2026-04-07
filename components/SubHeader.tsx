import { MapPin } from 'lucide-react';
import Image from 'next/image';

export function SubHeader() {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between py-6 gap-4 px-4 sm:px-6 lg:px-10">
      <div className="flex items-center gap-4 bg-white p-2 pr-4 rounded-2xl border border-gray-200 shadow-sm">
        <div className="bg-gray-100 p-3 rounded-xl">
          <MapPin size={24} className="text-blue-500" />
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-[15px]">Cool places near you</h3>
          <p className="text-[13px] text-gray-500 underline decoration-gray-300 underline-offset-2">Mountain View, California, United States</p>
        </div>
        <div className="w-16 h-12 bg-gray-200 rounded-lg ml-2 overflow-hidden relative">
          <Image src="https://picsum.photos/seed/map/100/60" alt="Map" fill className="object-cover" unoptimized />
        </div>
      </div>

      <div className="flex items-center gap-4 border border-gray-200 rounded-2xl px-5 py-4 shadow-sm bg-white">
        <span className="text-[15px] font-semibold">Display total price</span>
        <span className="text-gray-300">|</span>
        <span className="text-[15px] text-gray-500">Includes all fees, before taxes</span>
        <button className="w-12 h-8 bg-gray-900 rounded-full relative ml-4 transition-colors">
          <div className="w-6 h-6 bg-white rounded-full absolute right-1 top-1 shadow-sm"></div>
        </button>
      </div>
    </div>
  );
}

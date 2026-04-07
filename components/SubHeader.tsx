import { MapPin } from 'lucide-react';
import Image from 'next/image';

export function SubHeader() {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between py-6 gap-4 px-6 md:px-10 xl:px-20">
      <div className="flex items-center gap-4 bg-white p-2 pr-4 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <div className="bg-neutral-100 p-3 rounded-xl">
          <MapPin size={24} className="text-neutral-700" />
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-[15px] text-neutral-900">Cool places near you</h3>
          <p className="text-[13px] text-neutral-500 underline decoration-neutral-300 underline-offset-2">Mountain View, California, United States</p>
        </div>
        <div className="w-16 h-12 bg-neutral-200 rounded-lg ml-2 overflow-hidden relative border border-neutral-200">
          <Image src="https://picsum.photos/seed/map/100/60" alt="Map" fill className="object-cover" unoptimized />
        </div>
      </div>

      <div className="flex items-center gap-3 border border-neutral-200 rounded-xl px-5 py-4 shadow-sm bg-white hover:bg-neutral-50 transition-colors cursor-pointer">
        <span className="text-[15px] font-semibold text-neutral-900">Display total price</span>
        <span className="text-neutral-300">|</span>
        <span className="text-[15px] text-neutral-500">Includes all fees, before taxes</span>
        <div className="w-12 h-8 bg-neutral-800 rounded-full relative ml-4 transition-colors flex items-center px-1">
          <div className="w-6 h-6 bg-white rounded-full shadow-sm transform translate-x-4 transition-transform flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-800">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

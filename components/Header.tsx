'use client';

import { useState } from 'react';
import { Search, Globe, Menu, User } from 'lucide-react';

export function Header() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  return (
    <>
      <header className="border-b border-neutral-200 py-4 px-6 md:px-10 xl:px-20 flex items-center justify-between w-full bg-white sticky top-0 z-50 transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center text-[#FF385C] w-1/3">
          <span className="tracking-tight text-[24px] font-bold">haven</span>
        </div>

        {/* Search Bar - Collapsed */}
        {!isSearchExpanded ? (
          <div 
            onClick={() => setIsSearchExpanded(true)}
            className="hidden md:flex items-center border border-neutral-200 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 pl-2 pr-1.5 py-1.5 gap-1 text-[14px] w-auto shrink-0 cursor-pointer"
          >
            <button className="px-4 py-1.5 rounded-full hover:bg-neutral-100 transition-colors font-semibold text-neutral-900">Anywhere</button>
            <div className="w-px h-6 bg-neutral-200"></div>
            <button className="px-4 py-1.5 rounded-full hover:bg-neutral-100 transition-colors font-semibold text-neutral-900">Any week</button>
            <div className="w-px h-6 bg-neutral-200"></div>
            <button className="pl-4 pr-2 py-1.5 rounded-full hover:bg-neutral-100 transition-colors text-neutral-500 font-normal flex items-center gap-3">
              Add guests
              <div className="bg-[#FF385C] text-white p-2 rounded-full">
                <Search size={14} strokeWidth={3} />
              </div>
            </button>
          </div>
        ) : (
          /* Search Bar - Expanded */
          <div className="hidden md:flex absolute top-full left-1/2 -translate-x-1/2 -mt-4 bg-white border border-neutral-200 rounded-full shadow-lg items-center text-[14px] w-full max-w-[850px] z-50 divide-x divide-neutral-200">
            <button className="flex-1 flex flex-col items-start px-8 py-3.5 rounded-full hover:bg-neutral-100 transition-colors focus:bg-white focus:shadow-md outline-none">
              <span className="text-[12px] font-bold text-neutral-900">Where</span>
              <span className="text-neutral-500">Search destinations</span>
            </button>
            <button className="flex-1 flex flex-col items-start px-8 py-3.5 rounded-full hover:bg-neutral-100 transition-colors focus:bg-white focus:shadow-md outline-none">
              <span className="text-[12px] font-bold text-neutral-900">Check in</span>
              <span className="text-neutral-500">Add dates</span>
            </button>
            <button className="flex-1 flex flex-col items-start px-8 py-3.5 rounded-full hover:bg-neutral-100 transition-colors focus:bg-white focus:shadow-md outline-none">
              <span className="text-[12px] font-bold text-neutral-900">Check out</span>
              <span className="text-neutral-500">Add dates</span>
            </button>
            <div className="flex-1 flex items-center justify-between pl-8 pr-2 py-2 rounded-full hover:bg-neutral-100 transition-colors focus-within:bg-white focus-within:shadow-md">
              <div className="flex flex-col items-start">
                <span className="text-[12px] font-bold text-neutral-900">Who</span>
                <span className="text-neutral-500">Add guests</span>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsSearchExpanded(false);
                }}
                className="bg-[#FF385C] hover:bg-[#E31C5F] text-white px-5 py-3 rounded-full flex items-center gap-2 font-semibold transition-colors"
              >
                <Search size={18} strokeWidth={2.5} />
                Search
              </button>
            </div>
          </div>
        )}

        {/* Right Actions */}
        <div className="flex items-center gap-1 w-1/3 justify-end">
          <button className="hidden sm:block text-[14px] font-medium hover:bg-neutral-100 px-4 py-2.5 rounded-full transition-colors text-neutral-900">
            Haven your home
          </button>
          <button className="hover:bg-neutral-100 p-2.5 rounded-full transition-colors">
            <Globe size={18} className="text-neutral-700" />
          </button>
          <button className="flex items-center gap-3 border border-neutral-200 rounded-full p-1.5 pl-3 hover:shadow-md transition-shadow duration-200 ml-2 cursor-pointer bg-white">
            <Menu size={18} className="text-neutral-700" />
            <div className="bg-neutral-500 text-white rounded-full p-1.5">
              <User size={18} />
            </div>
          </button>
        </div>
      </header>
      
      {/* Overlay */}
      {isSearchExpanded && (
        <div 
          className="fixed inset-0 bg-black/25 z-40"
          onClick={() => setIsSearchExpanded(false)}
        />
      )}
    </>
  );
}

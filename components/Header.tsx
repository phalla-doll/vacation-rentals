import { Search, Globe, Menu, User } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-neutral-200 py-4 px-6 md:px-10 xl:px-20 flex items-center justify-between w-full bg-white sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center text-[#FF385C] font-bold text-xl gap-1.5 w-1/3">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span className="hidden lg:block tracking-tight text-[22px] font-bold">haven</span>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center border border-neutral-300 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 px-2 py-1.5 gap-1 text-[14px] font-medium w-auto shrink-0 cursor-pointer">
        <button className="px-4 py-1.5 rounded-full hover:bg-neutral-100 transition-colors">Anywhere</button>
        <div className="w-px h-6 bg-neutral-300"></div>
        <button className="px-4 py-1.5 rounded-full hover:bg-neutral-100 transition-colors">Any week</button>
        <div className="w-px h-6 bg-neutral-300"></div>
        <button className="px-4 py-1.5 rounded-full hover:bg-neutral-100 transition-colors text-neutral-500 font-normal flex items-center gap-3">
          Add guests
          <div className="bg-[#FF385C] text-white p-2 rounded-full">
            <Search size={14} strokeWidth={3} />
          </div>
        </button>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-1 w-1/3 justify-end">
        <button className="hidden sm:block text-[14px] font-medium hover:bg-neutral-100 px-4 py-2.5 rounded-full transition-colors">
          Airbnb your home
        </button>
        <button className="hover:bg-neutral-100 p-2.5 rounded-full transition-colors">
          <Globe size={18} className="text-neutral-700" />
        </button>
        <button className="flex items-center gap-3 border border-neutral-300 rounded-full p-1.5 pl-3 hover:shadow-md transition-shadow duration-200 ml-2 cursor-pointer bg-white">
          <Menu size={18} className="text-neutral-700" />
          <div className="bg-neutral-500 text-white rounded-full p-1.5">
            <User size={18} />
          </div>
        </button>
      </div>
    </header>
  );
}

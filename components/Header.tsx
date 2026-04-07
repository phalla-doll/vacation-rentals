import { Search, Globe, Menu, User } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-gray-100 py-4 px-4 sm:px-6 lg:px-10 flex items-center justify-between w-full bg-white">
      {/* Logo */}
      <div className="flex items-center text-[#FF385C] font-bold text-xl gap-2 w-1/3">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span className="hidden lg:block tracking-tight text-[22px]">airbnb</span>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all px-2 py-2 gap-1 text-sm font-medium w-auto shrink-0">
        <button className="px-4 hover:bg-gray-100 rounded-full py-1.5 transition-colors">Asia</button>
        <div className="w-px h-6 bg-gray-200"></div>
        <button className="px-4 hover:bg-gray-100 rounded-full py-1.5 transition-colors">Any week</button>
        <div className="w-px h-6 bg-gray-200"></div>
        <button className="px-4 text-gray-500 font-normal hover:bg-gray-100 rounded-full py-1.5 transition-colors">Add guests</button>
        <button className="bg-[#FF385C] text-white p-2.5 rounded-full ml-1">
          <Search size={14} strokeWidth={3} />
        </button>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2 w-1/3 justify-end">
        <button className="hidden sm:block text-[15px] font-medium hover:bg-gray-50 px-4 py-2.5 rounded-full transition-colors">
          Airbnb your home
        </button>
        <button className="hover:bg-gray-50 p-2.5 rounded-full transition-colors">
          <Globe size={18} />
        </button>
        <button className="flex items-center gap-3 border border-gray-200 rounded-full p-1.5 pl-3 hover:shadow-md transition-all ml-1">
          <Menu size={18} />
          <div className="bg-gray-500 text-white rounded-full p-1.5">
            <User size={18} />
          </div>
        </button>
      </div>
    </header>
  );
}

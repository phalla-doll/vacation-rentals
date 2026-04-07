import { Globe, ChevronUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-white border-t border-neutral-200 py-3 px-6 md:px-10 xl:px-20 z-30">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[14px] text-neutral-600">
        <div className="flex items-center gap-3">
          <span>© 2024 Haven, Inc.</span>
          <span className="hidden sm:inline">·</span>
          <a href="#" className="hover:underline">Terms</a>
          <span className="hidden sm:inline">·</span>
          <a href="#" className="hover:underline">Sitemap</a>
          <span className="hidden sm:inline">·</span>
          <a href="#" className="hover:underline">Privacy</a>
        </div>
        <div className="flex items-center gap-6 font-medium text-neutral-900">
          <button className="flex items-center gap-2 hover:underline">
            <Globe size={16} />
            English (US)
          </button>
          <button className="hover:underline">
            $ USD
          </button>
          <button className="flex items-center gap-2 hover:underline">
            Support & resources
            <ChevronUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

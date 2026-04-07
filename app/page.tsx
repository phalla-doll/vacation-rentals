import { Header } from '@/components/Header';
import { Categories } from '@/components/Categories';
import { SubHeader } from '@/components/SubHeader';
import { ListingGrid } from '@/components/ListingGrid';
import { Footer } from '@/components/Footer';
import { MapButton } from '@/components/MapButton';

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
      <Header />
      <div className="sticky top-0 bg-white z-10 border-b border-gray-100 shadow-sm">
        <Categories />
      </div>
      <main className="flex-1 w-full max-w-[1600px] mx-auto">
        <SubHeader />
        <ListingGrid />
      </main>
      <MapButton />
      <Footer />
    </div>
  );
}

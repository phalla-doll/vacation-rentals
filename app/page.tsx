import { Header } from '@/components/Header';
import { Categories } from '@/components/Categories';
import { SubHeader } from '@/components/SubHeader';
import { ListingGrid } from '@/components/ListingGrid';
import { Footer } from '@/components/Footer';
import { MapButton } from '@/components/MapButton';

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans">
      <Header />
      <div className="sticky top-[73px] bg-white z-40">
        <Categories />
      </div>
      <main className="flex-1 w-full mx-auto">
        <SubHeader />
        <ListingGrid />
      </main>
      <MapButton />
      <Footer />
    </div>
  );
}

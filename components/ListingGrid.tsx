import { Star } from 'lucide-react';
import Image from 'next/image';

const listings = [
  {
    id: 1,
    title: 'Exclusive Beach Villa - Balian Beach',
    location: 'Located 80 meters from Balian Beach and the famous surf break',
    price: '$100.95',
    rating: '4.9',
    image: 'https://picsum.photos/seed/villa1/600/400',
  },
  {
    id: 2,
    title: 'Cape Shark Villas, 4-10 pers.',
    location: 'The spacious villa of about 3000 sqft built in contemporary Thai style.',
    price: '$100.95',
    rating: '4.9',
    image: 'https://picsum.photos/seed/villa2/600/400',
  },
  {
    id: 3,
    title: 'Makalele Eclipse Family Suite',
    location: 'Floating above an ocean of green palms, Makalele Dome Villas has one of the most spectacular settings in the world.',
    price: '$100.95',
    rating: '4.9',
    image: 'https://picsum.photos/seed/villa3/600/400',
  },
  {
    id: 4,
    title: 'New 2BR Luxury Villa',
    location: 'Villa Ruta II is a sumptuous & Brand New Private Luxury Villa',
    price: '$100.95',
    rating: '4.9',
    image: 'https://picsum.photos/seed/villa4/600/400',
  },
  {
    id: 5,
    title: 'Makalele Eclipse Family Suite',
    location: 'Floating above an ocean of green palms, Makalele Dome Villas has one of the most spectacular settings in the world.',
    price: '$100.95',
    rating: '4.9',
    image: 'https://picsum.photos/seed/villa5/600/400',
  },
  {
    id: 6,
    title: 'Cape Shark Villas, 4-10 pers.',
    location: 'The spacious villa of about 3000 sqft built in contemporary Thai style.',
    price: '$100.95',
    rating: '4.9',
    image: 'https://picsum.photos/seed/villa6/600/400',
  },
  {
    id: 7,
    title: 'New 2BR Luxury Villa',
    location: 'Villa Ruta II is a sumptuous & Brand New Private Luxury Villa',
    price: '$100.95',
    rating: '4.9',
    image: 'https://picsum.photos/seed/villa7/600/400',
  },
  {
    id: 8,
    title: 'Exclusive Beach Villa - Balian Beach',
    location: 'Located 80 meters from Balian Beach and the famous surf break',
    price: '$100.95',
    rating: '4.9',
    image: 'https://picsum.photos/seed/villa8/600/400',
  },
];

export function ListingGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 pb-32 px-4 sm:px-6 lg:px-10">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}

function ListingCard({ listing }: { listing: any }) {
  return (
    <div className="flex flex-col gap-3 group cursor-pointer">
      <div className="relative aspect-[20/19] overflow-hidden rounded-xl">
        <Image src={listing.image} alt={listing.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out" unoptimized />
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-white opacity-100 shadow-sm"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white opacity-60 shadow-sm"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white opacity-60 shadow-sm"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white opacity-60 shadow-sm"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white opacity-60 shadow-sm"></div>
        </div>
      </div>
      <div className="flex flex-col gap-0.5">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-semibold text-[15px] leading-tight truncate text-gray-900">{listing.title}</h3>
          <div className="flex items-center gap-1 shrink-0">
            <Star size={14} className="fill-current text-gray-900" />
            <span className="text-[15px] text-gray-900">{listing.rating}</span>
          </div>
        </div>
        <p className="text-gray-500 text-[15px] line-clamp-2 leading-snug mt-1">{listing.location}</p>
        <div className="mt-2 flex items-center gap-1">
          <span className="font-semibold text-[15px] text-gray-900">{listing.price}</span>
          <span className="text-gray-500 text-[15px]">total before taxes</span>
        </div>
      </div>
    </div>
  );
}

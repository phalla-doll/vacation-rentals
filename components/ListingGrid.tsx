import { Star, Heart } from 'lucide-react';
import Image from 'next/image';

const listings = [
  {
    id: 1,
    title: 'Exclusive Beach Villa - Balian Beach',
    location: 'Located 80 meters from Balian Beach and the famous surf break',
    price: '$100.95',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Cape Shark Villas, 4-10 pers.',
    location: 'The spacious villa of about 3000 sqft built in contemporary Thai style.',
    price: '$250.00',
    rating: '4.98',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Makalele Eclipse Family Suite',
    location: 'Floating above an ocean of green palms, Makalele Dome Villas has one of the most spectacular settings in the world.',
    price: '$145.50',
    rating: '4.85',
    image: 'https://images.unsplash.com/photo-1613490908653-b5145749c953?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'New 2BR Luxury Villa',
    location: 'Villa Ruta II is a sumptuous & Brand New Private Luxury Villa',
    price: '$320.00',
    rating: '5.0',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Modern Glass Treehouse',
    location: 'Experience nature in this stunning architectural masterpiece.',
    price: '$180.00',
    rating: '4.95',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Cliffside Ocean Retreat',
    location: 'Uninterrupted ocean views from every room in the house.',
    price: '$450.00',
    rating: '4.92',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    title: 'Historic Stone Cottage',
    location: 'Charming 18th-century cottage with modern amenities.',
    price: '$95.00',
    rating: '4.7',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    title: 'Desert Oasis Estate',
    location: 'Luxury living in the heart of the desert with a private pool.',
    price: '$210.00',
    rating: '4.88',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export function ListingGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 pb-32 px-6 md:px-10 xl:px-20">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}

function ListingCard({ listing }: { listing: any }) {
  return (
    <div className="flex flex-col gap-3 group cursor-pointer">
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <Image src={listing.image} alt={listing.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out" unoptimized />
        <button className="absolute top-3 right-3 text-white hover:scale-110 transition-transform z-10">
          <Heart size={24} className="drop-shadow-md" strokeWidth={1.5} />
        </button>
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
          <div className="w-1.5 h-1.5 rounded-full bg-white opacity-100 shadow-sm"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white opacity-60 shadow-sm"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white opacity-60 shadow-sm"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white opacity-60 shadow-sm"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white opacity-60 shadow-sm"></div>
        </div>
      </div>
      <div className="flex flex-col gap-0.5">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-semibold text-[15px] leading-tight truncate text-neutral-900">{listing.title}</h3>
          <div className="flex items-center gap-1 shrink-0">
            <Star size={14} className="fill-current text-neutral-900" />
            <span className="text-[15px] text-neutral-900">{listing.rating}</span>
          </div>
        </div>
        <p className="text-neutral-500 text-[15px] line-clamp-1 leading-snug">{listing.location}</p>
        <div className="mt-1 flex items-center gap-1">
          <span className="font-semibold text-[15px] text-neutral-900">{listing.price}</span>
          <span className="text-neutral-900 text-[15px]">night</span>
        </div>
      </div>
    </div>
  );
}

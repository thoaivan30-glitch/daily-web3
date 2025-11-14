export interface Feature {
  name: string;
  icon: string;
}

export interface NFTItem {
  id: string;
  name: string;
  collection: string;
  image: string;
  price: number;
  currency: 'ETH' | 'BTC' | 'USD';
  usdPrice?: number;
  status: 'Available' | 'Auction' | 'Rare';
  type: 'Tech Collection' | 'Watch Collection' | 'Gaming Collection' | 'Mobile Collection';
  features?: Feature[];
  timeLeft?: string;
}

export interface FilterOptions {
  status: string[];
  type: string[];
  features: string[];
}

export interface SortOption {
  label: string;
  value: 'latest' | 'oldest' | 'price-low' | 'price-high' | 'name';
}

export const SORT_OPTIONS: SortOption[] = [
  { label: 'Latest', value: 'latest' },
  { label: 'Oldest', value: 'oldest' },
  { label: 'Price: Low to High', value: 'price-low' },
  { label: 'Price: High to Low', value: 'price-high' },
  { label: 'Name', value: 'name' }
];

export const FILTER_OPTIONS = {
  status: ['All Status', 'Available', 'Auction', 'Rare'],
  type: ['All Types', 'Tech Collection', 'Watch Collection', 'Gaming Collection', 'Mobile Collection'],
  features: ['All Features', 'Liên kết với Headphones Vật lý', 'Utility Access Token', 'Liên kết với Laptop Gaming', 'Digital Art Exclusive']
};
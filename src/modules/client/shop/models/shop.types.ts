export interface Product {
  id: string;
  name: string;
  price: number;
  ethPrice: number;
  image: string;
  category: string;
  stock: number;
  badges: ProductBadge[];
  features: ProductFeature[];
}

export type ProductBadge = 'Best' | 'NFT' | 'airdrop' | 'red';

export interface ProductFeature {
  type: 'web3' | 'verified' | 'sustainable' | 'dao' | 'nft' | 'limited';
  label: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface FilterOptions {
  categories: string[];
  priceRange: PriceRange;
  features: string[];
  rights: string[];
}

export type SortOption = 'best-selling' | 'price-low' | 'price-high' | 'newest';

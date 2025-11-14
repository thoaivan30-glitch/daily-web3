import { NFTItem, FilterOptions, SortOption } from '../models/nft.types';
import mockNFTs from '../mocks/mock.nft.json';

export class NFTService {
  private static nfts: NFTItem[] = mockNFTs as NFTItem[];

  static async getAllNFTs(): Promise<NFTItem[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return this.nfts;
  }

  static async getNFTById(id: string): Promise<NFTItem | undefined> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return this.nfts.find(nft => nft.id === id);
  }

  static async getFilteredNFTs(filters: FilterOptions): Promise<NFTItem[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    let filteredNFTs = [...this.nfts];

    // Filter by status
    if (filters.status.length > 0 && !filters.status.includes('All Status')) {
      filteredNFTs = filteredNFTs.filter(nft => filters.status.includes(nft.status));
    }

    // Filter by type
    if (filters.type.length > 0 && !filters.type.includes('All Types')) {
      filteredNFTs = filteredNFTs.filter(nft => filters.type.includes(nft.type));
    }

    // Filter by features
    if (filters.features.length > 0 && !filters.features.includes('All Features')) {
      filteredNFTs = filteredNFTs.filter(nft => 
        nft.features && nft.features.some(feature => filters.features.includes(feature.name))
      );
    }

    return filteredNFTs;
  }

  static sortNFTs(nfts: NFTItem[], sortBy: SortOption['value']): NFTItem[] {
    const sortedNFTs = [...nfts];

    switch (sortBy) {
      case 'latest':
        return sortedNFTs.reverse(); // Assuming latest means reverse order
      case 'oldest':
        return sortedNFTs;
      case 'price-low':
        return sortedNFTs.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sortedNFTs.sort((a, b) => b.price - a.price);
      case 'name':
        return sortedNFTs.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return sortedNFTs;
    }
  }

  static async searchNFTs(query: string): Promise<NFTItem[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    if (!query.trim()) {
      return this.nfts;
    }

    const lowercaseQuery = query.toLowerCase();
    return this.nfts.filter(nft => 
      nft.name.toLowerCase().includes(lowercaseQuery) ||
      nft.collection.toLowerCase().includes(lowercaseQuery) ||
      nft.type.toLowerCase().includes(lowercaseQuery)
    );
  }

  static getCollections(): string[] {
    const collections = new Set(this.nfts.map(nft => nft.collection));
    return Array.from(collections);
  }

  static getStatusCounts(): Record<string, number> {
    const counts: Record<string, number> = {};
    this.nfts.forEach(nft => {
      counts[nft.status] = (counts[nft.status] || 0) + 1;
    });
    return counts;
  }
}
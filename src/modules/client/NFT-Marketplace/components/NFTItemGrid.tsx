'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';
import { NFTItem, FilterOptions, SORT_OPTIONS, SortOption } from '../models/nft.types';
import { NFTService } from '../services/nft.service';
import NFTCard from './NFTCard';
import Sidebar from './Sidebar';

const NFTItemGrid: React.FC = () => {
  const [nfts, setNfts] = useState<NFTItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption['value']>('latest');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({
    status: ['All Status'],
    type: ['All Types'],
    features: ['All Features']
  });

  // Load NFTs on component mount
  useEffect(() => {
    loadNFTs();
  }, []);

  const loadNFTs = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await NFTService.getAllNFTs();
      setNfts(data);
    } catch (err) {
      setError('Failed to load NFTs');
      console.error('Error loading NFTs:', err);
    } finally {
      setLoading(false);
    }
  };

  // Filter and sort NFTs
  const filteredAndSortedNFTs = useMemo(() => {
    let result = [...nfts];

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(nft =>
        nft.name.toLowerCase().includes(query) ||
        nft.collection.toLowerCase().includes(query) ||
        nft.type.toLowerCase().includes(query)
      );
    }

    // Apply filters
    if (filters.status.length > 0 && !filters.status.includes('All Status')) {
      result = result.filter(nft => filters.status.includes(nft.status));
    }

    if (filters.type.length > 0 && !filters.type.includes('All Types')) {
      result = result.filter(nft => filters.type.includes(nft.type));
    }

    if (filters.features.length > 0 && !filters.features.includes('All Features')) {
      result = result.filter(nft => 
        nft.features && nft.features.some(feature => filters.features.includes(feature.name))
      );
    }

    // Apply sorting
    result = NFTService.sortNFTs(result, sortBy);

    return result;
  }, [nfts, filters, sortBy, searchQuery]);

  const handleBuy = (nft: NFTItem) => {
    console.log('Buy NFT:', nft);
    // Implement buy logic here
  };

  const handleBid = (nft: NFTItem) => {
    console.log('Bid on NFT:', nft);
    // Implement bid logic here
  };


  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="flex items-center justify-center h-64">
          <div className="flex items-center space-x-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-6 h-6 border-2 border-orange-500 border-t-transparent rounded-full"
            />
            <span className="text-gray-600">Loading NFTs...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <IconifyIcon icon="mdi:alert-circle" className="text-red-500 text-4xl mb-2" />
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={loadNFTs}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header with Filters and Sort */}
        <div className="bg-white">
          {/* Filters Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 py-3 sm:py-4 lg:px-6 gap-3 sm:gap-0">
            <div className="w-full sm:w-auto">
              <Sidebar
                filters={filters}
                onFiltersChange={setFilters}
                isOpen={sidebarOpen}
                onToggle={() => setSidebarOpen(!sidebarOpen)}
              />
            </div>
            
            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
              <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">Sort by:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption['value'])}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 pr-8 text-xs sm:text-sm min-w-[120px]"
                >
                  {SORT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <IconifyIcon 
                  icon="mdi:chevron-down" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black pointer-events-none" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* NFT Grid */}
        <div className="p-4 lg:p-6">
          {filteredAndSortedNFTs.length === 0 ? (
            <div className="text-center py-8 sm:py-12">
              <IconifyIcon icon="mdi:package-variant" className="text-gray-400 text-4xl sm:text-6xl mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">No NFTs found</h3>
              <p className="text-sm sm:text-base text-gray-500 mb-3 sm:mb-4 px-4">
                {searchQuery.trim() || filters.status.some(s => !s.startsWith('All')) ||
                 filters.type.some(t => !t.startsWith('All')) ||
                 filters.features.some(f => !f.startsWith('All'))
                  ? 'Try adjusting your search or filters'
                  : 'No NFTs available at the moment'}
              </p>
              {(searchQuery.trim() || filters.status.some(s => !s.startsWith('All')) ||
                filters.type.some(t => !t.startsWith('All')) ||
                filters.features.some(f => !f.startsWith('All'))) && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setFilters({
                      status: ['All Status'],
                      type: ['All Types'],
                      features: ['All Features']
                    });
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors text-sm sm:text-base"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 justify-items-center"
            >
              <AnimatePresence>
                {filteredAndSortedNFTs.map((nft) => (
                  <motion.div
                    key={nft.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <NFTCard
                      nft={nft}
                      onBuy={handleBuy}
                      onBid={handleBid}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NFTItemGrid;

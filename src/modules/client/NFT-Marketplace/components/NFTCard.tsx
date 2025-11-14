'use client';

import React from 'react';
import { motion } from 'framer-motion';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';
import { NFTItem } from '../models/nft.types';

interface NFTCardProps {
  nft: NFTItem;
  onBuy?: (nft: NFTItem) => void;
  onBid?: (nft: NFTItem) => void;
}

const NFTCard: React.FC<NFTCardProps> = ({ nft, onBuy, onBid }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-[#DCFCE7] text-[#166534]';
      case 'Auction':
        return 'bg-[#FEE2E2] text-[#991B1B]';
      case 'Rare':
        return 'bg-[#F3E8FF] text-[#6B21A8]';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };


  const handleAction = () => {
    if (nft.status === 'Auction' && onBid) {
      onBid(nft);
    } else if (onBuy) {
      onBuy(nft);
    }
  };

  const getButtonText = () => {
    switch (nft.status) {
      case 'Auction':
        return 'Đấu Giá';
      case 'Available':
        return 'Mua Ngay';
      case 'Rare':
        return 'Mua Ngay';
      default:
        return 'Mua Ngay';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg sm:rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col w-full max-w-sm mx-auto"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700 flex-shrink-0">
        <img
          src={nft.image}
          alt={nft.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/nft/placeholder.jpg';
          }}
        />
        
        {/* Time Left for Auctions */}
        {nft.timeLeft && (
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-black/70 text-white px-2 py-1 rounded-md text-xs">
            <IconifyIcon icon="mdi:clock-outline" className="inline mr-1" />
            {nft.timeLeft}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col">
        {/* Collection, Status and Name */}
        <div className="mb-2 sm:mb-3">
          <div className="flex mb-1 sm:mb-2 items-center justify-between">
            <span className="text-xs sm:text-sm text-[#6B7280] truncate mr-2">{nft.collection}</span>
            <span className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${getStatusColor(nft.status)}`}>
              {nft.status}
            </span>
          </div>
          <h3 className="font-sora text-[#000000] text-base sm:text-lg leading-tight line-clamp-2">
            {nft.name}
          </h3>
        </div>

        {/* Features */}
        {nft.features && nft.features.length > 0 && (
          <div className="mb-2 sm:mb-3">
            <div className="flex items-center text-xs sm:text-sm text-[#4B5563]">
              <IconifyIcon icon={nft.features[0].icon} className="mr-1 text-[#00A3FF] text-base sm:text-lg flex-shrink-0" />
              <span className="truncate">{nft.features[0].name}</span>
            </div>
          </div>
        )}

        {/* Price */}
        <div className="mb-3 sm:mb-4 mt-auto">
          <div className="flex items-center justify-between">
            <span className="text-lg sm:text-xl font-bold text-[#00A3FF]">
              {nft.price} {nft.currency}
            </span>
            {nft.usdPrice && (
              <span className="text-xs sm:text-sm text-gray-500">
                ${nft.usdPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAction}
          className="w-full h-[36px] sm:h-[40px] bg-[#FF8C00] text-white text-sm sm:text-base font-semibold py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
        >
          {getButtonText()}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default NFTCard;

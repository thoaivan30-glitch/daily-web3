import React, { useState } from 'react';
import Image from 'next/image';
import { Product, SortOption } from '../models/shop.types';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';

interface ProductGridProps {
  products: Product[];
  totalProducts: number;
  currentSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'verified':
        return 'bg-[#22C55E]';
      case 'Sustainable':
        return 'bg-[#22C55E]';
      case 'Limited':
        return 'bg-[#EF4444]';
      case 'DAO Verified':
        return 'bg-[#3B82F6]';
      default:
        return 'bg-gray-500';
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
      {/* Product Image */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/400x400?text=Product+Image';
          }}
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-wrap gap-1 sm:gap-2">
          {product.badges.map((badge, index) => (
            <span
              key={index}
              className={`${getBadgeColor(badge)} text-white text-[10px] sm:text-xs font-medium px-2 py-0.5 sm:px-3 sm:py-1 rounded-full`}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Feature Badge */}
        {product.features.length > 0 && (
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
            <span className="bg-[#3B82F6] backdrop-blur-sm text-white text-[10px] sm:text-xs font-medium px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full flex items-center gap-0.5 sm:gap-1">
              {product.features[0].type === 'verified' && (
                <>
                  <IconifyIcon icon="typcn:starburst" width={12} height={12} className="sm:w-[14px] sm:h-[14px]" />
                  <span className="hidden sm:inline">NFT</span>
                </>
              )}
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-3 sm:p-4">
        <h3 className="text-sm sm:text-base md:text-lg font-sora text-[#000000] mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 mb-3">
          <span className="text-base sm:text-lg md:text-xl font-outfit text-[#000000]">
            {formatPrice(product.price)} VND
          </span>
          <span className="text-xs sm:text-sm font-outfit text-[#3B82F6]">
            ≈ {product.ethPrice} ETH
          </span>
        </div>

        {/* Stock and Add to Cart */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-3">
          <div className="text-xs sm:text-sm font-outfit text-[#4B5563]">
            Còn lại: <span className="font-semibold">{product.stock}</span>
          </div>
          
          <button className="bg-[#F59E0B] font-outfit text-xs sm:text-sm hover:bg-orange-600 text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg flex items-center justify-center gap-1.5 sm:gap-2 transition-colors whitespace-nowrap">
            <IconifyIcon icon="mdi:cart-arrow-right" width={16} height={16} className="sm:w-[18px] sm:h-[18px]" />
            <span className="hidden xs:inline">Thêm vào giỏ</span>
            <span className="xs:hidden">Giỏ hàng</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  currentSort,
  onSortChange,
}) => {
  const [displayCount, setDisplayCount] = useState(6);
  
  const displayedProducts = products.slice(0, displayCount);
  const hasMore = displayCount < products.length;

  const handleLoadMore = () => {
    setDisplayCount(prev => Math.min(prev + 6, products.length));
  };

  return (
    <div className="flex-1">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
          <div className="flex items-center font-outfit gap-3 sm:gap-6 text-xs sm:text-sm">
            <div>
              Hiển thị: <span className="font-semibold ml-1 sm:ml-2 text-[#4B5563]">1-{displayedProducts.length}</span>
            </div>
            <div>
              Sản phẩm: <span className="font-semibold ml-1 sm:ml-2 text-[#4B5563]">{products.length}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <span className="text-xs sm:text-sm font-outfit text-[#4B5563] whitespace-nowrap">Sắp xếp:</span>
            <select
              value={currentSort}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="flex-1 sm:flex-none px-2 sm:px-4 py-1.5 sm:py-2 font-outfit text-[#000000] border border-gray-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="best-selling">Best Selling</option>
              <option value="price-low">Giá thấp đến cao</option>
              <option value="price-high">Giá cao đến thấp</option>
              <option value="newest">Mới nhất</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center">
          <button 
            onClick={handleLoadMore}
            className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-blue-500 text-blue-500 font-outfit font-medium rounded-lg hover:bg-blue-500 hover:text-white hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-sm sm:text-base"
          >
            Tải thêm sản phẩm ↓
          </button>
        </div>
      )}
    </div>
  );
};

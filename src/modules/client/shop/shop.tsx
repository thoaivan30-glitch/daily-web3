'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { SideBarShop } from './components/SideBarShop';
import { ProductGrid } from './components/ProductGird';
import { ShopService } from './services/shop.service';
import { Product, Category, FilterOptions, SortOption } from './models/shop.types';
import Link from 'next/link';

export const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [filters, setFilters] = useState<FilterOptions>({
    categories: [],
    priceRange: { min: 0, max: Infinity },
    features: [],
    rights: [],
  });
  const [sortOption, setSortOption] = useState<SortOption>('best-selling');
  const [totalProducts, setTotalProducts] = useState(0);

  const loadProducts = useCallback(() => {
    const filteredProducts = ShopService.getProducts(filters, sortOption);
    setProducts(filteredProducts);
    setTotalProducts(ShopService.getTotalProducts());
  }, [filters, sortOption]);

  useEffect(() => {
    // Load categories
    const cats = ShopService.getCategories();
    setCategories(cats);
    
    // Load initial products
    loadProducts();
  }, [loadProducts]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  const handleSortChange = (newSort: SortOption) => {
    setSortOption(newSort);
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/">
              <span className="hover:text-blue-600 font-outfit cursor-pointer">Trang chủ</span>
            </Link>
            <span className="mx-2">&gt;</span>
            <Link href="/shop">
              <span className="text-gray-900 font-outfit">Tất cả sản phẩm</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-medium text-[#1F2937] mb-2">Tất cả sản phẩm</h1>
          <p className="text-[#4B5563] font-outfit text-base">
            Khám phá bộ sưu tập đa dạng gia dụng với công nghệ Web3
          </p>
        </div>

        {/* Layout: Sidebar + Products */}
        <div className="flex gap-6">
          <SideBarShop categories={categories} onFilterChange={handleFilterChange} />
          <ProductGrid
            products={products}
            totalProducts={totalProducts}
            currentSort={sortOption}
            onSortChange={handleSortChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;

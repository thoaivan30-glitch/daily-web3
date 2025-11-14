import React, { useState } from 'react';
import { Category, FilterOptions } from '../models/shop.types';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';

interface SideBarShopProps {
    categories: Category[];
    onFilterChange: (filters: FilterOptions) => void;
}

export const SideBarShop: React.FC<SideBarShopProps> = ({ categories, onFilterChange }) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [priceMin, setPriceMin] = useState<string>('');
    const [priceMax, setPriceMax] = useState<string>('');
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
    const [selectedRights, setSelectedRights] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const handleCategoryChange = (categoryName: string) => {
        const newCategories = selectedCategories.includes(categoryName)
            ? selectedCategories.filter(c => c !== categoryName)
            : [...selectedCategories, categoryName];

        setSelectedCategories(newCategories);
        updateFilters(newCategories, priceMin, priceMax, selectedFeatures, selectedRights);
    };

    const handleFeatureChange = (feature: string) => {
        const newFeatures = selectedFeatures.includes(feature)
            ? selectedFeatures.filter(f => f !== feature)
            : [...selectedFeatures, feature];

        setSelectedFeatures(newFeatures);
        updateFilters(selectedCategories, priceMin, priceMax, newFeatures, selectedRights);
    };

    const handleRightChange = (right: string) => {
        const newRights = selectedRights.includes(right)
            ? selectedRights.filter(r => r !== right)
            : [...selectedRights, right];

        setSelectedRights(newRights);
        updateFilters(selectedCategories, priceMin, priceMax, selectedFeatures, newRights);
    };

    const updateFilters = (
        cats: string[],
        min: string,
        max: string,
        features: string[],
        rights: string[]
    ) => {
        onFilterChange({
            categories: cats,
            priceRange: {
                min: min ? parseInt(min) : 0,
                max: max ? parseInt(max) : Infinity,
            },
            features,
            rights,
        });
    };

    const handleApplyFilters = () => {
        updateFilters(selectedCategories, priceMin, priceMax, selectedFeatures, selectedRights);
    };

    return (
        <>
        {/* Mobile Filter Toggle Button */}
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden fixed bottom-4 right-4 z-50 bg-[#3B82F6] text-white p-4 rounded-full shadow-lg flex items-center gap-2"
        >
            <IconifyIcon icon="mdi:filter-variant" width={24} height={24} />
        </button>

        {/* Overlay for mobile */}
        {isOpen && (
            <div 
                className="lg:hidden fixed inset-0 bg-black/50 z-40"
                onClick={() => setIsOpen(false)}
            />
        )}

        {/* Sidebar */}
        <div className={`
            fixed lg:sticky top-0 left-0 h-full lg:h-auto
            w-80 max-w-[85vw] bg-white p-4 sm:p-6 rounded-none lg:rounded-lg shadow-lg lg:shadow-sm
            transform transition-transform duration-300 ease-in-out z-50 lg:z-auto
            overflow-y-auto
            ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
            {/* Close button for mobile */}
            <div className="lg:hidden flex justify-between items-center mb-4">
                <h3 className="text-lg font-sora">Bộ lọc</h3>
                <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                >
                    <IconifyIcon icon="mdi:close" width={24} height={24} />
                </button>
            </div>

            {/* Categories */}
            <div className="mb-6 sm:mb-8">
                <h3 className="text-base sm:text-lg font-sora mb-3 sm:mb-4 hidden lg:block">Bộ lọc</h3>
                <div className="space-y-2 sm:space-y-3">
                    <h4 className="font-outfit text-sm sm:text-base text-[#000000] mb-2">Danh mục</h4>
                    {categories.map((category) => (
                        <label key={category.id} className="flex items-center cursor-pointer py-1">
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes(category.name)}
                                onChange={() => handleCategoryChange(category.name)}
                                className="w-4 h-4 sm:w-3 sm:h-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm font-outfit text-[#000000]">
                                {category.name} ({category.count})
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div className="mb-6 sm:mb-8">
                <h4 className="text-sm sm:text-base font-outfit text-[#000000] mb-3">Giá cả</h4>
                <div className="flex items-center space-x-2">
                    <input
                        type="number"
                        placeholder="Từ"
                        value={priceMin}
                        onChange={(e) => setPriceMin(e.target.value)}
                        className="w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-gray-500 text-sm">-</span>
                    <input
                        type="number"
                        placeholder="Đến"
                        value={priceMax}
                        onChange={(e) => setPriceMax(e.target.value)}
                        className="w-full px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex space-x-2 mt-2">
                    <button className="px-3 py-1 text-xs bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        VND
                    </button>
                    <button className="px-3 py-1 text-xs bg-white border border-gray-400 text-black rounded-md hover:bg-gray-300">
                        ETH
                    </button>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#E5E7EB] mb-6 sm:mb-8"></div>

            {/* Web3 Features */}
            <div className="mb-6 sm:mb-8">
                <label className="flex items-center cursor-pointer mb-3 sm:mb-4">
                    <IconifyIcon icon="bxs:cube" width={16} height={16} className="text-[#3B82F6]" />
                    <span className="ml-2 text-sm sm:text-base font-outfit text-[#3B82F6]">Web3 Features</span>
                </label>

                <h4 className="text-xs sm:text-sm font-outfit text-[#000000] mb-2 sm:mb-3">Nguồn gốc</h4>
                <div className="space-y-1.5 sm:space-y-2">
                    <label className="flex items-center cursor-pointer py-1">
                        <input
                            type="checkbox"
                            checked={selectedFeatures.includes('verified')}
                            onChange={() => handleFeatureChange('verified')}
                            className="w-4 h-4 sm:w-3 sm:h-3 text-orange-500 border-gray-300 rounded focus:ring-orange-500 flex-shrink-0"
                        />
                        <span className="ml-2 text-xs sm:text-sm font-outfit text-[#000000] flex items-center gap-1">
                            <IconifyIcon icon="mdi:shield-half-full" width={14} height={14} className="sm:w-4 sm:h-4 text-[#22C55E] flex-shrink-0" />
                            <span className="line-clamp-1">Verified Supply Chain</span>
                        </span>
                    </label>
                    <label className="flex items-center cursor-pointer py-1">
                        <input
                            type="checkbox"
                            checked={selectedFeatures.includes('sustainable')}
                            onChange={() => handleFeatureChange('sustainable')}
                            className="w-4 h-4 sm:w-3 sm:h-3 text-green-500 border-gray-300 rounded focus:ring-green-500 flex-shrink-0"
                        />
                        <span className="ml-2 text-xs sm:text-sm font-outfit text-[#000000] flex items-center gap-1">
                            <IconifyIcon icon="fa7-solid:leaf" width={14} height={14} className="sm:w-4 sm:h-4 text-[#22C55E] flex-shrink-0" />
                            <span className="line-clamp-1">Sustainable Materials</span>
                        </span>
                    </label>
                    <label className="flex items-center cursor-pointer py-1">
                        <input
                            type="checkbox"
                            checked={selectedFeatures.includes('dao')}
                            onChange={() => handleFeatureChange('dao')}
                            className="w-4 h-4 sm:w-3 sm:h-3 text-purple-500 border-gray-300 rounded focus:ring-purple-500 flex-shrink-0"
                        />
                        <span className="ml-2 text-xs sm:text-sm font-outfit text-[#000000] flex items-center gap-1">
                            <IconifyIcon icon="famicons:people-sharp" width={14} height={14} className="sm:w-4 sm:h-4 text-[#3B82F6] flex-shrink-0" />
                            <span className="line-clamp-1">Local DAO Verified</span>
                        </span>
                    </label>
                </div>
            </div>

            {/* Rights */}
            <div className="mb-6 sm:mb-8">
                <h4 className="text-xs sm:text-sm font-outfit text-[#000000] mb-2 sm:mb-3">Quyền sở hữu số</h4>
                <div className="space-y-1.5 sm:space-y-2">
                    <label className="flex items-center cursor-pointer py-1">
                        <input
                            type="checkbox"
                            checked={selectedRights.includes('nft')}
                            onChange={() => handleRightChange('nft')}
                            className="w-4 h-4 sm:w-3 sm:h-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500 flex-shrink-0"
                        />
                        <span className="ml-2 text-xs sm:text-sm font-outfit text-[#000000] flex items-center gap-1">
                            <IconifyIcon icon="typcn:starburst" width={14} height={14} className="sm:w-4 sm:h-4 text-[#F59E0B] flex-shrink-0" />
                            <span className="line-clamp-1">Items with NFT Token</span>
                        </span>
                    </label>
                    <label className="flex items-center cursor-pointer py-1">
                        <input
                            type="checkbox"
                            checked={selectedRights.includes('limited')}
                            onChange={() => handleRightChange('limited')}
                            className="w-4 h-4 sm:w-3 sm:h-3 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500 flex-shrink-0"
                        />
                        <span className="ml-2 text-xs sm:text-sm font-outfit text-[#000000] flex items-center gap-1">
                            <IconifyIcon icon="material-symbols:star-rounded" width={14} height={14} className="sm:w-4 sm:h-4 text-[#F59E0B] flex-shrink-0" />
                            <span className="line-clamp-1">Limited Edition</span>
                        </span>
                    </label>
                </div>
            </div>

            {/* Apply Button */}
            <button
                onClick={() => {
                    handleApplyFilters();
                    setIsOpen(false);
                }}
                className="w-full py-2.5 sm:py-3 bg-[#3B82F6] text-white text-sm sm:text-base font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
                Áp dụng bộ lọc
            </button>
        </div>
        </>
    );
};

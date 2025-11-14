'use client';

import React from 'react';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';
import { FilterOptions, FILTER_OPTIONS } from '../models/nft.types';

interface SidebarProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ filters, onFiltersChange }) => {
  const handleFilterChange = (filterType: keyof FilterOptions, value: string) => {
    onFiltersChange({
      ...filters,
      [filterType]: [value]
    });
  };

  const getCurrentFilterValue = (filterType: keyof FilterOptions): string => {
    return filters[filterType][0] || FILTER_OPTIONS[filterType][0];
  };

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 p-0 bg-white w-full">
      {/* Status Filter */}
      <div className="relative flex-1 sm:flex-none">
        <select
          value={getCurrentFilterValue('status')}
          onChange={(e) => handleFilterChange('status', e.target.value)}
          className="appearance-none bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 pr-8 text-xs sm:text-sm w-full sm:w-auto min-w-[120px]"
        >
          {FILTER_OPTIONS.status.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <IconifyIcon 
          icon="mdi:chevron-down" 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black pointer-events-none" 
        />
      </div>

      {/* Type Filter */}
      <div className="relative flex-1 sm:flex-none">
        <select
          value={getCurrentFilterValue('type')}
          onChange={(e) => handleFilterChange('type', e.target.value)}
          className="appearance-none bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 pr-8 text-xs sm:text-sm w-full sm:w-auto min-w-[120px]"
        >
          {FILTER_OPTIONS.type.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <IconifyIcon 
          icon="mdi:chevron-down" 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black pointer-events-none" 
        />
      </div>

      {/* Features Filter */}
      <div className="relative flex-1 sm:flex-none">
        <select
          value={getCurrentFilterValue('features')}
          onChange={(e) => handleFilterChange('features', e.target.value)}
          className="appearance-none bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 pr-8 text-xs sm:text-sm w-full sm:w-auto min-w-[120px]"
        >
          {FILTER_OPTIONS.features.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <IconifyIcon 
          icon="mdi:chevron-down" 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black pointer-events-none" 
        />
      </div>
    </div>
  );
};

export default Sidebar;
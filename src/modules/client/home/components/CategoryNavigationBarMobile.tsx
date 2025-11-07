'use client'

import React, { useState } from 'react';
import IconifyIcon from "@/modules/client/common/components/IconifyIcon";
import { homeService } from '../services/home.service';



export const CategoryNavigationBarMobile: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (categoryName: string) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName);
  };

  return (
    <div className="space-y-2">
      {homeService.getCategoryNavigationBar().map((category) => (
        <div key={category.name} className="border-b border-gray-100 last:border-0">
          <button
            onClick={() => toggleCategory(category.name)}
            className="w-full flex items-center justify-between py-3 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="text-base font-normal text-gray-900">{category.name}</span>
            <IconifyIcon 
              icon="line-md:chevron-down" 
              className={`w-5 h-5 text-[#008ECC] transition-transform duration-200 ${
                openCategory === category.name ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          {/* Subcategories */}
          {openCategory === category.name && category.subcategories && (
            <div className="pl-4 pb-3 space-y-2">
              {category.subcategories.map((subcategory) => (
                <a
                  key={subcategory}
                  href="#"
                  className="block py-2 text-sm text-gray-600 hover:text-[#008ECC] transition-colors"
                >
                  {subcategory}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryNavigationBarMobile;

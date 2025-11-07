'use client'

import React, { useState } from 'react';
import IconifyIcon from "@/modules/client/common/components/IconifyIcon";
import { homeService } from '../services/home.service';



export const CategoryNavigationBar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleMouseEnter = (categoryName: string) => {
    setOpenDropdown(categoryName);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const handleToggleDropdown = (categoryName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === categoryName ? null : categoryName);
  };

  return (
    <div className="bg-white border-b border-gray-200 hidden 2xl:block">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 py-2">
          {homeService.getCategoryNavigationBar().map((category) => (
            <div
              key={category.name}
              className="relative group/item"
              onMouseEnter={() => handleMouseEnter(category.name)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-full text-base font-normal transition-colors duration-200 bg-[#F3F9FB] text-black hover:text-white hover:bg-[#008ECC] group"
              >
                {category.name}
                <span onClick={(e) => handleToggleDropdown(category.name, e)}>
                  <IconifyIcon icon="line-md:chevron-down" className="w-4 h-4 text-[#008ECC] group-hover:text-white transition-colors cursor-pointer" />
                </span>
              </button>

              {/* Dropdown Menu */}
              {openDropdown === category.name && category.subcategories && (
                <div className="absolute top-full left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {category.subcategories.map((subcategory) => (
                    <a
                      key={subcategory}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      {subcategory}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CategoryNavigationBar;

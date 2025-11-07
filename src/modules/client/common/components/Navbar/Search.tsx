import React from 'react';
import IconifyIcon from "@/modules/client/common/components/IconifyIcon";

const Search: React.FC = () => {
  return (
    <div className="relative w-full 2xl:w-[260px]">
      <IconifyIcon 
        icon="tabler:search" 
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        width={20}
        height={20}
      />
      <input
        type="text"
        placeholder="Search products..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Search;

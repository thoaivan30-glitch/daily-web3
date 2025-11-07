import React from 'react';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';


const Button: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      
      {/* TODO: Implement Cart icon with badge */}
      <button className="relative p-2 hover:bg-blue-50 rounded-lg transition-all duration-200 group">
        <IconifyIcon icon="material-symbols:shopping-cart" width={24} height={24} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
        <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center group-hover:bg-orange-600 transition-colors">
          3
        </span>
      </button>
      
      {/* TODO: Implement Profile icon */}
      <button className="p-2 hover:bg-blue-50 rounded-lg transition-all duration-200 group">
        <IconifyIcon icon="icon-park-solid:people" width={24} height={24} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
      </button>
    </div>
  );
};

export default Button;

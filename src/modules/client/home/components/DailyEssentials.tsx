import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { EssentialCard } from '@/modules/client/home/models/home.types';
import mockData from '@/modules/client/home/mocks/home.mock.json';

const DailyEssentials: React.FC = () => {
  const essentials: EssentialCard[] = mockData.DailyEssentials;


  return (
    <section className="py-4 sm:py-6 md:py-12 lg:py-16 max-w-7xl mx-auto bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">
          Daily <span className="text-blue-500">Essentials</span>
        </h2>
        <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors">
          <span>View All</span>
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Underline */}
      <div className="w-40 h-1 bg-blue-500 mb-8"></div>

      {/* Essential Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {essentials.map((item) => (
          <div
            key={item.id}
            className={`${item.bgColor} rounded-2xl p-4 flex flex-col items-center justify-between cursor-pointer hover:shadow-lg transition-shadow h-48`}
          >
            <div className="flex-1 flex items-center justify-center w-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />
            </div>
            <div className="text-center mt-3">
              <div className="text-sm text-gray-600 mb-1">{item.title}</div>
              <div className="text-xs font-semibold text-gray-800">
                {item.discount}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DailyEssentials;

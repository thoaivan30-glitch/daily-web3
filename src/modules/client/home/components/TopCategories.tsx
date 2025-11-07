'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import IconifyIcon from "@/modules/client/common/components/IconifyIcon";
import { homeService } from '../services/home.service';


export const TopCategories: React.FC = () => {
  return (
    <section className="py-4 sm:py-6 md:py-12 lg:py-16 max-w-7xl mx-auto bg-white">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4 sm:mb-6 md:mb-8"
        >
          <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
            <div className="flex items-center gap-1 sm:gap-2">
              <h2 className="text-xs sm:text-sm md:text-xl lg:text-2xl font-normal text-gray-900">
                Shop From{' '}
                <span className="text-[#008ECC] pb-1">
                  Top Categories
                </span>
              </h2>
            </div>
            <button className="flex items-center gap-1 sm:gap-2 text-gray-700 hover:text-[#008ECC] transition-colors group">
              <span className="text-xs sm:text-sm md:text-base font-medium">View All</span>
              <IconifyIcon
                icon="solar:alt-arrow-right-linear"
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
          {/* Underline section */}
          <div className="relative">
            <hr className="border-t border-gray-200" />
            <div className="absolute top-0 left-0 h-0.5 sm:h-1 w-40 sm:w-56 md:w-60 bg-[#008ECC] rounded-full -translate-y-1/2"></div>
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 sm:gap-3 md:gap-6">
          {homeService.getTopCategories().map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center cursor-pointer group"
            >
              {/* Category Image Circle */}
              <div className="relative w-24 h-24 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-[#F5F5F5] flex items-center justify-center mb-3 sm:mb-2.5 md:mb-3 transition-all duration-300 overflow-hidden group-hover:border group-hover:border-[#008ECC]">
                <div className="relative w-20 h-20 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-28 lg:h-28">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Category Name */}
              <h3 className="text-xs sm:text-[10px] md:text-sm lg:text-base font-hk-grotesk font-medium text-gray-900 text-center group-hover:text-[#008ECC] transition-colors">
                {category.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;

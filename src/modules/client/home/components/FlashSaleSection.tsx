'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import IconifyIcon from "@/modules/client/common/components/IconifyIcon";
import { homeService } from '../services/home.service';



export const FlashSaleSection: React.FC = () => {
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
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl font-normal text-gray-900">
                Grab the best deal on{' '}
                <span className="text-[#008ECC] pb-1">
                  Smartphones
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
            <div className="absolute top-0 left-0 h-0.5 sm:h-1 w-32 sm:w-48 md:w-80 bg-[#008ECC] rounded-full -translate-y-1/2"></div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
            {homeService.getFlashSaleProducts().map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl hover:border-[#008ECC] transition-all duration-300 relative group overflow-hidden">
                  {/* Discount Badge */}
                  <div className="absolute top-0 right-0 bg-[#008ECC] text-white px-2 py-1.5 sm:px-2.5 sm:py-2 z-10 rounded-bl-lg sm:rounded-bl-xl">
                    <div className="text-center font-hk-grotesk leading-3 sm:leading-4">
                      <div className="text-xs sm:text-sm">{product.discount}%</div>
                      <div className="text-xs sm:text-sm">OFF</div>
                    </div>
                  </div>

                  {/* Product Image */}
                  <div className="relative h-24 sm:h-32 bg-[#F5F5F5] md:h-40 mb-2 sm:mb-3 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Info */}
                  <div className='p-2 sm:p-3'>
                    {/* Product Name */}
                    <h3 className="text-xs sm:text-sm md:text-base font-semibold font-hk-grotesk text-[#222222] line-clamp-2 min-h-[1.5rem] sm:min-h-[2rem]">
                      {product.name}
                    </h3>

                    {/* Prices */}
                    <div className="flex flex-col font-alata gap-0.5 sm:gap-1 mb-1">
                      <span className="text-sm sm:text-base md:text-lg font-normal text-[#222222]">
                        ${product.salePrice.toLocaleString()}
                        <span className="text-xs sm:text-sm md:text-base ml-2 sm:ml-3 md:ml-5 text-[#222222] line-through">
                          ${product.originalPrice.toLocaleString()}
                        </span>
                      </span>

                    </div>
                    <hr className="my-1.5 sm:my-2 bg-[#EDEDED]" />
                    {/* Savings */}
                    <p className="text-xs sm:text-sm md:text-base text-[#249B3E] font-medium">
                      Save - ${product.savings.toLocaleString()}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default FlashSaleSection;

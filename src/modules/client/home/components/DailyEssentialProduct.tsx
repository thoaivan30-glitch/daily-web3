'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import IconifyIcon from "@/modules/client/common/components/IconifyIcon";
import { homeService } from '../services/home.service';




export const DailyEssentialProduct: React.FC = () => {
  return (
    <section className="py-4 sm:py-6 md:py-12 lg:py-16 max-w-7xl mx-auto bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-6 sm:mb-8 md:mb-12"
        >
          <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-sora font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4">
            Sản phẩm Thiết yếu Hằng ngày
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[#4B5563]">
            Những món đồ không thể thiếu, được cộng đồng yêu thích nhất
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {homeService.getDailyEssentialProducts().map((product, index) => ( 
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative w-full h-56 sm:h-64 md:h-64 bg-white flex items-center justify-center p-2 sm:p-3 md:p-6">
                <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain lg:object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-3 sm:p-4 md:p-5">
                {/* Product Name */}
                <h3 className="text-base sm:text-lg md:text-xl text-gray-900 mb-1 sm:mb-1.5 md:mb-2 font-sora line-clamp-1">
                  {product.name}
                </h3>

                {/* Product Description */}
                <p className="text-xs sm:text-sm md:text-base text-[#4B5563] mb-2 sm:mb-3 md:mb-4 line-clamp-1">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                    {product.price.toFixed(2)} ETH
                  </span>
                  <span className="text-xs sm:text-sm text-[#6B7280]">
                    ${product.priceInUSD}
                  </span>
                </div>

                {/* Badge */}
                {product.badge && (
                  <div className="flex items-center cursor-pointer gap-1 sm:gap-1.5 mb-2 sm:mb-3 md:mb-4 group/badge hover:gap-2 transition-all duration-300">
                    <IconifyIcon
                      icon={product.badge.icon}
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00A3FF] group-hover/badge:scale-110 group-hover/badge:rotate-12 transition-all duration-300"
                    />
                    <span className="text-[10px] sm:text-xs font-medium text-[#00A3FF] group-hover/badge:text-[#0080CC] group-hover/badge:translate-x-0.5 transition-all duration-300">
                      {product.badge.text}
                    </span>
                  </div>
                )}

                {/* Add to Cart Button */}
                <button className="w-full bg-[#FF8A00] hover:bg-[#E67A00] text-white font-semibold py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 rounded-lg transition-colors duration-200 text-xs sm:text-sm md:text-base">
                  Thêm vào giỏ
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyEssentialProduct;

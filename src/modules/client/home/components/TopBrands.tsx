'use client'

import React, { useRef, useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { BrandCard } from '@/modules/client/home/models/home.types';
import mockData from '@/modules/client/home/mocks/home.mock.json';
import IconifyIcon from "@/modules/client/common/components/IconifyIcon";
import { motion } from 'framer-motion';


const TopBrands: React.FC = () => {
  const brands: BrandCard[] = mockData.TopBrands;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const containerWidth = scrollRef.current.offsetWidth;
        const index = Math.round(scrollLeft / containerWidth);
        setActiveIndex(index);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToPage = (pageIndex: number) => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: pageIndex * containerWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.section
      className="py-4 px-5 sm:py-6 md:py-12 lg:py-16 max-w-7xl mx-auto bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Header */}
      <motion.div
        className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex items-center gap-1 sm:gap-2">
          <h2 className="text-xs sm:text-sm md:text-xl lg:text-2xl font-normal text-gray-900">
            Top{' '}
            <span className="text-[#008ECC] pb-1">
              Electronics Brands
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
      </motion.div>
      {/* Underline section */}
      <div className="relative mb-10">
        <hr className="border-t border-gray-200" />
        <div className="absolute top-0 left-0 h-0.5 sm:h-1 w-40 sm:w-56 md:w-60 bg-[#008ECC] rounded-full -translate-y-1/2"></div>
      </div>


      {/* Brand Cards */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {brands.map((brand, index) => {
            const bgColor = brand.bgColor.match(/#[0-9A-Fa-f]{6}/)?.[0] || '#313131';
            const ellipseColor = brand.ellipseColor.match(/#[0-9A-Fa-f]{6}/)?.[0] || '#404040';
            const discountColor = brand.discountColor?.match(/#[0-9A-Fa-f]{6}/)?.[0] || '#FFFFFF';

            return (
              <motion.div
                key={brand.id}
                className="relative flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-[200px] rounded-2xl p-5 flex items-center justify-between cursor-pointer overflow-hidden snap-start"
                style={{ backgroundColor: bgColor }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Ellipse Background Decoration */}
                <motion.div
                  className="absolute bottom-14 -right-8 w-64 h-64 rounded-full opacity-50"
                  style={{ backgroundColor: ellipseColor }}
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                {/* Ellipse Border */}
                <div
                  className="absolute bottom-[44px] -right-[44px] w-[280px] h-[280px] rounded-full border"
                  style={{ borderColor: ellipseColor }}
                ></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div
                      className="px-5 py-2 text-white text-xs rounded-lg inline-block mb-3"
                      style={{ backgroundColor: ellipseColor }}
                    >
                      {brand.brand}
                    </div>
                    <div className="flex">
                      {brand.logo.startsWith('http') || brand.logo.startsWith('/') ? (
                        <img
                          src={brand.logo}
                          alt={brand.brand}
                          className="object-contain"
                        />
                      ) : (
                        <Icon
                          icon={brand.logo}
                          className="w-20 h-20"
                        />
                      )}
                    </div>
                  </div>
                  <div
                    className="font-hk-grotesk font-semibold text-2xl"
                    style={{ color: discountColor }}
                  >
                    {brand.discount}
                  </div>
                </div>

                {/* Product Image */}
                <motion.div
                  className="relative z-10 flex items-center justify-center"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <img
                    src={brand.productImage}
                    alt={`${brand.brand} product`}
                    className="w-44 h-44 object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Dots */}
        <motion.div
          className="flex justify-center gap-2 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {Array.from({ length: Math.ceil(brands.length / 3) }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToPage(index)}
              className={`h-2 rounded-full cursor-pointer ${index === activeIndex ? 'bg-blue-500 w-6' : 'bg-gray-300 w-2'
                }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                width: index === activeIndex ? 24 : 8,
                opacity: index === activeIndex ? 1 : 0.6
              }}
              transition={{ duration: 0.3 }}
              aria-label={`Go to page ${index + 1}`}
            ></motion.button>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TopBrands;

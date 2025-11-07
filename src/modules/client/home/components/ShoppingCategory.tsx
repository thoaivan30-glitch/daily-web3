'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCategory } from '@/modules/client/home/models/home.types';
import mockData from '@/modules/client/home/mocks/home.mock.json';
import Image from 'next/image';

const ShoppingCategorySection: React.FC = () => {
  const categories: ShoppingCategory[] = mockData.ShoppingCategories;

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-5 bg-gradient-to-b from-white to-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#333333] mb-4 font-sora">
            Mua sắm theo Danh mục
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#4B5563]">
            Khám phá bộ sưu tập đa dạng cho mọi nhu cầu
          </p>
        </motion.div>

        {/* Category Cards Grid */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center md:items-start">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl w-full max-w-[600px] h-[200px] sm:h-[220px] md:h-[260px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.005 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              
              {/* Overlay */}
              <div 
                className="absolute inset-0 pointer-events-none bg-black/60"
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <motion.h3
                  className="text-base sm:text-xl md:text-2xl text-white mb-2 font-sora"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                >
                  {category.title}
                </motion.h3>
                <motion.p
                  className="text-sm sm:text-base md:text-lg text-white"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                >
                  {category.description}
                </motion.p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/10 rounded-2xl transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShoppingCategorySection;

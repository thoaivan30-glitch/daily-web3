'use client';

import React from 'react';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';
import { motion } from 'framer-motion';

export const CtaSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center">
          {/* Title */}
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#111827] mb-2 sm:mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Tham Gia Làn Sóng Mới Của
          </motion.h2>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#00A3FF] mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            Tiêu Dùng Thông Minh
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto mb-8 sm:mb-10 px-2 sm:px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            Hãy trở thành một phần của cách mạng Web3 và khám phá cách thức tiêu dùng có ý thức, minh bạch và bền vững cho tương lai.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            {/* Explore Market Button */}
            <motion.button 
              className="group bg-[#FF8C00] hover:bg-[#FF7700] text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <IconifyIcon 
                icon="mdi:store" 
                width={20} 
                height={20} 
                className="group-hover:scale-110 transition-transform flex-shrink-0" 
              />
              <span className="text-sm sm:text-base md:text-lg">Khám Phá Thị Trường</span>
            </motion.button>

            {/* Learn About Token Button */}
            <motion.button 
              className="group bg-[#00A3FF] hover:bg-[#0284C7] text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <IconifyIcon 
                icon="fa7-solid:coins" 
                width={20} 
                height={20} 
                className="group-hover:scale-110 transition-transform flex-shrink-0" 
              />
              <span className="text-sm sm:text-base md:text-lg">Tìm Hiểu Về Token</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

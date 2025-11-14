'use client';

import React from 'react';
import { motion } from 'framer-motion';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';

export const Banner: React.FC = () => {
  return (
    <div className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] overflow-hidden bg-gradient-to-br from-[#FAF5FF] via-[#EFF6FF] to-[#EEF2FF]">
      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl mx-auto text-center py-12 sm:py-16 md:py-20 lg:py-24">
        
        {/* Main Title */}
        <motion.div
          className="mb-4 sm:mb-6 lg:mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight px-2">
            Xây Dựng Tương Lai Thương Mại
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mt-1 sm:mt-2 px-2">
            <span className="text-[#8B5CF6]">Phi Tập Trung</span>{' '}
            <span className="text-[#111827]">Cùng Chúng Tôi</span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-[#4B5563] max-w-4xl leading-relaxed mb-6 sm:mb-8 lg:mb-12 px-4 sm:px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Chúng tôi đang tìm kiếm các đối tác có cùng chí hướng, cam kết về chất lượng và đổi mới. Hãy 
          hợp tác để tích hợp sản phẩm của bạn vào hệ sinh thái Web3 đột phá của chúng tôi, tận dụng 
          tính minh bạch của Blockchain và sức mạnh của cộng đồng DAO.
        </motion.p>

        {/* Feature Tags */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          {/* Blockchain Tag */}
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md border border-white/20">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center">
              <IconifyIcon icon="mingcute:ethereum-fill" className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B5CF6]" />
            </div>
            <span className="text-xs sm:text-sm md:text-base font-medium text-[#111827]">Blockchain</span>
          </div>

          {/* DAO Tag */}
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md border border-white/20">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center">
              <IconifyIcon icon="mdi:account-group" className="w-5 h-5 sm:w-6 sm:h-6 text-[#3B82F6]" />
            </div>
            <span className="text-xs sm:text-sm md:text-base font-medium text-[#111827]">DAO</span>
          </div>

          {/* NFT Tag */}
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md border border-white/20">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center">
              <IconifyIcon icon="streamline-flex:diamond-1-remix" className="w-5 h-5 sm:w-6 sm:h-6 text-[#F59E0B]" />
            </div>
            <span className="text-xs sm:text-sm md:text-base font-medium text-[#111827]">NFT</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
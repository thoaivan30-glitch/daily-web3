'use client';

import React from 'react';
import { motion } from 'framer-motion';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';

const Banner: React.FC = () => {
  return (
    <div className="relative w-full bg-gradient-to-br from-[#2563EB] to-[#1E40AF] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 overflow-hidden">
      {/* Background Pattern - Responsive positioning */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 md:top-10 md:left-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border border-white/20 rounded-full"></div>
        <div className="absolute top-16 right-8 sm:top-24 sm:right-12 md:top-32 md:right-20 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-12 left-1/4 sm:bottom-16 sm:left-1/4 md:bottom-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 sm:bottom-24 sm:right-1/3 md:bottom-32 w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24 border border-white/20 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="container mx-auto max-w-5xl text-center">
          {/* Lock Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-4 sm:mb-6 md:mb-8"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center mx-auto backdrop-blur-sm">
              <IconifyIcon 
                icon="bxs:lock-alt" 
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl" 
              />
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight px-2"
          >
            <span className="block sm:inline">Dữ liệu Của Bạn Thuộc Về Bạn.</span>
            <br className="hidden xs:block sm:hidden md:block" />
            <span className="block sm:inline md:block lg:inline"> Đó Là Lời Cam Kết Của Chúng Tôi.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-[#DBEAFE] max-w-4xl mx-auto leading-relaxed px-3 sm:px-4 md:px-6"
          >
            Chúng tôi hoạt động trên nguyên tắc chủ quyền dữ liệu phi tập trung. Chính sách
            bảo mật này được thiết kế để giải thích cách chúng tôi xử lý thông tin cá nhân
            của bạn theo cả chuẩn mực pháp lý truyền thống và tiêu chuẩn bảo mật của
            Web3.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
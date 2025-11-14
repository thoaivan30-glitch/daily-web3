'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';

export const BannerValues: React.FC = () => {
  return (
    <div className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[400px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/image/values/banner-values.png"
          alt="Values Banner"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center py-6 sm:py-8"
      >
        {/* Title with Icon */}
        <motion.div
          className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <IconifyIcon 
            icon="fa7-solid:compass" 
            width={28} 
            height={28} 
            className="text-[#3B82F6] w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#111827]">
            Các Giá Trị Cốt Lõi
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-sora text-[#1F2937] mb-3 sm:mb-4 md:mb-6 px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Định Hình Tương Lai Tiêu Dùng Bền Vững và Phi Tập Trung
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-[#4B5563] max-w-5xl leading-relaxed px-3 sm:px-4 md:px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Các sản phẩm chúng tôi cung cấp không chỉ là vật dụng hữu ích mà còn là đại diện cho cách chúng tôi tin rằng
          thương mại điện tử nên hoạt động:{' '}
          <span className="font-semibold text-[#3B82F6]">Công bằng Có trách nhiệm</span>
          {' '}, và{' '}
          <span className="font-semibold text-[#3B82F6]">Được hỗ trợ bởi công nghệ</span>.
        </motion.p>
      </div>
    </div>
  );
};
export default BannerValues;

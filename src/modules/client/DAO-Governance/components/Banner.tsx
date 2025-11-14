'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const    Banner: React.FC = () => {
  return (
    <div className="relative w-full h-[320px] sm:h-[360px] md:h-[420px] lg:h-[480px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/image/values/banner-values.png"
          alt="DAO Governance Banner"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto text-center py-8 sm:py-10 md:py-12">
        {/* Title */}
        <motion.h1
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#111827] mb-3 sm:mb-4 md:mb-5 px-2 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Tương Lai Của Công Ty Được Quyết Định{' '}
          <span className="text-[#00A3FF]">Bởi Cộng Đồng</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-[#4B5563] max-w-4xl leading-relaxed px-2 sm:px-4 md:px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          DAO (Tổ chức Tự trị Phi tập trung) là cốt lõi của sự phát triển minh bạch và công bằng của
          chúng tôi. Nếu bạn sở hữu Token Quản trị{' '}
          <span className="font-semibold text-[#00A3FF]">ECODAO</span>, bạn có quyền đề xuất và bỏ phiếu về
          mọi vấn đề quan trọng, từ việc chọn sản phẩm mới đến chiến lược bền vững.
        </motion.p>
      </div>
    </div>
  );
};

export default Banner;

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/image/mission/banner-mission.png"
          alt="Mission Banner"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center py-8 sm:py-0">
        <motion.h1 
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight sm:leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-[#000000]">Nâng Tầm Đồ Dùng Hàng Ngày</span>
          <br />
          <span className="text-[#00A3FF]">Bằng Tính Minh Bạch Của Web3</span>
        </motion.h1>
        
        <motion.p 
          className="text-sm sm:text-lg md:text-xl text-[#4B5563] max-w-4xl leading-relaxed px-2 sm:px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Chúng tôi tin rằng những vật dụng bạn sử dụng mỗi ngày xứng đáng được tạo ra với sự trung
          thực tuyệt đối. Bằng cách áp dụng công nghệ Blockchain, chúng tôi mang đến sự minh bạch
          về nguồn gốc, chất lượng và tác động bền vững, trao quyền sở hữu thực sự cho người tiêu
          dùng.
        </motion.p>
      </div>
    </div>
  );
};

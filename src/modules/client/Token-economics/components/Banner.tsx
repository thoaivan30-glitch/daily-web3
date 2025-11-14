'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';

export const Banner: React.FC = () => {
    return (
        <div className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] lg:h-[480px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/image/token-economics/banner-token-economics.png"
                    alt="Token Economics Banner"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-white/30"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 max-w-6xl mx-auto text-center py-6 sm:py-8 md:py-10 lg:py-12">
                {/* Icons */}
                <motion.div
                    className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <IconifyIcon icon="fa7-solid:coins" className="text-[#FF8C00] text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
                    <IconifyIcon icon="mdi:link-variant" className="text-[#111827] text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
                </motion.div>

                {/* Title */}
                <motion.h1
                    className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#000000] mb-2 sm:mb-3 md:mb-4 lg:mb-5 px-2 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                >
                    Tài Sản Số, Giá Trị Vật Lý:{' '}
                    <span className="text-[#FF7B00] block sm:inline mt-1 sm:mt-0">Nền Tảng Kinh Tế Của UTILITY</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#000000] max-w-4xl leading-relaxed px-2 sm:px-3 md:px-4 lg:px-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                    UTILITY không chỉ là một tài sản số; đó là xương sống của hệ sinh thái thương mại phi tập trung của chúng tôi. Token này cung cấp quyền quản trị, phần thưởng cho sự trung thành và định giá cho quyền sở hữu sản phẩm vật lý.
                </motion.p>
            </div>
        </div>
    );
};

export default Banner;

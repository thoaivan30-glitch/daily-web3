'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';

export const Banner: React.FC = () => {
  return (
    <div className="relative w-full overflow-visible pb-16 sm:pb-20 md:pb-24 lg:pb-28">
      {/* Background Image - Responsive Height */}
      <div className="absolute top-0 left-0 right-0 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <Image
          src="/image/nft-makertplace/banner-nftmarket.jpg"
          alt="NFT Marketplace Banner"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white/40"></div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-start px-4 sm:px-6 md:px-8 lg:px-12 pt-8 sm:pt-12 md:pt-16 lg:pt-20">
        <div className="container mx-auto max-w-7xl">
          {/* Header Text */}
          <motion.div
            className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#111827] mb-2 sm:mb-3 md:mb-4 leading-tight px-2">
              Nơi Vật Dụng Hàng Ngày Gặp Gỡ
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Quyền Sở Hữu Kỹ Thuật Số
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#4B5563] max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
              Khám phá bộ sưu tập NFT độc quyền của chúng tôi. Mỗi NFT là một Chứng nhận Quyền sở hữu
              hoặc một vật phẩm sưu tầm kỹ thuật số được liên kết với sản phẩm vật lý bạn yêu thích, mở
              khóa các đặc quyền trong thế giới thực và thế giới số.
            </p>
          </motion.div>

          {/* Featured NFT Card */}
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <div
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden mx-2 sm:mx-4"
              style={{ boxShadow: '0px 0px 20px 0px #00A3FF4D' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left: NFT Image */}
                <div className="relative bg-white p-4 sm:p-6 md:p-8 flex items-center justify-center min-h-[250px] sm:min-h-[300px] md:min-h-[350px]">
                  <div className="relative w-full h-full max-w-sm sm:max-w-md md:max-w-lg rounded-xl overflow-hidden aspect-square">
                    <Image
                      src="/image/nft-makertplace/section-1.png"
                      alt="Featured NFT"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Right: NFT Details */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white">
                  {/* Featured Badge */}
                  <div className="inline-flex items-center gap-2 bg-[#FF8C00] text-white text-xs sm:text-sm font-sbold px-4 py-2 rounded-full mb-4 sm:mb-6 w-fit">
                    <IconifyIcon icon="streamline-flex:diamond-1-remix" className="text-xs sm:text-sm font-semibold" />
                    Featured Collection
                  </div>

                  {/* Title */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#111827] mb-4 sm:mb-6 leading-tight">
                    Bộ Sưu Tập Giới Hạn:
                    <br />
                    SmartWatch Phiên bản Kim Cương
                  </h2>

                  {/* Price Info */}
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs sm:text-sm md:text-base text-[#4B5563] font-medium">Giá Sàn (Floor Price):</span>
                      <span className="text-base sm:text-lg md:text-xl font-bold text-[#00A3FF]">
                        2.5 ETH
                      </span>
                    </div>

                    {/* Minted Progress */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs sm:text-sm md:text-base text-[#4B5563]">Số Lượng Đã Mint:</span>
                        <span className="text-sm sm:text-base md:text-lg font-semibold text-[#000000]">
                          847 / 1,000
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
                        <div
                          className="bg-[#00A3FF] h-2 sm:h-2.5 rounded-full transition-all duration-300"
                          style={{ width: '84.7%' }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full sm:w-[235px] h-[44px] sm:h-[48px] bg-[#FF8C00] hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base shadow-lg hover:shadow-xl hover:scale-[1.02]">
                    Khám Phá Toàn Bộ
                    <IconifyIcon icon="mdi:arrow-right" className="text-sm md:text-base" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';

const NFTOwnershipPerks: React.FC = () => {
  const perks = [
    {
      id: 1,
      title: 'Sở hữu Vĩnh viễn',
      description: 'NFT được ghi vĩnh viễn trên blockchain, thuộc về vị trí nhận của bạn.',
      icon: 'mdi:infinity'
    },
    {
      id: 2,
      title: 'Giảm giá Mua sắm',
      description: 'Mở khóa các mức giảm giá vĩnh viễn hoặc đặc biệt cho sản phẩm liên quan.',
      icon: 'mdi:percent'
    },
    {
      id: 3,
      title: 'Đặc quyền DAO',
      description: 'Tăng quyền lực bỏ phiếu trong DAO và tham gia quyết định hướng tương lai.',
      icon: 'ion:checkbox'
    },
    {
      id: 4,
      title: 'Quà tặng/Airdrop',
      description: 'Nhận quà tặng số hoặc vật lý miễn phí theo đợt airdrop tương lai.',
      icon: 'mdi:gift'
    }
  ];

  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="bg-gradient-to-r from-[#00A3FF] to-[#2563EB] rounded-xl sm:rounded-2xl py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl text-white mb-2 sm:mb-4 px-2">
            Quyền Lợi Độc Quyền Khi Sở Hữu
          </h2>
        </motion.div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {perks.map((perk, index) => (
            <motion.div
              key={perk.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <IconifyIcon 
                    icon={perk.icon} 
                    className="text-white text-2xl sm:text-3xl md:text-4xl" 
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-sora text-white mb-2 sm:mb-3">
                {perk.title}
              </h3>
              <p className="text-[#DBEAFE] text-sm sm:text-base leading-relaxed">
                {perk.description}
              </p>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default NFTOwnershipPerks;
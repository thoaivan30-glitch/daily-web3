'use client';

import React from 'react';
import { motion } from 'framer-motion';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';

const NFTTrade: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Connect Wallet',
      description: 'Kết nối ví của bạn (MetaMask/Coinbase Wallet) để bắt đầu giao dịch NFT một cách an toàn.',
      icon: 'ph:wallet-fill'
    },
    {
      id: 2,
      title: 'Fund Wallet',
      description: 'Đảm bảo bạn có đủ Crypto (ETH/Token) để giao dịch và trả phí gas cho blockchain.',
      icon: 'fa7-solid:coins'
    },
    {
      id: 3,
      title: 'Approve & Buy',
      description: 'Xác nhận giao dịch trong ví của bạn để chính thức sở hữu NFT và mở khóa các đặc quyền.',
      icon: 'material-symbols:check-circle-rounded'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl text-[#111827] mb-2 sm:mb-4 px-2">
            Giao Dịch NFT Đơn Giản Trong 3 Bước
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              {/* Step Number Circle */}
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#00A3FF] rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <IconifyIcon 
                    icon={step.icon} 
                    className="text-white text-xl sm:text-2xl md:text-3xl" 
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-sora text-[#000000] mb-2 sm:mb-3">
                {step.id}. {step.title}
              </h3>
              <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed px-2">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NFTTrade;
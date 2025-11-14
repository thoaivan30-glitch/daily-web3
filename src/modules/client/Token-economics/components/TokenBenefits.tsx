'use client';

import React from 'react';
import { motion } from 'framer-motion';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';
import { getTokenBenefits } from '../services/economics.service';

export const TokenBenefits: React.FC = () => {
  const benefitsData = getTokenBenefits();

  // Map gradient colors from Tailwind format to CSS
  const getGradientStyle = (bgColor: string) => {
    const gradientMap: { [key: string]: string } = {
      'from-[#3B82F6] to-[#2563EB]': 'linear-gradient(to bottom right, #3B82F6, #2563EB)',
      'from-[#22C55E] to-[#16A34A]': 'linear-gradient(to bottom right, #22C55E, #16A34A)',
      'from-[#A855F7] to-[#9333EA]': 'linear-gradient(to bottom right, #A855F7, #9333EA)',
      'from-[#EAB308] to-[#CA8A04]': 'linear-gradient(to bottom right, #EAB308, #CA8A04)',
    };
    return gradientMap[bgColor] || 'linear-gradient(to bottom right, #3B82F6, #2563EB)';
  };

  return (
    <section className="py-8 sm:py-10 md:py-14 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#111827] mb-2 sm:mb-3 px-2">
            Tiện ích & Giá trị
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#4B5563] px-2">
            Tôi làm gì với Token này?
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {benefitsData.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ background: getGradientStyle(benefit.bgColor) }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
            >
              {/* Icon */}
              <div className="flex justify-center mt-3 sm:mt-4 md:mt-5 lg:mt-6">
                <IconifyIcon
                  icon={benefit.icon}
                  className={`${benefit.iconColor} text-2xl sm:text-3xl md:text-4xl`}
                />
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-center mb-3 sm:mb-4 flex items-center justify-center min-h-[2.5rem] sm:min-h-[3rem]">
                {benefit.title}
              </h3>

              {/* Features */}
              <div className="min-h-[3.5rem] sm:min-h-[4rem] md:min-h-[4.5rem] mb-2 sm:mb-3">
                <p className="text-[10px] sm:text-xs md:text-sm leading-relaxed opacity-95">
                  <span className="font-semibold">Chức năng:</span> {benefit.features}
                </p>
              </div>

              {/* Benefits */}
              <div className="min-h-[3.5rem] sm:min-h-[4rem] md:min-h-[4.5rem] mb-3 sm:mb-4 md:mb-5">
                <p className="text-[10px] sm:text-xs md:text-sm leading-relaxed opacity-95">
                  <span className="font-semibold">Lợi ích:</span> {benefit.benefits}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TokenBenefits;

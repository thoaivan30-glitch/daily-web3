'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { getTokenOverview } from '../services/economics.service';

export const TokenOverview: React.FC = () => {
  const overviewData = getTokenOverview();

  return (
    <section className="py-8 sm:py-10 md:py-14 lg:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#111827] mb-2 sm:mb-3 px-2">
            {overviewData.title}
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#4B5563] px-2">
            {overviewData.subtitle}
          </p>
        </motion.div>

        {/* Table Card */}
        <motion.div
          className="bg-gradient-to-b from-[#EFF6FF] to-[#FAF5FF] rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 md:p-6 lg:p-8 overflow-x-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 pb-2 sm:pb-3 mb-3 sm:mb-4 border-b-[2px] border-blue-200 min-w-[280px]">
            <div className="text-xs sm:text-sm md:text-base lg:text-lg font-sora font-medium text-[#111827] text-center px-1">
              Thông số Kỹ thuật
            </div>
            <div className="text-xs sm:text-sm md:text-base lg:text-lg font-sora text-[#111827] text-center px-1">
              Giá trị
            </div>
            <div className="text-xs sm:text-sm md:text-base lg:text-lg font-sora text-[#111827] text-center px-1">
              Vai trò
            </div>
          </div>

          {/* Table Body */}
          <div className="min-w-[280px]">
            {overviewData.metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-3 py-2 sm:py-3 md:py-4 border-b border-gray-200 last:border-b-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                {/* Label */}
                <div className="flex items-center justify-center px-1">
                  <span className="text-[10px] sm:text-xs md:text-sm lg:text-base text-[#111827] font-medium text-center leading-tight">
                    {metric.label}
                  </span>
                </div>

                {/* Value */}
                <div className="flex items-center justify-center px-1">
                  <span
                    className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-center leading-tight"
                    style={{ color: metric.valueColor || '#111827' }}
                  >
                    {metric.value}
                  </span>
                </div>

                {/* Description */}
                <div className="flex items-center justify-center px-1">
                  <span className="text-[10px] sm:text-xs md:text-sm lg:text-base text-[#4B5563] text-center leading-tight">
                    {metric.description}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TokenOverview;

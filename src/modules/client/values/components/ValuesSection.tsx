'use client';

import React from 'react';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';
import { getValues } from '../services/values.service';
import { Value } from '../models/values.types';
import { motion } from 'framer-motion';

interface ValueCardProps {
  value: Value;
  index: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ value, index }) => {
  return (
    <motion.div
      className="bg-[#F9FAFB] rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 md:p-8 h-full flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: "easeOut"
      }}
      whileHover={{ y: -5 }}
    >
      {/* Icon and Title */}
      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
        <motion.div
          className={`${value.iconColor} w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0`}
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <IconifyIcon icon={value.icon} width={24} height={24} className="text-white sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </motion.div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-sora text-[#1F2937] pt-1 sm:pt-2">
          {value.title}
        </h3>
      </div>

      {/* Meaning */}
      <div className="mb-3 sm:mb-4">
        <p className="text-sm sm:text-base font-semibold text-[#4B5563] mb-1.5 sm:mb-2">Ý nghĩa:</p>
        <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
          {value.meaning}
        </p>
      </div>

      {/* Web3 Feature */}
      <div className="mt-auto bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 border-l-[3px] sm:border-l-4 border-[#3B82F6]">
        <p className="text-sm sm:text-base font-semibold text-[#3B82F6] mb-1.5 sm:mb-2">{value.web3Feature}</p>
        <p className="text-xs sm:text-sm md:text-base text-[#1F2937] leading-relaxed">
          {value.description}
        </p>
      </div>
    </motion.div>
  );
};

export const ValuesSection: React.FC = () => {
  const values = getValues();

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#1F2937] mb-2 sm:mb-3">
            Các Giá Trị Cốt Lõi
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-[#3B82F6] mx-auto"></div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {values.map((value, index) => (
            <ValueCard
              key={value.id}
              value={value}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';
import { getProcessSteps, getParticipationMethods } from '../services/dao.service';

export const GovernanceProcess: React.FC = () => {
  const processSteps = getProcessSteps();
  const participationMethods = getParticipationMethods();

  // Helper function to parse description with **highlighted** text
  const parseDescription = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const highlightedText = part.slice(2, -2);
        return (
          <span key={index} className="text-[#00A3FF] font-semibold">
            {highlightedText}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-[#f8f8f8]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
        {/* Process Section */}
        <motion.div
          className="mb-10 sm:mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#111827] text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            Quy Trình Quản Trị Ba Bước
          </h2>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
              >
                {/* Icon Circle */}
                <motion.div
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#00A3FF] rounded-full flex items-center justify-center mb-3 sm:mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconifyIcon icon={step.icon} className="text-white text-2xl sm:text-3xl md:text-4xl" />
                </motion.div>

                {/* Step Number */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#00A3FF] rounded-full flex items-center justify-center mb-2 sm:mb-3">
                  <span className="text-white font-bold text-xs sm:text-sm">{step.number}</span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-xl font-sora text-[#111827] mb-2 sm:mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-[#4B5563] leading-relaxed">
                  {parseDescription(step.description)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Participation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#111827] text-center mb-3 sm:mb-4">
            Bạn Muốn Tham Gia Quyết Định?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-[#4B5563] text-center mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Tham gia cộng đồng DAO và có tiếng nói trong tương lai của công ty. Nhận Token Quản trị
            ECODAO thông qua nhiều cách khác nhau.
          </p>

          {/* Methods Grid */}
          <div className="grid grid-cols-1 max-w-3xl mx-auto sm:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-8 sm:mb-10">
            {participationMethods.map((method, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-5 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ y: -3 }}
              >
                <IconifyIcon icon={method.icon} className="text-[#00A3FF] text-4xl sm:text-4xl md:text-5xl mb-3 sm:mb-4" />
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#1F2937] mb-2">
                  {method.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B7280]">
                  {method.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <motion.button
              className="w-full sm:w-auto bg-[#FF8C00] hover:bg-[#ff965e] text-white py-3 sm:py-4 px-8 sm:px-10 rounded-lg flex items-center justify-center gap-2 font-medium text-sm sm:text-base transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <IconifyIcon icon="mdi:information" className="text-lg sm:text-xl" />
              Tìm hiểu về Token ECODAO
            </motion.button>
            
            <motion.button
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#00A3FF] border-2 border-[#00A3FF] py-3 sm:py-4 px-8 sm:px-10 rounded-lg flex items-center justify-center gap-2 font-medium text-sm sm:text-base transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <IconifyIcon icon="qlementine-icons:discord-fill-16" className="text-lg sm:text-xl" />
              Tham gia Kênh Thảo luận
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GovernanceProcess;

'use client'

import React from 'react';
import { motion } from 'framer-motion';
import IconifyIcon from "@/modules/client/common/components/IconifyIcon";
import { AboutFeature } from '@/modules/client/home/models/home.types';
import mockData from '@/modules/client/home/mocks/home.mock.json';

const AboutUS: React.FC = () => {
  const features: AboutFeature[] = mockData.AboutFeatures;

  return (
    <motion.section
      className="py-12 sm:py-16 md:py-20 lg:py-24 mx-auto px-5 bg-gradient-to-br from-[#EFF6FF] via-[#a1ddff] to-[#EFF6FF]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#333333] mb-4 font-sora">
            Sự Khác biệt Web3
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#4B5563] ">
            Trải nghiệm mua sắm minh bạch và bền vững
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="bg-white rounded-2xl p-6  sm:p-8 shadow-xl hover:shadow-xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Icon */}
              <motion.div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                style={{ backgroundColor: feature.iconBg }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <IconifyIcon
                  icon={feature.icon}
                  className="w-7 h-7"
                  style={{ color: feature.iconColor }}
                />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-sora text-[#333333] mb-3 text-center">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUS;

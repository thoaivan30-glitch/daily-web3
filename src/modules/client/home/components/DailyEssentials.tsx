'use client'

import React from 'react';
import Image from 'next/image';
import { EssentialCard } from '@/modules/client/home/models/home.types';
import mockData from '@/modules/client/home/mocks/home.mock.json';
import { motion } from 'framer-motion';
import IconifyIcon from "@/modules/client/common/components/IconifyIcon";

const DailyEssentials: React.FC = () => {
  const essentials: EssentialCard[] = mockData.DailyEssentials;


  return (
    <motion.section
      className="py-4 px-5 sm:py-6 md:py-12 lg:py-16 max-w-7xl mx-auto bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Header */}
      <motion.div
        className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex items-center gap-1 sm:gap-2">
          <h2 className="text-xs sm:text-sm md:text-xl lg:text-2xl font-normal text-gray-900">
            Daily{' '}
            <span className="text-[#008ECC] pb-1">
              Essentials
            </span>
          </h2>
        </div>
        <button className="flex items-center gap-1 sm:gap-2 text-gray-700 hover:text-[#008ECC] transition-colors group">
          <span className="text-xs sm:text-sm md:text-base font-medium">View All</span>
          <IconifyIcon
            icon="solar:alt-arrow-right-linear"
            className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
          />
        </button>
      </motion.div>
      {/* Underline section */}
      <div className="relative mb-10">
        <hr className="border-t border-gray-200" />
        <div className="absolute top-0 left-0 h-0.5 sm:h-1 w-40 sm:w-56 md:w-36 bg-[#008ECC] rounded-full -translate-y-1/2"></div>
      </div>


      {/* Essential Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {essentials.map((item, index) => (
          <div key={item.id} className="flex flex-col">
            <motion.div
              className="rounded-2xl p-4 flex items-center justify-center cursor-pointer h-48 border border-transparent"
              style={{ backgroundColor: '#F5F5F5' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{
                y: -8,
                borderColor: "#008ECC",
                borderWidth: "1px",
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="flex items-center justify-center w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={192}
                  height={192}
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
            <div className="text-center mt-3">
              <div className="text-base text-[#666666] font-semibold font-hk-grotesk mb-1">{item.title}</div>
              <div className="text-xl font-hk-grotesk font-bold text-[#222222]">
                {item.discount}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default DailyEssentials;

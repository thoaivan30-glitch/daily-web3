'use client';

import React from 'react';
import { motion } from 'framer-motion';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';
import { getStatCards } from '../services/dao.service';
import { StatCard } from '../models/dao.types';

interface StatCardComponentProps {
  stat: StatCard;
  index: number;
}

const StatCardComponent: React.FC<StatCardComponentProps> = ({ stat, index }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-2xl hover:shadow-xl transition-shadow duration-300 p-5 sm:p-6 md:p-8 flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ y: -5 }}
    >
      {/* Icon and Label */}
      <div className="flex items-center justify-between mb-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <IconifyIcon icon={stat.icon} className="text-[#00A3FF] text-3xl sm:text-3xl md:text-4xl" />
        </motion.div>
        <span className="text-[10px] sm:text-xs font-jetbrains-mono text-[#6B7280] uppercase tracking-wider">
          {stat.label}
        </span>
      </div>

      {/* Value */}
      <div className="mb-2">
        <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-[#00A3FF]">
          {stat.value}
        </h3>
      </div>

      {/* Title */}
      <div className="mb-2">
        <p className="text-sm sm:text-base text-[#4B5563] font-medium">
          {stat.title}
        </p>
      </div>

      {/* Description */}
      <div>
        <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
          {stat.description}
        </p>
      </div>
    </motion.div>
  );
};

export const DAOStatsOverview: React.FC = () => {
  const statCards = getStatCards();

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#111827]">
            Thống Kê DAO
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {statCards.map((stat, index) => (
            <StatCardComponent
              key={stat.id}
              stat={stat}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DAOStatsOverview;

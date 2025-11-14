'use client';

import React from 'react';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';
import { getMissions } from '../services/our-mission.service';
import { Mission } from '../models/our-mission.types';
import { motion } from 'framer-motion';

interface MissionCardProps {
  mission: Mission;
  index: number;
}

// Helper function to parse **bold** text in description
const parseDescription = (text: string): React.ReactNode => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return <span key={index} className="font-bold">{part}</span>;
    }
    return part;
  });
};

const MissionCard: React.FC<MissionCardProps> = ({ mission, index }) => {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 sm:p-6 md:p-8 h-full flex flex-col"
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
      {/* Icon */}
      <motion.div 
        className={`${mission.iconColor} w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 flex-shrink-0`}
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <IconifyIcon icon={mission.icon} width={28} height={28} className="text-white sm:w-8 sm:h-8" />
      </motion.div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-sora text-[#111827] mb-3 sm:mb-4 flex items-center gap-0.5 min-h-[3.5rem] sm:min-h-[4rem] md:min-h-[4.5rem]">
        {mission.title}
      </h3>

      {/* Description */}
      <div className="text-sm sm:text-base text-[#4B5563] leading-relaxed flex-grow">
        {parseDescription(mission.description)}
      </div>
    </motion.div>
  );
};

export const MissionValue: React.FC = () => {
  const missions = getMissions();

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#111827] mb-3 sm:mb-4 px-2">
            Ba Trụ Cột Sứ Mệnh
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#4B5563] max-w-2xl mx-auto px-4">
            Những giá trị cốt lõi định hình tầm nhìn của chúng tôi
          </p>  
        </motion.div>

        {/* Mission Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {missions.map((mission, index) => (
            <MissionCard
              key={mission.id}
              mission={mission}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

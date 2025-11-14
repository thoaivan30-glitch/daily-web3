'use client';

import React from 'react';
import { motion } from 'framer-motion';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';
import { Proposal } from '../models/dao.types';

interface VoteCardProps {
  proposal: Proposal;
  index: number;
}

export const VoteCard: React.FC<VoteCardProps> = ({ proposal, index }) => {
  return (
    <motion.div
      className="bg-[#f9fafb] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-5 md:p-6 flex flex-col h-full border border-gray-200"
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
      {/* Status and ID */}
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-[#DCFCE7] text-[#166534] text-[10px] sm:text-xs font-medium rounded-full">
          {proposal.status}
        </span>
        <span className="text-[10px] sm:text-xs text-[#6B7280] font-jetbrains-mono truncate">
          {proposal.proposalId}
        </span>
      </div>

      {/* Two Column Layout */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4 sm:mb-6">
        {/* Left Column - Content */}
        <div className="flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-base sm:text-lg md:text-xl text-[#111827] mb-3 sm:mb-4 font-semibold">
            {proposal.title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed mb-3 sm:mb-4">
            {proposal.description}
          </p>

          {/* Author */}
          <div className="flex items-center gap-1.5 sm:gap-2 mb-2">
            <IconifyIcon icon="mdi:account" className="text-[#6B7280] text-sm sm:text-base" />
            <span className="text-xs sm:text-sm text-[#6B7280]">
              Đề xuất bởi <span>{proposal.author}</span>
            </span>
          </div>

          {/* End Time */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <IconifyIcon icon="mdi:clock-outline" className="text-[#EA580C] text-sm sm:text-base" />
            <span className="text-xs sm:text-sm text-[#EA580C]">
              {proposal.endTime}
            </span>
          </div>
        </div>

        {/* Right Column - Circular Progress */}
        <div className="flex items-center sm:items-start justify-center sm:justify-end">
          <div className="relative flex-shrink-0">
            <svg className="w-16 h-16 sm:w-14 sm:h-14 md:w-16 md:h-16 transform -rotate-90" viewBox="0 0 56 56">
              <circle
                cx="28"
                cy="28"
                r="20"
                stroke="#E5E7EB"
                strokeWidth="10"
                fill="none"
              />
              <circle
                cx="28"
                cy="28"
                r="20"
                stroke="#00A3FF"
                strokeWidth="10"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 20}`}
                strokeDashoffset={`${2 * Math.PI * 20 * (1 - proposal.votePercentage / 100)}`}
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Vote Button */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
        <motion.button
          className="flex-1 bg-[#FF8C00] hover:bg-[#ee702c] text-white py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl flex items-center justify-center gap-2 font-medium text-xs sm:text-sm transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <IconifyIcon icon="mdi:wallet" className="text-base sm:text-lg" />
          Connect Wallet to VOTE
        </motion.button>
        
        <motion.button
          className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-600 p-2.5 sm:p-3 rounded-xl flex items-center justify-center transition-colors sm:w-auto w-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <IconifyIcon icon="mdi:open-in-new" className="text-lg sm:text-xl" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default VoteCard;

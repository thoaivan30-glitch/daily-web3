'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { getProposals } from '../services/dao.service';
import VoteCard from './VoteCard';

export const ProposalsSection: React.FC = () => {
  const proposals = getProposals();

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#111827]">
            Các Đề xuất Đang Chờ Bỏ phiếu
          </h2>
        </motion.div>

        {/* Proposals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10">
          {proposals.map((proposal, index) => (
            <VoteCard
              key={proposal.id}
              proposal={proposal}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProposalsSection;

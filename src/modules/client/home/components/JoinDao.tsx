'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import IconifyIcon from "@/modules/client/common/components/IconifyIcon";
import { JoinDaoData } from '@/modules/client/home/models/home.types';
import mockData from '@/modules/client/home/mocks/home.mock.json';

const JoinDao: React.FC = () => {
  const daoData: JoinDaoData = mockData.JoinDao;

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-5 bg-gradient-to-br from-[#FFF7ED] via-[#ffdfb7] to-[#FFF7ED]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#333333] mb-4 font-sora"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {daoData.title}
              </motion.h2>

              <motion.p
                className="text-lg sm:text-xl text-[#4B5563] mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {daoData.description}
              </motion.p>

              {/* Benefits List */}
              <div className="space-y-4 mb-8">
                {daoData.benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.id}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00A3FF] flex items-center justify-center mt-0.5">
                      <IconifyIcon
                        icon="mdi:check"
                        className="text-white text-base"
                      />
                    </div>
                    <p className="text-base sm:text-lg text-[#000000]">
                      {benefit.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                className="bg-[#00A3FF] hover:bg-[#0090E0] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {daoData.buttonText}
              </motion.button>
            </div>

            {/* Right Image */}
            <motion.div
              className="relative h-[250px] sm:h-[290px] lg:h-[320px] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Image
                src={daoData.image}
                alt="Join DAO Community"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinDao;

"use client";

import IconifyIcon from '@/modules/client/common/components/IconifyIcon';
import { motion } from 'framer-motion';

export default function BlockchainVerificationIntro() {
  return (
    <div className="w-full">
      {/* Dark Section */}
      <div className="bg-gradient-to-b from-[#1F2937] to-[#1F2937] py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl font-sora text-white mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Tìm hiểu cách chúng tôi vận hành
          </motion.h2>
          <motion.p 
            className="text-[#D1D5DB] text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Giá trị của chúng tôi không chỉ là lời hứa, mà là những giao dịch đã được xác
            minh trên chuỗi khối.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <motion.button 
              className="w-full sm:w-auto bg-[#3B82F6] text-sm sm:text-base hover:bg-blue-600 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-lg flex items-center justify-center font-semibold gap-2 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <IconifyIcon icon="mdi:file-document" className="text-lg sm:text-xl" />
              Đọc Whitepaper/Docs
            </motion.button>
            <motion.button 
              className="w-full sm:w-auto bg-[#F97316] text-sm sm:text-base font-semibold hover:bg-orange-600 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <IconifyIcon icon="mdi:progress-question" className="text-lg sm:text-xl" />
              Xem Sản phẩm đã được Xác thực
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Blue Section */}
      <div className="bg-[#3B82F6] py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <IconifyIcon icon="typcn:starburst" className="text-white text-3xl sm:text-4xl" />
            </motion.div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-sora text-white">
              Cam Kết Minh Bạch
            </h3>
          </motion.div>
          <motion.p 
            className="text-[#DBEAFE] text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Mọi sản phẩm, quy trình và giao dịch của chúng tôi đều được ghi nhận bất biến trên
            blockchain, đảm bảo tính minh bạch và có thể kiểm chứng 100%.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

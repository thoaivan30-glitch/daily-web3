'use client';

import React from 'react';
import { motion } from 'framer-motion';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';

const ContactPrivacyTeam: React.FC = () => {
    return (
        <div className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-[#2563EB] to-[#1E40AF] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-center text-white"
                >
                    {/* Title */}
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-3 sm:mb-4 px-2">
                        Thông tin Liên hệ
                    </h2>
                    
                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#DBEAFE] mb-6 sm:mb-8 max-w-2xl mx-auto px-2 leading-relaxed">
                        Có câu hỏi về chính sách bảo mật? Chúng tôi sẵn sàng hỗ trợ bạn.
                    </p>

                    {/* Contact Information */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-6 sm:mb-8">
                        {/* Email */}
                        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
                            <IconifyIcon
                                icon="material-symbols:mail"
                                className="text-white text-2xl sm:text-3xl flex-shrink-0"
                            />
                            <span className="text-sm sm:text-base md:text-lg break-all sm:break-normal">
                                privacy@secureweb3.com
                            </span>
                        </div>

                        {/* Effective Date */}
                        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
                            <IconifyIcon
                                icon="material-symbols:calendar-today"
                                className="text-white text-2xl sm:text-3xl flex-shrink-0"
                            />
                            <span className="text-sm sm:text-base md:text-lg whitespace-nowrap">
                                Ngày có hiệu lực: 01/11/2024
                            </span>
                        </div>
                    </div>

                    {/* Contact Button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-white text-[#2563EB] px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 sm:gap-3 mx-auto shadow-lg w-full sm:w-auto justify-center max-w-xs sm:max-w-none"
                    >
                        <IconifyIcon
                            icon="mdi:shield-half-full"
                            className="text-[#2563EB] text-lg sm:text-xl flex-shrink-0"
                        />
                        <span className="truncate">Liên hệ Bộ phận Bảo mật</span>
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPrivacyTeam;
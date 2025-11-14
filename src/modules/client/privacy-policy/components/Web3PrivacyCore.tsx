'use client';

import React from 'react';
import { motion } from 'framer-motion';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';

const Web3PrivacyCore: React.FC = () => {
    const privacyPrinciples = [
        {
            id: 1,
            icon: 'solar:key-bold',
            title: '1. Đăng nhập Phi tập trung',
            principle: 'Nguyên tắc:',
            principleText: 'Việc kết nối ví là phương thức xác thực chính.',
            commitment: 'Cam kết:',
            commitmentText: 'Chúng tôi không yêu cầu hoặc lưu trữ mật khẩu, email hoặc thông tin đăng nhập truyền thống của bạn.'
        },
        {
            id: 2,
            icon: 'mdi:link-variant',
            title: '2. Dữ liệu Ví',
            principle: 'Nguyên tắc:',
            principleText: 'Chúng tôi chỉ xem địa chỉ ví công khai để xác minh quyền sở hữu NFT/Token.',
            commitment: 'Cam kết:',
            commitmentText: 'Không bao giờ có quyền truy cập vào Khóa cá nhân hoặc Seed Phrase của bạn.'
        },
        {
            id: 3,
            icon: 'material-symbols:cloud',
            title: '3. Lưu trữ Dữ liệu',
            principle: 'Nguyên tắc:',
            principleText: 'Ưu tiên lưu trữ dữ liệu trên các hệ thống phi tập trung (IPFS).',
            commitment: 'Cam kết:',
            commitmentText: 'Dữ liệu giao dịch được ghi công khai trên Blockchain với tính bất biến.'
        }
    ];

    return (
        <div className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-12 md:mb-16"
                >
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-[#111827] mb-3 sm:mb-4 px-2">
                        Nguyên tắc Bảo mật Cốt lõi của Web3
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-[#4B5563] max-w-2xl mx-auto px-2">
                        The Web3 Privacy Core
                    </p>
                </motion.div>

                {/* Privacy Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {privacyPrinciples.map((principle, index) => (
                        <motion.div
                            key={principle.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-md transition-all duration-300 border border-gray-100"
                        >
                            {/* Icon */}
                            <div className="mb-4 sm:mb-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mt-2 sm:mt-4 bg-[#2563EB] rounded-lg sm:rounded-xl flex items-center justify-center">
                                    <IconifyIcon
                                        icon={principle.icon}
                                        className="text-white text-xl sm:text-2xl md:text-3xl"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-base sm:text-lg md:text-xl font-sora text-[#111827] mb-3 sm:mb-4 leading-tight sm:leading-loose">
                                {principle.title}
                            </h3>

                            {/* Principle Section */}
                            <div className="mb-3 sm:mb-4">
                                <h4 className="text-sm sm:text-base font-medium text-[#2563EB] mb-1 sm:mb-2">
                                    {principle.principle}
                                </h4>
                                <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed sm:leading-loose">
                                    {principle.principleText}
                                </p>
                            </div>

                            {/* Commitment Section */}
                            <div className='mb-3 sm:mb-4'>
                                <h4 className="text-sm sm:text-base font-medium text-[#2563EB] mb-1 sm:mb-2">
                                    {principle.commitment}
                                </h4>
                                <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed sm:leading-loose">
                                    {principle.commitmentText}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Web3PrivacyCore;
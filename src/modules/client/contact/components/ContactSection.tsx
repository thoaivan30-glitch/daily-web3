'use client';

import React from 'react';
import { motion } from 'framer-motion';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';

export const ContactSection: React.FC = () => {
    return (
        <div className="w-full bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* First Section: Why Partner with Us */}
                <motion.div
                    className="mb-12 sm:mb-16 md:mb-20 lg:mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Title */}
                    <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sora text-[#111827] mb-3 sm:mb-4 px-2">
                            Tại sao Hợp tác với Chúng tôi?
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-[#4B5563] max-w-2xl mx-auto leading-relaxed px-4">
                            Khám phá những lợi ích độc đáo mà việc hợp tác Web3 mang lại
                        </p>
                    </div>

                    {/* Benefits Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {/* Card 1: Minh bạch Tuyệt đối */}
                        <motion.div
                            className="bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg sm:col-span-2 lg:col-span-1"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className="mb-4 sm:mb-6">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#3B82F6] rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                                    <IconifyIcon icon="mdi:link-variant" className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                </div>
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-sora text-[#111827] mb-2 sm:mb-3">
                                    Minh bạch Tuyệt đối
                                </h3>
                                <div className="space-y-2 mb-3 sm:mb-4">
                                    <p className="text-sm sm:text-base font-medium text-[#374151] leading-6 sm:leading-7">
                                        <span className="text-[#3B82F6] font-semibold">Lợi ích:</span> Tích hợp sản phẩm của bạn vào Lịch sử Chuỗi Cung Ứng, cung cấp bằng chứng xác thực không thể chối cãi.
                                    </p>
                                </div>
                                <div className="text-sm sm:text-base text-[#4B5563] leading-6 sm:leading-7">
                                    <span className="font-semibold text-[#1F2937]">Tác động:</span> Tăng cường lòng tin và chống hàng giả.
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Kết nối Cộng đồng Sâu sắc */}
                        <motion.div
                            className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="mb-4 sm:mb-6">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                                    <IconifyIcon icon="mdi:account-group" className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                </div>
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-sora text-[#111827] mb-2 sm:mb-3">
                                    Kết nối Cộng đồng Sâu sắc
                                </h3>
                                <div className="space-y-2 mb-3 sm:mb-4">
                                    <p className="text-sm sm:text-base font-medium text-[#374151] leading-6 sm:leading-7">
                                        <span className="font-semibold text-[#8B5CF6]">Lợi ích:</span> Sản phẩm được Cộng đồng DAO bỏ phiếu chọn làm đối tác chính thức.
                                    </p>
                                </div>
                                <div className="text-sm sm:text-base text-[#4B5563] leading-6 sm:leading-7">
                                    <span className="font-semibold text-[#1F2937]">Tác động:</span> Tiếp cận đối tượng tiêu dùng công nghệ và trung thành.
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 3: Mô hình Doanh thu Đổi mới */}
                        <motion.div
                            className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg sm:col-span-2 lg:col-span-1"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <div className="mb-4 sm:mb-6">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                                    <IconifyIcon icon="mdi:diamond-stone" className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                </div>
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-sora text-[#111827] mb-2 sm:mb-3">
                                    Mô hình Doanh thu Đổi mới
                                </h3>
                                <div className="space-y-2 mb-3 sm:mb-4">
                                    <p className="text-sm sm:text-base font-medium text-[#374151] leading-6 sm:leading-7">
                                        <span className="font-semibold text-[#F59E0B]">Lợi ích:</span> Tạo NFT độc quyền liên kết với sản phẩm vật lý, mở ra dòng doanh thu thứ cấp.
                                    </p>
                                </div>
                                <div className="text-sm sm:text-base text-[#4B5563] leading-6 sm:leading-7">
                                    <span className="font-semibold text-[#1F2937]">Tác động:</span> Tăng lợi nhuận và giá trị thương hiệu.
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Second Section: Partnership Types */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {/* Section Title */}
                    <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] px-2">
                            Các Hình thức Hợp tác Chính
                        </h2>
                    </div>

                    {/* Partnership Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {/* Card 1: Tích hợp Sản phẩm */}
                        <motion.div
                            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100 sm:col-span-2 lg:col-span-1"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <div className="text-left">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#3B82F6] to-[#A855F7] rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                                    <IconifyIcon icon="material-symbols:storefront" className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <h3 className="text-base sm:text-lg lg:text-xl font-sora text-[#111827] mb-3 sm:mb-4">
                                    Tích hợp Sản phẩm
                                </h3>
                                <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                                    Đưa sản phẩm vật lý/dịch dụng hàng ngày của bạn vào Marketplace của chúng tôi, có thể kèm theo NFT chứng nhận.
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 2: Hợp tác DAO */}
                        <motion.div
                            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <div className="text-left">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#A855F7] to-[#EC4899] rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                                    <IconifyIcon icon="ion:checkbox" className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <h3 className="text-base sm:text-lg lg:text-xl font-sora text-[#111827] mb-3 sm:mb-4">
                                    Hợp tác DAO
                                </h3>
                                <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                                    Đề xuất các sáng kiến chung để phát triển hoặc cải tiến sản phẩm thông qua quy trình bỏ phiếu của cộng đồng.
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 3: Hợp tác Công nghệ */}
                        <motion.div
                            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100 sm:col-span-2 lg:col-span-1"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            <div className="text-left">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#22C55E] to-[#3B82F6] rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                                    <IconifyIcon icon="solar:code-outline" className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <h3 className="text-base sm:text-lg lg:text-xl font-sora text-[#111827] mb-3 sm:mb-4">
                                    Hợp tác Công nghệ
                                </h3>
                                <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                                    Cùng phát triển các tính năng Web3 mới (Ví lưu trữ đồ liệu, Cộng cụ theo dõi Chuỗi cung ứng).
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactSection;
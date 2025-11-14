'use client';

import React from 'react';
import { motion } from 'framer-motion';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';

// Individual Card Components for Data Collection
const RequiredTransactionInfoCard: React.FC = () => (
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0 }}
        className="bg-white shadow-xl hover:shadow-2xl rounded-2xl p-6 sm:p-8 border border-gray-100"
    >
        <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#DCFCE7] rounded-lg flex items-center justify-center flex-shrink-0">
                <IconifyIcon
                    icon="icon-park-solid:people-bottom"
                    className="text-[#16A34A] text-xl sm:text-2xl"
                />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-sora text-[#111827] flex-1 mx-2 sm:mx-4 leading-tight">
                1. Thông tin Bắt buộc cho Giao dịch
            </h3>
        </div>

        <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed sm:leading-loose mb-3 sm:mb-4">
            <strong>Khi mua hàng với ví:</strong> Tên, địa chỉ giao hàng, số điện thoại, và thông tin thanh toán (nếu chọn thanh toán Fiat).
        </p>

        <p className="text-sm sm:text-base text-[#166534] px-3 sm:px-5 py-2 sm:py-3 bg-[#F0FDF4] font-medium leading-relaxed sm:leading-loose rounded-lg">
            Cam kết: Các thông tin này được mã hóa và chỉ dùng cho mục đích giao nhận.
        </p>
    </motion.div>
);

const AutomaticInfoCard: React.FC = () => (
    <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white shadow-xl hover:shadow-2xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-100"
    >
        <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#DBEAFE] rounded-lg flex items-center justify-center flex-shrink-0">
                <IconifyIcon
                    icon="mdi:chart-line"
                    className="text-[#2563EB] text-xl sm:text-2xl"
                />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-sora text-[#111827] flex-1 mx-2 sm:mx-4 leading-tight">
                2. Thông tin Tự động
            </h3>
        </div>

        <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed sm:leading-loose mb-3 sm:mb-4">
            <strong>Dữ liệu phân tích:</strong> Địa chỉ IP, loại trình duyệt, thời gian truy cập (dùng cho mục đích phân tích UX/UI nội bộ).
        </p>

        <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed sm:leading-loose">
            <strong>Cookies:</strong> Sử dụng cookies để cải thiện trải nghiệm mua sắm, ưu tiên các công cụ phân tích không yêu cầu định danh cá nhân.
        </p>
    </motion.div>
);

// Single Data Sharing Card with 3 Columns
const DataSharingCard: React.FC = () => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-100"
    >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Shipping Partner Column */}
            <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#FFEDD5] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <IconifyIcon
                        icon="bxs:truck"
                        className="text-[#EA580C] text-2xl sm:text-3xl md:text-4xl"
                    />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#111827] mb-2 sm:mb-3">
                    Đối tác Vận chuyển
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed px-2">
                    Chia sẻ địa chỉ giao hàng với đối tác vận chuyển (Viettel Post, FedEx).
                </p>
            </div>

            {/* Legal Requirement Column */}
            <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#FEE2E2] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <IconifyIcon
                        icon="fa7-solid:gavel"
                        className="text-[#DC2626] text-2xl sm:text-3xl md:text-4xl"
                    />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#111827] mb-2 sm:mb-3">
                    Yêu cầu Pháp lý
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed px-2">
                    Có thể tiết lộ thông tin khi có yêu cầu hợp pháp từ cơ quan chính phủ.
                </p>
            </div>

            {/* Security Commitment Column */}
            <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#DCFCE7] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <IconifyIcon
                        icon="mdi:shield-half-full"
                        className="text-[#16A34A] text-2xl sm:text-3xl md:text-4xl"
                    />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#111827] mb-2 sm:mb-3">
                    Cam kết Bảo mật
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed px-2">
                    Không bao giờ bán dữ liệu cá nhân cho bên thứ ba vì mục đích tiếp thị.
                </p>
            </div>
        </div>
    </motion.div>
);

// Individual Card Components for User Rights
const AccessRightCard: React.FC = () => (
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl border border-gray-100"
    >
        <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F3E8FF] rounded-lg flex items-center justify-center flex-shrink-0">
                <IconifyIcon
                    icon="mdi:eye"
                    className="text-[#9333EA] text-xl sm:text-2xl"
                />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-sora text-[#111827] flex-1 mx-2 sm:mx-4 leading-tight">
                Quyền Truy cập & Sửa chữa
            </h3>
        </div>

        <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed sm:leading-loose mb-3">
            Bạn có quyền truy cập và yêu cầu sửa chữa thông tin cá nhân (đối với dữ liệu không on-chain).
        </p>
    </motion.div>
);

const ForgottenRightCard: React.FC = () => (
    <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl border border-gray-100"
    >
        <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FEE2E2] rounded-lg flex items-center justify-center flex-shrink-0">
                <IconifyIcon
                    icon="bx:bxs-eraser"
                    className="text-[#DC2626] text-xl sm:text-2xl"
                />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-sora text-[#111827] flex-1 mx-2 sm:mx-4 leading-tight">
                Quyền &ldquo;Được Lãng Quên&rdquo;
            </h3>
        </div>

        <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed sm:leading-loose mb-3">
            Bạn có thể yêu cầu xóa dữ liệu cá nhân không liên quan đến giao dịch on-chain khỏi máy chủ trung tâm của chúng tôi.
        </p>

        <div className="bg-[#FEFCE8] border border-orange-200 rounded-lg p-2 sm:p-3">
            <p className="text-xs sm:text-sm text-[#854D0E] font-medium">
                Lưu ý: dữ liệu trên Blockchain là vĩnh viễn và không thể xóa.
            </p>
        </div>
    </motion.div>
);

const PrivacyDataOverviewCard: React.FC = () => {

    return (
        <div className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                {/* Data Collection Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-[#111827] text-center mb-8 sm:mb-10 md:mb-12 px-2">
                        Các Loại Thông tin Chúng tôi Thu thập
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                        <RequiredTransactionInfoCard />
                        <AutomaticInfoCard />
                    </div>
                </motion.div>

                {/* Data Sharing Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-16"
                >
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-[#111827] text-center mb-8 sm:mb-10 md:mb-12 px-2">
                        Chia sẻ Thông tin
                    </h2>

                    <div className="max-w-6xl mx-auto">
                        <DataSharingCard />
                    </div>
                </motion.div>

                {/* User Rights Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-[#111827] text-center mb-8 sm:mb-10 md:mb-12 px-2">
                        Quyền lợi của Bạn
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                        <AccessRightCard />
                        <ForgottenRightCard />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyDataOverviewCard;
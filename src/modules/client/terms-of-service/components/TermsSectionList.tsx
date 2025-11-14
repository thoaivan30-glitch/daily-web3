'use client';

import React from 'react';
import { motion } from 'framer-motion';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';

const TermsSectionList: React.FC = () => {
    return (
        <div className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16"
                >
                    <motion.div 
                        className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-4 sm:mb-6 md:mb-8"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex items-center justify-center flex-shrink-0 mb-2 sm:mb-0">
                            <IconifyIcon
                                icon="fa7-solid:scroll"
                                className="text-[#2563EB] text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                            />
                        </div>
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#000000] leading-tight text-center sm:text-left">
                            <span className="block sm:inline">Điều Khoản Dịch Vụ: Định Nghĩa Các</span>
                            <span className="block">Quyền và Nghĩa Vụ Của Bạn</span>
                        </h1>
                    </motion.div>
                    <motion.p 
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-[#64748B] max-w-4xl mx-auto leading-relaxed px-2 sm:px-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Các Điều khoản Sử dụng này điều chỉnh việc bạn truy cập và sử dụng các dịch vụ của chúng
                        tôi, bao gồm các dịch vụ sản phẩm vật lý và giao dịch tài sản số (NFT, Token). Bằng việc
                        sử dụng nền tảng của chúng tôi, bạn đồng ý tuân thủ các điều khoản này.
                    </motion.p>
                </motion.div>

                {/* Section I - General Terms */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="mb-6 sm:mb-8 md:mb-12"
                >
                    <motion.div 
                        className="bg-[#00A3FF] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 text-white"
                        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <motion.div 
                            className="flex items-center mb-4 sm:mb-6 md:mb-8"
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                        >
                            <IconifyIcon
                                icon="fa7-solid:gavel"
                                className="text-[#2563EB] text-2xl sm:text-3xl md:text-4xl mr-2 sm:mr-3"
                            />
                            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                                I. Điều khoản Chung
                            </h2>
                        </motion.div>

                        <motion.div 
                            className="space-y-4 sm:space-y-6 md:space-y-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                        >
                            <motion.div 
                                className="border-l-4 border-[#2563EB] pl-3 sm:pl-4 md:pl-5 py-1"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1.4 }}
                            >
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
                                    1. Chấp nhận Điều khoản
                                </h3>
                                <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed">
                                    Bằng cách kết nối ví (Wallet Connection) hoặc tạo tài khoản (nếu có), bạn xác nhận rằng bạn đã đọc và đồng ý với
                                    các điều khoản này.
                                </p>
                            </motion.div>

                            <motion.div 
                                className="border-l-4 border-[#2563EB] pl-3 sm:pl-4 md:pl-5 py-1"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1.6 }}
                            >
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
                                    2. Tính đủ điều kiện
                                </h3>
                                <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed">
                                    Người dùng phải đủ tuổi quy định và có quyền hợp pháp để tham gia vào các giao dịch theo luật pháp hiện hành.
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Section II - Web3 Services and Risks */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
                    className="mb-6 sm:mb-8 md:mb-12"
                >
                    <motion.div 
                        className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-[#EF44444D]"
                        whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 2.0 }}
                    >
                        <motion.div 
                            className="flex items-center mb-4 sm:mb-6"
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 2.2 }}
                        >
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                                <IconifyIcon
                                    icon="material-symbols:warning-rounded"
                                    className="text-[#FB923C] text-3xl sm:text-4xl"
                                />
                            </div>
                            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#000000]">
                                II. Giao dịch Web3 và Rủi ro
                            </h2>
                        </motion.div>

                        <motion.div 
                            className="space-y-4 sm:space-y-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 2.4 }}
                        >
                            {/* Private Key Warning */}
                            <motion.div 
                                className="bg-white rounded-xl shadow-xl p-4 sm:p-6 md:p-8 border border-gray-200"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 2.6 }}
                                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                            >
                                <motion.div 
                                    className="w-6 h-6 rounded-full flex items-center justify-center mb-4 mx-auto"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 2.8 }}
                                >
                                    <IconifyIcon
                                        icon="solar:key-bold"
                                        className="text-[#FACC15] text-xl sm:text-2xl"
                                    />
                                </motion.div>
                                <div>
                                    <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-4">
                                        Người dùng chịu trách nhiệm duy nhất về tính bảo mật của ví điện tử của mình (Private Keys, Seed Phrases).
                                        Chúng tôi không chịu trách nhiệm về bất kỳ tổn thất nào phát sinh do mất ví hoặc truy cập trái phép.
                                    </p>

                                    <div className="bg-[#FF000029] border border-[#EF444480] rounded-lg p-3 sm:p-4">
                                        <p className="text-base text-[#FF0000] font-medium">
                                            <strong>Quy định:</strong> Thanh toán bằng tiền mã hóa là cuối cùng và không thể đảo ngược (Final and Irreversible) sau khi
                                            giao dịch được xác nhận trên Blockchain.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Volatility Warning */}
                            <motion.div 
                                className="bg-white shadow-xl rounded-lg p-4 sm:p-6 md:p-8 border border-gray-200"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 3.0 }}
                                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                            >
                                <div className="flex items-start">
                                    <div className="flex-1">
                                        <p className="text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed mb-4">
                                            Người dùng thừa nhận rằng giá trị của tiền mã hóa và NFT là biến động (volatile). Chúng tôi không đưa ra bất kỳ
                                            đảm bảo nào về giá trị tương lai của bất kỳ Token hoặc NFT nào được mua trên nền tảng.
                                        </p>

                                        <motion.button 
                                            className="bg-[#2563EB] py-2 sm:py-3 text-white px-3 sm:px-4 rounded-lg text-xs sm:text-sm hover:bg-[#1D4ED8] transition-colors flex items-center"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <IconifyIcon
                                                icon="mdi:open-in-new"
                                                className="mr-2 text-lg sm:text-xl"
                                            />
                                            Xem Tuyên bố Miễn trừ Trách nhiệm Rủi ro Chi tiết
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>

                            {/* NFT Purchase Rights */}
                            <motion.div 
                                className="bg-white rounded-lg p-4 shadow-xl sm:p-6 md:p-8 border border-gray-200"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 3.2 }}
                                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                            >
                                <motion.div 
                                    className="w-6 h-6 rounded-full flex items-center justify-center mb-4 mx-auto"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 3.4 }}
                                >
                                    <IconifyIcon
                                        icon="material-symbols:imagesmode-sharp"
                                        className="text-[#C084FC] text-xl sm:text-2xl"
                                    />
                                </motion.div>
                                <div>
                                    <p className="text-xs sm:text-sm md:text-base text-[#4B5563] leading-relaxed">
                                        Khi bạn mua một NFT, bạn sở hữu Token trên Blockchain và các quyền sử dụng nghệ thuật/sở hữu trí tuệ liên
                                        quan được quy định trong hợp đồng thông minh (Smart Contract). Quyền này không bao gồm quyền sở hữu
                                        Thương hiệu hoặc Logo của chúng tôi.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Section III - User Conduct and Behavior */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3.6, ease: "easeOut" }}
                    className="mb-6 sm:mb-8 md:mb-12"
                >
                    <div className="bg-[#00A3FF] rounded-xl sm:rounded-2xl py-8 sm:py-12 p-6 sm:p-8 text-white">
                        <div className="flex items-center mb-6">
                            <IconifyIcon
                                icon="mdi:account-group"
                                className="text-[#4ADE80] text-4xl mr-3"
                            />
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                                III. Nội dung Người dùng và Hành vi
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div className="border-l-4 border-[#EF4444] pl-4">
                                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                                    1. Hành vi bị cấm
                                </h3>
                                <p className="text-sm sm:text-base max-w-4xl text-blue-100 leading-relaxed">
                                    Cấm lừa đảo, mạo danh, gửi spam, hoặc bất kỳ hành vi bất hợp pháp nào khác. Đặc biệt là các hành vi thao
                                    túng thị trường NFT/Token.
                                </p>
                            </div>

                            <div className="border-l-4 border-[#3B82F6] pl-4">
                                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                                    2. Dữ liệu Blockchain là Công khai
                                </h3>
                                <p className="text-sm sm:text-base max-w-4xl text-blue-100 leading-relaxed">
                                    Người dùng thừa nhận rằng các hoạt động và giao dịch on-chain của họ là dữ liệu công khai và có thể được truy cập
                                    thông qua các công cụ như Etherscan.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Section IV - DAO Management */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mb-8 sm:mb-12"
                >
                    <div className="bg-gradient-to-br from-[#581C8733] to-[#1E3A8A00] rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#A855F74D]">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-3">
                                <IconifyIcon
                                    icon="ion:checkbox"
                                    className="text-[#C084FC] text-4xl"
                                />
                            </div>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#111827]">
                                IV. Quy tắc Quản trị DAO
                            </h2>
                        </div>

                        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-6">
                            Việc tham gia Quản trị DAO bị ràng buộc bởi các quy tắc của Hợp đồng Thông minh DAO. Việc bỏ phiếu là tự nguyện, và kết quả bỏ phiếu là ràng buộc đối với cộng đồng và nền tảng.
                        </p>

                        <div className="bg-[#581C874D] text-white py-5 rounded-lg p-4">
                            <p className="text-base font-medium">
                                <strong>Lưu ý:</strong> Quyền lực bỏ phiếu phụ thuộc vào số lượng Token sở hữu/stake và có thể bị thay đổi bởi chính DAO.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Section V - Service Termination and Legal */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="mb-8 sm:mb-12"
                >
                    <div className="bg-[#00A3FF] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
                        <div className="flex items-center py-5 mb-6">
                            <IconifyIcon
                                icon="mdi:scale-balance"
                                className="text-[#FACC15] text-4xl mr-3"
                            />
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                                V. Chấm dứt Dịch vụ và Luật Điều chỉnh
                            </h2>
                        </div>

                        <p className="text-sm sm:text-base text-white leading-relaxed mb-6">
                            Chúng tôi có quyền tạm ngưng hoặc chấm dứt quyền truy cập của người dùng nếu vi phạm nghiêm trọng các điều khoản
                            này.
                        </p>

                        <div className="border-l-4 border-[#FACC15] pl-4">
                            <p className="text-sm sm:text-base text-white font-medium">
                                <strong>Luật Điều chỉnh:</strong> Các điều khoản này được điều chỉnh bởi luật pháp của [Quốc gia/Vùng lãnh thổ].
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Section VI - Contact */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="mb-8 sm:mb-12"
                >
                    <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#3B82F64D]">
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                                <IconifyIcon
                                    icon="mdi:email"
                                    className="text-[#60A5FA] text-4xl"
                                />
                            </div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#000000]">
                                VI. Liên hệ
                            </h2>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <button className="bg-[#2563EB] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1D4ED8] transition-colors flex items-center">
                                <IconifyIcon
                                    icon="octicon:law-16"
                                    className="mr-2 text-xl"
                                />
                                Liên hệ Bộ phận Pháp lý
                            </button>

                            <div className="flex items-center text-sm sm:text-base text-[#64748B]">
                                <IconifyIcon
                                    icon="material-symbols:alternate-email"
                                    className="mr-2 text-lg"
                                />
                                Email: legal@web3platform.com
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Footer - Effective Date */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="text-center pt-8 border-t border-black"
                >
                    <div className="flex items-center justify-center text-sm text-[#6B7280]">
                        <IconifyIcon
                            icon="material-symbols:calendar-month-rounded"
                            className="mr-2 text-lg"
                        />
                        Ngày có hiệu lực: 15 Tháng 11, 2024
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TermsSectionList;
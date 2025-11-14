'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';

interface FormErrors {
    companyName?: string;
    activity?: string;
    contactPerson?: string;
    email?: string;
    partnershipType?: string;
    message?: string;
}

export const FormContact: React.FC = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        activity: '',
        contactPerson: '',
        email: '',
        partnershipType: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        // Company name validation
        if (!formData.companyName.trim()) {
            newErrors.companyName = 'Tên doanh nghiệp là bắt buộc';
        } else if (formData.companyName.trim().length < 2) {
            newErrors.companyName = 'Tên doanh nghiệp phải có ít nhất 2 ký tự';
        }

        // Activity validation
        if (!formData.activity.trim()) {
            newErrors.activity = 'Lĩnh vực hoạt động là bắt buộc';
        }

        // Contact person validation
        if (!formData.contactPerson.trim()) {
            newErrors.contactPerson = 'Tên người liên hệ là bắt buộc';
        } else if (formData.contactPerson.trim().length < 2) {
            newErrors.contactPerson = 'Tên người liên hệ phải có ít nhất 2 ký tự';
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email là bắt buộc';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Email không hợp lệ';
        }

        // Partnership type validation
        if (!formData.partnershipType) {
            newErrors.partnershipType = 'Vui lòng chọn hình thức hợp tác';
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Thông điệp là bắt buộc';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Thông điệp phải có ít nhất 10 ký tự';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitSuccess(false);

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            console.log('Form submitted:', formData);
            setSubmitSuccess(true);

            // Reset form after successful submission
            setFormData({
                companyName: '',
                activity: '',
                contactPerson: '',
                email: '',
                partnershipType: '',
                message: ''
            });
        } catch (error) {
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Title */}
                <motion.div
                    className="text-center mb-8 sm:mb-12 lg:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sora text-[#111827] mb-4 px-2">
                        Thông tin Liên hệ Chuyên biệt
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">

                    {/* Left Column - Partnership Form */}
                    <motion.div
                        className="bg-gradient-to-br from-[#F9FAFB] to-[#EFF6FF] rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-sora text-[#111827] mb-4 sm:mb-6">
                            Biểu mẫu Liên hệ Hợp tác
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            {/* Company Name and Activity */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#374151] mb-2">
                                        Tên Doanh nghiệp
                                    </label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg transition-colors text-sm sm:text-base ${errors.companyName
                                                ? 'border-red-300 focus:ring-red-500'
                                                : 'border-gray-300 focus:ring-blue-500'
                                            }`}
                                        placeholder=""
                                    />
                                    {errors.companyName && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                            <IconifyIcon icon="material-symbols:error" className="w-4 h-4" />
                                            {errors.companyName}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#374151] mb-2">
                                        Lĩnh vực Hoạt động
                                    </label>
                                    <input
                                        type="text"
                                        name="activity"
                                        value={formData.activity}
                                        onChange={handleInputChange}
                                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg transition-colors text-sm sm:text-base ${errors.activity
                                                ? 'border-red-300 focus:ring-red-500'
                                                : 'border-gray-300 focus:ring-blue-500'
                                            }`}
                                        placeholder=""
                                    />
                                    {errors.activity && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                            <IconifyIcon icon="material-symbols:error" className="w-4 h-4" />
                                            {errors.activity}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Contact Person and Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#374151] mb-2">
                                        Tên/Chức vụ Người liên hệ
                                    </label>
                                    <input
                                        type="text"
                                        name="contactPerson"
                                        value={formData.contactPerson}
                                        onChange={handleInputChange}
                                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg transition-colors text-sm sm:text-base ${errors.contactPerson
                                                ? 'border-red-300 focus:ring-red-500'
                                                : 'border-gray-300 focus:ring-blue-500'
                                            }`}
                                        placeholder=""
                                    />
                                    {errors.contactPerson && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                            <IconifyIcon icon="material-symbols:error" className="w-4 h-4" />
                                            {errors.contactPerson}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#374151] mb-2">
                                        Email Liên hệ Chính thức
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg transition-colors text-sm sm:text-base ${errors.email
                                                ? 'border-red-300 focus:ring-red-500'
                                                : 'border-gray-300 focus:ring-blue-500'
                                            }`}
                                        placeholder=""
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                            <IconifyIcon icon="material-symbols:error" className="w-4 h-4" />
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Partnership Type */}
                            <div>
                                <label className="block text-sm font-medium text-[#374151] mb-2">
                                    Hình thức Hợp tác Quan tâm nhất
                                </label>
                                <select
                                    name="partnershipType"
                                    value={formData.partnershipType}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg transition-colors appearance-none bg-white text-sm sm:text-base ${errors.partnershipType
                                            ? 'border-red-300 focus:ring-red-500'
                                            : 'border-gray-300 focus:ring-blue-500'
                                        }`}
                                >
                                    <option value="">Chọn hình thức hợp tác</option>
                                    <option value="product-integration">Tích hợp Sản phẩm</option>
                                    <option value="dao-collaboration">Hợp tác DAO</option>
                                    <option value="technology-partnership">Hợp tác Công nghệ</option>
                                </select>
                                {errors.partnershipType && (
                                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                        <IconifyIcon icon="material-symbols:error" className="w-4 h-4" />
                                        {errors.partnershipType}
                                    </p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium text-[#374151] mb-2">
                                    Thông điệp
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg transition-colors resize-none text-sm sm:text-base ${errors.message
                                            ? 'border-red-300 focus:ring-red-500'
                                            : 'border-gray-300 focus:ring-blue-500'
                                        }`}
                                    placeholder="Mô tả về xuất của bạn..."
                                />
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                        <IconifyIcon icon="material-symbols:error" className="w-4 h-4" />
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            {/* Success Message */}
                            {submitSuccess && (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                    <div className="flex items-center gap-2 text-green-800">
                                        <IconifyIcon icon="material-symbols:check-circle" className="w-5 h-5" />
                                        <span className="font-medium">Gửi thành công!</span>
                                    </div>
                                    <p className="text-sm text-green-700 mt-1">
                                        Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
                                    </p>
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base ${isSubmitting
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#B45309]'
                                    } text-white`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <IconifyIcon icon="material-symbols:hourglass-empty" className="w-5 h-5 animate-spin" />
                                        Đang gửi...
                                    </>
                                ) : (
                                    <>
                                        <IconifyIcon icon="material-symbols:send" className="w-5 h-5" />
                                        Gửi Đề xuất
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* Right Column - Direct Contact */}
                    <motion.div
                        className="rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="bg-gradient-to-br from-[#FAF5FF] to-[#EEF2FF] rounded-xl sm:rounded-2xl p-4 sm:p-6">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-sora text-[#111827] mb-6 sm:mb-8">
                                Liên hệ Trực tiếp
                            </h3>

                            <div className="space-y-4 sm:space-y-6">

                                {/* Business Development Contact */}
                                <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6">
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#8B5CF6] to-[#A855F7] rounded-lg flex items-center justify-center flex-shrink-0">
                                            <IconifyIcon icon="material-symbols:business-center" className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h4 className="text-base sm:text-lg font-semibold text-[#111827] mb-1 sm:mb-2">
                                                Quản lý Phát triển Kinh doanh
                                            </h4>
                                            <p className="text-[#8B5CF6] font-medium text-sm sm:text-base break-all">
                                                partnerships@web3commerce.com
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Press Contact */}
                                <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6">
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-lg flex items-center justify-center flex-shrink-0">
                                            <IconifyIcon icon="material-symbols:newspaper" className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h4 className="text-base sm:text-lg font-semibold text-[#111827] mb-1 sm:mb-2">
                                                Liên hệ Báo chí
                                            </h4>
                                            <p className="text-[#3B82F6] font-medium mb-1 text-sm sm:text-base break-all">
                                                press@web3commerce.com
                                            </p>
                                            <p className="text-xs sm:text-sm text-[#6B7280]">
                                                (Chỉ dành cho truyền thông)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Important Notice */}
                            <div className="bg-gradient-to-br from-[#FEF3C7] to-[#FFEDD5] border border-yellow-200 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-l-[#F59E0B] mt-6">
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0">
                                        <IconifyIcon icon="fa7-solid:lightbulb" className="w-4 h-4 sm:w-5 sm:h-5 text-[#F59E0B]" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm sm:text-base font-semibold text-[#111827] mb-1 sm:mb-2">
                                            Lưu ý quan trọng
                                        </h4>
                                        <p className="text-xs sm:text-sm text-[#374151] leading-relaxed">
                                            Để đảm bảo hiệu quả tối đa, vui lòng sử dụng đúng kênh liên lạc phù hợp với mục đích hợp tác của bạn.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default FormContact;
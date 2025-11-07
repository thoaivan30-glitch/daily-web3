'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';
import { motion, AnimatePresence } from 'framer-motion';
import { BannerSlide } from '../models/home.types';
import { homeService } from '../services/home.service';




export const BannerCarousel: React.FC = () => {
    const bannerSlides: BannerSlide[] = homeService.getBannerSlides();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, bannerSlides.length]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const currentBanner = bannerSlides[currentSlide];

    return (
        <div className="relative max-w-7xl mx-auto py-4 md:py-6 lg:py-10 px-2 md:px-4">
            {/* Main Banner */}
            <div className="relative bg-[#212844] rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden transition-colors duration-500">
                {/* Hình trang trí - Ẩn trên mobile */}
                <div className="absolute inset-0 overflow-hidden hidden md:block">
                    {/* Hình oval lớn phía trên bên phải */}
                    {/* Border bên ngoài */}
                    <div
                        className="absolute"
                        style={{
                            width: '500px',
                            height: '651.9px',
                            top: '-380.58px',
                            left: '790px',
                            border: '1px solid #3C466B',
                            borderRadius: '50%',
                            margin: '10px 20px 20px 0px',
                        }}
                    ></div>
                    {/* Hình chính */}
                    <div
                        className="absolute border border-[#2c3357] bg-[#2C3454]"
                        style={{
                            width: '480px',
                            height: '631.9px',
                            top: '-370.58px',
                            left: '800px',
                            opacity: 1,
                            borderRadius: '50%',
                        }}
                    ></div>

                    {/* Hình oval nhỏ phía dưới hiển thị nửa */}
                    {/* Border bên ngoài */}
                    <div
                        className="absolute"
                        style={{
                            width: '200px',
                            height: '240px',
                            bottom: '-120px',
                            right: '200px',
                            border: '1px solid #3C466B',
                            borderRadius: '50%',
                            margin: '0px 0px 10px 10px',
                        }}
                    ></div>
                    {/* Hình chính */}
                    <div
                        className="absolute border border-[#2c3357] bg-[#2C3454] opacity-80"
                        style={{
                            width: '180px',
                            height: '220px',
                            bottom: '-110px',
                            right: '210px',
                            borderRadius: '50%',
                        }}
                    ></div>
                </div>

                {/* Nội dung chính */}
                <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 tracking-wider gap-4 md:gap-6 lg:gap-8 items-center min-h-[300px] md:min-h-[350px] lg:min-h-[450px] py-6 md:py-8 lg:py-0">
                        {/* Left text */}
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={currentSlide}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 30 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="text-white space-y-2 md:space-y-3 lg:space-y-6 ml-0 md:ml-6 lg:ml-10 mb-8 md:mb-16 lg:mb-28 z-10"
                            >
                                <motion.p 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1, duration: 0.4 }}
                                    className="text-sm md:text-lg lg:text-3xl font-hk-grotesk font-medium"
                                >
                                    {currentBanner.subtitle} 
                                </motion.p>
                                <motion.h1 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.4 }}
                                    className="text-2xl md:text-4xl lg:text-6xl font-hk-grotesk font-bold leading-tight whitespace-normal md:whitespace-nowrap"
                                >
                                    {currentBanner.title}
                                </motion.h1>
                                <motion.p 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.4 }}
                                    className="text-base md:text-xl lg:text-3xl font-hk-grotesk font-medium"
                                >
                                    {currentBanner.discount}
                                </motion.p>
                            </motion.div>
                        </AnimatePresence>

                        {/* Right image */}
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={currentSlide}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="relative flex items-center justify-center lg:justify-end"
                            >
                                <Image
                                    src={currentBanner.image}
                                    alt={currentBanner.title}
                                    width={270}
                                    height={350}
                                    className="relative z-10 w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[360px] lg:h-[360px] object-contain"
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-16 ml-0 md:ml-10 mb-4 md:mb-7 flex gap-2 z-10">
                    {bannerSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'w-6 md:w-8 bg-white'
                                : 'w-1.5 md:w-2 bg-white/50 hover:bg-white/70'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Navigation Arrows - Half outside banner */}
            <button
                onClick={prevSlide}
                className="absolute -left-[20px] md:-left-[35px] lg:-left-[35px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[86px] lg:h-[86px] bg-[#F3F9FB] hover:bg-gray-100 rounded-full flex items-center justify-center transition-all duration-300 z-50 group cursor-pointer"
                aria-label="Previous slide"
            >
                <IconifyIcon
                    icon="si:chevron-left-alt-duotone"
                    className="text-[#00A8E8] group-hover:scale-110 transition-transform"
                    width={18}
                    height={20}
                />
            </button>

            <button
                onClick={nextSlide}
                className="absolute -right-[20px] md:-right-[35px] lg:-right-[35px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[86px] lg:h-[86px] bg-[#F3F9FB] hover:bg-gray-100 rounded-full flex items-center justify-center transition-all duration-300 z-50 group cursor-pointer"
                aria-label="Next slide"
            >
                <IconifyIcon
                    icon="si:chevron-right-alt-duotone"
                    className="text-[#00A8E8] group-hover:scale-110 transition-transform"
                    width={18}
                    height={20}
                />
            </button>
        </div>
    );
};

export default BannerCarousel;

import { BannerSlide, CategoryNavigationBar, FlashSaleProduct, DailyEssentialProduct, Category } from '../models/home.types';
import mockData from '../mocks/home.mock.json';

export const homeService = {
    getBannerSlides: (): BannerSlide[] => {
        return mockData.bannerSlides;
    },
    getCategoryNavigationBar: (): CategoryNavigationBar[] => {
        return mockData.CategoryNavigationBar;
    },
    getFlashSaleProducts: (): FlashSaleProduct[] => {
        return mockData.FlashSaleProduct;
    },
    getDailyEssentialProducts: (): DailyEssentialProduct[] => {
        return mockData.DailyEssentialProduct;
    },
    getTopCategories: (): Category[] => {
        return mockData.TopCategories;
    }
};

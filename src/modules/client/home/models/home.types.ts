
export interface BannerSlide {
    id: number;
    title: string;
    subtitle: string;
    discount: string;
    image: string;
}

export interface CategoryNavigationBar {
    name: string;
    subcategories?: string[];
}

export interface DailyEssentialProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    priceInUSD: number;
    image: string;
    badge?: {
        icon: string;
        text: string;
    };
}

export interface FlashSaleProduct {
    id: number;
    name: string;
    image: string;
    originalPrice: number;
    salePrice: number;
    discount: number;
    savings: number;
}

export interface Category {
    id: number;
    name: string;
    image: string;
}

export interface BrandCard {
    id: number;
    brand: string;
    logo: string;
    discount: string;
    productImage: string;
    bgColor: string;
    ellipseColor: string;
    discountColor?: string;
}
export interface EssentialCard {
    id: number;
    title: string;
    discount: string;
    image: string;
    bgColor: string;
}

export interface AboutFeature {
    id: number;
    icon: string;
    iconColor: string;
    iconBg: string;
    title: string;
    description: string;
}

export interface ShoppingCategory {
    id: number;
    title: string;
    description: string;
    image: string;
}

export interface JoinDaoBenefit {
    id: number;
    text: string;
}

export interface JoinDaoData {
    title: string;
    description: string;
    benefits: JoinDaoBenefit[];
    buttonText: string;
    image: string;
}

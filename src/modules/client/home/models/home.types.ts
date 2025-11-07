
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

import { Product, Category, FilterOptions, SortOption } from '../models/shop.types';
import mockData from '../mocks/shop.mock.json';

export class ShopService {
  static getProducts(filters?: FilterOptions, sort?: SortOption): Product[] {
    let products = [...mockData.products] as Product[];

    // Apply filters
    if (filters) {
      if (filters.categories.length > 0) {
        products = products.filter(p => filters.categories.includes(p.category));
      }

      if (filters.priceRange) {
        products = products.filter(
          p => p.price >= filters.priceRange.min && p.price <= filters.priceRange.max
        );
      }

      if (filters.features.length > 0) {
        products = products.filter(p =>
          p.features.some(f => filters.features.includes(f.type))
        );
      }
    }

    // Apply sorting
    if (sort) {
      switch (sort) {
        case 'price-low':
          products.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          products.sort((a, b) => b.price - a.price);
          break;
        case 'newest':
          // Assuming newer products have higher IDs
          products.sort((a, b) => parseInt(b.id) - parseInt(a.id));
          break;
        case 'best-selling':
        default:
          // Keep default order
          break;
      }
    }

    return products;
  }

  static getCategories(): Category[] {
    return mockData.categories as Category[];
  }

  static getProductById(id: string): Product | undefined {
    return mockData.products.find(p => p.id === id) as Product | undefined;
  }

  static getTotalProducts(): number {
    return mockData.products.length;
  }
}

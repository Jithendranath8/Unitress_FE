import { create } from 'zustand';
import { productData as initialProducts } from '../data/mockData';

export const useProductStore = create((set) => ({
  products: initialProducts,
  updateProduct: (updatedProduct) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      ),
    })),
  deleteProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
}));

import { PRODUCTS } from "../model/products";

export const ProductService = {
  getAllProducts: () => {
    return PRODUCTS;
  },

  getProductById: (id) => {
    return PRODUCTS.find((p) => p.id === id);
  },

  getInitialProductId: () => {
    return PRODUCTS[0]?.id || null;
  },

  getProductOptions: () => {
    return PRODUCTS.map((p) => ({
      id: p.id,
      name: p.name,
      price: p.price,
    }));
  },
};

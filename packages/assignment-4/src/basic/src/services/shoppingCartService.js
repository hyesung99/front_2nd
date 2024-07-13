export const ShoppingCartService = {
  addItem: (items, product) => {
    const newItems = { ...items };
    if (newItems[product.id]) {
      newItems[product.id].quantity += 1;
    } else {
      newItems[product.id] = { ...product, quantity: 1 };
    }
    return newItems;
  },

  updateQuantity: (items, productId, change) => {
    const newItems = { ...items };
    if (newItems[productId]) {
      newItems[productId].quantity += change;
      if (newItems[productId].quantity <= 0) {
        delete newItems[productId];
      }
    }
    return newItems;
  },

  removeItem: (items, productId) => {
    const newItems = { ...items };
    delete newItems[productId];
    return newItems;
  },

  getTotal: (items) => {
    return Object.values(items).reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  },
};

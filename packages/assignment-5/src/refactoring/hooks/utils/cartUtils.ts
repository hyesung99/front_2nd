import { CartItem, Coupon } from "../../../types";

export const calculateItemTotal = (item: CartItem) => {
  const baseTotal = item.product.price * item.quantity;
  const discountRate = getMaxApplicableDiscount(item);
  return baseTotal * (1 - discountRate); // 할인율을 적용
};

export const getMaxApplicableDiscount = (item: CartItem) => {
  if (!item.product.discounts || item.product.discounts.length === 0) {
    return 0;
  }

  const applicableDiscounts = item.product.discounts.filter(
    (discount) => item.quantity >= discount.quantity
  );

  if (applicableDiscounts.length === 0) {
    return 0;
  }

  const maxDiscountRate = applicableDiscounts.reduce(
    (maxRate, discount) => Math.max(maxRate, discount.rate),
    0
  );

  return maxDiscountRate;
};

export const calculateCartTotal = (
  cart: CartItem[],
  selectedCoupon: Coupon | null
) => {
  const totalBeforeDiscount = cart.reduce(
    (acc, item) => acc + calculateItemTotal(item),
    0
  );
  const totalAfterDiscount = cart.reduce(
    (acc, item) => acc + calculateItemTotal(item),
    0
  );
  const totalDiscount = cart.reduce(
    (acc, item) => acc + calculateItemTotal(item),
    0
  );
  return {
    totalBeforeDiscount,
    totalAfterDiscount,
    totalDiscount,
  };
};

export const updateCartItemQuantity = (
  cart: CartItem[],
  productId: string,
  newQuantity: number
): CartItem[] => {
  return [];
};

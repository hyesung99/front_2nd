import { useState } from "react";
import { Coupon } from "../model/coupons/coupons.type";

export const useCoupons = (initialCoupons: Coupon[]) => {
  const [coupons, setCoupons] = useState<Coupon[]>(initialCoupons);

  const addCoupon = ({ coupon }: { coupon: Coupon }) => {
    setCoupons([...coupons, coupon]);
  };

  const removeCoupon = ({ coupon }: { coupon: Coupon }) => {
    setCoupons(
      coupons.filter((searchCoupon) => coupon.code !== searchCoupon.code)
    );
  };

  return { coupons, addCoupon, removeCoupon };
};

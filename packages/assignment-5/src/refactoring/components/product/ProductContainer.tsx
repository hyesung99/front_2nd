import { Product } from "../../../types";
import { useCart } from "../../hooks";
import { useAddProductButtonProps } from "../../hooks/useAddProductButtonProps";
import { getRemainingStock } from "../../hooks/utils/productUtils";
import AddProductButton from "./AddProductButton";
import { ProductCard } from "./ProductCard";

interface ProductContainerProps {
  products: Product[];
}

export const ProductContainer = ({ products }: ProductContainerProps) => {
  const { cart, addToCart } = useCart();

  const handleAddProductButtonClick = (product: Product) => {
    addToCart(product);
  };

  return (
    <>
      {products.map((product) => {
        const remainingStock = getRemainingStock(cart, product);
        return (
          <ProductCard
            key={product.id}
            product={product}
            remainingStock={remainingStock}
          >
            <AddProductButton
              onClick={() => handleAddProductButtonClick(product)}
              {...useAddProductButtonProps(remainingStock)}
            />
          </ProductCard>
        );
      })}
    </>
  );
};

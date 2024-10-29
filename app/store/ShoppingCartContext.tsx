import { createFileSessionStorage } from "@remix-run/node";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { IProduct } from "~/interfaces/product";

type Cart = {
  items: IProduct[] | [];
  subTotal: number;
  tax: number;
  shipping: number;
  total: number;
};

type ShoppingCartContextType = {
  cart: Cart;
  addProduct: (product: IProduct) => void;
};

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(
  undefined
);

const cartInitialState: Cart = {
  items: [],
  subTotal: 0,
  tax: 0.23,
  total: 0,
  shipping: 5.5,
};

export const ShoppingCartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Cart>(cartInitialState);

  const addProduct = (product: IProduct) => {
    setCart((prevCart) => {
      let totalPrice = prevCart.items
        .map((item) => item.price)
        .reduce((acc, val) => acc + val, 0);

      totalPrice += product.price;

      return {
        ...prevCart,
        items: [...prevCart.items, product],
        subTotal: totalPrice,
      };
    });
  };

  useEffect(() => {}, [cart]);

  return (
    <ShoppingCartContext.Provider value={{ cart, addProduct }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = (): ShoppingCartContextType => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  return context;
};

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
  tax: 0,
  total: 0,
  shipping: 0,
};

export const ShoppingCartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Cart>(cartInitialState);

  const addProduct = (product: IProduct) => {
    setCart((prevCart) => ({
      ...prevCart,
      items: [...prevCart.items, product],
    }));

    updateShoppingCart(product);
  };

  const updateShoppingCart = (product: IProduct) => {
    console.table(product);
  };

  useEffect(() => {
    //
  }, [cart]);

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

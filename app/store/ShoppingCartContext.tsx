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
};

type ShoppingCartContextType = {
  cart: Cart;
  addProduct: (product: IProduct) => void;
};

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(
  undefined
);

const cartInitialState = { items: [] };

export const ShoppingCartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Cart>(cartInitialState);

  const addProduct = (product: IProduct) => {
    setCart((prevCart) => ({
      ...prevCart,
      items: [...prevCart.items, product],
    }));
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

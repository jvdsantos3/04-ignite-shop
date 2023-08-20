import { ReactNode, createContext, useState } from "react";

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
}

interface CartContextProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cartQuantity: number;
  addToCart: (product: IProduct) => void;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartQuantity, setCartQuantity] = useState(0)

  function addToCart(product: IProduct) {
  }

  return (
    <CartContext.Provider
      value={{
        cartQuantity,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
} 
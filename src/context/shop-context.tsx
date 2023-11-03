import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

interface ShopContextValue {
  cartItems: { [key: number]: number };
  setCartItems: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>;
  // updateCartItemAmount: (newAmount: number, id: number) => void;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  getTotalCartAmount: () => number;
}

export const ShopContext = createContext<ShopContextValue>({
  cartItems: {},
  setCartItems: () => {},
  addToCart: (id: number) => {},
  removeFromCart: (id: number) => {},
  // updateCartItemAmount: (newAmount: number, id: number) => {},
  getTotalCartAmount: () => 0,
});

const getDefaultCart = () => {
  let cart: { [key: number]: number } = {};
  for (let i = 0; i < PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

type ReactNode = React.ReactNode;

interface ShopContextProviderProps {
  children: ReactNode;
}

export default function ShopContextProvider(props: ShopContextProviderProps) {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  function getTotalCartAmount() {
    let totalAmount = 0;

    for (const itemId in cartItems) {
      const quantity = cartItems[itemId];
      const itemInfo = PRODUCTS.find(
        (product) => product.id === Number(itemId),
      );

      if (quantity > 0 && itemInfo) {
        const price = parseFloat(itemInfo.price.toString());
        totalAmount += quantity * (isNaN(price) ? 0 : price);
      }
    }

    return totalAmount;
  }

  function addToCart(id: number) {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  }
  function removeFromCart(id: number) {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  }

  // function updateCartItemAmount(newAmount: number, id: number) {
  //   setCartItems((prev) => ({ ...prev, [id]: newAmount }));
  // }

  const contextValue = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    // updateCartItemAmount,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

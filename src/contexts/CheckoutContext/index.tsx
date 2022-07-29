import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type Coffee = {
  id: string;
  title: string;
  imagePath: string;
  category: string[];
  description: string;
  price: number;
  amount: number;
};

interface CheckoutContextData {
  cart: Coffee[];
  totalItems: number;
  addCoffeeToCart: (coffee: Coffee) => void;
  removeCoffe: (coffeeId: string) => void;
  incrementAmountCoffe: (coffeeId: string) => void;
  decrementAmountCoffe: (coffeeId: string) => void;
  handleAmountCoffe: (coffeeId: string, value: string) => void;
}

interface CoffeesContextProviderProps {
  children: ReactNode;
}

export const CheckoutContext = createContext({} as CheckoutContextData);

export function CheckoutContextProvider({ children }: CoffeesContextProviderProps) {
  const local: Coffee[] = JSON.parse(localStorage.getItem("@COFFEE") as string);

  const [cart, setCart] = useState<Coffee[]>(local || []);

  useEffect(() => {
    localStorage.setItem("@COFFEE", JSON.stringify(cart));
  }, [cart]);

  function addCoffeeToCart(coffee: Coffee) {
    setCart((state) => {
      const existingCoffe = state.find((item) => item.id === coffee.id);
      const existingCoffeLocal = local.find((item) => item.id === coffee.id);

      if (!existingCoffe) {
        return [...state, coffee];
      } else if (existingCoffeLocal) {
        return state;
      }

      return state;
    });
  }

  function removeCoffe(coffeId: string) {
    setCart((state) => state.filter((item) => item.id !== coffeId));
  }

  function incrementAmountCoffe(coffeId: string) {
    setCart((state) =>
      state.map((item) =>
        item.id === coffeId
          ? { ...item, amount: item.amount < 99 ? item.amount + 1 : item.amount }
          : item
      )
    );
  }

  function decrementAmountCoffe(coffeId: string) {
    setCart((state) =>
      state.map((item) =>
        item.id === coffeId
          ? { ...item, amount: item.amount > 1 ? item.amount - 1 : item.amount }
          : item
      )
    );
  }

  function handleAmountCoffe(coffeId: string, value: string) {
    setCart((state) =>
      state.map((item) =>
        item.id === coffeId ? { ...item, amount: Number(value) } : item
      )
    );
  }

  const totalItems = cart
    .map((item) => item.amount * item.price)
    .reduce((total, item) => total + item, 0);

  return (
    <CheckoutContext.Provider
      value={{
        cart,
        totalItems,
        addCoffeeToCart,
        removeCoffe,
        incrementAmountCoffe,
        handleAmountCoffe,
        decrementAmountCoffe,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export const useCheckout = () => useContext(CheckoutContext);

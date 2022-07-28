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

interface CoffeesContextData {
  coffees: Coffee[];
  handleIncrementCoffee: (id: string) => void;
  handleDecrementCoffee: (id: string) => void;
  handleAmountCoffee: (id: string, value: string) => void;
}

interface CoffeesContextProviderProps {
  children: ReactNode;
}

export const CoffeesContext = createContext({} as CoffeesContextData);

export function CoffeesContextProvider({ children }: CoffeesContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([
    {
      id: "1",
      title: "Expresso Tradicional",
      imagePath: "./coffe.svg",
      category: ["Tradicional"],
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.99,
      amount: 1,
    },
    {
      id: "2",
      title: "Expresso Americano",
      imagePath: "./coffe-2.svg",
      category: ["Tradicional"],
      description: "Expresso diluído, menos intenso que o tradicional",
      price: 9.99,
      amount: 1,
    },
    {
      id: "3",
      title: "Expresso Cremoso",
      imagePath: "./coffe-3.svg",
      category: ["Tradicional"],
      description: "Café expresso tradicional com espuma cremosa",
      price: 9.99,
      amount: 1,
    },
    {
      id: "4",
      title: "Expresso Gelado",
      imagePath: "./coffe-4.svg",
      category: ["Tradicional", "Gelado"],
      description: "Café expresso tradicional com espuma cremosa",
      price: 9.99,
      amount: 1,
    },
  ]);

  function handleIncrementCoffee(id: string) {
    setCoffees((state) =>
      state.map((coffee) =>
        coffee.id === id && coffee.amount < 99 ? { ...coffee, amount: coffee.amount + 1 } : coffee
      )
    );
  }

  function handleDecrementCoffee(id: string) {
    setCoffees((state) =>
      state.map((coffee) =>
        coffee.id === id && coffee.amount > 1 ? { ...coffee, amount: coffee.amount - 1 } : coffee
      )
    );
  }

  function handleAmountCoffee(id: string, value: string) {
    setCoffees((state) =>
      state.map((coffee) =>
        coffee.id === id ? { ...coffee, amount: Number(value) } : coffee
      )
    );
  }

  return (
    <CoffeesContext.Provider
      value={{ coffees, handleIncrementCoffee, handleDecrementCoffee, handleAmountCoffee }}
    >
      {children}
    </CoffeesContext.Provider>
  );
}

export const useCoffees = () => useContext(CoffeesContext);
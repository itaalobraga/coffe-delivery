import { Coffee, Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useEffect, useRef, useState } from "react";
import { CheckoutContext, useCheckout } from "../../../../contexts/CheckoutContext";
import { CoffeesContext, useCoffees } from "../../../../contexts/CoffeesContext";
import {
  CoffeCartButton,
  CoffeCategories,
  CoffeeImage,
  CoffeePrice,
  CoffeInputArea,
  CoffeInteractionArea,
  CoffeWrapper,
  OursCoffeesCard,
} from "./styles";

type Coffee = {
  id: string;
  title: string;
  imagePath: string;
  category: string[];
  description: string;
  price: number;
  amount: number;
};

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const convertedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    currencyDisplay: "code",
  }).format(coffee.price);

  const { handleIncrementCoffee, handleDecrementCoffee, handleAmountCoffee } =
    useCoffees();

  const { addCoffeeToCart } = useCheckout();

  return (
    <OursCoffeesCard>
      <CoffeeImage>
        <img src={coffee.imagePath} />
      </CoffeeImage>
      <CoffeCategories>
        {coffee.category.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </CoffeCategories>
      <h1>{coffee.title}</h1>
      <p>{coffee.description}</p>
      <CoffeWrapper>
        <CoffeePrice>
          R$ <span>{convertedPrice.slice(4, convertedPrice.length)}</span>
        </CoffeePrice>
        <CoffeInteractionArea>
          <CoffeInputArea>
            <button type="button" onClick={() => handleDecrementCoffee(coffee.id)}>
              <Minus size={14} />
            </button>
            <input
              type="number"
              min={1}
              max={99}
              value={String(coffee.amount)}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length <= 2) {
                  handleAmountCoffee(coffee.id, value);
                }
                return;
              }}
            />
            <button type="button" onClick={() => handleIncrementCoffee(coffee.id)}>
              <Plus size={14} />
            </button>
          </CoffeInputArea>
          <CoffeCartButton type="button" onClick={() => addCoffeeToCart(coffee)}>
            <ShoppingCart size={22} weight="fill" />
          </CoffeCartButton>
        </CoffeInteractionArea>
      </CoffeWrapper>
    </OursCoffeesCard>
  );
}

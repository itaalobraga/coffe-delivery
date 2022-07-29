import { Minus, Plus, Trash } from "phosphor-react";
import { useCheckout } from "../../../../contexts/CheckoutContext";
import { Button, CoffeesSelectedInfo, Image, InputArea, Wrapper } from "./styles";

type Item = {
  id: string;
  title: string;
  imagePath: string;
  category: string[];
  description: string;
  price: number;
  amount: number;
};

type CheckoutCardProps = {
  item: Item;
};

export function CheckoutCard({ item }: CheckoutCardProps) {
  const ItemPriceAmount = item.amount * item.price;

  const convertedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(ItemPriceAmount);

  const { removeCoffe, incrementAmountCoffe, decrementAmountCoffe, handleAmountCoffe } =
    useCheckout();

  return (
    <CoffeesSelectedInfo>
      <Image>
        <img src={"/coffe.svg"} />
      </Image>
      <div>
        <h1>{item.title}</h1>
        <Wrapper>
          <InputArea>
            <button type="button" onClick={() => decrementAmountCoffe(item.id)}>
              <Minus size={14} />
            </button>
            <input
              type="number"
              min={1}
              max={99}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length <= 2) {
                  handleAmountCoffe(item.id, value);
                }
                return;
              }}
              value={item.amount}
            />
            <button type="button" onClick={() => incrementAmountCoffe(item.id)}>
              <Plus size={14} />
            </button>
          </InputArea>
          <Button type="button" onClick={() => removeCoffe(item.id)}>
            <Trash size={16} weight="fill" />
            Remover
          </Button>
        </Wrapper>
      </div>
      <span>{convertedPrice}</span>
    </CoffeesSelectedInfo>
  );
}

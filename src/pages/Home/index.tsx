import {
  Apresentation,
  ApresentationBanner,
  ApresentationText,
  FeaturedContainer,
  HomeContainer,
  OursCoffees,
  OursCoffeesWrapper,
} from "./styles";

import coffeCup from "../../assets/coffe-cup.png";
import { ShoppingCart } from "phosphor-react";
import { Featured } from "./components/Featured";
import { ReactNode } from "react";
import { CoffeeCard } from "./components/CoffeeCard";
import { useCoffees } from "../../contexts/CoffeesContext";

type Features = {
  icon: ReactNode;
  title: string;
  version: "one" | "two" | "three" | "four";
};

export function Home() {
  const features: Features[] = [
    {
      version: "one",
      title: "Compra simples e segura",
      icon: <ShoppingCart size={16} weight="fill" color="white" />,
    },
    {
      version: "two",
      title: "Embalagem mantém o café intacto",
      icon: <ShoppingCart size={16} weight="fill" color="white" />,
    },
    {
      version: "three",
      title: "Entrega rápida e rastreada",
      icon: <ShoppingCart size={16} weight="fill" color="white" />,
    },
    {
      version: "four",
      title: "O café chega fresquinho até você",
      icon: <ShoppingCart size={16} weight="fill" color="white" />,
    },
  ];

  const { coffees } = useCoffees();

  return (
    <HomeContainer>
      <Apresentation>
        <ApresentationText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <FeaturedContainer>
            {features.map((featured) => (
              <Featured
                icon={<ShoppingCart size={16} weight="fill" color="white" />}
                title={featured.title}
                version={featured.version}
                key={featured.version}
              />
            ))}
          </FeaturedContainer>
        </ApresentationText>
        <ApresentationBanner>
          <img src={coffeCup} />
        </ApresentationBanner>
      </Apresentation>
      <OursCoffees>
        <h1>Nossos cafés</h1>
        <OursCoffeesWrapper>
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              coffee={coffee}
            />
          ))}
        </OursCoffeesWrapper>
      </OursCoffees>
    </HomeContainer>
  );
}

import { NavLink, Outlet } from "react-router-dom";
import {
  Header,
  HomeTemplateContainer,
  Wrapper,
  Location,
  CartButton,
  Content,
} from "./styles";

import { MapPin, ShoppingCart } from "phosphor-react";

import Logo from "../../assets/logo.svg";

import { useCheckout } from "../../contexts/CheckoutContext";

export function HomeTemplate() {
  const { cart } = useCheckout()

  const totalItemsCart = cart.length;

  return (
    <HomeTemplateContainer>
      <Header>
        <NavLink to={"/"}>
          <img src={Logo} alt="" />
        </NavLink>
        <Wrapper isDisable={!totalItemsCart}>
          <Location>
            <MapPin size={22} weight="fill" />
            <h1>Porto Alegre, RS</h1>
          </Location>
          <NavLink to={"/checkout"}>
            <CartButton
              type="button"
              totalItemsCart={totalItemsCart}
              disabled={!totalItemsCart}
            >
              <ShoppingCart size={22} weight="fill" />
            </CartButton>
          </NavLink>
        </Wrapper>
      </Header>
      <Content>
        <Outlet />
      </Content>
    </HomeTemplateContainer>
  );
}

import styled, { css } from "styled-components";

import { darken } from "polished";

export const HomeTemplateContainer = styled.div``;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 5.75rem 10rem;

  @media (max-width: 992px) {
    padding: 5.75rem 5%;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 10rem;

  @media (max-width: 992px) {
    padding: 2rem 5%;
  }
`;

type WrapperProps = {
  isDisable: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 12.063rem;
  height: 2.375rem;

  ${(props) =>
    props.isDisable &&
    css`
      pointer-events: none;
    `}
`;

type CartButtonProps = {
  totalItemsCart: number;
};

export const CartButton = styled.button<CartButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.product["yellow-light"]};

  padding: 0.5rem;

  border-radius: 6px;

  transition: background-color ease-in-out 250ms;

  & > svg {
    color: ${(props) => props.theme.product["yellow-dark"]};
  }

  &:hover {
    background-color: ${(props) => darken(0.1, props.theme.product["yellow-light"])};
  }

  pointer-events: none;

  position: relative;

  &::after {
    content: ${(props) => `"${props.totalItemsCart && props.totalItemsCart}"`};

    line-height: 20px;

    width: 20px;
    height: 20px;

    position: absolute;

    right: -8.35px;
    top: -8px;

    background-color: ${(props) => props.theme.product["yellow-dark"]};
    color: ${(props) => props.theme.base.white};

    border-radius: 100%;

    font-weight: 700;
    font-size: ${(props) => props.theme.font.size[12]};
  }
`;

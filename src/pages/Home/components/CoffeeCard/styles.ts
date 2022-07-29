import styled from "styled-components";

import { darken } from "polished";

export const OursCoffeesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.theme.base["base-card"]};
  border-radius: 6px 36px;

  min-width: 16rem;
  min-height: 19.375rem;

  padding: 1.25rem 1.5rem;

  & > h1 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 700;
    font-size: ${(props) => props.theme.font.size[20]};

    line-height: 130%;

    color: ${(props) => props.theme.base["base-subtitle"]};

    margin-bottom: 0.5rem;
  }

  & > p {
    font-size: ${(props) => props.theme.font.size[14]};
    line-height: 130%;

    text-align: center;

    color: ${(props) => props.theme.base["base-label"]};
  }
`;

export const CoffeCategories = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  margin-bottom: 1rem;

  & > span {
    padding: 0.25rem 0.5rem;

    max-width: 5.063rem;
    height: 1.313rem;

    background-color: ${(props) => props.theme.product["yellow-light"]};
    border-radius: 100px;

    font-size: 10px;

    line-height: 130%;

    text-transform: uppercase;

    color: ${(props) => props.theme.product["yellow-dark"]};
  }
`;

export const CoffeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 208px;

  margin-top: 2.063rem;
`;

export const CoffeeImage = styled.div`
  margin: -2.5rem 0 0.75rem;
`;

export const CoffeePrice = styled.span`
  font-size: ${(props) => props.theme.font.size[14]};
  line-height: 130%;

  color: ${(props) => props.theme.base["base-text"]};

  & > span {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: ${(props) => props.theme.font.size[24]};
  }
`;

export const CoffeCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.product["purple-dark"]};

  padding: 0.5rem;

  border-radius: 6px;

  transition: background-color ease-in-out 250ms;

  & > svg {
    color: ${(props) => props.theme.base.white};
  }

  &:hover {
    background-color: ${(props) => darken(0.1, props.theme.product["purple-dark"])};
  }
`;

export const CoffeInteractionArea = styled.div`
  display: flex;
  justify-content: space-between;

  width: 118px;
`;

export const CoffeInputArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px;
  gap: 4px;

  width: 72px;
  height: 38px;

  background: ${(props) => props.theme.base["base-button"]};
  border-radius: 6px;

  & > input {
    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;

    width: 24px;

    color: ${(props) => props.theme.base["base-title"]};

    font-weight: 500;

    &:focus {
      border-bottom: 1px solid ${(props) => props.theme.product.purple};
    }

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
  }

  & > button > svg {
    color: ${(props) => props.theme.product["purple"]};
  }
`;
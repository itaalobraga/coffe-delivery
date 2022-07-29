import styled, { css } from "styled-components";

export const CheckoutContainer = styled.form`
  max-width: 70rem;
  width: 100%;

  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;

  & > div:first-child {
    max-width: 40rem;
  }

  & > div:last-child {
    max-width: 28rem;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const CheckoutForm = styled.div`
  padding: 2.5rem;

  width: 100%;
  min-height: 23.25rem;

  background-color: ${(props) => props.theme.base["base-card"]};

  border-radius: 6px;

  margin-bottom: 0.75rem;

  & > header {
    flex: 1;

    display: flex;
    gap: 0.5rem;

    & > svg {
      color: ${(props) => props.theme.product["yellow-dark"]};
    }

    & > div {
      & > h3 {
        font-weight: 500;
        font-size: ${(props) => props.theme.font.size[16]};
        line-height: 130%;

        color: ${(props) => props.theme.base["base-subtitle"]};
      }

      & > p {
        font-size: ${(props) => props.theme.font.size[14]};
        line-height: 130%;

        color: ${(props) => props.theme.base["base-text"]};
      }
    }
  }
`;

export const PaymentMethods = styled.div`
  padding: 2.5rem;

  width: 100%;
  min-height: 12.938rem;

  background-color: ${(props) => props.theme.base["base-card"]};

  border-radius: 6px;

  & > header {
    flex: 1;

    display: flex;
    gap: 0.5rem;

    & > svg {
      color: ${(props) => props.theme.product["purple"]};
    }

    & > div {
      & > h3 {
        font-weight: 500;
        font-size: ${(props) => props.theme.font.size[16]};
        line-height: 130%;

        color: ${(props) => props.theme.base["base-subtitle"]};
      }

      & > p {
        font-size: ${(props) => props.theme.font.size[14]};
        line-height: 130%;

        color: ${(props) => props.theme.base["base-text"]};
      }
    }
  }
`;

export const Methods = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  align-items: center;

  width: 100%;

  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

type MethodProps = {
  isSelected: boolean;
};

export const Method = styled.button<MethodProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: 1rem;

  width: 178.67px;
  height: 51px;

  background: ${(props) => props.theme.base["base-button"]};
  border-radius: 6px;

  :focus {
    outline: 0;
    box-shadow: none;
  }

  & > svg {
    color: ${(props) => props.theme.product["purple"]};
  }

  & > span {
    text-transform: uppercase;

    font-size: 12px;
    line-height: 160%;

    text-transform: uppercase;

    color: #574f4d;
  }

  ${(props) =>
    props.isSelected &&
    css`
      background: #ebe5f9;

      border: 1px solid #8047f8;
      border-radius: 6px;
    `}
`;

export const CoffeesSelected = styled.div`
  padding: 2.5rem;

  width: 100%;
  min-height: 31.125rem;
  background-color: ${(props) => props.theme.base["base-card"]};

  border-radius: 6px 44px;

  & > div {
    & > button {
      padding: 12px 8px;

      max-width: 368px;
      width: 100%;
      height: 46px;

      background: #dbac2c;
      border-radius: 6px;

      font-weight: 700;
      font-size: 14px;
      line-height: 160%;

      color: #ffffff;
    }
  }
`;

export const TotalItems = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.theme.font.size[14]};
  line-height: 130%;

  color: ${(props) => props.theme.base["base-text"]};

  margin-bottom: 0.8rem;
`;

export const Delivery = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.theme.font.size[14]};
  line-height: 130%;

  color: ${(props) => props.theme.base["base-text"]};

  margin-bottom: 0.8rem;
`;

export const TotalPrice = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => props.theme.font.size[20]};
  line-height: 130%;

  color: ${(props) => props.theme.base["base-subtitle"]};

  margin-bottom: 0.8rem;
`;

export const Title = styled.h1`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => props.theme.font.size[18]};
  line-height: 130%;

  color: ${(props) => props.theme.base["base-subtitle"]};

  margin-bottom: 0.938rem;
`;
